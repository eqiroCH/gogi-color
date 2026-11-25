import PageHero from '../components/PageHero'
import FAQ from '../components/FAQ'
import CallToAction from '../components/CallToAction'
import { Arrow, Check } from '../components/Icons'
import { pricing, costFactors, savingTips } from '../content/pricing'
import './Pages.css'

const faq = [
  {
    q: 'Warum unterscheiden sich Malerpreise so stark?',
    a: 'Weil die zu streichende Fläche meist zwei- bis dreimal so gross ist wie die Wohnfläche und der Aufwand für die Vorbereitung stark variiert. Achten Sie beim Vergleichen darauf, ob Decken, Türen, Material und MwSt. enthalten sind.',
  },
  {
    q: 'Werden Decken, Türen und Heizkörper separat berechnet?',
    a: 'Ja. Sie werden in der Offerte als eigene Positionen aufgeführt – so sehen Sie genau, wofür Sie bezahlen.',
  },
  {
    q: 'Wie komme ich am schnellsten zu einem Preis?',
    a: 'Senden Sie uns über das Anfrageformular ein paar Fotos und die ungefähre Grösse. Danach vereinbaren wir eine Besichtigung und Sie erhalten eine schriftliche Offerte.',
  },
  {
    q: 'Was ist im Preis enthalten?',
    a: 'Das steht in Ihrer Offerte: in der Regel Abdecken, Vorbereitung, Material, Anstrich und Aufräumen. Zusätzliche Arbeiten besprechen wir vorher mit Ihnen.',
  },
]

function Kosten() {
  return (
    <>
      <PageHero
        name="Kosten"
        eyebrow="Kosten & Richtwerte"
        title="Was kostet ein Maler in Zürich?"
        lead="Die ehrliche Antwort: Es kommt auf Fläche, Zustand und Umfang an. Hier finden Sie die wichtigsten Kostenfaktoren, marktübliche Richtwerte und den schnellsten Weg zu Ihrer genauen Offerte."
      >
        <a className="btn btn-gold btn-lg" href="/offerte">Offerte anfragen <Arrow /></a>
        <a className="btn btn-ghost-light btn-lg" href="#richtwerte">Zu den Richtwerten</a>
      </PageHero>

      <section id="richtwerte" className="section">
        <div className="container price-grid">
          <div>
            <p className="eyebrow">Richtwerte</p>
            <h2 className="section-title">Marktübliche Preise in der Schweiz</h2>
            <p className="section-lead">
              Als erste Orientierung: durchschnittliche Preise aus einem öffentlichen Kostenvergleich.
              Sie ersetzen keine Besichtigung – Ihr verbindlicher Preis steht in der Offerte.
            </p>
            <div className="price-note">
              <h3>Warum eine Besichtigung?</h3>
              <p>
                Erst vor Ort sehen wir den Zustand der Wände, die tatsächliche Fläche und den
                Aufwand für die Vorbereitung. So erhalten Sie eine Offerte ohne Überraschungen.
              </p>
            </div>
          </div>
          <div className="price-table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th scope="col">Arbeit</th>
                  <th scope="col">Richtwert</th>
                </tr>
              </thead>
              <tbody>
                {pricing.rows.map(([label, price, note]) => (
                  <tr key={label}>
                    <th scope="row">
                      {label}
                      {note && <small>{note}</small>}
                    </th>
                    <td>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="price-source">
              Quelle:{' '}
              <a href={pricing.source[1]} target="_blank" rel="noopener noreferrer">{pricing.source[0]}</a>.
              Durchschnittswerte ohne Gewähr; nicht die Preise von Gogi Color.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Kostenfaktoren</p>
            <h2 className="section-title">Davon hängt der Preis ab.</h2>
          </div>
          <div className="feature-grid">
            {costFactors.map(([title, text], index) => (
              <article key={title} className="feature">
                <span className="feature-num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">Tipps</p>
            <h2 className="section-title">So sparen Sie Kosten – ohne an der Qualität zu sparen.</h2>
          </div>
          <ul className="check-list tips-list">
            {savingTips.map((tip) => <li key={tip}><Check /> {tip}</li>)}
          </ul>
        </div>
      </section>

      <FAQ items={faq} />
      <CallToAction title="Ihr genauer Preis in wenigen Schritten." text="Beschreiben Sie Ihr Vorhaben – wir melden uns für die Besichtigung und senden Ihnen eine unverbindliche Offerte." />
    </>
  )
}

export default Kosten
