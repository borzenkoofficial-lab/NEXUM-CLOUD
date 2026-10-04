import { ArrowDown, ArrowUpRight, Bot, Database, Globe2, Layers3, Orbit, Sparkles, Smartphone, Workflow, Zap, Check } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useTransform, type Variants } from 'motion/react';
import { useEffect, useState } from 'react';
import GlassSurface from './components/GlassSurface';

const capabilities = [
  { n:'01', icon:Globe2, title:'Сайты и digital-продукты', text:'Имиджевые сайты, сервисы и продуктовые интерфейсы, которые выглядят дорого и ведут пользователя к действию.' },
  { n:'02', icon:Smartphone, title:'Мобильные интерфейсы', text:'Адаптивные сценарии и мобильные продукты без компромиссов по UX и визуальной системе.' },
  { n:'03', icon:Bot, title:'AI и автоматизация', text:'AI-функции, ассистенты, Telegram, уведомления и автоматизация реальных бизнес-процессов.' },
  { n:'04', icon:Database, title:'CRM и внутренние системы', text:'Личные кабинеты, CRM, рабочие пространства, базы данных и понятная бизнес-логика.' },
  { n:'05', icon:Orbit, title:'3D, WebGL и motion', text:'Интерактивные сцены и motion там, где они усиливают историю продукта, а не превращаются в декорацию.' },
  { n:'06', icon:Layers3, title:'Инфраструктура и запуск', text:'Домен, DNS, SSL, хостинг, аналитика и поддержка — доводим продукт до работающего состояния.' },
];

const marketProducts = [
  {slug:'site',tag:'WEB',title:'Сайт / digital-продукт',text:'Премиальный сайт или цифровой сервис с дизайном, адаптивом и готовностью к запуску.',src:'/assets/mockups/web-product.svg',price:'от 49 000 ₽',features:['UX/UI-дизайн','Адаптивная разработка','Форма заявки и аналитика','Подключение домена и SSL']},
  {slug:'mobile',tag:'MOBILE',title:'Мобильный интерфейс',text:'Мобильная версия продукта или отдельный интерфейс под iOS, Android и web.',src:'/assets/mockups/mobile-ui.svg',price:'от 59 000 ₽',features:['UX-сценарии','Mobile-first интерфейс','Анимации и состояния','Подготовка к разработке']},
  {slug:'ai',tag:'AI',title:'AI-ассистент',text:'AI-функция или ассистент, встроенный в сайт, сервис или бизнес-процесс.',src:'/assets/mockups/ai-interface.svg',price:'от 39 000 ₽',features:['Сценарии AI','Подключение модели','Контекст и инструкции','Интеграция с продуктом']},
  {slug:'telegram',tag:'TELEGRAM',title:'Telegram-бот',text:'Бот для заявок, продаж, уведомлений, поддержки и автоматизации.',src:'/assets/mockups/telegram-bot.svg',price:'от 29 000 ₽',features:['Сценарии бота','Кнопки и меню','Уведомления','Интеграции']},
  {slug:'crm',tag:'CRM',title:'CRM / личный кабинет',text:'Внутренняя система для клиентов, менеджеров и операционных процессов.',src:'/assets/mockups/crm-system.svg',price:'от 79 000 ₽',features:['Роли и доступы','Рабочие кабинеты','Статусы и данные','Интеграции']},
  {slug:'automation',tag:'OPS',title:'Автоматизация',text:'Связываем формы, CRM, Telegram, почту, платежи и другие сервисы.',src:'/assets/mockups/automation.svg',price:'от 25 000 ₽',features:['Аудит процесса','Сценарий автоматизации','Интеграции','Логи и контроль']},
  {slug:'support',tag:'SUPPORT',title:'Поддержка и развитие',text:'Регулярные улучшения, контент, исправления и развитие цифрового продукта.',src:'/assets/mockups/support.svg',price:'от 15 000 ₽/мес.',features:['Техническая поддержка','Новые функции','Контентные изменения','Мониторинг']},
  {slug:'hosting',tag:'HOSTING',title:'Хостинг и запуск',text:'Разворачиваем проект, подключаем домен, SSL, DNS и базовую инфраструктуру.',src:'/assets/mockups/hosting.svg',price:'от 7 000 ₽',features:['Деплой','Домен и DNS','SSL','Базовый мониторинг']},
  {slug:'domain',tag:'DOMAIN',title:'Домен и настройка',text:'Помогаем выбрать, зарегистрировать и корректно настроить домен проекта.',src:'/assets/mockups/domain.svg',price:'от 3 000 ₽',features:['Подбор домена','DNS','SSL','Почта проекта']},
];
];

const showcase = [
  { src:'/assets/mockups/web-product.svg', tag:'WEB', title:'Цифровой продукт', text:'Сайт с характером, системой и понятным сценарием.' },
  { src:'/assets/mockups/mobile-ui.svg', tag:'MOBILE', title:'Мобильный интерфейс', text:'Продукт, который одинаково хорошо ощущается на каждом экране.' },
  { src:'/assets/mockups/ai-interface.svg', tag:'AI', title:'AI-интерфейс', text:'Интеллект становится частью пользовательского опыта.' },
  { src:'/assets/mockups/crm-system.svg', tag:'CRM', title:'Внутренняя система', text:'Данные, роли и процессы собраны в одном рабочем пространстве.' },
];

const projects = [
  { tag:'AI BUILDER', title:'Nexum.dev', text:'Среда для создания цифровых продуктов с AI.', src:'/assets/mockups/web-product.svg' },
  { tag:'AI CORE', title:'Nexum Core', text:'Интеллектуальное ядро и инструменты для AI-систем.', src:'/assets/mockups/ai-interface.svg' },
  { tag:'MARKETPLACE', title:'Gruzli', text:'Цифровая система для заказчиков, диспетчеров и грузчиков.', src:'/assets/mockups/mobile-ui.svg' },
];

const process = [
  ['01','Слушаем','Понимаем бизнес, аудиторию и задачу.'],
  ['02','Проектируем','Находим визуальную идею и пользовательский сценарий.'],
  ['03','Собираем','Соединяем дизайн, код, данные и интеграции.'],
  ['04','Запускаем','Проверяем, оптимизируем и передаём работающий продукт.'],
];

const directions = [
  { label:'ПРОДАЖИ', title:'Сделать бренд заметнее', text:'Сильный первый экран, упаковка продукта, доверие и путь к заявке.', accent:'01' },
  { label:'СИСТЕМА', title:'Собрать процессы в одно место', text:'CRM, личный кабинет, Telegram, платежи, данные и автоматизация.', accent:'02' },
  { label:'ИННОВАЦИИ', title:'Добавить AI и 3D', text:'Интеллектуальные функции, интерактивные сцены и новый уровень digital-опыта.', accent:'03' },
];

const reveal: Variants = {
  hidden:{ opacity:0, y:28 },
  show:{ opacity:1, y:0, transition:{ duration:.7, ease:'easeOut' } }
};

function MarketPage(){
  return <main className="market-page">
    <nav className="nav"><a className="brand" href="/"><span className="brand-mark">N</span><span>NEXUM CLOUD</span></a><div className="nav-links"><a href="/">Студия</a><a className="active" href="/market">Маркет</a><a href="/#projects">Проекты</a></div><a className="nav-cta glass-button" href="/#contact">Обсудить проект <ArrowUpRight size={15}/></a></nav>
    <section className="market-hero"><p className="eyebrow">NEXUM CLOUD / MARKET</p><h1>Готовые решения.<br/><em>Собраны под задачу.</em></h1><p>Выберите услугу, откройте продукт и посмотрите, что входит в работу, сроки и стоимость.</p></section>
    <section className="market-grid">{marketProducts.map((p,i)=><motion.a href={`/market/${p.slug}`} className="market-card" key={p.slug} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{delay:i*.035}} whileHover={{y:-8}}><div className="market-card-visual"><img src={p.src} alt=""/><span>{p.tag}</span></div><div className="market-card-info"><div><small>{String(i+1).padStart(2,'0')}</small><h2>{p.title}</h2><p>{p.text}</p></div><div className="market-card-bottom"><b>{p.price}</b><span><ArrowUpRight size={17}/></span></div></div></motion.a>)}</section>
    <footer className="footer-v2"><div><b>NEXUM CLOUD</b><span>Цифровые продукты и системы.</span></div><a href="/#contact">Обсудить проект <ArrowUpRight size={15}/></a></footer>
  </main>
}

function ProductPage({product}:{product:typeof marketProducts[number]}){
  return <main className="product-page"><nav className="nav"><a className="brand" href="/"><span className="brand-mark">N</span><span>NEXUM CLOUD</span></a><div className="nav-links"><a href="/market">Маркет</a><a href="/#projects">Проекты</a></div><a className="nav-cta glass-button" href="/#contact">Обсудить проект <ArrowUpRight size={15}/></a></nav>
    <section className="product-hero"><div className="product-copy"><a className="product-back" href="/market">← Вернуться в Маркет</a><p className="eyebrow">{product.tag} / NEXUM CLOUD</p><h1>{product.title}</h1><p>{product.text}</p><strong>{product.price}</strong><a className="primary glass-button" href="/#contact">Заказать продукт <ArrowUpRight size={16}/></a></div><div className="product-mockup"><img src={product.src} alt={product.title}/></div></section>
    <section className="product-details"><div><p className="eyebrow">ЧТО ВХОДИТ</p><h2>Собираем продукт<br/><em>от идеи до запуска.</em></h2></div><div className="product-features">{product.features.map((f,i)=><div key={f}><span>0{i+1}</span><b>{f}</b><Check size={17}/></div>)}</div></section>
    <section className="product-cta"><p className="eyebrow">ГОТОВЫ НАЧАТЬ?</p><h2>Расскажите, что<br/><em>нужно собрать.</em></h2><a className="primary glass-button" href="/#contact">Обсудить задачу <ArrowUpRight size={16}/></a></section>
  </main>
}

export default function App(){
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress,[0,.2],[0,-80]);
  const heroOpacity = useTransform(scrollYProgress,[0,.18],[1,.2]);
  const [heroIndex,setHeroIndex] = useState(0);
  const [direction,setDirection] = useState(0);
  const [showcaseActive,setShowcaseActive] = useState(0);

  useEffect(()=>{
    const timer = window.setInterval(()=>setHeroIndex(v=>(v+1)%4),3600);
    return ()=>window.clearInterval(timer);
  },[]);

  const heroWords = ['WEB','AI','3D','SYSTEM'];
  const activeDirection = directions[direction];

  if(window.location.pathname==='/market') return <MarketPage />;
  const product=marketProducts.find(p=>window.location.pathname===`/market/${p.slug}`);
  if(product) return <ProductPage product={product} />;

  return <main>
    <motion.div className="scroll-progress" style={{scaleX:scrollYProgress}} />

    <nav className="nav">
      <a className="brand" href="#"><span className="brand-mark">N</span><span>NEXUM CLOUD</span></a>
      <div className="nav-links">
        <a href="#about">Студия</a><a href="#showcase">Витрина</a><a href="/market">Маркет</a><a href="#projects">Проекты</a>
      </div>
      <a className="nav-cta glass-button" href="#contact">Обсудить проект <ArrowUpRight size={15}/></a>
    </nav>

    <section className="hero hero-v2">
      <motion.div className="hero-copy" style={{y:heroY,opacity:heroOpacity}}>
        <motion.div initial="hidden" animate="show" variants={reveal}>
          <p className="eyebrow">NEXUM CLOUD · DIGITAL STUDIO / 2026</p>
          <h1>Продукты,<br/><em>которые хочется открыть.</em></h1>
          <p className="hero-lead">Создаём цифровые продукты, где визуальная идея, технология и бизнес-логика работают как одно целое.</p>
        </motion.div>
        <div className="hero-v2-actions">
          <a className="primary glass-button" href="#showcase">Смотреть работы <ArrowDown size={16}/></a>
          <a className="secondary glass-button" href="#contact">Рассказать о задаче</a>
        </div>
        <div className="hero-signal">
          <span>01</span><i/><span>DESIGN</span><i/><span>TECH</span><i/><span>INTELLIGENCE</span>
        </div>
      </motion.div>

      <motion.div className="hero-v2-stage glass-panel" onPointerMove={(e)=>{const r=e.currentTarget.getBoundingClientRect();const x=e.clientX-r.left;const y=e.clientY-r.top;const edge=Math.min(x,y,r.width-x,r.height-y);const proximity=Math.max(0,Math.min(1,1-edge/150));e.currentTarget.style.setProperty('--glow-x',(x/r.width)*100+'%');e.currentTarget.style.setProperty('--glow-y',(y/r.height)*100+'%');e.currentTarget.style.setProperty('--edge-alpha',proximity.toFixed(3));e.currentTarget.style.setProperty('--glow-angle',(Math.atan2(y-r.height/2,x-r.width/2)*180/Math.PI+90)+'deg')}} onPointerLeave={(e)=>e.currentTarget.style.setProperty('--edge-alpha','0')} initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.15}}><span className="stage-glow-beacon" />
        <div className="stage-top"><span>NEXUM / LIVE EXPERIENCE</span><span>0{heroIndex+1} / 04</span></div>
        <div className="stage-orbit orbit-one"/><div className="stage-orbit orbit-two"/>
        <div className="stage-core">
          <div className="stage-core-inner"><span>N</span><small>NX</small></div>
        </div>
        <div className="stage-word"><AnimatePresence mode="wait"><motion.span key={heroWords[heroIndex]} initial={{opacity:0,y:20,filter:'blur(8px)'}} animate={{opacity:1,y:0,filter:'blur(0)'}} exit={{opacity:0,y:-20,filter:'blur(8px)'}}>{heroWords[heroIndex]}</motion.span></AnimatePresence></div>
        <div className="stage-caption"><b>Цифровая среда</b><span>WEB · AI · 3D · AUTOMATION</span></div>
        <div className="stage-float float-a glass-button"><span className="status-dot"/> LIVE SYSTEM</div>
        <div className="stage-float float-b glass-button">SCROLL / EXPLORE <ArrowDown size={13}/></div>
      </motion.div>
    </section>

    <section className="signal-strip">
      <div><span>01</span><b>ВИЗУАЛ</b><small>Сильная идея с первого экрана</small></div>
      <div><span>02</span><b>СИСТЕМА</b><small>Не только красиво — всё работает</small></div>
      <div><span>03</span><b>ЭМОЦИЯ</b><small>Опыт, который запоминается</small></div>
      <div><span>04</span><b>РЕЗУЛЬТАТ</b><small>Сценарий ведёт к действию</small></div>
    </section>

    <section id="about" className="about-v2">
      <div className="editorial-kicker"><span>NEXUM CLOUD / 01</span><span>ABOUT THE STUDIO</span></div>
      <div className="about-v2-grid">
        <div><p className="eyebrow">НЕ ПРОСТО САЙТ</p><h2>Мы собираем<br/><em>цифровые впечатления.</em></h2></div>
        <div className="about-v2-copy"><p>Сначала человек видит дизайн. Затем чувствует продукт. А дальше должна работать система.</p><p>Поэтому мы объединяем UX, frontend, AI, данные, интеграции и автоматизацию в одну цифровую среду.</p><div className="about-metrics"><b>WEB</b><b>AI</b><b>3D</b><b>OPS</b></div></div>
      </div>
      <div className="about-feature">
        <div className="feature-number">01</div>
        <div className="feature-copy"><span>OUR PRINCIPLE</span><strong>Каждый экран<br/>должен иметь причину.</strong><p>Мы не добавляем эффект ради эффекта. Движение, стекло, 3D и интерактивность работают на восприятие, доверие и действие.</p></div>
        <div className="feature-diagram"><div className="diagram-ring r1"/><div className="diagram-ring r2"/><div className="diagram-dot d1"/><div className="diagram-dot d2"/><div className="diagram-line"/></div>
      </div>
    </section>

    <section id="showcase" className="showcase-v2 showcase-experience">
      <div className="section-head-v2"><div><p className="eyebrow">02 / PRODUCT SHOWCASE</p><h2>Посмотрите,<br/><em>как это ощущается.</em></h2></div><p>Наведите курсор, выберите систему и почувствуйте разницу. Здесь интерфейс не лежит картинкой — он живёт внутри пространства.</p></div>
      <div className="showcase-stage">
        <div className="showcase-glow"/>
        <motion.div className="showcase-device" key={showcaseActive} initial={{opacity:0,scale:.94,y:18,rotateX:5}} animate={{opacity:1,scale:1,y:0,rotateX:0}} transition={{duration:.65,ease:[.22,1,.36,1]}}>
          <div className="device-top"><span className="device-dots"><i/><i/><i/></span><span>{showcase[showcaseActive].tag} / NEXUM</span><span>● LIVE</span></div>
          <div className="device-screen"><img src={showcase[showcaseActive].src} alt={showcase[showcaseActive].title}/><div className="device-sheen"/></div>
          <div className="device-base"><span>{showcase[showcaseActive].title}</span><small>{showcase[showcaseActive].text}</small></div>
        </motion.div>
        {showcase.map((item,i)=><motion.button key={item.src} className={'showcase-widget widget-'+i+(i===showcaseActive?' active':'')} onClick={()=>setShowcaseActive(i)} whileHover={{y:-8,scale:1.035}} whileTap={{scale:.97}} animate={{y:i===showcaseActive?-5:0}} transition={{duration:.35}}>
          <span className="widget-icon">{['WEB','M','AI','CRM'][i]}</span>
          <span><b>{item.title}</b><small>{item.tag}</small></span><ArrowUpRight size={14}/>
        </motion.button>)}
        <div className="showcase-hint"><span>01—04</span><i/><span>Наведите · выберите · исследуйте</span></div>
      </div>
    </section>

    <section id="services" className="services-v2">
      <div className="section-head-v2"><div><p className="eyebrow">03 / CAPABILITIES</p><h2>Всё необходимое<br/><em>в одном месте.</em></h2></div><p>От первого пикселя до инфраструктуры. Можно взять отдельный слой или собрать полноценную систему.</p></div>
      <div className="services-v2-grid">{capabilities.map(({n,title,text,icon:Icon},i)=><motion.article className="service-v2" key={n} initial="hidden" whileInView="show" viewport={{once:true,amount:.12}} variants={reveal} transition={{delay:i*.05}}>
        <div className="service-v2-top"><span>{n}</span><Icon size={21} strokeWidth={1.5}/></div><h3>{title}</h3><p>{text}</p><span className="service-v2-arrow"><ArrowUpRight size={17}/></span>
      </motion.article>)}</div>
    </section>

    <section className="direction-v2">
      <div className="section-head-v2"><div><p className="eyebrow">04 / FIND YOUR DIRECTION</p><h2>Что сейчас<br/><em>важнее всего?</em></h2></div><p>Выберите направление — покажем, как может выглядеть следующий шаг.</p></div>
      <div className="direction-layout">
        <div className="direction-tabs">{directions.map((item,i)=><button key={item.label} className={i===direction?'active':''} onClick={()=>setDirection(i)}><span>{item.accent}</span><b>{item.label}</b><ArrowUpRight size={16}/></button>)}</div>
        <AnimatePresence mode="wait"><motion.div key={direction} className="direction-result" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:.35}}>
          <span>{activeDirection.label} / 0{direction+1}</span><h3>{activeDirection.title}</h3><p>{activeDirection.text}</p><a href="#contact">Обсудить сценарий <ArrowUpRight size={16}/></a>
        </motion.div></AnimatePresence>
      </div>
    </section>

    <section className="process-v2">
      <div className="process-v2-head"><p className="eyebrow">05 / PROCESS</p><h2>От идеи<br/><em>до работающего продукта.</em></h2></div>
      <div className="process-v2-list">{process.map(([n,title,text],i)=><motion.div className="process-v2-row" key={n} initial="hidden" whileInView="show" viewport={{once:true,amount:.3}} variants={reveal}><span>{n}</span><b>{title}</b><p>{text}</p><div className="process-check"><Check size={14}/></div></motion.div>)}</div>
    </section>

    <section className="lab-v2">
      <div className="lab-v2-bg"><div className="lab-grid"/><div className="lab-sphere"/><div className="lab-cursor"/></div>
      <div className="lab-v2-copy"><p className="eyebrow">06 / NEXUM LAB</p><h2>Когда обычного<br/>экрана <em>мало.</em></h2><p>3D, WebGL, motion и интерактивные сцены превращают сайт в опыт. Используем их только там, где они усиливают историю.</p><div><span>THREE.JS</span><span>WEBGL</span><span>MOTION</span><span>SHADERS</span></div></div>
      <div className="lab-v2-console"><span><i/> REALTIME</span><b>01</b><small>INTERACTIVE EXPERIENCE</small></div>
    </section>

    <section id="projects" className="projects-v2">
      <div className="section-head-v2"><div><p className="eyebrow">07 / SELECTED WORK</p><h2>То, что мы<br/><em>строим сами.</em></h2></div><p>Nexum — не только студия. Мы постоянно создаём собственные продукты и проверяем технологии на себе.</p></div>
      <div className="projects-v2-grid">{projects.map((p,i)=><a className="project-v2" href="#contact" key={p.title}><div className="project-v2-art"><img src={p.src} alt={p.title}/><span>{p.tag}</span></div><div className="project-v2-info"><div><small>0{i+1}</small><h3>{p.title}</h3><p>{p.text}</p></div><ArrowUpRight size={20}/></div></a>)}</div>
    </section>

    <section className="closing-v2">
      <div className="closing-mark"><Zap size={18}/></div><p className="eyebrow">08 / THE LAST SCREEN</p><h2>Хороший digital<br/><em>не заканчивается кнопкой.</em></h2><p>Он остаётся в памяти, помогает бизнесу и даёт человеку понятную причину сделать следующий шаг.</p>
    </section>

    <footer id="contact" className="footer-v2">
      <div className="footer-v2-main"><p className="eyebrow">09 / START A PROJECT</p><h2>Расскажите,<br/><em>что хотите изменить.</em></h2><p>Сайт, цифровой продукт, AI, CRM или новая digital-система.</p></div>
      <div className="footer-v2-action"><a className="footer-big-cta" href="mailto:hello@nexum.cloud">Начать разговор <ArrowUpRight size={22}/></a><div className="footer-mini"><span>HELLO@NEXUM.CLOUD</span><span>© 2026 NEXUM CLOUD</span></div></div>
    </footer>
  </main>;
}