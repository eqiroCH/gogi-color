const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Arrow = () => (
  <svg {...base} strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Roller = () => (
  <svg {...base}>
    <rect x="3" y="3" width="15" height="6" rx="1.5" />
    <path d="M18 6h2.5v5H11v3" />
    <rect x="9.5" y="14" width="3" height="7" rx="1" />
  </svg>
)

export const Facade = () => (
  <svg {...base}>
    <path d="M3 21V9l9-6 9 6v12" />
    <path d="M3 21h18" />
    <rect x="7" y="11" width="3.5" height="3.5" />
    <rect x="13.5" y="11" width="3.5" height="3.5" />
    <path d="M10 21v-3.5h4V21" />
  </svg>
)

export const Spatula = () => (
  <svg {...base}>
    <path d="M4 20l7-7" />
    <path d="M11 13l3.5-3.5a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8L16 18" />
    <path d="M9.5 14.5l4 4" />
  </svg>
)

export const Brush = () => (
  <svg {...base}>
    <path d="M14 4l6 6-7.5 7.5-6-6z" />
    <path d="M6.5 11.5L4 14c-1.5 1.5-1 4 0 5s3.5 1.5 5 0l2.5-2.5" />
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

export const Office = () => (
  <svg {...base}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
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

export const Instagram = () => (
  <svg {...base}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
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
