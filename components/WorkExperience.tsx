'use client';

import { experiences } from '@/lib/socials';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WorkExperience = () => {
  return (
    <section className="bg-black py-16 -mb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl first-letter:text-5xl sm:text-4xl font-bold text-white text-center mb-12 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-5 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  {/* Logo */}
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={48}
                        height={48}
                        className="object-contain p-2"
                      />
                    ) : (
                      <span className="text-xl font-bold text-white">{exp.company.charAt(0)}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-200"
                    >
                      {exp.company}
                    </a>
                    <p className="text-sm text-gray-300 font-medium mt-0.5">{exp.role}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-400">
                      <span>{exp.period}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-500" />
                      <span>{exp.location}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-500" />
                      <span className="bg-white/10 text-gray-200 px-2 py-0.5 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
