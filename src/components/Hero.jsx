import { Arrow, Check, Pin, WhatsApp } from './Icons'
import { site, whatsappHref } from '../site'
import './Hero.css'

const points = [
  'Unverbindliche Besichtigung vor Ort',
  'Schriftliche Offerte vor Arbeitsbeginn',
  'Ein fester Ansprechpartner',
]

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Malergeschäft in Zürich</p>
          <h1>
            Maler in Zürich – <span className="stroke">saubere Arbeit</span>, innen wie aussen.
          </h1>
          <p className="hero-lead">
            Gogi Color streicht Wohnungen, Häuser, Fassaden und Treppenhäuser für Private,
            Verwaltungen und Firmen. Sorgfältig vorbereitet, termingerecht ausgeführt und
            ordentlich übergeben.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold btn-lg" href="/offerte">
              Offerte anfragen <Arrow />
            </a>
            {site.whatsapp ? (
              <a
                className="btn btn-ghost-light btn-lg"
                href={whatsappHref('Hallo Gogi Color, ich hätte gerne eine Offerte für Malerarbeiten.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp /> Fotos per WhatsApp
              </a>
            ) : (
              <a className="btn btn-ghost-light btn-lg" href="#leistungen">Unsere Leistungen</a>
            )}
          </div>
          <ul className="hero-points">
            {points.map((point) => (
              <li key={point}><Check /> {point}</li>
            ))}
          </ul>
        </div>

        <div className="hero-media">
          <img
            src="/images/hero.webp"
            alt="Maler in weisser Arbeitskleidung streicht eine Fassade von der Leiter aus"
            width="1000"
            height="1200"
            fetchPriority="high"
          />
          <div className="hero-badge">
            <span className="hero-badge-icon"><Pin /></span>
            <div>
              <strong>{site.area}</strong>
              <span>Privat · Verwaltungen · Gewerbe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
