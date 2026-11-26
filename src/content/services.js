// Leistungen: Karten auf der Startseite und eigene Unterseiten (sofern `page` vorhanden)
export const services = [
  {
    slug: 'innenmalerei',
    name: 'Innenmalerei',
    short: 'Wände, Decken, Türen und Heizkörper – in Wohnungen, Häusern und Treppenhäusern.',
    items: ['Wände & Decken', 'Türen, Rahmen & Heizkörper', 'Akzentwände'],
    image: '/images/innen.webp',
    alt: 'Farbroller trägt weisse Farbe auf eine Wand auf',
    page: {
      metaTitle: 'Innenmalerei Zürich – Wohnung streichen lassen | Gogi Color',
      metaDescription:
        'Wohnung streichen in Zürich: Wände, Decken, Türen und Heizkörper – sauber abgedeckt und termingerecht ausgeführt. Jetzt unverbindliche Offerte anfragen.',
      title: 'Wohnung streichen in Zürich – sauber und termingerecht.',
      lead: 'Ob einzelnes Zimmer, ganze Wohnung oder Treppenhaus: Wir decken ab, bereiten den Untergrund vor, streichen Wände und Decken und übergeben die Räume aufgeräumt.',
      highlights: ['Böden & Möbel werden abgedeckt', 'Schriftliche Offerte nach Besichtigung', 'Farbberatung vor Ort'],
      intro: {
        heading: 'Frische Farbe – ohne Stress für Sie.',
        paragraphs: [
          'Ein neuer Anstrich verändert einen Raum mehr als fast jede andere Renovationsarbeit – vorausgesetzt, er ist sauber ausgeführt. Deshalb beginnt jede Innenmalerei bei Gogi Color mit einer gründlichen Vorbereitung: Böden, Möbel, Fenster und Steckdosen werden geschützt, Löcher und Risse geschlossen und der Untergrund geprüft.',
          'Erst dann wird gestrichen – mit Farben, die zum Raum passen: scheuerbeständig in Küche und Gang, matt oder seidenmatt je nach Wunsch. Zum Schluss räumen wir auf und gehen die Arbeiten gemeinsam mit Ihnen durch.',
        ],
      },
      features: [
        ['Wände & Decken', 'Neuanstrich oder Auffrischung – in Weiss oder im Farbton Ihrer Wahl.'],
        ['Türen, Rahmen & Heizkörper', 'Lackierarbeiten an Türen, Zargen, Fensterrahmen und Heizkörpern.'],
        ['Treppenhäuser', 'Treppenhäuser und Eingangsbereiche in Mehrfamilienhäusern – auf Wunsch in Etappen.'],
        ['Sorgfältige Vorbereitung', 'Abdecken, abkleben, spachteln und schleifen für ein sauberes Resultat.'],
        ['Akzentwände', 'Einzelne Wände in kräftigen oder ruhigen Tönen setzen gezielte Akzente.'],
        ['Farbberatung', 'Farbmuster direkt an Ihrer Wand – damit Sie sehen, wie der Ton im Licht wirkt.'],
      ],
      info: {
        id: 'farbberatung',
        heading: 'Farbberatung inklusive',
        paragraphs: [
          'Weiss ist nicht gleich Weiss – und ein Farbton wirkt an der Wand oft anders als auf der Farbkarte. Auf Wunsch bringen wir Farbmuster mit, legen Musterflächen an und beraten Sie, welcher Ton zu Raum, Licht und Möbeln passt.',
        ],
      },
      faq: [
        {
          q: 'Wie lange dauert es, eine Wohnung zu streichen?',
          a: 'Ein Zimmer ist oft in einem Tag erledigt, eine 3.5-Zimmer-Wohnung in der Regel in wenigen Tagen. Die genaue Dauer hängt vom Zustand der Wände ab und steht in Ihrer Offerte.',
        },
        {
          q: 'Muss ich die Möbel ausräumen?',
          a: 'Kleinere Gegenstände bitte wegräumen. Grosse Möbel rücken wir zusammen und decken sie ab – genauso wie Böden und Fenster.',
        },
        {
          q: 'Kann ich während der Arbeiten in der Wohnung bleiben?',
          a: 'In vielen Fällen ja. Wir arbeiten Raum für Raum und besprechen den Ablauf vorher mit Ihnen.',
        },
        {
          q: 'Streichen Sie auch Decken?',
          a: 'Ja. Decken streichen wir auf Wunsch zusammen mit den Wänden – sie werden in der Offerte separat aufgeführt.',
        },
      ],
    },
  },
  {
    slug: 'fassaden',
    name: 'Fassaden',
    short: 'Wetterfeste Anstriche für Ein- und Mehrfamilienhäuser – mit gründlicher Vorbereitung.',
    items: ['Untergrund prüfen & reinigen', 'Risse ausbessern', 'Holzteile & Fensterläden'],
    image: '/images/fassade.webp',
    alt: 'Maler auf einer Leiter an einer weissen Hausfassade',
    page: {
      metaTitle: 'Fassade streichen in Zürich – Fassadenrenovation | Gogi Color',
      metaDescription:
        'Fassade streichen und renovieren in Zürich: Untergrund prüfen, reinigen, Risse ausbessern und wetterfest streichen. Jetzt unverbindliche Offerte anfragen.',
      title: 'Fassaden streichen in Zürich – wetterfest und langlebig.',
      lead: 'Eine gepflegte Fassade schützt Ihr Haus und wertet es auf. Wir prüfen den Zustand, bereiten den Untergrund sorgfältig vor und streichen mit Farben, die zum Material passen.',
      highlights: ['Untergrund prüfen & reinigen', 'Risse fachgerecht ausbessern', 'Wetterfeste Fassadenfarben'],
      intro: {
        heading: 'Gute Vorbereitung ist die halbe Fassade.',
        paragraphs: [
          'Wie lange ein Fassadenanstrich hält, entscheidet sich vor dem ersten Pinselstrich. Wir prüfen Haftung und Zustand des alten Anstrichs, reinigen die Fläche und schliessen Risse und Abplatzungen, damit die neue Farbe dauerhaft hält.',
          'Danach wählen wir die passende Farbe für Ihren Untergrund – ob Verputz, Mauerwerk oder Holz – und streichen in der Regel in zwei Durchgängen. Fensterläden, Dachuntersichten und Balkone nehmen wir auf Wunsch im selben Zug mit.',
        ],
      },
      features: [
        ['Fassadenanstrich', 'Neuanstrich für Ein- und Mehrfamilienhäuser im bisherigen oder in einem neuen Farbton.'],
        ['Untergrund & Reinigung', 'Prüfen, reinigen und grundieren – die Basis für einen dauerhaften Anstrich.'],
        ['Risse & Schäden', 'Risse, Abplatzungen und kleinere Putzschäden werden fachgerecht ausgebessert.'],
        ['Holzteile', 'Fensterläden, Dachuntersichten und Holzverkleidungen schützen und streichen.'],
        ['Balkone & Brüstungen', 'Balkonuntersichten, Brüstungen und Sockel – passend zur Fassade.'],
        ['Planung', 'Gerüst, Ablauf und Termine besprechen wir vorab mit Ihnen.'],
      ],
      info: {
        heading: 'Gut zu wissen: Farbwahl und Bewilligung',
        paragraphs: [
          'Je nach Zone und Gebäude kann eine Änderung der Fassadenfarbe bewilligungspflichtig sein – besonders in Kernzonen und bei schützenswerten Bauten. Klären Sie das vorab mit Ihrer Gemeinde bzw. in der Stadt Zürich mit dem Amt für Baubewilligungen. Wir unterstützen Sie gerne bei der Farbwahl und den nötigen Unterlagen.',
          'Fassadenarbeiten sind vor allem von Frühling bis Herbst möglich, wenn Temperatur und Feuchtigkeit stimmen. Planen Sie frühzeitig – gute Termine sind schnell vergeben.',
        ],
      },
      faq: [
        {
          q: 'Wann ist der beste Zeitpunkt für einen Fassadenanstrich?',
          a: 'Von Frühling bis Herbst, bei trockenem Wetter und genügend hohen Temperaturen. Am besten planen Sie den Anstrich einige Monate im Voraus.',
        },
        {
          q: 'Wie oft muss eine Fassade gestrichen werden?',
          a: 'Das hängt von Lage, Wetterseite, Untergrund und Farbe ab. Risse, Abplatzungen, Verfärbungen oder Algen sind ein gutes Zeichen, den Zustand prüfen zu lassen.',
        },
        {
          q: 'Braucht es ein Gerüst?',
          a: 'Bei den meisten Fassaden ja – aus Sicherheits- und Qualitätsgründen. Was nötig ist, klären wir bei der Besichtigung; die Kosten stehen in der Offerte.',
        },
        {
          q: 'Braucht eine neue Fassadenfarbe eine Bewilligung?',
          a: 'Das kommt auf Zone und Gebäude an. Fragen Sie vorab bei Ihrer Gemeinde nach – gerade bei auffälligen Farbwechseln oder geschützten Gebäuden.',
        },
      ],
    },
  },
  {
    slug: 'wohnungsabgabe',
    name: 'Wohnungsabgabe',
    short: 'Löcher schliessen und streichen vor der Übergabe – für Mieter, Vermieter und Verwaltungen.',
    items: ['Dübellöcher & Risse', 'Neuanstrich vor der Abgabe', 'Mieterwechsel'],
    image: '/images/wohnungsabgabe.webp',
    alt: 'Leere, frisch gestrichene Wohnung mit hellem Boden',
    page: {
      metaTitle: 'Malerarbeiten bei Wohnungsabgabe in Zürich | Gogi Color',
      metaDescription:
        'Wohnung streichen vor der Abgabe oder beim Mieterwechsel in Zürich: Löcher schliessen, Wände streichen, termingerecht vor der Übergabe. Für Mieter und Verwaltungen.',
      title: 'Malerarbeiten bei Wohnungsabgabe und Mieterwechsel.',
      lead: 'Zwischen Auszug und Einzug bleibt oft wenig Zeit. Wir schliessen Dübellöcher, bessern Schäden aus und streichen die Wohnung – abgestimmt auf Ihren Abgabetermin.',
      highlights: ['Auf den Abgabetermin abgestimmt', 'Für Mieter, Vermieter & Verwaltungen', 'Sauber übergeben'],
      intro: {
        heading: 'Rechtzeitig bereit für die Abnahme.',
        paragraphs: [
          'Bei der Wohnungsabgabe wird genau hingeschaut: Dübellöcher, Verfärbungen oder selbst gestrichene Wände fallen auf. Mit einer professionellen Ausbesserung oder einem Neuanstrich vermeiden Sie Diskussionen und Abzüge.',
          'Melden Sie sich am besten, sobald der Abgabetermin feststeht. Wir besichtigen die Wohnung, offerieren die nötigen Arbeiten und planen sie so, dass bis zur Übergabe alles trocken und sauber ist.',
        ],
      },
      features: [
        ['Löcher & Risse schliessen', 'Dübellöcher, Kratzer und kleine Risse werden gespachtelt und geschliffen.'],
        ['Wände & Decken streichen', 'Teil- oder Komplettanstrich, passend zum bisherigen Farbton.'],
        ['Farbige Wände zurück auf Weiss', 'Kräftige Farbtöne werden deckend überstrichen – wenn nötig mit Isoliergrund.'],
        ['Nikotin- & Wasserflecken', 'Verfärbungen werden isoliert, damit sie nicht wieder durchschlagen.'],
        ['Mieterwechsel für Verwaltungen', 'Leerwohnungen zwischen Aus- und Einzug, abgestimmt mit Hauswart und Verwaltung.'],
        ['Saubere Übergabe', 'Abdeckmaterial weg, Räume aufgeräumt – bereit für die Abnahme.'],
      ],
      info: {
        heading: 'Gut zu wissen: Wer bezahlt den Anstrich?',
        paragraphs: [
          'Für normale Abnützung zahlen Mieterinnen und Mieter nichts. Bei übermässiger Abnützung wird in der Regel nur der Restwert des Anstrichs belastet. Gemäss der paritätischen Lebensdauertabelle hat ein Dispersionsanstrich eine Lebensdauer von rund acht Jahren – ist er älter, entfallen die Kosten meist. Eine Ausnahme sind starke Nikotinverfärbungen: Hier kann der Isoliergrund trotzdem verrechnet werden.',
          'Im Zweifel lohnt sich ein Blick in den Mietvertrag oder eine Nachfrage beim Mieterverband. Diese Angaben sind keine Rechtsberatung.',
        ],
        source: ['Mieterverband: Wohnungsabgabe', 'https://www.mieterverband.ch/mietrecht/ende-der-miete/wohnungsabgabe-protokoll/'],
      },
      faq: [
        {
          q: 'Wann sollte ich mich melden?',
          a: 'Sobald der Abgabetermin feststeht – idealerweise einige Wochen vorher. Kurzfristige Anfragen prüfen wir gerne trotzdem.',
        },
        {
          q: 'Muss die Wohnung beim Auszug gestrichen werden?',
          a: 'Nicht automatisch. Entscheidend sind Alter und Zustand des Anstrichs sowie Ihr Mietvertrag. Für Dübellöcher und kleine Schäden reicht oft eine Ausbesserung.',
        },
        {
          q: 'Arbeiten Sie direkt mit der Verwaltung zusammen?',
          a: 'Gerne. Bei Mieterwechseln stimmen wir Termine und Zugang direkt mit Verwaltung und Hauswart ab.',
        },
        {
          q: 'Können farbige Wände wieder weiss gestrichen werden?',
          a: 'Ja. Kräftige Farbtöne werden mit ausreichend deckenden Anstrichen – falls nötig mit Isoliergrund – überstrichen.',
        },
      ],
    },
  },
  {
    slug: 'renovation',
    name: 'Renovation & Gipserarbeiten',
    short: 'Risse und Löcher ausbessern, Flächen spachteln und schleifen – für glatte Wände.',
    items: ['Risse & Löcher schliessen', 'Flächen spachteln', 'Schleifen & grundieren'],
    image: '/images/spachtel.webp',
    alt: 'Hände tragen mit zwei Spachteln Gips auf eine Wand auf',
    page: {
      metaTitle: 'Renovation, Spachtel- & Gipserarbeiten Zürich | Gogi Color',
      metaDescription:
        'Risse und Löcher ausbessern, Wände spachteln und schleifen, Räume renovieren: Gogi Color sorgt in Zürich für glatte Untergründe und saubere Oberflächen.',
      title: 'Renovationen, Spachtel- und Gipserarbeiten.',
      lead: 'Glatte Wände sind die Grundlage für jeden schönen Anstrich. Wir bessern Risse und Löcher aus, spachteln Flächen und frischen ganze Räume bei Umzug oder Umbau auf.',
      highlights: ['Risse & Löcher ausbessern', 'Flächen spachteln & schleifen', 'Vorbereitung und Anstrich aus einer Hand'],
      intro: {
        heading: 'Vom Untergrund bis zum fertigen Raum.',
        paragraphs: [
          'Bei einer Renovation entscheidet die Vorbereitung über das Resultat. Unebenheiten, alte Dübellöcher oder Risse zeichnen sich nach dem Streichen deutlich ab – deshalb nehmen wir uns dafür die nötige Zeit.',
          'Wir spachteln, schleifen und grundieren, bis die Oberfläche bereit ist für den Anstrich. So erhalten Sie bei einem Umbau, nach Installationsarbeiten oder vor dem Einzug Wände, die wieder wie neu aussehen.',
        ],
      },
      features: [
        ['Risse & Löcher', 'Dübellöcher, Setzrisse und Abplatzungen werden fachgerecht geschlossen.'],
        ['Flächenspachtelung', 'Wände und Decken werden gespachtelt, bis die Oberfläche glatt und gleichmässig ist.'],
        ['Schleifen & Grundieren', 'Die richtige Vorbereitung sorgt dafür, dass die neue Farbe gut haftet.'],
        ['Kleinere Gipserarbeiten', 'Ausbesserungen an Verputz und Gipsflächen, zum Beispiel nach Installationen.'],
        ['Ganze Räume renovieren', 'Ausbessern, vorbereiten und streichen – vom einzelnen Zimmer bis zur Wohnung.'],
        ['Koordination', 'Bei Umbauten stimmen wir unsere Arbeiten mit den anderen Handwerkern ab.'],
      ],
      info: {
        heading: 'Gut zu wissen: Qualitätsstufen Q1 bis Q4',
        paragraphs: [
          'Für gespachtelte Oberflächen gibt es vier Qualitätsstufen. Q2 ist der Standard für normale Wandanstriche. Wo Streiflicht auf die Wand fällt oder eine besonders glatte Oberfläche gewünscht ist, lohnt sich eine höhere Stufe. Wir besprechen mit Ihnen, welche Stufe zu Ihrem Raum passt, und halten sie in der Offerte fest.',
        ],
      },
      faq: [
        {
          q: 'Lohnt es sich, vor dem Streichen zu spachteln?',
          a: 'Bei Rissen, Löchern oder unebenen Flächen ja. Farbe kaschiert keine Unebenheiten – im Streiflicht werden sie sogar sichtbarer.',
        },
        {
          q: 'Übernehmen Sie auch kleine Ausbesserungen?',
          a: 'Ja, auch kleinere Arbeiten wie einzelne Risse oder Ausbesserungen nach Installationen. Fragen Sie einfach an.',
        },
        {
          q: 'Wie lange muss Spachtelmasse trocknen?',
          a: 'Das hängt von Schichtdicke, Material und Raumklima ab. Wir planen die Trocknungszeiten im Ablauf ein, damit das Resultat stimmt.',
        },
      ],
    },
  },
  {
    slug: 'verwaltungen',
    name: 'Verwaltungen & Gewerbe',
    short: 'Mieterwechsel, Treppenhäuser, Büros und Läden – koordiniert und termingerecht.',
    items: ['Leerwohnungen & Mieterwechsel', 'Treppenhäuser & Allgemeinflächen', 'Büros & Ladenflächen'],
    image: '/images/gewerbe.webp',
    alt: 'Heller Büroflur mit dunkel gestrichenen Wänden',
    page: {
      metaTitle: 'Maler für Verwaltungen & Gewerbe in Zürich | Gogi Color',
      metaDescription:
        'Malerarbeiten für Liegenschaftsverwaltungen, STWEG und Firmen in Zürich: Mieterwechsel, Treppenhäuser, Büros und Läden – termingerecht und koordiniert.',
      title: 'Malerarbeiten für Verwaltungen, STWEG und Gewerbe.',
      lead: 'Leerwohnungen, Treppenhäuser, Büros oder Ladenflächen: Wir arbeiten termingerecht, stimmen uns mit Hauswart und Mietern ab und halten Störungen so gering wie möglich.',
      highlights: ['Fester Ansprechpartner', 'Arbeiten in Etappen möglich', 'Termine nach Absprache'],
      intro: {
        heading: 'Ein verlässlicher Partner für Ihre Liegenschaften.',
        paragraphs: [
          'Für Verwaltungen zählt, dass Termine halten und die Kommunikation einfach ist. Bei Gogi Color haben Sie einen festen Ansprechpartner, der Besichtigung, Offerte und Ausführung begleitet und Sie über den Stand informiert.',
          'In bewohnten Liegenschaften planen wir die Arbeiten so, dass Mieterinnen und Mieter möglichst wenig eingeschränkt werden – auf Wunsch in Etappen. Bei Gewerbeflächen stimmen wir die Termine auf Ihre Öffnungszeiten ab.',
        ],
      },
      features: [
        ['Mieterwechsel & Leerwohnungen', 'Ausbessern und streichen zwischen Aus- und Einzug, rechtzeitig vor der Übergabe.'],
        ['Treppenhäuser & Allgemeinflächen', 'Treppenhäuser, Eingänge, Keller- und Waschräume in bewohnten Liegenschaften.'],
        ['Büros & Ladenflächen', 'Neuanstrich oder Auffrischung von Geschäftsräumen – mit möglichst wenig Unterbruch.'],
        ['Koordination vor Ort', 'Abstimmung mit Hauswart, Mietern und anderen Handwerkern.'],
        ['Nachvollziehbare Offerten', 'Klare Positionen, damit Sie Arbeiten einfach prüfen und freigeben können.'],
        ['Dokumentation', 'Auf Wunsch Fotos vor und nach den Arbeiten für Ihre Unterlagen.'],
      ],
      faq: [
        {
          q: 'Offerieren Sie auch mehrere Wohnungen oder Liegenschaften?',
          a: 'Ja. Gerne erstellen wir Offerten für einzelne Wohnungen, ganze Treppenhäuser oder mehrere Objekte.',
        },
        {
          q: 'Können die Arbeiten in Etappen ausgeführt werden?',
          a: 'Ja, nach Absprache – zum Beispiel stockwerkweise oder abgestimmt auf Mieterwechsel.',
        },
        {
          q: 'Wer ist unser Ansprechpartner?',
          a: 'Von der Besichtigung bis zur Abnahme haben Sie einen festen Ansprechpartner bei Gogi Color.',
        },
      ],
    },
  },
  {
    slug: 'farbberatung',
    href: '/innenmalerei#farbberatung',
    name: 'Farbberatung',
    short: 'Farbmuster direkt an Ihrer Wand – damit Farbton, Raum und Licht zusammenpassen.',
    items: ['Beratung vor Ort', 'Musterflächen an der Wand', 'Passende Farbqualität'],
    image: '/images/farbberatung.webp',
    alt: 'Farbfächer mit Pinsel auf einem Holztisch',
  },
]

export const servicePages = services.filter((service) => service.page)

export const serviceHref = (service) => service.href ?? `/${service.slug}`
