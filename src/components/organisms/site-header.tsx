import { profile } from '@/data/profile';
import { Wordmark } from '@/components/atoms/wordmark';

export function SiteHeader() {
  return (
    <header className="site-header container">
      <Wordmark name={profile.name} />
      <span className="header-caption">Entwicklung &amp; Portfolio</span>
      <nav aria-label="Hauptnavigation" className="main-navigation">
        <a href="#projekte">Projekte</a>
        <a href="#ueber-mich">Über mich</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
    </header>
  );
}
