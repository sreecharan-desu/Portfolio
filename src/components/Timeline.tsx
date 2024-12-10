import { motion } from 'framer-motion'
import { FaGraduationCap, FaChessKnight } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'

interface TimelineEvent {
  title: string
  subtitle: string
  date: string
  description?: string
  activities?: string[]
  icon: JSX.Element
  image?: string
}

const Timeline = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      title: "RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES, ONGOLE",
      subtitle: "Bachelor of Technology - BTech, Computer Science",
      date: "Aug 2023 - Apr 2027",
      icon: <HiAcademicCap className="text-orange-500 text-2xl" />,
      image: "/rgukt.jpg" // Add your university image here
    },
    {
      title: "RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES, ONGOLE",
      subtitle: "PUC, Pre-University Course",
      date: "Dec 2021 - Jul 2023",
      description: "Completed Pre University Course",
      icon: <FaGraduationCap className="text-orange-500 text-2xl" />
    },
    {
      title: "Pragathi High School",
      subtitle: "Secondary School Education",
      date: "Jun 2020 - Mar 2021",
      description: "Completed Secondary School Education Successfully",
      activities: ["Chess Player"],
      icon: <FaChessKnight className="text-orange-500 text-2xl" />
    }
  ]

  return (
    <div name="education" className="w-full min-h-screen bg-gradient-to-br from-white to-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
            Educational Journey
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My academic path and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-orange-500 to-orange-300 
                        transform md:-translate-x-1/2" />

          {/* Timeline Events */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full 
                              transform -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className="w-full md:w-5/12 p-4 sm:p-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-orange-200
                             transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="p-2 bg-orange-100 rounded-lg">{event.icon}</span>
                      <div>
                        <h3 className="font-bold text-gray-800">{event.title}</h3>
                        <p className="text-orange-500">{event.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                    
                    {event.description && (
                      <p className="text-gray-600 mt-2">{event.description}</p>
                    )}
                    
                    {event.activities && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-700">Activities:</p>
                        <ul className="list-disc list-inside text-gray-600 text-sm">
                          {event.activities.map((activity, idx) => (
                            <li key={idx}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {event.image && (
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-40 object-cover rounded-lg mt-4"
                      />
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline 