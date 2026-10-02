import Logo from './Logo'
import './Footer.css'

const INSTAGRAM = 'https://www.instagram.com/gogi_color/'

function Footer({ onNavigate, openPage }) {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo light />
          <p>Ihr Malergeschäft in Zürich für Innenmalerei, Fassaden, Renovationen und Farbberatung.</p>
        </div>

        <div className="footer-col">
          <h4>Leistungen</h4>
          <span>Innenmalerei</span>
          <span>Fassaden</span>
          <span>Spachtel- &amp; Gipsarbeiten</span>
          <span>Renovationen</span>
          <span>Farbberatung</span>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <button onClick={() => onNavigate('#leistungen')}>Leistungen</button>
          <button onClick={() => onNavigate('#ueber-uns')}>Über uns</button>
          <button onClick={() => onNavigate('#ablauf')}>Ablauf</button>
          <button onClick={() => onNavigate('#faq')}>FAQ</button>
          <button onClick={() => onNavigate('#kontakt')}>Kontakt</button>
        </div>

        <div className="footer-col">
          <h4>Kontakt</h4>
          <span>Gogi Color</span>
          <span>Zürich, Schweiz</span>
          <a href="mailto:info@gogicolor.ch">info@gogicolor.ch</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram @gogi_color</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Gogi Color · Malergeschäft Zürich</span>
          <div>
            <button onClick={() => openPage('impressum')}>Impressum</button>
            <button onClick={() => openPage('datenschutz')}>Datenschutz</button>
            <span>Website by Eqiro</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
