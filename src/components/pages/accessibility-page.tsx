import type { Locale } from '@/types/portfolio';
import { InternalLink } from '@/components/atoms/internal-link';
import { PortfolioTemplate } from '@/components/templates/portfolio-template';
import { getTranslation, getPagePath } from '@/lib/localization';
import { profile } from '@/data/profile';

export function AccessibilityPage({ locale }: { readonly locale: Locale }) {
  const copy = getTranslation(locale).accessibility;
  return (
    <PortfolioTemplate locale={locale} page="accessibility">
      <article className="accessibility-page container">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="lead">{copy.introduction}</p>
        <h2>{copy.usage}</h2>
        <ul>
          {copy.instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ul>
        <h2>{copy.review}</h2>
        <p>{copy.reviewText}</p>
        <p>{copy.scope}</p>
        <h2>{copy.report}</h2>
        <p>{copy.reportText}</p>
        <a
          className="email-link"
          href={`mailto:${profile.email}?subject=${encodeURIComponent(copy.subject)}`}
        >
          {profile.email}
        </a>
        <p>
          <InternalLink href={getPagePath(locale)}>{copy.back}</InternalLink>
        </p>
      </article>
    </PortfolioTemplate>
  );
}
