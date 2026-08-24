import { useState } from 'react'
import './FAQ.css'

const items = [
  {
    q: 'Wo arbeitet ihr?',
    a: 'Schwerpunkt Zürich und Umgebung. Bei grösseren Projekten sprechen wir den Radius gerne individuell ab.',
  },
  {
    q: 'Wie bekomme ich eine Offerte?',
    a: 'Schreib an info@gogicolor.ch oder per Instagram @gogi_color – mit Adresse, ungefährer Fläche und Fotos, falls vorhanden.',
  },
  {
    q: 'Streicht ihr auch Fassaden?',
    a: 'Ja. Innen- und Aussenmalerei gehören zum Angebot – inkl. Vorbereitung und wettergeeigneter Systeme.',
  },
  {
    q: 'Muss ich die Wohnung leer räumen?',
    a: 'Nicht alles. Wir decken Möbel und Böden ab. Für freie Wände hilft es, wenn der Raum zugänglich ist.',
  },
  {
    q: 'Wie lange dauert ein Auftrag?',
    a: 'Je nach Fläche und Untergrund: ein Zimmer oft an einem Tag, grössere Wohnungen oder Fassaden entsprechend länger. Die Dauer steht in der Offerte.',
  },
]

function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container faq-grid">
        <div>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Kurze Antworten.</h2>
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
