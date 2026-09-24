import type { Locale } from '@/types/portfolio';
import { PortfolioTemplate } from '@/components/templates/portfolio-template';
import { Hero } from '@/components/organisms/hero';
import { ProjectsSection } from '@/components/organisms/projects-section';
import { AboutSection } from '@/components/organisms/about-section';
import { ContactSection } from '@/components/organisms/contact-section';

export function PortfolioPage({ locale }: { readonly locale: Locale }) {
  return (
    <PortfolioTemplate locale={locale}>
      <Hero locale={locale} />
      <ProjectsSection locale={locale} />
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
    </PortfolioTemplate>
  );
}
