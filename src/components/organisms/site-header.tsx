import { profile } from '@/data/profile';
import { Wordmark } from '@/components/atoms/wordmark';
import { ThemeSelect } from '@/components/molecules/theme-select';
import { InternalLink } from '@/components/atoms/internal-link';

export function SiteHeader() {
  return (
    <header className="site-header container">
      <Wordmark name={profile.name} />
      <span className="header-caption">Entwicklung &amp; Portfolio</span>
      <nav aria-label="Hauptnavigation" className="main-navigation">
        <InternalLink href="/#projekte">Projekte</InternalLink>
        <InternalLink href="/#ueber-mich">Über mich</InternalLink>
        <InternalLink href="/#kontakt">Kontakt</InternalLink>
      </nav>
      <ThemeSelect />
    </header>
  );
}
