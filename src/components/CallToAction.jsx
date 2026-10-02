import { Arrow } from './Icons'
import './CallToAction.css'

function CallToAction() {
  return (
    <section className="cta">
      <svg className="cta-drips" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 H1440 V20 C1400 20 1395 70 1370 70 C1345 70 1350 24 1300 22 C1240 20 1230 46 1200 46 C1170 46 1175 20 1120 20 C1060 20 1065 82 1030 82 C995 82 1000 24 950 22 C880 20 870 40 840 40 C810 40 812 20 760 20 C700 20 705 60 675 60 C645 60 650 22 600 20 C540 18 530 88 492 88 C455 88 462 24 410 22 C350 20 345 44 318 44 C290 44 292 20 240 20 C180 20 182 66 150 66 C118 66 122 22 70 20 C35 19 20 30 0 30 Z" />
      </svg>
      <div className="container cta-inner reveal">
        <h2>
          Bereit für <span className="hand">frische Farbe?</span>
        </h2>
        <p>Erzähl uns von deinem Projekt – wir melden uns mit einem Termin für die Besichtigung.</p>
        <div className="cta-actions">
          <a className="btn btn-ink" href="#kontakt">
            Offerte anfragen
            <Arrow />
          </a>
          <a className="btn btn-line" href="mailto:info@gogicolor.ch">
            info@gogicolor.ch
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
