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
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-20 
                 p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-white/30 
                 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500
                 relative overflow-hidden group ${
                   isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                 }`}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-orange-100/50 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Project Image - Enhanced animation */}
      <motion.div 
        className="w-full lg:w-3/5 perspective-1500 mb-8 lg:mb-0"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="relative group rounded-2xl shadow-2xl transform-gpu overflow-hidden
                     aspect-video sm:aspect-[16/10]"
          animate={{
            rotateY: isHovered ? (isEven ? 8 : -8) : 0,
            scale: isHovered ? 1.03 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center rounded-xl 
                      transform transition-transform duration-500 group-hover:scale-110"
          />

          {/* Enhanced Project Links Overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm 
                      flex items-center justify-center gap-8 opacity-0 
                      group-hover:opacity-100 transition-all duration-500"
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

      {/* Enhanced Project Info Section */}
      <motion.div 
        className="w-full lg:w-2/5 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.h3 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left 
                     bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent
                     tracking-tight leading-tight"
          whileHover={{ scale: 1.02 }}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-gray-600 text-lg leading-relaxed font-medium">
          {project.description}
        </p>
        
        {/* Enhanced Tech Stack Display */}
        <motion.div 
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.tech.map((tech, index) => (
            <motion.span
              key={index}
              className="px-5 py-2.5 bg-gradient-to-br from-orange-50 via-white to-orange-100 
                       rounded-full text-sm font-semibold text-orange-600
                       border border-orange-200/50 shadow-lg shadow-orange-100/50
                       hover:shadow-orange-200/50 transition-all duration-300"
              whileHover={{ scale: 1.08, y: -3 }}
              initial={{ opacity: 0, y: 20 }}
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
    <Element name="projects" className="min-h-screen py-32 bg-gradient-to-br from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Enhanced Ambient Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
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

      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-bold text-center mb-32 
                   bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent
                   tracking-tight relative z-10"
        >
          Projects
          <motion.div 
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1.5 
                      bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '8rem' }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.h2>

        <div className="space-y-40 md:space-y-56 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>

      {/* Enhanced Glass Effect Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[150px] pointer-events-none" />
    </Element>
  )
}

export default Projects