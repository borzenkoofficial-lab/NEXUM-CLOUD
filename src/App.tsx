import { ArrowDown, ArrowUpRight, Box, Bot, Layers3, Orbit, Sparkles, Workflow, Smartphone, Globe2, Database, Wand2 } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useTransform, type Variants } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import RawFlexCarousel from './components/FlexCarousel/FlexCarousel';

const FlexCarousel: any = RawFlexCarousel;

const capabilities = [
  { n:'01', icon:Globe2, title:'Сайты и digital-продукты', text:'Промо-сайты, корпоративные платформы, сервисы и интерфейсы с собственной визуальной системой.' },
  { n:'02', icon:Smartphone, title:'Мобильные интерфейсы', text:'Адаптивные продукты, сценарии для мобильных устройств и интерфейсы, которые одинаково хорошо работают на любом экране.' },
  { n:'03', icon:Orbit, title:'3D, WebGL и motion', text:'Интерактивные сцены, realtime-графика, scroll-анимации, микровзаимодействия и визуальные эффекты.' },
  { n:'04', icon:Bot, title:'AI и интеллектуальные функции', text:'AI-интерфейсы, ассистенты, автоматизация и интеллектуальные сценарии, встроенные в реальный продукт.' },
  { n:'05', icon:Database, title:'CRM и внутренние системы', text:'Личные кабинеты, CRM, панели управления, базы данных и цифровые рабочие пространства.' },
  { n:'06', icon:Workflow, title:'Интеграции и автоматизация', text:'Telegram, платежи, API, уведомления, внешние сервисы и бизнес-процессы в единой системе.' },
  { n:'07', icon:Sparkles, title:'Поддержка и развитие', text:'Техническая поддержка, обновления, аналитика, улучшения и сопровождение после запуска.' },
  { n:'08', icon:Layers3, title:'Хостинг и инфраструктура', text:'Размещение, SSL, CDN, резервные копии, мониторинг и стабильная работа проекта.' },
  { n:'09', icon:Globe2, title:'Домен и запуск', text:'Подбор и подключение домена, DNS, почты, SSL и полный запуск проекта в сети.' },
];

const showcaseItems = [
  { src: '/assets/mockups/web-product.svg', alt: 'Мокап сайта и цифрового продукта', title: 'WEB / 01', subtitle: 'Цифровой продукт' },
  { src: '/assets/mockups/mobile-ui.svg', alt: 'Мокап мобильного интерфейса', title: 'MOBILE / 02', subtitle: 'Интерфейс продукта' },
  { src: '/assets/mockups/ai-interface.svg', alt: 'Мокап AI интерфейса', title: 'AI / 03', subtitle: 'Интеллектуальный интерфейс' },
  { src: '/assets/mockups/telegram-bot.svg', alt: 'Мокап Telegram бота', title: 'BOT / 04', subtitle: 'Автоматизация Telegram' },
  { src: '/assets/mockups/crm-system.svg', alt: 'Мокап CRM системы', title: 'CRM / 05', subtitle: 'Цифровая система' },
  { src: '/assets/mockups/automation.svg', alt: 'Мокап автоматизации', title: 'AUTOMATION / 06', subtitle: 'Единая экосистема' },
  { src: '/assets/mockups/support.svg', alt: 'Мокап поддержки цифрового продукта', title: 'SUPPORT / 07', subtitle: 'Поддержка продукта' },
  { src: '/assets/mockups/hosting.svg', alt: 'Мокап хостинга и инфраструктуры', title: 'HOSTING / 08', subtitle: 'Облачная инфраструктура' },
  { src: '/assets/mockups/domain.svg', alt: 'Мокап домена и запуска проекта', title: 'DOMAIN / 09', subtitle: 'Запуск и DNS' },
];

const projects = [
  { label:'AI РАЗРАБОТКАER', title:'Nexum.dev', text:'Среда для создания цифровых продуктов с AI.' },
  { label:'AI-ЯДРО', title:'Nexum Core', text:'Интеллектуальное ядро и инструменты для AI-систем.' },
  { label:'МАРКЕТПЛЕЙС', title:'Gruzli', text:'Цифровая система для заказчиков, диспетчеров и грузчиков.' },
];

const process = [
  ['01','АНАЛИЗ','Разбираем задачу, продукт, аудиторию и точки роста.'],
  ['02','ДИЗАЙН','Создаём визуальную систему, прототип и интерактивную концепцию.'],
  ['03','РАЗРАБОТКА','Собираем рабочий продукт, подключаем данные, сервисы и автоматизацию.'],
  ['04','ЗАПУСК','Проверяем сценарии, оптимизируем и доводим до запуска.'],
];

const heroLabels = [
  { eyebrow:'ЦИФРОВОЙ ПРОДУКТ', title:'Сайт, который работает на ваш бизнес.', meta:'САЙТ · UX · FRONTEND' },
  { eyebrow:'ЖИДКИЙ ИНТЕРФЕЙС', title:'Интерфейс, которым хочется пользоваться.', meta:'UI · АНИМАЦИЯ · GLASS' },
  { eyebrow:'AI-ОПЫТ', title:'AI встроен непосредственно в продукт.', meta:'AI · АВТОМАТИЗАЦИЯ · СИСТЕМЫ' },
  { eyebrow:'ЕДИНАЯ СИСТЕМА', title:'Все сервисы — в одной цифровой экосистеме.', meta:'CRM · API · TELEGRAM' },
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
  const [heroLabel, setHeroLabel] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setHeroLabel((value) => (value + 1) % heroLabels.length), 3200);
    return () => window.clearInterval(timer);
  }, []);

  return <main>
    <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

    <motion.nav className="nav" style={{ opacity: useTransform(navBlur, [0,1], [.98, .9]) }}>
      <a className="brand" href="#"><span className="brand-mark">N</span><span>NEXUM CLOUD</span></a>
      <div className="nav-links">
        <a href="#about">Студия</a><a href="#capabilities">Услуги</a><a href="#showcase">Продукты</a><a href="#projects">Проекты</a>
      </div>
      <a className="nav-cta glass-button" href="#contact">Обсудить проект <ArrowUpRight size={16}/></a>
    </motion.nav>

    <section className="hero" ref={heroRef}>
      <motion.div className="hero-copy" style={{ y: heroY, opacity: heroOpacity }}>
        <motion.div initial="hidden" animate="show" variants={reveal}><p className="eyebrow">NEXUM CLOUD · ЦИФРОВАЯ СТУДИЯ</p></motion.div>
        <motion.div className="nexum-brand-hero" initial="hidden" animate="show" variants={reveal}>
          <div className="nexum-logo-mark"><span>N</span><i/><b/></div>
          <div className="nexum-brand-wordmark">
            <span>NEXUM</span><strong>CLOUD</strong>
          </div>
        </motion.div>
        <motion.div className="hero-title-block" initial="hidden" animate="show" variants={reveal} transition={{ delay: .08 }}>
          <h1>Цифровые системы<br/><em>с человеческим подходом.</em></h1>
          <p>Создаём сайты, цифровые продукты и интеллектуальные системы, объединяя дизайн, технологии и автоматизацию в одну среду.</p>
        </motion.div>
        <motion.div className="hero-info-grid" initial="hidden" animate="show" variants={reveal} transition={{ delay: .16 }}>
          <div><span>01</span><b>ДИЗАЙН</b><small>UI / UX · БРЕНД</small></div>
          <div><span>02</span><b>РАЗРАБОТКА</b><small>САЙТЫ · МОБИЛЬНЫЕ · 3D</small></div>
          <div><span>03</span><b>ИНТЕЛЛЕКТ</b><small>AI · АВТОМАТИЗАЦИЯ</small></div>
        </motion.div>
        <motion.div className="hero-actions" initial="hidden" animate="show" variants={reveal} transition={{ delay: .24 }}>
          <a className="primary glass-button" href="#showcase">Посмотреть возможности <ArrowDown size={17}/></a>
          <a className="secondary glass-button" href="#contact">Начать проект</a>
        </motion.div>
        <motion.div className="hero-proof" initial="hidden" animate="show" variants={reveal} transition={{ delay: .32 }}>
          <span><b>WEB</b> / САЙТЫ</span><span><b>AI</b> / СИСТЕМЫ</span><span><b>3D</b> / АНИМАЦИЯ</span>
        </motion.div>
      </motion.div>

      <motion.div className="hero-visual hero-product glass-panel" style={{ scale: heroScale }}>
        <div className="scene-caption"><span>NEXUM / ЦИФРОВОЙ ПРОДУКТ</span><span>0{heroLabel + 1} / 04</span></div>
        <div className="scene-chip glass-button"><span className="status-dot"/> ОНЛАЙН / ПРЕДПРОСМОТР</div>
        <div className="hero-product-glow" />
        <div className="website-mockup">
          <div className="mock-browser-bar">
            <span className="browser-dots"><i/><i/><i/></span>
            <span>nexum.cloud</span>
            <span className="browser-status">LIVE</span>
          </div>
          <img src="/assets/mockups/web-product.svg" alt="Пример дизайна цифрового продукта Nexum Cloud" />
          <div className="mockup-reflection" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={heroLabel}
            className="hero-changing-copy"
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -14, filter: 'blur(8px)' }}
            transition={{ duration: .55, ease: 'easeOut' }}
          >
            <span>{heroLabels[heroLabel].eyebrow}</span>
            <strong>{heroLabels[heroLabel].title}</strong>
            <small>{heroLabels[heroLabel].meta}</small>
          </motion.div>
        </AnimatePresence>
        <div className="hero-glass-orb" />
        <div className="hero-orbit-label glass-button"><Wand2 size={14}/> LIQUID GLASS</div>
        <div className="visual-label"><span>ИНТЕРАКТИВНЫЙ ПРОДУКТ</span><span>АВТОПРОСМОТР / 04</span></div>
      </motion.div>
    </section>

    <section id="about" className="about">
      <div className="about-topline">
        <p className="eyebrow">NEXUM CLOUD / 01</p>
        <span>DESIGN · TECHNOLOGY · INTELLIGENCE</span>
      </div>
      <div className="about-hero">
        <div className="about-title">
          <h2>Мы собираем<br/><em>цифровые продукты.</em></h2>
        </div>
        <div className="about-description">
          <p>От первого экрана до работающей системы — дизайн, разработка, AI, данные и автоматизация соединяются в одном продукте.</p>
          <div className="about-meta"><span>WEB</span><span>AI</span><span>3D</span><span>CRM</span><span>OPS</span></div>
        </div>
      </div>
      <div className="about-carousel-wrap">
        <div className="about-carousel-head">
          <span>PRODUCT SYSTEM / 01—06</span>
          <span>DRAG · SCROLL · EXPLORE</span>
        </div>
        <div className="about-carousel glass-panel">
          <div className="about-native-carousel">
            <button className="about-carousel-control prev" type="button" aria-label="Предыдущий мокап"
              onClick={() => {
                const track = document.querySelector('.about-native-track') as HTMLElement | null;
                track?.scrollBy({ left: -(track.clientWidth * 0.78), behavior: 'smooth' });
              }}>‹</button>
            <div className="about-native-track">
              {showcaseItems.slice(0, 6).map((item, index) => (
                <article className="about-native-card" key={item.src}>
                  <div className="about-native-image">
                    <img src={item.src} alt={item.alt} loading={index === 0 ? 'eager' : 'lazy'} />
                  </div>
                  <div className="about-native-caption">
                    <span>{item.title}</span>
                    <small>{item.subtitle}</small>
                  </div>
                </article>
              ))}
            </div>
            <button className="about-carousel-control next" type="button" aria-label="Следующий мокап"
              onClick={() => {
                const track = document.querySelector('.about-native-track') as HTMLElement | null;
                track?.scrollBy({ left: track.clientWidth * 0.78, behavior: 'smooth' });
              }}>›</button>
          </div>
        </div>
      </div>
      <div className="about-bottom">
        <div className="about-number">01—04</div>
        <p>Не собираем сайт отдельно, CRM отдельно и AI отдельно. Проектируем единую цифровую среду, где интерфейс, данные и бизнес-логика работают вместе.</p>
        <div className="about-stats">
          <div><strong>WEB</strong><span>сайты и сервисы</span></div>
          <div><strong>AI</strong><span>умные функции</span></div>
          <div><strong>3D</strong><span>визуализация</span></div>
          <div><strong>OPS</strong><span>автоматизация</span></div>
        </div>
      </div>
    </section>

    <section id="showcase" className="mockup-showcase">
      <div className="section-head compact">
        <div><p className="eyebrow">ЖИДКОЕ СТЕКЛО / ВИТРИНА / 02</p><h2>Сайт. Приложение. Бот.<br/><span>Всё в одной системе.</span></h2></div>
        <p className="section-note">От сайта и мобильного интерфейса до Telegram-бота, поддержки, хостинга и домена — создаём не отдельные экраны, а полноценный цифровой продукт.</p>
      </div>
      <div className="hero-carousel glass-panel">
        <FlexCarousel items={showcaseItems} preset="liquid" intro="rise" cardHeight={0.58} gap={14} radius={20} squeeze={0.2} focusOnClick captions captureWheel />
      </div>
    </section>

    <motion.section className="manifesto" initial="hidden" whileInView="show" viewport={{ once:true, amount:.25 }} variants={reveal}>
      <p className="eyebrow">ПОДХОД NEXUM / 03</p>
      <h2>Красивый интерфейс —<br/><span>только первый слой.</span></h2>
      <p>За ним должна работать система: данные, интеграции, логика, AI и понятный пользовательский сценарий. Поэтому мы проектируем не страницу, а целостный цифровой продукт.</p>
    </motion.section>

    <section id="capabilities" className="capabilities">
      <div className="section-head"><p className="eyebrow">УСЛУГИ / 04</p><h2>Что мы<br/><span>умеем делать.</span></h2></div>
      <div className="services">{capabilities.map(({n,title,text,icon:Icon}, i)=>
        <motion.article className="service glass-card" key={n} initial="hidden" whileInView="show" viewport={{ once:true, amount:.18 }} variants={reveal} transition={{ delay:i*.06 }}>
          <div className="service-top"><span>{n}</span><Icon size={23} strokeWidth={1.5}/></div>
          <h3>{title}</h3><p>{text}</p><span className="service-arrow glass-button"><ArrowUpRight size={19}/></span>
        </motion.article>
      )}</div>
    </section>

    <section className="process">
      <div className="section-head"><p className="eyebrow">КАК МЫ РАБОТАЕМ / 05</p><h2>От задачи<br/><span>до запуска.</span></h2></div>
      <div className="process-grid">{process.map(([n,title,text]) =>
        <motion.div className="process-card glass-card" key={n} initial="hidden" whileInView="show" viewport={{ once:true, amount:.25 }} variants={reveal}>
          <span>{n}</span><h3>{title}</h3><p>{text}</p>
        </motion.div>
      )}</div>
    </section>

    <section className="lab">
      <div className="lab-orbit"><div className="lab-dot dot-a"/><div className="lab-dot dot-b"/><div className="lab-ring ring-a"/><div className="lab-ring ring-b"/></div>
      <motion.div className="lab-copy" initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={reveal}>
        <p className="eyebrow">ИНТЕРАКТИВНАЯ ЛАБОРАТОРИЯ / 06</p><h2>Плоский экран —<br/><span>только начало.</span></h2>
        <p>Подключаем 3D, физику, шейдеры, частицы, устройства и анимации при прокрутке там, где это усиливает продукт.</p>
        <div className="lab-tags"><span>THREE.JS</span><span>WEBGL</span><span>GSAP</span><span>GLTF</span></div>
      </motion.div>
      <div className="lab-glass-panel glass-panel"><span className="status-dot"/> СИСТЕМА РЕАЛЬНОГО ВРЕМЕНИ<div className="lab-bars"><i/><i/><i/><i/><i/></div></div>
    </section>

    <section id="projects" className="projects">
      <div className="section-head"><p className="eyebrow">ИЗБРАННЫЕ ПРОЕКТЫ / 07</p><h2>Продукты<br/><span>в экосистеме Nexum.</span></h2></div>
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
      <div><span className="eyebrow">НАЧАТЬ ПРОЕКТ / 09</span><h2>Есть задача?<br/>Покажем, что можно сделать.</h2><p>Сайт, продукт, интерфейс, AI-система или автоматизация.</p></div>
      <a className="primary glass-button" href="mailto:hello@nexum.cloud">Обсудить проект <ArrowUpRight size={18}/></a>
    </footer>
  </main>
}