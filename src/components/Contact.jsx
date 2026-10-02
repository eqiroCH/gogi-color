import { useState } from 'react'
import { Mail, Instagram, Pin } from './Icons'
import './Contact.css'

const INSTAGRAM = 'https://www.instagram.com/gogi_color/'
const services = ['Innenmalerei', 'Fassade', 'Spachtel- / Gipsarbeiten', 'Renovation', 'Farbberatung', 'Gewerbe / Verwaltung', 'Anderes']

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
        'Guten Tag',
        '',
        'Ich interessiere mich für eine Offerte.',
        '',
        `Name: ${form.name}`,
        form.phone ? `Telefon: ${form.phone}` : null,
        form.place ? `Ort: ${form.place}` : null,
        `Arbeit: ${form.service}`,
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
    <section id="kontakt" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">Kontakt</span>
          <h2 className="section-title">Offerte anfragen</h2>
          <p className="section-lead">
            Beschreiben Sie kurz Ihr Vorhaben. Wir melden uns für eine Besichtigung und
            senden Ihnen danach eine Offerte.
          </p>
        </div>

        <div className="contact-grid">
          <aside className="contact-info reveal">
            <h3>So erreichen Sie uns</h3>
            <ul>
              <li>
                <Mail />
                <div>
                  <small>E-Mail</small>
                  <a href="mailto:info@gogicolor.ch">info@gogicolor.ch</a>
                </div>
              </li>
              <li>
                <Instagram />
                <div>
                  <small>Instagram</small>
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@gogi_color</a>
                </div>
              </li>
              <li>
                <Pin />
                <div>
                  <small>Einsatzgebiet</small>
                  <span>Zürich &amp; Umgebung</span>
                </div>
              </li>
            </ul>
          </aside>

          <form className="contact-form reveal" onSubmit={onSubmit}>
            <div className="form-row">
              <label>
                Name *
                <input name="name" value={form.name} onChange={onChange} required />
              </label>
              <label>
                Telefon
                <input name="phone" type="tel" value={form.phone} onChange={onChange} />
              </label>
            </div>
            <div className="form-row">
              <label>
                Ort / Adresse
                <input name="place" value={form.place} onChange={onChange} />
              </label>
              <label>
                Art der Arbeit
                <select name="service" value={form.service} onChange={onChange}>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>
            </div>
            <label>
              Ihre Nachricht
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                placeholder="Was soll gestrichen werden? Anzahl Zimmer, ungefähre Fläche, Wunschtermin …"
              />
            </label>
            <button className="btn btn-gold" type="submit">Anfrage senden</button>
            <p className="form-hint">Beim Absenden öffnet sich Ihr E-Mail-Programm mit allen Angaben.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
