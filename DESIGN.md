# Designsystem Gogi Color

## Idee: «Ladenschild & Farbmuster»

Gogi Color soll wirken wie ein gut geführtes Zürcher Handwerksgeschäft: ruhig, präzise, vertrauenswürdig.
Die Farben stammen vom klassischen Ladenschild (Tannengrün mit Ocker/Gold, passend zum goldenen Logo auf
Instagram) und von der frisch gestrichenen Wand (Kalkweiss, Sandstein). Die Formensprache ist die einer
**Farbmusterkarte**: scharfe Kanten (Radien 2–4 px), feine Haarlinien, kleine **Farbquadrate** vor Kleintiteln
und Listenpunkten und die **Farbtonkarte** (ein Ockerton in drei Nuancen) als Markenzeichen im Logo, am Bildrand
und am CTA-Band. Farbe setzen wir sparsam ein. Ocker ist für die Hauptaktion und kleine Akzente da, Tannengrün
für einen dunklen Abschnitt pro Seite und den Footer.

Schriften: **Literata** (Serif, Überschriften) und **Archivo** (Grotesk, Text und Bedienung). Beide sind
selbst gehostet über `@fontsource-variable/*` und werden in `src/main.jsx` importiert.

---

## 1. Dateien und Grundregeln

| Ort | Inhalt |
|---|---|
| `src/styles/tokens.css` | Alle Design-Tokens (Custom Properties), `.on-dark` |
| `src/styles/base.css` | Reset, Typografie, Links, Fokus, Skip-Link, Hilfsklassen |
| `src/styles/layout.css` | Container, Abschnitte, Abschnittskopf, Raster, Split |
| `src/styles/components.css` | Buttons, Links, Karten, Listen, Tabelle, Info-Box, Medien, Prosa |
| `src/styles/forms.css` | Felder, Auswahlkacheln, Upload, Schrittanzeige, `.form-panel` |
| `src/components/*.jsx` + `*.css` | Bausteine (siehe Abschnitt 4), jede importiert ihr CSS selbst |
| `src/pages/<Name>.jsx` + `<Name>.css` | Seiten, die seiteneigenes CSS selbst importieren |

- **Alles CSS landet in einem Bundle** (alle Seiten werden in `App.jsx` statisch importiert). Seiteneigene
  Klassen deshalb **immer mit Seitenpräfix**: `.kosten-…`, `.gebiet-…`, `.offerte-…`, `.service-page-…`,
  `.legal-…`, `.notfound-…`. Gemeinsame Klassen (unten) nie in Seiten-CSS umdefinieren; ist eine Anpassung
  nötig, dann nur über eine eigene Präfix-Klasse (`.kosten-table .data-table td { … }`).
- **Nur Tokens verwenden**, keine neuen Hex-Farben, Schriftgrössen oder Abstände in Seiten-CSS.
- **Mobile first:** Basis-CSS für 375 px schreiben, grössere Breiten per `@media (min-width: …em)`.
- **Vorrendern:** kein `window`/`document` im Render, nur in `useEffect`/Handlern. Nichts Zufälliges.
- **Typografie-Helfer:** `typo(text)` aus `src/components/typo.js` setzt ein geschütztes Leerzeichen vor
  « – », damit kein Gedankenstrich am Zeilenanfang steht. `SectionHeader`, `PageHeader`, `CallToAction`,
  `FAQ`, `ProcessSteps` und `ServiceCards` machen das schon selbst. Für eigene Fliesstexte aus dem Content
  `{typo(text)}` verwenden.
- **Links** sind normale `<a href="/kosten">`, Anker auf der Startseite: `/#leistungen`, `/#ueber-uns`,
  `/#ablauf`, `/#faq`, `/#kontakt`, dazu `/#fuer-wen`, `/#einblicke`, `/#kosten`, `/#einsatzgebiet`.

---

## 2. Tokens

### Farben

| Token | Wert | Verwendung | Kontrast |
|---|---|---|---|
| `--color-kalk` | `#f5f2eb` | Seitenhintergrund (Standard-Abschnitt) | – |
| `--color-papier` | `#ffffff` | Karten, Panels, Formulare | – |
| `--color-sand` | `#ebe5d9` | Alternativer Abschnitt (`.section--alt`) | – |
| `--color-sand-dark` | `#ded6c6` | Bild-Platzhalter, Flächen auf Sand | – |
| `--color-tinte` | `#1d2421` | Haupttext, Überschriften | 14:1 auf Kalk |
| `--color-tinte-soft` | `#4a524d` | Fliesstext sekundär, Leads | 7.2:1 Kalk, 6.4:1 Sand |
| `--color-tinte-muted` | `#5d635d` | Meta, Quellen, Beschriftungen | 5.5:1 Kalk, 4.9:1 Sand |
| `--color-tanne` | `#1e3a32` | Dunkle Abschnitte, Footer, Icons auf hell | Kalk darauf 11:1 |
| `--color-tanne-light` | `#2a4a40` | Karten auf Tannengrün | – |
| `--color-ocker` | `#c8963e` | **Hauptbutton** (Text Tinte, 6:1), Farbquadrate, Akzentlinien | – |
| `--color-ocker-hover` | `#b5842f` | Hover Hauptbutton | Tinte 4.8:1 |
| `--color-ocker-light` | `#e7c98a` | Ocker als Text auf Tannengrün | 7.7:1 |
| `--color-ocker-pale` | `#f3e6c8` | Helle Hinweisflächen, Icon-Kacheln | Tinte 12.8:1 |
| `--color-ocker-text` | `#7a581b` | Ocker als **Text** auf hell (Kleintitel, Nummern) | 5.2:1 Sand, 5.8:1 Kalk |
| `--color-line` | `#d9d2c4` | Haarlinien (dekorativ) | – |
| `--color-line-strong` | `#8c8576` | Rahmen von Eingabefeldern | 3.7:1 |
| `--color-error` / `--color-success` | `#a3321f` / `#2f6b4a` | Formularmeldungen | 6.9:1 |

**Semantische Variablen** (wechseln auf dunklem Grund automatisch): `--bg`, `--surface`, `--text`,
`--text-soft`, `--text-muted`, `--heading`, `--accent`, `--accent-text`, `--line`, `--link`, `--focus-ring`.
In Bausteinen immer diese verwenden, dann funktionieren sie hell und dunkel. Für dunkle Flächen die Klasse
`.on-dark` setzen (`.section--dark` hat sie eingebaut).

Ocker **nie** als Textfarbe auf hellem Grund (zu wenig Kontrast), dafür gibt es `--color-ocker-text` bzw. `--accent-text`.

### Typografie

| Token | Grösse (375 → 1280 px) | Verwendung |
|---|---|---|
| `--fs-display` | 38 → 70 | nur Startseiten-Hero |
| `--fs-h1` | 34 → 56 | H1 Unterseiten (`PageHeader`) |
| `--fs-h2` | 28 → 44 | Abschnittstitel |
| `--fs-h3` | 20 → 24 | Kartentitel, Zwischentitel |
| `--fs-h4` | 17 → 19 | kleine Titel |
| `--fs-lead` | 17 → 20 | Lead unter Titeln (`.lead`) |
| `--fs-md` | 18 | hervorgehobener Fliesstext |
| `--fs-base` | 16 → 17 | Fliesstext |
| `--fs-sm` | 15 | Kleintext, Navigation, Karten |
| `--fs-xs` | 13 | Kleintitel, Tabellenkopf, Meta |

- `--font-serif` (Literata 600) für `h1–h3`, `--font-sans` (Archivo) für alles andere, `h4` ist Archivo.
- Zeilenhöhen `--lh-tight` 1.08, `--lh-snug` 1.22, `--lh-base` 1.6. Zeilenlänge max. `--measure` (66ch).
- Kleintitel (`.eyebrow`) = Archivo 13 px, 600, Versalien, `--tracking-caps`, mit Ocker-Quadrat davor.

### Abstände, Radien, Schatten, Masse

- Raster 4 px: `--space-3xs` 4 · `2xs` 8 · `xs` 12 · `sm` 16 · `md` 24 · `lg` 32 · `xl` 48 · `2xl` 64 · `3xl` 96 · `4xl` 128.
- Fluide Rhythmus-Abstände: `--section-y` (56–112, Abschnitt oben/unten), `--section-y-tight` (40–72),
  `--stack-header` (32–56, Abschnittskopf → Inhalt), `--grid-gap` (16–32, Raster).
- Container: `--container` 76rem (1216 px), `--container-wide` 88rem, `--container-narrow` 46rem,
  Seitenrand `--gutter` 20–40 px.
- Radien: `--radius-sm` 2 px (Buttons, Felder, Chips, Bilder), `--radius-md` 4 px (Karten, Panels). Nichts Rundes ausser Radio-Buttons.
- Schatten sparsam: `--shadow-1` (Karten/Panels auf Wunsch), `--shadow-2` (Menüs, schwebende Etiketten), `--shadow-bar` (mobile Leiste).
- Bewegung: `--dur-fast` 140 ms, `--dur` 220 ms, `--ease`. Bei `prefers-reduced-motion` automatisch 0.
- Fixe Masse: `--header-h` (64 / 76 px), `--mobilebar-h` 68 px, `--tap` 44 px Mindest-Touchziel.
- **Breakpoints** (in Media Queries als `em` schreiben): `30em` (480), `40em` (640), `48em` (768),
  `64em` (1024, Desktop-Navigation, 2-spaltige Layouts), `80em` (1280).

---

## 3. Layout-Klassen

```html
<section class="section section--alt"><div class="container">…</div></section>
```

| Klasse | Zweck |
|---|---|
| `.container`, `--wide`, `--narrow` | Inhaltsbreite mit Seitenrand |
| `.section` + `--default` (Kalk) / `--alt` (Sand) / `--paper` (Weiss) / `--dark` (Tannengrün) | Abschnitt mit `--section-y` oben/unten |
| `.section--tight` | weniger Abstand |
| `.section--rule` | Haarlinie oben (zwei gleichfarbige Abschnitte hintereinander) |
| `.section--flush-top` | ohne Abstand oben |
| `.section-header` (+ `--split`, `--center`) | Kleintitel, Titel, Lead; `--split` = Titel links, Lead rechts ab 64em |
| `.eyebrow` | Kleintitel mit Farbquadrat |
| `.lead` | Einleitungstext (`--fs-lead`, max. 40em) |
| `.section-footer` | Zeile mit Links/Buttons unter einem Abschnitt |
| `.grid` + `--2` / `--3` / `--4` / `--auto` | Raster (1 Spalte mobil; `--2` ab 48em; `--3`/`--4` 2 Spalten ab 48em, 3/4 ab 64em; `--auto` min. 16rem) |
| `.split` (+ `--text-wide`, `--media-wide`, `--reverse`, `--top`) | Text + Bild nebeneinander ab 64em |
| `.stack` | Abstand zwischen Geschwistern (`--stack` setzen, Standard 16 px) |
| `.visually-hidden`, `.text-soft`, `.text-muted`, `.nowrap`, `.tabular` | Hilfsklassen |

**Reihenfolge der Hintergründe:** Kalk und Sand abwechseln. Höchstens **ein** dunkler Abschnitt
(`ProcessSteps` oder ein eigener) pro Seite, plus CTA-Tafel und Footer. Nie zwei Sand-Abschnitte direkt hintereinander.

---

## 4. Bausteine (React)

Alle in `src/components/`. Import immer mit relativem Pfad, z. B. `import FAQ from '../components/FAQ'`.

### `Section` / `SectionHeader` (`Section.jsx`)

```jsx
import { Section, SectionHeader } from '../components/Section'

<Section id="leistungsumfang" variant="alt">          {/* variant: default | alt | paper | dark */}
  <SectionHeader eyebrow="Leistungsumfang" title="Das übernehmen wir für Sie." lead="…" layout="split">
    <a className="link-arrow" href="/kosten">Zu den Kosten <IconArrowRight /></a>   {/* optional */}
  </SectionHeader>
  …
</Section>
```

`Section`-Props: `id`, `variant`, `tight`, `width` (`default`|`wide`|`narrow`), `rule`, `className`, weitere
Attribute (`aria-labelledby`). `SectionHeader`-Props: `eyebrow`, `title`, `lead`, `as` (Standard `h2`),
`titleId`, `layout` (`stack`|`split`|`center`), `children` (Aktionen).

### `PageHeader` (`PageHeader.jsx`): Kopf aller Unterseiten

```jsx
<PageHeader
  breadcrumb={service.name}            // Standard: title
  eyebrow={service.name}
  title={service.page.title}
  lead={service.page.lead}
  image={{ src: service.image, width: 800, height: 600, alt: service.alt }}   // optional
  highlights={service.page.highlights}                                         // optional
>
  <a className="btn btn--primary btn--lg" href={`/offerte?leistung=${service.slug}`}>
    Offerte anfragen <IconArrowRight />
  </a>
  <a className="btn btn--secondary btn--lg" href="#leistungsumfang">Leistungsumfang</a>
</PageHeader>
```

- Enthält Brotkrumen «Startseite ■ Name» (mit `aria-current="page"`) und die einzige `<h1>` der Seite.
- Mit `image`: zweispaltig ab 64em, Bild 4:3 mit Farbtonkarte am Rand. Mobil steht das Bild randlos unter
  dem Text. Es lädt mit `fetchPriority="high"`, also kein weiteres Bild der Seite priorisieren.
- Ohne `image`: schlichter, einspaltiger Kopf (Impressum, Datenschutz, 404, Offerte).
- Danach folgt direkt der erste `Section`. Der Kopf hat eine Haarlinie unten, der erste Abschnitt darf deshalb Kalk sein.

### `ServiceCards` (`ServiceCards.jsx`)

```jsx
<ServiceCards />                                  // alle 6 Leistungen
<ServiceCards exclude={service.slug} />           // «Weitere Leistungen» auf einer Leistungsseite
<ServiceCards items={services.filter(…)} headingLevel="h3" linkLabel="Mehr erfahren" />
```

Mobil kompakte Zeilen (Bild links), ab 40em Karten mit Bild 4:3 (2 bzw. 3 Spalten). Die ganze Karte ist klickbar.

### `ProcessSteps` (`ProcessSteps.jsx`)

```jsx
<ProcessSteps />                                    // 4 Schritte aus content/home.js, dunkler Abschnitt, id="ablauf"
<ProcessSteps variant="alt" id="ablauf" />          // hell
<ProcessSteps                                        // z. B. /offerte «So geht es weiter» (3 Schritte)
  eyebrow={null} title={offerte.nextTitle} lead={null} steps={offerte.next} variant="default" id="so-gehts-weiter" />
```

Props: `eyebrow`, `title`, `lead` (`null` blendet aus), `steps` (`[[Titel, Text], …]`), `id`, `variant`, `children`.

### `FAQ` (`FAQ.jsx`)

```jsx
<FAQ items={service.page.faq} />                     // Titel «Häufige Fragen», Lead + Mail-Link aus home.js
<FAQ items={kosten.faq} variant="alt" id="faq" eyebrow="Fragen" title="…" lead="…" />
```

Akkordeon mit `<details>/<summary>`, funktioniert ohne JS. Ab 64em links Titel + Mail-Link (sticky), rechts Fragen.

### `CallToAction` (`CallToAction.jsx`)

```jsx
<CallToAction />                                                   // Text aus home.js → cta
<CallToAction title={kosten.cta.title} text={kosten.cta.text} />
<CallToAction offerHref={`/offerte?leistung=${service.slug}`} variant="alt" />
```

Dunkle «Ladenschild»-Tafel mit Farbtonkarte rechts. Hauptbutton Ocker, Zweitaktion: Telefon, falls in `site.js`
gesetzt, sonst E-Mail. Gehört als letzter Abschnitt vor den Footer (nicht direkt nach einem dunklen Abschnitt).

### `ContactList` (`ContactList.jsx`)

```jsx
<ContactList />                       // Icon-Kachel + Beschriftung + Wert, mit Haarlinien
<ContactList variant="compact" />     // nur Icon + Wert (Footer)
<ContactList showArea={false} />
```

Zeigt Telefon/WhatsApp/Adresse nur, wenn gesetzt, dazu E-Mail, Instagram und den Link aufs Einsatzgebiet.
`contactItems()` liefert dieselben Daten als Array für eigene Darstellungen.

### `OfferForm` (`OfferForm.jsx`)

Zurzeit ein **Platzhalter** (Schrittanzeige + Link auf `/offerte`). Das echte Formular kommt in diese Datei.
Vertrag: Default-Export ohne Pflicht-Props, äusserstes Element `.form-panel`, füllt die Breite seines
Containers. Auf der Startseite (`#kontakt`) ist die Spalte ab 64em ca. 700 px breit (7/12), mobil volle
Breite minus Seitenrand. Klassen für Felder, Kacheln und Upload stehen in `forms.css` (Abschnitt 5.9).

### `Header`, `Footer`, `MobileBar`, `Logo`

Werden von `App.jsx` gesetzt, Seiten fassen sie nicht an.

- `Header` (`path`): Skip-Link auf `#inhalt`, Logo, Navigation «Leistungen» (Mega-Menü mit allen
  Leistungen), Über uns, Ablauf, Kosten, Einsatzgebiet, Kontakt, CTA. Unter 64em gibt es den Knopf «Menü» mit
  Vollbild-Menü (Escape schliesst, Seite dahinter gesperrt und `inert`). Navigationsdaten liegen in `nav.js`.
- `Footer`: Marke, Leistungen, Informationen, Kontakt, Social, Impressum/Datenschutz, «Website by Eqiro».
- `MobileBar` (`path`): fixe Leiste unter 64em («Offerte anfragen» + Anruf/WhatsApp/E-Mail), auf `/offerte` aus.
  Ein Platzhalter nach dem Footer verhindert, dass sie Inhalt verdeckt. **Eigene fixe Elemente unten** brauchen
  unter 64em `bottom: var(--mobilebar-h)`.
- `Logo` (`tagline`): Platzhalter-Wortmarke. `LogoMark` = Farbtonkarte allein.

### `Icons.jsx`, `Img.jsx`, `typo.js`

```jsx
import { IconArrowRight, IconCheck, IconPhone, IconMail, IconWhatsApp, IconInstagram, IconFacebook,
  IconMapPin, IconDocument, IconShield, IconClock, IconSwatch, IconRoller, IconHome, IconBuilding,
  IconStore, IconCamera, IconCalendar, IconInfo, IconUpload, IconExternal, IconPlus, IconClose,
  IconMenu, IconChevronDown, IconArrowUpRight } from '../components/Icons'

<IconPhone size={20} className="…" />     // 24er-Raster, Kontur 1.75, currentColor, aria-hidden
<Img image={images.about} />              // width/height, loading="lazy"
<Img src={service.image} width={800} height={600} alt={service.alt} />
```

Neue Icons im selben Stil (24×24, `stroke`, runde Enden) in `Icons.jsx` ergänzen, keine Icon-Library.

---

## 5. Klassen-Muster für Inhalte

### 5.1 Buttons und Links

```html
<a class="btn btn--primary btn--lg" href="/offerte">Offerte anfragen <IconArrowRight /></a>
<a class="btn btn--secondary" href="#leistungsumfang">Leistungsumfang</a>
<a class="btn btn--on-dark" href="…">…</a>           <!-- helle Kontur auf dunklem Grund ohne .on-dark -->
<a class="btn btn--dark" href="…">…</a>              <!-- ruhige Tannengrün-Fläche -->
<a class="link-arrow" href="/kosten">Kostenfaktoren & Richtwerte <IconArrowRight /></a>
<div class="actions actions--stack">…Buttons…</div>   <!-- Reihe, unter 30em volle Breite -->
```

- `.btn--primary` (Ocker/Tinte) ist **die eine Hauptaktion** pro Bildschirm, fast immer «Offerte anfragen».
- `.btn--secondary` (Kontur) passt sich in `.on-dark` automatisch an.
- Grössen: `.btn--sm` (44 px), Standard (48 px), `.btn--lg` (56 px), `.btn--block`, `.btn--icon` (+ `aria-label`).
- Pfeil-Icons bekommen beim Hover 3 px Versatz. Externe Links: `IconArrowUpRight` und `target="_blank" rel="noopener noreferrer"`.

### 5.2 Karten

```html
<article class="card"><h3 class="card__title">…</h3><p>…</p></article>   <!-- Papier, Linie, 4px Radius -->
```

Kinder bekommen automatisch 12 px Abstand. `.card--flat` = transparent. Ganze Karte klickbar: Link im Titel mit `.stretched-link`.

### 5.3 Raster nummerierter Feature-Karten (z. B. Leistungsumfang)

```html
<ol class="feature-grid">
  <li class="feature-card"><h3>Wände & Decken</h3><p>Neuanstrich oder Auffrischung …</p></li>
  …
</ol>
```

Haarlinie oben mit Ocker-Stück, Nummer «01, 02 …» automatisch (CSS-Zähler) in Ocker-Serif. 1 Spalte, ab 40em 2,
ab 64em 3. Modifikatoren: `--2`, `--4` (Spalten ab 64em), `--plain` (ohne Nummern, als `<ul>`).

### 5.4 Tabelle: Richtwerte

```html
<div class="table-wrap">
  <table class="data-table">
    <caption>Marktübliche Richtwerte</caption>                <!-- oder class="visually-hidden" -->
    <thead><tr><th scope="col">Arbeit</th><th scope="col">Richtwert</th></tr></thead>
    <tbody>
      <tr>
        <th scope="row">Wände streichen<span class="data-table__note">inkl. Material und Standardfarbe</span></th>
        <td>CHF 10–20 pro m² Wandfläche</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="source-note"><strong>Quelle:</strong> <a href="…" target="_blank" rel="noopener noreferrer">Houzy, «Kosten Maler» (Stand 2026)</a>. Durchschnittswerte ohne Gewähr; nicht die Preise von Gogi Color.</p>
```

Zwei Spalten (`tableHead`), Hinweis zur Zeile als `.data-table__note` **in der ersten Zelle** (so bleibt die
Tabelle auf 375 px lesbar). Werte rechtsbündig mit Ziffern in gleicher Breite. Kurze Werte dürfen `class="nowrap"`
bekommen. **Quelle und Hinweis «nicht die Preise von Gogi Color» stehen immer direkt unter jeder Richtwert-Tabelle.**

### 5.5 Info-Box mit Quellenangabe

```html
<aside class="info-box" id="farbberatung">
  <h3 class="info-box__title">Gut zu wissen: Wer bezahlt den Anstrich?</h3>
  <p>…</p>
  <p class="info-box__source">Quelle: <a href="…" target="_blank" rel="noopener noreferrer">Mieterverband: Wohnungsabgabe</a></p>
</aside>
```

Papierfläche mit Ockerband oben (wie der Farbstreifen einer Musterkarte). `.info-box--tinted` = helle
Ockerfläche ohne Rahmen. Quelle immer als letzte Zeile mit Haarlinie darüber.

### 5.6 Check-Liste

```html
<ul class="check-list"><li>Böden & Möbel werden abgedeckt</li>…</ul>
```

Ocker-Quadrat mit Tinte-Haken. `.check-list--lines` (Haarlinien zwischen Punkten), `.check-list--inline` (nebeneinander).

### 5.7 Chip-/Ortsliste (Gemeinden)

```html
<ul class="chip-list" aria-label="Gemeinden"><li class="chip">Adliswil</li>…</ul>
```

Rechteckige Chips (2 px Radius, Haarlinie, Papier). `a.chip` wird zum 44-px-Touchziel. `.chip--swatch` = mit kleinem Ockerquadrat.

### 5.8 Nummerierte Kacheln (Stadtkreise)

```html
<ol class="number-tiles" aria-label="Stadtkreise">
  <li class="number-tile">
    <span class="number-tile__num"><span class="visually-hidden">Kreis </span>4</span>
    <span class="number-tile__label">Aussersihl</span>
    <span class="number-tile__meta">Werd, Langstrasse, Hard</span>
  </li>
</ol>
```

Haarlinien-Raster: 2 Spalten, ab 36em 3, ab 64em 4 (passt für 12 Einträge).

### 5.9 Formulare (`forms.css`)

`.form-panel` (Tafel), `.field` + `.field__label` / `.field__hint` / `.field__error`, `.input`, `.select`,
`.textarea`, `.form-row--2`, `.form-legend`, Auswahlkacheln
`<label class="choice"><input type="checkbox"><span class="choice__box">Innenmalerei</span></label>` in
`.choice-grid` (auto, min. 12rem) bzw. `.choice-grid--2`, Upload `.upload` + `.upload-previews`, Schrittanzeige
`.stepper` (Klassen `is-current`, `is-done`, Variable `--steps`), `.form-actions`, `.form-status`, `.form-error`.
Felder haben 16 px Schrift und mindestens 48 px Höhe.

### 5.10 Prosa (Rechtstexte)

```jsx
<Section width="narrow"><div className="prose"><ImpressumContent /></div></Section>
```

`.prose` stylt das ungestylte Markup aus `content/legal.jsx`: `section` werden durch Haarlinien getrennt, `h2` in
Serif (`--fs-h3`), Absätze mit 1em Abstand, Links unterstrichen. Max. Zeilenlänge 66ch.

### 5.11 Medien

```html
<div class="media media--4x3"><Img … /></div>       <!-- --3x2, --1x1, --4x5, --16x9 -->
<p class="swatch-label" style="--swatch:#b5694a">Warme Erdtöne</p>   <!-- Farbmuster-Etikett -->
```

---

## 6. Regeln für Abstände

- Abschnitte steuern ihren Abstand selbst (`.section`), dazwischen **kein** zusätzlicher Margin.
- Abschnittskopf → Inhalt: `--stack-header` (macht `.section-header` automatisch).
- Innerhalb von Rastern `--grid-gap`, innerhalb von Karten `--space-xs` bis `--space-md`.
- Fliesstext-Absätze: `.stack` mit `--stack: var(--space-sm)`.
- Mobil Seitenrand 20 px (`--gutter`). Inhalte nie randlos ausser Bildern im `PageHeader` und im Hero.

## 7. Bildbehandlung

- Bilder kommen nur aus `src/content/` (Stockfotos, **nie** als «unsere Projekte/Referenzen» beschriften). Neue
  externe Bilder sind verboten. Fehlt ein Bild, Abschnitt ohne Bild gestalten und das melden.
- Immer `width`/`height` (über `Img`), `alt` aus dem Content, `loading="lazy"`, ausser beim einen Hauptbild der
  Seite (`PageHeader` macht das).
- Bildausschnitt per `.media--*` + `object-fit: cover`. Leistungsbilder sind 800×600 (4:3).
- Ecken 2 px (`--radius-sm`), keine Schatten auf Fotos, keine Filter, keine schrägen oder runden Masken.
- Markenzeichen am Bild: Farbtonkarte (`PageHeader`) oder `.swatch-label`. Pro Bildschirm höchstens eins davon.

## 8. Do und Don't

**Do**
- Eine Hauptaktion (Ocker) pro Bildschirm, sonst Sekundär-Buttons oder `.link-arrow`.
- Kleintitel kurz (1–3 Wörter), Titel als ganze Aussage aus dem Content.
- Haarlinien und Farbquadrate statt Schatten und Rahmen um alles.
- Leere `site`-Felder immer prüfen (`site.phone && …`).
- Auf 375 px prüfen: keine waagrechte Scrollbar, Touchziele mindestens 44 px, Text mindestens 15 px (Meta 13 px).
- Überschriften-Hierarchie: eine `h1` (PageHeader), dann `h2` pro Abschnitt, `h3` in Karten.

**Don't**
- Keine neuen Farben, Verläufe, Glassmorphism, Emoji, runde Pillen-Buttons, grosse Schatten.
- Ocker nicht als Textfarbe auf hell, Tannengrün nicht für grosse Flächen hintereinander.
- Keine Animationen, die Inhalte verzögern (kein Einblenden beim Scrollen).
- Kein Eszett (immer «ss»), keine erfundenen Zahlen, Bewertungen, Garantien oder Jahreszahlen.
- Keine globalen Klassen in Seiten-CSS überschreiben, keine Klassen ohne Seitenpräfix anlegen.

## 9. Empfohlene Seitengerüste

**Leistungsseite** (`ServicePage`): `PageHeader` (mit Bild, Highlights, 2 Buttons) → Intro (`Section`, `.split`
mit `servicePageLabels.introEyebrow`, Absätze) → Leistungsumfang (`Section variant="alt" id="leistungsumfang"`,
`.feature-grid`) → Info (`.info-box`, bei Innenmalerei `id="farbberatung"`) → `ProcessSteps` →
`FAQ items={page.faq}` → Weitere Leistungen (`Section` + `ServiceCards exclude={slug}`) → `CallToAction offerHref={`/offerte?leistung=${slug}`}`.

**Kosten:** `PageHeader` → Richtwerte (`.data-table` + `.source-note` + `.info-box` «Warum eine Besichtigung?»,
`id="richtwerte"`) → Kostenfaktoren (`.feature-grid`) → Tipps (`.check-list--lines`) → `FAQ` → `CallToAction`.

**Einsatzgebiet:** `PageHeader` → Stadt Zürich (`.number-tiles` mit allen 12 Kreisen inkl. Quartieren) →
Gemeinden (`.chip-list`) → `CallToAction`.

**Offerte:** `PageHeader` (ohne Bild) → Formular (`OfferForm`) + «So geht es weiter» (`ProcessSteps` mit 3 Schritten
oder `.feature-grid`) + `ContactList`. Die mobile Leiste ist hier aus.

**Impressum/Datenschutz:** `PageHeader eyebrow="Rechtliches"` → `Section width="narrow"` mit `.prose`.

**404:** `PageHeader` mit zwei Buttons → `ServiceCards`.
