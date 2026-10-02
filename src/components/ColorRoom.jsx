import { useState } from 'react'
import './ColorRoom.css'

const colors = [
  { name: 'Kreideweiss', hex: '#f2eee6', mood: 'Hell, ruhig, zeitlos' },
  { name: 'Sandstein', hex: '#d9c7a6', mood: 'Warm und wohnlich' },
  { name: 'Salbei', hex: '#a3ad94', mood: 'Natürlich, entspannt' },
  { name: 'Taubenblau', hex: '#8fa3b1', mood: 'Kühl und klar' },
  { name: 'Terrakotta', hex: '#c27a5a', mood: 'Mutig, mediterran' },
  { name: 'Waldgrün', hex: '#2f4a45', mood: 'Tief, elegant' },
  { name: 'Anthrazit', hex: '#3a3b3d', mood: 'Modern, markant' },
]

function ColorRoom() {
  const [active, setActive] = useState(colors[5])
  const darkWall = ['#2f4a45', '#3a3b3d', '#c27a5a'].includes(active.hex)

  return (
    <section id="farbwelt" className="farbwelt">
      <div className="container farbwelt-grid">
        <div className="farbwelt-copy reveal">
          <p className="eyebrow">Farbwelt</p>
          <h2 className="section-title">
            Welche Farbe <span className="hand">passt</span> zu dir?
          </h2>
          <p className="section-lead">
            Tippe auf eine Farbe und sieh, wie sie den Raum verändert. Die finale Wahl treffen
            wir gemeinsam vor Ort – mit echten Farbmustern bei deinem Licht.
          </p>

          <div className="swatch-list" role="radiogroup" aria-label="Wandfarbe wählen">
            {colors.map((c) => (
              <button
                key={c.hex}
                role="radio"
                aria-checked={active.hex === c.hex}
                className={`swatch ${active.hex === c.hex ? 'is-active' : ''}`}
                onClick={() => setActive(c)}
              >
                <span className="swatch-chip" style={{ background: c.hex }} />
                <span className="swatch-name">{c.name}</span>
              </button>
            ))}
          </div>

          <p className="farbwelt-current">
            <strong>{active.name}</strong> — {active.mood}
          </p>
        </div>

        <div className="room-frame reveal">
          <svg className="room" viewBox="0 0 600 440" role="img" aria-label={`Wohnzimmer mit Wandfarbe ${active.name}`}>
            <defs>
              <linearGradient id="wallShade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#000" stopOpacity="0.16" />
                <stop offset="0.35" stopColor="#000" stopOpacity="0" />
                <stop offset="1" stopColor="#000" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="light" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
                <stop offset="0.6" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>

            <rect className="room-wall" x="0" y="0" width="600" height="330" fill={active.hex} />
            <rect x="0" y="0" width="600" height="330" fill="url(#wallShade)" />
            <polygon points="70,40 210,40 260,330 0,330 0,300" fill="url(#light)" />

            <rect x="70" y="40" width="140" height="190" rx="4" fill="#dfe9ee" />
            <rect x="70" y="40" width="140" height="190" rx="4" fill="none" stroke="#fbf8f2" strokeWidth="10" />
            <line x1="140" y1="40" x2="140" y2="230" stroke="#fbf8f2" strokeWidth="6" />
            <line x1="70" y1="135" x2="210" y2="135" stroke="#fbf8f2" strokeWidth="6" />
            <rect x="60" y="230" width="160" height="10" rx="2" fill="#fbf8f2" />

            <rect x="330" y="70" width="150" height="105" rx="3" fill="#fbf8f2" />
            <rect x="341" y="81" width="128" height="83" fill="#d9b06a" />
            <circle cx="430" cy="110" r="16" fill="#b8873f" />
            <path d="M341 164 L390 118 L425 150 L445 132 L469 164 Z" fill="#2b2a28" opacity="0.75" />

            <rect x="0" y="322" width="600" height="10" fill={darkWall ? '#e9e2d4' : '#fbf8f2'} />
            <rect x="0" y="332" width="600" height="108" fill="#c9a274" />
            <g stroke="#b48d60" strokeWidth="2">
              <line x1="0" y1="360" x2="600" y2="360" />
              <line x1="0" y1="392" x2="600" y2="392" />
              <line x1="0" y1="424" x2="600" y2="424" />
              <line x1="120" y1="332" x2="120" y2="360" />
              <line x1="360" y1="332" x2="360" y2="360" />
              <line x1="240" y1="360" x2="240" y2="392" />
              <line x1="480" y1="360" x2="480" y2="392" />
              <line x1="80" y1="392" x2="80" y2="424" />
              <line x1="420" y1="392" x2="420" y2="424" />
            </g>

            <ellipse cx="410" cy="352" rx="170" ry="12" fill="#000" opacity="0.15" />
            <rect x="262" y="250" width="296" height="70" rx="18" fill="#efe6d6" />
            <rect x="250" y="236" width="40" height="96" rx="16" fill="#e6dac5" />
            <rect x="530" y="236" width="40" height="96" rx="16" fill="#e6dac5" />
            <rect x="270" y="212" width="132" height="62" rx="16" fill="#f3ebdd" />
            <rect x="410" y="212" width="132" height="62" rx="16" fill="#f3ebdd" />
            <rect x="300" y="226" width="44" height="40" rx="10" fill="#b8873f" transform="rotate(-8 322 246)" />
            <rect x="270" y="330" width="10" height="16" fill="#3a3b3d" />
            <rect x="540" y="330" width="10" height="16" fill="#3a3b3d" />

            <rect x="12" y="296" width="44" height="40" rx="6" fill="#2b2a28" />
            <path d="M34 296 C 20 250, 6 236, 4 214 C 22 228, 30 252, 34 296 Z" fill="#5d7a5a" />
            <path d="M34 296 C 44 246, 62 230, 74 206 C 72 234, 54 258, 34 296 Z" fill="#6f8f69" />
            <path d="M34 296 C 30 240, 36 214, 42 186 C 50 214, 44 250, 34 296 Z" fill="#4f6d4d" />

            <line x1="236" y1="196" x2="236" y2="330" stroke="#2b2a28" strokeWidth="3" />
            <path d="M216 196 L256 196 L248 172 L224 172 Z" fill="#2b2a28" />
            <ellipse cx="236" cy="332" rx="16" ry="4" fill="#2b2a28" />
          </svg>

          <span className="tape room-tape">{active.name}</span>
        </div>
      </div>
    </section>
  )
}

export default ColorRoom
