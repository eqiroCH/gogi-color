import './Logo.css'

// Schriftzug in den Markenfarben – sobald das offizielle Logo als Datei vorliegt, hier einsetzen
function Logo() {
  return (
    <span className="logo">
      <span className="logo-name">
        Gogi <em>Color</em>
      </span>
      <small>Malergeschäft · Zürich</small>
    </span>
  )
}

export default Logo
