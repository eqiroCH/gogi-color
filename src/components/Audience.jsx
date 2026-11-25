import { Home, Building, Store, Arrow } from './Icons'
import './Audience.css'

const groups = [
  {
    Icon: Home,
    title: 'Privatkunden',
    text: 'Wohnung, Haus oder einzelnes Zimmer: Wir beraten Sie persönlich, arbeiten sauber in Ihrem Zuhause und räumen danach auf.',
    links: [['/innenmalerei', 'Innenmalerei'], ['/fassaden', 'Fassaden']],
  },
  {
    Icon: Building,
    title: 'Verwaltungen & STWEG',
    text: 'Mieterwechsel, Treppenhäuser und Allgemeinflächen – koordiniert mit Hauswart und Mietern, auf Wunsch in Etappen.',
    links: [['/verwaltungen', 'Für Verwaltungen'], ['/wohnungsabgabe', 'Wohnungsabgabe']],
  },
  {
    Icon: Store,
    title: 'Gewerbe',
    text: 'Büros, Praxen und Ladenflächen – mit Terminen, die zu Ihren Öffnungszeiten passen, und möglichst wenig Unterbruch.',
    links: [['/verwaltungen', 'Malerarbeiten für Firmen']],
  },
]

function Audience() {
  return (
    <section className="section section-paper audience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Für wen wir arbeiten</p>
          <h2 className="section-title">Ein Malergeschäft für Private, Verwaltungen und Firmen.</h2>
        </div>
        <div className="audience-grid">
          {groups.map(({ Icon, title, text, links }) => (
            <article key={title} className="audience-card">
              <span className="audience-icon"><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="audience-links">
                {links.map(([href, label]) => (
                  <a key={label} className="text-link" href={href}>{label} <Arrow /></a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Audience
