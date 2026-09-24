import type { Locale } from '@/types/portfolio';
import { getTranslation } from '@/lib/localization';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { ExternalLink } from '@/components/atoms/external-link';

export function Hero({ locale = 'de' }: { readonly locale?: Locale }) {
  const copy = getTranslation(locale);
  return (
    <section
      className="hero container"
      id="start"
      aria-labelledby="intro-title"
    >
      <div className="hero-copy">
        <p className="eyebrow">
          {copy.hero.role} · {profile.location}
        </p>
        <h1 id="intro-title">
          <span className="first-name">Jayanath</span>
          Willi
          <br />
          <span className="accent-text">Kasberg.</span>
        </h1>
        <p className="hero-description">{copy.hero.description}</p>
        <div className="hero-links">
          <a href="#projekte" className="button button-primary">
            {copy.hero.projects} <ArrowDown size={18} aria-hidden="true" />
          </a>
          <ExternalLink
            locale={locale}
            className="inline-link"
            href={profile.github}
          >
            GitHub <ArrowUpRight size={17} aria-hidden="true" />
          </ExternalLink>
        </div>
      </div>
      <figure className="portrait">
        <div className="portrait-image">
          <Image
            unoptimized
            src="/assets/portrait.jpg"
            alt="Jayanath Willi Kasberg"
            width="440"
            height="440"
            fetchPriority="high"
          />
        </div>
        <figcaption>
          <span>
            {copy.hero.background}
            <br />
            {copy.hero.perspective}
          </span>
        </figcaption>
      </figure>
      <div className="hero-baseline">
        <span>HTML &amp; CSS / JavaScript / PHP &amp; Symfony</span>
        <span>{copy.hero.study}</span>
      </div>
    </section>
  );
}
