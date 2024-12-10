import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaRegEye, FaStar, FaCodeBranch } from 'react-icons/fa'
import { useRef } from 'react'

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
  githubData?: GitHubData;
}

const projects: Project[] = [
  {
    title: "UniZ",
    description: "Emerging university management system with advanced Outpass Management features.",
    liveUrl: "https://sreesuniz.vercel.app/student",
    githubUrl: "https://github.com/sreecharan-desu/uniZ",
    tech: ["TypeScript", "Prisma", "React", "Node.js"],
    image: "/project-images/uniZ.png",
    stars: 5,
    forks: 2,
    watchers: 3
  },
  {
    title: "reX",
    description: "An online reward exchange platform.",
    liveUrl: "https://rex-beige.vercel.app/",
    githubUrl: "https://github.com/sreecharan-desu/reX",
    tech: ["TypeScript", "React", "Express", "MongoDB"],
    image: "/project-images/reX.png",
    stars: 4,
    forks: 1,
    watchers: 2
  },
  {
    title: "TaskMaster",
    description: "A full-stack todo application with real-time updates and secure authentication.",
    liveUrl: "https://task-master-black.vercel.app/",
    githubUrl: "https://github.com/sreecharan-desu/TaskMaster",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    image: "/project-images/taskmaster.png",
    stars: 3,
    forks: 1,
    watchers: 2
  },
  {
    title: "ChromaPost",
    description: "An online ad generator built with modern web technologies.",
    liveUrl: "https://chromapost.vercel.app/",
    githubUrl: "https://github.com/sreecharan-desu/ChromaPost",
    tech: ["React", "TypeScript", "Vite", "TailwindCSS"],
    image: "/project-images/chromapost.png",
    stars: 4,
    forks: 2,
    watchers: 3
  },
  {
    title: "StudySpace",
    description: "Platform for students to join study groups and collaborate offline.",
    liveUrl: "https://studyspace-exp.vercel.app/",
    githubUrl: "https://github.com/sreecharan-desu/Studyspace",
    tech: ["TypeScript", "React", "Recoil", "TailwindCSS"],
    image: "/project-images/studyspace.png",
    stars: 5,
    forks: 2,
    watchers: 4
  },
  {
    title: "GradeLite",
    description: "A grade management and visualization tool for students.",
    liveUrl: "https://sreecharan-desu.github.io/Gradelite/#GradeLite",
    githubUrl: "https://github.com/sreecharan-desu/Gradelite",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/project-images/gradelite.png",
    stars: 3,
    forks: 1,
    watchers: 2
  },
  {
    title: "EdgeAI",
    description: "AI-powered web application.",
    liveUrl: "https://edgeai.vercel.app/",
    githubUrl: "https://github.com/sreecharan-desu/EdgeAI",
    tech: ["React", "AI/ML", "TailwindCSS"],
    image: "/project-images/edgeai.png",
    stars: 4,
    forks: 2,
    watchers: 3
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isEven = index % 2 === 0

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isEven ? -50 : 50, 0, isEven ? -50 : 50]
  )
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      className="flex flex-col sm:flex-row gap-6 md:gap-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <motion.div
        className={`w-full sm:w-1/2 aspect-video sm:aspect-square rounded-xl overflow-hidden`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className={`w-full sm:w-1/2 ${!isEven ? 'sm:order-1' : ''}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h3>
        <p className="text-gray-600 mb-6">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Stats */}
        {project.githubData && (
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <FaStar className="text-yellow-400" />
              <span>{project.githubData.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaCodeBranch className="text-green-400" />
              <span>{project.githubData.forks_count}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaRegEye className="text-blue-400" />
              <span>{project.githubData.watchers_count}</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg
                     hover:bg-orange-600 transition-colors"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg
                     hover:bg-gray-900 transition-colors"
          >
            <FaGithub />
            <span>Source Code</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const [projectsWithData, setProjectsWithData] = useState<Project[]>(projects)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const updatedProjects = await Promise.all(
          projects.map(async (project) => {
            try {
              const repoName = project.githubUrl.split('/').slice(-2).join('/')
              const response = await fetch(`https://api.github.com/repos/${repoName}`, {
                headers: {
                  'Accept': 'application/vnd.github.v3+json',
                  // Add GitHub token if you have one
                  // 'Authorization': 'token YOUR_GITHUB_TOKEN'
                }
              })
              
              if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`)
              }
              
              const data = await response.json()
              console.log(`GitHub data for ${project.title}:`, data) // Debug log
              
              return {
                ...project,
                githubData: {
                  stargazers_count: data.stargazers_count,
                  forks_count: data.forks_count,
                  watchers_count: data.watchers_count
                }
              }
            } catch (error) {
              console.error(`Error fetching GitHub data for ${project.title}:`, error)
              return project
            }
          })
        )
        
        console.log('Updated projects with GitHub data:', updatedProjects) // Debug log
        setProjectsWithData(updatedProjects)
      } catch (error) {
        console.error('Error updating projects:', error)
      }
    }

    fetchGitHubData()
  }, [])

  return (
    <div name="projects" className="relative w-full min-h-screen bg-gradient-to-br from-white to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold inline-block relative group">
            <span className="relative z-10 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Explore my latest works that demonstrate my passion for creating innovative solutions.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsWithData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects