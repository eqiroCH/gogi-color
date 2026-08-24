function Datenschutz({ onBack }) {
  return (
    <section className="legal-page">
      <div className="container">
        <button className="back-button" onClick={onBack}>← Zurück zur Startseite</button>
        <h2 className="section-title">Datenschutz</h2>
        <div className="legal-section">
          <h3>1. Verantwortliche Stelle</h3>
          <p>
            Gogi Color, erreichbar über Instagram{' '}
            <a href="https://www.instagram.com/gogi_color/" target="_blank" rel="noopener noreferrer">
              @gogi_color
            </a>
            . Diese Datenschutzerklärung gilt für die Website von Gogi Color.
          </p>
        </div>
        <div className="legal-section">
          <h3>2. Hosting</h3>
          <p>
            Die Website wird bei einem externen Hoster betrieben. Beim Aufruf fallen technisch notwendige
            Server-Logfiles an (IP-Adresse, Zeitpunkt, User-Agent). Die Verarbeitung erfolgt zur
            Bereitstellung und Sicherheit der Website (Art. 31 nDSG).
          </p>
        </div>
        <div className="legal-section">
          <h3>3. Kontaktanfragen</h3>
          <p>
            Das Formular auf dieser Seite speichert keine Daten auf unseren Servern. Der vorbereitete Text
            wird lokal in die Zwischenablage kopiert. Die eigentliche Anfrage sendest du selbst über Instagram.
            Für die Verarbeitung dort gilt die Datenschutzerklärung von Meta.
          </p>
        </div>
        <div className="legal-section">
          <h3>4. Schriften und Bilder</h3>
          <p>
            Es werden Google Fonts und Bilder von Unsplash geladen. Dabei kann eine Verbindung zu den
            jeweiligen Servern entstehen. Alternativ können Schriften lokal nachgerüstet werden.
          </p>
        </div>
        <div className="legal-section">
          <h3>5. Deine Rechte</h3>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
            deiner Personendaten sowie auf Beschwerde beim Eidgenössischen Datenschutz- und
            Öffentlichkeitsbeauftragten (EDÖB).
          </p>
        </div>
      </div>
    </section>
  )
}

export default Datenschutz
