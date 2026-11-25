// Rechtstexte als reines, ungestyltes Markup (h2, p, a). Die Seiten /impressum und
// /datenschutz legen nur Layout und Typografie darum. Angaben kommen aus site.js;
// leere Felder werden ausgelassen.
import { site } from '../site'

const Email = () => <a href={`mailto:${site.email}`}>{site.email}</a>
const external = { target: '_blank', rel: 'noopener noreferrer' }

export function ImpressumContent() {
  return (
    <>
      <section>
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
          E-Mail: <Email />
          {site.phone && <><br />Telefon: {site.phone}</>}
          <br />
          Instagram: <a href={site.instagram} {...external}>{site.instagramHandle}</a>
        </p>
        {site.uid && <p>UID: {site.uid}</p>}
      </section>

      <section>
        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Preisangaben
          auf dieser Website sind unverbindliche Richtwerte.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Verweise und Links auf Websites Dritter (z. B. Instagram) liegen ausserhalb unseres
          Verantwortungsbereichs. Für deren Inhalte sind ausschliesslich die jeweiligen Betreiber
          verantwortlich.
        </p>
      </section>

      <section>
        <h2>Urheberrechte</h2>
        <p>
          Texte und Gestaltung dieser Website gehören {site.name} bzw. den jeweiligen
          Rechteinhabern. Stimmungsbilder stammen von Unsplash (unsplash.com).
        </p>
      </section>

      <section>
        <h2>Umsetzung</h2>
        <p>
          Website: <a href="https://eqiro.ch" {...external}>Eqiro</a>
        </p>
      </section>
    </>
  )
}

export function DatenschutzContent() {
  return (
    <>
      <section>
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          {site.name}, {site.street && `${site.street}, `}{site.zip && `${site.zip} `}{site.city}
          <br />
          E-Mail: <Email />
        </p>
        <p>
          Wir bearbeiten Personendaten gemäss dem schweizerischen Datenschutzgesetz (DSG) und nur
          soweit dies für den Betrieb dieser Website und die Bearbeitung Ihrer Anfragen nötig ist.
        </p>
      </section>

      <section>
        <h2>2. Hosting und Server-Logfiles</h2>
        <p>
          Diese Website wird bei Netlify, Inc. (San Francisco, USA) betrieben. Beim Aufruf der
          Website werden technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene
          Seite und Browsertyp verarbeitet, um die Website bereitzustellen und ihre Sicherheit zu
          gewährleisten. Dabei können Daten in die USA übermittelt werden.
        </p>
      </section>

      <section>
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
      </section>

      <section>
        <h2>4. Cookies, Schriften und Bilder</h2>
        <p>
          Diese Website verwendet keine Tracking- oder Analyse-Tools und setzt keine Cookies.
          Schriften und Bilder werden direkt von unserem Server geladen – es werden dafür keine
          Daten an Dritte übermittelt.
        </p>
      </section>

      <section>
        <h2>5. Links zu sozialen Netzwerken</h2>
        <p>
          Unsere Website enthält Links zu unseren Profilen auf Instagram und Facebook. Erst wenn Sie
          einen solchen Link anklicken, werden Daten an Meta Platforms übermittelt. Dafür gelten
          die Datenschutzbestimmungen des jeweiligen Netzwerks.
        </p>
      </section>

      <section>
        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten Daten sowie auf
          Berichtigung, Löschung und Einschränkung der Bearbeitung. Wenden Sie sich dazu an <Email />.
          Zudem können Sie sich beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten
          (EDÖB) beschweren.
        </p>
        <p>Stand: November 2026</p>
      </section>
    </>
  )
}
