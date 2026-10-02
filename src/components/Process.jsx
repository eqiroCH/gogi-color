import './Process.css'

const steps = [
  { title: 'Anfrage', text: 'Per Mail oder Instagram – kurz beschreiben, was gestrichen werden soll. Fotos helfen.' },
  { title: 'Besichtigung', text: 'Wir schauen uns Räume und Untergrund vor Ort an und beraten dich zu Farben.' },
  { title: 'Offerte', text: 'Du bekommst eine klare, schriftliche Offerte mit Termin und Ablauf.' },
  { title: 'Ausführung', text: 'Abdecken, vorbereiten, streichen, aufräumen. Zum Schluss gemeinsame Abnahme.' },
]

function Process() {
  return (
    <section id="ablauf" className="process">
      <div className="container">
        <div className="process-head reveal">
          <p className="eyebrow">Ablauf</p>
          <h2 className="section-title">
            In vier Schritten zur <span className="hand">neuen Wand.</span>
          </h2>
        </div>

        <div className="process-track">
          <svg className="process-line" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M10 34 C 200 10, 380 52, 600 30 S 980 12, 1190 32" />
          </svg>
          <div className="process-steps">
            {steps.map((step, i) => (
              <article key={step.title} className="step reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="step-dot">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
