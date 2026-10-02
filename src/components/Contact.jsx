import { useState } from 'react'
import { Arrow, Mail, Instagram, Pin } from './Icons'
import './Contact.css'

const INSTAGRAM = 'https://www.instagram.com/gogi_color/'
const services = ['Innenmalerei', 'Fassade / Aussen', 'Renovation', 'Spachtelarbeiten', 'Farbberatung', 'Gewerbe / Verwaltung']

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', place: '', service: services[0], message: '' })

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Offertanfrage: ${form.service}`)
    const body = encodeURIComponent(
      [
        'Hallo Gogi Color',
        '',
        'Ich interessiere mich für eine Offerte.',
        '',
        `Name: ${form.name}`,
        form.phone ? `Telefon: ${form.phone}` : null,
        form.place ? `Ort: ${form.place}` : null,
        `Leistung: ${form.service}`,
        form.message ? `\n${form.message}` : null,
        '',
        'Freundliche Grüsse',
      ]
        .filter((line) => line !== null)
        .join('\n'),
    )
    window.location.href = `mailto:info@gogicolor.ch?subject=${subject}&body=${body}`
  }

  return (
    <section id="kontakt" className="contact">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <p className="eyebrow">Kontakt</p>
          <h2 className="section-title">
            Lass uns <span className="hand">streichen.</span>
          </h2>
          <p className="section-lead">
            Beschreib kurz dein Projekt. Wir melden uns für eine Besichtigung und schicken
            dir danach eine klare Offerte.
          </p>

          <ul className="contact-list">
            <li>
              <span><Mail /></span>
              <div>
                <small>E-Mail</small>
                <a href="mailto:info@gogicolor.ch">info@gogicolor.ch</a>
              </div>
            </li>
            <li>
              <span><Instagram /></span>
              <div>
                <small>Instagram</small>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@gogi_color</a>
              </div>
            </li>
            <li>
              <span><Pin /></span>
              <div>
                <small>Einsatzgebiet</small>
                <p>Zürich & Umgebung</p>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form reveal" onSubmit={onSubmit}>
          <div className="form-row">
            <label>
              Name *
              <input name="name" value={form.name} onChange={onChange} placeholder="Vor- und Nachname" required />
            </label>
            <label>
              Telefon
              <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="079 …" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Ort
              <input name="place" value={form.place} onChange={onChange} placeholder="z. B. Zürich Wiedikon" />
            </label>
            <label>
              Leistung
              <select name="service" value={form.service} onChange={onChange}>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
          </div>
          <label>
            Dein Projekt
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={onChange}
              placeholder="Was soll gestrichen werden? Ungefähre Fläche, Zimmeranzahl, Wunschtermin …"
            />
          </label>
          <button className="btn btn-gold" type="submit">
            Anfrage per Mail senden
            <Arrow />
          </button>
          <p className="form-hint">Öffnet dein E-Mail-Programm mit allen Angaben – du musst nur noch auf Senden drücken.</p>
        </form>
      </div>
    </section>
  )
}

export default Contact
