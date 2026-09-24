'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Project } from '@/lib/portfolio';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <Accordion className="project-accordion">
      <AccordionItem value={project.id}>
        <AccordionTrigger
          className="project-trigger"
          aria-label={`Details zu ${project.title}`}
        >
          Einblick in das Projekt
        </AccordionTrigger>
        <AccordionContent className="project-details">
          <p>{project.details}</p>
          {project.implementation && (
            <>
              <h4>Umsetzung</h4>
              <p>{project.implementation}</p>
            </>
          )}
          <h4>Stand</h4>
          <p>{project.status}</p>
          {project.image && (
            <p className="image-credit">{project.image.caption}</p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
