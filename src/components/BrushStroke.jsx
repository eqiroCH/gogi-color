// Gemalter Pinselstrich hinter einem Wort (z. B. «saubere Arbeit» im Startseiten-Titel).
// Aufbau: deckende Grundfarbe mit Farbdepot am Anfang, Borstenspuren in der Fläche
// und ein trocken ausfransendes Ende. Ein Filter raut die Kanten leicht auf.
// Die Animation (BrushStroke.css) trägt die Farbe wie ein Pinselzug von links nach rechts auf.
import './BrushStroke.css'

export default function BrushStroke({ children }) {
  return (
    <span className="brush">
      {children}
      <svg className="brush__paint" viewBox="0 0 400 48" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <defs>
          <filter id="brush-rough" x="-3%" y="-25%" width="106%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.022 0.45" numOctaves="3" seed="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <g filter="url(#brush-rough)">
          {/* Grundanstrich mit Farbdepot links */}
          <path
            fill="#e7c98a"
            d="M9 15C14 9 32 8 62 8.5c60-.5 140-1.5 218-.6 34 .4 58 1 76 2.1l-2 28.4c-62 1.3-142 1.8-222 2.3-48 .3-90 1.6-118-.2C2 39 1 21 9 15Z"
          />
          {/* Trockenes, ausfransendes Ende: einzelne Borstenbahnen */}
          <path fill="#e7c98a" d="M350 10.5c16 0 30 .5 44 2.2-14 1.2-28 1.6-44 1.6Z" />
          <path fill="#e7c98a" d="M352 16.4c16 0 31 .6 46 2.2-15 1.4-30 1.8-46 1.8Z" />
          <path fill="#e7c98a" d="M349 22.6c14 0 26 .5 39 1.8-13 1.1-25 1.5-39 1.5Z" />
          <path fill="#e7c98a" d="M351 28c17 0 31 .8 45 2.6-14 1.1-28 1.3-45 1.3Z" />
          <path fill="#e7c98a" d="M348 33.8c12 0 23 .5 34 1.8-11 1.1-22 1.5-34 1.5Z" />
          {/* Borstenspuren: dunklere und hellere Streifen */}
          <g fill="#c8963e" fillOpacity=".3">
            <path d="M22 14.2c110-2.2 220-2.4 330-1.2v1.3c-110-.8-220-.4-330 1.5Z" />
            <path d="M40 24.4c100-1.2 200-1.2 300-.4v1c-100-.4-200-.2-300 1Z" />
            <path d="M14 33.4c112 1 226 1.4 342 .2v1.5c-116 1-230 .6-342-.2Z" />
            <path d="M70 21.6c80-.8 170-.8 250-.2v.8c-80-.3-170-.3-250 .2Z" />
            <path d="M28 28.2c90-.6 190-.4 296 .3v.9c-106-.4-206-.5-296 0Z" />
          </g>
          {/* Farbkanten oben und unten, wo sich die Farbe staut */}
          <g fill="#c8963e" fillOpacity=".22">
            <path d="M16 9.8c90-1.6 220-2.2 338-.4l.2 1.6c-118-1.4-248-1-338 .6Z" />
            <path d="M12 38.6c100 1.2 230 1 342-.4l-.2 1.6c-112 1.2-242 1.2-342 0Z" />
          </g>
          <g fill="#f5e6c4" fillOpacity=".75">
            <path d="M30 19.2c100-1.2 200-1.1 300-.3v1.2c-100-.5-200-.5-300 .7Z" />
            <path d="M60 29c96-.6 190-.5 286 .2v1c-96-.4-190-.4-286 .2Z" />
            <path d="M90 12.2c80-.6 170-.6 250 0v.8c-80-.4-170-.3-250 .2Z" />
            <path d="M44 35.6c90-.2 190 0 290 .4v.8c-100-.2-200-.3-290 0Z" />
          </g>
          {/* Trockene Stellen gegen Ende, wo die Farbe ausgeht */}
          <g fill="#f5f2eb" fillOpacity=".6">
            <path d="M238 18c48-.6 90-.3 122 .4v1.2c-32-.4-74-.6-122-.2Z" />
            <path d="M296 24.2l66 .2v.9l-66-.2Z" />
            <path d="M276 29.4c32-.3 60-.1 86 .3v1.2c-26-.3-54-.4-86-.1Z" />
          </g>
        </g>
      </svg>
    </span>
  )
}
