// 404 – schlichter Kopf mit zwei Wegen (Startseite, Offerte), darunter alle
// Leistungen und die Seiten «Kosten» und «Einsatzgebiet».
import PageHeader from '../components/PageHeader'
import { Section, SectionHeader } from '../components/Section'
import ServiceCards from '../components/ServiceCards'
import { IconArrowRight, IconDocument, IconMapPin } from '../components/Icons'
import { OFFER_HREF } from '../components/nav'
import { notFoundPage } from '../content/pages'
import { servicesIntro, kostenTeaser, gebietTeaser } from '../content/home'
import './NotFound.css'

const morePages = [
  { href: '/kosten', eyebrow: kostenTeaser.eyebrow, title: kostenTeaser.title, link: kostenTeaser.link, Icon: IconDocument },
  { href: '/einsatzgebiet', eyebrow: gebietTeaser.eyebrow, title: gebietTeaser.title, link: gebietTeaser.link, Icon: IconMapPin },
]

export default function NotFound() {
  return (
    <>
      <PageHeader
        breadcrumb="Seite nicht gefunden"
        eyebrow={notFoundPage.eyebrow}
        title={notFoundPage.title}
        lead={notFoundPage.lead}
      >
        {/* Ocker bleibt «Offerte anfragen» (Header, mobile Leiste) vorbehalten */}
        <a href="/" className="btn btn--dark btn--lg">
          {notFoundPage.primaryCta}
          <IconArrowRight />
        </a>
        <a href={OFFER_HREF} className="btn btn--secondary btn--lg">
          {notFoundPage.secondaryCta}
        </a>
      </PageHeader>

      <Section tight aria-labelledby="notfound-leistungen">
        <SectionHeader eyebrow={servicesIntro.eyebrow} title={servicesIntro.title} titleId="notfound-leistungen" />
        <ServiceCards />
      </Section>

      <Section variant="alt" tight aria-label="Weitere Seiten">
        <ul className="notfound-more">
          {morePages.map(({ href, eyebrow, title, link, Icon }) => (
            <li key={href} className="card notfound-more__card">
              <span className="notfound-more__icon">
                <Icon size={24} />
              </span>
              <div className="notfound-more__body">
                <p className="eyebrow">{eyebrow}</p>
                <h2 className="notfound-more__title">
                  <a href={href} className="stretched-link">
                    {title}
                  </a>
                </h2>
                <span className="notfound-more__link" aria-hidden="true">
                  {link}
                  <IconArrowRight />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
