import { useState } from 'react'
import './FAQ.css'

const items = [
  {
    q: 'Wie buche ich einen Termin?',
    a: 'Aktuell ausschliesslich über Instagram. Schreib Gogi direkt unter @gogi_color – mit Wunschdatum, Haarlänge und einem Foto der aktuellen Farbe, wenn möglich.',
  },
  {
    q: 'Wie lange dauert eine Farbbehandlung?',
    a: 'Je nach Technik zwischen zwei und sechs Stunden. Balayage und Korrekturen brauchen mehr Zeit. Die genaue Dauer klären wir in der Anfrage.',
  },
  {
    q: 'Was kostet die Farbe?',
    a: 'Preise hängen von Länge, Dichte, Ausgangslage und Wunschfarbe ab. Du erhältst eine transparente Einschätzung vor der Behandlung – keine Überraschung an der Kasse.',
  },
  {
    q: 'Kann jede Wunschfarbe umgesetzt werden?',
    a: 'Nicht immer in einer Sitzung. Gogi sagt dir ehrlich, was die Haare mitmachen – und welcher Weg über eine oder mehrere Behandlungen sinnvoll ist.',
  },
  {
    q: 'Muss ich die Haare vor dem Termin waschen?',
    a: 'In der Regel nicht am selben Tag. Ungewaschenes Haar (1–2 Tage) schützt die Kopfhaut bei Blondierungen. Details bekommst du mit der Terminbestätigung.',
  },
]

function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container faq-grid">
        <div>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Bevor du <em>schreibst</em></h2>
        </div>
        <div className="faq-list">
          {items.map((item, index) => (
            <article key={item.q} className={open === index ? 'is-open' : ''}>
              <button onClick={() => setOpen(open === index ? -1 : index)}>
                {item.q}
                <span>{open === index ? '–' : '+'}</span>
              </button>
              {open === index && <p>{item.a}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
