import { motion, AnimatePresence } from 'framer-motion'
import { IconType } from 'react-icons'
import { useState } from 'react'
import { 
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, 
  SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiReact, 
  SiRecoil, SiNextdotjs, SiDocker, SiAmazonwebservices, SiGit, 
  SiGithub, SiC, SiPython, SiPrisma, SiPostgresql, SiVercel 
} from 'react-icons/si'

interface Skill {
  name: string
  icon: IconType
  color: string
  url: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'languages'
  level: 'Expert' | 'Advanced' | 'Intermediate'
}

const SkillSphere = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="group relative w-full"
    >
      <motion.a
        href={skill.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-square w-full"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className={`
          relative w-full h-full rounded-full
          bg-gradient-to-br from-white to-gray-100
          shadow-lg hover:shadow-xl
          flex flex-col items-center justify-center
          transform transition-all duration-300
          group-hover:shadow-2xl
          overflow-hidden
          border-2 border-transparent
          ${skill.level === 'Expert' 
            ? 'hover:border-orange-400' 
            : skill.level === 'Advanced'
            ? 'hover:border-blue-400'
            : 'hover:border-gray-400'
          }
        `}>
          {/* Glowing background effect */}
          <div className={`
            absolute inset-0 opacity-20 rounded-full blur-md
            ${skill.level === 'Expert' 
              ? 'bg-orange-300' 
              : skill.level === 'Advanced'
              ? 'bg-blue-300'
              : 'bg-gray-300'
            }
          `} />

          {/* Icon */}
          <skill.icon 
            className="text-2xl mb-1 transform transition-transform duration-300 group-hover:scale-110"
            style={{ color: skill.color }}
          />
          
          {/* Name */}
          <span className="text-[10px] font-medium text-gray-800 text-center px-1">
            {skill.name}
          </span>

          {/* Level indicator dot */}
          <div className={`
            absolute bottom-1 w-1.5 h-1.5 rounded-full
            ${skill.level === 'Expert' 
              ? 'bg-orange-500' 
              : skill.level === 'Advanced'
              ? 'bg-blue-500'
              : 'bg-gray-500'
            }
          `} />
        </div>
      </motion.a>
    </motion.div>
  )
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const skills: Skill[] = [
    { name: "React", icon: SiReact, color: "#61DAFB", url: "https://reactjs.org/", category: "frontend", level: "Expert" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", url: "https://www.typescriptlang.org/", category: "languages", level: "Expert" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", url: "https://nodejs.org/", category: "backend", level: "Expert" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", url: "https://nextjs.org/", category: "frontend", level: "Expert" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", url: "https://www.mongodb.com/", category: "database", level: "Advanced" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", url: "https://www.postgresql.org/", category: "database", level: "Advanced" },
    { name: "Express", icon: SiExpress, color: "#000000", url: "https://expressjs.com/", category: "backend", level: "Advanced" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748", url: "https://www.prisma.io/", category: "database", level: "Advanced" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", url: "https://www.docker.com/", category: "devops", level: "Intermediate" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900", url: "https://aws.amazon.com/", category: "devops", level: "Intermediate" },
    { name: "Vercel", icon: SiVercel, color: "#000000", url: "https://vercel.com/", category: "devops", level: "Advanced" },
    { name: "Git", icon: SiGit, color: "#F05032", url: "https://git-scm.com/", category: "devops", level: "Advanced" },
    { name: "GitHub", icon: SiGithub, color: "#181717", url: "https://github.com/", category: "devops", level: "Advanced" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", url: "https://tailwindcss.com/", category: "frontend", level: "Expert" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", url: "https://getbootstrap.com/", category: "frontend", level: "Advanced" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", category: "frontend", level: "Expert" },
    { name: "CSS", icon: SiCss3, color: "#1572B6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", category: "frontend", level: "Expert" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", category: "languages", level: "Expert" },
    { name: "C", icon: SiC, color: "#A8B9CC", url: "https://en.wikipedia.org/wiki/C_(programming_language)", category: "languages", level: "Intermediate" },
    { name: "Python", icon: SiPython, color: "#3776AB", url: "https://www.python.org/", category: "languages", level: "Intermediate" },
    { name: "Recoil", icon: SiRecoil, color: "#3578E5", url: "https://recoiljs.org/", category: "frontend", level: "Advanced" }
  ]

  const categories = ['all', 'frontend', 'backend', 'database', 'devops', 'languages']
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  return (
    <div name="skills" className="w-full py-12">
      <div className="w-full px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
            Technical Arsenal
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A comprehensive collection of technologies I've mastered throughout my journey.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                         ${selectedCategory === category 
                           ? 'bg-orange-500 text-white shadow-lg' 
                           : 'bg-white text-gray-600 hover:bg-orange-50'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid - Updated for full width */}
        <AnimatePresence>
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            {filteredSkills.map((skill) => (
              <div className="aspect-square w-full max-w-[120px] sm:max-w-[150px]">
                <SkillSphere key={skill.name} skill={skill} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Level Legend */}
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          {['Expert', 'Advanced', 'Intermediate'].map((level) => (
            <div key={level} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full
                ${level === 'Expert' ? 'bg-orange-500' :
                  level === 'Advanced' ? 'bg-blue-500' :
                  'bg-gray-500'}`} 
              />
              <span className="text-sm text-gray-600">{level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills