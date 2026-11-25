const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const Arrow = () => (
  <svg {...base} strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ArrowLeft = () => (
  <svg {...base} strokeWidth="2">
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
)

export const Chevron = () => (
  <svg {...base} strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export const Roller = () => (
  <svg {...base}>
    <rect x="3" y="3" width="15" height="6" rx="1.5" />
    <path d="M18 6h2.5v5H11v3" />
    <rect x="9.5" y="14" width="3" height="7" rx="1" />
  </svg>
)

export const Palette = () => (
  <svg {...base}>
    <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2 0-1.4-1.2-1.6-1.2-2.8 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z" />
    <circle cx="7.5" cy="11" r="1" />
    <circle cx="10" cy="7" r="1" />
    <circle cx="15" cy="7.5" r="1" />
  </svg>
)

export const Check = () => (
  <svg {...base} strokeWidth="2.2">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

export const Mail = () => (
  <svg {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
  </svg>
)

export const Phone = () => (
  <svg {...base}>
    <path d="M5 4h3.5l1.5 4-2.2 1.4a11 11 0 0 0 6.8 6.8L16 14l4 1.5V19a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4z" />
  </svg>
)

export const WhatsApp = () => (
  <svg {...base}>
    <path d="M4 20l1.3-3.9A8.5 8.5 0 1 1 8 18.8z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 1a4.5 4.5 0 0 1-2.4-2.4l1-1-1-2z" />
  </svg>
)

export const Instagram = () => (
  <svg {...base}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
)

export const Facebook = () => (
  <svg {...base}>
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
  </svg>
)

export const Clock = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const Shield = () => (
  <svg {...base}>
    <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </svg>
)

export const Doc = () => (
  <svg {...base}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4M9 12h6M9 16h6" />
  </svg>
)

export const Pin = () => (
  <svg {...base}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const Plus = () => (
  <svg {...base} strokeWidth="2">
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const Close = () => (
  <svg {...base} strokeWidth="2">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const Camera = () => (
  <svg {...base}>
    <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    <circle cx="12" cy="13.5" r="3.5" />
  </svg>
)

export const Home = () => (
  <svg {...base}>
    <path d="M4 11l8-7 8 7" />
    <path d="M6 9.5V20h12V9.5" />
    <path d="M10 20v-5h4v5" />
  </svg>
)

export const Building = () => (
  <svg {...base}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
  </svg>
)

export const Store = () => (
  <svg {...base}>
    <path d="M4 9l1.5-5h13L20 9" />
    <path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0" />
    <path d="M5 11v9h14v-9M10 20v-5h4v5" />
  </svg>
)
