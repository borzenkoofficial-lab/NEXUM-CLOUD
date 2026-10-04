import { ArrowDown, ArrowUpRight, Box, Bot, Layers3, Orbit, Sparkles, Workflow } from 'lucide-react';
import { useEffect, useState } from 'react';
import { HeroScene } from './components/HeroScene';

const capabilities = [
  { n:'01', icon:Box, title:'Web & digital products', text:'Сайты, сервисы и интерфейсы, которые ощущаются как полноценный продукт.' },
  { n:'02', icon:Orbit, title:'3D & WebGL', text:'Realtime-сцены, процедурная графика, интерактивные объекты и пространственные интерфейсы.' },
  { n:'03', icon:Sparkles, title:'Motion & interaction', text:'Scroll choreography, micro-interactions и анимация, которая поддерживает смысл.' },
  { n:'04', icon:Bot, title:'AI experiences', text:'AI-функции и интеллектуальные сценарии внутри реальных цифровых продуктов.' },
  { n:'05', icon:Workflow, title:'Systems & automation', text:'CRM, кабинеты, Telegram-боты, интеграции и автоматизация процессов.' },
  { n:'06', icon:Layers3, title:'Digital ecosystems', text:'Связываем интерфейсы, данные, сервисы и бизнес-логику в одну систему.' },
];

const projects = [
  { label:'AI BUILDER', title:'Nexum.dev', text:'Среда для создания цифровых продуктов с AI.' },
  { label:'AI CORE', title:'Nexum Core', text:'Интеллектуальное ядро и инструменты для AI-систем.' },
  { label:'MARKETPLACE', title:'Gruzli', text:'Цифровая система для заказчиков, диспетчеров и грузчиков.' },
];

export default function App() {
  return <main>
    <div className="scroll-progress" />
    <nav className="nav">
      <a className="brand" href="#"><span className="brand-mark">N</span><span>NEXUM CLOUD</span></a>
      <div className="nav-links"><a href="#showcase">Возможности</a><a href="#capabilities">Что создаём</a><a href="#projects">Проекты</a></div>
      <a className="nav-cta" href="#contact">Обсудить проект <ArrowUpRight size={16}/></a>
    </nav>

    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">NEXUM CLOUD · DIGITAL STUDIO</p>
        <h1>Мы создаём<br/><em>цифровую среду.</em></h1>
        <p className="lead">Сайты, интерфейсы, 3D, motion, AI и цифровые системы. Nexum Cloud — место, где наши возможности можно не только посмотреть, но и испытать.</p>
        <div className="hero-actions"><a className="primary" href="#showcase">Исследовать стенд <ArrowDown size={17}/></a><a className="secondary" href="#capabilities">Что мы умеем</a></div>
        <div className="hero-meta"><span>01 / 06</span><span>REALTIME WEBGL</span><span>SCROLL TO EXPLORE</span></div>
      </div>
      <div className="hero-visual"><div className="scene-caption"><span>PROCEDURAL OBJECT</span><span>60 FPS TARGET</span></div><HeroScene/><div className="visual-label"><span>WEBGL / REALTIME</span><span>DRAG · ROTATE</span></div></div>
    </section>

    <section id="showcase" className="manifesto">
      <p className="eyebrow">THE CLOUD / 01</p>
      <h2>Сайт — не презентация.<br/><span>Это демонстрация технологии.</span></h2>
      <p>Каждый экран Nexum Cloud задуман как отдельная сцена. Здесь можно показывать 3D-модели, motion, WebGL, интерфейсы и реальные продукты — без ощущения каталога шаблонов.</p>
      <a className="scroll-cue" href="#capabilities">SCROLL <ArrowDown size={15}/></a>
    </section>

    <section id="capabilities" className="capabilities">
      <div className="section-head"><p className="eyebrow">CAPABILITIES / 02</p><h2>От идеи<br/><span>до цифровой среды.</span></h2></div>
      <div className="services">{capabilities.map(({n,title,text,icon:Icon})=><article className="service" key={n}><div className="service-top"><span>{n}</span><Icon size={23} strokeWidth={1.5}/></div><h3>{title}</h3><p>{text}</p><span className="service-arrow"><ArrowUpRight size={19}/></span></article>)}</div>
    </section>

    <section className="lab">
      <div className="lab-orbit"><div className="lab-dot dot-a"/><div className="lab-dot dot-b"/><div className="lab-ring ring-a"/><div className="lab-ring ring-b"/></div>
      <div className="lab-copy"><p className="eyebrow">INTERACTIVE LAB / 03</p><h2>Плоский экран —<br/><span>только начало.</span></h2><p>Следующие сцены будут подключаться как самостоятельные модули: 3D-модели, частицы, физика, shaders, устройства, архитектура и scroll-driven transitions.</p><div className="lab-tags"><span>THREE.JS</span><span>WEBGL</span><span>GSAP</span><span>GLTF</span></div></div>
    </section>

    <section id="projects" className="projects">
      <div className="section-head"><p className="eyebrow">SELECTED WORK / 04</p><h2>Проекты<br/><span>внутри экосистемы.</span></h2></div>
      <div className="project-grid">{projects.map((p,i)=><a className="project-card" href="#contact" key={p.title}><div className={"project-art art-"+i}><div className="project-orb"/></div><div className="project-info"><span>{p.label}</span><h3>{p.title}</h3><p>{p.text}</p><ArrowUpRight size={18}/></div></a>)}</div>
    </section>

    <section className="statement"><span className="eyebrow">NEXUM CLOUD / 05</span><h2>Не показываем<br/><span>возможности. Показываем результат.</span></h2></section>

    <footer id="contact"><div><span className="eyebrow">START A PROJECT / 06</span><h2>Давайте создадим<br/>то, что хочется открыть.</h2><p>Сайт, продукт, интерфейс или цифровую систему.</p></div><a className="primary" href="mailto:hello@nexum.cloud">Связаться <ArrowUpRight size={18}/></a></footer>
  </main>
}