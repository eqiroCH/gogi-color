import './Logo.css'

function Logo({ light = false }) {
  return (
    <span className={`logo-wordmark ${light ? 'is-light' : ''}`}>
      <svg className="logo-stroke" viewBox="0 0 120 30" aria-hidden="true">
        <path d="M4 20c22-9 60-13 112-8" />
      </svg>
      <span className="logo-gogi">Gogi</span>
      <span className="logo-color">color</span>
    </span>
  )
}

export default Logo
