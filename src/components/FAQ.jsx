// Häufige Fragen als Akkordeon (<details>/<summary>, funktioniert ohne JS).
// Props:
//   items    – [{ q, a }] (Pflicht)
//   title    – Standard: «Häufige Fragen» (content/home.js → faqIntro)
//   lead     – Standard: faqIntro.lead
//   eyebrow  – optional
//   id       – Anker, Standard 'faq'
//   variant  – Section-Hintergrund ('default' | 'alt' | 'paper')
import { Section, SectionHeader } from './Section'
import { IconMail, IconPlus } from './Icons'
import { faqIntro } from '../content/home'
import { site } from '../site'
import { typo } from './typo'
import './FAQ.css'

export default function FAQ({ items, title = faqIntro.title, lead = faqIntro.lead, eyebrow, id = 'faq', variant = 'default' }) {
  return (
    <Section id={id} variant={variant} className="faq">
      <div className="faq__layout">
        <div className="faq__intro">
          <SectionHeader eyebrow={eyebrow} title={title} lead={lead} />
          <a className="faq__mail" href={`mailto:${site.email}`}>
            <span className="faq__mail-icon">
              <IconMail size={20} />
            </span>
            <span>
              <span className="faq__mail-label">Frage per E-Mail</span>
              <span className="faq__mail-value">{site.email}</span>
            </span>
          </a>
        </div>

        <div className="faq__list">
          {items.map((item) => (
            <details key={item.q} className="faq__item">
              <summary className="faq__question">
                <span>{item.q}</span>
                <span className="faq__icon">
                  <IconPlus size={20} />
                </span>
              </summary>
              <div className="faq__answer">
                <p>{typo(item.a)}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
