// Abschluss-Band «Ladenschild»: dunkle Tafel mit Titel, Text und Offerte-Button.
// Zweitaktion: Telefon, falls gesetzt, sonst E-Mail.
// Props:
//   title, text  – Standard: content/home.js → cta
//   offerHref    – Ziel des Hauptbuttons, Standard '/offerte' (z. B. '/offerte?leistung=fassaden')
//   offerLabel   – Standard «Offerte anfragen»
//   variant      – Hintergrund um die Tafel ('default' | 'alt' | 'paper')
//   id
import { Section } from './Section'
import { IconArrowRight, IconMail, IconPhone } from './Icons'
import { OFFER_HREF } from './nav'
import { cta } from '../content/home'
import { site, telHref } from '../site'
import { typo } from './typo'
import './CallToAction.css'

export default function CallToAction({
  title = cta.title,
  text = cta.text,
  offerHref = OFFER_HREF,
  offerLabel = 'Offerte anfragen',
  variant = 'default',
  id,
}) {
  const secondary = site.phone
    ? { href: telHref(site.phone), label: site.phone, Icon: IconPhone }
    : { href: `mailto:${site.email}`, label: site.email, Icon: IconMail }

  return (
    <Section id={id} variant={variant} tight className="cta-band">
      <div className="cta-band__panel on-dark">
        <div className="cta-band__text">
          <h2 className="cta-band__title">{typo(title)}</h2>
          {text && <p className="cta-band__lead">{typo(text)}</p>}
        </div>
        <div className="actions actions--stack cta-band__actions">
          <a href={offerHref} className="btn btn--primary btn--lg">
            {offerLabel}
            <IconArrowRight />
          </a>
          <a href={secondary.href} className="btn btn--secondary btn--lg">
            <secondary.Icon />
            {secondary.label}
          </a>
        </div>
      </div>
    </Section>
  )
}
