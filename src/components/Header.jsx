// Kopfzeile: Skip-Link, Logo, Navigation mit Leistungs-Menü, CTA, mobiles Menü.
// Props: path – aktuelle Route (für aria-current)
import { useCallback, useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { IconArrowRight, IconChevronDown, IconClose, IconInstagram, IconMail, IconMenu, IconPhone } from './Icons'
import { OFFER_HREF, ariaCurrent, primaryLinks, serviceLinks, servicePagePaths } from './nav'
import { servicesIntro } from '../content/home'
import { site, telHref } from '../site'
import './Header.css'

const DESKTOP_QUERY = '(min-width: 64em)'

// Seite hinter dem mobilen Menü sperren (Scroll + inert)
function setPageLocked(locked) {
  document.documentElement.classList.toggle('is-menu-open', locked)
  document.querySelectorAll('main, footer, .mobile-bar').forEach((el) => {
    el.inert = locked
  })
}

export default function Header({ path }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const servicesButtonRef = useRef(null)
  const dropdownRef = useRef(null)

  const isServicePage = servicePagePaths.includes(path)

  const closeMenu = useCallback(() => {
    setPageLocked(false)
    setMenuOpen(false)
  }, [])

  // Mobiles Menü: Sperre, Escape, beim Wechsel auf Desktop-Breite schliessen
  useEffect(() => {
    if (!menuOpen) return undefined
    setPageLocked(true)
    const onKey = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
        menuButtonRef.current?.focus()
      }
    }
    const mq = window.matchMedia(DESKTOP_QUERY)
    const onChange = (event) => event.matches && closeMenu()
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      setPageLocked(false)
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [menuOpen, closeMenu])

  // Leistungs-Menü (Desktop): Escape und Klick ausserhalb schliessen
  useEffect(() => {
    if (!servicesOpen) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setServicesOpen(false)
        servicesButtonRef.current?.focus()
      }
    }
    const onPointer = (event) => {
      if (!dropdownRef.current?.contains(event.target)) setServicesOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [servicesOpen])

  // Fokus verlässt das Leistungs-Menü → schliessen
  const onDropdownBlur = (event) => {
    if (event.relatedTarget && !dropdownRef.current?.contains(event.relatedTarget)) setServicesOpen(false)
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>

      <div className="container site-header__bar">
        <a href="/" className="site-header__logo" aria-label="Gogi Color – zur Startseite" aria-current={ariaCurrent(path, '/')}>
          <Logo />
        </a>

        <nav className="site-nav" aria-label="Hauptnavigation">
          <ul className="site-nav__list">
            <li className="site-nav__item" ref={dropdownRef} onBlur={onDropdownBlur}>
              <button
                type="button"
                ref={servicesButtonRef}
                className={`site-nav__link site-nav__trigger${isServicePage ? ' is-active' : ''}`}
                aria-expanded={servicesOpen}
                aria-controls="nav-leistungen"
                onClick={() => setServicesOpen((open) => !open)}
              >
                Leistungen
                <IconChevronDown size={16} />
              </button>

              <div id="nav-leistungen" className={`mega${servicesOpen ? ' is-open' : ''}`}>
                <div className="container mega__inner">
                  <ul className="mega__list">
                    {serviceLinks.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className="mega__link" aria-current={ariaCurrent(path, link.href)}>
                          <span className="mega__title">
                            {link.label}
                            <IconArrowRight size={16} />
                          </span>
                          <span className="mega__text">{link.text}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mega__aside">
                    <p className="eyebrow">{servicesIntro.eyebrow}</p>
                    <p className="mega__lead">{servicesIntro.lead}</p>
                    <a href="/#leistungen" className="link-arrow">
                      Alle Leistungen im Überblick
                      <IconArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {primaryLinks.map((link) => (
              <li key={link.href} className="site-nav__item">
                <a href={link.href} className="site-nav__link" aria-current={ariaCurrent(path, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={OFFER_HREF} className="btn btn--primary btn--sm site-header__cta" aria-current={ariaCurrent(path, OFFER_HREF)}>
          Offerte anfragen
        </a>

        <button
          type="button"
          ref={menuButtonRef}
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
        >
          <span className="menu-toggle__label">Menü</span>
          {menuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' is-open' : ''}`}>
        <nav className="container mobile-menu__inner" aria-label="Menü">
          <p className="eyebrow">Leistungen</p>
          <ul className="mobile-menu__services">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu} aria-current={ariaCurrent(path, link.href)}>
                  {link.label}
                  <IconArrowRight size={18} />
                </a>
              </li>
            ))}
          </ul>

          <ul className="mobile-menu__links">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu} aria-current={ariaCurrent(path, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/#faq" onClick={closeMenu}>
                Häufige Fragen
              </a>
            </li>
          </ul>

          <a href={OFFER_HREF} className="btn btn--primary btn--lg btn--block" onClick={closeMenu}>
            Offerte anfragen
            <IconArrowRight />
          </a>

          <ul className="mobile-menu__contact">
            {site.phone && (
              <li>
                <a href={telHref(site.phone)}>
                  <IconPhone size={18} />
                  {site.phone}
                </a>
              </li>
            )}
            <li>
              <a href={`mailto:${site.email}`}>
                <IconMail size={18} />
                {site.email}
              </a>
            </li>
            {site.instagram && (
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  <IconInstagram size={18} />
                  {site.instagramHandle}
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
