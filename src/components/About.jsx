import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1400&q=80"
            alt="Maler streicht eine Wand mit Rolle"
          />
          <div className="about-badge">
            <strong>Zürich</strong>
            <span>Schweiz</span>
          </div>
        </div>
        <div className="about-copy">
          <span className="section-label">Über Gogi Color</span>
          <h2 className="section-title">Farbe mit Handwerk.</h2>
          <p>
            Gogi Color ist deine Malerfirma in Zürich. Wir streichen Wohnungen, Häuser und
            Gewerbeflächen – innen und aussen – mit Fokus auf saubere Untergründe, präzise
            Kanten und Farben, die lange halten.
          </p>
          <p>
            Du bekommst eine klare Offerte, zuverlässige Termine und Arbeit, bei der am Ende
            nicht der ganze Raum nach Renovation aussieht. Fragen? Schreib uns einfach.
          </p>
          <ul>
            <li>Sorgfältige Abdeckung und Vorbereitung</li>
            <li>Qualitätsfarben für Innen und Aussen</li>
            <li>Transparente Offerten ohne Überraschungen</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
