import { Arrow } from './Icons'
import { services, serviceHref } from '../content/services'
import './Services.css'

function Services() {
  return (
    <section id="leistungen" className="section services">
      <div className="container">
        <div className="section-head section-head-split">
          <div>
            <p className="eyebrow">Leistungen</p>
            <h2 className="section-title">Alles rund um Farbe, Wand und Fassade.</h2>
          </div>
          <p className="section-lead">
            Vom einzelnen Zimmer bis zur ganzen Fassade: Wir übernehmen Abdecken, Vorbereitung,
            Malerarbeiten und Aufräumen – alles aus einer Hand.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <a key={service.slug} className="service-card" href={serviceHref(service)}>
              <div className="service-media">
                <img src={service.image} alt={service.alt} width="800" height="600" loading="lazy" />
                <span className="service-num">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="service-body">
                <h3>{service.name}</h3>
                <p>{service.short}</p>
                <ul className="service-list">
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <span className="service-more">Mehr erfahren <Arrow /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
