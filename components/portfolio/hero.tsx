import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/lib/portfolio';

export function Hero() {
  return (
    <section
      className="hero container"
      id="start"
      aria-labelledby="intro-title"
    >
      <div className="hero-copy">
        <p className="eyebrow">Webentwicklung · {profile.location}</p>
        <h1 id="intro-title">
          <span className="first-name">Jayanath</span>
          Willi
          <br />
          <span className="accent-text">Kasberg.</span>
        </h1>
        <p className="hero-description">
          Ich entwickle Webanwendungen und Browsergames. Aktuell in der
          Full-Stack-Weiterbildung — mit dem Ziel,
          {` ${profile.studyStart}`} dual Informatik zu studieren.
        </p>
        <div className="hero-links">
          <a href="#projekte" className="button button-primary">
            Projekte ansehen <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a
            className="inline-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={17} aria-hidden="true" />
          </a>
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
            Technischer Hintergrund.
            <br />
            Neue Perspektive.
          </span>
          <span className="portrait-index" aria-hidden="true">
            WK / 26
          </span>
        </figcaption>
      </figure>
      <div className="hero-baseline">
        <span>HTML &amp; CSS / JavaScript / PHP &amp; Symfony</span>
        <span>Duales Studium ab 2027</span>
      </div>
    </section>
  );
}
