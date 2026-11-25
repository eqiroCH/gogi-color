import PageHero from '../components/PageHero'
import CallToAction from '../components/CallToAction'
import { Arrow, Pin } from '../components/Icons'
import { kreise, gemeinden } from '../content/area'
import './Pages.css'

function Einsatzgebiet() {
  return (
    <>
      <PageHero
        name="Einsatzgebiet"
        eyebrow="Einsatzgebiet"
        title="Ihr Maler in der Stadt Zürich und Umgebung."
        lead="Wir arbeiten in allen zwölf Stadtkreisen von Zürich und in den Gemeinden rund um die Stadt. Für grössere Aufträge kommen wir auch weiter – fragen Sie einfach an."
      >
        <a className="btn btn-gold btn-lg" href="/offerte">Offerte anfragen <Arrow /></a>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Stadt Zürich</p>
            <h2 className="section-title">In allen zwölf Stadtkreisen.</h2>
            <p className="section-lead">
              Ob Altbauwohnung im Seefeld, Einfamilienhaus in Witikon oder Gewerbefläche in
              Oerlikon – wir sind in der ganzen Stadt für Sie unterwegs.
            </p>
          </div>
          <ul className="kreis-grid">
            {kreise.map(([kreis, name, quartiere]) => (
              <li key={kreis} className="kreis">
                <span className="kreis-num">{kreis}</span>
                <h3>{name}</h3>
                <p>{quartiere}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">Agglomeration</p>
            <h2 className="section-title">Auch in den Gemeinden rund um Zürich.</h2>
            <p className="section-lead">
              Ihr Ort ist nicht aufgeführt? Fragen Sie trotzdem an – wir prüfen gerne, ob wir Ihren
              Auftrag übernehmen können.
            </p>
          </div>
          <ul className="place-chips">
            {gemeinden.map((name) => (
              <li key={name}><Pin /> {name}</li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction />
    </>
  )
}

export default Einsatzgebiet
