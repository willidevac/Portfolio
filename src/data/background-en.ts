import type { Experience, Skill } from '@/types/portfolio';

export const englishExperience: readonly Experience[] = [
  {
    period: '2026 — present',
    title: 'Full-stack development training',
    description: 'Developer Akademie · Expected completion May 2027',
  },
  {
    period: '2026',
    title: 'Working towards the Fachhochschulreife',
    description:
      'University of applied sciences entrance qualification · Bundeswehrfachschule Berlin · Expected December 2026',
  },
  {
    period: '2018 — 2026',
    title: 'German Armed Forces',
    description: 'Technical and organisational responsibilities',
  },
  {
    period: 'Qualified in 2017',
    title: 'Automotive mechatronics technician',
    description: 'Vocational training at Euromaster',
  },
];

export const englishSkills: readonly Skill[] = [
  {
    title: 'Interfaces',
    technologies: 'HTML · CSS · JavaScript',
    example: 'Presenting galleries, shopping baskets and API data clearly.',
  },
  {
    title: 'Application logic',
    technologies: 'ES modules · Classes · Canvas',
    example: 'Separating responsibilities and modelling game state.',
  },
  {
    title: 'Full-stack project',
    technologies: 'Nuxt / Vue · TypeScript · Symfony',
    example: 'Connecting frontend and backend in KochGoat.',
  },
];
