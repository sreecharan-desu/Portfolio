import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { courses } from '@/lib/socials';

const SmoothMarquee = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const duplicatedCourses = [...courses, ...courses];

  const CourseCard = ({ course, index }: any) => {
    const isTooltipActive = activeTooltip === `${course.id}-${index}`;
    const cardRef = useRef<HTMLDivElement>(null);

    const handleTooltipToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
      e.preventDefault();
      setActiveTooltip(isTooltipActive ? null : `${course.id}-${index}`);
    };

    useEffect(() => {
      if (isTooltipActive && cardRef.current) {
        cardRef.current.focus();
      }
    }, [isTooltipActive]);

    return (
      <div
        ref={cardRef}
        className="flex-shrink-0 w-[20rem] sm:w-[26rem] md:w-[32rem] h-[12rem] sm:h-[16rem] md:h-[18rem] mx-3 relative overflow-hidden rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
        onClick={handleTooltipToggle}
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleTooltipToggle(e);
          }
        }}
        aria-label={`Details for ${course.title}: ${course.subtitle}`}
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 20rem, (max-width: 768px) 26rem, 32rem"
          loading="eager"
          priority
        />
        <div className="relative z-10 p-5 h-full flex flex-col justify-end text-white bg-gradient-to-t from-black/50 to-transparent">
          <div className="text-base font-medium tracking-widest uppercase opacity-90">
            {course.subtitle}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold leading-tight mt-1">{course.title}</h3>
          <div
            className={`absolute inset-0 bg-black/80 p-5 sm:p-6 flex flex-col justify-center text-sm sm:text-base transition-opacity duration-300 z-20 ${
              isTooltipActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <p className="font-light leading-relaxed">{course.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-10 bg-black">
      <div className="w-full bg-black">
        <div
          ref={marqueeRef}
          className="relative max-w-[100vw] mx-auto overflow-hidden"
          role="region"
          aria-label="Showcase of milestones and moments"
        >
          <div className="absolute left-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div
            className="flex animate-marquee"
            style={{
              width: `calc(${duplicatedCourses.length} * (32rem + 1.5rem))`,
              animationDuration: '30s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
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
            transform: translateX(-50%);
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

        .header-container {
          position: relative;
          text-align: center;
          margin-bottom: 2.5rem;
          padding: 0 1rem;
        }

        .header-text {
          font-family: 'Inter', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.1;
          text-transform: uppercase;
          position: relative;
          z-index: 2;
        }

        .header-accent {
          position: absolute;
          bottom: -0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 6rem;
          height: 0.5rem;
          background: linear-gradient(90deg, #ff6b00 0%, #ffd700 100%);
          border-radius: 2px;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .header-text {
            font-size: 2.5rem;
          }

          .header-accent {
            width: 4rem;
            height: 0.4rem;
          }
        }

        @media (max-width: 480px) {
          .header-text {
            font-size: 2rem;
          }

          .header-accent {
            width: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SmoothMarquee;
