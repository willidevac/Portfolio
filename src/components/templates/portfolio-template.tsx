import type { Locale, PageKind } from '@/types/portfolio';
import { getTranslation } from '@/lib/localization';
import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/organisms/site-header';
import { SiteFooter } from '@/components/organisms/site-footer';

interface PortfolioTemplateProps {
  readonly children: ReactNode;
  readonly locale?: Locale;
  readonly page?: PageKind;
}

export function PortfolioTemplate({
  children,
  locale = 'de',
  page = 'home',
}: PortfolioTemplateProps) {
  return (
    <>
      <a className="skip-link" href="#inhalt">
        {getTranslation(locale).navigation.skip}
      </a>
      <SiteHeader locale={locale} page={page} />
      <main id="inhalt" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
