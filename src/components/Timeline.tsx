import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChessKnight, FaMedal, FaExternalLinkAlt } from 'react-icons/fa';
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
  color?: string;
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
        'Head representative for Helping Hands Organization (HHO)'
      ],
      icon: <HiAcademicCap className="text-3xl" />,
      image: '/rgukt.jpg',
    },
    {
      title: 'RGUKT PRE-UNIVERSITY COURSE',
      subtitle: 'Mathematics, Physics, Chemistry',
      date: '2021 - 2023',
      achievements: [
        'Top 1% in the entrance examination (967/73,548)',
        '97% Academic Score'
      ],
      icon: <FaGraduationCap className="text-3xl" />,
    },
    {
      title: 'PRAGATHI HIGH SCHOOL',
      subtitle: 'Secondary School Education',
      date: '2020 - 2021',
      achievements: [
        'Chess Champion (school level)',
        'Chekumuki winners (mandal level)',
        'Topped in Talent test (district level)',
        'Perfect Attendance Award'
      ],
      icon: <FaChessKnight className="text-3xl" />,
    },
  ];

  return (
    <Element name="education" className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Academic Excellence</h2>
          <div className="w-24 h-1 mx-auto bg-gray-700 rounded-full"></div>
        </motion.div>

        <div className="relative space-y-12 md:space-y-16">
          {/* Central Timeline Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 h-full md:-translate-x-1/2">
            <div className="w-1 h-full bg-gray-800 rounded-full" />
          </div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.title}
              className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              } md:max-w-[90%] mx-auto`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="relative z-20 flex-shrink-0 mr-6 md:mr-0 md:mx-6">
                <motion.div
                  className="w-12 h-12 rounded-full bg-black border border-gray-800 flex items-center justify-center text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {event.icon}
                </motion.div>
                <div className="md:hidden absolute top-12 left-1/2 h-full w-px bg-gray-800" />
              </div>

              {/* Content Card */}
              <motion.div
                className={`flex-1 p-6 bg-black rounded-lg border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                } md:w-[85%]`}
                whileHover={{ scale: 1.03 }}
              >
                <div className="space-y-4">
                  {/* Title and Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{event.title}</h3>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-white self-start sm:self-auto whitespace-nowrap">
                      {event.date}
                    </span>
                  </div>

                  
                  {/* Subtitle */}
                  <p className="text-gray-300 text-sm mb-4">{event.subtitle}</p>

                  {/* Achievements */}
                  {event.achievements && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white">Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-800 text-gray-200 text-xs rounded hover:bg-gray-700 transition flex items-center"
                          >
                            <FaMedal className="mr-1 text-gray-400" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Link */}
                  {event.image && (
                    <div className="flex items-center space-x-4 mt-4">
                      <a
                        href="#"
                        className="text-white hover:text-gray-300 transition flex items-center space-x-1"
                        aria-label={`Learn more about ${event.title}`}
                      >
                        <span className="text-sm">Learn more</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Timeline;