import type { Locale } from '@/types/portfolio';
import { getTranslation, getPagePath } from '@/lib/localization';
import { InternalLink } from '@/components/atoms/internal-link';

interface WordmarkProps {
  readonly name: string;
  readonly locale?: Locale;
}

export function Wordmark({ name, locale = 'de' }: WordmarkProps) {
  return (
    <InternalLink
      className="wordmark"
      href={`${getPagePath(locale)}#start`}
      aria-label={`${name} – ${getTranslation(locale).navigation.home}`}
    >
      wk<span aria-hidden="true">/</span>
    </InternalLink>
  );
}
