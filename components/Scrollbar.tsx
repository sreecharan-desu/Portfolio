/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SmoothMarquee = () => {
  const [isPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const courses = [
    {
      id: 1,
      title: "Women Safety PWA",
      subtitle: "HACKATHON PROJECT",
      description: "Developed a progressive web app for women’s safety at a hackathon at RGUKT Ongole (IIIT AP), focusing on real-time assistance and user-friendly design.",
      image: "/scroll-bar/hackathon.jpg",
    },
    {
      id: 2,
      title: "Award Ceremony",
      subtitle: "ORNATE 2025",
      description: "Received an award from the Director at Ornate 2025, RGUKT Ongole (IIIT AP), recognizing my contributions in hackathons and academics.",
      image: "/scroll-bar/price.jpg",
    },
    {
      id: 3,
      title: "Dance Performance",
      subtitle: "ORNATE 2025",
      description: "Performed a dance at Ornate 2025, showcasing my creative side at RGUKT Ongole (IIIT AP) cultural fest.",
      image: "/scroll-bar/dance-performance.jpg",
    },
    {
      id: 4,
      title: "YouTube Insights",
      subtitle: "CONTENT CREATION",
      description: "Run a YouTube channel sharing insights on tech, coding, and student life at RGUKT Ongole (IIIT AP).",
      image: "/scroll-bar/youtube-channel.png",
    },
  ];

  const duplicatedCourses = [...courses, ...courses];

  const CourseCard = ({ course, index }: any) => {
    const isTooltipActive = activeTooltip === `${course.id}-${index}`;

    const handleTooltipToggle = () => {
      setActiveTooltip(isTooltipActive ? null : `${course.id}-${index}`);
    };

    return (
      <motion.div
        className="flex-shrink-0 mb-20 w-[20rem] sm:w-[26rem] md:w-[30rem] h-[12rem] sm:h-[16rem] md:h-[18rem] mx-3 relative overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-white/50"
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={handleTooltipToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveTooltip(null);
        }}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleTooltipToggle();
          }
        }}
        aria-label={`View details about ${course.title}`}
      >
        {/* Background image */}
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 20rem, (max-width: 768px) 26rem, 30rem"
          priority
        />

        {/* Content */}
        <div className="relative z-10 p-5 h-full flex flex-col justify-end text-white bg-gradient-to-t from-black/50 to-transparent">
          <div className="text-base font-medium tracking-widest uppercase opacity-90">
            {course.subtitle}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold leading-tight mt-1">
            {course.title}
          </h3>

          {/* Tooltip */}
          <div
            className={`absolute inset-0 bg-black/80 p-5 sm:p-6 flex flex-col justify-center text-sm sm:text-base transition-opacity duration-300 ${
              isTooltipActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } md:opacity-0 md:group-hover:opacity-100 md:group-hover:pointer-events-auto`}
          >
            <p className="font-light leading-relaxed">{course.description}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full py-10 -mt-14  bg-black">
      <div className="w-full bg-black">
        <div
          className="relative max-w-[100vw] mx-auto overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role="region"
          aria-label="Achievements showcase carousel"
        >
          <div className="absolute left-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div
            className={`flex ${isPlaying && !isHovered ? 'animate-marquee' : ''}`}
            style={{
              width: `${duplicatedCourses.length * (480 + 24)}px`, // Adjusted for w-[30rem] + mx-3
              animationDuration: '100s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationPlayState: isPlaying && !isHovered ? 'running' : 'paused',
            }}
          >
            {duplicatedCourses.map((course, index) => (
              <CourseCard
                key={`${course.id}-${Math.floor(index / courses.length)}`}
                course={course}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${courses.length * (480 + 24)}px);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @media (max-width: 1024px) {
          .animate-marquee {
            animation-duration: 25s;
          }
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-duration: 60s;
          }
        }
      `}</style>
    </div>
  );
};

export default SmoothMarquee;