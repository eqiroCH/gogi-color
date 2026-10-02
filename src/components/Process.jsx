import './Process.css'

const steps = [
  ['Anfrage', 'Sie schicken uns per Mail oder Instagram eine kurze Beschreibung – gerne mit Fotos.'],
  ['Besichtigung', 'Wir schauen uns die Räume oder die Fassade vor Ort an und beraten Sie.'],
  ['Offerte', 'Sie erhalten eine klare, schriftliche Offerte mit Termin.'],
  ['Ausführung', 'Abdecken, vorbereiten, streichen, aufräumen – zum Schluss gemeinsame Abnahme.'],
]

function Process() {
  return (
    <section id="ablauf" className="section section-grey">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">So läuft es ab</span>
          <h2 className="section-title">In 4 Schritten zum neuen Anstrich</h2>
        </div>

        <ol className="process-grid">
          {steps.map(([title, text], i) => (
            <li key={title} className="process-step reveal">
              <span className="process-num">{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
