import './Gallery.css'

const INSTAGRAM = 'https://www.instagram.com/gogi_color/'

const shots = [
  {
    src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80',
    alt: 'Wand streichen mit Malerrolle',
    label: 'Innen',
  },
  {
    src: 'https://images.unsplash.com/photo-1562259949-e8e730775e91?auto=format&fit=crop&w=900&q=80',
    alt: 'Fassadenanstrich am Haus',
    label: 'Aussen',
  },
  {
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    alt: 'Renovationsarbeiten am Gebäude',
    label: 'Renovation',
  },
  {
    src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    alt: 'Saubere Baustelle und Vorbereitung',
    label: 'Vorbereitung',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    alt: 'Modernes Haus nach Anstrich',
    label: 'Fertigstellung',
  },
  {
    src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80',
    alt: 'Frische Wandfarbe im Wohnraum',
    label: 'Wohnraum',
  },
]

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-head">
          <div>
            <span className="section-label">Projekte</span>
            <h2 className="section-title">Arbeit, die man sieht.</h2>
          </div>
          <a className="btn btn-ghost" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            Mehr auf Instagram
          </a>
        </div>
        <div className="gallery-grid">
          {shots.map((shot) => (
            <a key={shot.src + shot.label} className="gallery-item" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <img src={shot.src} alt={shot.alt} loading="lazy" />
              <span>{shot.label}</span>
            </a>
          ))}
        </div>
        <p className="gallery-note">
          Aktuelle Baustellen und Videos findest du auf{' '}
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram @gogi_color</a>.
        </p>
      </div>
    </section>
  )
}

export default Gallery
