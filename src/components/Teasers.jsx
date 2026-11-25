import { Arrow } from './Icons'
import { pricing } from '../content/pricing'
import { kreise, gemeinden } from '../content/area'
import './Teasers.css'

const flatRows = pricing.rows.filter(([label]) => label.includes('Zimmer'))

function Teasers() {
  return (
    <section className="section teasers">
      <div className="container teasers-grid">
        <article className="teaser">
          <p className="eyebrow">Kosten</p>
          <h2>Was kostet ein Maler in Zürich?</h2>
          <p>
            Der Preis hängt von Fläche, Zustand und Umfang ab. Als erste Orientierung dienen
            marktübliche Richtwerte für Wände und Decken:
          </p>
          <table className="teaser-table">
            <tbody>
              {flatRows.map(([label, price]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="teaser-note">Quelle: {pricing.source[0]}. Ihre verbindliche Offerte erhalten Sie nach der Besichtigung.</p>
          <a className="text-link" href="/kosten">Kostenfaktoren & Richtwerte <Arrow /></a>
        </article>

        <article className="teaser teaser-dark">
          <p className="eyebrow">Einsatzgebiet</p>
          <h2>In ganz Zürich und Umgebung unterwegs.</h2>
          <p>
            Von Altstetten bis Witikon, von Oerlikon bis Wollishofen – und in den Gemeinden rund um
            die Stadt.
          </p>
          <ul className="teaser-chips">
            {kreise.map(([kreis]) => <li key={kreis}>{kreis}</li>)}
            {gemeinden.slice(0, 8).map((name) => <li key={name}>{name}</li>)}
            <li>und weitere</li>
          </ul>
          <a className="text-link" href="/einsatzgebiet">Ganzes Einsatzgebiet <Arrow /></a>
        </article>
      </div>
    </section>
  )
}

export default Teasers
