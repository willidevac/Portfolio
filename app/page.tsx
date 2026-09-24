import { SiteHeader } from '@/components/portfolio/site-header';
import { Hero } from '@/components/portfolio/hero';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { AboutSection } from '@/components/portfolio/about-section';
import { ContactSection } from '@/components/portfolio/contact-section';
import { SiteFooter } from '@/components/portfolio/site-footer';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#inhalt">
        Zum Inhalt
      </a>
      <SiteHeader />
      <main id="inhalt">
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
