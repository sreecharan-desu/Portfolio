'use client';

import { Element } from 'react-scroll';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { devopsProjects, fullstackProjects } from '@/lib/socials';

// Unified Project Interface
export interface Project {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  tech: string[];
  image: string;
  status: 'online' | 'building';
}

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

  return (
    <>
      <div
        className="flex flex-col bg-black border border-white/20 rounded-lg overflow-hidden"
        style={{ width: '361px', height: '472px' }}
      >
        {/* Image Container */}
        <div
          className="relative h-[192px] overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={project.image || '/images/placeholder.png'}
            alt={project.title}
            fill
            className="object-cover object-center"
            sizes="361px"
            quality={85}
            loading="lazy"
          />
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col space-y-4 h-[280px] relative">
          {/* Title and Status */}
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-white truncate">{project.title}</h3>
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
          {/* Description */}
          <p className="text-sm text-white/70 line-clamp-3">{project.description}</p>
          {/* Technology Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 6).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white/10 text-white/70 text-xs font-medium rounded-md border border-white/20"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 6 && (
              <span className="px-2.5 py-1 bg-white/10 text-white/50 text-xs font-medium rounded-md border border-white/20">
                +{project.tech.length - 6} more
              </span>
            )}
          </div>
          {/* Action Links */}
          <div className="flex items-center justify-between pt-2 border-t border-white/20 absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white/80"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub className="text-lg" />
                  <span className="text-sm font-medium">Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white/80"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              )}
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs text-white/70 hover:text-white/80"
            >
              View Image
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] overflow-auto rounded-lg border border-white/20"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white bg-black/80 rounded-full p-2 hover:bg-black/90"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close image modal"
            >
              <FaTimes className="text-lg" />
            </button>
            {/* Image Container */}
            <div className="relative bg-black rounded-lg overflow-hidden">
              <Image
                width={1200}
                height={800}
                src={project.image}
                alt={project.title}
                className="object-contain w-full h-full"
                sizes="90vw"
                quality={95}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  const [currentView, setCurrentView] = useState<'fullstack' | 'devops'>('fullstack');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const currentProjects = currentView === 'fullstack' ? fullstackProjects : devopsProjects;
  const visibleProjects = showAll ? currentProjects : currentProjects.slice(0, 2);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    setShowAll(!isMobile); // Show all projects by default on large screens
  }, [isMobile]);

  const handleViewChange = (view: 'fullstack' | 'devops') => {
    if (view === currentView) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(view);
      setIsTransitioning(false);
      setShowAll(!isMobile); // Reset based on screen
    }, 150);
  };

  return (
    <Element name="projects" className="py-16 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl first-letter:text-6xl sm:text-4xl font-bold text-white text-center mb-12 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            A showcase of my work in full-stack development and DevOps engineering
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white/10 rounded-full p-1 border border-white/20">
            {['fullstack', 'devops'].map(view => (
              <button
                key={view}
                onClick={() => handleViewChange(view as 'fullstack' | 'devops')}
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  currentView === view ? 'bg-white text-black' : 'text-white/70 hover:bg-white/20'
                }`}
              >
                {view === 'fullstack' ? 'Full Stack' : 'DevOps'}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="flex justify-center">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-150 ${
              isTransitioning ? 'blur-sm opacity-50' : 'blur-none opacity-100'
            }`}
          >
            {visibleProjects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* Show More for Mobile */}
        {isMobile && !showAll && currentProjects.length > 2 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="text-sm text-white/80 hover:text-white bg-white/10 border border-white/20 px-4 py-2 rounded-full transition-all"
            >
              Show more
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 pt-6 border-t border-white/20">
          <p className="text-white/50 text-sm">
            More projects coming soon •{' '}
            <a
              href="https://github.com/sreecharan-desu"
              className="text-white/70 hover:text-white/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all on GitHub
            </a>
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
