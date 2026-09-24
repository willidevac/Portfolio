import type { ComponentPropsWithoutRef } from 'react';

type ExternalLinkProps = Omit<
  ComponentPropsWithoutRef<'a'>,
  'href' | 'target' | 'rel'
> & { readonly href: string };

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noreferrer">
      {children}
      <span className="sr-only"> (öffnet in einem neuen Tab)</span>
    </a>
  );
}
