import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiPrisma, SiPostgresql, SiFlask, SiVercel, SiPostman, SiMysql, SiCss3, SiBootstrap, SiHtml5, SiNetlify, SiExpress, SiMongodb, SiRecoil, SiAwsamplify, SiGithubactions, SiMui, SiNextdotjs, SiDocker, SiPhp} from 'react-icons/si'
import { FaGit, FaPython, FaNode } from 'react-icons/fa'

const Skills = () => {
  const skills = [
    // Frontend Core + Popular Frameworks
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Recoil", icon: SiRecoil, color: "#764ABC" },
    { name: "PHP", icon: SiPhp, color: "#4FC08D" },
  
    // Backend Technologies
    { name: "Node.js", icon: FaNode, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Flask", icon: SiFlask, color: "#000000" },
  
    // Databases & ORM
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  
    // DevOps & Cloud
    { name: "Docker", icon: SiDocker, color: "#326CE5" },
    { name: "AWS", icon: SiAwsamplify, color: "#232F3E" },
    { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
  
    // Web Technologies & UI
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Material UI", icon: SiMui, color: "#0081CB" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  
    // Version Control & Tools
    { name: "Git", icon: FaGit, color: "#F05032" },
    { name: "RESTful APIs", icon: SiPostman, color: "#FF6C37" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  ];
  
  return (
    <Element name="skills" className="min-h-screen py-32 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/5 to-yellow-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -20, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent tracking-tight relative">
            Skills
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 
                        bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '8rem' }}
              transition={{ duration: 0.7 }}
            />
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ y: -3 }}
              className="group"
            >
              <motion.div
                className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-md 
                         border border-white/20 hover:border-orange-200/50 
                         hover:shadow-orange-500/20 transition-all duration-200
                         flex flex-col items-center justify-center gap-3"
                whileHover={{ scale: 1.01 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl text-gray-700 transition-colors duration-200"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <skill.icon />
                </motion.div>
                <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Element>
  )
}

export default Skills