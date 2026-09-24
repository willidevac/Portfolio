import type { Project } from '@/types/portfolio';

export const projects: readonly Project[] = [
  {
    id: 'little-bolt',
    number: '01',
    title: 'Little Bolt, Big Moon',
    category: 'Browsergame',
    summary:
      'Ein Roboter, ein gewaltiger Turm und der Weg zum Mond. Ein vertikaler Platformer mit aufladbaren Sprüngen und einer eigenen Spielwelt.',
    technologies: ['JavaScript', 'HTML5 Canvas', 'ES-Module'],
    image: {
      src: '/assets/little-bolt.webp',
      alt: 'Titelillustration von Little Bolt, Big Moon mit dem Roboter vor einer nächtlichen Spielwelt',
      caption: 'Original-Titelillustration aus dem Projekt',
    },
    repository: 'https://github.com/willidevac/Little-Bolt-Big-Moon',
    details:
      'HTML5 Canvas zeichnet die Spielwelt. Klassen und native JavaScript-Module strukturieren Spiellogik und Zustände. Einstellungen und lokale Rekorde werden im Browser gespeichert.',
    implementation:
      'Eingabe, Bewegung und Spielzustände greifen ineinander. Die dokumentierte Architektur teilt diese Verantwortlichkeiten auf; eine automatisierte Prüfsuite begleitet die Entwicklung.',
    status: 'Weiterbildungsprojekt mit dokumentiertem Tutorial und Prüfsuite.',
  },
  {
    id: 'pokedex',
    number: '02',
    title: 'Pokédex',
    category: 'API-Anbindung',
    summary:
      'Pokémon suchen, Eigenschaften vergleichen und Details entdecken. Eine Oberfläche für Daten aus der PokéAPI.',
    technologies: ['JavaScript', 'REST-API', 'HTML / CSS'],
    image: {
      src: '/assets/pokedex-preview.webp',
      alt: 'Pokédex mit Suchfeld und Pokémon-Karten in der echten Anwendung',
      caption: 'Screenshot der lokalen Anwendung · September 2026',
    },
    repository: 'https://github.com/willidevac/pokedex',
    details:
      'Asynchrone Abfragen laden Listen und Detaildaten aus der PokéAPI. Map-Caches halten bereits geladene Antworten bereit. Suche und Detailansichten erschließen den Datenbestand.',
    implementation:
      'Promise.allSettled verarbeitet mehrere Detailabfragen unabhängig voneinander. HTTP-Fehler werden geprüft; bereits geladene Daten werden wiederverwendet.',
    status: 'Frontend-Projekt mit Such- und Detailansichten.',
  },
  {
    id: 'bestellapp',
    number: '03',
    title: 'Neo Neko Ramen',
    category: 'Bestellapp',
    summary:
      'Gerichte auswählen, Mengen anpassen und den Warenkorb im Blick behalten. Eine Bestelloberfläche für ein fiktives Ramen-Restaurant.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: {
      src: '/assets/bestellapp-preview.webp',
      alt: 'Neo Neko Ramen: echte Restaurant- und Bestelloberfläche',
      caption: 'Screenshot der lokalen Anwendung · September 2026',
    },
    repository: 'https://github.com/willidevac/bestellapp',
    details:
      'Menüdarstellung, Warenkorbsteuerung und Rückmeldungen liegen in getrennten JavaScript-Dateien. Gerichte lassen sich hinzufügen, reduzieren und entfernen.',
    implementation:
      'Warenkorbsteuerung und Darstellung sind voneinander getrennt. Gemeinsame Ereignisbehandlung verarbeitet die Aktionen an den Gerichten.',
    status:
      'Frontend-Demo mit Bestellfeedback. Keine echte Bestell- oder Zahlungsabwicklung.',
  },
  {
    id: 'fotogram',
    number: '04',
    title: 'FoodGram',
    category: 'Fotogram · Bildergalerie',
    summary:
      'Eine Fotogalerie rund ums Essen. Mit vergrößerter Bildansicht und Navigation per Maus oder Tastatur.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: {
      src: '/assets/fotogram-preview.webp',
      alt: 'FoodGram: echte Bildergalerie mit Essensfotos',
      caption: 'Screenshot der lokalen Anwendung · September 2026',
    },
    repository: 'https://github.com/willidevac/fotogram-project',
    details:
      'Die Galerie öffnet Bilder in einer Lightbox. Pfeiltasten wechseln zum nächsten oder vorherigen Bild, Escape schließt die Ansicht.',
    implementation:
      'Maus- und Tastatureingaben verwenden denselben Bildindex und gemeinsame Funktionen. Die Navigation springt am Ende wieder zum Anfang.',
    status: 'Frontend-Projekt mit Galerie und Lightbox.',
  },
  {
    id: 'join',
    number: '05',
    title: 'JOIN',
    category: 'Task-Management',
    summary:
      'Eine Webanwendung zur Organisation von Aufgaben und Projektfortschritt, entstanden im Rahmen meiner Weiterbildung.',
    technologies: ['JavaScript', 'HTML / CSS', 'Firebase'],
    image: {
      src: '/assets/join-preview.webp',
      alt: 'Join 360: Übersicht mit Aufgabenstatus, Prioritäten und nächster Frist im Gastzugang',
      caption:
        'Original-Screenshot der Summary-Ansicht aus dem JOIN-Repository',
    },
    repository: 'https://github.com/willidevac/Join',
    details:
      'Ein gemeinsames Weiterbildungsprojekt mit Kanban-Board, Aufgabenverwaltung, Unteraufgaben und Kontakten. Die Übersicht zeigt Aufgabenstatus, dringende Aufgaben und die nächste Frist. Firebase übernimmt Anmeldung und Datenspeicherung.',
    implementation:
      'Die Oberfläche folgt Atomic Design. JavaScript-Dateien trennen Darstellung, Validierung, Datenverwaltung und Firebase-Anbindung. Die konkrete Zuordnung meiner Beiträge innerhalb des Teams wird ergänzt.',
    status:
      'Gruppenprojekt mit dokumentiertem Gastzugang und automatisierten Tests. Eigene Teambeiträge werden noch einzeln dokumentiert.',
  },
  {
    id: 'kochgoat',
    number: '06',
    title: 'KochGoat',
    website: 'https://kochgoat.com',
    image: {
      src: '/assets/kochgoat-preview.webp',
      alt: 'KochGoat-Marketingwebsite mit Einführung zum Kochassistenten und Beta-Programm',
      caption:
        'Screenshot der veröffentlichten Marketingwebsite kochgoat.com · September 2026',
    },
    category: 'Eigene Produktidee · in Entwicklung',
    summary:
      'Ein Kochassistent für den Alltag: Rezeptideen, Wochenplanung und Einkaufslisten, mit Zico als geplanter Begleitung Schritt für Schritt.',
    technologies: ['Nuxt / Vue', 'TypeScript', 'Symfony'],
    details:
      'Die öffentliche Marketingwebsite stellt das Konzept und das Beta-Programm vor. Zum Projekt gehören außerdem ein Nuxt-Frontend und ein Symfony-Backend mit API Platform. Die Website weist ausdrücklich darauf hin, dass die App noch in Entwicklung ist.',
    implementation:
      'Frontend, Backend und Marketing sind getrennte Projektbereiche. Die nächste Aufgabe ist, daraus klar abgegrenzte, vorzeigbare Produktfunktionen zu entwickeln.',
    status:
      'Marketingwebsite online; die App und die beworbenen Produktfunktionen sind noch in Entwicklung.',
  },
];
