# Gogi Color

Website für [Gogi Color](https://www.instagram.com/gogi_color/) – Malergeschäft in Zürich.

React 19 + Vite, jede Seite wird beim Build als statisches HTML vorgerendert (SEO, schneller Seitenaufbau)
und im Browser hydriert. Gehostet auf Netlify.

## Lokal starten

```bash
npm install
npm run dev       # Entwicklung (ohne Vorrendern)
npm run build     # Client-Build + SSR-Build + Vorrendern aller Seiten nach dist/
npm run preview   # fertigen Build ansehen
```

## Aufbau

- `src/site.js` – Firmenangaben (Telefon, Adresse, WhatsApp, UID, Nachweise wie SMGV).
  Leere Felder werden ausgeblendet; sobald z. B. `phone` oder `whatsapp` gesetzt ist, erscheinen
  Anruf- bzw. WhatsApp-Buttons überall automatisch.
- `src/routes.js` – alle Seiten mit `<title>` und Meta-Description.
- `src/content/` – alle Texte: Leistungen inkl. Unterseiten (`services.js`), Startseite (`home.js`),
  übrige Seiten (`pages.js`), Rechtstexte (`legal.jsx`), Einsatzgebiet (`area.js`), Richtwerte und
  Kostenfaktoren (`pricing.js`), Bilder mit Alt-Texten (`images.js`).
- `src/lib/` – Logik des Offerte-Formulars (Optionen, Ablauf, Versand), getrennt von der Darstellung.
- `src/styles/` – Design-Tokens und globale Styles, `src/components/` – Bausteine, `src/pages/` – Seiten.
- `DESIGN.md` – Designsystem (Farben, Schriften, Bausteine, Klassen). `CREDITS.md` – Bildnachweise.
- `scripts/prerender.mjs` – schreibt pro Route eine HTML-Datei inkl. JSON-LD (HousePainter,
  Service, BreadcrumbList), `404.html` und `sitemap.xml`.

Seiten: `/`, `/innenmalerei`, `/fassaden`, `/wohnungsabgabe`, `/renovation`, `/verwaltungen`,
`/kosten`, `/einsatzgebiet`, `/offerte`, `/impressum`, `/datenschutz`.

## Anfrageformular

Mehrstufiges Formular mit bis zu 3 Fotos (werden im Browser verkleinert), versendet über
Netlify Forms (Formular `offerte`, Felddefinition in `index.html`). In Netlify unter *Forms* die
Formularerkennung aktivieren und eine E-Mail-Benachrichtigung einrichten. Schlägt das Senden fehl,
bietet die Seite den Versand per E-Mail an. `/offerte?leistung=fassaden` wählt die Leistung vor.

## Vor dem Livegang mit dem Kunden klären

- Telefonnummer, Adresse, Inhaber, UID → `src/site.js` (Impressum ist sonst unvollständig)
- Wer hat `gogicolor.ch` registriert, existiert das Postfach `info@gogicolor.ch`?
- Offizielles Logo (Instagram/Facebook: goldener Schriftzug) als Datei → `src/components/Logo.jsx`, `public/favicon.svg`
- Echte Projektfotos statt Stockfotos (Liste in `CREDITS.md`, Pfade in `src/content/images.js` und `services.js`)
- In Netlify die Formularerkennung aktivieren (zurzeit «Forms not enabled»), sonst kommen keine Anfragen an
- Leistungsliste und Formulierungen auf den Unterseiten bestätigen lassen
- Ob die Facebook-Seite `facebook.com/gogicolor` zu ihm gehört
- Eigene Richtpreise statt der Marktwerte in `src/content/pricing.js` (optional)
- Nachweise für die Vertrauensleiste (`credentials`): SMGV, Haftpflicht, Ausbildung
