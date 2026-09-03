export const en = {
  meta: {
    title: 'Khudobakhsh Mirov — Frontend Developer (React / TypeScript)',
    description:
      'Frontend developer with 4+ years in FinTech and AI. MLOps platforms, credit origination pipelines and biometric identity verification, built with React, TypeScript and Next.js.',
  },

  language: {
    label: 'Language',
    ru: 'RU',
    en: 'EN',
    switchToRu: 'Switch to Russian',
    switchToEn: 'Switch to English',
  },

  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },

  hero: {
    greeting: "Hello, I'm",
    name: 'Khudobakhsh Mirov',
    role: 'Frontend Developer',
    tagline: 'React / TypeScript · FinTech & AI · 4+ years',
    downloadCv: 'Download CV',
    talk: "Let's Talk",
    scrollDown: 'Scroll Down',
    photoAlt: 'Portrait of Khudobakhsh Mirov',
  },

  about: {
    eyebrow: 'Get To Know',
    title: 'About Me',
    photoAlt: 'Khudobakhsh Mirov at work',
    cards: {
      experience: { title: 'Experience', value: '4+ years working' },
      projects: { title: 'Projects', value: '20+ completed' },
      testing: { title: 'Test coverage', value: '200+ spec files' },
    },
    lead: 'I build frontends for financial products where a wrong number has consequences.',
    body: 'For the past four years I have worked on complex financial systems: MLOps platforms, credit origination pipelines and biometric identity verification. My focus is the part of the product people actually touch — multi-step flows that have to stay correct under conditional routing, dashboards that stay readable at scale, and custom component libraries built to be reused rather than copied. I work from Figma with stakeholders directly and design architectures that match what the project is really trying to do.',
    availability:
      'Open to remote work on Moscow (MSK) hours and relocation to Russia.',
    location: 'Dushanbe, Tajikistan',
  },

  skills: {
    eyebrow: 'What I Work With',
    title: 'Skills',
    groups: {
      core: 'Core',
      state: 'State & Data',
      styling: 'Styling & UI',
      testing: 'Testing & Tooling',
    },
  },

  experience: {
    eyebrow: 'Where I Have Worked',
    title: 'Experience',
    present: 'Present',
    stackLabel: 'Stack',
    education: {
      title: 'Education',
      school: 'Branch of the Russian State Hydrometeorological University, Tuapse',
      major: 'Information Systems and Technologies (Engineer)',
      period: '2019 — 2023',
    },
    languages: {
      title: 'Languages',
      list: 'Russian — fluent · Tajik — native · English — technical (documentation, correspondence)',
    },
  },

  companies: {
    zypl: {
      name: 'Zypl.ai',
      location: 'Dushanbe · Dubai · Tashkent',
      role: 'Frontend Developer',
      period: 'Dec 2022 — Present',
      summary:
        'A company reimagining financial services with synthetic AI agents, helping financial institutions make more accurate decisions.',
    },
    freelance: {
      name: 'Freelance',
      location: 'Krasnodar, Russia',
      role: 'Frontend Developer',
      period: 'Dec 2021 — May 2022',
      summary:
        'Built an inventory and accounting platform end to end for a single client.',
    },
  },

  projects: {
    lucid: {
      name: 'Lucid.AI',
      tagline: 'Enterprise-grade MLOps platform',
      bullets: [
        'Built the entire ML model lifecycle — from data upload to deployment — using Feature-Sliced Design across 51 feature modules and 14 pages.',
        'Implemented DAG visualisation of ML workflows with @xyflow/react: drag-and-drop, live updates over WebSocket and custom node types.',
        'Introduced code splitting with automatic chunk recovery on deploy (lazyWithReload) across 18 explicit chunk names, switching to the OXC minifier.',
        'Built a granular RBAC system over the intersection of entities (MODEL, AGENT, ZGAN, RBAC) and actions (CREATE, VIEW, LOGIN), enforced at both route and component level.',
        'Integrated Ed25519 signature verification into user authentication.',
        'Covered the codebase with 200+ spec files using Vitest, React Testing Library and MSW.',
      ],
    },
    aion: {
      name: 'aion.tj',
      tagline: 'Online lending platform for Tajikistan',
      bullets: [
        'Developed the full loan application flow: QR/SMS-OTP sign-up through passport verification in three stages — front, back, selfie — with webcam capture, automatic image compression and submission to OCR.',
        'Implemented a multi-step form with conditional routing driven by document status, credit score and user profile, including partner-bank filtering by underwriting result.',
        'Built a library of 32+ reusable UI components: modals, bottom sheets, skeletons, stepper and custom inputs.',
        'Set up Sentry error monitoring across client, server and edge runtimes with source map uploads.',
        'Integrated Amplitude Analytics with Session Replay to track the conversion funnel.',
      ],
    },
    passid: {
      name: 'Pass ID',
      tagline: 'Identity verification and document recognition',
      bullets: [
        'Developed a step-by-step identity verification interface across three stages, with token-based route protection.',
        'Implemented asynchronous image uploads with progress indicators.',
        'Delivered a stable integration with the face and document recognition system.',
        'Optimised rendering and introduced lazy loading, noticeably improving responsiveness.',
        'Added bulk export of all three verification photos as a single archive via JSZip.',
        'Carried out cross-browser and cross-device testing, eliminating rendering inconsistencies on mobile browsers.',
      ],
    },
    scoring: {
      name: 'Dynamic Scoring',
      tagline: 'ML scoring interface for financial institutions',
      bullets: [
        'Built the interface for working with scoring models: parameter configuration, running calculations, results visualisation and report export.',
        'Aligned requirements directly with stakeholders and translated Figma designs into component architecture.',
      ],
    },
    bozorcha: {
      name: 'Bozorcha',
      tagline: 'Inventory and accounting platform',
      bullets: [
        "Worked directly with the client's accountant to digitise storage, inventory management and accounting processes.",
        'Designed the entire platform, including a statistics dashboard with a separate interface for each of three user types.',
        'Implemented the frontend with React, Chart.js, Redux Toolkit, Axios and Ant Design, using TypeScript for reliability.',
      ],
    },
  },

  portfolio: {
    eyebrow: 'My Recent Work',
    title: 'Portfolio',
    github: 'Source',
    demo: 'Live Demo',
    closedSource: 'Closed source',
    items: {
      lucid: {
        title: 'Lucid.AI',
        description:
          'MLOps platform: dataset upload, model training, DAG workflow editor and deployment.',
      },
      zypl: {
        title: 'Zypl.ai',
        description: 'Corporate site for the synthetic-data and AI-agent platform.',
      },
      verido: {
        title: 'Verido.ai Dashboard',
        description:
          'Operator dashboard for biometric identity verification and document recognition.',
      },
      aion: {
        title: 'aion.tj',
        description:
          'Consumer lending platform: application flow, passport verification and underwriting.',
      },
      booking: {
        title: 'React Booking',
        description: 'MERN hotel booking app with search, filtering and reservations.',
      },
      blog: {
        title: 'React Blog',
        description: 'MERN blog with authentication, posts and image uploads.',
      },
    },
  },

  contact: {
    eyebrow: 'Get In Touch',
    title: 'Contact Me',
    email: 'Email',
    telegram: 'Telegram',
    phone: 'Phone',
    write: 'Write to me',
    openTelegram: 'Open Telegram',
    call: 'Call',
    form: {
      name: 'Your full name',
      email: 'Your email',
      message: 'Your message',
      submit: 'Send Message',
      sending: 'Sending…',
      success: 'Thank you — your message has been sent. I will reply shortly.',
      error: 'Something went wrong. Please write to me directly by email.',
      notConfigured: 'The form is not configured. Please write to me by email.',
    },
  },

  footer: {
    backToTop: 'Back to top',
    rights: 'All rights reserved.',
    builtWith: 'Built with React, TypeScript and Vite.',
  },

  social: {
    github: 'GitHub profile',
    linkedin: 'LinkedIn profile',
    telegram: 'Telegram',
  },
} as const;

/**
 * `en` is declared `as const`, so every leaf is a literal type. A translation
 * must match the *shape* of `en`, not its exact strings — this widens each leaf
 * back to `string` while keeping the structure, so `ru.ts` is checked for
 * missing and misspelled keys but free to hold different text.
 */
type Localized<T> = {
  [K in keyof T]: T[K] extends readonly string[]
    ? readonly string[]
    : T[K] extends string
      ? string
      : Localized<T[K]>;
};

export type Translation = Localized<typeof en>;
