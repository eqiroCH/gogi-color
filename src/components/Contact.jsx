import { useState } from 'react'
import './Contact.css'

const INSTAGRAM = 'https://www.instagram.com/gogi_color/'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    service: 'Innenmalerei',
    message: '',
  })

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Offerte: ${form.service}`)
    const body = encodeURIComponent(
      [
        `Hallo Gogi Color,`,
        ``,
        `Name: ${form.name}`,
        `Leistung: ${form.service}`,
        form.message ? `Nachricht: ${form.message}` : '',
        ``,
        `Bitte um Offerte. Danke!`,
      ]
        .filter(Boolean)
        .join('\n'),
    )
    window.location.href = `mailto:info@gogicolor.ch?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div>
          <span className="section-label">Kontakt</span>
          <h2 className="section-title">Offerte anfragen.</h2>
          <p>
            Schreib uns, was gestrichen werden soll. Wir melden uns mit einer klaren Offerte
            und dem nächsten Schritt.
          </p>
          <div className="contact-links">
            <a href="mailto:info@gogicolor.ch">
              <strong>info@gogicolor.ch</strong>
              <span>E-Mail</span>
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <strong>@gogi_color</strong>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={onChange} placeholder="Dein Name" required />
          </label>
          <label>
            Leistung
            <select name="service" value={form.service} onChange={onChange}>
              <option>Innenmalerei</option>
              <option>Aussenmalerei</option>
              <option>Renovation</option>
              <option>Spachtelarbeiten</option>
              <option>Farbberatung</option>
              <option>Gewerbe</option>
            </select>
          </label>
          <label>
            Nachricht
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={onChange}
              placeholder="Adresse, ungefähre Fläche, Wunschtermin…"
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Mail vorbereiten
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
