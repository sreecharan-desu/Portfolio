import { motion } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name="about" className="relative w-full min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-white 
                                   text-gray-900 py-8 sm:py-12 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <ParticlesBackground />
      </div>

      <div className="relative w-full max-w-[95%] sm:max-w-[90%] xl:max-w-[1400px] mx-auto px-3 sm:px-4 z-10">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 
                       bg-clip-text text-transparent pb-2">
            About Me
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-2 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Main About Section - 7 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg 
                     hover:shadow-xl border border-orange-100/20 transition-all duration-300"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm a Computer Science sophomore at RGUKT, passionate about creating efficient, 
                user-friendly applications and contributing to open-source projects.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My journey in technology is driven by curiosity and a desire to solve real-world 
                problems through innovative solutions. I specialize in full-stack development 
                and am constantly exploring new technologies.
              </p>
            </div>
          </motion.div>

          {/* Stats & Quick Info - 5 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-md 
                         hover:shadow-lg border border-orange-100/20 text-center"
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-orange-500">10+</h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">Projects</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-md 
                         hover:shadow-lg border border-orange-100/20 text-center"
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-orange-500">100+</h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">Commits</p>
              </motion.div>
            </div>

            {/* Quick Info Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-orange-50/50 to-white backdrop-blur-sm p-6 sm:p-8 
                       rounded-xl shadow-lg border border-orange-100/20"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 
                           flex items-center gap-2">
                <span className="text-orange-500">🎯</span> Focus Areas
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-orange-500">•</span>
                  Full Stack Development
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-orange-500">•</span>
                  Open Source Contribution
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-orange-500">•</span>
                  UI/UX Design
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Element>
  )
}

export default About