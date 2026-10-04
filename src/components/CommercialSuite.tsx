import { ArrowRight, Check, ChevronRight, FileText, MessageCircle, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { submitLead } from '../lib/lead';

const services = [
  {title:'Сайт / digital-продукт',price:'от 49 000 ₽',text:'Сайт, лендинг или цифровой продукт с UX/UI, адаптивом и запуском.',tags:['UX/UI','Разработка','Аналитика']},
  {title:'AI-ассистент',price:'от 39 000 ₽',text:'AI-функция или ассистент внутри сайта, Telegram или бизнес-процесса.',tags:['AI','Контекст','Интеграции']},
  {title:'Telegram-бот',price:'от 29 000 ₽',text:'Бот для заявок, продаж, уведомлений, поддержки и автоматизации.',tags:['Сценарии','CRM','Уведомления']},
  {title:'CRM / кабинет',price:'от 79 000 ₽',text:'Рабочая система для клиентов, менеджеров и внутренних процессов.',tags:['Роли','Данные','Процессы']},
  {title:'Автоматизация',price:'от 25 000 ₽',text:'Соединяем формы, CRM, Telegram, почту, оплату и другие сервисы.',tags:['API','Workflow','Контроль']},
  {title:'Запуск и инфраструктура',price:'от 7 000 ₽',text:'Домен, DNS, SSL, деплой, базовый мониторинг и передача проекта.',tags:['Домен','SSL','Deploy']},
];

const cases = [
  {name:'NEXUM.DEV',type:'AI builder',text:'Браузерная среда для создания цифровых продуктов.',result:'Product / AI / Web'},
  {name:'NEXUM CORE',type:'AI system',text:'Отдельное AI-ядро для моделей, контекста и инструментов.',result:'AI / Architecture'},
  {name:'GRUZLI',type:'Marketplace',text:'Цифровая платформа заказа грузчиков: заказчик → диспетчер → грузчик.',result:'Marketplace / CRM'},
];

const integrations = ['Telegram','CRM','Платежи','Аналитика','AI','API','Почта','Домен','SSL','Хостинг'];

const carePlans = [
  {name:'START',price:'15 000 ₽ / мес.',text:'Поддержка и небольшие изменения.',items:['Исправления','Контент','Мониторинг']},
  {name:'GROWTH',price:'35 000 ₽ / мес.',text:'Регулярное развитие продукта.',items:['Всё из START','Новые функции','Аналитика','Приоритетная очередь']},
  {name:'PRO',price:'от 60 000 ₽ / мес.',text:'Выделенное развитие цифровой системы.',items:['Всё из GROWTH','Интеграции','Продуктовые улучшения','Выделенное сопровождение']},
];

const questions = [
  {label:'Что создаём?',options:['Сайт','Telegram-бот','AI-ассистент','CRM / кабинет','Автоматизацию','Пока не знаю']},
  {label:'Главная задача?',options:['Продажи','Заявки','Автоматизация','Имидж','Внутренние процессы','Запуск нового продукта']},
  {label:'Нужны интеграции?',options:['Да','Нет','Нужно обсудить']},
  {label:'Ориентир бюджета?',options:['до 50 000 ₽','50–100 000 ₽','100–250 000 ₽','250 000 ₽+','Нужно оценить']},
];

export default function CommercialSuite(){
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState<string[]>([]);
  const [briefName,setBriefName]=useState('');
  const [briefContact,setBriefContact]=useState('');
  const [briefSubmitting,setBriefSubmitting]=useState(false);
  const [briefResult,setBriefResult]=useState<{ok:boolean;message?:string;error?:string}|null>(null);
  const progress=useMemo(()=>Math.round((step/questions.length)*100),[step]);

  const choose=(value:string)=>{
    const next=[...answers];
    next[step]=value;
    setAnswers(next);
    setStep(v=>Math.min(v+1,questions.length));
  };

  return <div className="commercial-suite">
    <section id="services" className="commercial-section commercial-services">
      <div className="commercial-head"><div><p className="eyebrow">NEXUM / SERVICES</p><h2>Не просто сайт.<br/><em>Готовая система.</em></h2></div><p>Собираем цифровые продукты под конкретную задачу бизнеса: от первой страницы до CRM, AI и автоматизации.</p></div>
      <div className="service-grid">
        {services.map((item,i)=><motion.a href="/market" className="service-card-pro" key={item.title} whileHover={{y:-5}} data-cursor="OPEN"><span className="service-number">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p><div className="service-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div><strong>{item.price}<ChevronRight size={16}/></strong></motion.a>)}
      </div>
    </section>

    <section id="cases" className="commercial-section cases-section">
      <div className="commercial-head compact"><div><p className="eyebrow">NEXUM / CASES</p><h2>Проекты, которые<br/><em>можно открыть.</em></h2></div><p>Показываем не только экран, но и систему за ним: сценарии, технологию и результат.</p></div>
      <div className="case-grid-pro">{cases.map((item,i)=><a className="case-card-pro" href="#projects" key={item.name} data-cursor="VIEW"><div className="case-window"><div className="case-window-bar"><i/><i/><i/><span>LIVE / 0{i+1}</span></div><div className="case-window-core"><b>{item.name}</b><small>{item.type}</small><div className="case-lines"><i/><i/><i/></div></div></div><div className="case-copy"><div><span>{item.type}</span><h3>{item.name}</h3></div><ArrowRight size={18}/></div><p>{item.text}</p><small>{item.result}</small></a>)}</div>
    </section>

    <section id="process" className="commercial-section process-section-pro">
      <div className="commercial-head compact"><div><p className="eyebrow">NEXUM / PROCESS</p><h2>От идеи<br/><em>до запуска.</em></h2></div><p>Понятный процесс без прыжков между подрядчиками и непонятных этапов.</p></div>
      <div className="process-track-pro">{['Бриф','Концепция','Дизайн','Разработка','Интеграции','Запуск'].map((x,i)=><div className="process-node-pro" key={x}><span>0{i+1}</span><i/><b>{x}</b><small>{['Фиксируем задачу','Строим структуру','Создаём интерфейс','Собираем продукт','Подключаем сервисы','Передаём систему'][i]}</small></div>)}</div>
    </section>

    <section id="brief" className="commercial-section brief-section-pro">
      <div className="brief-shell-pro"><div className="brief-intro"><p className="eyebrow">NEXUM / SMART BRIEF</p><h2>Расскажите<br/><em>что нужно собрать.</em></h2><p>Ответьте на несколько вопросов. В конце получите подготовленный запрос, который можно сразу отправить команде.</p><div className="brief-trust"><ShieldCheck size={17}/> Без регистрации · 2 минуты · без обязательств</div></div>
        <div className="brief-card-pro">{step<questions.length?<><div className="brief-top"><span>PROJECT BRIEF</span><b>{String(step+1).padStart(2,'0')} / {String(questions.length).padStart(2,'0')}</b></div><div className="brief-progress"><i style={{width:progress+'%'}}/></div><AnimatePresence mode="wait"><motion.div key={step} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}><p className="brief-question">{questions[step].label}</p><div className="brief-options">{questions[step].options.map(option=><button key={option} onClick={()=>choose(option)}>{option}<ChevronRight size={16}/></button>)}</div></motion.div></AnimatePresence></>:<div className="brief-done"><div className="brief-done-icon"><Check/></div><p className="eyebrow">BRIEF READY</p><h3>Проект собран.</h3><p>{answers.join(' · ')}</p><div className="brief-contact-fields"><input value={briefName} onChange={e=>setBriefName(e.target.value)} placeholder="Ваше имя" aria-label="Ваше имя" /><input value={briefContact} onChange={e=>setBriefContact(e.target.value)} placeholder="Telegram / телефон / MAX" aria-label="Контакт" /></div><button disabled={briefSubmitting||!briefName||!briefContact} onClick={async()=>{setBriefSubmitting(true);setBriefResult(null);const response=await submitLead({name:briefName,contact:briefContact,service:answers[0]||'Digital-проект',budget:answers[3]||'Не указан',deadline:'Уточнить',details:answers.map((v,i)=>questions[i].label+': '+v).join(' · '),source:'/brief'});setBriefResult(response);setBriefSubmitting(false)}} className="brief-submit">{briefSubmitting?'Отправляем…':'Отправить бриф'} <ArrowRight size={16}/></button>{briefResult&&<p className="brief-submit-status" aria-live="polite">{briefResult.ok?'✓ Бриф отправлен. Мы свяжемся с вами напрямую.':'⚠ '+briefResult.error}</p>}<button className="brief-reset" onClick={()=>{setAnswers([]);setStep(0);setBriefName('');setBriefContact('');setBriefResult(null)}}>Заполнить заново</button></div>}</div>
      </div>
    </section>

    <section id="integrations" className="commercial-section integration-section-pro"><div className="commercial-head compact"><div><p className="eyebrow">NEXUM / CONNECTED</p><h2>Подключаем<br/><em>всю систему.</em></h2></div><p>Если сервис имеет API или стандартную интеграцию, мы закладываем его в цифровой контур проекта.</p></div><div className="integration-cloud">{integrations.map((x,i)=><motion.div key={x} whileHover={{scale:1.04,y:-3}}><Sparkles size={14}/>{x}<span>0{i+1}</span></motion.div>)}</div></section>

    <section id="care" className="commercial-section care-section-pro"><div className="commercial-head compact"><div><p className="eyebrow">NEXUM / CARE</p><h2>После запуска<br/><em>мы остаёмся.</em></h2></div><p>Поддержка превращает разовую разработку в постоянно развивающийся цифровой продукт.</p></div><div className="care-grid-pro">{carePlans.map((plan,i)=><div className={'care-card-pro '+(i===1?'featured':'')} key={plan.name}><span>{plan.name}</span><h3>{plan.price}</h3><p>{plan.text}</p><ul>{plan.items.map(x=><li key={x}><Check size={14}/>{x}</li>)}</ul><a href="#brief">Подключить <ArrowRight size={15}/></a></div>)}</div></section>

    <section id="trust" className="commercial-section trust-section-pro"><div className="trust-strip"><div><ShieldCheck size={20}/><b>Прозрачный процесс</b><span>Понятные этапы и стоимость.</span></div><div><FileText size={20}/><b>Документы</b><span>Договор, оферта и политика.</span></div><div><Zap size={20}/><b>Запуск</b><span>Домен, SSL и передача проекта.</span></div><div><MessageCircle size={20}/><b>Связь</b><span>Команда остаётся на связи.</span></div></div></section>

    <section id="contact" className="commercial-section contact-pro"><p className="eyebrow">NEXUM / START</p><h2>Есть задача?<br/><em>Соберём решение.</em></h2><div className="contact-actions-pro"><a href="#brief">Заполнить бриф <ArrowRight size={17}/></a><a href={import.meta.env.VITE_TELEGRAM_URL || "#brief"} target={import.meta.env.VITE_TELEGRAM_URL ? "_blank" : undefined} rel={import.meta.env.VITE_TELEGRAM_URL ? "noreferrer" : undefined}><MessageCircle size={17}/> Telegram</a><a href={import.meta.env.VITE_MAX_URL || "#brief"} target={import.meta.env.VITE_MAX_URL ? "_blank" : undefined} rel={import.meta.env.VITE_MAX_URL ? "noreferrer" : undefined}><MessageCircle size={17}/> MAX</a></div></section>


  </div>;
}
