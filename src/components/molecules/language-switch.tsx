import type { Locale, PageKind } from '@/types/portfolio';
import { InternalLink } from '@/components/atoms/internal-link';
import { getPagePath, getTranslation } from '@/lib/localization';

interface LanguageSwitchProps {
  readonly locale: Locale;
  readonly page: PageKind;
}

export function LanguageSwitch({ locale, page }: LanguageSwitchProps) {
  return (
    <nav
      className="language-switch"
      aria-label={getTranslation(locale).navigation.language}
    >
      <InternalLink
        href={getPagePath('de', page)}
        hrefLang="de"
        lang="de"
        aria-label="Deutsch"
        aria-current={locale === 'de' ? 'page' : undefined}
      >
        DE
      </InternalLink>
      <InternalLink
        href={getPagePath('en', page)}
        hrefLang="en"
        lang="en"
        aria-label="English"
        aria-current={locale === 'en' ? 'page' : undefined}
      >
        EN
      </InternalLink>
    </nav>
  );
}
