import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '@/lib/portfolio';
import { ProjectDetails } from './project-details';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const className = [
    'project',
    `project-${project.id}`,
    featured ? 'project-featured' : '',
    !project.image ? 'project-text' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article
      className={className}
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      {project.image && (
        <div className="project-image">
          <Image
            unoptimized
            src={project.image.src}
            alt={project.image.alt}
            width="1265"
            height="712"
            loading="lazy"
          />
          <span className="image-label">{project.category}</span>
        </div>
      )}
      <div className="project-copy">
        <div className="project-meta">
          <span>
            {project.number} / {project.category}
          </span>
          {featured && <span className="featured-label">Im Fokus</span>}
        </div>
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="technology-list" aria-label="Verwendete Technologien">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <ProjectDetails project={project} />
        {project.repository && (
          <a
            className="repository-link"
            href={project.repository}
            target="_blank"
            rel="noreferrer"
          >
            Quellcode{' '}
            <span className="sr-only">von {project.title} auf GitHub</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
