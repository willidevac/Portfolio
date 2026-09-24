'use client';
import type { Locale } from '@/types/portfolio';
import { getTranslation } from '@/lib/localization';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/molecules/accordion';
import type { Project } from '@/types/portfolio';

interface ProjectDetailsProps {
  readonly project: Project;
  readonly locale?: Locale;
}

export function ProjectDetails({
  project,
  locale = 'de',
}: ProjectDetailsProps) {
  const copy = getTranslation(locale);
  return (
    <Accordion className="project-accordion">
      <AccordionItem value={project.id}>
        <AccordionTrigger
          className="project-trigger"
          aria-label={`${copy.projects.detailsFor} ${project.title}`}
        >
          {copy.projects.details}
        </AccordionTrigger>
        <AccordionContent className="project-details">
          <p>{project.details}</p>
          {project.implementation && (
            <>
              <h4>{copy.projects.implementation}</h4>
              <p>{project.implementation}</p>
            </>
          )}
          <h4>{copy.projects.status}</h4>
          <p>{project.status}</p>
          {project.image && (
            <p className="image-credit">{project.image.caption}</p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
