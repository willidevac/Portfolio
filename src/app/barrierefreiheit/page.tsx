import type { Metadata } from 'next';
import { InternalLink } from '@/components/atoms/internal-link';
import { PortfolioTemplate } from '@/components/templates/portfolio-template';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Barrierefreiheit | Jayanath Willi Kasberg',
  description:
    'Bedienung, Prüfstand und Kontakt bei Barrieren im IT-Portfolio.',
};

export default function AccessibilityPage() {
  return (
    <PortfolioTemplate>
      <article className="accessibility-page container">
        <p className="eyebrow">Informationen zur Nutzung</p>
        <h1>Barrierefreiheit</h1>
        <p className="lead">
          Mein Portfolio soll für möglichst viele Menschen gut lesbar und
          bedienbar sein. Die technische Orientierung sind die WCAG 2.2 auf
          Stufe AA.
        </p>
        <h2>So lässt sich die Website bedienen</h2>
        <ul>
          <li>
            Mit Tab und Umschalt + Tab zwischen Bedienelementen wechseln. Der
            erste Link führt direkt zum Hauptinhalt.
          </li>
          <li>
            Projekt-Details mit Enter oder der Leertaste öffnen und schließen.
          </li>
          <li>
            Unter „Farbschema“ zwischen Hell, Dunkel und der Systemeinstellung
            wählen. Die Auswahl wird nach Möglichkeit auf diesem Gerät
            gespeichert.
          </li>
          <li>
            Texte mit der Zoom-Funktion des Browsers vergrößern. Die Inhalte
            passen sich auch schmalen Bildschirmen an.
          </li>
          <li>
            Die Einstellung für reduzierte Bewegung im Betriebssystem wird
            berücksichtigt.
          </li>
        </ul>
        <h2>Prüfstand und Grenzen</h2>
        <p>
          Stand: 24. September 2026. Kontraste, Tastaturbedienung,
          Beschriftungen und schmale Ansichten werden bei der Entwicklung
          überprüft. Eine unabhängige vollständige Prüfung mit assistiven
          Technologien steht noch aus. Diese Information ist keine
          Konformitätszertifizierung.
        </p>
        <p>
          Projektbilder zeigen Ausschnitte anderer Anwendungen. Die wesentlichen
          Projektinformationen stehen zusätzlich als Text zur Verfügung.
          Verlinkte Projekte und GitHub sind eigenständige Websites; die hier
          beschriebenen Maßnahmen beziehen sich auf dieses Portfolio.
        </p>
        <h2>Eine Barriere melden</h2>
        <p>
          Wenn etwas nicht zugänglich ist, freue ich mich über eine Nachricht.
          Hilfreich sind die betroffene Seite, eine kurze Beschreibung und
          gegebenenfalls der verwendete Browser oder die assistive Technologie.
        </p>
        <a
          className="email-link"
          href={`mailto:${profile.email}?subject=Barriere%20im%20Portfolio`}
        >
          {profile.email}
        </a>
        <p>
          <InternalLink href="/">Zurück zum Portfolio</InternalLink>
        </p>
      </article>
    </PortfolioTemplate>
  );
}
