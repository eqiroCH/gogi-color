import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80"
            alt="Haarfarbe in der Arbeit – Farbauftrag am Haar"
          />
          <div className="about-note">
            <strong>@gogi_color</strong>
            <span>Aktuelle Arbeiten auf Instagram</span>
          </div>
        </div>
        <div className="about-copy">
          <span className="section-label">Über Gogi</span>
          <h2 className="section-title">Nicht mehr Farbe.<br /><em>Die richtige.</em></h2>
          <p>
            Gogi Color steht für Haarfarbe, die sitzt – nicht laut um ihrer selbst willen,
            sondern klar, gepflegt und auf dich abgestimmt. Hinter dem Stuhl zählt das Auge
            für Nuancen, Übergänge und das, was deine Haare wirklich vertragen.
          </p>
          <p>
            Die Arbeit lebt von Beratung. Wir schauen uns Ausgangslage, Wunschbild und
            Pflege an – und entscheiden gemeinsam, welcher Weg realistisch und schön ist.
            Termine entstehen persönlich, aktuell über Instagram.
          </p>
          <ul>
            <li>Individuelle Farbberatung vor jeder Behandlung</li>
            <li>Schonende Techniken, Fokus auf Haargesundheit</li>
            <li>Transparente Einschätzung statt leerer Versprechen</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
