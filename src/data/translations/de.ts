export const de = {
  navigation: {
    label: 'Hauptnavigation',
    projects: 'Projekte',
    about: 'Über mich',
    contact: 'Kontakt',
    caption: 'Entwicklung & Portfolio',
    home: 'Start',
    skip: 'Zum Inhalt',
    top: 'Zum Anfang ↑',
    language: 'Sprache',
  },
  theme: {
    label: 'Farbschema',
    system: 'System',
    light: 'Hell',
    dark: 'Dunkel',
  },
  links: {
    newTab: 'öffnet in einem neuen Tab',
    source: 'Quellcode',
    sourceFor: 'Quellcode für',
    website: 'Website ansehen',
    websiteFor: 'Website von',
  },
  hero: {
    role: 'Webentwicklung',
    description:
      'Ich entwickle Webanwendungen und Browsergames. Aktuell in der Full-Stack-Weiterbildung — mit dem Ziel, 2027 dual Informatik zu studieren.',
    projects: 'Projekte ansehen',
    background: 'Technischer Hintergrund.',
    perspective: 'Neue Perspektive.',
    study: 'Duales Studium ab 2027',
  },
  projects: {
    heading: 'Ausgewählte Arbeiten',
    introduction: ['Von der ersten Interaktion', 'bis zur eigenen Spielwelt.'],
    featured: 'Im Fokus',
    technologies: 'Verwendete Technologien',
    detailsFor: 'Details zu',
    details: 'Einblick in das Projekt',
    implementation: 'Umsetzung',
    status: 'Stand',
  },
  about: {
    heading: ['Von der Mechanik', 'zur', 'Software.'],
    paragraphs: [
      'Technik begleitet mich schon lange. Heute arbeite ich daran, sie in Code zu übersetzen.',
      'Nach meiner Ausbildung zum Kfz-Mechatroniker und acht Jahren bei der Bundeswehr qualifiziere ich mich für die Softwareentwicklung. Parallel zur Schule absolviere ich die Full-Stack-Weiterbildung der Developer Akademie.',
      '2027 möchte ich im dualen Informatikstudium weiterlernen und mein Wissen in echten Projekten einsetzen.',
    ],
    journey: 'Mein Weg',
    skills: 'Was in meinen Projekten steckt',
  },
  contact: {
    heading: ['Lernen. Entwickeln.', 'Zusammenarbeiten.'],
    email: 'E-Mail an Jayanath Willi Kasberg schreiben',
    invitation: [
      'Sie bieten ein duales Informatikstudium ab 2027 an?',
      'Ich freue mich darauf, Sie kennenzulernen.',
    ],
  },
  accessibility: {
    title: 'Barrierefreiheit',
    description:
      'Bedienung, Prüfstand und Kontakt bei Barrieren im IT-Portfolio.',
    eyebrow: 'Informationen zur Nutzung',
    introduction:
      'Mein Portfolio soll für möglichst viele Menschen gut lesbar und bedienbar sein. Die technische Orientierung sind die WCAG 2.2 auf Stufe AA.',
    usage: 'So lässt sich die Website bedienen',
    instructions: [
      'Mit Tab und Umschalt + Tab zwischen Bedienelementen wechseln. Der erste Link führt direkt zum Hauptinhalt.',
      'Projekt-Details mit Enter oder der Leertaste öffnen und schließen.',
      'Unter „Farbschema“ zwischen Hell, Dunkel und der Systemeinstellung wählen. Die Auswahl wird nach Möglichkeit auf diesem Gerät gespeichert.',
      'Über „Sprache“ zwischen Deutsch und Englisch wechseln. Jede Sprachfassung hat eine eigene Adresse und bleibt beim Neuladen erhalten.',
      'Texte mit der Zoom-Funktion des Browsers vergrößern. Die Inhalte passen sich auch schmalen Bildschirmen an.',
      'Die Einstellung für reduzierte Bewegung im Betriebssystem wird berücksichtigt.',
    ],
    review: 'Prüfstand und Grenzen',
    reviewText:
      'Stand: 24. September 2026. Kontraste, Tastaturbedienung, Beschriftungen und schmale Ansichten werden bei der Entwicklung überprüft. Eine unabhängige vollständige Prüfung mit assistiven Technologien steht noch aus. Diese Information ist keine Konformitätszertifizierung.',
    scope:
      'Projektbilder zeigen Ausschnitte anderer Anwendungen. Die wesentlichen Projektinformationen stehen zusätzlich als Text zur Verfügung. Verlinkte Projekte und GitHub sind eigenständige Websites; die hier beschriebenen Maßnahmen beziehen sich auf dieses Portfolio.',
    report: 'Eine Barriere melden',
    reportText:
      'Wenn etwas nicht zugänglich ist, freue ich mich über eine Nachricht. Hilfreich sind die betroffene Seite, eine kurze Beschreibung und gegebenenfalls der verwendete Browser oder die assistive Technologie.',
    subject: 'Barriere im Portfolio',
    back: 'Zurück zum Portfolio',
  },
  metadata: {
    title: 'Jayanath Willi Kasberg | IT-Portfolio',
    description:
      'Webanwendungen, JavaScript und browserbasierte Spiele. Das IT-Portfolio von Jayanath Willi Kasberg aus Berlin – Studienziel: duale Informatik 2027.',
  },
};

// The German copy defines the required keys; English must provide the same shape.
export type Translation = typeof de;
