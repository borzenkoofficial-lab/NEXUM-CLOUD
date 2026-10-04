import { ArrowDown, ArrowUpRight, Box, Bot, Layers3, Orbit, Sparkles, Workflow, Smartphone, Globe2, Database, Wand2 } from 'lucide-react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';
import { useRef } from 'react';
import { HeroScene } from './components/HeroScene';
import RawFlexCarousel from './components/FlexCarousel/FlexCarousel';

const FlexCarousel: any = RawFlexCarousel;

const capabilities = [
  { n:'01', icon:Globe2, title:'Сайты и digital-продукты', text:'Промо-сайты, корпоративные платформы, сервисы и интерфейсы с собственной визуальной системой.' },
  { n:'02', icon:Smartphone, title:'Мобильные интерфейсы', text:'Адаптивные продукты, mobile-first сценарии и интерфейсы, которые одинаково хорошо работают на любом экране.' },
  { n:'03', icon:Orbit, title:'3D, WebGL и motion', text:'Интерактивные сцены, realtime-графика, scroll-анимации, микровзаимодействия и визуальные эффекты.' },
  { n:'04', icon:Bot, title:'AI и интеллектуальные функции', text:'AI-интерфейсы, ассистенты, автоматизация и умные сценарии, встроенные в реальный продукт.' },
  { n:'05', icon:Database, title:'CRM и внутренние системы', text:'Кабинеты, CRM, панели управления, базы данных и цифровые рабочие пространства.' },
  { n:'06', icon:Workflow, title:'Интеграции и автоматизация', text:'Telegram, платежи, API, уведомления, внешние сервисы и бизнес-процессы в единой системе.' },
  { n:'07', icon:Sparkles, title:'Поддержка и развитие', text:'Техническая поддержка, обновления, аналитика, улучшения и сопровождение после запуска.' },
  { n:'08', icon:Layers3, title:'Хостинг и инфраструктура', text:'Размещение, SSL, CDN, резервные копии, мониторинг и стабильная работа проекта.' },
  { n:'09', icon:Globe2, title:'Домен и запуск', text:'Подбор и подключение домена, DNS, почты, SSL и полный запуск проекта в сети.' },
];

const showcaseItems = [
  { src: '/assets/mockups/web-product.svg', alt: 'Мокап сайта и цифрового продукта', title: 'WEB / 01', subtitle: 'Digital product' },
  { src: '/assets/mockups/mobile-ui.svg', alt: 'Мокап мобильного интерфейса', title: 'MOBILE / 02', subtitle: 'Product UI' },
  { src: '/assets/mockups/ai-interface.svg', alt: 'Мокап AI интерфейса', title: 'AI / 03', subtitle: 'Intelligent interface' },
  { src: '/assets/mockups/telegram-bot.svg', alt: 'Мокап Telegram бота', title: 'BOT / 04', subtitle: 'Telegram automation' },
  { src: '/assets/mockups/crm-system.svg', alt: 'Мокап CRM системы', title: 'CRM / 05', subtitle: 'Digital system' },
  { src: '/assets/mockups/automation.svg', alt: 'Мокап автоматизации', title: 'AUTOMATION / 06', subtitle: 'Connected ecosystem' },
  { src: '/assets/mockups/support.svg', alt: 'Мокап поддержки цифрового продукта', title: 'SUPPORT / 07', subtitle: 'Product care' },
  { src: '/assets/mockups/hosting.svg', alt: 'Мокап хостинга и инфраструктуры', title: 'HOSTING / 08', subtitle: 'Cloud infrastructure' },
  { src: '/assets/mockups/domain.svg', alt: 'Мокап домена и запуска проекта', title: 'DOMAIN / 09', subtitle: 'Launch & DNS' },
];

const projects = [
  { label:'AI BUILDER', title:'Nexum.dev', text:'Среда для создания цифровых продуктов с AI.' },
  { label:'AI CORE', title:'Nexum Core', text:'Интеллектуальное ядро и инструменты для AI-систем.' },
  { label:'MARKETPLACE', title:'Gruzli', text:'Цифровая система для заказчиков, диспетчеров и грузчиков.' },
];

const process = [
  ['01','DISCOVER','Разбираем задачу, продукт, аудиторию и точки роста.'],
  ['02','DESIGN','Создаём визуальную систему, прототип и интерактивную концепцию.'],
  ['03','BUILD','Собираем рабочий продукт, подключаем данные, сервисы и автоматизацию.'],
  ['04','LAUNCH','Проверяем сценарии, оптимизируем и доводим до production.'],
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: .7, ease: 'easeOut' } }
};

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, .2], [0, -90]);
  const heroScale = useTransform(scrollYProgress, [0, .2], [1, .95]);
  const heroOpacity = useTransform(scrollYProgress, [0, .18], [1, .35]);
  const navBlur = useTransform(scrollYProgress, [0, .08], [0, 1]);

  return <main>
    <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

    <motion.nav className="nav" style={{ opacity: useTransform(navBlur, [0,1], [.98, .9]) }}>
      <a className="brand" href="#"><span className="brand-mark">N</span><span>NEXUM CLOUD</span></a>
      <div className="nav-links">
        <a href="#about">Агентство</a><a href="#capabilities">Что делаем</a><a href="#showcase">Мокапы</a><a href="#projects">Проекты</a>
      </div>
      <a className="nav-cta glass-button" href="#contact">Обсудить проект <ArrowUpRight size={16}/></a>
    </motion.nav>

    <section className="hero" ref={heroRef}>
      <motion.div className="hero-copy" style={{ y: heroY, opacity: heroOpacity }}>
        <motion.div initial="hidden" animate="show" variants={reveal}><p className="eyebrow">NEXUM CLOUD · DIGITAL STUDIO</p></motion.div>
        <motion.h1 initial="hidden" animate="show" variants={reveal} transition={{ delay: .08 }}>Создаём<br/><em>цифровые продукты.</em></motion.h1>
        <motion.p className="lead" initial="hidden" animate="show" variants={reveal} transition={{ delay: .16 }}>
          Сайты, интерфейсы, мобильные продукты, 3D, AI и автоматизация. Не просто красивый экран — полноценная цифровая система вокруг вашего бизнеса.
        </motion.p>
        <motion.div className="hero-actions" initial="hidden" animate="show" variants={reveal} transition={{ delay: .24 }}>
          <a className="primary glass-button" href="#showcase">Посмотреть возможности <ArrowDown size={17}/></a>
          <a className="secondary glass-button" href="#contact">Начать проект</a>
        </motion.div>
        <motion.div className="hero-proof" initial="hidden" animate="show" variants={reveal} transition={{ delay: .32 }}>
          <span><b>WEB</b> / SITES</span><span><b>AI</b> / SYSTEMS</span><span><b>3D</b> / MOTION</span>
        </motion.div>
      </motion.div>

      <motion.div className="hero-visual glass-panel" style={{ scale: heroScale }}>
        <div className="scene-caption"><span>REALTIME DIGITAL ENVIRONMENT</span><span>01 / 06</span></div>
        <div className="scene-chip glass-button"><span className="status-dot"/> LIVE / WEBGL</div>
        <div className="hero-orbit-label glass-button"><Wand2 size={14}/> LIQUID GLASS</div>
        <HeroScene/>
        <div className="hero-visual-copy"><strong>Digital environment</strong><span>WEBGL · MOTION · AI · SYSTEMS</span></div>
        <div className="visual-label"><span>INTERACTIVE 3D</span><span>DRAG · ROTATE</span></div>
      </motion.div>
    </section>

    <section id="about" className="about">
      <div className="about-intro">
        <p className="eyebrow">NEXUM CLOUD / 01</p>
        <h2>Мы — digital-студия,<br/><span>которая собирает всё в одну систему.</span></h2>
      </div>
      <div className="about-grid">
        <div className="about-number">01—04</div>
        <p>Помогаем компаниям и предпринимателям превращать идеи в работающие цифровые продукты: от первого экрана и брендинга интерфейса до CRM, AI, интеграций и автоматизации.</p>
        <p>Вместо набора разрозненных подрядчиков собираем единый цифровой слой — дизайн, frontend, realtime-визуал, данные и бизнес-логику.</p>
      </div>
      <div className="about-stats">
        <div><strong>WEB</strong><span>сайты и сервисы</span></div>
        <div><strong>AI</strong><span>умные функции</span></div>
        <div><strong>3D</strong><span>realtime experience</span></div>
        <div><strong>OPS</strong><span>автоматизация</span></div>
      </div>
    </section>

    <section id="showcase" className="mockup-showcase">
      <div className="section-head compact">
        <div><p className="eyebrow">LIQUID GLASS SHOWCASE / 02</p><h2>Сайт. Приложение. Бот.<br/><span>Всё в одном пространстве.</span></h2></div>
        <p className="section-note">От сайта и мобильного интерфейса до Telegram-бота, поддержки, хостинга и домена — показываем не отдельные экраны, а полный цифровой продукт.</p>
      </div>
      <div className="hero-carousel glass-panel">
        <FlexCarousel items={showcaseItems} preset="liquid" intro="rise" cardHeight={0.58} gap={14} radius={20} squeeze={0.2} focusOnClick captions captureWheel />
      </div>
    </section>

    <motion.section className="manifesto" initial="hidden" whileInView="show" viewport={{ once:true, amount:.25 }} variants={reveal}>
      <p className="eyebrow">THE NEXUM APPROACH / 03</p>
      <h2>Красивый интерфейс —<br/><span>только первый слой.</span></h2>
      <p>За ним должна работать система: данные, интеграции, логика, AI и понятный пользовательский сценарий. Поэтому мы проектируем не страницу, а целостный digital-продукт.</p>
    </motion.section>

    <section id="capabilities" className="capabilities">
      <div className="section-head"><p className="eyebrow">SERVICES / 04</p><h2>Что мы<br/><span>умеем делать.</span></h2></div>
      <div className="services">{capabilities.map(({n,title,text,icon:Icon}, i)=>
        <motion.article className="service glass-card" key={n} initial="hidden" whileInView="show" viewport={{ once:true, amount:.18 }} variants={reveal} transition={{ delay:i*.06 }}>
          <div className="service-top"><span>{n}</span><Icon size={23} strokeWidth={1.5}/></div>
          <h3>{title}</h3><p>{text}</p><span className="service-arrow glass-button"><ArrowUpRight size={19}/></span>
        </motion.article>
      )}</div>
    </section>

    <section className="process">
      <div className="section-head"><p className="eyebrow">HOW WE WORK / 05</p><h2>От задачи<br/><span>до запуска.</span></h2></div>
      <div className="process-grid">{process.map(([n,title,text]) =>
        <motion.div className="process-card glass-card" key={n} initial="hidden" whileInView="show" viewport={{ once:true, amount:.25 }} variants={reveal}>
          <span>{n}</span><h3>{title}</h3><p>{text}</p>
        </motion.div>
      )}</div>
    </section>

    <section className="lab">
      <div className="lab-orbit"><div className="lab-dot dot-a"/><div className="lab-dot dot-b"/><div className="lab-ring ring-a"/><div className="lab-ring ring-b"/></div>
      <motion.div className="lab-copy" initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={reveal}>
        <p className="eyebrow">INTERACTIVE LAB / 06</p><h2>Плоский экран —<br/><span>только начало.</span></h2>
        <p>Подключаем 3D, физику, shaders, частицы, устройства и scroll-driven transitions там, где это усиливает продукт.</p>
        <div className="lab-tags"><span>THREE.JS</span><span>WEBGL</span><span>GSAP</span><span>GLTF</span></div>
      </motion.div>
      <div className="lab-glass-panel glass-panel"><span className="status-dot"/> REALTIME SYSTEM<div className="lab-bars"><i/><i/><i/><i/><i/></div></div>
    </section>

    <section id="projects" className="projects">
      <div className="section-head"><p className="eyebrow">SELECTED WORK / 07</p><h2>Продукты<br/><span>в экосистеме Nexum.</span></h2></div>
      <div className="project-grid">{projects.map((p,i)=>
        <motion.a className="project-card glass-card" href="#contact" key={p.title} initial="hidden" whileInView="show" viewport={{ once:true, amount:.2 }} variants={reveal}>
          <div className={'project-art art-'+i}><div className="project-orb"/><span className="project-float glass-button">{p.label}</span></div>
          <div className="project-info"><span>{p.label}</span><h3>{p.title}</h3><p>{p.text}</p><ArrowUpRight size={18}/></div>
        </motion.a>
      )}</div>
    </section>

    <motion.section className="statement" initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={reveal}>
      <span className="eyebrow">NEXUM CLOUD / 08</span>
      <h2>Не продаём<br/><span>набор услуг.</span><br/>Создаём цифровую среду.</h2>
    </motion.section>

    <footer id="contact">
      <div><span className="eyebrow">START A PROJECT / 09</span><h2>Есть задача?<br/>Покажем, что можно сделать.</h2><p>Сайт, продукт, интерфейс, AI-система или автоматизация.</p></div>
      <a className="primary glass-button" href="mailto:hello@nexum.cloud">Обсудить проект <ArrowUpRight size={18}/></a>
    </footer>
  </main>
}