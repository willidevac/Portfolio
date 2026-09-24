import type { ComponentPropsWithoutRef } from 'react';

type InternalLinkProps = ComponentPropsWithoutRef<'a'> & {
  readonly href: string;
};

// Native navigation also works without JavaScript on the static hosting target.
export function InternalLink({ children, ...props }: InternalLinkProps) {
  return <a {...props}>{children}</a>;
}
