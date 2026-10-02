import { useEffect, useState } from 'react'
import Logo from './Logo'
import { Arrow } from './Icons'
import './Navbar.css'

const links = [
  ['#services', 'Leistungen'],
  ['#farbwelt', 'Farbwelt'],
  ['#projekte', 'Projekte'],
  ['#about', 'Über uns'],
  ['#faq', 'FAQ'],
]

function Navbar({ page, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const go = (hash) => {
    setOpen(false)
    if (page !== 'home') onNavigate(hash)
    else document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled || page !== 'home' ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container nav-inner">
        <button className="nav-logo" onClick={() => { setOpen(false); onNavigate() }} aria-label="Gogi Color Startseite">
          <Logo />
        </button>

        <nav className="nav-links" aria-label="Hauptnavigation">
          {links.map(([hash, label]) => (
            <button key={hash} onClick={() => go(hash)}>{label}</button>
          ))}
        </nav>

        <button className="btn btn-ink nav-cta" onClick={() => go('#kontakt')}>
          Offerte anfragen
          <Arrow />
        </button>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="nav-mobile" aria-hidden={!open}>
        {links.map(([hash, label], i) => (
          <button key={hash} onClick={() => go(hash)} style={{ transitionDelay: `${0.05 * i + 0.1}s` }}>
            <span>0{i + 1}</span>
            {label}
          </button>
        ))}
        <button className="btn btn-gold" onClick={() => go('#kontakt')}>
          Offerte anfragen
          <Arrow />
        </button>
      </div>
    </header>
  )
}

export default Navbar
