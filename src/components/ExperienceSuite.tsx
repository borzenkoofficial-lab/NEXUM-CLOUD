import { ArrowDownRight, ArrowUpRight, Check, Cpu, Globe2, Layers3, Sparkles, Workflow, X, Zap } from 'lucide-react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

const morphs = [
  { key:'WEB', title:'Digital product', copy:'Интерфейс, который превращает идею в работающий продукт.', stat:'WEB / EXPERIENCE' },
  { key:'MOBILE', title:'Mobile system', copy:'Сценарий продукта, собранный под маленький экран.', stat:'MOBILE / UX' },
  { key:'AI', title:'Intelligence layer', copy:'AI становится частью продукта, а не отдельной кнопкой.', stat:'AI / CONTEXT' },
  { key:'CRM', title:'Operating system', copy:'Данные, роли и процессы соединяются в одну рабочую среду.', stat:'CRM / OPERATIONS' },
];
const archive = [
  { n:'01', tag:'AI BUILDER', title:'Nexum.dev', text:'Среда для создания цифровых продуктов.', metric:'AI / PRODUCT' },
  { n:'02', tag:'AI CORE', title:'Nexum Core', text:'Интеллектуальное ядро и инструменты.', metric:'AI / INFRA' },
  { n:'03', tag:'MARKETPLACE', title:'Gruzli', text:'Система для заказчиков, диспетчеров и грузчиков.', metric:'MARKET / SYSTEM' },
];
const buildSteps = [
  ['01','ANALYZE','Задача и контекст'],
  ['02','DESIGN','Сценарий и визуальная система'],
  ['03','SYSTEM','Архитектура и логика'],
  ['04','BUILD','Интерфейс и интеграции'],
  ['05','VERIFY','Проверка и запуск'],
];

function DigitalCursor(){
  const x=useMotionValue(-100), y=useMotionValue(-100);
  const sx=useSpring(x,{stiffness:180,damping:24}), sy=useSpring(y,{stiffness:180,damping:24});
  const [label,setLabel]=useState('MOVE');
  useEffect(()=>{
    const onMove=(e:PointerEvent)=>{
      x.set(e.clientX); y.set(e.clientY);
      const target=(e.target as HTMLElement | null)?.closest('[data-cursor]');
      setLabel(target?.getAttribute('data-cursor') || 'MOVE');
    };
    window.addEventListener('pointermove',onMove);
    return()=>window.removeEventListener('pointermove',onMove);
  },[x,y]);
  return <motion.div className="nxc-cursor" style={{x:sx,y:sy}} aria-hidden="true"><span>{label}</span></motion.div>;
}

function ProductMorph(){
  const [active,setActive]=useState(0);
  const item=morphs[active];
  useEffect(()=>{const t=window.setInterval(()=>setActive(v=>(v+1)%morphs.length),4200);return()=>window.clearInterval(t)},[]);
  return <section className="nxc-morph" id="product-morph">
    <div className="nxc-morph-copy"><p className="eyebrow">01 / PRODUCT MORPH</p><h2>Один продукт.<br/><em>Любая форма.</em></h2><p>Одна цифровая система меняет форму вместе со сценарием: WEB, MOBILE, AI и CRM.</p><div className="nxc-morph-tabs">{morphs.map((m,i)=><button data-cursor="VIEW" key={m.key} className={active===i?'active':''} onClick={()=>setActive(i)}><span>0{i+1}</span>{m.key}</button>)}</div></div>
    <div className="nxc-morph-stage" data-cursor="EXPLORE">
      <motion.div className={"nxc-device nxc-device-"+item.key.toLowerCase()} key={item.key} initial={{opacity:0,scale:.84,rotateY:-18,y:30}} animate={{opacity:1,scale:1,rotateY:0,y:0}} transition={{duration:.7,ease:[.22,.8,.2,1]}}>
        <div className="nxc-device-top"><i/><i/><i/><span>nexum.cloud / {item.key}</span></div>
        <div className="nxc-device-body"><small>{item.stat}</small><strong>{item.title}</strong><p>{item.copy}</p><div className="nxc-device-grid"><i/><i/><i/><i/></div><b>READY / 2026</b></div>
      </motion.div>
      <div className="nxc-morph-orbit orbit-a"/><div className="nxc-morph-orbit orbit-b"/>
      <div className="nxc-morph-badge"><Sparkles size={13}/><span>LIVE MORPH</span><b>{String(active+1).padStart(2,'0')} / 04</b></div>
    </div>
  </section>;
}

function SystemDNA(){
  const [active,setActive]=useState(0);
  const nodes=[
    ['DESIGN','Visual system','Идея → интерфейс'],
    ['PRODUCT','Experience','Сценарий → действие'],
    ['AI','Intelligence','Контекст → ответ'],
    ['DATA','Structure','Данные → решение'],
    ['AUTOMATION','Flow','Событие → результат'],
  ];
  return <section className="nxc-dna" id="system-dna">
    <div className="nxc-dna-head"><div><p className="eyebrow">02 / SYSTEM DNA</p><h2>Один продукт.<br/><em>Много слоёв.</em></h2></div><p>Дизайн, продукт, AI, данные и автоматизация соединяются в одну систему.</p></div>
    <div className="nxc-dna-stage">
      <div className="nxc-dna-lines"><i/><i/><i/><i/></div>
      <div className="nxc-dna-core"><span>N</span><small>NEXUM SYSTEM</small></div>
      {nodes.map(([tag,title,text],i)=><button data-cursor="OPEN" key={tag} className={"nxc-dna-node nxc-dna-node-"+i+" "+(active===i?'active':'')} onClick={()=>setActive(i)}><span>{String(i+1).padStart(2,'0')}</span><b>{tag}</b><small>{title}</small></button>)}
      <AnimatePresence mode="wait"><motion.div className="nxc-dna-detail" key={nodes[active][0]} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}><span>{nodes[active][0]}</span><b>{nodes[active][1]}</b><p>{nodes[active][2]}</p></motion.div></AnimatePresence>
    </div>
  </section>;
}

function BuildIntelligence(){
  const [active,setActive]=useState(3);
  useEffect(()=>{const t=window.setInterval(()=>setActive(v=>(v+1)%buildSteps.length),1800);return()=>window.clearInterval(t)},[]);
  return <section className="nxc-build">
    <div className="nxc-build-head"><p className="eyebrow">03 / BUILD INTELLIGENCE</p><h2>Идея превращается<br/><em>в систему.</em></h2><p>Живая визуализация процесса: от контекста до проверки и запуска.</p></div>
    <div className="nxc-build-board">
      <div className="nxc-build-scan"><span>BUILDING / NEXUM</span><i><b style={{width:((active+1)/buildSteps.length*100)+'%'}}/></i><strong>{active<4?'IN PROGRESS':'READY'}</strong></div>
      <div className="nxc-build-steps">{buildSteps.map(([n,label,desc],i)=><button data-cursor="OPEN" key={n} className={i===active?'active':''} onClick={()=>setActive(i)}><span>{n}</span><div><b>{label}</b><small>{desc}</small></div><Check size={14}/></button>)}</div>
      <div className="nxc-build-core"><div className="nxc-build-ring ring-one"/><div className="nxc-build-ring ring-two"/><div className="nxc-build-orb"><Cpu size={21}/><span>NX</span></div><small>PROJECT<br/>STATE</small></div>
    </div>
  </section>;
}

function Archive(){
  const [open,setOpen]=useState<number|null>(null);
  return <section className="nxc-archive" id="archive">
    <div className="nxc-archive-head"><div><p className="eyebrow">04 / NEXUM ARCHIVE</p><h2>То, что мы<br/><em>строим сами.</em></h2></div><p>Архив собственных систем, на которых мы проверяем дизайн, технологию и продуктовую логику.</p></div>
    <div className="nxc-archive-stack">{archive.map((item,i)=><button data-cursor="OPEN" className={"nxc-archive-card "+(open===i?'open':'')} key={item.title} onClick={()=>setOpen(open===i?null:i)}><span>{item.n}</span><div><small>{item.tag}</small><h3>{item.title}</h3><p>{item.text}</p></div><div className="nxc-archive-meta"><b>{item.metric}</b><ArrowUpRight size={18}/></div>{open===i&&<motion.div className="nxc-archive-open" initial={{opacity:0}} animate={{opacity:1}}><div className="nxc-archive-window"><i/><i/><i/><strong>{item.title}</strong><span>CASE STUDY / SYSTEM PREVIEW</span></div><ArrowDownRight size={20}/></motion.div>}</button>)}</div>
  </section>;
}

function NexumOS(){
  const [open,setOpen]=useState(false);
  return <section className="nxc-os">
    <div className="nxc-os-copy"><p className="eyebrow">05 / NEXUM OS</p><h2>Цифровая среда<br/><em>в одном жесте.</em></h2><p>Скрытый слой интерфейса — маленькая пасхалка для тех, кто исследует продукт глубже.</p><button data-cursor="OPEN" className="nxc-os-trigger" onClick={()=>setOpen(true)}><Zap size={15}/> Открыть NEXUM OS</button></div>
    <div className="nxc-os-preview"><div className="nxc-os-bar"><span>NEXUM OS</span><span>2026</span></div><div className="nxc-os-icons"><i><Globe2/></i><i><Workflow/></i><i><Layers3/></i><i><Sparkles/></i></div><strong>N</strong></div>
    <AnimatePresence>{open&&<motion.div className="nxc-os-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><div className="nxc-os-window"><button className="nxc-os-close" onClick={()=>setOpen(false)} aria-label="Закрыть"><X size={18}/></button><div className="nxc-os-window-head"><span>NEXUM OS</span><b>DESKTOP / 2026</b></div><div className="nxc-os-window-main"><div className="nxc-os-big"><small>DIGITAL OPERATING LAYER</small><h3>Everything<br/><em>connects.</em></h3><p>PROJECTS · MARKET · SYSTEMS · AI</p></div><div className="nxc-os-apps">{['Projects','Market','Systems','AI Lab'].map((x,i)=><button key={x} data-cursor="OPEN"><span>{['◌','＋','◈','✦'][i]}</span><b>{x}</b><small>OPEN</small></button>)}</div></div></div></motion.div>}</AnimatePresence>
  </section>;
}

export default function ExperienceSuite(){
  return <div className="nxc-experience"><DigitalCursor/><ProductMorph/><SystemDNA/><BuildIntelligence/><Archive/><NexumOS/></div>;
}
