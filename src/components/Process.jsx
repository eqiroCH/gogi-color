import './Process.css'

const steps = [
  {
    num: '01',
    title: 'Beratung',
    text: 'Wunschbild, Ausgangslage, Zeit und Pflege. Du bekommst eine ehrliche Einschätzung, bevor Farbe ins Haar kommt.',
  },
  {
    num: '02',
    title: 'Farbe',
    text: 'Technik und Rezeptur folgen dem Plan – Balayage, Strähnen oder Vollfarbe, sauber gesetzt und kontrolliert.',
  },
  {
    num: '03',
    title: 'Finish',
    text: 'Waschen, Toner, Schnitt und Styling. Du gehst mit einem Resultat nach Hause, das du tragen willst – nicht nur fotografieren.',
  },
]

function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <span className="section-label">Ablauf</span>
        <h2 className="section-title">Drei Schritte. <em>Ein Look.</em></h2>
        <div className="process-grid">
          {steps.map((step) => (
            <article key={step.num}>
              <span>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
