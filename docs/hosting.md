# Hosting-Empfehlung

Stand: 24. September 2026. Das Portfolio wird als statische Website exportiert.

## Empfehlung: Cloudflare Pages Free

Für dieses Portfolio ist der kostenlose Tarif eine passende dauerhafte Lösung.
Statische Dateien verursachen keine laufenden Serverkosten. Eine `pages.dev`-
Adresse genügt für den Start; eine eigene Domain kann später verbunden werden.
Die Domain kostet separat, abhängig von Endung und Registrar.

- Hosting: 0 Euro im Free-Tarif innerhalb seiner Grenzen.
- Statische Anfragen: kostenlos und unbegrenzt laut Preisübersicht.
- Builds: bis zu 500 im Monat im Free-Tarif laut Plattformgrenzen.
- Git-Anbindung: Aktualisierung nach Push in das verbundene Repository.
- Build-Kommando: `npm run build`.
- Veröffentlichungsverzeichnis: `dist/client`.
- Node-Version für den Build: 22.

Alternativ lässt sich der bereits gebaute Ordner per Direct Upload bereitstellen.
Git-Integration und Direct-Upload-Projekte sind unterschiedliche Einrichtungswege;
für regelmäßige Codeänderungen ist die Git-Integration sinnvoll.

Quellen:
- https://developers.cloudflare.com/pages/functions/pricing/
- https://developers.cloudflare.com/pages/platform/limits/
- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://developers.cloudflare.com/pages/get-started/direct-upload/

## Alternative: GitHub Pages

Kostenlos mit GitHub Free bei einem öffentlichen Repository. Für ein öffentliches
Codeportfolio eine einfache Alternative, insbesondere als `willidevac.github.io`.
Ob diese Adresse noch frei ist, wurde nicht geprüft.

Die Website verwendet absolute Assetpfade. Deshalb direkt auf einer User-Site
oder eigenen Domain veröffentlichen. Für eine Projekt-Unteradresse wie
`willidevac.github.io/portfolio/` müssten zunächst die Basispfade angepasst werden.

Quelle: https://docs.github.com/en/pages/getting-started-with-github-pages

## Bereits vorhandene Sites-Adresse

https://jayanath-willi-kasberg-portfolio.n3m3slsne0n.chatgpt.site

Diese Bereitstellung ist von einem persönlichen Cloudflare-Pages-Konto unabhängig.
Ein Wechsel zu Cloudflare Pages oder GitHub Pages ist noch nicht eingerichtet.
Die vorhandene Adresse ist öffentlich freigegeben und kann bereits geteilt werden.
Es wurde kein kostenpflichtiger Vertrag abgeschlossen und keine Domain gekauft.
