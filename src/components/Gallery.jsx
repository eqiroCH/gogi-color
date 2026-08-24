import './Gallery.css'

const INSTAGRAM = 'https://www.instagram.com/gogi_color/'

const shots = [
  {
    src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=900&q=80',
    alt: 'Warmes Blond mit Bewegung',
    label: 'Blond',
  },
  {
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80',
    alt: 'Langes Haar im Licht',
    label: 'Dimension',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    alt: 'Salonatmosphäre',
    label: 'Studio',
  },
  {
    src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=900&q=80',
    alt: 'Natürliche Wellen',
    label: 'Balayage',
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80',
    alt: 'Farbschalen und Pinsel',
    label: 'Handwerk',
  },
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    alt: 'Beauty-Close-up mit warmen Tönen',
    label: 'Finish',
  },
]

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-head">
          <div>
            <span className="section-label">Galerie</span>
            <h2 className="section-title">Licht, Nuance, <em>Bewegung</em></h2>
          </div>
          <a className="btn btn-ghost" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            Alle Arbeiten auf Instagram
          </a>
        </div>
        <div className="gallery-grid">
          {shots.map((shot) => (
            <a key={shot.src} className="gallery-item" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <img src={shot.src} alt={shot.alt} loading="lazy" />
              <span>{shot.label}</span>
            </a>
          ))}
        </div>
        <p className="gallery-note">
          Die Bilder auf dieser Seite zeigen die Stimmung der Marke. Gogis aktuelle Kundenarbeiten
          findest du direkt auf{' '}
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram @gogi_color</a>.
        </p>
      </div>
    </section>
  )
}

export default Gallery
