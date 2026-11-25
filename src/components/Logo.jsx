// Platzhalter-Wortmarke «Gogi Color». Das echte Logo (goldener Schriftzug) liegt
// noch nicht als Datei vor. Zum Austauschen: SVG/PNG nach public/ legen und hier
// den Inhalt durch <img src="/logo.svg" alt="" width=… height=…> ersetzen –
// Header und Footer brauchen keine Änderung.
//
// Props:
//   tagline  – Unterzeile «Malergeschäft Zürich» zeigen (Standard: true)
//   className
// Farben folgen dem Kontext: auf .on-dark automatisch hell.
import './Logo.css'

export function LogoMark({ className = '' }) {
  // Farbtonkarte: ein Ockerton in drei Nuancen
  return (
    <svg className={`logo__mark ${className}`} viewBox="0 0 22 32" aria-hidden="true" focusable="false">
      <rect width="22" height="11" fill="#e7c98a" />
      <rect y="10.5" width="22" height="11" fill="#c8963e" />
      <rect y="21" width="22" height="11" fill="#8e6524" />
    </svg>
  )
}

export default function Logo({ tagline = true, className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <LogoMark />
      <span className="logo__text">
        <span className="logo__name">Gogi Color</span>
        {tagline && <span className="logo__tagline">Malergeschäft Zürich</span>}
      </span>
    </span>
  )
}
