import React from 'react';

const Timeline = () => {
  const timelineEvents = [
    {
      title: 'Rajiv Gandhi University of Knowledge Technologies',
      subtitle: 'B.Tech in Computer Science and Engineering',
      date: '2023 – 2027',
      achievements: [
        'Shortlisted for Flipkart GRID 7.0 National Coding Challenge – 2025',
        'Team Lead – Only O21 batch selected for Inter-University TechHackathon (2025)',
        '3× Hackathon Winner',
        'Office Bearer – TechXcel Club',
        'Head Representative – Helping Hands Organization (HHO)',
        'Organized multiple technical workshops and events',
        'Created and maintained a personal YouTube channel (~300 subscribers)',
        'Gained 1.6k followers on LinkedIn',
      ],
    },
    {
      title: 'RGUKT Pre-University Course',
      subtitle: 'Specialization in Mathematics, Physics, and Chemistry',
      date: '2021 – 2023',
      achievements: [
        'Top 1% in RGUKT Entrance Exam (967 out of 73,548)',
        'Achieved 97% academic score',
      ],
    },
    {
      title: 'Pragathi High School',
      subtitle: 'Secondary School Education (Class X)',
      date: '2020 – 2021',
      achievements: [
        'School-level Chess Champion',
        'Mandal-level Chekumuki Science Quiz Winner',
        'District Topper – Talent Test',
        'Perfect Attendance Award',
        'Achieved 10/10 CGPA in Class X',
        'Participated in various inter-school competitions',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wider mb-4">
            Academic Excellence
          </h2>
          <div className="w-16 h-px bg-white mx-auto opacity-60"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-8 sm:left-12 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-30 lg:transform lg:-translate-x-1/2"></div>

          {/* Timeline Events */}
          <div className="space-y-16 lg:space-y-24">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                } items-start lg:items-center`}
              >
                {/* Content Card */}
                <div
                  className={`ml-16 sm:ml-20 lg:ml-0 lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                  }`}
                >
                  <div className="group">
                    {/* Date Badge */}
                    <div className="inline-block mb-4">
                      <span className="px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-white text-black">
                        {event.date}
                      </span>
                    </div>

                    {/* Main Content */}
                    <div className="border border-white/20 bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:border-white/40 group-hover:bg-black/70">
                      <div className="p-6 sm:p-8">
                        {/* Title Section */}
                        <div className="mb-6">
                          <h3 className="text-xl sm:text-2xl font-light mb-2 leading-tight">
                            {event.title}
                          </h3>
                          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                            {event.subtitle}
                          </p>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-white/80">
                            Key Achievements
                          </h4>
                          <div className="space-y-3">
                            {event.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start text-sm leading-relaxed">
                                <div className="w-1 h-1 bg-white rounded-full mt-2.5 mr-3 flex-shrink-0 opacity-60"></div>
                                <span className="text-white/90">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-24 text-center">
          <div className="inline-block w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-40"></div>
        </div>
      </div>

      {/* Subtle Background Pattern
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/5 rounded-full"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 border border-white/5 rounded-full transform -translate-x-1/2"></div>
      </div> */}
    </div>
  );
};

export default Timeline;
