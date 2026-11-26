// Startseite. Inhalte aus content/home.js, services.js, pricing.js, area.js, images.js.
import { Section, SectionHeader } from '../components/Section'
import Img from '../components/Img'
import ServiceCards from '../components/ServiceCards'
import ProcessSteps from '../components/ProcessSteps'
import CallToAction from '../components/CallToAction'
import FAQ from '../components/FAQ'
import ContactList from '../components/ContactList'
import OfferForm from '../components/OfferForm'
import BrushStroke from '../components/BrushStroke'
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBuilding,
  IconCamera,
  IconDocument,
  IconHome,
  IconMapPin,
  IconPhone,
  IconShield,
  IconStore,
  IconSwatch,
  IconWhatsApp,
} from '../components/Icons'
import { OFFER_HREF } from '../components/nav'
import { typo } from '../components/typo'
import {
  hero,
  facts,
  servicesIntro,
  audience,
  about,
  kostenTeaser,
  gebietTeaser,
  gallery,
  homeFaq,
  contact,
} from '../content/home'
import { images, galleryPhotos } from '../content/images'
import { pricing } from '../content/pricing'
import { kosten, servicePageLabels } from '../content/pages'
import { kreise, gemeinden } from '../content/area'
import { site, telHref, whatsappHref } from '../site'
import './Home.css'

const external = { target: '_blank', rel: 'noopener noreferrer' }

// Icons zu den Kurzargumenten (gleiche Reihenfolge wie facts)
const factIcons = [IconMapPin, IconDocument, IconShield, IconSwatch]
const audienceIcons = { privat: IconHome, verwaltung: IconBuilding, gewerbe: IconStore }

// Farbmuster zu den Galeriebildern (rein dekorativ)
const gallerySwatches = {
  '/images/raum-terrakotta.webp': '#b5694a',
  '/images/raum-gruen.webp': '#244a43',
  '/images/raum-salbei.webp': '#8d9c8f',
  '/images/raum-dunkel.webp': '#2f2a27',
  '/images/raum-hell.webp': '#f1eee8',
}

// Wohnungs-Richtwerte für den Teaser
const wohnungsRichtwerte = pricing.rows.filter(([label]) => label.includes('Zimmer-Wohnung'))

function HeroSecondaryAction() {
  if (site.phone) {
    return (
      <a href={telHref(site.phone)} className="btn btn--secondary btn--lg">
        <IconPhone />
        {site.phone}
      </a>
    )
  }
  if (site.whatsapp) {
    return (
      <a href={whatsappHref(hero.whatsappText)} className="btn btn--secondary btn--lg" {...external}>
        <IconWhatsApp />
        WhatsApp
      </a>
    )
  }
  return (
    <a href="#leistungen" className="btn btn--secondary btn--lg">
      Leistungen ansehen
    </a>
  )
}

function Hero() {
  const [titleMain, titleRest] = hero.title.split(' – ')
  // Erster Teil («saubere Arbeit») bekommt einen Pinselstrich
  const [brushed, ...afterBrush] = (titleRest ?? '').split(', ')
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__grid">
        <div className="home-hero__body">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="home-title" className="home-hero__title">
            <span className="home-hero__title-main">{titleMain}</span>
            {titleRest && (
              <span className="home-hero__title-rest">
                <span className="visually-hidden"> – </span>
                <BrushStroke>{brushed}</BrushStroke>
                {afterBrush.length > 0 && `, ${afterBrush.join(', ')}`}
              </span>
            )}
          </h1>
          <p className="lead home-hero__lead">{typo(hero.lead)}</p>
          <div className="actions actions--stack home-hero__actions">
            <a href={OFFER_HREF} className="btn btn--primary btn--lg">
              Offerte anfragen
              <IconArrowRight />
            </a>
            <HeroSecondaryAction />
          </div>
          <ul className="check-list home-hero__points">
            {hero.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="home-hero__media">
          <div className="media">
            <Img image={images.hero} priority />
          </div>
          <p className="swatch-label home-hero__label">{hero.audience}</p>
        </div>
      </div>
    </section>
  )
}

function Facts() {
  return (
    <section className="home-facts" aria-label="Das Wichtigste in Kürze">
      <div className="container">
        <ul className="home-facts__list">
          {facts.map(([title, text], index) => {
            const Icon = factIcons[index] ?? IconShield
            return (
              <li key={title} className="home-facts__item">
                <Icon className="home-facts__icon" />
                <span className="home-facts__title">{title}</span>
                <span className="home-facts__text">{text}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function Audience() {
  return (
    <Section id="fuer-wen" variant="alt">
      <SectionHeader eyebrow={audience.eyebrow} title={audience.title} />
      <ul className="home-audience">
        {audience.groups.map((group) => {
          const Icon = audienceIcons[group.key] ?? IconHome
          return (
            <li key={group.key} className="card home-audience__card">
              <div className="home-audience__head">
                <span className="home-audience__icon">
                  <Icon size={24} />
                </span>
                <h3 className="home-audience__title">{group.title}</h3>
              </div>
              <p className="home-audience__text">{typo(group.text)}</p>
              <ul className="home-audience__links">
                {group.links.map(([href, label]) => (
                  <li key={href + label}>
                    <a href={href} className="link-arrow">
                      {label}
                      <IconArrowRight />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

function About() {
  return (
    <Section id="ueber-uns" className="home-about">
      <div className="split split--reverse home-about__grid">
        <div className="home-about__text">
          <SectionHeader eyebrow={about.eyebrow} title={about.title} />
          <div className="stack home-about__paras">
            {about.paragraphs.map((text) => (
              <p key={text}>{typo(text)}</p>
            ))}
          </div>
          <ul className="feature-grid feature-grid--plain feature-grid--2 home-about__values">
            {about.values.map(([title, text]) => (
              <li key={title} className="feature-card">
                <h3>{title}</h3>
                <p>{typo(text)}</p>
              </li>
            ))}
          </ul>
          <a href={OFFER_HREF} className="btn btn--secondary">
            {about.cta}
            <IconArrowRight />
          </a>
        </div>

        <div className="home-about__media">
          <div className="media home-about__main">
            <Img image={images.about} />
          </div>
          <div className="media home-about__detail">
            <Img image={images.aboutDetail} />
          </div>
        </div>
      </div>
    </Section>
  )
}

function Teasers() {
  return (
    <Section id="kosten-und-gebiet" className="home-teasers">
      <div className="home-teasers__grid">
        <article id="kosten" className="home-teaser" aria-labelledby="kosten-titel">
          <p className="eyebrow">{kostenTeaser.eyebrow}</p>
          <h2 id="kosten-titel" className="home-teaser__title">
            {kostenTeaser.title}
          </h2>
          <p className="home-teaser__text">{kostenTeaser.text}</p>
          <div className="table-wrap">
            <table className="data-table">
              <caption className="visually-hidden">Marktübliche Richtwerte für Wohnungen</caption>
              <thead>
                <tr>
                  <th scope="col">{kosten.richtwerte.tableHead[0]}</th>
                  <th scope="col">{kosten.richtwerte.tableHead[1]}</th>
                </tr>
              </thead>
              <tbody>
                {wohnungsRichtwerte.map(([label, value, note]) => (
                  <tr key={label}>
                    <th scope="row">
                      {label}
                      {note && <span className="data-table__note">{note}</span>}
                    </th>
                    <td className="nowrap">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="source-note">
            <strong>{servicePageLabels.sourceLabel}</strong>{' '}
            <a href={pricing.source[1]} {...external}>
              {pricing.source[0]}
            </a>
            . {kosten.richtwerte.disclaimer}
          </p>
          <div className="home-teaser__footer">
            <p className="home-teaser__note">{kostenTeaser.note}</p>
            <a href="/kosten" className="link-arrow">
              {kostenTeaser.link}
              <IconArrowRight />
            </a>
          </div>
        </article>

        <article id="einsatzgebiet" className="home-teaser" aria-labelledby="gebiet-titel">
          <p className="eyebrow">{gebietTeaser.eyebrow}</p>
          <h2 id="gebiet-titel" className="home-teaser__title">
            {gebietTeaser.title}
          </h2>
          <p className="home-teaser__text">{typo(gebietTeaser.text)}</p>
          <p className="home-teaser__caption">Stadt Zürich: alle 12 Kreise</p>
          <ol className="number-tiles home-teaser__kreise" aria-label="Stadtkreise">
            {kreise.map(([kreis, name]) => (
              <li key={kreis} className="number-tile">
                <span className="number-tile__num">
                  <span className="visually-hidden">Kreis </span>
                  {kreis.replace('Kreis ', '')}
                </span>
                <span className="number-tile__label">{name}</span>
              </li>
            ))}
          </ol>
          <p className="home-teaser__caption">Gemeinden rund um Zürich</p>
          <ul className="chip-list home-teaser__chips" aria-label="Gemeinden">
            {gemeinden.map((name) => (
              <li key={name} className="chip">
                {name}
              </li>
            ))}
          </ul>
          <div className="home-teaser__footer">
            <a href="/einsatzgebiet" className="link-arrow">
              {gebietTeaser.link}
              <IconArrowRight />
            </a>
          </div>
        </article>
      </div>
    </Section>
  )
}

function Gallery() {
  return (
    <Section id="einblicke" variant="alt" className="home-gallery-section">
      <SectionHeader eyebrow={gallery.eyebrow} title={gallery.title} lead={gallery.lead} layout="split">
        {site.instagram && (
          <a href={site.instagram} className="link-arrow" {...external}>
            {gallery.instagramText}
            <IconArrowUpRight />
          </a>
        )}
      </SectionHeader>
      <ul className="home-gallery">
        {galleryPhotos.map((photo, index) => (
          <li key={photo.src} className={`home-gallery__item home-gallery__item--${index + 1}`}>
            <figure className="home-gallery__figure">
              <div className="media">
                <Img image={photo} />
              </div>
              <figcaption className="swatch-label" style={{ '--swatch': gallerySwatches[photo.src] }}>
                {photo.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="kontakt" variant="alt" className="home-contact">
      <div className="home-contact__grid">
        <div className="home-contact__intro">
          <SectionHeader eyebrow={contact.eyebrow} title={contact.title} lead={contact.lead} />
          <p className="home-contact__tip">
            <IconCamera size={22} />
            <span>{typo(contact.tip)}</span>
          </p>
        </div>
        <div className="home-contact__form">
          <OfferForm />
        </div>
        <div className="home-contact__channels">
          <h3 className="home-contact__subtitle">Lieber direkt?</h3>
          <ContactList />
        </div>
      </div>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Facts />
      <Section id="leistungen">
        <SectionHeader
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
          lead={servicesIntro.lead}
          layout="split"
        />
        <ServiceCards />
      </Section>
      <Audience />
      <About />
      <ProcessSteps />
      <Teasers />
      <Gallery />
      <CallToAction offerHref="#kontakt" />
      <FAQ items={homeFaq} />
      <Contact />
    </>
  )
}
