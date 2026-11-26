// Kontaktwege aus site.js. Telefon, WhatsApp und Adresse erscheinen nur, wenn
// die Felder gesetzt sind.
// Props:
//   variant   – 'default' (Icon-Kachel + Beschriftung + Wert) | 'compact' (Icon + Wert, z. B. Footer)
//   showArea  – Link aufs Einsatzgebiet zeigen (Standard: true)
//   className
import { IconInstagram, IconMail, IconMapPin, IconPhone, IconWhatsApp } from './Icons'
import { site, telHref, whatsappHref } from '../site'
import { hero } from '../content/home'
import './ContactList.css'

const external = { target: '_blank', rel: 'noopener noreferrer' }

export function contactItems({ showArea = true } = {}) {
  const address = [site.street, [site.zip, site.city].filter(Boolean).join(' ')].filter(Boolean).join(', ')
  return [
    site.phone && { key: 'phone', label: 'Telefon', value: site.phone, href: telHref(site.phone), Icon: IconPhone },
    site.whatsapp && {
      key: 'whatsapp',
      label: 'WhatsApp',
      value: 'Nachricht senden',
      href: whatsappHref(hero.whatsappText),
      Icon: IconWhatsApp,
      external: true,
    },
    { key: 'email', label: 'E-Mail', value: site.email, href: `mailto:${site.email}`, Icon: IconMail },
    site.instagram && {
      key: 'instagram',
      label: 'Instagram',
      value: site.instagramHandle,
      href: site.instagram,
      Icon: IconInstagram,
      external: true,
    },
    site.street && { key: 'address', label: 'Adresse', value: address, Icon: IconMapPin },
    showArea && { key: 'area', label: 'Einsatzgebiet', value: site.area, href: '/einsatzgebiet', Icon: IconMapPin },
  ].filter(Boolean)
}

export default function ContactList({ variant = 'default', showArea = true, className = '' }) {
  return (
    <ul className={`contact-list contact-list--${variant} ${className}`}>
      {contactItems({ showArea }).map(({ key, label, value, href, Icon, external: isExternal }) => {
        const content = (
          <>
            <span className="contact-list__icon">
              <Icon size={20} />
            </span>
            <span className="contact-list__text">
              <span className="contact-list__label">{label}</span>
              <span className="contact-list__value">{value}</span>
            </span>
          </>
        )
        return (
          <li key={key}>
            {href ? (
              <a href={href} className="contact-list__item" {...(isExternal ? external : {})}>
                {content}
              </a>
            ) : (
              <span className="contact-list__item">{content}</span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
