'use client';

import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import YouTubeSection from '@/components/YoutubeSection';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testinomials';
import FreelanceServices from '@/components/FreelanceServices';
import { FloatingResumeButton } from '@/components/ResumeButton';
import SmoothMarquee from '@/components/Scrollbar';
import Terminal from '@/components/CURL';

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // Micro-second blur duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-black transition-all duration-200 ${isLoading ? 'filter blur-[2px]' : ''}`}>
      <div className="bg-black text-white lg:ml-20 lg:mr-20">
        {/* Hero + Scrollbar */}
        <Element name="home" className="m-0 p-0 bg-black">
          <div className="bg-black -mt-20 pt-23">
            <Hero />
          </div>
          <SmoothMarquee />
        </Element>

        {/* Core: Projects → Skills → Experience */}
        <Element name="projects" className="m-0 p-0">
          <Projects />
        </Element>

        <Element name="skills" className="m-0 p-0">
          <Skills />
        </Element>

        <Element name="work-experience" className="m-0 p-0">
          <WorkExperience />
        </Element>

        {/* Social proof: Testimonials + YouTube */}
        <Element name="testimonials" className="m-0 p-0">
          <Testimonials />
        </Element>

        <Element name="youtube" className="m-0 p-0">
          <YouTubeSection />
        </Element>

        {/* Extras: Freelance + Terminal */}
        <Element name="freelance-services" className="m-0 p-0">
          <FreelanceServices />
        </Element>

        <Element name="terminal" className="m-10 py-10">
          <Terminal />
        </Element>

        {/* Footer */}
        <Element name="footer" className="mt-10 py-10">
          <Footer />
        </Element>
      </div>

      {/* Floating Resume Button */}
      <FloatingResumeButton />
    </div>
  );
}