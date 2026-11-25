import PageHero from '../components/PageHero'
import { site } from '../site'
import './Pages.css'

function Impressum() {
  return (
    <>
      <PageHero name="Impressum" title="Impressum" />
      <section className="section legal">
        <div className="container legal-body">
          <div className="legal-section">
            <h2>Kontaktadresse</h2>
            <p>
              <strong>{site.name}</strong>
              <br />
              Malergeschäft
              <br />
              {site.owner && <>Inhaber: {site.owner}<br /></>}
              {site.street && <>{site.street}<br /></>}
              {site.zip && `${site.zip} `}{site.city}, Schweiz
            </p>
            <p>
              E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
              {site.phone && <><br />Telefon: {site.phone}</>}
              <br />
              Instagram:{' '}
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a>
            </p>
            {site.uid && <p>UID: {site.uid}</p>}
          </div>

          <div className="legal-section">
            <h2>Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Preisangaben
              auf dieser Website sind unverbindliche Richtwerte.
            </p>
          </div>

          <div className="legal-section">
            <h2>Haftung für Links</h2>
            <p>
              Verweise und Links auf Websites Dritter (z. B. Instagram) liegen ausserhalb unseres
              Verantwortungsbereichs. Für deren Inhalte sind ausschliesslich die jeweiligen Betreiber
              verantwortlich.
            </p>
          </div>

          <div className="legal-section">
            <h2>Urheberrechte</h2>
            <p>
              Texte und Gestaltung dieser Website gehören {site.name} bzw. den jeweiligen
              Rechteinhabern. Stimmungsbilder stammen von Unsplash (unsplash.com).
            </p>
          </div>

          <div className="legal-section">
            <h2>Umsetzung</h2>
            <p>
              Website: <a href="https://eqiro.ch" target="_blank" rel="noopener noreferrer">Eqiro</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Impressum
