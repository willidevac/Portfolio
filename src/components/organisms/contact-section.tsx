import type { Locale } from '@/types/portfolio';
import { getTranslation } from '@/lib/localization';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';

export function ContactSection({
  locale = 'de',
}: {
  readonly locale?: Locale;
}) {
  const copy = getTranslation(locale);
  return (
    <section
      className="contact-section container"
      id="kontakt"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">03 / {copy.navigation.contact}</p>
      <div className="contact-heading">
        <h2 id="contact-title">
          {copy.contact.heading[0]}
          <br />
          <span>{copy.contact.heading[1]}</span>
        </h2>
        <a
          className="contact-arrow"
          href={`mailto:${profile.email}`}
          aria-label={copy.contact.email}
        >
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="contact-bottom">
        <p>
          {copy.contact.invitation[0]}
          <br />
          {copy.contact.invitation[1]}
        </p>
        <a href={`mailto:${profile.email}`} className="email-link">
          {profile.email}
        </a>
      </div>
    </section>
  );
}
