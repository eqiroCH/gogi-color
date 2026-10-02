import './CallToAction.css'

function CallToAction() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <h2>Sie planen Malerarbeiten?</h2>
          <p>Wir besichtigen Ihr Objekt und erstellen Ihnen eine unverbindliche Offerte.</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-gold" href="#kontakt">Offerte anfragen</a>
          <a className="btn btn-outline" href="mailto:info@gogicolor.ch">info@gogicolor.ch</a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
