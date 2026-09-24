interface WordmarkProps {
  readonly name: string;
}

export function Wordmark({ name }: WordmarkProps) {
  return (
    <a className="wordmark" href="#start" aria-label={`${name} – Start`}>
      wk<span aria-hidden="true">/</span>
    </a>
  );
}
