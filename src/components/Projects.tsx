import { useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface GitHubData {
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
}

interface Project {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  tech: string[];
  image: string;
  repoName: string;
  githubData?: GitHubData;
  status: 'online' | 'building';
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      className="flex flex-col bg-black rounded-lg overflow-hidden w-full border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image || '/api/placeholder/400/200'}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        />
      </div>

      {/* Project Info */}
      <div className="p-6 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'online' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 6).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-800 text-gray-200 text-xs rounded hover:bg-gray-700 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex items-center space-x-4 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
            aria-label={`View live demo of ${project.title}`}
          >
            <FaExternalLinkAlt className="text-lg" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: 'UniZ',
      description: 'Emerging university management system with advanced Outpass Management features.',
      liveUrl: 'https://sreesuniz.vercel.app/student',
      githubUrl: 'https://github.com/sreecharan-desu/uniZ',
      tech: ['TypeScript', 'Prisma', 'React', 'Node.js'],
      image: '/project-images/uniZ.png',
      repoName: 'uniZ',
      status: 'online',
    },
    {
      title: 'reX',
      description: 'An online reward exchange platform.',
      liveUrl: 'https://rex-beige.vercel.app/',
      githubUrl: 'https://github.com/sreecharan-desu/reX',
      tech: ['TypeScript', 'React', 'Express', 'MongoDB'],
      image: '/project-images/reX.png',
      repoName: 'reX',
      status: 'building',
    },
    {
      title: 'TaskMaster',
      description: 'A full-stack todo application with real-time updates and secure authentication.',
      liveUrl: 'https://task-master-black.vercel.app/',
      githubUrl: 'https://github.com/sreecharan-desu/TaskMaster',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      image: '/project-images/taskmaster.png',
      repoName: 'TaskMaster',
      status: 'online',
    },
    {
      title: 'ChromaPost',
      description: 'An online ad generator built with modern web technologies.',
      liveUrl: 'https://chromapost.vercel.app/',
      githubUrl: 'https://github.com/sreecharan-desu/ChromaPost',
      tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
      image: '/project-images/chromapost.png',
      repoName: 'ChromaPost',
      status: 'online',
    },
    {
      title: 'StudySpace',
      description: 'Platform for students to join study groups and collaborate offline.',
      liveUrl: 'https://studyspace-exp.vercel.app/',
      githubUrl: 'https://github.com/sreecharan-desu/Studyspace',
      tech: ['TypeScript', 'React', 'Recoil', 'TailwindCSS'],
      image: '/project-images/studyspace.png',
      repoName: 'Studyspace',
      status: 'building',
    },
    {
      title: 'GradeLite',
      description: 'A grade management and visualization tool for students.',
      liveUrl: 'https://sreecharan-desu.github.io/Gradelite/#GradeLite',
      githubUrl: 'https://github.com/sreecharan-desu/Gradelite',
      tech: ['JavaScript', 'HTML', 'CSS'],
      image: '/project-images/gradelite.png',
      repoName: 'Gradelite',
      status: 'online',
    },
    {
      title: 'CampusSchield',
      description: 'A safety companion for university students with low confidence (Introverts).',
      liveUrl: 'https://campus-schield-frontend.vercel.app/',
      githubUrl: 'https://github.com/sreecharan-desu/Campusschield-v.1.0.2',
      tech: ['React', 'Javascript', 'Node.js', 'Express', 'TailwindCSS', 'MongoDB'],
      image: '/project-images/campusschield.png',
      repoName: 'Campusschield-v.1.0.2',
      status: 'building',
    },
    {
      title: 'echo.ink',
      description: 'A basic functional blogging application - powered with hono & cloudflare workers',
      liveUrl: 'https://srees-echoink.vercel.app/',
      githubUrl: 'https://github.com/sreecharan-desu/echo.ink',
      tech: ['React', 'Typescript', 'TailwindCSS', 'Hono', 'Cloudflare workers', 'Prisma', 'Postgress', 'NeonDB'],
      image: '/project-images/echo.ink.png',
      repoName: 'echo.ink',
      status: 'online',
    },
    {
      title: 'GitSeek',
      description: 'GitSeeker is a GitHub profile searcher that allows users to search for GitHub profiles',
      liveUrl: 'https://gitseek.vercel.app/',
      githubUrl: 'https://github.com/sreecharan-desu/Gitseek',
      tech: ['React', 'Typescript', 'TailwindCSS', 'Github API'],
      image: '/project-images/gitseek.png',
      repoName: 'Gitseek',
      status: 'online',
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <Element name="projects" className="min-h-screen py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>

        {/* Display projects in a 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </Element>
  );
};

export default Projects;