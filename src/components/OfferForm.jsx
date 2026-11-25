import { useEffect, useRef, useState } from 'react'
import { Arrow, ArrowLeft, Camera, Check, Close } from './Icons'
import { site } from '../site'
import './OfferForm.css'

const steps = ['Leistung', 'Objekt', 'Details', 'Kontakt']
const serviceOptions = [
  'Innenmalerei',
  'Fassade',
  'Wohnungsabgabe / Mieterwechsel',
  'Spachtel- & Gipserarbeiten',
  'Renovation',
  'Treppenhaus',
  'Farbberatung',
  'Anderes',
]
const customerTypes = ['Privat', 'Verwaltung / STWEG', 'Firma']
const objectTypes = ['Wohnung', 'Einfamilienhaus', 'Mehrfamilienhaus', 'Büro / Gewerbe', 'Treppenhaus', 'Anderes']
const sizes = ['1–1.5 Zimmer', '2–2.5 Zimmer', '3–3.5 Zimmer', '4–4.5 Zimmer', '5+ Zimmer', 'Weiss nicht']
const ceilingOptions = ['Ja', 'Nein', 'Weiss nicht']
const timings = ['So bald wie möglich', 'In 1–3 Monaten', 'Später / flexibel', 'Fixer Termin']
const sources = ['Google', 'Instagram', 'Empfehlung', 'KI-Assistent (z. B. ChatGPT)', 'Andere']

// ?leistung=<slug> auf der Offerte-Seite wählt die passende Leistung vor
const presets = {
  innenmalerei: { leistungen: ['Innenmalerei'] },
  fassaden: { leistungen: ['Fassade'], objekt: 'Einfamilienhaus' },
  wohnungsabgabe: { leistungen: ['Wohnungsabgabe / Mieterwechsel'] },
  renovation: { leistungen: ['Spachtel- & Gipserarbeiten', 'Renovation'] },
  verwaltungen: { kundentyp: 'Verwaltung / STWEG', objekt: 'Mehrfamilienhaus' },
}

const emptyForm = {
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

const MAX_PHOTOS = 3
const MAX_UPLOAD_BYTES = 7.5 * 1024 * 1024

// Fotos vor dem Upload verkleinern (Netlify Forms erlaubt max. 8 MB pro Anfrage)
const resizeImage = async (file) => {
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

const mailtoLink = (form) => {
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

function Choice({ type, name, value, checked, onChange, children }) {
  return (
    <label className={`choice ${checked ? 'is-checked' : ''}`}>
      <input type={type} name={name} value={value} checked={checked} onChange={onChange} />
      <span className="choice-box" aria-hidden="true"><Check /></span>
      <span>{children ?? value}</span>
    </label>
  )
}

function OfferForm() {
  const [form, setForm] = useState(emptyForm)
  const [photos, setPhotos] = useState([])
  const [step, setStep] = useState(0)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle')
  const cardRef = useRef(null)
  const fieldsetRef = useRef(null)
  const headingRef = useRef(null)
  const stepChanged = useRef(false)

  useEffect(() => {
    const preset = presets[new URLSearchParams(window.location.search).get('leistung')]
    if (preset) setForm((prev) => ({ ...prev, ...preset }))
  }, [])

  useEffect(() => {
    if (!stepChanged.current) return
    headingRef.current?.focus({ preventScroll: true })
    const top = cardRef.current?.getBoundingClientRect().top ?? 0
    if (top < 0) cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [step])

  const photosRef = useRef(photos)
  useEffect(() => {
    photosRef.current = photos
  }, [photos])
  useEffect(() => () => photosRef.current.forEach((photo) => URL.revokeObjectURL(photo.url)), [])

  const update = (name, value) => setForm((prev) => ({ ...prev, [name]: value }))
  const onChange = (event) => update(event.target.name, event.target.value)
  const toggleService = (value) =>
    update(
      'leistungen',
      form.leistungen.includes(value) ? form.leistungen.filter((s) => s !== value) : [...form.leistungen, value],
    )

  const addPhotos = async (event) => {
    const files = [...event.target.files].slice(0, MAX_PHOTOS - photos.length)
    event.target.value = ''
    const resized = await Promise.all(files.map(resizeImage))
    setPhotos((prev) => [...prev, ...resized.map((file) => ({ file, url: URL.createObjectURL(file) }))])
  }

  const removePhoto = (index) => {
    URL.revokeObjectURL(photos[index].url)
    setPhotos((prev) => prev.filter((_, i) => i !== index))
  }

  const validateStep = () => {
    if (step === 0 && form.leistungen.length === 0) {
      setError('Bitte wählen Sie mindestens eine Leistung.')
      return false
    }
    for (const element of fieldsetRef.current?.elements ?? []) {
      if (!element.checkValidity()) {
        element.reportValidity()
        return false
      }
    }
    setError('')
    return true
  }

  const goTo = (next) => {
    stepChanged.current = true
    setStep(next)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (!validateStep()) return
    if (step < steps.length - 1) {
      goTo(step + 1)
      return
    }
    if (event.target.elements['bot-field']?.value) {
      setStatus('success')
      return
    }
    if (photos.reduce((sum, photo) => sum + photo.file.size, 0) > MAX_UPLOAD_BYTES) {
      setError('Die Fotos sind zusammen zu gross. Bitte entfernen Sie ein Foto.')
      return
    }

    const data = new FormData()
    data.append('form-name', 'offerte')
    Object.entries(form).forEach(([key, value]) => data.append(key, Array.isArray(value) ? value.join(', ') : value))
    photos.forEach((photo, index) => data.append(`foto${index + 1}`, photo.file))

    setStatus('sending')
    try {
      const res = await fetch('/', { method: 'POST', body: data })
      if (!res.ok) throw new Error(`Status ${res.status}`)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="offer-card offer-success" role="status">
        <span className="offer-success-icon"><Check /></span>
        <h3>Vielen Dank, {form.name.split(' ')[0] || 'für Ihre Anfrage'}!</h3>
        <p>
          Wir haben Ihre Anfrage erhalten und melden uns so bald wie möglich per{' '}
          {form.kontaktweg === 'Telefon' ? 'Telefon' : 'E-Mail'}, um einen Termin für die
          Besichtigung zu vereinbaren.
        </p>
        <a className="btn btn-ghost" href="/">Zur Startseite</a>
      </div>
    )
  }

  return (
    <div className="offer-card" ref={cardRef}>
      <div className="offer-progress">
        <p>
          Schritt {step + 1} von {steps.length} · <strong>{steps[step]}</strong>
        </p>
        <ol aria-hidden="true">
          {steps.map((label, index) => (
            <li key={label} className={index <= step ? 'is-done' : ''} />
          ))}
        </ol>
      </div>

      <form className="offer-form" name="offerte" onSubmit={onSubmit}>
        <fieldset ref={fieldsetRef} key={step}>
          {step === 0 && (
            <>
              <legend ref={headingRef} tabIndex="-1">Was dürfen wir für Sie tun?</legend>
              <div className="choice-grid">
                {serviceOptions.map((option) => (
                  <Choice
                    key={option}
                    type="checkbox"
                    name="leistungen"
                    value={option}
                    checked={form.leistungen.includes(option)}
                    onChange={() => toggleService(option)}
                  />
                ))}
              </div>
              <p className="offer-label">Sie sind …</p>
              <div className="choice-row">
                {customerTypes.map((option) => (
                  <Choice
                    key={option}
                    type="radio"
                    name="kundentyp"
                    value={option}
                    checked={form.kundentyp === option}
                    onChange={onChange}
                  />
                ))}
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <legend ref={headingRef} tabIndex="-1">Um welches Objekt geht es?</legend>
              <div className="form-row">
                <label>
                  Art des Objekts
                  <select name="objekt" value={form.objekt} onChange={onChange}>
                    {objectTypes.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
                <label>
                  Grösse
                  <select name="groesse" value={form.groesse} onChange={onChange}>
                    <option value="">Bitte wählen</option>
                    {sizes.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
              </div>
              <label>
                PLZ / Ort *
                <input name="ort" value={form.ort} onChange={onChange} placeholder="z. B. 8004 Zürich" required />
              </label>
              <p className="offer-label">Sollen auch die Decken gestrichen werden?</p>
              <div className="choice-row">
                {ceilingOptions.map((option) => (
                  <Choice
                    key={option}
                    type="radio"
                    name="decken"
                    value={option}
                    checked={form.decken === option}
                    onChange={onChange}
                  />
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <legend ref={headingRef} tabIndex="-1">Wann und was genau?</legend>
              <div className="form-row">
                <label>
                  Gewünschter Zeitpunkt
                  <select name="termin" value={form.termin} onChange={onChange}>
                    <option value="">Bitte wählen</option>
                    {timings.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
                {form.termin === 'Fixer Termin' && (
                  <label>
                    Datum (z. B. Abgabetermin)
                    <input name="datum" type="date" value={form.datum} onChange={onChange} />
                  </label>
                )}
              </div>
              <label>
                Beschreibung
                <textarea
                  name="nachricht"
                  rows="4"
                  value={form.nachricht}
                  onChange={onChange}
                  placeholder="Was soll gemacht werden? Anzahl Räume, Zustand der Wände, Farbwünsche …"
                />
              </label>
              <div className="photo-field">
                <p className="offer-label">Fotos (optional, max. {MAX_PHOTOS})</p>
                <div className="photo-grid">
                  {photos.map((photo, index) => (
                    <figure key={photo.url} className="photo-thumb">
                      <img src={photo.url} alt={`Foto ${index + 1}`} />
                      <button type="button" onClick={() => removePhoto(index)} aria-label={`Foto ${index + 1} entfernen`}>
                        <Close />
                      </button>
                    </figure>
                  ))}
                  {photos.length < MAX_PHOTOS && (
                    <label className="photo-add">
                      <Camera />
                      <span>Foto hinzufügen</span>
                      <input type="file" accept="image/*" multiple onChange={addPhotos} />
                    </label>
                  )}
                </div>
                <p className="offer-hint">Fotos der Räume oder der Fassade helfen uns, Ihr Vorhaben schneller einzuschätzen.</p>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <legend ref={headingRef} tabIndex="-1">Wie erreichen wir Sie?</legend>
              <p className="visually-hidden" aria-hidden="true">
                <label>
                  Nicht ausfüllen: <input name="bot-field" tabIndex="-1" autoComplete="off" />
                </label>
              </p>
              <div className="form-row">
                <label>
                  Name *
                  <input name="name" value={form.name} onChange={onChange} autoComplete="name" required />
                </label>
                <label>
                  E-Mail *
                  <input name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Telefon
                  <input
                    name="telefon"
                    type="tel"
                    value={form.telefon}
                    onChange={onChange}
                    autoComplete="tel"
                    required={form.kontaktweg === 'Telefon'}
                  />
                </label>
                <label>
                  Wie dürfen wir Sie kontaktieren?
                  <select name="kontaktweg" value={form.kontaktweg} onChange={onChange}>
                    <option>E-Mail</option>
                    <option>Telefon</option>
                  </select>
                </label>
              </div>
              <label>
                Wie sind Sie auf uns aufmerksam geworden?
                <select name="quelle" value={form.quelle} onChange={onChange}>
                  <option value="">Bitte wählen</option>
                  {sources.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <p className="offer-hint">
                Mit dem Absenden stimmen Sie der Bearbeitung Ihrer Angaben gemäss unserer{' '}
                <a href="/datenschutz">Datenschutzerklärung</a> zu.
              </p>
            </>
          )}
        </fieldset>

        {error && <p className="offer-error" role="alert">{error}</p>}
        {status === 'error' && (
          <p className="offer-error" role="alert">
            Die Anfrage konnte leider nicht gesendet werden.{' '}
            <a href={mailtoLink(form)}>Stattdessen per E-Mail senden</a>
          </p>
        )}

        <div className="offer-nav">
          {step > 0 && (
            <button type="button" className="btn btn-ghost" onClick={() => goTo(step - 1)}>
              <ArrowLeft /> Zurück
            </button>
          )}
          <button className="btn btn-gold btn-lg" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Wird gesendet …' : step < steps.length - 1 ? <>Weiter <Arrow /></> : <>Anfrage senden <Arrow /></>}
          </button>
        </div>
      </form>
    </div>
  )
}

export default OfferForm
