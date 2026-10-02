import { Arrow, Check } from './Icons'
import './Hero.css'

const swatches = ['#f3eee4', '#d8c6a5', '#8f9e86', '#2f4a45']

function Hero() {
  const scrollTo = (hash) => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-in" style={{ '--d': '0s' }}>Malerfirma · Zürich</p>

          <h1 className="hero-in" style={{ '--d': '0.08s' }}>
            Wir bringen{' '}
            <span className="paint-word">
              <svg viewBox="0 0 300 70" preserveAspectRatio="none" aria-hidden="true">
                <path d="M8 44 C 70 26, 150 30, 292 36" />
              </svg>
              <span>Farbe</span>
            </span>{' '}
            an deine Wände.
          </h1>

          <p className="hero-lead hero-in" style={{ '--d': '0.18s' }}>
            Innenmalerei, Fassaden und Renovationen in Zürich – sauber abgedeckt,
            präzise gestrichen und pünktlich fertig.
          </p>

          <div className="hero-actions hero-in" style={{ '--d': '0.26s' }}>
            <button className="btn btn-gold" onClick={() => scrollTo('#kontakt')}>
              Offerte anfragen
              <Arrow />
            </button>
            <button className="btn btn-line" onClick={() => scrollTo('#projekte')}>
              Projekte ansehen
            </button>
          </div>

          <ul className="hero-checks hero-in" style={{ '--d': '0.34s' }}>
            <li><Check /> Saubere Abdeckung</li>
            <li><Check /> Pünktlich & zuverlässig</li>
            <li><Check /> Transparente Offerte</li>
          </ul>
        </div>

        <div className="hero-visual hero-in" style={{ '--d': '0.15s' }}>
          <svg className="hero-blob" viewBox="0 0 500 500" aria-hidden="true">
            <path d="M60 140 C 140 60, 360 40, 440 120 S 470 360, 380 430 S 90 470, 50 360 S 0 200, 60 140 Z" />
          </svg>

          <figure className="hero-photo">
            <img
              src="https://images.unsplash.com/photo-1599619585752-c3edb42a414c?auto=format&fit=crop&w=1100&h=1300&q=80"
              alt="Farbroller in der Farbwanne – bereit zum Streichen"
              fetchpriority="high"
            />
          </figure>
          <span className="tape hero-tape">frisch gestrichen</span>

          <div className="hero-card">
            <span className="hero-card-label">Farbberatung inklusive</span>
            <div className="hero-swatches">
              {swatches.map((c) => (
                <span key={c} style={{ background: c }} />
              ))}
            </div>
          </div>

          <div className="hero-badge">
            <strong>Zürich</strong>
            <span>& Umgebung</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
