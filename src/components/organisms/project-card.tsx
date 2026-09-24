import type { Locale } from '@/types/portfolio';
import { getTranslation } from '@/lib/localization';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '@/types/portfolio';
import { ProjectDetails } from '@/components/molecules/project-details';
import { TechnologyList } from '@/components/molecules/technology-list';
import { ExternalLink } from '@/components/atoms/external-link';

interface ProjectCardProps {
  readonly project: Project;
  readonly featured?: boolean;
  readonly locale?: Locale;
}

export function ProjectCard({
  project,
  featured = false,
  locale = 'de',
}: ProjectCardProps) {
  const copy = getTranslation(locale);
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
          {featured && (
            <span className="featured-label">{copy.projects.featured}</span>
          )}
        </div>
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <TechnologyList locale={locale} technologies={project.technologies} />
        <ProjectDetails locale={locale} project={project} />
        {project.repository && (
          <ExternalLink
            locale={locale}
            className="repository-link"
            href={project.repository}
          >
            {copy.links.source}{' '}
            <span className="sr-only">{project.title} (GitHub)</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </ExternalLink>
        )}
        {project.website && (
          <ExternalLink
            locale={locale}
            className="repository-link"
            href={project.website}
          >
            <span>
              {copy.links.website}
              <span className="sr-only">: {project.title}</span>
            </span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </ExternalLink>
        )}
      </div>
    </article>
  );
}
