import type { Locale } from '@/types/portfolio';
import { getTranslation } from '@/lib/localization';
interface TechnologyListProps {
  readonly locale?: Locale;
  readonly technologies: readonly string[];
}

export function TechnologyList({
  technologies,
  locale = 'de',
}: TechnologyListProps) {
  return (
    <ul
      className="technology-list"
      aria-label={getTranslation(locale).projects.technologies}
    >
      {technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}
