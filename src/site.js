// Zentrale Firmenangaben. Leere Felder werden auf der Website automatisch ausgeblendet.
export const site = {
  name: 'Gogi Color',
  url: 'https://gogicolor.ch',
  owner: '',
  street: '',
  zip: '',
  city: 'Zürich',
  uid: '',
  email: 'info@gogicolor.ch',
  phone: '',
  // Internationale Nummer ohne + und Leerzeichen, z. B. '41791234567'
  whatsapp: '',
  instagram: 'https://www.instagram.com/gogi_color/',
  instagramHandle: '@gogi_color',
  facebook: 'https://www.facebook.com/gogicolor/',
  area: 'Zürich & Umgebung',
  // Nur belegbare Angaben eintragen, z. B. 'Mitglied SMGV', 'Betriebshaftpflicht CHF 5 Mio.'
  credentials: [],
}

export const telHref = (phone) => `tel:${phone.replace(/[^+\d]/g, '')}`

export const whatsappHref = (text) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
