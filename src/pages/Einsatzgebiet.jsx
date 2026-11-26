// Seite /einsatzgebiet: 12 Stadtkreise mit Quartieren, Gemeinden rund um Zürich.
// Inhalte aus content/pages.js (einsatzgebiet) und content/area.js.
import PageHeader from '../components/PageHeader'
import { Section, SectionHeader } from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IconArrowRight, IconMapPin } from '../components/Icons'
import { OFFER_HREF } from '../components/nav'
import { typo } from '../components/typo'
import { einsatzgebiet } from '../content/pages'
import { kreise, gemeinden } from '../content/area'
import './Einsatzgebiet.css'

// «Ihr Ort ist nicht aufgeführt? Fragen Sie trotzdem an …» → Frage + Antwort getrennt darstellen
function splitQuestion(text) {
  const index = text.indexOf('? ')
  return index === -1 ? ['', text] : [text.slice(0, index + 1), text.slice(index + 2)]
}

function Stadtkreise() {
  const { stadt } = einsatzgebiet
  return (
    <Section id="stadtkreise" className="gebiet-stadt">
      <SectionHeader eyebrow={stadt.eyebrow} title={stadt.title} lead={stadt.lead} layout="split" />
      <ol className="number-tiles gebiet-kreise" aria-label="Stadtkreise von Zürich">
        {kreise.map(([kreis, name, quartiere]) => (
          <li key={kreis} className="number-tile gebiet-kreis">
            <span className="number-tile__num gebiet-kreis__num">
              <span className="gebiet-kreis__prefix">Kreis </span>
              {kreis.replace('Kreis ', '')}
            </span>
            <span className="number-tile__label gebiet-kreis__name">{name}</span>
            <span className="number-tile__meta gebiet-kreis__meta">
              <span className="visually-hidden">Quartiere: </span>
              {quartiere}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Gemeinden() {
  const { gemeinden: text } = einsatzgebiet
  const [question, answer] = splitQuestion(text.lead)
  return (
    <Section id="gemeinden" variant="alt" className="gebiet-gemeinden">
      <div className="gebiet-gemeinden__grid">
        <SectionHeader eyebrow={text.eyebrow} title={text.title} />

        <ul className="chip-list gebiet-orte" aria-label="Gemeinden rund um Zürich">
          {gemeinden.map((name) => (
            <li key={name} className="chip chip--swatch gebiet-ort">
              {name}
            </li>
          ))}
        </ul>

        <aside className="gebiet-hinweis" aria-label="Hinweis">
          <IconMapPin size={24} className="gebiet-hinweis__icon" />
          <div className="gebiet-hinweis__body">
            {question && <p className="gebiet-hinweis__title">{question}</p>}
            <p className="gebiet-hinweis__text">{typo(answer)}</p>
            <a href={OFFER_HREF} className="link-arrow">
              Offerte anfragen
              <IconArrowRight />
            </a>
          </div>
        </aside>
      </div>
    </Section>
  )
}

export default function Einsatzgebiet() {
  const { hero } = einsatzgebiet
  const highlights = [
    `Alle ${kreise.length} Stadtkreise`,
    `${gemeinden.length} Gemeinden rund um Zürich`,
    'Weitere Orte auf Anfrage',
  ]
  return (
    <>
      <PageHeader
        breadcrumb="Einsatzgebiet"
        eyebrow={hero.eyebrow}
        title={hero.title}
        lead={hero.lead}
        highlights={highlights}
      >
        <a href={OFFER_HREF} className="btn btn--primary btn--lg">
          Offerte anfragen
          <IconArrowRight />
        </a>
      </PageHeader>
      <Stadtkreise />
      <Gemeinden />
      <CallToAction />
    </>
  )
}
