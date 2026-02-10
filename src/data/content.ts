export const hero = {
  name: 'Bernard Sin Fat',
  title: 'Full-Stack Developer',
  tagline: 'Building robust web applications with modern tools and clean architecture.',
  github: 'https://github.com/bernardsinfat',
  linkedin: 'https://www.linkedin.com/in/bernardsinfat',
  email: 'bernardsinfat@gmail.com',
  resumePath: '/resume/Bernard_Sin_Fat_Resume.pdf',
}

export const about = {
  summary: [
    'Full-Stack Developer with hands-on experience building production web applications using Laravel, Vue 3, and Quasar.',
    'Skilled in designing scalable architectures — from multi-tenant SaaS platforms to automated data pipelines with queue-based processing.',
    'Passionate about clean code, test-driven development, and leveraging AI-powered workflows to accelerate delivery.',
  ],
  location: 'Perth, Western Australia',
}

export const techStack = {
  groups: [
    {
      label: 'Backend',
      items: ['PHP', 'Laravel 12', 'Node.js', 'Express', 'REST APIs'],
    },
    {
      label: 'Frontend',
      items: ['Vue 3', 'Quasar', 'TypeScript', 'Pinia', 'Axios'],
    },
    {
      label: 'AI & Automation',
      items: ['Claude Code', 'Roo Code', 'Agentic AI Workflows'],
    },
    {
      label: 'Testing & DevOps',
      items: ['PHPUnit', 'Playwright', 'TDD', 'Git', 'Docker', 'GitHub Actions'],
    },
    {
      label: 'Architecture & DB',
      items: ['MySQL', 'Redis', 'BullMQ', 'ERD', 'RBAC', 'Multi-tenant'],
    },
  ],
}

export const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Nano Solutions',
    period: 'Nov 2022 – Present',
    highlights: [
      'Architected and built a multi-tenant property management SaaS platform serving 30+ agencies using Laravel, Vue 3, and Quasar with RBAC and role-based dashboards.',
      'Designed a normalised MySQL schema (50+ tables) with soft deletes, audit trails, and polymorphic relationships for property inspections and maintenance workflows.',
      'Implemented queue-driven background processing with Laravel Horizon and Redis for PDF report generation, email notifications, and bulk data imports.',
      'Built a comprehensive REST API (100+ endpoints) with Form Request validation, API Resources, and Sanctum token authentication.',
      'Established CI/CD pipelines with GitHub Actions, PHPUnit test suites (200+ tests), and automated deployment to staging and production environments.',
    ],
  },
  {
    role: 'Intern Developer',
    company: 'Nano Solutions',
    period: 'Aug – Nov 2022',
    highlights: [
      'Contributed to frontend development using Vue 3 and Quasar, building reusable UI components and implementing responsive layouts.',
    ],
  },
]

export interface Project {
  title: string
  subtitle: string
  description: string
  techBadges: string[]
  highlights: string[]
  diagramComponent: string
}

export const projects: Project[] = [
  {
    title: 'Football Analytics Platform',
    subtitle: 'roofoot2',
    description:
      'Automated data pipeline that scrapes football fixtures, odds, and results from multiple sources using browser automation and queue-based processing.',
    techBadges: [
      'Node.js', 'Playwright', 'BullMQ', 'Redis 7', 'MySQL 8',
      'Knex.js', 'Zod', 'Docker', 'Commander.js',
    ],
    highlights: [
      'Monorepo with npm workspaces — shared Zod types and Knex DB package across services and tools',
      'Playwright browser pool (generic-pool) with manual stealth: navigator overrides, UA rotation, random delays',
      'CSS selector engine stored in DB with 60s cache TTL, live validation, and CLI management tool',
      '4 BullMQ queues: fixtures (6h), odds (30m), results (1h), selector-validation (daily 3AM)',
      'Express + Bull Board monitoring dashboard for real-time queue inspection',
      'Zod validation for match scores, possession sums, and odds probability normalization',
    ],
    diagramComponent: 'RoofootArchitecture',
  },
  {
    title: 'Time-Capsule Messaging App',
    subtitle: 'timecapsule',
    description:
      'A messaging application where users schedule messages to be delivered at a future date, featuring a guided onboarding flow and robust authentication.',
    techBadges: [
      'Laravel 11', 'Vue 3', 'Quasar 2', 'Sanctum', 'Pinia',
      'Luxon', 'GitHub Actions', 'MySQL',
    ],
    highlights: [
      'Laravel Sanctum SPA authentication with session + token hybrid and CSRF protection',
      '3-step onboarding wizard: Terms → Personal Details (E.164 phone + country detection) → Timezone selection',
      'Security: bcrypt 12 rounds, password history (last 5), NIST-compliant validation, rate limiting (5 auth/min)',
      'Service layer architecture with OnboardingService, OnboardedMiddleware, and Form Request validation',
      'Pinia stores for state management with Vue Router navigation guards',
      'CI/CD with GitHub Actions → SSH deploy → migrate --force',
    ],
    diagramComponent: 'TimecapsuleArchitecture',
  },
]

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Edith Cowan University',
    abbreviation: 'ECU',
  },
  {
    degree: 'Full Stack Web Development Certificate',
    institution: 'University of Western Australia',
    abbreviation: 'UWA',
  },
]

export const footer = {
  tagline: 'Get in touch',
  copyright: `\u00A9 ${new Date().getFullYear()} Bernard Sin Fat`,
}
