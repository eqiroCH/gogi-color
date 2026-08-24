function Impressum({ onBack }) {
  return (
    <section className="legal-page">
      <div className="container">
        <button className="back-button" onClick={onBack}>← Zurück zur Startseite</button>
        <h2 className="section-title">Impressum</h2>
        <div className="legal-section">
          <h3>Angaben gemäss Schweizer Recht</h3>
          <p>
            <strong>Gogi Color</strong><br />
            Colorist für Haarfarbe<br />
            Kontakt über Instagram:{' '}
            <a href="https://www.instagram.com/gogi_color/" target="_blank" rel="noopener noreferrer">
              @gogi_color
            </a>
          </p>
          <p>
            Vollständige Anbieterangaben (Name, Adresse, UID) werden nachgeliefert, sobald sie vom Betreiber bestätigt sind.
          </p>
        </div>
        <div className="legal-section">
          <h3>Haftung für Inhalte</h3>
          <p>
            Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit
            und Aktualität wird keine Gewähr übernommen.
          </p>
        </div>
        <div className="legal-section">
          <h3>Haftung für Links</h3>
          <p>
            Diese Website verlinkt auf Instagram und andere Dritte. Für deren Inhalte sind ausschliesslich
            die jeweiligen Betreiber verantwortlich.
          </p>
        </div>
        <div className="legal-section">
          <h3>Urheberrecht</h3>
          <p>
            Texte und Gestaltung dieser Website unterliegen dem schweizerischen Urheberrecht.
            Stimmungsbilder stammen von Unsplash und unterliegen den jeweiligen Lizenzbedingungen.
            Kundenarbeiten von Gogi Color sind auf Instagram zu finden.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Impressum
