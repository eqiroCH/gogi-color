// Karten der Leistungen. Ganze Karte ist klickbar (Link im Titel).
// Props:
//   items         – Liste aus content/services.js (Standard: alle 6 Leistungen)
//   exclude       – Slug oder Liste von Slugs, die weggelassen werden
//                   (Leistungsseite: <ServiceCards exclude={service.slug} /> = «Weitere Leistungen»)
//   headingLevel  – 'h3' (Standard) oder 'h2'
//   linkLabel     – Standard «Mehr erfahren»
import Img from './Img'
import { IconArrowRight } from './Icons'
import { services, serviceHref } from '../content/services'
import { servicePageLabels } from '../content/pages'
import { typo } from './typo'
import './ServiceCards.css'

export default function ServiceCards({
  items = services,
  exclude,
  headingLevel: Heading = 'h3',
  linkLabel = servicePageLabels.relatedLink,
  className = '',
}) {
  const excluded = [].concat(exclude ?? [])
  const list = items.filter((service) => !excluded.includes(service.slug))

  return (
    <ul className={`service-cards ${className}`}>
      {list.map((service) => (
        <li key={service.slug} className="service-card">
          <div className="service-card__media media">
            <Img src={service.image} width={800} height={600} alt={service.alt} />
          </div>
          <div className="service-card__body">
            <Heading className="service-card__title">
              <a href={serviceHref(service)} className="stretched-link">
                {service.name}
              </a>
            </Heading>
            <p className="service-card__text">{typo(service.short)}</p>
            {service.items?.length > 0 && (
              <ul className="service-card__items">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <span className="service-card__more" aria-hidden="true">
              {linkLabel}
              <IconArrowRight size={18} />
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
