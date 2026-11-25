import { Pin, Doc, Shield, Palette, Check } from './Icons'
import { site } from '../site'
import './TrustBar.css'

const facts = [
  [Pin, 'Ganz Zürich & Umgebung', 'Alle 12 Stadtkreise und Agglomeration'],
  [Doc, 'Schriftliche Offerte', 'Nach Besichtigung vor Ort'],
  [Shield, 'Sauber & geschützt', 'Abdecken, aufräumen, gemeinsame Abnahme'],
  [Palette, 'Farbberatung', 'Farbmuster direkt an Ihrer Wand'],
]

function TrustBar() {
  return (
    <section className="trust" aria-label="Das zeichnet uns aus">
      <div className="container">
        <ul className="trust-grid">
          {facts.map(([Icon, title, text]) => (
            <li key={title}>
              <span className="trust-icon"><Icon /></span>
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </li>
          ))}
        </ul>
        {site.credentials.length > 0 && (
          <ul className="trust-credentials">
            {site.credentials.map((item) => (
              <li key={item}><Check /> {item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default TrustBar
