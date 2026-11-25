// Texte der Startseite. Überschriften und Kleintitel dürfen fürs Layout gekürzt werden,
// Fakten (Leistungen, Ablauf, Werte, FAQ) bleiben inhaltlich gleich.

export const hero = {
  eyebrow: 'Malergeschäft in Zürich',
  title: 'Maler in Zürich – saubere Arbeit, innen wie aussen.',
  lead: 'Gogi Color streicht Wohnungen, Häuser, Fassaden und Treppenhäuser für Private, Verwaltungen und Firmen. Sorgfältig vorbereitet, termingerecht ausgeführt und ordentlich übergeben.',
  points: ['Unverbindliche Besichtigung vor Ort', 'Schriftliche Offerte vor Arbeitsbeginn', 'Ein fester Ansprechpartner'],
  audience: 'Privat · Verwaltungen · Gewerbe',
  whatsappText: 'Hallo Gogi Color, ich hätte gerne eine Offerte für Malerarbeiten.',
}

// Kurze Vertrauensargumente (nur belegbare Aussagen)
export const facts = [
  ['Ganz Zürich & Umgebung', 'Alle 12 Stadtkreise und Agglomeration'],
  ['Schriftliche Offerte', 'Nach Besichtigung vor Ort'],
  ['Sauber & geschützt', 'Abdecken, aufräumen, gemeinsame Abnahme'],
  ['Farbberatung', 'Farbmuster direkt an Ihrer Wand'],
]

export const servicesIntro = {
  eyebrow: 'Leistungen',
  title: 'Alles rund um Farbe, Wand und Fassade.',
  lead: 'Vom einzelnen Zimmer bis zur ganzen Fassade: Wir übernehmen Abdecken, Vorbereitung, Malerarbeiten und Aufräumen – alles aus einer Hand.',
}

export const audience = {
  eyebrow: 'Für wen wir arbeiten',
  title: 'Ein Malergeschäft für Private, Verwaltungen und Firmen.',
  groups: [
    {
      key: 'privat',
      title: 'Privatkunden',
      text: 'Wohnung, Haus oder einzelnes Zimmer: Wir beraten Sie persönlich, arbeiten sauber in Ihrem Zuhause und räumen danach auf.',
      links: [['/innenmalerei', 'Innenmalerei'], ['/fassaden', 'Fassaden']],
    },
    {
      key: 'verwaltung',
      title: 'Verwaltungen & STWEG',
      text: 'Mieterwechsel, Treppenhäuser und Allgemeinflächen – koordiniert mit Hauswart und Mietern, auf Wunsch in Etappen.',
      links: [['/verwaltungen', 'Für Verwaltungen'], ['/wohnungsabgabe', 'Wohnungsabgabe']],
    },
    {
      key: 'gewerbe',
      title: 'Gewerbe',
      text: 'Büros, Praxen und Ladenflächen – mit Terminen, die zu Ihren Öffnungszeiten passen, und möglichst wenig Unterbruch.',
      links: [['/verwaltungen', 'Malerarbeiten für Firmen']],
    },
  ],
}

export const about = {
  eyebrow: 'Über uns',
  title: 'Handwerk mit Sorgfalt – vom Abdecken bis zur Abnahme.',
  paragraphs: [
    'Gogi Color ist ein Malergeschäft aus Zürich. Wir streichen Wohnungen, Häuser, Treppenhäuser, Fassaden und Gewerbeflächen – für Privatkunden, Liegenschaftsverwaltungen und Firmen.',
    'Bei uns zählt saubere Handwerksarbeit: gründliche Vorbereitung, exakte Kanten und eine Baustelle, die ordentlich hinterlassen wird. Von der Besichtigung bis zur Abnahme haben Sie einen festen Ansprechpartner.',
  ],
  values: [
    ['Sauber & geschützt', 'Böden, Möbel und Fenster werden sorgfältig abgedeckt. Die Baustelle übergeben wir aufgeräumt.'],
    ['Termintreu', 'Wir halten vereinbarte Termine ein und informieren Sie frühzeitig, falls sich etwas ändert.'],
    ['Klare Offerte', 'Sie wissen vor Arbeitsbeginn schriftlich, was gemacht wird und was es kostet.'],
    ['Markenfarben', 'Hochwertige Farben, abgestimmt auf Untergrund, Raum und Nutzung.'],
  ],
  cta: 'Besichtigung vereinbaren',
}

// Ablauf – wird auf der Startseite und auf den Leistungsseiten gezeigt
export const process = {
  eyebrow: 'Ablauf',
  title: 'In vier Schritten zur frisch gestrichenen Wand.',
  lead: 'Klar geregelt und ohne Überraschungen: Sie wissen jederzeit, was als Nächstes passiert und wer Ihr Ansprechpartner ist.',
  steps: [
    ['Anfrage', 'Sie beschreiben uns kurz Ihr Vorhaben – per Formular, E-Mail oder Instagram, gerne mit Fotos.'],
    ['Besichtigung', 'Wir schauen uns Räume oder Fassade vor Ort an, prüfen den Untergrund und beraten Sie.'],
    ['Offerte', 'Sie erhalten eine klare, schriftliche Offerte mit allen Arbeiten und einem Terminvorschlag.'],
    ['Ausführung & Abnahme', 'Abdecken, vorbereiten, streichen, aufräumen – zum Schluss gehen wir alles gemeinsam durch.'],
  ],
}

export const kostenTeaser = {
  eyebrow: 'Kosten',
  title: 'Was kostet ein Maler in Zürich?',
  text: 'Der Preis hängt von Fläche, Zustand und Umfang ab. Als erste Orientierung dienen marktübliche Richtwerte für Wände und Decken:',
  note: 'Ihre verbindliche Offerte erhalten Sie nach der Besichtigung.',
  link: 'Kostenfaktoren & Richtwerte',
}

export const gebietTeaser = {
  eyebrow: 'Einsatzgebiet',
  title: 'In ganz Zürich und Umgebung unterwegs.',
  text: 'Von Altstetten bis Witikon, von Oerlikon bis Wollishofen – und in den Gemeinden rund um die Stadt.',
  link: 'Ganzes Einsatzgebiet',
}

// Stimmungsbilder (Stockfotos) – durch echte Projektfotos von Gogi Color ersetzen
export const gallery = {
  eyebrow: 'Einblicke',
  title: 'Farbe, die Räume verändert.',
  lead: 'Warme Erdtöne, ein ruhiges Grün oder klassisches Weiss – wir beraten Sie gerne zur passenden Farbe. Aktuelle Arbeiten und Vorher-Nachher-Bilder zeigen wir auf Instagram.',
  instagramText: 'Aktuelle Projekte auf Instagram ansehen',
}

export const cta = {
  title: 'Sie planen Malerarbeiten?',
  text: 'Wir besichtigen Ihr Objekt und erstellen Ihnen eine unverbindliche Offerte.',
}

export const faqIntro = {
  title: 'Häufige Fragen',
  lead: 'Ihre Frage ist nicht dabei? Schreiben Sie uns – wir antworten gerne persönlich.',
}

export const homeFaq = [
  {
    q: 'Was kostet ein Maler in Zürich?',
    a: 'Das hängt von Fläche, Untergrund, Farbe und Vorbereitungsaufwand ab. Nach einer kurzen Besichtigung erhalten Sie eine schriftliche, nachvollziehbare Offerte. Erste Richtwerte finden Sie auf unserer Seite zu den Kosten.',
  },
  {
    q: 'Wie erhalte ich eine Offerte?',
    a: 'Über das Anfrageformular, per E-Mail oder Instagram. Mit Adresse, ungefährer Fläche und ein paar Fotos geht es am schnellsten. Danach vereinbaren wir einen Termin für die Besichtigung.',
  },
  {
    q: 'In welchem Gebiet arbeiten Sie?',
    a: 'In allen zwölf Stadtkreisen von Zürich und in den umliegenden Gemeinden. Für grössere Aufträge kommen wir auch weiter – fragen Sie einfach an.',
  },
  {
    q: 'Muss ich die Möbel selbst wegräumen?',
    a: 'Kleinere Gegenstände bitte wegräumen. Grosse Möbel rücken wir zusammen und decken sie ab – genauso wie Böden und Fenster.',
  },
  {
    q: 'Wie lange dauern die Arbeiten?',
    a: 'Ein Zimmer ist oft in einem Tag erledigt, eine ganze Wohnung in wenigen Tagen. Die genaue Dauer steht in Ihrer Offerte.',
  },
  {
    q: 'Muss ich beim Auszug die Wände streichen?',
    a: 'Nicht automatisch. Entscheidend sind Alter und Zustand des Anstrichs sowie Ihr Mietvertrag. Für Dübellöcher reicht oft eine Ausbesserung – mehr dazu auf unserer Seite zur Wohnungsabgabe.',
  },
  {
    q: 'Welche Farben verwenden Sie?',
    a: 'Hochwertige Markenfarben, passend zu Untergrund und Raum – zum Beispiel scheuerbeständig in Küche und Gang, wetterfest an der Fassade.',
  },
  {
    q: 'Arbeiten Sie auch für Verwaltungen und Firmen?',
    a: 'Ja – Mieterwechsel, Wohnungsabgaben, Treppenhäuser, Büros und Läden. Termine stimmen wir auf Übergaben und Öffnungszeiten ab.',
  },
]

export const contact = {
  eyebrow: 'Kontakt',
  title: 'Offerte anfragen',
  lead: 'Beschreiben Sie Ihr Vorhaben in vier kurzen Schritten. Wir melden uns für eine Besichtigung und senden Ihnen danach eine unverbindliche Offerte.',
  tip: 'Mit ein paar Fotos und der ungefähren Fläche können wir Ihre Anfrage schneller einschätzen.',
}

export const footer = {
  blurb: 'Ihr Malergeschäft in Zürich für Innenmalerei, Fassaden, Wohnungsabgaben und Renovationen – sauber, termintreu und fair offeriert.',
  credit: ['Website by Eqiro', 'https://eqiro.ch'],
}
