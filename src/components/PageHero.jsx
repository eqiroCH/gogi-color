import { Check } from './Icons'
import './PageHero.css'

function PageHero({ name, eyebrow, title, lead, image, alt, highlights, children }) {
  return (
    <section className="page-hero">
      <div className={`container page-hero-grid ${image ? 'has-image' : ''}`}>
        <div className="page-hero-copy">
          <nav className="breadcrumbs" aria-label="Navigationspfad">
            <a href="/">Startseite</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{name}</span>
          </nav>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {lead && <p className="page-hero-lead">{lead}</p>}
          {highlights && (
            <ul className="page-hero-points">
              {highlights.map((item) => <li key={item}><Check /> {item}</li>)}
            </ul>
          )}
          {children && <div className="page-hero-actions">{children}</div>}
        </div>
        {image && (
          <div className="page-hero-media">
            <img src={image} alt={alt} width="800" height="600" fetchPriority="high" />
          </div>
        )}
      </div>
    </section>
  )
}

export default PageHero
