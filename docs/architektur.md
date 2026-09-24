# Architektur des Portfolios

Atomic Design ordnet UI-Bausteine nach ihrer Verantwortung. TypeScript beschreibt
zusätzlich die Daten und Schnittstellen. Das sind zwei ergänzende Entscheidungen.

## Ebenen

| Ebene | Aufgabe | Beispiele |
| --- | --- | --- |
| Atoms | Einzelne grundlegende UI-Elemente | `ExternalLink`, `Wordmark` |
| Molecules | Kleine zusammengesetzte Elemente mit einer Aufgabe | `TechnologyList`, `Accordion`, `ProjectDetails` |
| Organisms | Eigenständige Inhaltsbereiche aus mehreren Bausteinen | `ProjectCard`, `ProjectsSection`, `Hero` |
| Templates | Übergreifender Seitenrahmen | `PortfolioTemplate` mit Header, Inhaltsbereich und Footer |
| Pages | Konkrete Zusammenstellung einer Seite | `src/app/page.tsx` |

`src/app/layout.tsx` ist das technische Root-Layout mit Sprache und Metadaten.
Es ist vom gestalterischen `PortfolioTemplate` getrennt. Ein zusätzlicher
`components/pages`-Ordner ist deshalb nicht nötig.

## Abhängigkeiten

- Die Seite setzt Templates und Organisms zusammen.
- Templates verwenden Organisms und nehmen den Seiteninhalt als `children` entgegen.
- Organisms kombinieren Molecules und Atoms; ein Abschnitt darf mehrere Organisms enthalten.
- Molecules verwenden Atoms oder kleinere Molecules; sie importieren keine Organisms.
- Atoms kennen keine konkreten Projekte oder Profildaten.
- `data` importiert ausschließlich Datenmodelle über `import type`.
- `types` enthält keine React-Komponenten, Laufzeitlogik oder Inhalte.
- `lib` enthält technische Hilfsfunktionen ohne Abhängigkeit zu Komponenten.

Imports verwenden `@/` als Alias für `src/`. Direkte Dateiimporte machen sichtbar,
wo ein Baustein liegt. Zusätzliche Barrel-Dateien und leere Platzhalterordner
werden nicht angelegt. Eine eigene Untermappe je Komponente wird erst sinnvoll,
wenn mehrere zugehörige Dateien entstehen.

## Typisierung und Daten

`Project`, `ProjectImage`, `Profile`, `Experience` und `Skill` liegen gemeinsam in
`src/types/portfolio.ts`, weil sie denselben fachlichen Bereich beschreiben.
Komponentenspezifische Props stehen direkt bei der jeweiligen Komponente.
Readonly-Felder verhindern versehentliche Änderungen an den Portfolio-Daten.
`strict` und `noUncheckedIndexedAccess` sind aktiviert; auch ein leerer
Projektbestand wird beim Zugriff auf das erste Element berücksichtigt.

Die Inhalte liegen nach Thema getrennt in `src/data`. Kleine UI-Bausteine bekommen
ihre Daten über Props. Abschnitte dürfen ihre statischen Inhalte direkt laden;
ein globaler Store oder Context ist für dieses Portfolio nicht erforderlich.

## Client und Gestaltung

`ProjectDetails` markiert die interaktive Client-Grenze. Die übrigen eigenen
Komponenten werden als statisches HTML vorgerendert. Der darunter verwendete
Accordion basiert auf Base UI und der vorhandenen Shadcn-Vorlage.

Die globale Gestaltung bleibt in `src/app/globals.css`: Designvariablen, klar
benannte Komponentenklassen und responsive Regeln. Die Strukturänderung benötigt
keinen Wechsel des CSS-Systems. Statische Bilder bleiben unter `public/assets`.

## Prüfen

```sh
npm run typecheck
npm run lint
npm run build
```

Der statische Export liegt in `dist/client`. `npm start` öffnet dafür einen
lokalen Server auf `http://127.0.0.1:4173`. Nach Änderungen an der Struktur müssen
zusätzlich Bilder, Navigation und das Öffnen der Projekt-Details in dieser
Produktionsausgabe geprüft werden.
