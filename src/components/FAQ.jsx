import { useState } from 'react'
import './FAQ.css'

const items = [
  {
    q: 'In welchem Gebiet arbeitet ihr?',
    a: 'Hauptsächlich in der Stadt Zürich und Umgebung. Für grössere Aufträge kommen wir auch weiter – frag einfach an.',
  },
  {
    q: 'Wie komme ich zu einer Offerte?',
    a: 'Schreib an info@gogicolor.ch oder per Instagram an @gogi_color. Mit Adresse, ungefährer Fläche und ein paar Fotos geht es am schnellsten.',
  },
  {
    q: 'Muss ich die Möbel selbst wegräumen?',
    a: 'Kleinere Gegenstände bitte wegräumen. Grosse Möbel rücken wir zusammen und decken sie ab – genauso wie Böden und Fenster.',
  },
  {
    q: 'Welche Farben verwendet ihr?',
    a: 'Hochwertige Markenfarben, passend zum Untergrund und Raum – zum Beispiel scheuerbeständig in Küche und Flur, wetterfest für Fassaden.',
  },
  {
    q: 'Wie lange dauert das Streichen?',
    a: 'Ein Zimmer ist oft in einem Tag erledigt, eine ganze Wohnung in wenigen Tagen. Die genaue Dauer steht in deiner Offerte.',
  },
  {
    q: 'Streicht ihr auch für Verwaltungen und Gewerbe?',
    a: 'Ja – Mieterwechsel, Treppenhäuser, Büros und Läden. Termine stimmen wir auf Übergaben und Öffnungszeiten ab.',
  },
]

function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container faq-grid">
        <div className="faq-intro reveal">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">
            Gut zu <span className="hand">wissen.</span>
          </h2>
          <p className="section-lead">Deine Frage ist nicht dabei? Schreib uns – wir antworten schnell.</p>
        </div>

        <div className="faq-list reveal">
          {items.map((item, index) => {
            const isOpen = open === index
            return (
              <article key={item.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span>{item.q}</span>
                  <i aria-hidden="true" />
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
