import type { Locale, PageKind } from '@/types/portfolio';
import { getTranslation, getPagePath } from '@/lib/localization';
import { LanguageSwitch } from '@/components/molecules/language-switch';
import { profile } from '@/data/profile';
import { Wordmark } from '@/components/atoms/wordmark';
import { ThemeSelect } from '@/components/molecules/theme-select';
import { InternalLink } from '@/components/atoms/internal-link';

export function SiteHeader({
  locale = 'de',
  page = 'home',
}: {
  readonly locale?: Locale;
  readonly page?: PageKind;
}) {
  const copy = getTranslation(locale);
  const home = getPagePath(locale);
  return (
    <header className="site-header container">
      <Wordmark locale={locale} name={profile.name} />
      <span className="header-caption">{copy.navigation.caption}</span>
      <nav aria-label={copy.navigation.label} className="main-navigation">
        <InternalLink href={`${home}#projekte`}>
          {copy.navigation.projects}
        </InternalLink>
        <InternalLink href={`${home}#ueber-mich`}>
          {copy.navigation.about}
        </InternalLink>
        <InternalLink href={`${home}#kontakt`}>
          {copy.navigation.contact}
        </InternalLink>
      </nav>
      <div className="header-preferences">
        <LanguageSwitch locale={locale} page={page} />
        <ThemeSelect locale={locale} />
      </div>
    </header>
  );
}
