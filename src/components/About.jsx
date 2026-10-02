import { Check } from './Icons'
import './About.css'

const points = [
  'Ein fester Ansprechpartner von der Besichtigung bis zur Abnahme',
  'Böden, Möbel und Fenster werden sorgfältig geschützt',
  'Hochwertige Markenfarben, passend zum Untergrund',
  'Schriftliche Offerte vor Arbeitsbeginn',
  'Baustelle wird sauber und aufgeräumt übergeben',
]

function About() {
  return (
    <section id="ueber-uns" className="section">
      <div className="container about-grid">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?auto=format&fit=crop&w=1000&h=1100&q=75"
            alt="Maler mit Pinsel und Farbroller bei der Arbeit"
            loading="lazy"
          />
        </div>

        <div className="about-text">
          <h2 className="section-title">Ihr Malergeschäft aus Zürich</h2>
          <p>
            Gogi Color ist ein Malerbetrieb aus Zürich. Wir streichen Wohnungen, Häuser,
            Treppenhäuser, Fassaden und Gewerbeflächen – für Privatkunden, Verwaltungen und Firmen.
          </p>
          <p>
            Bei uns zählt saubere Handwerksarbeit: gute Vorbereitung, exakte Kanten und
            eine Baustelle, die ordentlich hinterlassen wird.
          </p>

          <ul className="about-list">
            {points.map((p) => (
              <li key={p}><Check /> {p}</li>
            ))}
          </ul>

          <a className="btn btn-dark" href="#kontakt">Jetzt Offerte anfragen</a>
        </div>
      </div>
    </section>
  )
}

export default About
