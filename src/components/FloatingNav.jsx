import { NavLink } from 'react-router-dom'

const navPaths = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'experience', path: '/experience' },
  { key: 'projects', path: '/projects' },
  { key: 'portfolio', path: '/portfolio' },
  { key: 'contact', path: '/contact' },
]

export function FloatingNav({ current, labels }) {
  const activeIndex = navPaths.findIndex((item) => item.key === current)

  return (
    <nav
      className="floating-nav"
      aria-label="Primary navigation"
      style={{ '--active-index': activeIndex >= 0 ? activeIndex : 0 }}
    >
      <div className="nav-slider" aria-hidden="true" />
      {navPaths.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => {
            const activeState = current === item.key || (item.key === 'home' && current === 'home')
            return `nav-item ${isActive || activeState ? 'is-active' : ''}`.trim()
          }}
        >
          <span>{labels[item.key] ?? item.key}</span>
        </NavLink>
      ))}
    </nav>
  )
}
