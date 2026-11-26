// /datenschutz – Rechtstext aus content/legal.jsx in einer ruhigen Textspalte.
// Gleiches Gerüst wie /impressum, Styles in Legal.css.
import PageHeader from '../components/PageHeader'
import { Section } from '../components/Section'
import { IconArrowRight } from '../components/Icons'
import { DatenschutzContent } from '../content/legal'
import './Legal.css'

export default function Datenschutz() {
  return (
    <>
      <PageHeader breadcrumb="Datenschutz" eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <Section tight className="legal-section">
        <div className="prose legal-prose">
          <DatenschutzContent />
        </div>
        <p className="legal-related">
          <a href="/impressum" className="link-arrow">
            Zum Impressum
            <IconArrowRight />
          </a>
        </p>
      </Section>
    </>
  )
}
