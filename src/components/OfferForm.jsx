// PLATZHALTER. Das echte mehrstufige Offerte-Formular (useOfferForm aus
// src/lib/useOfferForm.js) wird in dieser Datei von einem anderen Agent gebaut.
// Vertrag: Default-Export ohne Pflicht-Props; wird auf der Startseite (#kontakt)
// und auf /offerte eingebettet und füllt die Breite seines Containers.
// Gemeinsame Formular-Klassen: src/styles/forms.css (siehe DESIGN.md).
import { steps } from '../lib/offerForm'
import { IconArrowRight } from './Icons'
import { OFFER_HREF } from './nav'

export default function OfferForm() {
  return (
    <div className="form-panel">
      <ol className="stepper" style={{ '--steps': steps.length }}>
        {steps.map((step, index) => (
          <li key={step.key} className={index === 0 ? 'is-current' : undefined}>
            {step.label}
          </li>
        ))}
      </ol>
      <h3 className="form-panel__title">{steps[0].heading}</h3>
      <div className="actions">
        <a href={OFFER_HREF} className="btn btn--primary btn--lg">
          Offerte anfragen
          <IconArrowRight />
        </a>
      </div>
    </div>
  )
}
