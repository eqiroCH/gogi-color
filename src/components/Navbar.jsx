import { useEffect, useState } from 'react'
import Logo from './Logo'
import { Mail, Phone, Instagram, Chevron } from './Icons'
import { site, telHref } from '../site'
import { servicePages } from '../content/services'
import './Navbar.css'

const links = [
  ['/kosten', 'Kosten'],
  ['/einsatzgebiet', 'Einsatzgebiet'],
  ['/#ueber-uns', 'Über uns'],
  ['/#faq', 'FAQ'],
]

function Navbar({ path }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => setOpen(false)
  const current = (href) => (href === path ? 'page' : undefined)
  const inServices = servicePages.some((s) => `/${s.slug}` === path)

  return (
    <header className={`header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="header-logo" href="/" aria-label="Gogi Color – zur Startseite" onClick={close}>
          <Logo />
        </a>

        <nav className="header-nav" aria-label="Hauptnavigation">
          <div className="nav-dropdown">
            <a href="/#leistungen" className={inServices ? 'is-active' : undefined}>
              Leistungen <Chevron />
            </a>
            <div className="nav-menu">
              {servicePages.map((service) => (
                <a key={service.slug} href={`/${service.slug}`} aria-current={current(`/${service.slug}`)}>
                  <strong>{service.name}</strong>
                  <span>{service.short}</span>
                </a>
              ))}
            </div>
          </div>
          {links.map(([href, label]) => (
            <a key={href} href={href} aria-current={current(href)}>{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          {site.phone ? (
            <a className="header-contact" href={telHref(site.phone)}>
              <Phone /> <span>{site.phone}</span>
            </a>
          ) : (
            <a className="header-contact" href={`mailto:${site.email}`}>
              <Mail /> <span>{site.email}</span>
            </a>
          )}
          <a className="btn btn-gold header-cta" href="/offerte">Offerte anfragen</a>
          <button
            className={`header-toggle ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="header-mobile" id="mobile-menu">
          <nav aria-label="Mobile Navigation">
            <p className="header-mobile-label">Leistungen</p>
            {servicePages.map((service) => (
              <a key={service.slug} className="is-sub" href={`/${service.slug}`} onClick={close}>
                {service.name}
              </a>
            ))}
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={close}>{label}</a>
            ))}
          </nav>
          <div className="header-mobile-contact">
            {site.phone && <a href={telHref(site.phone)}><Phone /> {site.phone}</a>}
            <a href={`mailto:${site.email}`}><Mail /> {site.email}</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram /> {site.instagramHandle}
            </a>
          </div>
          <a className="btn btn-gold btn-lg" href="/offerte" onClick={close}>Offerte anfragen</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
