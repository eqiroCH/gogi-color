import './Process.css'

const steps = [
  {
    num: '01',
    title: 'Anfrage',
    text: 'Schreib uns per Mail oder Instagram, was gestrichen werden soll – Fläche, Ort und Wunschtermin.',
  },
  {
    num: '02',
    title: 'Offerte',
    text: 'Wir schauen uns die Ausgangslage an und geben dir eine klare, transparente Offerte.',
  },
  {
    num: '03',
    title: 'Ausführung',
    text: 'Abdecken, vorbereiten, streichen – sauber und termingerecht. Am Ende kontrollieren wir gemeinsam das Resultat.',
  },
]

function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <span className="section-label">Ablauf</span>
        <h2 className="section-title">So läuft’s ab.</h2>
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
