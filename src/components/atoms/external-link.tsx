import type { Locale } from '@/types/portfolio';
import { getTranslation } from '@/lib/localization';
import type { ComponentPropsWithoutRef } from 'react';

type ExternalLinkProps = Omit<
  ComponentPropsWithoutRef<'a'>,
  'href' | 'target' | 'rel'
> & { readonly href: string; readonly locale?: Locale };

export function ExternalLink({
  children,
  locale = 'de',
  ...props
}: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noreferrer">
      {children}
      <span className="sr-only"> ({getTranslation(locale).links.newTab})</span>
    </a>
  );
}
