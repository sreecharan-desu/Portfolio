'use client';

import { Element } from 'react-scroll';
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import YouTubeSection from '@/components/YoutubeSection';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testinomials';
import FreelanceServices from '@/components/FreelanceServices'; // Add this import

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';

// FloatingResumeButton component remains unchanged
const FloatingResumeButton = () => {
  const [showText, setShowText] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    setIsTouchDevice(isTouch);
  }, []);

  const handleTouchStart = useCallback(() => {
    if (!isTouchDevice) return;
    setShowText(true);
    const timeout = setTimeout(() => setShowText(false), 2000);
    return () => clearTimeout(timeout);
  }, [isTouchDevice]);

  const handleMouseEnter = useCallback(() => {
    if (!isTouchDevice) setShowText(true);
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    if (!isTouchDevice) setShowText(false);
  }, [isTouchDevice]);

  return (
    <motion.a
      href="/DESU-SREECHARAN-RESUME.pdf"
      download
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-2 px-3 py-3 md:px-4 md:py-4 bg-black/40 text-white text-sm md:text-base font-medium rounded-full border border-white/20 backdrop-blur-md shadow-lg hover:bg-black/60 transition-all duration-300 overflow-hidden ${
        showText ? 'w-28 md:w-32' : 'w-12 md:w-14'
      }`}
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0],
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 2,
          ease: 'easeInOut',
        },
      }}
      whileHover={
        !isTouchDevice
          ? {
              scale: 1.05,
              width: 128,
              boxShadow: '0 8px 24px rgba(255, 255, 255, 0.2)',
            }
          : {}
      }
      whileTap={{ scale: 0.95 }}
      onTouchStart={handleTouchStart}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Download SreeCharan's Resume"
    >
      <FaFileDownload className="text-base md:text-lg flex-shrink-0" />
      <motion.span
        className="whitespace-nowrap"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: showText ? 1 : 0, x: showText ? 0 : -10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        Resume
      </motion.span>
    </motion.a>
  );
};

export default function PortfolioPage() {
  return (
    <div className="bg-black">
      <div className="bg-black text-white lg:ml-20 lg:mr-20">
        <Element name="home" className="m-0 p-0 bg-black">
          <div className="bg-black -mt-20 pt-23">
            <Hero />
          </div>
        </Element>

        <Element name="projects" className="m-0 p-0">
          <Projects />
        </Element>



        <Element name="work-experience" className="m-0 p-0">
          <WorkExperience />
        </Element>



        <Element name="testinomials" className="m-0 p-0">
          <Testimonials />
        </Element>



        <Element name="skills" className="m-0 p-0">
          <Skills />
        </Element>

        <Element name="youtube" className="m-0 p-0">
          <YouTubeSection />
        </Element>

        <Element name="freelance-services" className="m-0 p-0">
          <FreelanceServices />
        </Element>

        <Element name="footer" className="m-0 p-0">
          <Footer />
        </Element>
      </div>

      {/* Floating Resume Button */}
      <FloatingResumeButton />
    </div>
  );
}