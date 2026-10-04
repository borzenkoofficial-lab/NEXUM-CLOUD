import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const port = Number(process.env.PORT || 8787);
const host = process.env.HOST || '0.0.0.0';
const MAX_BODY = 20_000;
const RATE_WINDOW = 60_000;
const RATE_LIMIT = 8;
const hits = new Map();

const mime = {
  '.html':'text/html; charset=utf-8',
  '.js':'text/javascript; charset=utf-8',
  '.mjs':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8',
  '.json':'application/json; charset=utf-8',
  '.svg':'image/svg+xml',
  '.png':'image/png',
  '.jpg':'image/jpeg',
  '.jpeg':'image/jpeg',
  '.webp':'image/webp',
  '.ico':'image/x-icon',
  '.woff':'font/woff',
  '.woff2':'font/woff2'
};

function json(res,status,payload){
  res.writeHead(status, {'content-type':'application/json; charset=utf-8','cache-control':'no-store'});
  res.end(JSON.stringify(payload));
}
function clientIp(req){
  const forwarded = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return forwarded || req.socket.remoteAddress || 'unknown';
}
function allowed(req){
  const now=Date.now();
  const key=clientIp(req);
  const recent=(hits.get(key)||[]).filter(t=>now-t<RATE_WINDOW);
  if(recent.length>=RATE_LIMIT){ hits.set(key,recent); return false; }
  recent.push(now); hits.set(key,recent);
  return true;
}
function clean(value,max=300){
  return String(value ?? '').replace(/[\u0000-\u001f\u007f]/g,' ').trim().slice(0,max);
}
function escapeHtml(value){
  return clean(value,1500).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function readJson(req){
  return new Promise((resolve,reject)=>{
    let size=0; let body='';
    req.on('data',chunk=>{
      size+=chunk.length;
      if(size>MAX_BODY){ reject(Object.assign(new Error('Payload too large'),{code:'PAYLOAD_TOO_LARGE'})); req.destroy(); return; }
      body+=chunk;
    });
    req.on('end',()=>{
      try{ resolve(JSON.parse(body || '{}')); }catch{ reject(Object.assign(new Error('Invalid JSON'),{code:'INVALID_JSON'})); }
    });
    req.on('error',reject);
  });
}
async function sendTelegram(lead){
  const token=process.env.TELEGRAM_BOT_TOKEN;
  const chatId=process.env.TELEGRAM_CHAT_ID;
  if(!token || !chatId) throw new Error('Telegram is not configured');

  const lines=[
    '<b>🔔 НОВАЯ ЗАЯВКА NEXUM CLOUD</b>',
    '',
    '<b>Имя:</b> '+escapeHtml(lead.name),
    '<b>Контакт:</b> '+escapeHtml(lead.contact),
    '<b>Услуга:</b> '+escapeHtml(lead.service),
    '<b>Бюджет:</b> '+escapeHtml(lead.budget),
    '<b>Срок:</b> '+escapeHtml(lead.deadline),
    lead.task ? '<b>Задача:</b> '+escapeHtml(lead.task) : '',
    lead.source ? '<b>Источник:</b> '+escapeHtml(lead.source) : '',
    lead.details ? '<b>Детали:</b> '+escapeHtml(lead.details) : '',
    '',
    '<i>'+new Date().toLocaleString('ru-RU')+'</i>'
  ].filter(Boolean).join('\n');

  const response=await fetch('https://api.telegram.org/bot'+encodeURIComponent(token)+'/sendMessage',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({chat_id:chatId,text:lines,parse_mode:'HTML',disable_web_page_preview:true})
  });
  if(!response.ok) throw new Error('Telegram HTTP '+response.status);
  const result=await response.json();
  if(!result.ok) throw new Error('Telegram rejected the message');
}

async function serveStatic(req,res){
  let pathname=new URL(req.url,'http://localhost').pathname;
  if(pathname==='/') pathname='/index.html';
  const relative=pathname.replace(/^\/+/, '');
  const file=normalize(join(dist,relative));
  if(!file.startsWith(normalize(dist))) return json(res,403,{error:'Forbidden'});
  try{
    const info=await stat(file);
    if(info.isFile()){
      res.writeHead(200,{'content-type':mime[extname(file)] || 'application/octet-stream'});
      createReadStream(file).pipe(res);
      return;
    }
  }catch{}
  try{
    const html=await readFile(join(dist,'index.html'));
    res.writeHead(200,{'content-type':'text/html; charset=utf-8'});
    res.end(html);
  }catch{
    json(res,503,{error:'Build not found. Run npm run build first.'});
  }
}

const server=createServer(async(req,res)=>{
  try{
    if(req.method==='GET' && req.url==='/api/health'){
      return json(res,200,{ok:true,service:'nexum-cloud-api'});
    }
    if(req.method==='POST' && req.url==='/api/brief'){
      if(!allowed(req)) return json(res,429,{ok:false,error:'Слишком много заявок. Попробуйте позже.'});
      const raw=await readJson(req);
      const lead={
        name:clean(raw.name,120),
        contact:clean(raw.contact,180),
        service:clean(raw.service,180),
        budget:clean(raw.budget,120),
        deadline:clean(raw.deadline,120),
        task:clean(raw.task,1500),
        source:clean(raw.source,120),
        details:clean(raw.details,1800)
      };
      if(!lead.name || !lead.contact) return json(res,400,{ok:false,error:'Укажите имя и контакт.'});
      if(!lead.service) return json(res,400,{ok:false,error:'Выберите услугу.'});
      if(!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID){
        return json(res,503,{ok:false,error:'Канал уведомлений пока не настроен.'});
      }
      await sendTelegram(lead);
      return json(res,200,{ok:true,message:'Заявка отправлена.'});
    }
    if(req.method!=='GET' && req.method!=='HEAD') return json(res,405,{ok:false,error:'Method not allowed'});
    return serveStatic(req,res);
  }catch(error){
    const status=error?.code==='PAYLOAD_TOO_LARGE'?413:error?.code==='INVALID_JSON'?400:500;
    console.error('[api]',error);
    return json(res,status,{ok:false,error:'Не удалось обработать заявку. Попробуйте ещё раз.'});
  }
});

server.listen(port,host,()=>console.log('NEXUM CLOUD API listening on '+host+':'+port));
