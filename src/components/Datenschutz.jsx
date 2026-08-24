function Datenschutz({ onBack }) {
  return (
    <section className="legal-page">
      <div className="container">
        <button className="back-button" onClick={onBack}>← Zurück zur Startseite</button>
        <h2 className="section-title">Datenschutz</h2>
        <div className="legal-section">
          <h3>1. Verantwortliche Stelle</h3>
          <p>
            Gogi Color, Zürich<br />
            E-Mail: <a href="mailto:info@gogicolor.ch">info@gogicolor.ch</a>
          </p>
        </div>
        <div className="legal-section">
          <h3>2. Hosting</h3>
          <p>
            Die Website wird bei einem externen Hoster betrieben. Beim Aufruf fallen technisch notwendige
            Server-Logfiles an (IP-Adresse, Zeitpunkt, User-Agent) zur Bereitstellung und Sicherheit der Website.
          </p>
        </div>
        <div className="legal-section">
          <h3>3. Kontaktanfragen</h3>
          <p>
            Das Formular öffnet dein E-Mail-Programm mit vorausgefülltem Text an info@gogicolor.ch.
            Es werden keine Formulardaten auf unseren Servern gespeichert.
          </p>
        </div>
        <div className="legal-section">
          <h3>4. Schriften und Bilder</h3>
          <p>
            Es werden Google Fonts und Bilder von Unsplash geladen. Dabei kann eine Verbindung zu den
            jeweiligen Servern entstehen.
          </p>
        </div>
        <div className="legal-section">
          <h3>5. Deine Rechte</h3>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
            sowie auf Beschwerde beim EDÖB.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Datenschutz
