import { Arrow, Phone, Mail } from './Icons'
import { site, telHref } from '../site'
import './CallToAction.css'

function CallToAction({ title = 'Sie planen Malerarbeiten?', text = 'Wir besichtigen Ihr Objekt und erstellen Ihnen eine unverbindliche Offerte.', offerHref = '/offerte' }) {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-dark btn-lg" href={offerHref}>
            Offerte anfragen <Arrow />
          </a>
          {site.phone ? (
            <a className="btn btn-ghost btn-lg" href={telHref(site.phone)}><Phone /> {site.phone}</a>
          ) : (
            <a className="btn btn-ghost btn-lg" href={`mailto:${site.email}`}><Mail /> E-Mail schreiben</a>
          )}
        </div>
      </div>
    </section>
  )
}

export default CallToAction
