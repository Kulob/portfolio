import aionImage from '../assets/aion.jpeg';
import blogImage from '../assets/portfolio6.png';
import bookingImage from '../assets/portfolio5.png';
import lucidImage from '../assets/portfolio1.jpeg';
import veridoImage from '../assets/photo_2025-01-07 14.50.44.jpeg';
import zyplImage from '../assets/zypl website.jpg';
import type { PortfolioItem } from '../types';

export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    id: 'lucid',
    image: lucidImage,
    stack: ['React 19', 'TanStack Router', 'Zustand', '@xyflow/react', 'Tailwind v4'],
  },
  {
    id: 'aion',
    image: aionImage,
    demo: 'https://aion.tj/',
    stack: ['Next.js 14', 'TypeScript', 'SCSS Modules', 'Sentry', 'Amplitude'],
  },
  {
    id: 'verido',
    image: veridoImage,
    demo: 'https://verido-aidoc.switzerlandnorth.cloudapp.azure.com/',
    stack: ['React', 'TypeScript', 'Zustand', 'JSZip', 'Vite'],
  },
  {
    id: 'zypl',
    image: zyplImage,
    demo: 'https://zypl.ai',
    stack: ['Next.js', 'TypeScript', 'SCSS'],
  },
  {
    id: 'booking',
    image: bookingImage,
    demo: 'https://mern-hotel.vercel.app/',
    source: 'https://github.com/Kulob/mern-hotel',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 'blog',
    image: blogImage,
    source: 'https://github.com/Kulob/mern-fullstack',
    stack: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB'],
  },
];
