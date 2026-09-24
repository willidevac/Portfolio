import type { Skill } from '@/types/portfolio';

export const skills = [
  {
    title: 'Oberflächen',
    technologies: 'HTML · CSS · JavaScript',
    example: 'Galerie, Warenkorb und API-Daten verständlich darstellen.',
  },
  {
    title: 'Anwendungslogik',
    technologies: 'ES-Module · Klassen · Canvas',
    example: 'Verantwortlichkeiten trennen und Spielzustände abbilden.',
  },
  {
    title: 'Full-Stack-Projekt',
    technologies: 'Nuxt / Vue · TypeScript · Symfony',
    example: 'Frontend und Backend im Projekt KochGoat verbinden.',
  },
] as const satisfies readonly Skill[];
