import { InternalLink } from '@/components/atoms/internal-link';

interface WordmarkProps {
  readonly name: string;
}

export function Wordmark({ name }: WordmarkProps) {
  return (
    <InternalLink
      className="wordmark"
      href="/#start"
      aria-label={`${name} – Start`}
    >
      wk<span aria-hidden="true">/</span>
    </InternalLink>
  );
}
