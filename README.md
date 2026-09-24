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
app/page.tsx                 Zusammensetzung der Startseite
app/layout.tsx               Sprache und Seitenmetadaten
app/globals.css              Designwerte, Layout und responsive Regeln
lib/portfolio.ts            Typisierte Projekt- und Profildaten
components/portfolio/       Kleine Komponenten mit klarer Aufgabe
components/ui/accordion.tsx Vorhandene Bibliothekskomponente für Details
public/assets/              Lokale, optimierte Bilder
scripts/serve.mjs            Lokale Vorschau der fertigen statischen Dateien
```

Das bestehende React-/TypeScript-/Vinext-Grundgerüst bleibt erhalten. Die Anwendung
zeigt nachvollziehbare Grundlagen: semantisches HTML, Daten und Darstellung
trennen, Arrays abbilden, kleine Funktionen, CSS Grid/Flexbox, responsive Layouts
und zugängliche Bedienelemente. React ist die Technik dieser Website; daraus
wird keine zusätzliche Qualifikation des Bewerbers abgeleitet.

Nur die aufklappbaren Projektdetails benötigen eine eigene Client-Komponente.
Die übrigen Abschnitte werden vorab als HTML ausgegeben. Die frühere WebMCP-
Zusatzintegration wurde entfernt, weil das Portfolio ausschließlich Inhalte zeigt.
Die mitgelieferte UI-Bibliothek ist Fremdcode und keine Eigenleistung.

## Änderungen und Prüfungen

- Texte und Projektlinks zentral in `lib/portfolio.ts` pflegen.
- Gestaltung über die Variablen am Anfang von `app/globals.css` anpassen.
- Neue Abschnitte bekommen nur dann eine eigene Komponente, wenn sie eine
  verständliche, eigenständige Aufgabe haben.
- `npm run typecheck`: TypeScript prüfen.
- `npm run lint:portfolio`: den Anwendungscode prüfen.
- `npm run format:portfolio`: Anwendungscode einheitlich formatieren.
- `npm run build`: statische Produktionsdateien erzeugen.

Die Bilder werden bereits optimiert gespeichert. `Image` verwendet deshalb
`unoptimized`: Es gibt im Betrieb keinen dynamischen Bildserver. Projektbilder
werden verzögert geladen, das Portrait bevorzugt.

## Hosting

Die Website benötigt im Betrieb keinen Node-Server, kein Benutzerkonto und keine
Datenbank. Der Inhalt von `dist/client` kann bei einem statischen Hoster liegen.
Konkrete Optionen und Kosten stehen in `HOSTING.md`.

## Inhalt und Bildquellen

- `portrait.jpg`: bereitgestelltes Profilbild aus der Bewerbungsmappe.
- `little-bolt.webp`: vorhandene Titelillustration des Spielprojekts.
- `*-preview.webp`: Screenshots der tatsächlich lokal geöffneten Projekte.
- Die Bilder in FoodGram stammen laut dessen `CREDITS.md` von Pixabay.
- Die Pokémon-Darstellungen stammen aus der dargestellten PokéAPI-Anwendung.

Die Website wurde mit KI-Unterstützung erstellt und überarbeitet. Eigene Beiträge,
Teamaufgaben und KI-Einsatz bei den dargestellten Projekten müssen getrennt davon
zutreffend beschrieben werden. Offene Inhaltsfragen stehen in `REDAKTION.md`.
