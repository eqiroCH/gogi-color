// Typografische Feinheiten für Texte aus den Content-Dateien (Inhalt bleibt gleich):
// Gedankenstrich nie am Zeilenanfang – geschütztes Leerzeichen davor.
export const typo = (text) => (typeof text === 'string' ? text.replace(/ – /g, ' – ') : text)
