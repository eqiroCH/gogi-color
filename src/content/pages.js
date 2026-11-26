// Texte der Unterseiten (ausser Leistungen → services.js, Rechtliches → legal.jsx).
// Überschriften und Kleintitel dürfen fürs Layout gekürzt werden, Fakten bleiben gleich.

// Feste Beschriftungen der Leistungsseiten (/innenmalerei, /fassaden, …)
export const servicePageLabels = {
  primaryCta: 'Offerte anfragen',
  secondaryCta: 'Leistungsumfang',
  introEyebrow: 'Unser Vorgehen',
  featuresEyebrow: 'Leistungsumfang',
  featuresTitle: 'Das übernehmen wir für Sie.',
  relatedEyebrow: 'Weitere Leistungen',
  relatedTitle: 'Das könnte Sie auch interessieren.',
  relatedLink: 'Mehr erfahren',
  sourceLabel: 'Quelle:',
}

export const kosten = {
  hero: {
    eyebrow: 'Kosten & Richtwerte',
    title: 'Was kostet ein Maler in Zürich?',
    lead: 'Die ehrliche Antwort: Es kommt auf Fläche, Zustand und Umfang an. Hier finden Sie die wichtigsten Kostenfaktoren, marktübliche Richtwerte und den schnellsten Weg zu Ihrer genauen Offerte.',
    secondaryCta: 'Zu den Richtwerten',
  },
  richtwerte: {
    eyebrow: 'Richtwerte',
    title: 'Marktübliche Preise in der Schweiz',
    lead: 'Als erste Orientierung: durchschnittliche Preise aus einem öffentlichen Kostenvergleich. Sie ersetzen keine Besichtigung – Ihr verbindlicher Preis steht in der Offerte.',
    noteTitle: 'Warum eine Besichtigung?',
    noteText: 'Erst vor Ort sehen wir den Zustand der Wände, die tatsächliche Fläche und den Aufwand für die Vorbereitung. So erhalten Sie eine Offerte ohne Überraschungen.',
    tableHead: ['Arbeit', 'Richtwert'],
    // Muss sichtbar bleiben: Es sind nicht die Preise von Gogi Color
    disclaimer: 'Durchschnittswerte ohne Gewähr; nicht die Preise von Gogi Color.',
  },
  faktoren: { eyebrow: 'Kostenfaktoren', title: 'Davon hängt der Preis ab.' },
  tipps: { eyebrow: 'Tipps', title: 'So sparen Sie Kosten – ohne an der Qualität zu sparen.' },
  faq: [
    {
      q: 'Warum unterscheiden sich Malerpreise so stark?',
      a: 'Weil die zu streichende Fläche meist zwei- bis dreimal so gross ist wie die Wohnfläche und der Aufwand für die Vorbereitung stark variiert. Achten Sie beim Vergleichen darauf, ob Decken, Türen, Material und MwSt. enthalten sind.',
    },
    {
      q: 'Werden Decken, Türen und Heizkörper separat berechnet?',
      a: 'Ja. Sie werden in der Offerte als eigene Positionen aufgeführt – so sehen Sie genau, wofür Sie bezahlen.',
    },
    {
      q: 'Wie komme ich am schnellsten zu einem Preis?',
      a: 'Senden Sie uns über das Anfrageformular ein paar Fotos und die ungefähre Grösse. Danach vereinbaren wir eine Besichtigung und Sie erhalten eine schriftliche Offerte.',
    },
    {
      q: 'Was ist im Preis enthalten?',
      a: 'Das steht in Ihrer Offerte: in der Regel Abdecken, Vorbereitung, Material, Anstrich und Aufräumen. Zusätzliche Arbeiten besprechen wir vorher mit Ihnen.',
    },
  ],
  cta: {
    title: 'Ihr genauer Preis in wenigen Schritten.',
    text: 'Beschreiben Sie Ihr Vorhaben – wir melden uns für die Besichtigung und senden Ihnen eine unverbindliche Offerte.',
  },
}

export const einsatzgebiet = {
  hero: {
    eyebrow: 'Einsatzgebiet',
    title: 'Ihr Maler in der Stadt Zürich und Umgebung.',
    lead: 'Wir arbeiten in allen zwölf Stadtkreisen von Zürich und in den Gemeinden rund um die Stadt. Für grössere Aufträge kommen wir auch weiter – fragen Sie einfach an.',
  },
  stadt: {
    eyebrow: 'Stadt Zürich',
    title: 'In allen zwölf Stadtkreisen.',
    lead: 'Ob Altbauwohnung im Seefeld, Einfamilienhaus in Witikon oder Gewerbefläche in Oerlikon – wir sind in der ganzen Stadt für Sie unterwegs.',
  },
  gemeinden: {
    eyebrow: 'Agglomeration',
    title: 'Auch in den Gemeinden rund um Zürich.',
    lead: 'Ihr Ort ist nicht aufgeführt? Fragen Sie trotzdem an – wir prüfen gerne, ob wir Ihren Auftrag übernehmen können.',
  },
}

export const offerte = {
  eyebrow: 'Unverbindlich',
  title: 'Offerte anfragen',
  lead: 'In vier kurzen Schritten zu Ihrer Anfrage. Mit ein paar Fotos können wir Ihr Vorhaben schneller einschätzen.',
  nextTitle: 'So geht es weiter',
  next: [
    ['Wir melden uns', 'Wir sichten Ihre Angaben und Fotos und melden uns für einen Besichtigungstermin.'],
    ['Besichtigung', 'Vor Ort prüfen wir Untergrund und Fläche und beraten Sie zu Farbe und Ablauf.'],
    ['Schriftliche Offerte', 'Sie erhalten eine klare Offerte mit allen Arbeiten und einem Terminvorschlag.'],
  ],
}

export const notFoundPage = {
  eyebrow: 'Fehler 404',
  title: 'Diese Seite gibt es leider nicht.',
  lead: 'Vielleicht hat sich die Adresse geändert. Hier geht es weiter:',
  primaryCta: 'Zur Startseite',
  secondaryCta: 'Offerte anfragen',
}
