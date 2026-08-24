import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar({ page, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (hash) => {
    setOpen(false)
    if (page !== 'home') onNavigate(hash)
    else document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <button className="logo" onClick={() => onNavigate()} aria-label="Gogi Color Startseite">
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">Gogi Color</span>
        </button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          <button onClick={() => go('#services')}>Leistungen</button>
          <button onClick={() => go('#about')}>Über uns</button>
          <button onClick={() => go('#gallery')}>Projekte</button>
          <button onClick={() => go('#process')}>Ablauf</button>
          <button onClick={() => go('#contact')}>Anfrage</button>
          <a className="btn btn-primary nav-cta" href="mailto:info@gogicolor.ch">
            Offerte anfragen
          </a>
        </nav>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
