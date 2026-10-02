import Logo from './Logo'
import './Footer.css'

const INSTAGRAM = 'https://www.instagram.com/gogi_color/'

function Footer({ onNavigate, openPage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light />
            <p>Malerfirma in Zürich. Innenmalerei, Fassaden, Renovation und Farbberatung.</p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <button onClick={() => onNavigate('#services')}>Leistungen</button>
            <button onClick={() => onNavigate('#farbwelt')}>Farbwelt</button>
            <button onClick={() => onNavigate('#projekte')}>Einblicke</button>
            <button onClick={() => onNavigate('#about')}>Über uns</button>
            <button onClick={() => onNavigate('#kontakt')}>Kontakt</button>
          </div>

          <div className="footer-col">
            <h4>Kontakt</h4>
            <a href="mailto:info@gogicolor.ch">info@gogicolor.ch</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram @gogi_color</a>
            <span>Zürich, Schweiz</span>
          </div>
        </div>

        <p className="footer-giant" aria-hidden="true">Gogi Color</p>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Gogi Color</span>
          <div>
            <button onClick={() => openPage('impressum')}>Impressum</button>
            <button onClick={() => openPage('datenschutz')}>Datenschutz</button>
          </div>
          <span>Website by Eqiro</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
