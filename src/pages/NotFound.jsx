import PageHero from '../components/PageHero'
import { Arrow } from '../components/Icons'
import { servicePages } from '../content/services'
import './Pages.css'

function NotFound() {
  return (
    <>
      <PageHero
        name="Seite nicht gefunden"
        eyebrow="Fehler 404"
        title="Diese Seite gibt es leider nicht."
        lead="Vielleicht hat sich die Adresse geändert. Hier geht es weiter:"
      >
        <a className="btn btn-gold btn-lg" href="/">Zur Startseite <Arrow /></a>
        <a className="btn btn-ghost-light btn-lg" href="/offerte">Offerte anfragen</a>
      </PageHero>
      <section className="section">
        <div className="container">
          <ul className="place-chips not-found-links">
            {servicePages.map((service) => (
              <li key={service.slug}><a href={`/${service.slug}`}>{service.name}</a></li>
            ))}
            <li><a href="/kosten">Kosten</a></li>
            <li><a href="/einsatzgebiet">Einsatzgebiet</a></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default NotFound
