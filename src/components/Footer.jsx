// Fusszeile (Tannengrün): Marke, Leistungen, Informationen, Kontakt, Rechtliches.
// Das Jahr wird erst im Browser gesetzt (Vorrendern/Hydration bleiben gleich).
import { useEffect, useState } from 'react'
import Logo from './Logo'
import ContactList from './ContactList'
import { IconArrowRight, IconFacebook, IconInstagram } from './Icons'
import { OFFER_HREF, infoLinks, legalLinks, serviceLinks } from './nav'
import { footer } from '../content/home'
import { site } from '../site'
import './Footer.css'

const external = { target: '_blank', rel: 'noopener noreferrer' }

export default function Footer() {
  const [year, setYear] = useState(null)
  useEffect(() => setYear(new Date().getFullYear()), [])
  const [creditText, creditHref] = footer.credit

  return (
    <footer className="site-footer on-dark">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a href="/" className="site-footer__logo" aria-label="Gogi Color – zur Startseite">
              <Logo />
            </a>
            <p className="site-footer__blurb">{footer.blurb}</p>
            {site.credentials.length > 0 && (
              <ul className="check-list site-footer__credentials">
                {site.credentials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {(site.instagram || site.facebook) && (
              <ul className="site-footer__social" aria-label="Soziale Netzwerke">
                {site.instagram && (
                  <li>
                    <a href={site.instagram} aria-label="Gogi Color auf Instagram" {...external}>
                      <IconInstagram size={20} />
                    </a>
                  </li>
                )}
                {site.facebook && (
                  <li>
                    <a href={site.facebook} aria-label="Gogi Color auf Facebook" {...external}>
                      <IconFacebook size={20} />
                    </a>
                  </li>
                )}
              </ul>
            )}
            <a href={OFFER_HREF} className="btn btn--primary">
              Offerte anfragen
              <IconArrowRight />
            </a>
          </div>

          <nav className="site-footer__col" aria-labelledby="footer-leistungen">
            <h2 id="footer-leistungen" className="site-footer__title">
              Leistungen
            </h2>
            <ul className="site-footer__links">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__col" aria-labelledby="footer-info">
            <h2 id="footer-info" className="site-footer__title">
              Informationen
            </h2>
            <ul className="site-footer__links">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__col">
            <h2 className="site-footer__title">Kontakt</h2>
            <ContactList variant="compact" />
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year && `${year} `}
            {site.name} · Malergeschäft in {site.city}
          </p>
          <ul className="site-footer__legal">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href={creditHref} {...external}>
                {creditText}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
