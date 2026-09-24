import { profile } from '@/data/profile';
import { ExternalLink } from '@/components/atoms/external-link';
import { InternalLink } from '@/components/atoms/internal-link';

export function SiteFooter() {
  return (
    <footer className="site-footer container">
      <span>© 2026 {profile.name}</span>
      <div>
        <ExternalLink href={profile.github}>GitHub</ExternalLink>
        <InternalLink href="/barrierefreiheit/">Barrierefreiheit</InternalLink>
        <InternalLink href="/#start">Zum Anfang ↑</InternalLink>
      </div>
    </footer>
  );
}
