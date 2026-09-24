import type { Project, ProjectImage } from '@/types/portfolio';
import { projects } from './projects';

type ProjectTranslation = Pick<
  Project,
  'category' | 'summary' | 'details' | 'implementation' | 'status'
> & {
  readonly image?: Pick<ProjectImage, 'alt' | 'caption'>;
};

const translations: Readonly<Record<string, ProjectTranslation>> = {
  'little-bolt': {
    category: 'Browser game',
    summary:
      'A robot, a towering structure and a journey to the moon. A vertical platformer with chargeable jumps and a game world of its own.',
    image: {
      alt: 'Little Bolt, Big Moon title illustration showing the robot in a nighttime game world',
      caption: 'Original title illustration from the project',
    },
    details:
      'HTML5 Canvas renders the game world. Classes and native JavaScript modules organise game logic and state. Settings and local high scores are stored in the browser.',
    implementation:
      'Input, movement and game state work together. The documented architecture separates these responsibilities; an automated test suite supports development.',
    status: 'Training project with a documented tutorial and test suite.',
  },
  pokedex: {
    category: 'API integration',
    summary:
      'Find Pokémon, compare their attributes and explore the details. An interface for data from PokéAPI.',
    image: {
      alt: 'The actual Pokédex application with a search field and Pokémon cards',
      caption: 'Screenshot of the local application · September 2026',
    },
    details:
      'Asynchronous requests load lists and details from PokéAPI. Map caches retain previously loaded responses. Search and detail views make the data accessible.',
    implementation:
      'Promise.allSettled handles multiple detail requests independently. HTTP errors are checked and previously loaded data is reused.',
    status: 'Frontend project with search and detail views.',
  },
  bestellapp: {
    category: 'Food ordering app',
    summary:
      'Choose dishes, adjust quantities and keep track of your basket. An ordering interface for a fictional ramen restaurant.',
    image: {
      alt: 'Neo Neko Ramen: the actual restaurant and ordering interface',
      caption: 'Screenshot of the local application · September 2026',
    },
    details:
      'Menu rendering, basket controls and feedback are separated into JavaScript files. Dishes can be added, reduced and removed.',
    implementation:
      'Basket logic is separate from rendering. Shared event handling processes actions on dishes.',
    status:
      'Frontend demo with order feedback. No real ordering or payment processing.',
  },
  fotogram: {
    category: 'Fotogram · Photo gallery',
    summary:
      'A food photography gallery with enlarged images and navigation using a mouse or keyboard.',
    image: {
      alt: 'FoodGram: the actual gallery showing food photographs',
      caption: 'Screenshot of the local application · September 2026',
    },
    details:
      'The gallery opens images in a lightbox. Arrow keys move to the next or previous image, and Escape closes the view.',
    implementation:
      'Mouse and keyboard input share the same image index and functions. Navigation wraps from the last image to the first.',
    status: 'Frontend project with a gallery and lightbox.',
  },
  join: {
    category: 'Task management',
    summary:
      'A web application for organising tasks and project progress, developed during my training.',
    image: {
      alt: 'Join 360: guest dashboard showing task status, priorities and the next deadline',
      caption:
        'Original screenshot of the summary view from the JOIN repository',
    },
    details:
      'A group training project with a Kanban board, task management, subtasks and contacts. The dashboard shows task status, urgent tasks and the next deadline. Firebase handles authentication and data storage.',
    implementation:
      'The interface follows Atomic Design. JavaScript files separate presentation, validation, data management and Firebase integration. A detailed account of my individual contributions is still to be added.',
    status:
      'Group project with documented guest access and automated tests. Individual team contributions are still being documented.',
  },
  kochgoat: {
    category: 'Product idea · In development',
    summary:
      'A cooking assistant for everyday kitchens: recipe ideas, meal planning and shopping lists, with Zico as a planned step-by-step guide.',
    image: {
      alt: 'The KochGoat marketing website with the cooking assistant introduction and beta programme',
      caption:
        'Screenshot of the live marketing website kochgoat.com · September 2026',
    },
    details:
      'The public marketing website introduces the concept and beta programme. The project also contains a Nuxt frontend and a Symfony backend with API Platform. The website explicitly states that the app is still in development.',
    implementation:
      'Frontend, backend and marketing are separate project areas. The next task is to develop clearly defined, demonstrable product features.',
    status:
      'Marketing website online; the app and the advertised product features are still in development.',
  },
};

export const englishProjects: readonly Project[] = projects.map((project) => {
  const translation = translations[project.id];
  if (!translation) throw new Error(`Missing English project: ${project.id}`);
  if (project.image && !translation.image)
    throw new Error(`Missing English image description: ${project.id}`);
  return {
    ...project,
    ...translation,
    technologies: project.technologies.map((name) =>
      name === 'ES-Module' ? 'ES modules' : name,
    ),
    image:
      project.image && translation.image
        ? { ...project.image, ...translation.image }
        : undefined,
  };
});
