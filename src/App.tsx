import { ArrowDown, ArrowUpRight, Box, Bot, Layers3, Orbit, Sparkles, Workflow } from 'lucide-react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';
import { useRef } from 'react';
import { HeroScene } from './components/HeroScene';
import RawFlexCarousel from './components/FlexCarousel/FlexCarousel';

const FlexCarousel: any = RawFlexCarousel;

const capabilities = [
  { n:'01', icon:Box, title:'Web & digital products', text:'Сайты, сервисы и интерфейсы, которые ощущаются как полноценный продукт.' },
  { n:'02', icon:Orbit, title:'3D & WebGL', text:'Realtime-сцены, процедурная графика, интерактивные объекты и пространственные интерфейсы.' },
  { n:'03', icon:Sparkles, title:'Motion & interaction', text:'Scroll choreography, micro-interactions и анимация, которая поддерживает смысл.' },
  { n:'04', icon:Bot, title:'AI experiences', text:'AI-функции и интеллектуальные сценарии внутри реальных цифровых продуктов.' },
  { n:'05', icon:Workflow, title:'Systems & automation', text:'CRM, кабинеты, Telegram-боты, интеграции и автоматизация процессов.' },
  { n:'06', icon:Layers3, title:'Digital ecosystems', text:'Связываем интерфейсы, данные, сервисы и бизнес-логику в одну систему.' },
];

const showcaseItems = [
  { src: '/assets/mockups/web-product.svg', alt: 'Макет цифрового продукта Nexum Cloud', title: 'WEB / 01', subtitle: 'Digital product' },
  { src: '/assets/mockups/mobile-ui.svg', alt: 'Мокап мобильного интерфейса Nexum', title: 'MOBILE / 02', subtitle: 'Product UI' },
  { src: '/assets/mockups/ai-interface.svg', alt: 'Мокап AI-интерфейса Nexum', title: 'AI / 03', subtitle: 'Intelligent interface' },
  { src: '/assets/mockups/telegram-bot.svg', alt: 'Мокап Telegram-бота Nexum', title: 'BOT / 04', subtitle: 'Telegram automation' },
  { src: '/assets/mockups/crm-system.svg', alt: 'Мокап CRM и внутренней системы', title: 'CRM / 05', subtitle: 'Digital system' },
  { src: '/assets/mockups/automation.svg', alt: 'Мокап системы автоматизации', title: 'AUTOMATION / 06', subtitle: 'Connected ecosystem' }
];

const projects = [
  { label:'AI BUILDER', title:'Nexum.dev', text:'Среда для создания цифровых продуктов с AI.' },
  { label:'AI CORE', title:'Nexum Core', text:'Интеллектуальное ядро и инструменты для AI-систем.' },
  { label:'MARKETPLACE', title:'Gruzli', text:'Цифровая система для заказчиков, диспетчеров и грузчиков.' },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: .7, ease: [0.22, 1, 0.36, 1] } }
};

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, .22], [0, -70]);
  const heroScale = useTransform(scrollYProgress, [0, .22], [1, .965]);
  const navBlur = useTransform(scrollYProgress, [0, .08], [0, 1]);

  return <main>
    <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
    <motion.nav className="nav" style={{ opacity: useTransform(navBlur, [0,1], [.98, .9]) }}>
      <a className="brand" href="#"><span className="brand-mark">N</span><span>NEXUM CLOUD</span></a>
      <div className="nav-links"><a href="#showcase">Возможности</a><a href="#capabilities">Что создаём</a><a href="#projects">Проекты</a></div>
      <a className="nav-cta glass-button" href="#contact">Обсудить проект <ArrowUpRight size={16}/></a>
    </motion.nav>

    <section className="hero" ref={heroRef}>
      <motion.div className="hero-copy" style={{ y: heroY }}>
        <motion.div initial="hidden" animate="show" variants={reveal}><p className="eyebrow">NEXUM CLOUD · DIGITAL STUDIO</p></motion.div>
        <motion.h1 initial="hidden" animate="show" variants={reveal} transition={{ delay: .08 }}>Мы создаём<br/><em>цифровую среду.</em></motion.h1>
        <motion.p className="lead" initial="hidden" animate="show" variants={reveal} transition={{ delay: .16 }}>Сайты, интерфейсы, 3D, motion, AI и цифровые системы. Nexum Cloud — место, где наши возможности можно не только посмотреть, но и испытать.</motion.p>
        <motion.div className="hero-actions" initial="hidden" animate="show" variants={reveal} transition={{ delay: .24 }}><a className="primary glass-button" href="#showcase">Исследовать стенд <ArrowDown size={17}/></a><a className="secondary glass-button" href="#capabilities">Что мы умеем</a></motion.div>
        <motion.div className="hero-meta glass-panel" initial="hidden" animate="show" variants={reveal} transition={{ delay: .32 }}><span>01 / 06</span><span>REALTIME WEBGL</span><span>SCROLL TO EXPLORE</span></motion.div>
      </motion.div>

      <motion.div className="hero-visual glass-panel" style={{ scale: heroScale }}>
        <div className="scene-caption"><span>PROCEDURAL OBJECT</span><span>60 FPS TARGET</span></div>
        <div className="scene-chip glass-button"><span className="status-dot"/> LIVE / WEBGL</div>
        <HeroScene/>
        <div className="visual-label"><span>WEBGL / REALTIME</span><span>DRAG · ROTATE</span></div>
      </motion.div>
    </section>

    <section className="hero-carousel-section" aria-label="Nexum Cloud capability showcase">
      <div className="hero-carousel-head"><p className="eyebrow">LIVE SHOWCASE / 00</p><span>DRAG · SCROLL · CLICK</span></div>
      <div className="hero-carousel glass-panel">
        <FlexCarousel items={showcaseItems} preset="liquid" intro="rise" cardHeight={0.58} gap={14} radius={20} squeeze={0.2} focusOnClick captions captureWheel />
      </div>
    </section>

    <motion.section id="showcase" className="manifesto" initial="hidden" whileInView="show" viewport={{ once:true, amount:.25 }} variants={reveal}>
      <p className="eyebrow">THE CLOUD / 01</p>
      <h2>Сайт — не презентация.<br/><span>Это демонстрация технологии.</span></h2>
      <p>Каждый экран Nexum Cloud задуман как отдельная сцена. Здесь можно показывать 3D-модели, motion, WebGL, интерфейсы и реальные продукты — без ощущения каталога шаблонов.</p>
      <a className="scroll-cue glass-button" href="#capabilities">SCROLL <ArrowDown size={15}/></a>
    </motion.section>

    <section id="capabilities" className="capabilities">
      <div className="section-head"><p className="eyebrow">CAPABILITIES / 02</p><h2>От идеи<br/><span>до цифровой среды.</span></h2></div>
      <div className="services">{capabilities.map(({n,title,text,icon:Icon}, i)=>
        <motion.article className="service glass-card" key={n} initial="hidden" whileInView="show" viewport={{ once:true, amount:.18 }} variants={reveal} transition={{ delay:i*.06 }}>
          <div className="service-top"><span>{n}</span><Icon size={23} strokeWidth={1.5}/></div>
          <h3>{title}</h3><p>{text}</p>
          <span className="service-arrow glass-button"><ArrowUpRight size={19}/></span>
        </motion.article>
      )}</div>
    </section>

    <section className="lab">
      <div className="lab-orbit"><div className="lab-dot dot-a"/><div className="lab-dot dot-b"/><div className="lab-ring ring-a"/><div className="lab-ring ring-b"/></div>
      <motion.div className="lab-copy" initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={reveal}>
        <p className="eyebrow">INTERACTIVE LAB / 03</p><h2>Плоский экран —<br/><span>только начало.</span></h2>
        <p>Следующие сцены будут подключаться как самостоятельные модули: 3D-модели, частицы, физика, shaders, устройства, архитектура и scroll-driven transitions.</p>
        <div className="lab-tags"><span>THREE.JS</span><span>WEBGL</span><span>GSAP</span><span>GLTF</span></div>
      </motion.div>
      <div className="lab-glass-panel glass-panel"><span className="status-dot"/> REALTIME SYSTEM<div className="lab-bars"><i/><i/><i/><i/><i/></div></div>
    </section>

    <section id="projects" className="projects">
      <div className="section-head"><p className="eyebrow">SELECTED WORK / 04</p><h2>Проекты<br/><span>внутри экосистемы.</span></h2></div>
      <div className="project-grid">{projects.map((p,i)=>
        <motion.a className="project-card glass-card" href="#contact" key={p.title} initial="hidden" whileInView="show" viewport={{ once:true, amount:.2 }} variants={reveal}>
          <div className={"project-art art-"+i}><div className="project-orb"/><span className="project-float glass-button">{p.label}</span></div>
          <div className="project-info"><span>{p.label}</span><h3>{p.title}</h3><p>{p.text}</p><ArrowUpRight size={18}/></div>
        </motion.a>
      )}</div>
    </section>

    <motion.section className="statement" initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={reveal}><span className="eyebrow">NEXUM CLOUD / 05</span><h2>Не показываем<br/><span>возможности. Показываем результат.</span></h2></motion.section>

    <footer id="contact"><div><span className="eyebrow">START A PROJECT / 06</span><h2>Давайте создадим<br/>то, что хочется открыть.</h2><p>Сайт, продукт, интерфейс или цифровую систему.</p></div><a className="primary glass-button" href="mailto:hello@nexum.cloud">Связаться <ArrowUpRight size={18}/></a></footer>
  </main>
}