import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { HomeScreen } from './components/HomeScreen'
import { SectionPage } from './components/SectionPage'
import { FloatingNav } from './components/FloatingNav'
import { LANGUAGE_OPTIONS, defaultLanguage, localeText, sectionMeta } from './data/siteData'

const PAGE_ORDER = ['/', '/about', '/experience', '/projects', '/portfolio', '/contact']

function normalizePath(pathname) {
  const normalized = pathname.replace(/^\/CV_02/, '') || '/'
  return normalized === '' ? '/' : normalized
}

function getPageTitle(pathname, language) {
  const normalized = normalizePath(pathname)

  if (normalized === '/') {
    return localeText[language]?.nav.home ?? 'HOME'
  }

  const routeKey = Object.keys(sectionMeta).find((key) => sectionMeta[key].path === normalized)
  const meta = routeKey ? sectionMeta[routeKey] : null

  if (!meta) return localeText[language]?.nav.home ?? 'HOME'

  const label = typeof meta.label === 'string' ? meta.label : meta.label[language] ?? meta.label.en
  return label
}

function RouteTransitionOverlay({ transition }) {
  if (!transition) return null

  return (
    <div className={`route-transition ${transition.direction}`} aria-hidden="true">
      <div className="route-transition-glow" />
      <div className="route-transition-content">
        <span className="route-transition-kicker">{transition.kicker}</span>
        <span className="route-transition-title">{transition.title}</span>
      </div>
    </div>
  )
}

function AboutPage({ language }) {
  const text = localeText[language] ?? localeText.en

  return (
    <SectionPage meta={sectionMeta.about} language={language}>
      <div className="section-content">
        <div className="identity-block">
          <p className="eyebrow">{text.about.eyebrow}</p>
          <h2 className={language === 'en' ? '' : 'name-cjk'}>{language === 'zh-Hant' ? '王霄漢' : language === 'en' ? 'XIAOHAN WANG' : '王霄汉'}</h2>
          <ul className="tag-cloud">
            {text.about.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>

        <div className="info-panel">
          <p>{text.about.summary}</p>
        </div>
      </div>
    </SectionPage>
  )
}

function ExperiencePage({ language }) {
  const text = localeText[language] ?? localeText.en

  return (
    <SectionPage meta={sectionMeta.experience} language={language}>
      <div className="section-content timeline-layout">
        <div className="timeline">
          <div className="timeline-node active"><span>2024</span></div>
          <div className="timeline-node"><span>2025</span></div>
          <div className="timeline-node"><span>2026</span></div>
        </div>

        <div className="experience-panel">
          <p className="eyebrow">{text.experience.company}</p>
          <h3>{text.experience.role}</h3>
          <p className="period">2024.10 — 2025.06</p>
          <p>{text.experience.summary}</p>
        </div>
      </div>
    </SectionPage>
  )
}

function ProjectsPage({ language }) {
  return (
    <SectionPage meta={sectionMeta.projects} language={language}>
      <div className="section-content project-grid">
        {['COOKMIND', 'BUICK FUTURE RV', 'HEARTBEAT RESONANCE', 'SMART MEDICAL ESCORT VEHICLE'].map((item) => (
          <div key={item} className={`project-node ${item === 'COOKMIND' ? 'large' : ''}`}>
            {item}
          </div>
        ))}
      </div>
    </SectionPage>
  )
}

function PortfolioPage({ language }) {
  return (
    <SectionPage meta={sectionMeta.portfolio} language={language}>
      <div className="section-content gallery-layout">
        <div className="gallery-card float-one">
          <span>COOKMIND</span>
          <small>Service Design / 2025</small>
        </div>
        <div className="gallery-card float-two">
          <span>HEARTBEAT RESONANCE</span>
          <small>Interactive Experience / 2024</small>
        </div>
        <div className="gallery-card float-three">
          <span>BUICK FUTURE RV</span>
          <small>Concept System / 2025</small>
        </div>
      </div>
    </SectionPage>
  )
}

function ContactPage({ language }) {
  const text = localeText[language] ?? localeText.en

  return (
    <SectionPage meta={sectionMeta.contact} language={language}>
      <div className="section-content contact-layout">
        <p className="eyebrow">{text.contact.eyebrow}</p>
        <h3>{text.contact.title}</h3>
        <a href="mailto:hello@hanwang.design">{text.contact.email}</a>
      </div>
    </SectionPage>
  )
}

function LanguageSwitcher({ language, setLanguage }) {
  const activeIndex = LANGUAGE_OPTIONS.findIndex((option) => option.code === language)

  return (
    <div
      className="language-switcher"
      aria-label="Language switcher"
      style={{ '--lang-index': activeIndex >= 0 ? activeIndex : 0 }}
    >
      <div className="language-slider" aria-hidden="true" />
      {LANGUAGE_OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          className={language === option.code ? 'is-active' : ''}
          onClick={() => setLanguage(option.code)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

function AppShell({ language, setLanguage }) {
  const location = useLocation()
  const prevPathRef = useRef(null)
  const [transition, setTransition] = useState(null)

  const relativePath = normalizePath(location.pathname)
  const current = relativePath === '/' ? 'home' : relativePath.replace(/^\/+/, '')
  const navLabels = localeText[language].nav

  useEffect(() => {
    const prev = prevPathRef.current
    const next = relativePath

    if (!prev || prev === next) {
      prevPathRef.current = next
      return
    }

    const prevIndex = PAGE_ORDER.indexOf(prev)
    const nextIndex = PAGE_ORDER.indexOf(next)
    const direction = nextIndex > prevIndex ? 'right' : 'left'
    const title = getPageTitle(next, language)

    setTransition({
      direction,
      title,
      kicker: next === '/' ? localeText[language]?.nav.home ?? 'HOME' : title,
    })

    const timeoutId = window.setTimeout(() => {
      setTransition(null)
    }, 980)

    prevPathRef.current = next
    return () => window.clearTimeout(timeoutId)
  }, [language, relativePath])

  return (
    <div className="app-shell">
      <RouteTransitionOverlay transition={transition} />
      <LanguageSwitcher language={language} setLanguage={setLanguage} />

      <Routes>
        <Route path="/" element={<HomeScreen language={language} />} />
        <Route path="/about" element={<AboutPage language={language} />} />
        <Route path="/experience" element={<ExperiencePage language={language} />} />
        <Route path="/projects" element={<ProjectsPage language={language} />} />
        <Route path="/portfolio" element={<PortfolioPage language={language} />} />
        <Route path="/contact" element={<ContactPage language={language} />} />
      </Routes>

      <FloatingNav current={current} labels={navLabels} />
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState(defaultLanguage)
  const basename = typeof window !== 'undefined' && window.location.pathname.startsWith('/CV_02') ? '/CV_02' : '/'

  return (
    <BrowserRouter basename={basename}>
      <AppShell language={language} setLanguage={setLanguage} />
    </BrowserRouter>
  )
}

export default App
