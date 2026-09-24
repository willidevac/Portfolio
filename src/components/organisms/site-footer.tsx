import type { Locale } from '@/types/portfolio';
import { getTranslation, getPagePath } from '@/lib/localization';
import { profile } from '@/data/profile';
import { ExternalLink } from '@/components/atoms/external-link';
import { InternalLink } from '@/components/atoms/internal-link';

export function SiteFooter({ locale = 'de' }: { readonly locale?: Locale }) {
  const copy = getTranslation(locale);
  return (
    <footer className="site-footer container">
      <span>© 2026 {profile.name}</span>
      <div>
        <ExternalLink locale={locale} href={profile.github}>
          GitHub
        </ExternalLink>
        <InternalLink href={getPagePath(locale, 'accessibility')}>
          {copy.accessibility.title}
        </InternalLink>
        <InternalLink href={`${getPagePath(locale)}#start`}>
          {copy.navigation.top}
        </InternalLink>
      </div>
    </footer>
  );
}
