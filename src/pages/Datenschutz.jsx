import PageHero from '../components/PageHero'
import { site } from '../site'
import './Pages.css'

function Datenschutz() {
  return (
    <>
      <PageHero name="Datenschutz" title="Datenschutzerklärung" />
      <section className="section legal">
        <div className="container legal-body">
          <div className="legal-section">
            <h2>1. Verantwortliche Stelle</h2>
            <p>
              {site.name}, {site.street && `${site.street}, `}{site.zip && `${site.zip} `}{site.city}
              <br />
              E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              Wir bearbeiten Personendaten gemäss dem schweizerischen Datenschutzgesetz (DSG) und nur
              soweit dies für den Betrieb dieser Website und die Bearbeitung Ihrer Anfragen nötig ist.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Hosting und Server-Logfiles</h2>
            <p>
              Diese Website wird bei Netlify, Inc. (San Francisco, USA) betrieben. Beim Aufruf der
              Website werden technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene
              Seite und Browsertyp verarbeitet, um die Website bereitzustellen und ihre Sicherheit zu
              gewährleisten. Dabei können Daten in die USA übermittelt werden.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Anfrageformular und E-Mail</h2>
            <p>
              Wenn Sie uns über das Anfrageformular schreiben, werden Ihre Angaben (z. B. Name, E-Mail,
              Telefon, Ort, Angaben zum Objekt und zur gewünschten Arbeit, Nachricht sowie allfällige
              Fotos) über den Formulardienst von Netlify an uns übermittelt und gespeichert. Wir
              verwenden diese Daten ausschliesslich zur Bearbeitung Ihrer Anfrage und für die Offerte.
              Dasselbe gilt für Anfragen per E-Mail{site.whatsapp && ' oder WhatsApp'}.
            </p>
            <p>
              Bitte laden Sie nur Fotos hoch, auf denen keine Personen zu erkennen sind. Ihre Daten
              werden gelöscht, sobald sie für die Bearbeitung nicht mehr benötigt werden und keine
              gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Cookies, Schriften und Bilder</h2>
            <p>
              Diese Website verwendet keine Tracking- oder Analyse-Tools und setzt keine Cookies.
              Schriften und Bilder werden direkt von unserem Server geladen – es werden dafür keine
              Daten an Dritte übermittelt.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Links zu sozialen Netzwerken</h2>
            <p>
              Unsere Website enthält Links zu unseren Profilen auf Instagram und Facebook. Erst wenn Sie
              einen solchen Link anklicken, werden Daten an Meta Platforms übermittelt. Dafür gelten
              die Datenschutzbestimmungen des jeweiligen Netzwerks.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten Daten sowie auf
              Berichtigung, Löschung und Einschränkung der Bearbeitung. Wenden Sie sich dazu an{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>. Zudem können Sie sich beim
              Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) beschweren.
            </p>
            <p>Stand: November 2026</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Datenschutz
