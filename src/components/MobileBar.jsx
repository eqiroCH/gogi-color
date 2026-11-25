// Fixe Aktionsleiste unten auf Mobile/Tablet (< 64em): «Offerte anfragen» plus
// Anruf/WhatsApp/E-Mail je nach gesetzten Feldern in site.js. Auf /offerte aus.
// Der Platzhalter (.mobile-bar-spacer) nach dem Footer sorgt dafür, dass die
// Leiste am Seitenende nichts verdeckt.
// Props: path – aktuelle Route
import { IconMail, IconPhone, IconWhatsApp } from './Icons'
import { OFFER_HREF } from './nav'
import { hero } from '../content/home'
import { site, telHref, whatsappHref } from '../site'
import './MobileBar.css'

export default function MobileBar({ path }) {
  if (path === OFFER_HREF) return null

  const actions = [
    site.phone && { key: 'phone', href: telHref(site.phone), label: 'Anrufen', a11y: `Anrufen: ${site.phone}`, Icon: IconPhone },
    site.whatsapp && {
      key: 'whatsapp',
      href: whatsappHref(hero.whatsappText),
      label: 'WhatsApp',
      a11y: 'WhatsApp-Nachricht senden',
      Icon: IconWhatsApp,
      external: true,
    },
    site.email && { key: 'email', href: `mailto:${site.email}`, label: 'E-Mail', a11y: `E-Mail an ${site.email}`, Icon: IconMail },
  ].filter(Boolean)

  return (
    <>
      <div className="mobile-bar-spacer" aria-hidden="true" />
      <nav className="mobile-bar" aria-label="Schnellkontakt">
        <a href={OFFER_HREF} className="btn btn--primary mobile-bar__cta">
          Offerte anfragen
        </a>
        {actions.map(({ key, href, label, a11y, Icon, external }) => (
          <a
            key={key}
            href={href}
            className="mobile-bar__action"
            aria-label={a11y}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon size={20} />
            <span aria-hidden="true">{label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
