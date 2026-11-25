// Inhalt und Logik des Offerte-Formulars (ohne Gestaltung).
// Feldnamen müssen mit dem versteckten Formular «offerte» in index.html übereinstimmen.
import { site } from '../site'

export const steps = [
  { key: 'leistung', label: 'Leistung', heading: 'Was dürfen wir für Sie tun?' },
  { key: 'objekt', label: 'Objekt', heading: 'Um welches Objekt geht es?' },
  { key: 'details', label: 'Details', heading: 'Wann und was genau?' },
  { key: 'kontakt', label: 'Kontakt', heading: 'Wie erreichen wir Sie?' },
]

export const options = {
  leistungen: [
    'Innenmalerei',
    'Fassade',
    'Wohnungsabgabe / Mieterwechsel',
    'Spachtel- & Gipserarbeiten',
    'Renovation',
    'Treppenhaus',
    'Farbberatung',
    'Anderes',
  ],
  kundentyp: ['Privat', 'Verwaltung / STWEG', 'Firma'],
  objekt: ['Wohnung', 'Einfamilienhaus', 'Mehrfamilienhaus', 'Büro / Gewerbe', 'Treppenhaus', 'Anderes'],
  groesse: ['1–1.5 Zimmer', '2–2.5 Zimmer', '3–3.5 Zimmer', '4–4.5 Zimmer', '5+ Zimmer', 'Weiss nicht'],
  decken: ['Ja', 'Nein', 'Weiss nicht'],
  termin: ['So bald wie möglich', 'In 1–3 Monaten', 'Später / flexibel', 'Fixer Termin'],
  kontaktweg: ['E-Mail', 'Telefon'],
  quelle: ['Google', 'Instagram', 'Empfehlung', 'KI-Assistent (z. B. ChatGPT)', 'Andere'],
}

// Beschriftungen und Hinweise
export const labels = {
  kundentyp: 'Sie sind …',
  objekt: 'Art des Objekts',
  groesse: 'Grösse',
  ort: 'PLZ / Ort *',
  ortPlaceholder: 'z. B. 8004 Zürich',
  decken: 'Sollen auch die Decken gestrichen werden?',
  termin: 'Gewünschter Zeitpunkt',
  datum: 'Datum (z. B. Abgabetermin)',
  nachricht: 'Beschreibung',
  nachrichtPlaceholder: 'Was soll gemacht werden? Anzahl Räume, Zustand der Wände, Farbwünsche …',
  fotos: 'Fotos (optional, max. 3)',
  fotoAdd: 'Foto hinzufügen',
  fotoHint: 'Fotos der Räume oder der Fassade helfen uns, Ihr Vorhaben schneller einzuschätzen.',
  name: 'Name *',
  email: 'E-Mail *',
  telefon: 'Telefon',
  kontaktweg: 'Wie dürfen wir Sie kontaktieren?',
  quelle: 'Wie sind Sie auf uns aufmerksam geworden?',
  choose: 'Bitte wählen',
  privacy: ['Mit dem Absenden stimmen Sie der Bearbeitung Ihrer Angaben gemäss unserer ', 'Datenschutzerklärung', ' zu.'],
  back: 'Zurück',
  next: 'Weiter',
  submit: 'Anfrage senden',
  sending: 'Wird gesendet …',
  sendError: 'Die Anfrage konnte leider nicht gesendet werden.',
  sendErrorLink: 'Stattdessen per E-Mail senden',
  successTitle: (name) => `Vielen Dank, ${name.split(' ')[0] || 'für Ihre Anfrage'}!`,
  successText: (kontaktweg) =>
    `Wir haben Ihre Anfrage erhalten und melden uns so bald wie möglich per ${kontaktweg === 'Telefon' ? 'Telefon' : 'E-Mail'}, um einen Termin für die Besichtigung zu vereinbaren.`,
  successLink: 'Zur Startseite',
  progress: (step, total, label) => `Schritt ${step} von ${total} · ${label}`,
}

// ?leistung=<slug> auf /offerte wählt die passende Leistung vor
export const presets = {
  innenmalerei: { leistungen: ['Innenmalerei'] },
  fassaden: { leistungen: ['Fassade'], objekt: 'Einfamilienhaus' },
  wohnungsabgabe: { leistungen: ['Wohnungsabgabe / Mieterwechsel'] },
  renovation: { leistungen: ['Spachtel- & Gipserarbeiten', 'Renovation'] },
  verwaltungen: { kundentyp: 'Verwaltung / STWEG', objekt: 'Mehrfamilienhaus' },
}

export const emptyForm = {
  kundentyp: 'Privat',
  leistungen: [],
  objekt: 'Wohnung',
  groesse: '',
  decken: '',
  ort: '',
  termin: '',
  datum: '',
  nachricht: '',
  name: '',
  email: '',
  telefon: '',
  kontaktweg: 'E-Mail',
  quelle: '',
}

export const MAX_PHOTOS = 3
export const MAX_UPLOAD_BYTES = 7.5 * 1024 * 1024

// Fotos vor dem Upload verkleinern (Netlify Forms erlaubt max. 8 MB pro Anfrage)
export const resizeImage = async (file) => {
  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height))
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.82))
    return blob ? new File([blob], `${file.name.replace(/\.[^.]+$/, '')}.jpg`, { type: 'image/jpeg' }) : file
  } catch {
    return file
  }
}

// Ersatzweg, falls das Senden scheitert
export const mailtoLink = (form) => {
  const body = [
    `Kundentyp: ${form.kundentyp}`,
    `Leistungen: ${form.leistungen.join(', ')}`,
    `Objekt: ${form.objekt}${form.groesse ? `, ${form.groesse}` : ''}`,
    `Ort: ${form.ort}`,
    form.termin && `Termin: ${form.termin}${form.datum ? ` (${form.datum})` : ''}`,
    form.nachricht && `\n${form.nachricht}`,
    `\nName: ${form.name}`,
    `E-Mail: ${form.email}`,
    form.telefon && `Telefon: ${form.telefon}`,
  ]
    .filter(Boolean)
    .join('\n')
  return `mailto:${site.email}?subject=${encodeURIComponent(`Offertanfrage: ${form.leistungen.join(', ')}`)}&body=${encodeURIComponent(body)}`
}

// Sendet an Netlify Forms (Formular «offerte», multipart wegen Fotos)
export const submitOffer = async (form, photos) => {
  const data = new FormData()
  data.append('form-name', 'offerte')
  Object.entries(form).forEach(([key, value]) => data.append(key, Array.isArray(value) ? value.join(', ') : value))
  photos.forEach((photo, index) => data.append(`foto${index + 1}`, photo.file))
  const res = await fetch('/', { method: 'POST', body: data })
  if (!res.ok) throw new Error(`Status ${res.status}`)
}
