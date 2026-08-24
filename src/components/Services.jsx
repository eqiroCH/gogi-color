import './Services.css'

const services = [
  {
    num: '01',
    title: 'Innenmalerei',
    text: 'Wände, Decken und Detailflächen – sauber abgedeckt, gleichmässig gestrichen, fertig zum Einziehen.',
  },
  {
    num: '02',
    title: 'Aussenmalerei',
    text: 'Fassaden und Aussenflächen wetterfest und optisch frisch. Langlebig und fürs Schweizer Klima gedacht.',
  },
  {
    num: '03',
    title: 'Renovation',
    text: 'Altbau, Umbau oder Auffrischung: Spachteln, schleifen, grundieren und neu streichen aus einer Hand.',
  },
  {
    num: '04',
    title: 'Spachtelarbeiten',
    text: 'Unebene Untergründe, Risse und Übergänge – vorbereitet, damit die Farbe wirklich sitzt.',
  },
  {
    num: '05',
    title: 'Farbberatung',
    text: 'Welche Farbe wirkt in welchem Raum? Wir helfen bei der Auswahl – klar und ohne Schnickschnack.',
  },
  {
    num: '06',
    title: 'Gewerbe & Privat',
    text: 'Wohnungen, Häuser, Büros und Ladenflächen in Zürich und Umgebung – zuverlässig und termingerecht.',
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-head">
          <span className="section-label">Leistungen</span>
          <h2 className="section-title">Malerarbeit, die hält.</h2>
          <p className="section-lead">
            Von der ersten Beratung bis zur letzten Rolle – saubere Ausführung und ein Ergebnis, auf das du stolz bist.
          </p>
        </div>
        <div className="services-grid">
          {services.map((item) => (
            <article key={item.num} className="service-card">
              <span>{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
