import { Mail, Phone, Instagram, Pin, WhatsApp } from './Icons'
import OfferForm from './OfferForm'
import { site, telHref, whatsappHref } from '../site'
import './Contact.css'

export function ContactList() {
  return (
    <ul className="contact-list">
      {site.phone && (
        <li>
          <span className="contact-icon"><Phone /></span>
          <div>
            <small>Telefon</small>
            <a href={telHref(site.phone)}>{site.phone}</a>
          </div>
        </li>
      )}
      {site.whatsapp && (
        <li>
          <span className="contact-icon"><WhatsApp /></span>
          <div>
            <small>WhatsApp</small>
            <a href={whatsappHref('Hallo Gogi Color, ich hätte gerne eine Offerte.')} target="_blank" rel="noopener noreferrer">
              Fotos senden
            </a>
          </div>
        </li>
      )}
      <li>
        <span className="contact-icon"><Mail /></span>
        <div>
          <small>E-Mail</small>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </li>
      <li>
        <span className="contact-icon"><Instagram /></span>
        <div>
          <small>Instagram</small>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a>
        </div>
      </li>
      <li>
        <span className="contact-icon"><Pin /></span>
        <div>
          <small>Einsatzgebiet</small>
          <a href="/einsatzgebiet">Stadt Zürich und Umgebung</a>
        </div>
      </li>
    </ul>
  )
}

function Contact() {
  return (
    <section id="kontakt" className="section section-dark contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Kontakt</p>
          <h2 className="section-title">Offerte anfragen</h2>
          <p className="section-lead">
            Beschreiben Sie Ihr Vorhaben in vier kurzen Schritten. Wir melden uns für eine
            Besichtigung und senden Ihnen danach eine unverbindliche Offerte.
          </p>
          <ContactList />
          <p className="contact-tip">
            <strong>Tipp:</strong> Mit ein paar Fotos und der ungefähren Fläche können wir Ihre
            Anfrage schneller einschätzen.
          </p>
        </div>
        <OfferForm />
      </div>
    </section>
  )
}

export default Contact
