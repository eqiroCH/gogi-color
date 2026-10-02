import { Roller, Facade, Spatula, Brush, Palette, Office } from './Icons'
import './Services.css'

const services = [
  {
    icon: Roller,
    title: 'Innenmalerei',
    text: 'Wände, Decken, Türen und Zargen. Möbel und Böden werden sauber abgedeckt – am Ende bleibt nur frische Farbe.',
  },
  {
    icon: Facade,
    title: 'Fassaden & Aussen',
    text: 'Fassaden, Balkone und Aussenflächen mit wetterfesten Systemen, die das Schweizer Klima aushalten.',
  },
  {
    icon: Spatula,
    title: 'Spachtel & Untergrund',
    text: 'Risse, Löcher und unebene Flächen werden gespachtelt und geschliffen – die Basis für ein perfektes Finish.',
  },
  {
    icon: Brush,
    title: 'Renovation',
    text: 'Auffrischen nach Auszug, Umbau oder Altbau. Wir übernehmen Vorbereitung, Anstrich und Endreinigung der Fläche.',
  },
  {
    icon: Palette,
    title: 'Farbberatung',
    text: 'Welche Farbe passt zu Licht, Raum und Möbeln? Wir beraten vor Ort mit echten Farbmustern.',
  },
  {
    icon: Office,
    title: 'Gewerbe & Verwaltungen',
    text: 'Büros, Läden und Mietobjekte – planbar ausgeführt, auch abgestimmt auf Öffnungszeiten und Mieterwechsel.',
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-head reveal">
          <div>
            <p className="eyebrow">Leistungen</p>
            <h2 className="section-title">
              Alles rund um <span className="hand">Farbe.</span>
            </h2>
          </div>
          <p className="section-lead">
            Vom einzelnen Zimmer bis zur ganzen Fassade. Wir kümmern uns um Vorbereitung,
            Ausführung und Abschluss – du musst nur die Farbe aussuchen.
          </p>
        </div>

        <div className="services-list">
          {services.map(({ icon: Icon, title, text }, i) => (
            <article key={title} className="service-row reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <span className="service-num">0{i + 1}</span>
              <span className="service-icon"><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
