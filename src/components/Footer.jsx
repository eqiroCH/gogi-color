import { useEffect, useState } from 'react'
import Logo from './Logo'
import { Instagram, Facebook } from './Icons'
import { site, telHref } from '../site'
import { servicePages } from '../content/services'
import './Footer.css'

const links = [
  ['/kosten', 'Kosten'],
  ['/einsatzgebiet', 'Einsatzgebiet'],
  ['/#ueber-uns', 'Über uns'],
  ['/#ablauf', 'Ablauf'],
  ['/#faq', 'FAQ'],
  ['/offerte', 'Offerte anfragen'],
]

function Footer() {
  // Jahr erst im Browser setzen, damit das vorgerenderte HTML beim Hydrieren passt
  const [year, setYear] = useState(null)
  useEffect(() => setYear(new Date().getFullYear()), [])

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo />
          <p>
            Ihr Malergeschäft in Zürich für Innenmalerei, Fassaden, Wohnungsabgaben und
            Renovationen – sauber, termintreu und fair offeriert.
          </p>
          <div className="footer-social">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
            {site.facebook && (
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook />
              </a>
            )}
          </div>
        </div>

        <div className="footer-col">
          <h2>Leistungen</h2>
          {servicePages.map((service) => (
            <a key={service.slug} href={`/${service.slug}`}>{service.name}</a>
          ))}
        </div>

        <div className="footer-col">
          <h2>Informationen</h2>
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </div>

        <div className="footer-col">
          <h2>Kontakt</h2>
          <span>{site.name}</span>
          {site.street && <span>{site.street}</span>}
          <span>{site.zip ? `${site.zip} ` : ''}{site.city}</span>
          {site.phone && <a href={telHref(site.phone)}>{site.phone}</a>}
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year ?? ''} {site.name} · Malergeschäft Zürich</span>
          <nav aria-label="Rechtliches">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
            <a href="https://eqiro.ch" target="_blank" rel="noopener noreferrer">Website by Eqiro</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
