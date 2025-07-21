import { Project } from '@/components/Projects';
import { FaChessKnight } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube, FaDiscord } from 'react-icons/fa6';

// --- Social Links ---
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/sreecharan-desu',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sreecharan-desu',
    icon: FaLinkedin,
  },
  {
    name: 'X',
    url: 'https://x.com/sr3x0r',
    icon: FaXTwitter,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@mrsreecharan',
    icon: FaYoutube,
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/1370022259606945792',
    icon: FaDiscord,
  },
  {
    name: 'Chess.com',
    url: 'https://www.chess.com/member/SreeCharanDesu',
    icon: FaChessKnight,
  },
];

export const whatsappLink = 'https://chat.sreecharandesu.in';
export const terminalCommand = 'curl -sL who.sreecharandesu.in | bash';

export const fiverr = {
  profile: 'https://www.fiverr.com/sreecharan_desu',
  gig: 'https://www.fiverr.com/s/5re0wZE',
};

export const fullstackProjects: Project[] = [
  {
    title: 'DocgenAI',
    description:
      'Generate developer documentation for any codebase in seconds using AI. Clean UI, fast backend, and blazing-fast inference.',
    liveUrl: 'https://www.docgen.dev/',
    githubUrl: '',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'API', 'TypeScript', 'Vercel'],
    image: '/project-images/docgenai.webp',
    status: 'online',
  },
  {
    title: 'HHO Site',
    description:
      'A showcase site for the Helping Hands Organization (HHO), led by RGUKT Ongole. Built using modern web tech to highlight community initiatives, events, and volunteer opportunities.',
    liveUrl: 'https://hho.sreecharandesu.in',
    githubUrl: 'https://github.com/sreecharan-desu/hho-site',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vercel'],
    image: '/project-images/hho.webp',
    status: 'online',
  },
  {
    title: 'UniZ',
    description:
      'A smart university portal featuring outpass tracking, student dashboard, and staff roles for simplified campus management.',
    liveUrl: 'https://sreesuniz.vercel.app/student',
    githubUrl: 'https://github.com/sreecharan-desu/uniZ',
    tech: ['TypeScript', 'Prisma', 'React', 'Node.js', 'Tailwind', 'PostgreSQL'],
    image: '/project-images/uniZ.webp',
    status: 'online',
  },
  {
    title: 'reXa',
    description:
      'A community-first reward exchange platform built to simplify peer recognition, gamify interactions, and foster engagement.',
    liveUrl: 'https://rexa.sreecharandesu.in/',
    githubUrl: 'https://github.com/sreecharan-desu/reX',
    tech: ['TypeScript', 'React', 'Express', 'MongoDB', 'JWT', 'Vercel'],
    image: '/project-images/reXa.webp',
    status: 'online',
  },
  {
    title: 'Schat',
    description:
      'Real-time posting board with Google login. Instantly see messages from everyone. No edit, no history — just raw moments.',
    liveUrl: 'https://srees-schat.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/Schat',
    tech: ['Next.js', 'Tailwind', 'Websockets', 'TypeScript', 'Node', 'Vercel'],
    image: '/project-images/schat.webp',
    status: 'online',
  },

  {
    title: 'echo.ink',
    description:
      'A lightweight blogging engine powered by Hono & Cloudflare Workers. Create, read, and update posts — clean and fast.',
    liveUrl: 'https://srees-echoink.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/echo.ink',
    tech: ['TypeScript', 'TailwindCSS', 'Hono', 'Prisma', 'Postgres', 'Cloudflare'],
    image: '/project-images/echo.ink.webp',
    status: 'online',
  },
  {
    title: 'CampusHub',
    description:
      'All campus events at one place. Discover, register, and stay updated about technical and cultural fests across your college.',
    liveUrl: 'https://srees-campushub.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/CampusHub',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Next.js', 'MongoDB', 'Express'],
    image: '/project-images/campushub.webp',
    status: 'online',
  },
  {
    title: 'CampusSchield',
    description:
      'A safety companion app built to help introverted students during emergencies. Includes live alerts and contact dispatching.',
    liveUrl: 'https://campus-schield-frontend.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/Campusschield-v.1.0.2',
    tech: ['React', 'JavaScript', 'Node.js', 'Express', 'TailwindCSS', 'MongoDB'],
    image: '/project-images/campusschield.webp',
    status: 'online',
  },
  {
    title: 'StudySpace',
    description:
      'Find your next study buddy, view profiles, and connect easily. Offline-ready and minimal — perfect for academic circles.',
    liveUrl: 'https://studyspace-exp.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/Studyspace',
    tech: ['TypeScript', 'Recoil', 'TailwindCSS', 'PWA', 'Vite', 'Vercel'],
    image: '/project-images/studyspace.webp',
    status: 'online',
  },
  {
    title: 'TaskMaster',
    description:
      'Full-stack productivity tool with JWT auth, CRUD tasks, reminders, and progress tracking. Built for daily task efficiency.',
    liveUrl: 'https://task-master-black.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/TaskMaster',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Express', 'TailwindCSS'],
    image: '/project-images/taskmaster.webp',
    status: 'online',
  },
  {
    title: 'ChromaPost',
    description:
      'Instantly create beautiful poster-style social ads. Designed for campaigns, clubs, and initiatives with vibrant themes.',
    liveUrl: 'https://chromapost.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/ChromaPost',
    tech: ['React', 'Vite', 'TailwindCSS', 'Canvas API', 'TypeScript', 'Vercel'],
    image: '/project-images/chromapost.webp',
    status: 'online',
  },
  {
    title: 'GradeLite',
    description:
      'Simplified grade tracking, GPA calculator, and interactive CG visuals. Built for ease of access and clarity in results.',
    liveUrl: 'https://gradelite.sreecharandesu.in',
    githubUrl: 'https://github.com/sreecharan-desu/Gradelite',
    tech: ['JavaScript', 'HTML', 'CSS', 'Chart.js', 'Bootstrap', 'GitHub Pages'],
    image: '/project-images/gradelite.webp',
    status: 'online',
  },
  {
    title: 'Portfolio v1',
    description:
      'The very first version of my portfolio. Simple yet elegant, powered by React, Tailwind, and animations via Framer Motion.',
    liveUrl: 'https://sr3x0r-portfolio.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/Portfolio-v_1.0.1',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vite', 'Vercel'],
    image: '/project-images/portfolio.webp',
    status: 'online',
  },
  // {
  //   title: 'Spay',
  //   description:
  //     'Simulated payment gateway mimicking real banking logic with card validation, account linking, and complete transaction flow.',
  //   liveUrl: 'https://srees-spay.vercel.app/',
  //   githubUrl: 'https://github.com/sreecharan-desu/Spay',
  //   tech: ['Next.js', 'Tailwind', 'Prisma', 'Postgres', 'NeonDB', 'TypeScript'],
  //   image: '/project-images/Spay.webp',
  //   status: 'building',
  // },
];

export const devopsProjects: Project[] = [
  {
    title: 'CI/CD Pipeline',
    description:
      'Automated builds + deployments via GitHub Actions, Docker, and AWS EC2. Production-ready with NGINX reverse proxy.',
    liveUrl: 'https://github.com/sreecharan-desu/hello-ci-cd',
    githubUrl: 'https://github.com/sreecharan-desu/hello-ci-cd',
    tech: ['Docker', 'GitHub Actions', 'NGINX', 'AWS EC2', 'TypeScript'],
    image: '/project-images/ci-cd.webp',
    status: 'online',
  },
];

export const slides = [
  {
    id: 1,
    title: 'Academics',
    subtitle: 'ORNATE 2025',
    description: 'Awarded by the Director for academic & hackathon excellence.',
    image: '/scroll-bar/prize.webp',
  },
  {
    id: 2,
    title: "Hackathon's",
    subtitle: 'Women Safety PWA',
    description: 'Built a PWA focused on real-time safety during a university hackathon.',
    image: '/scroll-bar/hackathon.webp',
  },

  {
    id: 3,
    title: 'Open Source',
    subtitle: 'GitHub Overview',
    description: 'Active OSS contributor — commits, PRs, and issues across diverse projects.',
    image: '/scroll-bar/oss.webp',
  },
  {
    id: 4,
    title: 'YouTube Insights',
    subtitle: 'Content Creation',
    description: 'Created content around tech, coding, and life at IIIT.',
    image: '/scroll-bar/youtube-channel.webp',
  },
  {
    id: 5,
    title: 'Culturals',
    subtitle: 'ORNATE 2025',
    description: 'Performed a dance at the cultural fest.',
    image: '/scroll-bar/dance-performance.webp',
  },
  {
    id: 6,
    title: 'Volunteering',
    subtitle: 'TechXcel',
    description: 'Volunteered at TechXcel, a tech fest, managing events and logistics.',
    image: '/scroll-bar/techxcel.webp',
  },
];

// --- Testimonials ---
export const testimonials = [
  {
    quote:
      "You've done a phenomenal job building the platform — your clarity, speed, and attention to detail really stood out.",
    name: 'Aniket Singh',
    title: 'CEO, DocGen',
    image: '/aniket.jpg',
    profile: 'https://www.linkedin.com/in/aniket-singh-9a4860190/',
  },
  {
    quote: 'Your work is genuinely impressive — clean, efficient, and well-thought-out.',
    name: 'Varshith',
    title: 'CTO, DocGen',
    image: '/varshith.jpg',
    profile: 'https://www.linkedin.com/in/varshithg17/',
  },
];

// --- Experience ---
export const experiences = [
  {
    company: 'DocGen',
    website: 'https://docgen.dev',
    role: 'Full Stack Intern',
    period: 'Mar 2025 – Apr 2025',
    location: 'Remote',
    type: 'Internship',
    logo: '/docgen-logo.png',
  },
];

// --- Environment ---
export const CHANNEL_ID = process.env.CHANNEL_ID || 'UCUaEqn8aDVtHE9AaDekpQtQ';

export const command = 'curl -sL who.sreecharandesu.in | bash';
