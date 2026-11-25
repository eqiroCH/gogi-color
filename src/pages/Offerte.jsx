import OfferForm from '../components/OfferForm'
import { ContactList } from '../components/Contact'
import '../components/Contact.css'
import '../components/PageHero.css'
import './Pages.css'

const next = [
  ['Wir melden uns', 'Wir sichten Ihre Angaben und Fotos und melden uns für einen Besichtigungstermin.'],
  ['Besichtigung', 'Vor Ort prüfen wir Untergrund und Fläche und beraten Sie zu Farbe und Ablauf.'],
  ['Schriftliche Offerte', 'Sie erhalten eine klare Offerte mit allen Arbeiten und einem Terminvorschlag.'],
]

function Offerte() {
  return (
    <section className="page-hero offer-page">
      <div className="container offer-page-grid">
        <div className="offer-page-intro">
          <nav className="breadcrumbs" aria-label="Navigationspfad">
            <a href="/">Startseite</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Offerte anfragen</span>
          </nav>
          <p className="eyebrow">Unverbindlich</p>
          <h1>Offerte anfragen</h1>
          <p className="page-hero-lead">
            In vier kurzen Schritten zu Ihrer Anfrage. Mit ein paar Fotos können wir Ihr Vorhaben
            schneller einschätzen.
          </p>
        </div>

        <div className="offer-page-form">
          <OfferForm />
        </div>

        <div className="offer-page-details">
          <ol className="next-steps">
            {next.map(([title, text], index) => (
              <li key={title}>
                <span>{index + 1}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <ContactList />
        </div>
      </div>
    </section>
  )
}

export default Offerte
