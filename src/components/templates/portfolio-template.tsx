import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/organisms/site-header';
import { SiteFooter } from '@/components/organisms/site-footer';

interface PortfolioTemplateProps {
  readonly children: ReactNode;
}

export function PortfolioTemplate({ children }: PortfolioTemplateProps) {
  return (
    <>
      <a className="skip-link" href="#inhalt">
        Zum Inhalt
      </a>
      <SiteHeader />
      <main id="inhalt">{children}</main>
      <SiteFooter />
    </>
  );
}
