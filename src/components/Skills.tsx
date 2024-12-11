import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaGit } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiJavascript, SiPostgresql, SiTailwindcss } from 'react-icons/si'
import { 
  SiHtml5, SiCss3, SiBootstrap, SiVercel, SiPrisma, 
  SiMysql, SiExpress, SiFlask, SiNetlify, SiC 
} from 'react-icons/si'
import { BiLogoJava } from 'react-icons/bi'
import { SiPostman } from 'react-icons/si'


const Skills = () => {
  const skills = [
    // Frontend Core + Popular Frameworks
    { name: "React", icon: FaReact, color: "#61DAFB", delay: 0.2 },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", delay: 0.3 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", delay: 0.4 },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", delay: 0.5 },
    
    // Backend Technologies
    { name: "Node.js", icon: FaNodeJs, color: "#339933", delay: 0.6 },
    { name: "Express", icon: SiExpress, color: "#000000", delay: 0.7 },
    { name: "Python", icon: FaPython, color: "#3776AB", delay: 0.8 },
    { name: "Flask", icon: SiFlask, color: "#000000", delay: 0.9 },
    
    // Databases & ORM
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", delay: 1.0 },
    { name: "MySQL", icon: SiMysql, color: "#4479A1", delay: 1.1 },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748", delay: 1.2 },
    
    // Core Web Technologies
    { name: "HTML", icon: SiHtml5, color: "#E34F26", delay: 1.3 },
    { name: "CSS", icon: SiCss3, color: "#1572B6", delay: 1.4 },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", delay: 1.5 },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", delay: 1.6 },
    
    // Programming Languages
    { name: "Java", icon: BiLogoJava, color: "#007396", delay: 1.7 },
    { name: "C", icon: SiC, color: "#A8B9CC", delay: 1.8 },
    
    // Development Tools & Deployment
    { name: "Git", icon: FaGit, color: "#F05032", delay: 1.9 },
    { name: "RESTful APIs", icon: SiPostman, color: "#FF6C37", delay: 2.0 },
    { name: "Vercel", icon: SiVercel, color: "#000000", delay: 2.1 },
    { name: "Netlify", icon: SiNetlify, color: "#00C7B7", delay: 2.2 }
  ]

  return (
    <Element name="skills" className="min-h-screen flex items-center justify-center relative overflow-hidden 
                                    bg-gradient-to-br from-gray-50 to-white px-3 sm:px-4">
      <div className="container mx-auto py-10 sm:py-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16 
                    bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
        >
          Technical Arsenal
        </motion.h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 
                      gap-2 sm:gap-4 md:gap-6 max-w-7xl mx-auto px-1 sm:px-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.3, delay: skill.delay * 0.5 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.1 }
              }}
              className="group relative"
            >
              <motion.div 
                className="flex flex-col items-center justify-center p-1.5 sm:p-2 md:p-3 
                          bg-white/80 shadow-md hover:shadow-lg transition-all duration-200
                          backdrop-blur-md border border-opacity-20 rounded-lg sm:rounded-xl 
                          w-full h-16 sm:h-24 md:h-32"
                style={{
                  borderColor: `${skill.color}40`,
                  background: `linear-gradient(135deg, white, ${skill.color}15)`
                }}
              >
                <skill.icon 
                  className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 mb-1 sm:mb-2 
                            transition-all duration-200"
                  style={{ color: skill.color }}
                />
                <p 
                  className="text-[0.55rem] sm:text-[0.65rem] md:text-sm font-medium 
                            text-center transition-all duration-200 leading-tight"
                  style={{ color: skill.color }}
                >
                  {skill.name}
                </p>
              </motion.div>

              {/* Enhanced Glow Effect */}
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r rounded-lg sm:rounded-xl opacity-0 
                          group-hover:opacity-40 blur-md transition-opacity duration-200"
                style={{ 
                  background: `radial-gradient(circle at center, ${skill.color}50, transparent)` 
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Skills