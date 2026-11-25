import { Mail, Pin, Doc, Roller } from './Icons'
import './Process.css'

const steps = [
  [Mail, 'Anfrage', 'Sie beschreiben uns kurz Ihr Vorhaben – per Formular, E-Mail oder Instagram, gerne mit Fotos.'],
  [Pin, 'Besichtigung', 'Wir schauen uns Räume oder Fassade vor Ort an, prüfen den Untergrund und beraten Sie.'],
  [Doc, 'Offerte', 'Sie erhalten eine klare, schriftliche Offerte mit allen Arbeiten und einem Terminvorschlag.'],
  [Roller, 'Ausführung & Abnahme', 'Abdecken, vorbereiten, streichen, aufräumen – zum Schluss gehen wir alles gemeinsam durch.'],
]

function Process() {
  return (
    <section id="ablauf" className="section section-dark process">
      <div className="container">
        <div className="section-head section-head-split">
          <div>
            <p className="eyebrow">Ablauf</p>
            <h2 className="section-title">In vier Schritten zur frisch gestrichenen Wand.</h2>
          </div>
          <p className="section-lead">
            Klar geregelt und ohne Überraschungen: Sie wissen jederzeit, was als Nächstes passiert
            und wer Ihr Ansprechpartner ist.
          </p>
        </div>

        <ol className="process-grid">
          {steps.map(([Icon, title, text], index) => (
            <li key={title} className="process-step">
              <div className="process-top">
                <span className="process-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="process-icon"><Icon /></span>
              </div>
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
