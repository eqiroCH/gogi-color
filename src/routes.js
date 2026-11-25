import { servicePages } from './content/services'

// Seitentitel und Beschreibungen – werden beim Build in den <head> jeder Seite geschrieben
export const routes = {
  '/': {
    name: 'Startseite',
    title: 'Maler Zürich | Gogi Color – Malergeschäft für innen & aussen',
    description:
      'Gogi Color – Ihr Malergeschäft in Zürich. Innenmalerei, Fassaden, Wohnungsabgabe, Spachtel- und Gipserarbeiten. Sauber, termintreu, unverbindliche Offerte.',
  },
  ...Object.fromEntries(
    servicePages.map((service) => [
      `/${service.slug}`,
      { name: service.name, title: service.page.metaTitle, description: service.page.metaDescription },
    ]),
  ),
  '/kosten': {
    name: 'Kosten',
    title: 'Wohnung streichen: Kosten in Zürich | Gogi Color',
    description:
      'Was kostet ein Maler in Zürich? Marktübliche Richtwerte für Wände, Wohnungen und Fassaden, die wichtigsten Kostenfaktoren und der Weg zur genauen Offerte.',
  },
  '/einsatzgebiet': {
    name: 'Einsatzgebiet',
    title: 'Einsatzgebiet: Maler in Zürich und Umgebung | Gogi Color',
    description:
      'Gogi Color ist in allen zwölf Zürcher Stadtkreisen und in den umliegenden Gemeinden für Sie da – von Altstetten bis Witikon, von Dübendorf bis Adliswil.',
  },
  '/offerte': {
    name: 'Offerte anfragen',
    title: 'Offerte anfragen | Gogi Color – Maler in Zürich',
    description:
      'Beschreiben Sie Ihr Vorhaben in wenigen Schritten, senden Sie Fotos mit und erhalten Sie eine unverbindliche Offerte von Gogi Color.',
  },
  '/impressum': {
    name: 'Impressum',
    title: 'Impressum | Gogi Color',
    description: 'Impressum von Gogi Color, Malergeschäft in Zürich.',
  },
  '/datenschutz': {
    name: 'Datenschutz',
    title: 'Datenschutzerklärung | Gogi Color',
    description: 'Datenschutzerklärung von Gogi Color, Malergeschäft in Zürich.',
  },
}

export const notFound = {
  title: 'Seite nicht gefunden | Gogi Color',
  description: 'Diese Seite existiert nicht. Zurück zur Startseite von Gogi Color, Malergeschäft in Zürich.',
}

export const normalizePath = (path) => path.replace(/\.html$/, '').replace(/\/+$/, '') || '/'
