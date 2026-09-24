import { projects } from '@/data/projects';
import { ProjectCard } from './project-card';

export function ProjectsSection() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      className="projects-section container"
      id="projekte"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Projekte</p>
          <h2 id="projects-title">
            Ausgewählte Arbeiten
            <span className="heading-count">
              ({String(projects.length).padStart(2, '0')})
            </span>
          </h2>
        </div>
        <p>
          Von der ersten Interaktion
          <br />
          bis zur eigenen Spielwelt.
        </p>
      </div>
      {featuredProject && <ProjectCard project={featuredProject} featured />}
      <div className="project-grid">
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
