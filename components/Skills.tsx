'use client';

import { Element } from 'react-scroll';
import {
  SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiPrisma, SiPostgresql,
  SiFlask, SiVercel, SiPostman, SiMysql, SiCss3, SiBootstrap, SiHtml5,
  SiNetlify, SiExpress, SiMongodb, SiRecoil, SiAwsamplify, SiGithubactions,
  SiMui, SiNextdotjs, SiDocker, SiPhp, SiTurborepo, SiMoonrepo, SiLinux, SiBun
} from 'react-icons/si';
import { FaGit, FaPython, FaNode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <SiReact color='#61DAFB' /> },
    { name: 'Next.js', icon: <SiNextdotjs color='#FFFFFF' /> },
    { name: 'TypeScript', icon: <SiTypescript color='#3178C6' /> },
    { name: 'JavaScript', icon: <SiJavascript color='#F7DF1E' /> },
    { name: 'HTML5', icon: <SiHtml5 color='#E34F26' /> },
    { name: 'CSS3', icon: <SiCss3 color='#1572B6' /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color='#06B6D4' /> },
    { name: 'Material UI', icon: <SiMui color='#0081CB' /> },
    { name: 'Bootstrap', icon: <SiBootstrap color='#7952B3' /> },
    { name: 'Bun.js', icon: <SiBun color='#F7B93E' /> },
    { name: 'Node.js', icon: <FaNode color='#68A063' /> },
    { name: 'Express.js', icon: <SiExpress color='#FFFFFF' /> },
    { name: 'PHP', icon: <SiPhp color='#4FC08D' /> },
    { name: 'Python', icon: <FaPython color='#3776AB' /> },
    { name: 'Flask', icon: <SiFlask color='#FFFFFF' /> },
    { name: 'PostgreSQL', icon: <SiPostgresql color='#336791' /> },
    { name: 'MongoDB', icon: <SiMongodb color='#47A328' /> },
    { name: 'MySQL', icon: <SiMysql color='#4479A1' /> },
    { name: 'Prisma', icon: <SiPrisma color='#FFFFFF' /> },
    { name: 'Docker', icon: <SiDocker color='#2496ED' /> },
    { name: 'AWS Amplify', icon: <SiAwsamplify color='#FF9900' /> },
    { name: 'GitHub Actions', icon: <SiGithubactions color='#2088FF' /> },
    { name: 'Vercel', icon: <SiVercel color='#FFFFFF' /> },
    { name: 'Netlify', icon: <SiNetlify color='#00C7B7' /> },
    { name: 'Turborepo', icon: <SiTurborepo color='#EF4444' /> },
    { name: 'Moonrepo', icon: <SiMoonrepo color='#FF6C37' /> },
    { name: 'Git', icon: <FaGit color='#F05032' /> },
    { name: 'Recoil', icon: <SiRecoil color='#764ABC' /> },
    { name: 'Linux', icon: <SiLinux color='#FCC624' /> },
    { name: 'Postman', icon: <SiPostman color='#FF6C37' /> },
  ];

  return (
    <Element name="skills" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl first-letter:text-5xl                                                                                                                                    sm:text-4xl font-bold text-white text-center mb-12 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Tools
        </motion.h2>
        <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              title={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-2xl opacity-80 rounded-full group-hover:opacity-100 transition-opacity duration-300">
                {skill.icon}
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skills;