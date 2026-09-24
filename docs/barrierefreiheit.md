# Barrierefreiheit: Umsetzung und Prüfstand

Stand: 24. September 2026. Technisches Ziel sind WCAG 2.2 AA. Dieses Dokument
ist ein Entwicklungsnachweis, keine vollständige Konformitätsbewertung oder
rechtliche Zertifizierung.

## Umsetzung

- Deutsche Dokumentsprache, semantische Bereiche und abgestufte Überschriften.
- Sprunglink zum fokussierbaren Hauptinhalt und sichtbare Tastaturfokusse.
- Beschriftete native Farbschema-Auswahl: System, Hell und Dunkel.
- Aufklappbare Projektdetails mit zugänglichem Namen und Zustandsanzeige.
- Textalternativen für Bilder; wesentliche Projektinformationen zusätzlich als Text.
- Kontrastreiche Farbpaletten, ausreichend große Bedienelemente und responsive Inhalte.
- Betriebssystemeinstellung für reduzierte Bewegung und Fokus bei erzwungenen Farben.
- Eigene Informationsseite mit Bedienhinweisen, Prüfgrenzen und E-Mail-Kontakt.
- Deutsche und englische Seiten mit passendem `html lang`, übersetzten
  Alternativtexten und Bedienelementen. Sprachlinks sind per Tastatur bedienbar
  und weisen die aktuelle Sprache über `aria-current` aus.

## Geprüft

- TypeScript, Lint und Produktionsbuild.
- Automatisiert: gespeicherte/ungültige Farbschemata sowie blockierter Browserspeicher.
- Automatisiert: definierte Textfarben mindestens 4,5:1 auf ihren Flächen,
  Bedienelement-Ränder mindestens 3:1, einschließlich beider Farbschemata.
- Browser: helle und dunkle Ansicht, gespeicherte Auswahl nach Neuladen,
  Projektbilder und originale Portraitfarben, JOIN-Details mit Tastatur.
- Browser: schmale Ansicht bei 320 CSS-Pixeln ohne horizontales Überlaufen
  und Desktopansicht bei 1440 CSS-Pixeln.
- Browser: native Navigation zur Informationsseite und zurück.
- Sprachergänzung: fünf Exporttests für alle vier Sprachrouten, gegenseitige
  Sprachlinks und vorhandene Projektbilder. Im Browser Wechsel DE → EN,
  englische Informationsseite → deutsche Informationsseite, Theme-Erhalt und
  KochGoat-Details mit Tastatur geprüft. Die ergänzte Ansicht wurde bei 320,
  459 und 1280 CSS-Pixeln ohne horizontales Überlaufen kontrolliert.

Die Farbtests prüfen die definierten Paletten, nicht automatisch jedes mögliche
gerenderte Element. Eine vollständige Prüfung sämtlicher WCAG-Erfolgskriterien,
Screenreader-Prüfung und unabhängige Prüfung mit assistiven Technologien stehen
noch aus. Verlinkte Anwendungen sind nicht Bestandteil dieser Prüfung.

## Bezug zu EU-Anforderungen

Ein persönliches Portfolio wird durch diese Maßnahmen nicht automatisch als
rechtlich konform zertifiziert. Die Anwendbarkeit des deutschen BFSG hängt vom
konkreten Angebot ab; es gilt nicht pauschal für jede private Website.

- [WCAG 2.2 beim W3C](https://www.w3.org/TR/WCAG22/)
- [Bundesfachstelle Barrierefreiheit: FAQ zum elektronischen Geschäftsverkehr](https://www.bundesfachstelle-barrierefreiheit.de/DE/Barrierefreiheitsstaerkungsgesetz/FAQ-elektronischer-Geschaeftsverkehr/faq-elektronischer-Geschaeftsverkehr_node)
