import type { Experience } from '@/types/portfolio';

export const experience = [
  {
    period: '2026 — heute',
    title: 'Full-Stack-Weiterbildung',
    description: 'Developer Akademie · Abschluss voraussichtlich Mai 2027',
  },
  {
    period: '2026',
    title: 'Fachhochschulreife angestrebt',
    description: 'Bundeswehrfachschule Berlin · voraussichtlich Dezember 2026',
  },
  {
    period: '2018 — 2026',
    title: 'Bundeswehr',
    description: 'Technische und organisatorische Tätigkeiten',
  },
  {
    period: 'Abschluss 2017',
    title: 'Kfz-Mechatroniker',
    description: 'Ausbildung bei Euromaster',
  },
] as const satisfies readonly Experience[];
