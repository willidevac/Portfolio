import { profile } from '@/lib/portfolio';

export function SiteHeader() {
  return (
    <header className="site-header container">
      <a
        className="wordmark"
        href="#start"
        aria-label={`${profile.name} – Start`}
      >
        wk<span aria-hidden="true">/</span>
      </a>
      <span className="header-caption">Entwicklung &amp; Portfolio</span>
      <nav aria-label="Hauptnavigation" className="main-navigation">
        <a href="#projekte">Projekte</a>
        <a href="#ueber-mich">Über mich</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
    </header>
  );
}
