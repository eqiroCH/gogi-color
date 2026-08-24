import { useState } from 'react'
import './Contact.css'

const INSTAGRAM = 'https://www.instagram.com/gogi_color/'

function Contact() {
  const [form, setForm] = useState({ name: '', service: 'Balayage', message: '' })

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const text = [
      `Hallo Gogi, ich möchte einen Termin anfragen.`,
      `Name: ${form.name || '–'}`,
      `Leistung: ${form.service}`,
      form.message ? `Nachricht: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(INSTAGRAM, '_blank', 'noopener,noreferrer')
    navigator.clipboard?.writeText(text).catch(() => {})
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div>
          <span className="section-label">Termin</span>
          <h2 className="section-title">Schreib Gogi. <em>Direkt.</em></h2>
          <p>
            Termine werden persönlich über Instagram vergeben. Formular ausfüllen –
            die Nachricht wird kopiert, Instagram öffnet sich, du sendest sie an @gogi_color.
          </p>
          <a className="instagram-card" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <strong>@gogi_color</strong>
            <span>Instagram öffnen</span>
          </a>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={onChange} placeholder="Dein Name" required />
          </label>
          <label>
            Leistung
            <select name="service" value={form.service} onChange={onChange}>
              <option>Balayage</option>
              <option>Blond & Highlights</option>
              <option>Color & Ansatz</option>
              <option>Farbkorrektur</option>
              <option>Gloss & Toner</option>
              <option>Schnitt & Finish</option>
            </select>
          </label>
          <label>
            Nachricht
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={onChange}
              placeholder="Wunschdatum, Haarlänge, aktuelle Farbe…"
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Anfrage vorbereiten
          </button>
          <p className="form-hint">Beim Senden wird der Text in die Zwischenablage kopiert.</p>
        </form>
      </div>
    </section>
  )
}

export default Contact
