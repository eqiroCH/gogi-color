import { Shield, Clock, Doc, Check } from './Icons'
import './Hero.css'

const usps = [
  [Shield, 'Saubere Arbeit'],
  [Clock, 'Termintreu'],
  [Doc, 'Faire Offerte'],
  [Check, 'Innen & Aussen'],
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
          <h1>Ihr Maler in Zürich</h1>
          <p>
            Innenmalerei, Fassaden, Renovationen und Spachtelarbeiten für Private,
            Verwaltungen und Firmen in Zürich und Umgebung.
          </p>
          <div className="hero-actions">
            <button className="btn btn-gold" onClick={() => scrollTo('#kontakt')}>Offerte anfragen</button>
            <button className="btn btn-outline" onClick={() => scrollTo('#leistungen')}>Unsere Leistungen</button>
          </div>
        </div>
      </section>

      <div className="usp-bar">
        <div className="container usp-grid">
          {usps.map(([Icon, title]) => (
            <div key={title} className="usp">
              <Icon />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero
