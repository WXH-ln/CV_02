import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { homeEntries, localeText } from '../data/siteData'
import { WaveBackground } from './WaveBackground'

const createLightSet = () => [
  { className: 'dynamic-light-one', left: `${8 + Math.random() * 8}%`, top: `${10 + Math.random() * 10}%`, size: `${540 + Math.random() * 160}px`, delay: '0s' },
  { className: 'dynamic-light-two', left: `${46 + Math.random() * 16}%`, top: `${42 + Math.random() * 18}%`, size: `${640 + Math.random() * 180}px`, delay: '1.3s' },
  { className: 'dynamic-light-three', left: `${66 + Math.random() * 14}%`, top: `${18 + Math.random() * 16}%`, size: `${560 + Math.random() * 200}px`, delay: '2.1s' },
  { className: 'dynamic-light-four', left: `${20 + Math.random() * 18}%`, top: `${60 + Math.random() * 16}%`, size: `${700 + Math.random() * 220}px`, delay: '3.2s' },
  { className: 'dynamic-light-five', left: `${58 + Math.random() * 20}%`, top: `${68 + Math.random() * 12}%`, size: `${620 + Math.random() * 180}px`, delay: '4.1s' },
]

export function HomeScreen({ language }) {
  const [pointer, setPointer] = useState({ x: 0, y: 0, tiltX: 0, tiltY: 0 })
  const [lights] = useState(createLightSet)

  const entries = homeEntries[language] ?? homeEntries.en
  const text = localeText[language] ?? localeText.en

  useEffect(() => {
    const handleMove = (event) => {
      const { innerWidth, innerHeight } = window
      const x = (event.clientX / innerWidth - 0.5) * 52
      const y = (event.clientY / innerHeight - 0.5) * 38
      setPointer({
        x,
        y,
        tiltX: y * 1.8,
        tiltY: x * 1.8,
      })
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return (
    <main
      className="page home-page"
      style={{
        '--pointer-x': `${pointer.x}px`,
        '--pointer-y': `${pointer.y}px`,
        '--tilt-x': `${pointer.tiltX}deg`,
        '--tilt-y': `${pointer.tiltY}deg`,
      }}
    >
      <WaveBackground active="home" />
      <div className="grain-overlay" aria-hidden="true" />
      {lights.map((light) => (
        <div
          key={light.className}
          className={`dynamic-light ${light.className}`}
          aria-hidden="true"
          style={{
            left: light.left,
            top: light.top,
            width: light.size,
            height: light.size,
            animationDelay: light.delay,
          }}
        />
      ))}

      <div className="home-content">
        <p className="home-index">{text.homeIndex}</p>
        <h1 className={language === 'en' ? '' : 'name-cjk'}>{language === 'zh-Hant' ? '王霄漢' : language === 'en' ? 'XIAOHAN WANG' : '王霄汉'}</h1>
        <p className="home-tagline">{text.tagline}</p>
        <p className="home-note">{text.note}</p>
      </div>

      {entries.map((entry) => (
        <Link
          key={entry.label}
          to={entry.path}
          className="home-node"
          style={entry.style}
          aria-label={`Open ${entry.label}`}
        >
          <span className="node-sigil" aria-hidden="true" />
          <span className="node-label">{entry.label}</span>
        </Link>
      ))}
    </main>
  )
}
