// Seite /kosten: Richtwerte (Marktwerte mit Quelle), Kostenfaktoren, Spartipps, FAQ.
// Inhalte aus content/pages.js (kosten) und content/pricing.js.
import PageHeader from '../components/PageHeader'
import { Section, SectionHeader } from '../components/Section'
import FAQ from '../components/FAQ'
import CallToAction from '../components/CallToAction'
import { IconArrowRight, IconArrowUpRight, IconInfo } from '../components/Icons'
import { OFFER_HREF } from '../components/nav'
import { typo } from '../components/typo'
import { kosten, servicePageLabels } from '../content/pages'
import { pricing, costFactors, savingTips } from '../content/pricing'
import './Kosten.css'

const external = { target: '_blank', rel: 'noopener noreferrer' }

// «CHF 10–20 pro m² Wandfläche» → Betrag «CHF 10–20» + Einheit «pro m² Wandfläche».
// Nur Darstellung: Der Text bleibt vollständig, die Einheit steht als zweite Zeile.
function splitValue(value) {
  const index = value.indexOf(' pro ')
  return index === -1 ? [value, ''] : [value.slice(0, index), value.slice(index + 1)]
}

function Richtwerte() {
  const { richtwerte } = kosten
  const [sourceLabel, sourceHref] = pricing.source
  return (
    <Section id="richtwerte" className="kosten-richtwerte">
      <SectionHeader eyebrow={richtwerte.eyebrow} title={richtwerte.title} lead={richtwerte.lead} />

      <div className="kosten-richtwerte__grid">
        <div className="kosten-sheet">
          <div className="table-wrap">
            <table className="data-table kosten-table">
              <caption className="visually-hidden">
                Marktübliche Richtwerte in der Schweiz, {richtwerte.disclaimer}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{richtwerte.tableHead[0]}</th>
                  <th scope="col">{richtwerte.tableHead[1]}</th>
                </tr>
              </thead>
              <tbody>
                {pricing.rows.map(([label, value, note]) => {
                  const [amount, unit] = splitValue(value)
                  return (
                    <tr key={label}>
                      <th scope="row">
                        {label}
                        {note && <span className="data-table__note">{note}</span>}
                      </th>
                      <td>
                        <span className="kosten-table__amount">{amount}</span>
                        {unit && <span className="kosten-table__unit"> {unit}</span>}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p className="source-note kosten-source">
            <IconInfo size={20} className="kosten-source__icon" />
            <span>
              <strong>{servicePageLabels.sourceLabel}</strong>{' '}
              <a href={sourceHref} className="kosten-source__link" {...external}>
                {sourceLabel}
                <IconArrowUpRight size={14} />
                <span className="visually-hidden"> (öffnet in neuem Fenster)</span>
              </a>
              <span className="kosten-source__disclaimer">{richtwerte.disclaimer}</span>
            </span>
          </p>
        </div>

        <aside className="info-box kosten-note" aria-labelledby="kosten-note-title">
          <h3 id="kosten-note-title" className="info-box__title">
            {richtwerte.noteTitle}
          </h3>
          <p>{typo(richtwerte.noteText)}</p>
          <a href={OFFER_HREF} className="link-arrow">
            Offerte anfragen
            <IconArrowRight />
          </a>
        </aside>
      </div>
    </Section>
  )
}

function Faktoren() {
  const { faktoren } = kosten
  return (
    <Section id="kostenfaktoren" variant="alt">
      <SectionHeader eyebrow={faktoren.eyebrow} title={faktoren.title} />
      <ol className="feature-grid kosten-factors">
        {costFactors.map(([title, text]) => (
          <li key={title} className="feature-card">
            <h3>{title}</h3>
            <p>{typo(text)}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Tipps() {
  const { tipps } = kosten
  return (
    <Section id="spartipps" variant="dark" className="kosten-tips">
      <div className="kosten-tips__grid">
        <SectionHeader eyebrow={tipps.eyebrow} title={tipps.title} />
        <ul className="check-list check-list--lines kosten-tips__list">
          {savingTips.map((tip) => (
            <li key={tip}>{typo(tip)}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default function Kosten() {
  const { hero } = kosten
  return (
    <>
      <PageHeader breadcrumb="Kosten" eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead}>
        <a href={OFFER_HREF} className="btn btn--primary btn--lg">
          Offerte anfragen
          <IconArrowRight />
        </a>
        <a href="#richtwerte" className="btn btn--secondary btn--lg">
          {hero.secondaryCta}
        </a>
      </PageHeader>
      <Richtwerte />
      <Faktoren />
      <Tipps />
      <FAQ items={kosten.faq} eyebrow="Fragen zu den Kosten" />
      <CallToAction title={kosten.cta.title} text={kosten.cta.text} />
    </>
  )
}
