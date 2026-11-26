// Seite /offerte: schlichter Kopf, das mehrstufige Formular als Hauptsache und daneben
// (ab 64em) bzw. darunter «So geht es weiter» und die direkten Kontaktwege.
// Die mobile Aktionsleiste ist auf dieser Seite aus (MobileBar), deshalb hier kein Platzhalter.
import PageHeader from '../components/PageHeader'
import { Section } from '../components/Section'
import OfferForm from '../components/OfferForm'
import ContactList from '../components/ContactList'
import { typo } from '../components/typo'
import { offerte } from '../content/pages'
import './Offerte.css'

export default function Offerte() {
  return (
    <>
      <PageHeader
        className="offerte-header"
        breadcrumb={offerte.title}
        eyebrow={offerte.eyebrow}
        title={offerte.title}
        lead={offerte.lead}
      />

      <Section variant="alt" className="offerte-main">
        <div className="offerte-layout">
          <div className="offerte-layout__form">
            <OfferForm headingLevel="h2" />
          </div>

          <aside className="offerte-aside" aria-label="Ablauf und Kontakt">
            <section className="offerte-next" aria-labelledby="offerte-next-title">
              <h2 id="offerte-next-title" className="offerte-aside__title">
                {offerte.nextTitle}
              </h2>
              <ol className="offerte-next__list">
                {offerte.next.map(([title, text], index) => (
                  <li key={title} className="offerte-next__step">
                    <span className="offerte-next__num" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="offerte-next__title">{title}</h3>
                    <p className="offerte-next__text">{typo(text)}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="offerte-direct" aria-labelledby="offerte-direct-title">
              <h2 id="offerte-direct-title" className="offerte-aside__title">
                Lieber direkt?
              </h2>
              <ContactList />
            </section>
          </aside>
        </div>
      </Section>
    </>
  )
}
