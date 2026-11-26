// Gemeinsame Navigationsdaten für Header, mobiles Menü und Footer.
import { services, servicePages, serviceHref } from '../content/services'

export const OFFER_HREF = '/offerte'

// Alle Leistungen (6), inkl. Farbberatung → /innenmalerei#farbberatung
export const serviceLinks = services.map((service) => ({
  href: serviceHref(service),
  label: service.name,
  text: service.short,
  hasPage: Boolean(service.page),
}))

export const servicePagePaths = servicePages.map((service) => `/${service.slug}`)

// Hauptnavigation neben «Leistungen»
export const primaryLinks = [
  { href: '/#ueber-uns', label: 'Über uns' },
  { href: '/#ablauf', label: 'Ablauf' },
  { href: '/kosten', label: 'Kosten' },
  { href: '/einsatzgebiet', label: 'Einsatzgebiet' },
  { href: '/#kontakt', label: 'Kontakt' },
]

// Footer «Informationen»
export const infoLinks = [
  { href: '/#ueber-uns', label: 'Über uns' },
  { href: '/#ablauf', label: 'Ablauf' },
  { href: '/kosten', label: 'Kosten & Richtwerte' },
  { href: '/einsatzgebiet', label: 'Einsatzgebiet' },
  { href: '/#faq', label: 'Häufige Fragen' },
  { href: OFFER_HREF, label: 'Offerte anfragen' },
]

export const legalLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
]

export const ariaCurrent = (path, href) => (path === href ? 'page' : undefined)
