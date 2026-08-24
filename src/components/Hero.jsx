import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-media" aria-hidden="true">
        <div className="hero-image" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <p className="hero-kicker reveal">Malerfirma · Zürich</p>
        <h1 className="reveal" style={{ animationDelay: '0.1s' }}>
          Gogi Color
        </h1>
        <p className="hero-lead reveal" style={{ animationDelay: '0.2s' }}>
          Saubere Malerarbeiten für Wohnungen, Häuser und Gewerbe –
          präzise, termingerecht und mit klarer Farbberatung.
        </p>
        <div className="hero-actions reveal" style={{ animationDelay: '0.3s' }}>
          <a className="btn btn-primary" href="mailto:info@gogicolor.ch">
            Offerte anfragen
          </a>
          <a className="btn btn-ghost" href="#gallery">
            Projekte ansehen
          </a>
        </div>
        <ul className="hero-meta reveal" style={{ animationDelay: '0.4s' }}>
          <li>Innenmalerei</li>
          <li>Aussenmalerei</li>
          <li>Renovation</li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
