// @ts-nocheck
import { useRef, useEffect, useState } from 'react'
import { Element } from 'react-scroll'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

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
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const isEven = index % 2 === 0

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [isEven ? -100 : 100, 0, 0, isEven ? -100 : 100]
  )

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, x }}
      className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 
                 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 
                 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300
                 relative overflow-hidden group ${
                   isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                 }`}
    >
      {/* Add subtle gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-orange-100/50 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Project Image - Enhanced hover effects */}
      <motion.div 
        className="w-full lg:w-3/5 perspective-1000 mb-6 lg:mb-0"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="relative group rounded-xl shadow-2xl transform-gpu overflow-hidden
                     aspect-[16/9] sm:aspect-[16/10]"
          animate={{
            rotateY: isHovered ? (isEven ? 5 : -5) : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center rounded-xl 
                      transform transition-transform duration-500 group-hover:scale-110"
          />

          {/* Project Links Overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px] 
                      flex items-center justify-center gap-6 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300"
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full text-gray-900 hover:text-orange-500 
                        transition-colors duration-300"
            >
              <FaExternalLinkAlt className="text-lg sm:text-xl" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full text-gray-900 hover:text-orange-500 
                        transition-colors duration-300"
            >
              <FaGithub className="text-lg sm:text-xl" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Project Info - Enhanced typography and spacing */}
      <motion.div 
        className="w-full lg:w-2/5 space-y-6 sm:space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h3 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left 
                     bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.02 }}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-gray-600 text-lg leading-relaxed">
          {project.description}
        </p>
        
        {/* Enhanced Tech Stack Display */}
        <motion.div 
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.tech.map((tech, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 
                       rounded-full text-sm font-medium text-orange-600
                       border border-orange-200/50 shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "UniZ",
      description: "Emerging university management system with advanced Outpass Management features.",
      liveUrl: "https://sreesuniz.vercel.app/student",
      githubUrl: "https://github.com/sreecharan-desu/uniZ",
      tech: ["TypeScript", "Prisma", "React", "Node.js"],
      image: "/project-images/uniZ.png"
    },
    {
      title: "reX",
      description: "An online reward exchange platform.",
      liveUrl: "https://rex-beige.vercel.app/",
      githubUrl: "https://github.com/sreecharan-desu/reX",
      tech: ["TypeScript", "React", "Express", "MongoDB"],
      image: "/project-images/reX.png"
    },
    {
      title: "TaskMaster",
      description: "A full-stack todo application with real-time updates and secure authentication.",
      liveUrl: "https://task-master-black.vercel.app/",
      githubUrl: "https://github.com/sreecharan-desu/TaskMaster",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/project-images/taskmaster.png"
    },
    {
      title: "ChromaPost",
      description: "An online ad generator built with modern web technologies.",
      liveUrl: "https://chromapost.vercel.app/",
      githubUrl: "https://github.com/sreecharan-desu/ChromaPost",
      tech: ["React", "TypeScript", "Vite", "TailwindCSS"],
      image: "/project-images/chromapost.png"
    },
    {
      title: "StudySpace",
      description: "Platform for students to join study groups and collaborate offline.",
      liveUrl: "https://studyspace-exp.vercel.app/",
      githubUrl: "https://github.com/sreecharan-desu/Studyspace",
      tech: ["TypeScript", "React", "Recoil", "TailwindCSS"],
      image: "/project-images/studyspace.png"
    },
    {
      title: "GradeLite",
      description: "A grade management and visualization tool for students.",
      liveUrl: "https://sreecharan-desu.github.io/Gradelite/#GradeLite",
      githubUrl: "https://github.com/sreecharan-desu/Gradelite",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "/project-images/gradelite.png"
    },
    {
      title: "EdgeAI",
      description: "AI-powered web application.",
      liveUrl: "https://edgeai.vercel.app/",
      githubUrl: "https://github.com/sreecharan-desu/EdgeAI",
      tech: ["React", "AI/ML", "TailwindCSS"],
      image: "/project-images/edgeai.png"
    }
  ]

  return (
    <Element name="projects" className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Ambient Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orange Gradient */}
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Secondary Gradient */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Accent Gradient */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-[500px] h-[500px] bg-orange-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-center mb-24 
                   bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent
                   relative z-10"
        >
          Projects
          <motion.div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 
                      bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.h2>

        {/* Update ProjectCard container */}
        <div className="space-y-32 md:space-y-48 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[100px] pointer-events-none" />
    </Element>
  )
}

export default Projects