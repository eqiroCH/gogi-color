// /impressum – Rechtstext aus content/legal.jsx in einer ruhigen Textspalte.
// Ab 64em stehen die Abschnittstitel links in einer Randspalte (Legal.css).
import PageHeader from '../components/PageHeader'
import { Section } from '../components/Section'
import { IconArrowRight } from '../components/Icons'
import { ImpressumContent } from '../content/legal'
import './Legal.css'

export default function Impressum() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <Section tight className="legal-section">
        <div className="prose legal-prose">
          <ImpressumContent />
        </div>
        <p className="legal-related">
          <a href="/datenschutz" className="link-arrow">
            Zur Datenschutzerklärung
            <IconArrowRight />
          </a>
        </p>
      </Section>
    </>
  )
}
