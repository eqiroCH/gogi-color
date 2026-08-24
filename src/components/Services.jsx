import './Services.css'

const services = [
  {
    num: '01',
    title: 'Signature Balayage',
    text: 'Freihand-Technik für weiche Übergänge und Licht, das natürlich wirkt – nie streifig, immer persönlich.',
  },
  {
    num: '02',
    title: 'Blond & Highlights',
    text: 'Kühle, warme oder honey-blonde Nuancen. Aufgebaut, damit die Haarstruktur geschützt bleibt.',
  },
  {
    num: '03',
    title: 'Color & Ansatz',
    text: 'Vollfarbe, Ansatz und Glossing – präzise, haltbar und abgestimmt auf deinen Alltag.',
  },
  {
    num: '04',
    title: 'Farbkorrektur',
    text: 'Wenn die letzte Farbe nicht sitzt: ruhige Analyse, realistischer Plan, sauberes Ergebnis.',
  },
  {
    num: '05',
    title: 'Gloss & Toner',
    text: 'Frische, Glanz und die richtige Reflexion – ohne grosse Transformation, mit sichtbarer Wirkung.',
  },
  {
    num: '06',
    title: 'Schnitt & Finish',
    text: 'Die Form trägt die Farbe. Schnitt, Föhnfrisur und Styling, damit das Resultat komplett ist.',
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-head">
          <span className="section-label">Leistungen</span>
          <h2 className="section-title">Farbe als <em>Handwerk</em></h2>
          <p className="section-lead">
            Kein Katalog-Look. Jede Farbe entsteht nach Beratung – zu Teint, Haarstruktur und dem Leben, das du führst.
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
