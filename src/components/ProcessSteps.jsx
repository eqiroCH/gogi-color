// Ablauf in Schritten (Standard: die 4 Schritte aus content/home.js → process).
// Wird auf der Startseite und auf den Leistungsseiten verwendet.
// Props:
//   eyebrow, title, lead – Standard aus process; lead={null} blendet den Lead aus
//   steps    – [[Titel, Text], …] (z. B. offerte.next mit 3 Schritten)
//   id       – Anker, Standard 'ablauf'
//   variant  – 'dark' (Standard, Tannengrün) | 'default' | 'alt'
//   children – optionale Aktionen unter dem Abschnittskopf
import { Section, SectionHeader } from './Section'
import { process } from '../content/home'
import { typo } from './typo'
import './ProcessSteps.css'

export default function ProcessSteps({
  eyebrow = process.eyebrow,
  title = process.title,
  lead = process.lead,
  steps = process.steps,
  id = 'ablauf',
  variant = 'dark',
  children,
}) {
  return (
    <Section id={id} variant={variant} className="process-section">
      <SectionHeader eyebrow={eyebrow} title={title} lead={lead} layout="split">
        {children}
      </SectionHeader>
      <ol className="process" style={{ '--steps': steps.length }}>
        {steps.map(([stepTitle, text], index) => (
          <li key={stepTitle} className="process__step">
            <span className="process__num" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="process__title">{stepTitle}</h3>
            <p className="process__text">{typo(text)}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
