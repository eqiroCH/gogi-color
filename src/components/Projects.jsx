import { Instagram } from './Icons'
import './Projects.css'

const INSTAGRAM = 'https://www.instagram.com/gogi_color/'
const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=800&q=75`

const photos = [
  ['1615873968403-89e068629265', 'Wohnzimmer mit dunkelgrüner Akzentwand'],
  ['1586023492125-27b2c045efd7', 'Hell gestrichener Wohnraum'],
  ['1599619351208-3e6c839d6828', 'Frisch gestrichenes Wohnzimmer'],
  ['1617104678098-de229db51175', 'Schlafzimmer mit dunkler Wand'],
]

function Projects() {
  return (
    <section id="impressionen" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">Impressionen</span>
          <h2 className="section-title">Frische Farbe für jeden Raum</h2>
          <p className="section-lead">
            Aktuelle Arbeiten, Vorher-Nachher-Bilder und Baustellen-Videos finden Sie auf
            unserem Instagram-Kanal.
          </p>
        </div>

        <div className="photo-grid">
          {photos.map(([id, alt]) => (
            <img key={id} className="reveal" src={img(id)} alt={alt} loading="lazy" />
          ))}
        </div>

        <div className="photo-cta reveal">
          <a className="btn btn-dark" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <Instagram /> Mehr auf Instagram @gogi_color
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
