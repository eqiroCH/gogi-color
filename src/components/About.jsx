import { Shield, Clock, Doc, Palette, Arrow } from './Icons'
import './About.css'

const values = [
  [Shield, 'Sauber & geschützt', 'Böden, Möbel und Fenster werden sorgfältig abgedeckt. Die Baustelle übergeben wir aufgeräumt.'],
  [Clock, 'Termintreu', 'Wir halten vereinbarte Termine ein und informieren Sie frühzeitig, falls sich etwas ändert.'],
  [Doc, 'Klare Offerte', 'Sie wissen vor Arbeitsbeginn schriftlich, was gemacht wird und was es kostet.'],
  [Palette, 'Markenfarben', 'Hochwertige Farben, abgestimmt auf Untergrund, Raum und Nutzung.'],
]

function About() {
  return (
    <section id="ueber-uns" className="section section-paper">
      <div className="container about-grid">
        <div className="about-media">
          <img
            className="about-main"
            src="/images/about.webp"
            alt="Maler auf einem Gerüst streicht eine Zimmerdecke"
            width="900"
            height="1125"
            loading="lazy"
          />
          <img
            className="about-detail"
            src="/images/about-detail.webp"
            alt="Farbroller in einer Farbwanne auf abgedecktem Boden"
            width="600"
            height="600"
            loading="lazy"
          />
        </div>

        <div className="about-text">
          <p className="eyebrow">Über uns</p>
          <h2 className="section-title">Handwerk mit Sorgfalt – vom Abdecken bis zur Abnahme.</h2>
          <p>
            Gogi Color ist ein Malergeschäft aus Zürich. Wir streichen Wohnungen, Häuser,
            Treppenhäuser, Fassaden und Gewerbeflächen – für Privatkunden, Liegenschaftsverwaltungen
            und Firmen.
          </p>
          <p>
            Bei uns zählt saubere Handwerksarbeit: gründliche Vorbereitung, exakte Kanten und eine
            Baustelle, die ordentlich hinterlassen wird. Von der Besichtigung bis zur Abnahme haben
            Sie einen festen Ansprechpartner.
          </p>

          <ul className="values">
            {values.map(([Icon, title, text]) => (
              <li key={title} className="value">
                <span className="value-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>

          <a className="btn btn-dark btn-lg" href="/offerte">
            Besichtigung vereinbaren <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
