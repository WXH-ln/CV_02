import { Link } from 'react-router-dom'

export function SectionPage({ meta, language, children }) {
  const label = typeof meta.label === 'string' ? meta.label : meta.label[language] ?? meta.label.en

  return (
    <main className="page section-page">
      <header className="section-header">
        <div className="section-title-wrap">
          <span className="section-kicker">{label}</span>
          <span className="section-number">{meta.number}</span>
        </div>

        <Link to="/" className="close-button" aria-label="Return home">
          ×
        </Link>
      </header>

      <div className="section-body">
        <div className="section-shell">
          <div className="page-ornament" aria-hidden="true" />
          {children}
        </div>
      </div>
    </main>
  )
}
