import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiPrisma, SiPostgresql, SiFlask, SiVercel, SiPostman, SiC, SiMysql, SiCss3, SiBootstrap, SiHtml5, SiNetlify, SiExpress } from 'react-icons/si'
import { FaGit, FaPython, FaNode } from 'react-icons/fa'
import { BiLogoJava } from 'react-icons/bi'

const Skills = () => {
  const skills = [
   // Frontend Core + Popular Frameworks
   { name: "React", icon: SiReact       , color: "#61DAFB", delay: 0.2 },
   { name: "Next.js", icon: SiNextdotjs, color: "#000000", delay: 0.3 },
   { name: "TypeScript", icon: SiTypescript, color: "#3178C6", delay: 0.4 },
   { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", delay: 0.5 },
   
   // Backend Technologies
   { name: "Node.js", icon: FaNode, color: "#339933", delay: 0.6 },
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
    <Element name="skills" className="min-h-screen py-32 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/5 to-yellow-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent tracking-tight relative">
            Skills
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 
                        bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '8rem' }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <motion.div
                className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg 
                           border border-white/20 hover:border-orange-200/50 
                           hover:shadow-orange-500/20 transition-all duration-300
                           flex flex-col items-center justify-center gap-4
                           ${skill.color}`}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl text-gray-700 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon />
                </motion.div>
                <p className="text-lg font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-r from-orange-300/10 to-yellow-300/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-gradient-to-l from-orange-300/10 to-yellow-300/10 rounded-full blur-2xl" />
      </div>

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[100px] pointer-events-none" />
    </Element>
  )
}

export default Skills