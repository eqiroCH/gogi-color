import { Mail, Phone, WhatsApp } from './Icons'
import { site, telHref, whatsappHref } from '../site'
import './MobileBar.css'

function MobileBar({ hidden = false }) {
  if (hidden) return null

  return (
    <div className="mobile-bar">
      {site.phone && (
        <a className="mobile-bar-icon" href={telHref(site.phone)} aria-label="Anrufen"><Phone /></a>
      )}
      {site.whatsapp && (
        <a
          className="mobile-bar-icon is-whatsapp"
          href={whatsappHref('Hallo Gogi Color, ich hätte gerne eine Offerte.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <WhatsApp />
        </a>
      )}
      {!site.phone && !site.whatsapp && (
        <a className="mobile-bar-icon" href={`mailto:${site.email}`} aria-label="E-Mail schreiben"><Mail /></a>
      )}
      <a className="btn btn-gold" href="/offerte">Offerte anfragen</a>
    </div>
  )
}

export default MobileBar
