import { profile } from '@/lib/portfolio';

export function SiteFooter() {
  return (
    <footer className="site-footer container">
      <span>© 2026 {profile.name}</span>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="#start">Nach oben ↑</a>
      </div>
    </footer>
  );
}
