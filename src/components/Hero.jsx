import './Hero.css'

const INSTAGRAM = 'https://www.instagram.com/gogi_color/'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-media" aria-hidden="true">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-grain" />
      </div>

      <div className="hero-content">
        <p className="hero-badge reveal">Colorist · @gogi_color</p>
        <h1 className="reveal" style={{ animationDelay: '0.12s' }}>
          Farbe, die
          <span>zu dir passt.</span>
        </h1>
        <p className="hero-lead reveal" style={{ animationDelay: '0.24s' }}>
          Individuelle Haarfarbe mit Präzision und Ruhe – Balayage, Blond,
          Highlights und Korrekturen, abgestimmt auf Typ, Teint und Alltag.
        </p>
        <div className="hero-actions reveal" style={{ animationDelay: '0.36s' }}>
          <a className="btn btn-primary" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            Termin via Instagram
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a className="btn btn-ghost" href="#gallery">Arbeiten ansehen</a>
        </div>
        <ul className="hero-meta reveal" style={{ animationDelay: '0.48s' }}>
          <li>Balayage</li>
          <li>Blond & Highlights</li>
          <li>Farbkorrektur</li>
        </ul>
      </div>

      <a href="#services" className="hero-scroll">
        <span>Entdecken</span>
        <i />
      </a>
    </section>
  )
}

export default Hero
