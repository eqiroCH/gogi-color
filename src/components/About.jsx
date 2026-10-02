import './About.css'

const promises = [
  {
    title: 'Sauber',
    text: 'Böden, Möbel und Fenster werden abgedeckt und abgeklebt. Wir hinterlassen frische Wände – keinen Farbnebel.',
  },
  {
    title: 'Pünktlich',
    text: 'Abgemachte Termine gelten. Du weisst vorher, wann wir kommen und wann wir fertig sind.',
  },
  {
    title: 'Fair',
    text: 'Klare Offerte vor Arbeitsbeginn. Keine versteckten Positionen, keine Überraschung auf der Rechnung.',
  },
]

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&h=1200&q=80"
            alt="Frisch gestrichener Wohnraum in warmem Grau"
            loading="lazy"
          />
          <span className="tape about-tape">Handwerk aus Zürich</span>
        </div>

        <div className="about-copy">
          <div className="reveal">
            <p className="eyebrow">Über Gogi Color</p>
            <h2 className="section-title">
              Maler mit <span className="hand">Leidenschaft.</span>
            </h2>
            <p className="about-text">
              Gogi Color ist ein Malerbetrieb aus Zürich. Wir streichen Wohnungen, Häuser,
              Treppenhäuser und Gewerbeflächen – mit Blick fürs Detail und dem Anspruch, dass
              jede Kante sitzt.
            </p>
            <p className="about-text">
              Du hast einen festen Ansprechpartner – vom ersten Besichtigungstermin bis zur
              Abnahme. Kurze Wege, klare Absprachen.
            </p>
          </div>

          <div className="promises">
            {promises.map((p, i) => (
              <article key={p.title} className="promise reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
