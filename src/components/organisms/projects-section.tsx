import type { Locale } from '@/types/portfolio';
import { getTranslation } from '@/lib/localization';
import { englishProjects } from '@/data/projects-en';
import { projects } from '@/data/projects';
import { ProjectCard } from './project-card';

export function ProjectsSection({
  locale = 'de',
}: {
  readonly locale?: Locale;
}) {
  const copy = getTranslation(locale);
  const localizedProjects = locale === 'en' ? englishProjects : projects;
  const [featuredProject, ...otherProjects] = localizedProjects;

  return (
    <section
      className="projects-section container"
      id="projekte"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / {copy.navigation.projects}</p>
          <h2 id="projects-title">
            {copy.projects.heading}
            <span className="heading-count">
              ({String(localizedProjects.length).padStart(2, '0')})
            </span>
          </h2>
        </div>
        <p>
          {copy.projects.introduction[0]}
          <br />
          {copy.projects.introduction[1]}
        </p>
      </div>
      {featuredProject && (
        <ProjectCard locale={locale} project={featuredProject} featured />
      )}
      <div className="project-grid">
        {otherProjects.map((project) => (
          <ProjectCard locale={locale} key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
