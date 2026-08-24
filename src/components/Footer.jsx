import './Footer.css'

const INSTAGRAM = 'https://www.instagram.com/gogi_color/'

function Footer({ onNavigate, setPage }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <span className="logo-mark" aria-hidden="true" />
            <strong>Gogi Color</strong>
          </div>
          <p>Malerfirma in Zürich – Innen, Aussen, Renovation.</p>
        </div>
        <div>
          <h4>Seite</h4>
          <button onClick={() => onNavigate('#services')}>Leistungen</button>
          <button onClick={() => onNavigate('#about')}>Über uns</button>
          <button onClick={() => onNavigate('#gallery')}>Projekte</button>
          <button onClick={() => onNavigate('#contact')}>Anfrage</button>
        </div>
        <div>
          <h4>Kontakt</h4>
          <a href="mailto:info@gogicolor.ch">info@gogicolor.ch</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram @gogi_color</a>
          <button onClick={() => { setPage('impressum'); window.scrollTo(0, 0) }}>Impressum</button>
          <button onClick={() => { setPage('datenschutz'); window.scrollTo(0, 0) }}>Datenschutz</button>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Gogi Color</span>
        <span>Website by Eqiro</span>
      </div>
    </footer>
  )
}

export default Footer
