import './Logo.css'

function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo-light' : ''}`}>
      <span className="logo-mark" aria-hidden="true">G</span>
      <span className="logo-text">
        <strong>Gogi <em>Color</em></strong>
        <small>Malergeschäft Zürich</small>
      </span>
    </span>
  )
}

export default Logo
