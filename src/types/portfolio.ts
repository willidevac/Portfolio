export interface ProjectImage {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
}

export interface Project {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly category: string;
  readonly summary: string;
  readonly technologies: readonly string[];
  readonly image?: ProjectImage;
  readonly repository?: string;
  readonly website?: string;
  readonly details: string;
  readonly implementation?: string;
  readonly status: string;
}

export type Locale = 'de' | 'en';
export type PageKind = 'home' | 'accessibility';

export interface Profile {
  readonly name: string;
  readonly email: string;
  readonly github: string;
  readonly location: string;
  readonly studyStart: string;
}

export interface Experience {
  readonly period: string;
  readonly title: string;
  readonly description: string;
}

export interface Skill {
  readonly title: string;
  readonly technologies: string;
  readonly example: string;
}
