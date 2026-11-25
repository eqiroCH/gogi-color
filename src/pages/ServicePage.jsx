import PageHero from '../components/PageHero'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import CallToAction from '../components/CallToAction'
import { Arrow } from '../components/Icons'
import { servicePages } from '../content/services'
import './Pages.css'

function ServicePage({ service }) {
  const { page } = service
  const offerHref = `/offerte?leistung=${service.slug}`
  const related = servicePages.filter((s) => s.slug !== service.slug)

  return (
    <>
      <PageHero
        name={service.name}
        eyebrow={service.name}
        title={page.title}
        lead={page.lead}
        image={service.image}
        alt={service.alt}
        highlights={page.highlights}
      >
        <a className="btn btn-gold btn-lg" href={offerHref}>
          Offerte anfragen <Arrow />
        </a>
        <a className="btn btn-ghost-light btn-lg" href="#leistungsumfang">Leistungsumfang</a>
      </PageHero>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">Unser Vorgehen</p>
            <h2 className="section-title">{page.intro.heading}</h2>
          </div>
          <div className="prose">
            {page.intro.paragraphs.map((text) => <p key={text}>{text}</p>)}
          </div>
        </div>
      </section>

      <section id="leistungsumfang" className="section section-paper">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Leistungsumfang</p>
            <h2 className="section-title">Das übernehmen wir für Sie.</h2>
          </div>
          <div className="feature-grid">
            {page.features.map(([title, text], index) => (
              <article key={title} className="feature">
                <span className="feature-num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {page.info && (
        <section id={page.info.id} className="section info-section">
          <div className="container">
            <div className="info-box">
              <h2>{page.info.heading}</h2>
              {page.info.paragraphs.map((text) => <p key={text}>{text}</p>)}
              {page.info.source && (
                <p className="info-source">
                  Quelle:{' '}
                  <a href={page.info.source[1]} target="_blank" rel="noopener noreferrer">{page.info.source[0]}</a>
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      <Process />
      <FAQ items={page.faq} />

      <section className="section related">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Weitere Leistungen</p>
            <h2 className="section-title">Das könnte Sie auch interessieren.</h2>
          </div>
          <div className="related-grid">
            {related.map((item) => (
              <a key={item.slug} className="related-card" href={`/${item.slug}`}>
                <img src={item.image} alt="" width="800" height="600" loading="lazy" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.short}</p>
                  <span className="text-link">Mehr erfahren <Arrow /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CallToAction offerHref={offerHref} />
    </>
  )
}

export default ServicePage
