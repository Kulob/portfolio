import type { SkillGroup } from '../types';

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    id: 'core',
    items: [
      'React 19',
      'Next.js 14 (App Router)',
      'TypeScript',
      'JavaScript (ES2022+)',
      'HTML5',
      'Feature-Sliced Design',
    ],
  },
  {
    id: 'state',
    items: [
      'Zustand',
      'Redux Toolkit',
      'TanStack Query',
      'TanStack Router',
      'React Hook Form',
      'Zod',
      'Axios',
      'WebSocket',
      'REST API',
    ],
  },
  {
    id: 'styling',
    items: [
      'Tailwind CSS',
      'SCSS Modules',
      'CSS3',
      'Material UI',
      'Ant Design',
      'Radix UI',
      'Framer Motion',
      'Responsive Design',
    ],
  },
  {
    id: 'testing',
    items: [
      'Vitest',
      'React Testing Library',
      'MSW',
      'Vite',
      'Webpack',
      'Turborepo',
      'Git',
      'Docker',
      'CI/CD',
      'Sentry',
      'Amplitude',
      'i18next',
    ],
  },
];
