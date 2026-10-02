import { Shield, Clock, Doc, Check } from './Icons'
import './Hero.css'

const usps = [
  [Shield, 'Saubere Arbeit', 'Alles abgedeckt und abgeklebt'],
  [Clock, 'Termintreu', 'Abgemachte Termine gelten'],
  [Doc, 'Faire Offerte', 'Klar und ohne Überraschungen'],
  [Check, 'Innen & Aussen', 'Alles aus einer Hand'],
]

function Hero() {
  const scrollTo = (hash) => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <section className="hero">
        <img
          className="hero-bg"
          src="https://images.unsplash.com/photo-1599619585752-c3edb42a414c?auto=format&fit=crop&w=2000&q=75"
          alt=""
          fetchpriority="high"
        />
        <div className="container hero-content">
          <span className="kicker">Ihr Maler in Zürich</span>
          <h1>Malerarbeiten innen und aussen – sauber &amp; zuverlässig</h1>
          <p>
            Gogi Color ist Ihr Malergeschäft für Wohnungen, Häuser, Fassaden und Gewerbe
            in Zürich und Umgebung.
          </p>
          <div className="hero-actions">
            <button className="btn btn-gold" onClick={() => scrollTo('#kontakt')}>Offerte anfragen</button>
            <button className="btn btn-outline" onClick={() => scrollTo('#leistungen')}>Unsere Leistungen</button>
          </div>
        </div>
      </section>

      <div className="usp-bar">
        <div className="container usp-grid">
          {usps.map(([Icon, title, text]) => (
            <div key={title} className="usp">
              <span className="usp-icon"><Icon /></span>
              <div>
                <strong>{title}</strong>
                <small>{text}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero
