import { motion } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'

const About = () => {
  return (
    <div name="about" className="relative w-full min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-white text-gray-900 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <ParticlesBackground />
      </div>

      <div className="relative w-full max-w-[90%] xl:max-w-[1400px] mx-auto p-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl 
                     border border-orange-100/20 transition-all duration-300"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-4xl font-bold text-gray-900 border-b-4 border-orange-500 p-2 inline"
            >
              About Me
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-gray-800 mt-6 leading-relaxed tracking-wide"
            >
              Dedicated and detail-oriented Computer Science sophomore at Rajiv Gandhi University of
              Knowledge Technologies, specializing in full-stack web development. Proficient in modern web
              technologies, including the MERN stack, with a strong foundation in C, Java, JavaScript, TypeScript,
              React, Node.js, and Mongoose.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-gray-800 mt-4 leading-relaxed tracking-wide"
            >
              Experienced in developing scalable web applications, with a keen eye for minimalist and clean design. 
              Passionate about continuous learning and collaboration, with a proven track record of delivering 
              impactful projects such as TaskMaster and Study Space.
            </motion.p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-orange-50/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl 
                       border border-orange-100/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-orange-500">🏆</span> Achievements
              </h3>
              <ul className="list-disc list-inside text-gray-800 space-y-3">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="hover:text-orange-600 transition-colors"
                >
                  First Prize in Hackathon held at RGUKT, Ongole campus on the eve of Ornate 2k24
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="hover:text-orange-600 transition-colors"
                >
                  Organized and managed coding workshops at RGUKT
                </motion.li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-gradient-to-br from-orange-50/50 to-white backdrop-blur-sm p-8 rounded-2xl 
                       shadow-lg hover:shadow-xl border border-orange-100/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-orange-500">🎓</span> Education
              </h3>
              <div className="text-gray-800 space-y-2">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="font-semibold text-lg text-orange-600"
                >
                  Bachelor of Technology in Computer Science
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                  className="font-medium"
                >
                  Rajiv Gandhi University of Knowledge Technologies
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="text-gray-600"
                >
                  Expected Graduation: 2027
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About