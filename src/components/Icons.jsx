// Eigene Inline-SVG-Icons (24×24, Kontur, Farbe über currentColor).
// Immer dekorativ (aria-hidden). Steht ein Icon allein in einem Link/Button,
// braucht das Element ein aria-label oder einen .visually-hidden-Text.
//
// Verwendung: <IconArrowRight />, <IconPhone size={18} className="…" />

function Icon({ size = 24, className, children, strokeWidth = 1.75, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  )
}

const withClass = (base, className) => (className ? `${base} ${className}` : base)

export const IconArrowRight = ({ className, ...p }) => (
  <Icon className={withClass('icon-arrow', className)} {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Icon>
)

export const IconArrowUpRight = (p) => (
  <Icon {...p}>
    <path d="M7 17L17 7M8.5 7H17v8.5" />
  </Icon>
)

export const IconChevronDown = (p) => (
  <Icon {...p}>
    <path d="M6 9.5l6 6 6-6" />
  </Icon>
)

export const IconMenu = (p) => (
  <Icon {...p}>
    <path d="M3.5 7.5h17M3.5 12h17M3.5 16.5h17" />
  </Icon>
)

export const IconClose = (p) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
)

export const IconPlus = (p) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
)

export const IconCheck = (p) => (
  <Icon {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Icon>
)

export const IconPhone = (p) => (
  <Icon {...p}>
    <path d="M6.6 3.5h2.6l1.6 4.4-2.2 1.4a11.5 11.5 0 0 0 6 6l1.4-2.2 4.4 1.6v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z" />
  </Icon>
)

export const IconMail = (p) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
  </Icon>
)

export const IconWhatsApp = (p) => (
  <Icon {...p}>
    <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.9L3.5 20.5l4.2-1.1A8.5 8.5 0 1 0 12 3.5z" />
    <path d="M9.2 8.2c-.4 0-.9.4-.9 1.2 0 2.6 3.6 6.3 6.4 6.3.8 0 1.2-.5 1.2-.9v-.9l-1.9-.9-.9.9c-1-.4-2.3-1.6-2.7-2.7l.9-.9-.9-1.9z" />
  </Icon>
)

export const IconInstagram = (p) => (
  <Icon {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.75" />
    <path d="M17 7h.01" strokeWidth="2.5" />
  </Icon>
)

export const IconFacebook = (p) => (
  <Icon {...p}>
    <path d="M14.5 20.5v-7h2.4l.4-3h-2.8V8.8c0-.9.3-1.5 1.5-1.5h1.4V4.6c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.4H9.4v3h2.4v7" />
  </Icon>
)

export const IconMapPin = (p) => (
  <Icon {...p}>
    <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.4" />
  </Icon>
)

export const IconDocument = (p) => (
  <Icon {...p}>
    <path d="M6 3.5h8.5l3.5 3.5v13.5H6z" />
    <path d="M14 3.5V7.5h4M9 12h6M9 15.5h6" />
  </Icon>
)

export const IconShield = (p) => (
  <Icon {...p}>
    <path d="M12 3l7 2.8v5.4c0 4.4-2.9 8-7 9.8-4.1-1.8-7-5.4-7-9.8V5.8z" />
    <path d="M8.8 12.2l2.2 2.2 4.2-4.4" />
  </Icon>
)

export const IconClock = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Icon>
)

// Farbfächer
export const IconSwatch = (p) => (
  <Icon {...p}>
    <rect x="4" y="3.5" width="6" height="17" rx="1" />
    <path d="M10 8.2l4.6-2.7a1 1 0 0 1 1.4.4l2.6 4.5a1 1 0 0 1-.4 1.4L10 16.3" />
    <path d="M10 20.5h9.5a1 1 0 0 0 1-1v-4.6a1 1 0 0 0-1-1h-3" />
    <circle cx="7" cy="17" r="0.9" fill="currentColor" stroke="none" />
  </Icon>
)

export const IconRoller = (p) => (
  <Icon {...p}>
    <rect x="3.5" y="3.5" width="14" height="5" rx="1" />
    <path d="M17.5 6h2.5v5.5h-8.5v3" />
    <rect x="10" y="14.5" width="3" height="6.5" rx="0.75" />
  </Icon>
)

export const IconHome = (p) => (
  <Icon {...p}>
    <path d="M3.5 11L12 4l8.5 7" />
    <path d="M5.5 9.5v11h13v-11M10 20.5v-5.5h4v5.5" />
  </Icon>
)

export const IconBuilding = (p) => (
  <Icon {...p}>
    <path d="M5 20.5V3.5h10v17M15 9h4v11.5M3 20.5h18" />
    <path d="M8 7.5h1M11 7.5h1M8 11h1M11 11h1M8 14.5h1M11 14.5h1" strokeWidth="2" />
  </Icon>
)

export const IconStore = (p) => (
  <Icon {...p}>
    <path d="M4 9.5l1.3-5h13.4l1.3 5" />
    <path d="M4 9.5c0 1.4 1.1 2.5 2.7 2.5s2.6-1.1 2.6-2.5c0 1.4 1.1 2.5 2.7 2.5s2.7-1.1 2.7-2.5c0 1.4 1 2.5 2.6 2.5S20 10.9 20 9.5" />
    <path d="M5.5 12v8.5h13V12M10 20.5v-5h4v5" />
  </Icon>
)

export const IconCamera = (p) => (
  <Icon {...p}>
    <path d="M3.5 8h3.5l1.7-2.5h6.6L17 8h3.5v11.5h-17z" />
    <circle cx="12" cy="13.5" r="3.5" />
  </Icon>
)

export const IconCalendar = (p) => (
  <Icon {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Icon>
)

export const IconInfo = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 11v5.5M12 7.8h.01" />
  </Icon>
)

export const IconUpload = (p) => (
  <Icon {...p}>
    <path d="M12 15.5V4M7 8.5L12 4l5 4.5M4 15v5.5h16V15" />
  </Icon>
)

export const IconExternal = (p) => (
  <Icon {...p}>
    <path d="M14 4h6v6M20 4l-8.5 8.5M18 14v6.5H3.5V6H10" />
  </Icon>
)
