import { Hero } from '@/components/organisms/hero';
import { ProjectsSection } from '@/components/organisms/projects-section';
import { AboutSection } from '@/components/organisms/about-section';
import { ContactSection } from '@/components/organisms/contact-section';
import { PortfolioTemplate } from '@/components/templates/portfolio-template';

export default function Home() {
  return (
    <PortfolioTemplate>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </PortfolioTemplate>
  );
}
