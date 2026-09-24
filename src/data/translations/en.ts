import type { Translation } from './de';

export const en = {
  navigation: {
    label: 'Main navigation',
    projects: 'Projects',
    about: 'About me',
    contact: 'Contact',
    caption: 'Development & Portfolio',
    home: 'Home',
    skip: 'Skip to content',
    top: 'Back to top ↑',
    language: 'Language',
  },
  theme: { label: 'Theme', system: 'System', light: 'Light', dark: 'Dark' },
  links: {
    newTab: 'opens in a new tab',
    source: 'Source code',
    sourceFor: 'Source code for',
    website: 'Visit website',
    websiteFor: 'Website for',
  },
  hero: {
    role: 'Web development',
    description:
      'I build web applications and browser games. I am currently training in full-stack development, aiming to start a work-integrated computer science degree in 2027.',
    projects: 'Explore projects',
    background: 'Technical background.',
    perspective: 'A new perspective.',
    study: 'Work-integrated degree from 2027',
  },
  projects: {
    heading: 'Selected work',
    introduction: ['From the first interaction', 'to a game world of my own.'],
    featured: 'Featured',
    technologies: 'Technologies used',
    detailsFor: 'Details about',
    details: 'Inside the project',
    implementation: 'Implementation',
    status: 'Status',
  },
  about: {
    heading: ['From mechanics', 'to', 'software.'],
    paragraphs: [
      'Technology has been part of my life for a long time. Now I am learning to express it through code.',
      'After training as an automotive mechatronics technician and spending eight years in the German Armed Forces, I am preparing for a career in software development. Alongside school, I am completing the full-stack programme at Developer Akademie.',
      'In 2027, I want to continue learning through a work-integrated computer science degree and apply my skills to real projects.',
    ],
    journey: 'My background',
    skills: 'The skills behind my projects',
  },
  contact: {
    heading: ['Learn. Develop.', 'Work together.'],
    email: 'Email Jayanath Willi Kasberg',
    invitation: [
      'Do you offer a work-integrated computer science degree starting in 2027?',
      'I would love to hear from you.',
    ],
  },
  accessibility: {
    title: 'Accessibility',
    description:
      'How to use this portfolio, its accessibility review status and how to report barriers.',
    eyebrow: 'Using this website',
    introduction:
      'I want my portfolio to be readable and usable by as many people as possible. WCAG 2.2 Level AA provides the technical guidance.',
    usage: 'How to use the website',
    instructions: [
      'Use Tab and Shift + Tab to move between controls. The first link takes you directly to the main content.',
      'Open and close project details with Enter or the Space key.',
      'Under “Theme”, choose Light, Dark or System. Your choice is saved on this device where possible.',
      'Use “Language” to switch between German and English. Each version has its own address and stays selected when you reload.',
      'Enlarge text using your browser’s zoom controls. Content also adapts to narrow screens.',
      'The website respects your operating system’s reduced-motion preference.',
    ],
    review: 'Review status and limitations',
    reviewText:
      'As of 24 September 2026. Contrast, keyboard operation, labels and narrow layouts are checked during development. A complete independent review using assistive technologies is still outstanding. This information is not a certification of conformance.',
    scope:
      'Project images show excerpts from other applications. Essential project information is also available as text. Linked projects and GitHub are separate websites; the measures described here apply to this portfolio.',
    report: 'Report an accessibility barrier',
    reportText:
      'Please email me if something is inaccessible. It helps to include the page, a brief description and, where relevant, the browser or assistive technology you were using.',
    subject: 'Accessibility barrier in the portfolio',
    back: 'Back to the portfolio',
  },
  metadata: {
    title: 'Jayanath Willi Kasberg | IT Portfolio',
    description:
      'Web applications, JavaScript and browser games. The IT portfolio of Jayanath Willi Kasberg in Berlin, seeking a work-integrated computer science degree in 2027.',
  },
} satisfies Translation;
