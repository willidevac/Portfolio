# Jayanath Willi Kasberg – IT-Portfolio

Persönliches Bewerbungsportfolio mit sechs Projekten, technischen Einblicken,
Werdegang und E-Mail-Kontakt. Päplern ist bewusst nicht Bestandteil der Website.

## Lokal starten

Node.js 22 LTS verwenden, dann:

```sh
npm ci
npm run dev
```

Produktionsfassung bauen und lokal ansehen:

```sh
npm run build
npm start
```

Die fertige Website liegt in `dist/client`. Der lokale Vorschau-Server bindet
ausschließlich an `127.0.0.1:4173`. Node 24 kann unter Windows beim Beenden des
Prerender-Builds mit `UV_HANDLE_CLOSING` abbrechen; Node 22 wurde hier erfolgreich
verwendet. `.nvmrc` hält diese Entwicklungsentscheidung fest.

## Aufbau

```text
src/
  app/                      Deutsche/englische Routen, Root-Layouts und globale Gestaltung
  components/
    atoms/                  Einzelne UI-Bausteine: Links, Wordmark
    molecules/              Details, Technologien und Farbschema-Auswahl
    organisms/              Projektkarten und vollständige Seitenbereiche
    templates/              Seitenrahmen mit Header, Hauptinhalt und Footer
    pages/                  Gemeinsame Seiten für beide Sprachen
  data/                     Profil, Projekte, Werdegang und Kenntnisse
  types/                    Gemeinsame TypeScript-Datenmodelle
  lib/                      Kleine technische Hilfsfunktionen
  styles/                   Farbvariablen für Hell, Dunkel und Systemeinstellung
public/assets/              Lokale, optimierte Bilder
docs/                       Architektur, Hosting und offene Inhaltsfragen
scripts/                    Statische Ausgabe vorbereiten und lokal ansehen
tests/                      Theme-Verhalten und Farbkontraste prüfen
```

Die Komponenten folgen Atomic Design. `components/pages` setzt die Seiten
zusammen; die kleinen Routen in `app/(de)` und `app/(en)` wählen die Sprache.
Beide Sprachfassungen verwenden dieselben Komponenten und dasselbe Template.
Die Zuordnung und Importregeln stehen in
[`docs/architektur.md`](docs/architektur.md).

Das bestehende React-/TypeScript-/Vinext-Grundgerüst bleibt erhalten. Die Anwendung
zeigt nachvollziehbare Grundlagen: semantisches HTML, Daten und Darstellung
trennen, Arrays abbilden, kleine Funktionen, CSS Grid/Flexbox, responsive Layouts
und zugängliche Bedienelemente. React ist die Technik dieser Website; daraus
wird keine zusätzliche Qualifikation des Bewerbers abgeleitet.

Projektdetails und Farbschema-Auswahl bilden die eigenen Client-Grenzen.
Die übrigen Abschnitte werden vorab als HTML ausgegeben. Die frühere WebMCP-
Zusatzintegration wurde entfernt, weil das Portfolio ausschließlich Inhalte zeigt.
Der verwendete Accordion-Baustein stammt aus der mitgelieferten UI-Vorlage.
Die übrigen unbenutzten UI-Dateien, der unbenutzte Mobile-Hook und neun nicht
mehr benötigte direkte UI-Abhängigkeiten wurden entfernt.

## Änderungen und Prüfungen

- Texte und Projektlinks in den thematisch getrennten Dateien in `src/data` pflegen.
- Gemeinsame Datenmodelle in `src/types/portfolio.ts` pflegen; Props bleiben bei ihrer Komponente.
- Farben in `src/styles/themes.css`, Layout in `src/app/globals.css` anpassen.
- Neue Abschnitte bekommen nur dann eine eigene Komponente, wenn sie eine
  verständliche, eigenständige Aufgabe haben.
- `npm run typecheck`: TypeScript prüfen.
- `npm test`: Theme-Initialisierung und Kontrastverhältnisse prüfen.
- `npm run lint:portfolio`: den Anwendungscode prüfen.
- `npm run format:portfolio`: Anwendungscode einheitlich formatieren.
- `npm run build`: statische Produktionsdateien erzeugen.
- `npm run test:export`: nach dem Build Dokumentsprachen, Sprachlinks und Projektbilder prüfen.

Deutsch ist unter `/`, Englisch unter `/en/` erreichbar. Die Sprachauswahl
verlinkt jeweils die entsprechende Seite. Damit bleiben Sprache und Navigation
ohne zusätzlichen Browserspeicher oder JavaScript erhalten. Texte, Bildbeschreibungen,
Bedienelemente und Metadaten sind übersetzt; Eigennamen bleiben unverändert.
Oberflächentexte liegen in `src/data/translations`, Projektübersetzungen in
`src/data/projects-en.ts`. Gemeinsame Bildpfade, IDs und Projektlinks werden übernommen.

Das Farbschema folgt zunächst dem Betriebssystem. Eine bewusste Auswahl wird
unter `portfolio-theme` lokal gespeichert; blockierter Browserspeicher verhindert
die Bedienung nicht. Die technische Prüfung und ihre Grenzen stehen in
[`docs/barrierefreiheit.md`](docs/barrierefreiheit.md).

Die Bilder werden bereits optimiert gespeichert. `Image` verwendet deshalb
`unoptimized`: Es gibt im Betrieb keinen dynamischen Bildserver. Projektbilder
werden verzögert geladen, das Portrait bevorzugt.

## Hosting

Die Website benötigt im Betrieb keinen Node-Server, kein Benutzerkonto und keine
Datenbank. Der Inhalt von `dist/client` kann bei einem statischen Hoster liegen.
Konkrete Optionen und Kosten stehen in [`docs/hosting.md`](docs/hosting.md).

## Inhalt und Bildquellen

- `portrait.jpg`: bereitgestelltes Profilbild aus der Bewerbungsmappe.
- `little-bolt.webp`: vorhandene Titelillustration des Spielprojekts.
- `*-preview.webp`: Screenshots der tatsächlich lokal geöffneten Projekte.
- `join-preview.webp`: optimierte Fassung des vorhandenen JOIN-Screenshots
  aus `components/assets/img/icons/preview.png` des Projekt-Repositories.
- `kochgoat-preview.webp`: echter Screenshot der veröffentlichten
  Marketingwebsite [kochgoat.com](https://kochgoat.com), September 2026.
- Die Bilder in FoodGram stammen laut dessen `CREDITS.md` von Pixabay.
- Die Pokémon-Darstellungen stammen aus der dargestellten PokéAPI-Anwendung.

Die Website wurde mit KI-Unterstützung erstellt und überarbeitet. Eigene Beiträge,
Teamaufgaben und KI-Einsatz bei den dargestellten Projekten müssen getrennt davon
zutreffend beschrieben werden. Offene Inhaltsfragen stehen in [`docs/redaktion.md`](docs/redaktion.md).
