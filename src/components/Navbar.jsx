import { useEffect, useState } from 'react'
import Logo from './Logo'
import { Mail, Instagram, Pin } from './Icons'
import './Navbar.css'

const links = [
  ['#leistungen', 'Leistungen'],
  ['#ueber-uns', 'Über uns'],
  ['#ablauf', 'Ablauf'],
  ['#impressionen', 'Impressionen'],
  ['#faq', 'FAQ'],
  ['#kontakt', 'Kontakt'],
]

function Navbar({ page, onNavigate }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const go = (hash) => {
    setOpen(false)
    if (page !== 'home') onNavigate(hash)
    else document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header ${open ? 'is-open' : ''}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Pin /> Zürich &amp; Umgebung</span>
          <div>
            <a href="mailto:info@gogicolor.ch"><Mail /> info@gogicolor.ch</a>
            <a href="https://www.instagram.com/gogi_color/" target="_blank" rel="noopener noreferrer">
              <Instagram /> @gogi_color
            </a>
          </div>
        </div>
      </div>

      <div className="nav">
        <div className="container nav-inner">
          <button className="nav-logo" onClick={() => { setOpen(false); onNavigate() }} aria-label="Gogi Color Startseite">
            <Logo />
          </button>

          <nav className="nav-links" aria-label="Hauptnavigation">
            {links.map(([hash, label]) => (
              <button key={hash} onClick={() => go(hash)}>{label}</button>
            ))}
          </nav>

          <button className="btn btn-gold nav-cta" onClick={() => go('#kontakt')}>
            Offerte anfragen
          </button>

          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="nav-mobile" aria-hidden={!open}>
          {links.map(([hash, label]) => (
            <button key={hash} onClick={() => go(hash)}>{label}</button>
          ))}
          <button className="btn btn-gold" onClick={() => go('#kontakt')}>Offerte anfragen</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
