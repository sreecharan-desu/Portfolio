import { motion } from 'framer-motion';
import { JSX } from 'react';
import { FaGraduationCap, FaChessKnight, FaMedal } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import { Element } from 'react-scroll';

interface TimelineEvent {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  achievements?: string[];
  icon: JSX.Element;
  image?: string;
}

const Timeline = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      title: 'RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES',
      subtitle: 'Bachelor of Technology - BTech, Computer Science',
      date: '2023 - 2027',
      achievements: [
        'Team lead for the only O21 batch selected for the Inter-University TechHackathon (2025)',
        '3X Hackathon winner',
        'First Prize in Hackathon 2024',
        'Been a member of TechXcel',
        'Head representative for Helping Hands Organization (HHO)',
      ],
      icon: <HiAcademicCap className="text-3xl text-white" />,
      image: '/rgukt.jpg',
    },
    {
      title: 'RGUKT PRE-UNIVERSITY COURSE',
      subtitle: 'Mathematics, Physics, Chemistry',
      date: '2021 - 2023',
      achievements: ['Top 1% in the entrance examination (967/73,548)', '97% Academic Score'],
      icon: <FaGraduationCap className="text-3xl text-white" />,
    },
    {
      title: 'PRAGATHI HIGH SCHOOL',
      subtitle: 'Secondary School Education',
      date: '2020 - 2021',
      achievements: [
        'Chess Champion (school level)',
        'Chekumuki winners (mandal level)',
        'Topped in Talent test (district level)',
        'Perfect Attendance Award',
      ],
      icon: <FaChessKnight className="text-3xl text-white" />,
    },
  ];

  return (
    <Element
      name="education"
      className="min-h-screen py-20 bg-black text-white relative overflow-hidden mb-14"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Academic Excellence</h2>
          <div className="w-24 h-1 mx-auto bg-white rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line - Enhanced for aesthetics */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full">
            <div className="w-px md:w-1 h-full bg-white/80 blur-[0.2px]"></div>

            {/* Decorative elements along the timeline */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full left-1/2 transform -translate-x-1/2"
                style={{ top: `${(i + 1) * 20}%`, opacity: 0.8 }}
              />
            ))}
          </div>

          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 z-10 transform -translate-x-1/2">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-black border-2 border-white flex items-center justify-center shadow-lg shadow-white/10"
                    whileHover={{ scale: 1.15, borderColor: '#ffffff' }}
                    transition={{ duration: 0.3 }}
                  >
                    {event.icon}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} md:w-[45%]`}
                >
                  <motion.div
                    className="p-6 bg-black border border-white/80 rounded-lg shadow-lg shadow-white/5"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                      borderColor: '#ffffff',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-4">
                      {/* Title and Date */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <h3 className="text-xl font-bold tracking-tight">{event.title}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-black self-start whitespace-nowrap">
                          {event.date}
                        </span>
                      </div>

                      {/* Subtitle */}
                      <p className="text-white/70 text-sm">{event.subtitle}</p>

                      {/* Achievements */}
                      {event.achievements && (
                        <div className="space-y-3 pt-2">
                          <h4 className="text-sm font-semibold uppercase tracking-wider">
                            Achievements
                          </h4>
                          <div className="grid gap-2">
                            {event.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                className="px-3 py-2 bg-white/10 border border-white/20 text-white text-xs rounded-md flex items-center"
                                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                              >
                                <FaMedal className="mr-2 text-white/80" />
                                <span>{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Link */}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-5">
        <div className="absolute top-0 left-0 w-full h-full border border-white/20 rounded-full transform scale-75"></div>
        <div className="absolute top-0 left-0 w-full h-full border border-white/20 rounded-full transform scale-100"></div>
        <div className="absolute top-0 left-0 w-full h-full border border-white/20 rounded-full transform scale-125"></div>
      </div>
    </Element>
  );
};

export default Timeline;
