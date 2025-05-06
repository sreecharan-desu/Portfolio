import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'DocGen',
      role: 'Full Stack Intern',
      period: 'Mar 2025 - Apr 2025',
      location: 'Remote',
      type: 'Internship',
      logo: '/docgen-logo.png',
    },
  ];

  return (
    <section id="experience" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-black border border-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="text-xl font-medium text-white">{exp.company}</h3>
              </div>
              <p className="text-gray-300 mb-2">
                {exp.role} | {exp.period} | {exp.location} | {exp.type}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;