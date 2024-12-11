import { motion } from 'framer-motion'
import { FaGraduationCap, FaChessKnight, FaMedal } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'
import { Element } from 'react-scroll'

interface TimelineEvent {
  title: string
  subtitle: string
  date: string
  description?: string
  achievements?: string[]
  icon: JSX.Element
  image?: string
  color?: string
}

const Timeline = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      title: "RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES",
      subtitle: "Bachelor of Technology - BTech, Computer Science",
      date: "2023 - 2027",
      achievements: [
        "First Prize in Hackathon 2024",
        "Core Team Member of Tech Club",
        "Active Open Source Contributor"
      ],
      icon: <HiAcademicCap className="text-3xl" />,
      image: "/rgukt.jpg",
      color: "orange"
    },
    {
      title: "RGUKT PRE-UNIVERSITY COURSE",
      subtitle: "Mathematics, Physics, Chemistry",
      date: "2021 - 2023",
      achievements: [
        "Top 5% in Entrance Examination",
        "Mathematics Club Coordinator",
        "98.5% Academic Score"
      ],
      icon: <FaGraduationCap className="text-3xl" />,
      color: "blue"
    },
    {
      title: "PRAGATHI HIGH SCHOOL",
      subtitle: "Secondary School Education",
      date: "2020 - 2021",
      achievements: [
        "District Level Chess Champion",
        "School First in Mathematics",
        "Perfect Attendance Award"
      ],
      icon: <FaChessKnight className="text-2xl sm:text-3xl" />,
      color: "green"
    }
  ]

  return (
    <Element name="education" className="relative min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden 
                                     bg-gradient-to-br from-white to-gray-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/10 to-transparent" />
  
      <div className="relative w-full max-w-[95%] sm:max-w-[90%] xl:max-w-[1400px] mx-auto px-3 sm:px-4 z-10">
        {/* Enhanced Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 
                       bg-clip-text text-transparent pb-2">
            Educational Journey
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-2 max-w-2xl mx-auto">
            A timeline of academic achievements and milestones that have shaped my path in technology
          </p>
        </motion.div>
  
        <motion.div className="space-y-12 sm:space-y-16 md:space-y-24 relative">
          {/* Central Timeline Line - Enhanced for desktop */}
          <div className="absolute left-[21px] md:left-1/2 top-0 h-full md:-translate-x-1/2">
            <div className="hidden md:block w-0.5 h-full bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200 
                         rounded-full shadow-lg" />
            <div className="md:hidden w-0.5 h-full bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200 
                         transform translate-x-[5px]" />
          </div>
  
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center md:items-start 
                       ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}
                       md:mx-auto md:max-w-[90%]`}
            >
              {/* Content Container - Enhanced for desktop */}
              <motion.div 
                className={`relative md:w-[42%] flex flex-row items-start gap-4 sm:gap-6 
                         ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                         md:hover:w-[45%] transition-all duration-300`}
              >
                {/* Icon with Enhanced Visual Effects */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-20 flex-shrink-0"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white shadow-lg 
                              border-2 border-orange-200 p-2 sm:p-2.5 md:p-3
                              transition-all duration-300 hover:border-orange-400
                              hover:shadow-orange-200/50 hover:rotate-12">
                    <div className="w-full h-full flex items-center justify-center 
                                text-orange-500 transition-colors duration-300">
                      {event.icon}
                    </div>
                  </div>
                  {/* Enhanced Connecting Line */}
                  <div className="md:hidden absolute top-12 left-1/2 h-full w-px 
                              bg-gradient-to-b from-orange-200 to-transparent" />
                </motion.div>
  
                {/* Content Card with Enhanced Desktop Interactivity */}
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex-1 p-4 sm:p-5 md:p-8 bg-white rounded-xl shadow-md hover:shadow-xl
                           border border-orange-100/20 hover:border-orange-200
                           transition-all duration-300 transform
                           ${index % 2 === 0 ? 'origin-left' : 'origin-right'}
                           md:hover:bg-orange-50/10`}
                >
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    {/* Title and Date */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-tight">
                        {event.title}
                      </h3>

                    </div>
                    <span className="inline-flex items-center py-0.5 px-4 sm:py-1 
                                   text-xs sm:text-sm font-medium text-orange-500 
                                   bg-orange-50 rounded-full">
                        {event.date}
                      </span>
                    {/* Subtitle */}
                    <p className="text-sm sm:text-base text-gray-600 font-medium">
                      {event.subtitle}
                    </p>
                    
                    {/* Achievements */}
                    {event.achievements && (
                      <motion.div className="space-y-2 pt-2 border-t border-gray-100">
                        {event.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className="flex items-start gap-2 group"
                          >
                            <FaMedal className="text-orange-400 flex-shrink-0 mt-1 
                                            transform group-hover:scale-110 transition-transform" />
                            <span className="text-sm sm:text-base text-gray-600 
                                         group-hover:text-gray-800 transition-colors">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Element>
  )
}

export default Timeline