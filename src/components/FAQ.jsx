import { Plus, Mail } from './Icons'
import { site } from '../site'
import './FAQ.css'

export const homeFaq = [
  {
    q: 'Was kostet ein Maler in Zürich?',
    a: 'Das hängt von Fläche, Untergrund, Farbe und Vorbereitungsaufwand ab. Nach einer kurzen Besichtigung erhalten Sie eine schriftliche, nachvollziehbare Offerte. Erste Richtwerte finden Sie auf unserer Seite zu den Kosten.',
  },
  {
    q: 'Wie erhalte ich eine Offerte?',
    a: 'Über das Anfrageformular, per E-Mail oder Instagram. Mit Adresse, ungefährer Fläche und ein paar Fotos geht es am schnellsten. Danach vereinbaren wir einen Termin für die Besichtigung.',
  },
  {
    q: 'In welchem Gebiet arbeiten Sie?',
    a: 'In allen zwölf Stadtkreisen von Zürich und in den umliegenden Gemeinden. Für grössere Aufträge kommen wir auch weiter – fragen Sie einfach an.',
  },
  {
    q: 'Muss ich die Möbel selbst wegräumen?',
    a: 'Kleinere Gegenstände bitte wegräumen. Grosse Möbel rücken wir zusammen und decken sie ab – genauso wie Böden und Fenster.',
  },
  {
    q: 'Wie lange dauern die Arbeiten?',
    a: 'Ein Zimmer ist oft in einem Tag erledigt, eine ganze Wohnung in wenigen Tagen. Die genaue Dauer steht in Ihrer Offerte.',
  },
  {
    q: 'Muss ich beim Auszug die Wände streichen?',
    a: 'Nicht automatisch. Entscheidend sind Alter und Zustand des Anstrichs sowie Ihr Mietvertrag. Für Dübellöcher reicht oft eine Ausbesserung – mehr dazu auf unserer Seite zur Wohnungsabgabe.',
  },
  {
    q: 'Welche Farben verwenden Sie?',
    a: 'Hochwertige Markenfarben, passend zu Untergrund und Raum – zum Beispiel scheuerbeständig in Küche und Gang, wetterfest an der Fassade.',
  },
  {
    q: 'Arbeiten Sie auch für Verwaltungen und Firmen?',
    a: 'Ja – Mieterwechsel, Wohnungsabgaben, Treppenhäuser, Büros und Läden. Termine stimmen wir auf Übergaben und Öffnungszeiten ab.',
  },
]

function FAQ({ items = homeFaq, title = 'Häufige Fragen', id = 'faq', paper = true }) {
  return (
    <section id={id} className={`section ${paper ? 'section-paper' : ''}`}>
      <div className="container faq-grid">
        <div className="faq-aside">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-lead">
            Ihre Frage ist nicht dabei? Schreiben Sie uns – wir antworten gerne persönlich.
          </p>
          <a className="faq-mail" href={`mailto:${site.email}`}>
            <Mail /> {site.email}
          </a>
        </div>

        <div className="faq-list">
          {items.map((item, index) => (
            <details key={item.q} className="faq-item" name={id} open={index === 0}>
              <summary>
                <span>{item.q}</span>
                <i className="faq-icon"><Plus /></i>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
