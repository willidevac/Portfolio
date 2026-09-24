import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';

export function ContactSection() {
  return (
    <section
      className="contact-section container"
      id="kontakt"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">03 / Kontakt</p>
      <div className="contact-heading">
        <h2 id="contact-title">
          Lernen. Entwickeln.
          <br />
          <span>Zusammenarbeiten.</span>
        </h2>
        <a
          className="contact-arrow"
          href={`mailto:${profile.email}`}
          aria-label="E-Mail an Jayanath Willi Kasberg schreiben"
        >
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="contact-bottom">
        <p>
          Sie bieten ein duales Informatikstudium ab 2027 an?
          <br />
          Ich freue mich darauf, Sie kennenzulernen.
        </p>
        <a href={`mailto:${profile.email}`} className="email-link">
          {profile.email}
        </a>
      </div>
    </section>
  );
}
