// Vorlage der Leistungsseiten (/innenmalerei, /fassaden, /wohnungsabgabe, /renovation, /verwaltungen).
// Props: service – Eintrag aus content/services.js (mit `page`)
//
// Aufbau (Hintergründe abwechselnd, ein dunkler Abschnitt):
//   PageHeader (Kalk) → Einleitung (Kalk) → Leistungsumfang + Info-Box (Sand, #leistungsumfang)
//   → Ablauf (Tannengrün, #ablauf) → FAQ (Kalk, #faq) → Weitere Leistungen (Sand) → CTA (Kalk)
// Die Info-Box ist optional (Verwaltungen hat keine) und trägt page.info.id als Anker
// (/innenmalerei#farbberatung wird von der Startseite verlinkt).
import PageHeader from '../components/PageHeader'
import { Section, SectionHeader } from '../components/Section'
import ProcessSteps from '../components/ProcessSteps'
import FAQ from '../components/FAQ'
import ServiceCards from '../components/ServiceCards'
import CallToAction from '../components/CallToAction'
import { IconArrowRight, IconArrowUpRight } from '../components/Icons'
import { typo } from '../components/typo'
import { servicePages } from '../content/services'
import { servicePageLabels as labels } from '../content/pages'
import { kostenTeaser } from '../content/home'
import './ServicePage.css'

const external = { target: '_blank', rel: 'noopener noreferrer' }

// «Gut zu wissen: Wer bezahlt den Anstrich?» → Kleintitel «Gut zu wissen» + Titel «Wer bezahlt den Anstrich?»
const INFO_PREFIX = 'Gut zu wissen'

function splitInfoHeading(heading) {
  const match = heading.match(new RegExp(`^${INFO_PREFIX}:\\s*(.+)$`))
  return match ? match[1] : heading
}

function Intro({ intro }) {
  return (
    <Section className="service-page-intro" aria-labelledby="einleitung-titel">
      <div className="split split--media-wide split--top service-page-intro__grid">
        <SectionHeader eyebrow={labels.introEyebrow} title={intro.heading} titleId="einleitung-titel" />
        <div className="service-page-intro__body">
          <div className="stack service-page-intro__text">
            {intro.paragraphs.map((text) => (
              <p key={text}>{typo(text)}</p>
            ))}
          </div>
          <p className="service-page-intro__more">
            <a href="/kosten" className="link-arrow">
              {kostenTeaser.link}
              <IconArrowRight />
            </a>
          </p>
        </div>
      </div>
    </Section>
  )
}

function InfoBox({ info }) {
  const [sourceLabel, sourceHref] = info.source ?? []
  return (
    <aside id={info.id} className="info-box service-page-info" aria-labelledby="info-titel">
      <div className="service-page-info__head">
        <p className="eyebrow">{INFO_PREFIX}</p>
        <h3 id="info-titel" className="info-box__title service-page-info__title">
          {typo(splitInfoHeading(info.heading))}
        </h3>
      </div>
      <div className="service-page-info__body">
        {info.paragraphs.map((text) => (
          <p key={text}>{typo(text)}</p>
        ))}
        {sourceHref && (
          <p className="info-box__source">
            {labels.sourceLabel}{' '}
            <a href={sourceHref} className="service-page-info__link" {...external}>
              {sourceLabel}
              <span className="visually-hidden"> (öffnet in neuem Fenster)</span>
              <IconArrowUpRight size={16} />
            </a>
          </p>
        )}
      </div>
    </aside>
  )
}

function Features({ features, info }) {
  return (
    <Section id="leistungsumfang" variant="alt" className="service-page-features">
      <SectionHeader eyebrow={labels.featuresEyebrow} title={labels.featuresTitle} />
      <ol className="feature-grid">
        {features.map(([title, text]) => (
          <li key={title} className="feature-card">
            <h3>{title}</h3>
            <p>{typo(text)}</p>
          </li>
        ))}
      </ol>
      {info && <InfoBox info={info} />}
    </Section>
  )
}

function Related({ slug }) {
  return (
    <Section variant="alt" className="service-page-related" aria-labelledby="weitere-titel">
      <SectionHeader eyebrow={labels.relatedEyebrow} title={labels.relatedTitle} titleId="weitere-titel" />
      <ServiceCards items={servicePages} exclude={slug} />
    </Section>
  )
}

export default function ServicePage({ service }) {
  const { page, slug } = service
  const offerHref = `/offerte?leistung=${slug}`

  return (
    <>
      <PageHeader
        breadcrumb={service.name}
        eyebrow={service.name}
        title={page.title}
        lead={page.lead}
        image={{ src: service.image, width: 800, height: 600, alt: service.alt }}
        highlights={page.highlights}
      >
        <a href={offerHref} className="btn btn--primary btn--lg">
          {labels.primaryCta}
          <IconArrowRight />
        </a>
        <a href="#leistungsumfang" className="btn btn--secondary btn--lg">
          {labels.secondaryCta}
        </a>
      </PageHeader>

      <Intro intro={page.intro} />
      <Features features={page.features} info={page.info} />
      <ProcessSteps />
      <FAQ items={page.faq} />
      <Related slug={slug} />
      <CallToAction offerHref={offerHref} />
    </>
  )
}
