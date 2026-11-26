// Gemalter Pinselstrich hinter einem Wort (z. B. «saubere Arbeit» im Startseiten-Titel).
// Aufbau: satter Farbauftrag mit Farbdepot links und sichtbaren Borstenrillen. Gegen Ende
// geht die Farbe aus, der Strich wird trocken und der Hintergrund scheint zwischen den
// Borsten durch. Die Animation (BrushStroke.css) trägt die Farbe wie ein Pinselzug auf.
import './BrushStroke.css'

export default function BrushStroke({ children }) {
  return (
    <span className="brush">
      {children}
      {/* Wrapper: Position und Einblend-Maske. Darin das SVG mit Farbe und Filtern. */}
      <span className="brush__paint" aria-hidden="true">
        <svg className="brush__svg" viewBox="0 0 400 48" preserveAspectRatio="none" focusable="false">
          <defs>
            {/* Farbmenge entlang des Strichs: vorne satt, hinten trocken */}
            <linearGradient id="brush-load">
              <stop offset="0" stopOpacity="1" />
              <stop offset=".55" stopOpacity="1" />
              <stop offset=".8" stopOpacity=".62" />
              <stop offset="1" stopOpacity=".3" />
            </linearGradient>
            {/* Borsten: Rauschen mit langen, waagrechten Bahnen. Wo wenig Farbe ist,
                bleiben nur die Bahnen stehen, die Farbe tragen. Dazu dunklere Rillen
                und leicht ausgefranste Kanten. */}
            <filter id="brush-bristles" x="-3%" y="-30%" width="106%" height="160%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.002 0.38" numOctaves="3" seed="7" result="noise" />
              <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0" result="bristles" />
              <feComposite in="SourceGraphic" in2="bristles" operator="arithmetic" k2="2.2" k3="2.2" k4="-2.1" result="coverage" />
              <feFlood floodColor="#e7c98a" result="color" />
              <feComposite in="color" in2="coverage" operator="in" result="paint" />
              <feColorMatrix
                in="noise"
                type="matrix"
                values="0 0 0 0 0.66  0 0 0 0 0.47  0 0 0 0 0.15  0 3.2 0 0 -1.6"
                result="shade"
              />
              <feComposite in="shade" in2="paint" operator="in" result="grooves" />
              <feMerge result="textured">
                <feMergeNode in="paint" />
                <feMergeNode in="grooves" />
              </feMerge>
              <feDisplacementMap in="textured" in2="noise" scale="5" xChannelSelector="B" yChannelSelector="A" />
            </filter>
            <filter id="brush-edge" x="-3%" y="-30%" width="106%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency="0.02 0.4" numOctaves="2" seed="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          {/* Der Farbauftrag: Farbdepot am Ansatz, dann auslaufend */}
          <path
            filter="url(#brush-bristles)"
            fill="url(#brush-load)"
            d="M10 12C16 5 34 5 60 5.5c80-.5 200-1 300 0 14 .2 26 1 34 2.5 4 10 4 22-1 32-10 2-22 3-33 3.2-100 1-200 1.5-300 1-30-.2-48-.5-53-6.5-5-7-4-19 3-25Z"
          />

          <g filter="url(#brush-edge)">
            {/* Farbkanten oben und unten, wo sich die Farbe staut */}
            <path fill="#c8963e" fillOpacity=".4" d="M14 8.4C60 5.4 170 5 280 5.8l.2 2.2C170 7.4 70 8 14 10.2Z" />
            <path fill="#c8963e" fillOpacity=".4" d="M12 39.8c60 2.2 160 2.4 266 1.6l-.2 2c-106 1.2-206 1-266-1.4Z" />
            {/* Einzelne Borsten, die am Ende weiterlaufen */}
            <g fill="#e7c98a" fillOpacity=".85">
              <path d="M378 9c9 .2 15 .7 21 1.8-6 1.2-12 1.6-21 1.7Z" />
              <path d="M382 16.5c7 0 12 .5 17 1.6-5 1-10 1.5-17 1.6Z" />
              <path d="M376 23.4c9 .1 15 .6 20 1.8-5 1-11 1.4-20 1.5Z" />
              <path d="M380 30c7 .1 13 .7 18 2-5 1-11 1.4-18 1.4Z" />
              <path d="M374 36.6c8 .1 14 .7 19 2-5 1-11 1.4-19 1.3Z" />
            </g>
          </g>
        </svg>
      </span>
    </span>
  )
}
