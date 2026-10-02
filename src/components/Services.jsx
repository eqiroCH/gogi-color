import './Services.css'

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=560&q=75`

const services = [
  {
    title: 'Innenmalerei',
    text: 'Wände, Decken, Türen und Fensterrahmen. Möbel und Böden werden sauber abgedeckt.',
    image: img('1581858726788-75bc0f6a952d'),
  },
  {
    title: 'Fassaden',
    text: 'Fassadenanstriche mit wetterfesten Farben – für Einfamilienhäuser und Mehrfamilienhäuser.',
    image: img('1574359411659-15573a27fd0c'),
  },
  {
    title: 'Spachtel- & Gipsarbeiten',
    text: 'Löcher und Risse ausbessern, spachteln und schleifen – für einen glatten Untergrund.',
    image: img('1611021061285-16c871740efa'),
  },
  {
    title: 'Renovationen',
    text: 'Auffrischen bei Umzug, Mieterwechsel oder Umbau – inklusive Vorbereitung und Abschluss.',
    image: img('1630699144867-37acec97df5a'),
  },
  {
    title: 'Farbberatung',
    text: 'Wir beraten Sie vor Ort und zeigen Ihnen Farbmuster, damit die Farbe zu Raum und Licht passt.',
    image: img('1525909002-1b05e0c869d8'),
  },
  {
    title: 'Gewerbe & Verwaltungen',
    text: 'Büros, Läden, Treppenhäuser und Mietobjekte – termingerecht und mit wenig Störung.',
    image: img('1595846519845-68e298c2edd8'),
  },
]

function Services() {
  return (
    <section id="leistungen" className="section section-grey">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Unsere Leistungen</h2>
          <p className="section-lead">
            Vom einzelnen Zimmer bis zur ganzen Fassade – wir übernehmen Vorbereitung,
            Malerarbeiten und Aufräumen.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <img src={s.image} alt={s.title} loading="lazy" />
              <div className="service-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
