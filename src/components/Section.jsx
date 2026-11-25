// Abschnitt mit Container und Abschnittskopf.
//
// <Section id="leistungen" variant="alt">
//   <SectionHeader eyebrow="Leistungen" title="…" lead="…" />
//   …
// </Section>
//
// Section-Props:
//   id        – Anker (z. B. "faq")
//   variant   – 'default' (Kalk) | 'alt' (Sand) | 'paper' (Weiss) | 'dark' (Tannengrün, Text hell)
//   tight     – weniger Abstand oben/unten
//   width     – 'default' | 'wide' | 'narrow' (Containerbreite)
//   rule      – Haarlinie oben (für zwei gleichfarbige Abschnitte hintereinander)
//   className, ...rest (z. B. aria-labelledby)
//
// SectionHeader-Props:
//   eyebrow, title, lead – Texte (alle optional ausser title)
//   as        – Überschrift-Tag, Standard 'h2'
//   titleId   – id der Überschrift (für aria-labelledby)
//   layout    – 'stack' (Standard) | 'split' (Titel links, Lead rechts ab 64em) | 'center'
//   children  – Aktionen unter dem Lead (Buttons/Links)

import { typo } from './typo'

export function Section({
  id,
  variant = 'default',
  tight = false,
  width = 'default',
  rule = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'section',
    `section--${variant}`,
    tight && 'section--tight',
    rule && 'section--rule',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  const containerClass = width === 'default' ? 'container' : `container container--${width}`
  return (
    <section id={id} className={classes} {...rest}>
      <div className={containerClass}>{children}</div>
    </section>
  )
}

export function SectionHeader({ eyebrow, title, lead, as: Heading = 'h2', titleId, layout = 'stack', className = '', children }) {
  const classes = ['section-header', layout !== 'stack' && `section-header--${layout}`, className].filter(Boolean).join(' ')
  return (
    <div className={classes}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading id={titleId} className="section-header__title">
        {typo(title)}
      </Heading>
      {lead && <p className="lead">{typo(lead)}</p>}
      {children && <div className="section-header__actions">{children}</div>}
    </div>
  )
}

export default Section
