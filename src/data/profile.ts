import type { Profile } from '@/types/portfolio';

export const profile = {
  name: 'Jayanath Willi Kasberg',
  email: 'j.willi.kasberg@gmail.com',
  github: 'https://github.com/willidevac',
  location: 'Berlin',
  studyStart: '2027',
} as const satisfies Profile;
