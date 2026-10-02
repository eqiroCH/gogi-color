import { Arrow, Instagram } from './Icons'
import './Projects.css'

const INSTAGRAM = 'https://www.instagram.com/gogi_color/'
const img = (id, w = 900, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

const items = [
  { id: '1581858726788-75bc0f6a952d', label: 'Innenräume', note: 'Wände & Decken', size: 'tall' },
  { id: '1574359411659-15573a27fd0c', label: 'Fassaden', note: 'Aussenanstrich', size: 'wide', w: 1300, h: 900 },
  { id: '1615873968403-89e068629265', label: 'Akzentwände', note: 'Farbe mit Charakter', size: 'wide', w: 1300, h: 900 },
  { id: '1595846519845-68e298c2edd8', label: 'Gewerbe', note: 'Büros & Läden', size: 'wide', w: 1300, h: 900 },
  { id: '1595814433015-e6f5ce69614e', label: 'Renovation', note: 'Vorbereitung & Schutz', size: 'wide', w: 1300, h: 900 },
]

function Projects() {
  return (
    <section id="projekte" className="projects">
      <div className="container">
        <div className="projects-head reveal">
          <div>
            <p className="eyebrow">Einblicke</p>
            <h2 className="section-title">
              Räume, die <span className="hand">wirken.</span>
            </h2>
          </div>
          <a className="btn btn-line" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            Baustellen auf Instagram
            <Arrow />
          </a>
        </div>

        <div className="projects-grid">
          {items.map((item, i) => (
            <figure key={item.id} className={`project project--${item.size} reveal`} style={{ transitionDelay: `${i * 0.06}s` }}>
              <img src={img(item.id, item.w, item.h)} alt={`${item.label} – ${item.note}`} loading="lazy" />
              <figcaption>
                <span className="tape project-tape" style={{ transform: `rotate(${i % 2 ? 3 : -3}deg)` }}>
                  {item.label}
                </span>
                <span className="project-note">{item.note}</span>
              </figcaption>
            </figure>
          ))}

          <a className="project project-insta reveal" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <Instagram />
            <strong>@gogi_color</strong>
            <span>Aktuelle Baustellen, Vorher-Nachher und Videos direkt von Gogi.</span>
            <em>Folgen <Arrow /></em>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
