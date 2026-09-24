import { useState } from 'react'
import './App.css'

const projects = [
  { name: 'OmniLink SDK', url: 'https://github.com/obieda-hussien/OmniLinkSDK', tech: 'ANDROID · SDK', en: 'Exploring communication and integration between Android applications.', ar: 'استكشاف التواصل والتكامل بين تطبيقات أندرويد.' },
  { name: 'Omni AndroidIDE', url: 'https://github.com/obieda-hussien/Omni-AndroidIDE-', tech: 'ANDROID · TOOLING', en: 'Exploring development workflows and tools on a phone.', ar: 'تجارب في أدوات التطوير وبرمجة أندرويد من الموبايل.' },
  { name: 'Omni Launcher', url: 'https://github.com/obieda-hussien/Omni-launcher', tech: 'ANDROID · UI', en: 'Exploring home-screen experiences and performance on Android.', ar: 'استكشاف الشاشة الرئيسية والتفاعل والأداء على أندرويد.' },
]

const content = {
  en: {
    nav: ['Work', 'About', 'Contact'], language: 'العربية',
    eyebrow: 'ANDROID DEVELOPER · ALEXANDRIA, EGYPT',
    hello: "Hey, I’m Obieda.", title: 'Building useful software for real devices.',
    intro: 'I explore Android development, system integration, developer tools, and practical AI-powered workflows. I care about performance and thoughtful implementation—not inflated numbers.',
    work: 'Explore public work', github: 'GitHub profile', focus: 'What I focus on',
    focusBody: 'Android apps · Developer tools · Performance · System integration',
    selected: 'SELECTED REPOSITORIES', publicWork: 'Public work.',
    publicBody: 'A few projects I have chosen to share. Each repository documents its own current status.',
    repo: 'View repository', aboutLabel: 'A LITTLE ABOUT ME',
    aboutTitle: 'Curiosity meets real-world constraints.',
    aboutBody: 'I work with Kotlin, Java, Jetpack Compose, and Android tooling. I enjoy understanding how software behaves on everyday phones—especially when memory, platform permissions, or performance shape the design.',
    privacy: 'Not every project needs to be public. This page only features work I have chosen to share.',
    contactLabel: 'GET IN TOUCH', contactTitle: 'Have a project in mind?',
    contactBody: 'For business inquiries, reach out via Codenetra. For code and public projects, find me on GitHub.',
    company: 'Visit Codenetra', footer: 'Building, experimenting, and learning along the way.',
  },
  ar: {
    nav: ['المشاريع', 'عني', 'تواصل'], language: 'English',
    eyebrow: 'مطور أندرويد · الإسكندرية، مصر',
    hello: 'أهلًا، أنا عبيدة.', title: 'ببني برمجيات مفيدة لأجهزة حقيقية.',
    intro: 'بهتم بتطوير أندرويد والتكامل مع النظام وأدوات المطورين والاستخدام العملي للذكاء الاصطناعي. الأداء وجودة التنفيذ أهم عندي من الأرقام الكبيرة.',
    work: 'شوف الأعمال العامة', github: 'حساب GitHub', focus: 'مجالات اهتمامي',
    focusBody: 'تطبيقات أندرويد · أدوات التطوير · الأداء · التكامل مع النظام',
    selected: 'مستودعات مختارة', publicWork: 'أعمال عامة.',
    publicBody: 'مجموعة صغيرة من المشاريع اللي اخترت أشاركها. كل مستودع فيه تفاصيله وحالته الحالية.',
    repo: 'افتح المستودع', aboutLabel: 'نبذة عني',
    aboutTitle: 'الفضول مع حدود الأجهزة.',
    aboutBody: 'بستخدم Kotlin وJava وJetpack Compose وأدوات أندرويد. بحب أفهم البرمجيات بتتصرف إزاي على موبايلات عادية، خصوصًا لما الذاكرة والصلاحيات والأداء يفرضوا قرارات هندسية.',
    privacy: 'مش لازم كل مشروع يبقى عامًا. الصفحة دي بتعرض بس الشغل اللي اخترت أشاركه.',
    contactLabel: 'نتواصل', contactTitle: 'عندك فكرة مشروع؟',
    contactBody: 'للاستفسارات التجارية اتواصل من خلال Codenetra، وللكود والمشاريع العامة شوف حساب GitHub.',
    company: 'موقع Codenetra', footer: 'ببني وبجرّب وباتعلّم مع كل مشروع.',
  },
}

const github = 'https://github.com/obieda-hussien'
const company = 'https://obieda-hussien.github.io/Codnetra/'

export default function App() {
  const [language, setLanguage] = useState('en')
  const t = content[language]
  const arabic = language === 'ar'
  return (
    <div className="site" lang={language} dir={arabic ? 'rtl' : 'ltr'}>
      <a className="skip" href="#main">{arabic ? 'انتقل للمحتوى' : 'Skip to content'}</a>
      <header className="site-header">
        <nav className="wrap nav" aria-label={arabic ? 'التنقل الرئيسي' : 'Main navigation'}>
          <a className="brand" href="#home" aria-label="Obieda Hussien"><span className="brand-mark">O<span>.</span></span><span>Obieda <i>Hussien</i></span></a>
          <div className="nav-links"><a href="#work">{t.nav[0]}</a><a href="#about">{t.nav[1]}</a><a href="#contact">{t.nav[2]}</a></div>
          <button className="language" type="button" onClick={() => setLanguage(arabic ? 'en' : 'ar')} aria-label={arabic ? 'Switch to English' : 'التبديل للعربية'}>{t.language} ↗</button>
        </nav>
      </header>
      <main id="main">
        <section className="wrap hero" id="home">
          <div className="hero-content">
            <span className="eyebrow"><span className="dot" />{t.eyebrow}</span>
            <p className="hello">{t.hello}</p>
            <h1>{t.title}</h1>
            <p className="lead">{t.intro}</p>
            <div className="actions"><a className="button primary" href="#work">{t.work} ↗</a><a className="button outlined" href={github} target="_blank" rel="noreferrer">{t.github} ↗</a></div>
          </div>
          <aside className="focus">
            <div className="focus-top"><span>⌘ &nbsp; / FOCUS</span><span>•••</span></div>
            <div className="focus-art" aria-hidden="true"><span>O.</span></div>
            <span className="small-label">{t.focus}</span><p>{t.focusBody}</p>
            <div className="focus-tags"><span>Kotlin</span><span>Java</span><span>Compose</span><span>Android</span></div>
          </aside>
        </section>
        <section className="work-section" id="work"><div className="wrap">
          <span className="kicker">/ 01 — {t.selected}</span><div className="section-intro"><h2>{t.publicWork}</h2><p>{t.publicBody}</p></div>
          <div className="project-grid">{projects.map((project, index) => <article className="project" key={project.name}>
            <div className="project-top"><span>0{index + 1} / 03</span><span aria-hidden="true">↗</span></div>
            <span className="project-symbol" aria-hidden="true">{['⤳', '⌘', '◈'][index]}</span>
            <h3>{project.name}</h3><p>{project[language]}</p>
            <span className="project-tech">{project.tech}</span><a className="project-link" href={project.url} target="_blank" rel="noreferrer">{t.repo} ↗<span className="sr-only"> — {project.name}</span></a>
          </article>)}</div>
        </div></section>
        <section className="wrap about" id="about"><div className="big-number" aria-hidden="true">02<span>.</span></div><div><span className="kicker">/ 02 — {t.aboutLabel}</span><h2>{t.aboutTitle}</h2><p>{t.aboutBody}</p><p className="privacy-note">{t.privacy}</p></div></section>
        <section className="contact-section" id="contact"><div className="wrap contact"><div><span className="kicker">/ 03 — {t.contactLabel}</span><h2>{t.contactTitle}</h2><p>{t.contactBody}</p></div><div className="contact-actions"><a className="button primary" href={company}>{t.company} ↗</a><a className="button outlined" href={github} target="_blank" rel="noreferrer">{t.github} ↗</a></div></div></section>
      </main>
      <footer className="wrap footer"><span>© {new Date().getFullYear()} Obieda Hussien</span><span>{t.footer}</span><a href="#home" aria-label={arabic ? 'للأعلى' : 'Back to top'}>↑</a></footer>
    </div>
  )
}
