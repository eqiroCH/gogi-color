import { useState } from 'react'
import './FAQ.css'

const items = [
  {
    q: 'In welchem Gebiet arbeiten Sie?',
    a: 'Hauptsächlich in der Stadt Zürich und Umgebung. Für grössere Aufträge kommen wir auch weiter – fragen Sie einfach an.',
  },
  {
    q: 'Wie erhalte ich eine Offerte?',
    a: 'Schreiben Sie uns an info@gogicolor.ch oder über das Kontaktformular. Mit Adresse, ungefährer Fläche und ein paar Fotos geht es am schnellsten.',
  },
  {
    q: 'Muss ich die Möbel selbst wegräumen?',
    a: 'Kleinere Gegenstände bitte wegräumen. Grosse Möbel rücken wir zusammen und decken sie ab – genauso wie Böden und Fenster.',
  },
  {
    q: 'Welche Farben verwenden Sie?',
    a: 'Hochwertige Markenfarben, passend zu Untergrund und Raum – zum Beispiel scheuerbeständig in Küche und Gang, wetterfest für Fassaden.',
  },
  {
    q: 'Wie lange dauern die Arbeiten?',
    a: 'Ein Zimmer ist oft in einem Tag erledigt, eine ganze Wohnung in wenigen Tagen. Die genaue Dauer steht in Ihrer Offerte.',
  },
  {
    q: 'Arbeiten Sie auch für Verwaltungen und Firmen?',
    a: 'Ja – Mieterwechsel, Treppenhäuser, Büros und Läden. Termine stimmen wir auf Übergaben und Öffnungszeiten ab.',
  },
]

function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section section-grey">
      <div className="container faq-wrap">
        <div className="section-head">
          <h2 className="section-title">Häufige Fragen</h2>
        </div>

        <div className="faq-list">
          {items.map((item, index) => {
            const isOpen = open === index
            return (
              <article key={item.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span>{item.q}</span>
                  <i aria-hidden="true">{isOpen ? '–' : '+'}</i>
                </button>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
