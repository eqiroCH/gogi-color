import { Instagram, Arrow } from './Icons'
import { site } from '../site'
import './Projects.css'

// Stimmungsbilder (Unsplash) – durch echte Projektfotos von Gogi Color ersetzen
const photos = [
  ['/images/raum-terrakotta.webp', 'Warme Erdtöne', 'Schlafzimmer mit terrakottafarbener Wand', 'g-tall'],
  ['/images/raum-gruen.webp', 'Akzentwand in Tannengrün', 'Wohnzimmer mit dunkelgrüner Akzentwand', 'g-wide'],
  ['/images/raum-salbei.webp', 'Ruhiges Salbeigrün', 'Wohnraum mit salbeigrüner Wand'],
  ['/images/raum-dunkel.webp', 'Dunkle Töne', 'Schlafzimmer mit dunkler Wandfarbe'],
  ['/images/raum-hell.webp', 'Klassisches Weiss', 'Hell gestrichener Wohnraum mit gelbem Sessel'],
]

function Projects() {
  return (
    <section id="einblicke" className="section">
      <div className="container">
        <div className="section-head section-head-split">
          <div>
            <p className="eyebrow">Einblicke</p>
            <h2 className="section-title">Farbe, die Räume verändert.</h2>
          </div>
          <p className="section-lead">
            Warme Erdtöne, ein ruhiges Grün oder klassisches Weiss – wir beraten Sie gerne zur
            passenden Farbe. Aktuelle Arbeiten und Vorher-Nachher-Bilder zeigen wir auf Instagram.
          </p>
        </div>

        <div className="gallery">
          {photos.map(([src, caption, alt, size]) => (
            <figure key={src} className={size}>
              <img src={src} alt={alt} loading="lazy" />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
          <a className="insta-card" href={site.instagram} target="_blank" rel="noopener noreferrer">
            <Instagram />
            <div>
              <strong>{site.instagramHandle}</strong>
              <span>Aktuelle Projekte auf Instagram ansehen</span>
            </div>
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
