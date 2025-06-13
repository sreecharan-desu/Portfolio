"use client"

import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';

// Unified Project Interface
interface Project {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  tech: string[];
  image: string;
  status: 'online' | 'building';
}

// FullStack Projects Data
const fullstackProjects: Project[] = [
  {
    title: 'Spay',
    description: 'Spay is a secure and seamless payment gateway powered by a custom-built dummy bank server, simulating real-world banking for modern app integration.',
    liveUrl: 'https://srees-spay.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/Spay',
    tech: ['TypeScript', 'Next.js', 'Tailwind', 'Prisma', 'Postgres', 'NeonDB'],
    image: '/project-images/Spay.png',
    status: 'building',
  },
  {
    title: 'reX',
    description: 'An online reward exchange platform.',
    liveUrl: 'https://rex-beige.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/reX',
    tech: ['TypeScript', 'React', 'Express', 'MongoDB'],
    image: '/project-images/reX.png',
    status: 'online',
  },
  {
    title: 'UniZ',
    description: 'Emerging university management system with advanced Outpass Management features.',
    liveUrl: 'https://sreesuniz.vercel.app/student',
    githubUrl: 'https://github.com/sreecharan-desu/uniZ',
    tech: ['TypeScript', 'Prisma', 'React', 'Node.js'],
    image: '/project-images/uniZ.png',
    status: 'online',
  },
  {
    title: 'CampusSchield',
    description: 'A safety companion for university students with low confidence (Introverts).',
    liveUrl: 'https://campus-schield-frontend.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/Campusschield-v.1.0.2',
    tech: ['React', 'JavaScript', 'Node.js', 'Express', 'TailwindCSS', 'MongoDB'],
    image: '/project-images/campusschield.png',
    status: 'online',
  },
  {
    title: 'echo.ink',
    description: 'A basic functional blogging application - powered with hono & cloudflare workers',
    liveUrl: 'https://srees-echoink.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/echo.ink',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Hono', 'Cloudflare workers', 'Prisma', 'Postgres', 'NeonDB'],
    image: '/project-images/echo.ink.png',
    status: 'online',
  },
  {
    title: 'TaskMaster',
    description: 'A full-stack todo application with real-time updates and secure authentication.',
    liveUrl: 'https://task-master-black.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/TaskMaster',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    image: '/project-images/taskmaster.png',
    status: 'online',
  },
  {
    title: 'StudySpace',
    description: 'Platform for students to join study groups and collaborate offline.',
    liveUrl: 'https://studyspace-exp.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/Studyspace',
    tech: ['TypeScript', 'React', 'Recoil', 'TailwindCSS'],
    image: '/project-images/studyspace.png',
    status: 'online',
  },
  {
    title: 'ChromaPost',
    description: 'An online ad generator built with modern web technologies.',
    liveUrl: 'https://chromapost.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/ChromaPost',
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
    image: '/project-images/chromapost.png',
    status: 'online',
  },
  {
    title: 'CampusHub',
    description: 'A central place for all campus events.',
    liveUrl: 'https://srees-campushub.vercel.app/',
    githubUrl: 'https://github.com/sreecharan-desu/CampusHub',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    image: '/project-images/campushub.png',
    status: 'online',
  },
  {
    title: 'GradeLite',
    description: 'A grade management and visualization tool for students.',
    liveUrl: 'https://sreecharan-desu.github.io/Gradelite/#GradeLite',
    githubUrl: 'https://github.com/sreecharan-desu/Gradelite',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: '/project-images/gradelite.png',
    status: 'online',
  },
  {
    title: "Portfolio v_1.0.0",
    description: "My Initial portfolio website built with React, Tailwind CSS, and Framer Motion.",
    liveUrl: "https://sr3x0r-portfolio.vercel.app/",
    githubUrl: "https://github.com/sreecharan-desu/Portfolio-v_1.0.1",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/project-images/portfolio.png",
    status: "online"
  }
];

// DevOps Projects Data
const devopsProjects: Project[] = [
  {
    title: 'CI/CD Pipeline',
    description: 'End-to-end CI/CD workflow automated using GitHub Actions, Docker, and AWS EC2. Code changes trigger Docker builds, push to Docker Hub, and deploy live via NGINX reverse proxy — all fully containerized and production-ready.',
    liveUrl: 'https://github.com/sreecharan-desu/hello-ci-cd',
    githubUrl: 'https://github.com/sreecharan-desu/hello-ci-cd',
    tech: ['Docker', 'GitHub Actions', 'NGINX', 'AWS EC2', 'TypeScript'],
    image: '/project-images/ci-cd.png',
    status: 'online',
  }
];

// Unified ProjectCard Component with Image Popup
const ProjectCard = ({ project }: { project: Project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add keyboard accessibility for closing modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <motion.div
        className="flex mx-1 flex-col bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div
          className="relative h-52 overflow-hidden"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={project.image || '/images/placeholder.png'}
            alt={project.title}
            fill
            className="object-cover object-center w-full transition-transform duration-300 hover:scale-105"
            priority={false}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white tracking-tight">{project.title}</h3>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                project.status === 'online'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-yellow-500/20 text-yellow-400'
              }`}
            >
              {project.status}
            </span>
          </div>
          <p className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 6).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-white/10 text-gray-200 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub className="text-lg" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label={`View live demo of ${project.title}`}
              >
                <FaExternalLinkAlt className="text-lg" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
      {isModalOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
        onClick={() => setIsModalOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-4xl max-h-[80vh] overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1"
            onClick={() => setIsModalOpen(false)}
          >
            <FaTimes />
          </button>
          {/* Conditionally render Zoom component */}
          {isMobile ? (
            <Image
              width={800}
	      height={600}
              src={project.image}
              alt={project.title}
              className="object-contain"
            />
          ) : (
              <Image
	      	width={800}
		height={600}
                src={project.image}
                alt={project.title}
                className="object-contain"
              />
          )}
        </motion.div>
      </div>
    )}
    </>
  );
};

// Projects Component
const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAllDevOps, setShowAllDevOps] = useState(false);
  const [currentView, setCurrentView] = useState<'fullstack' | 'devops'>('fullstack');

  return (
    <Element name="projects" className="py-12 bg-black -mt-20 md:mt-0 sm:mt-0 lg:-mt-10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl first-letter:text-5xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        {/* Toggle Bar */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setCurrentView('fullstack')}
            className={`px-4 py-2 mx-2 rounded-full border border-white/10 ${
              currentView === 'fullstack' ? 'bg-white/20 text-white' : 'bg-black/20 text-gray-300'
            } hover:bg-white/20 transition`}
          >
            FullStack
          </button>
          <button
            onClick={() => setCurrentView('devops')}
            className={`px-4 py-2 mx-2 rounded-full border border-white/10 ${
              currentView === 'devops' ? 'bg-white/20 text-white' : 'bg-black/20 text-gray-300'
            } hover:bg-white/20 transition`}
          >
            DevOps
          </button>
        </div>

        {/* Conditional Rendering Based on View */}
        {currentView === 'fullstack' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {fullstackProjects.slice(0, showAll ? fullstackProjects.length : 4).map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
            {fullstackProjects.length > 4 && (
              <div className="text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2 bg-black/20 text-white rounded-full border border-white/10 hover:bg-white/20 transition"
                >
                  {showAll ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {devopsProjects.slice(0, showAllDevOps ? devopsProjects.length : 4).map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
            {devopsProjects.length > 4 && (
              <div className="text-center">
                <button
                  onClick={() => setShowAllDevOps(!showAllDevOps)}
                  className="px-6 py-2 bg-black/20 text-white rounded-full border border-white/10 hover:bg-white/20 transition"
                >
                  {showAllDevOps ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </Element>
  );
};

export default Projects;


