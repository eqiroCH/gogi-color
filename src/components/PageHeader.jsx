// Kopfbereich für alle Unterseiten: Brotkrumen, Kleintitel, H1, Lead,
// optional Bild, Aktionen (children) und Highlights.
//
// <PageHeader
//   breadcrumb="Innenmalerei"          // Name in den Brotkrumen (Standard: title)
//   eyebrow="Innenmalerei"
//   title="Wohnung streichen in Zürich – sauber und termingerecht."
//   lead="…"
//   image={{ src: '/images/innen.webp', width: 800, height: 600, alt: '…' }}
//   highlights={['…', '…', '…']}
// >
//   <a className="btn btn--primary" href="/offerte">Offerte anfragen</a>
//   <a className="btn btn--secondary" href="#leistungsumfang">Leistungsumfang</a>
// </PageHeader>
//
// Ohne image wird der Kopf einspaltig und schlicht (Impressum, Datenschutz, 404).
// Das Bild ist das wichtigste Bild der Seite → wird mit fetchPriority="high" geladen.
import Img from './Img'
import { typo } from './typo'
import './PageHeader.css'

export default function PageHeader({ breadcrumb, eyebrow, title, lead, image, highlights, className = '', children }) {
  const classes = ['page-header', image ? 'page-header--media' : 'page-header--plain', className]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Brotkrumen">
          <ol>
            <li>
              <a href="/">Startseite</a>
            </li>
            <li>
              <span aria-current="page">{breadcrumb ?? title}</span>
            </li>
          </ol>
        </nav>

        <div className="page-header__grid">
          <div className="page-header__body">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="page-header__title">{typo(title)}</h1>
            {lead && <p className="lead page-header__lead">{typo(lead)}</p>}
            {children && <div className="actions actions--stack page-header__actions">{children}</div>}
            {highlights?.length > 0 && (
              <ul className="check-list page-header__highlights">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {image && (
            <div className="page-header__media">
              <div className="media">
                <Img image={image} priority />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
