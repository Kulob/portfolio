import type { Company } from '../types';

export const COMPANIES: readonly Company[] = [
  {
    id: 'zypl',
    projects: [
      {
        id: 'lucid',
        stack: [
          'React 19',
          'TypeScript',
          'Zustand',
          'TanStack Query',
          'TanStack Router',
          'Vite',
          'Tailwind CSS v4',
          'SCSS Modules',
          '@xyflow/react',
          'Recharts',
          'Apache Arrow',
          'Parquet WASM',
          'LangChain',
          'Monaco Editor',
          'Zod',
          'i18next',
          'WebSocket',
        ],
      },
      {
        id: 'aion',
        stack: [
          'Next.js 14 (App Router)',
          'React 18',
          'TypeScript',
          'SCSS Modules',
          'Zod',
          'Framer Motion',
          'react-webcam',
          'Amplitude',
          'Sentry',
          'Turborepo',
          'Vitest',
        ],
      },
      {
        id: 'passid',
        stack: [
          'React',
          'TypeScript',
          'Zustand',
          'Axios',
          'SCSS/SASS',
          'Vite',
          'React Camera Pro',
          'JSZip',
          'Docker',
        ],
      },
      {
        id: 'scoring',
        stack: ['React', 'TypeScript', 'Chart.js', 'Figma'],
      },
    ],
  },
  {
    id: 'freelance',
    projects: [
      {
        id: 'bozorcha',
        stack: ['React', 'TypeScript', 'Redux Toolkit', 'Chart.js', 'Ant Design', 'Axios'],
      },
    ],
  },
];
