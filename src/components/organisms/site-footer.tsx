import { profile } from '@/data/profile';
import { ExternalLink } from '@/components/atoms/external-link';

export function SiteFooter() {
  return (
    <footer className="site-footer container">
      <span>© 2026 {profile.name}</span>
      <div>
        <ExternalLink href={profile.github}>GitHub</ExternalLink>
        <a href="#start">Nach oben ↑</a>
      </div>
    </footer>
  );
}
