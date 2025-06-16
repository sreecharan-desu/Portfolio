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
import { FloatingResumeButton } from '@/components/ResumeButton';
import SmoothMarquee from '@/components/Scrollbar';



export default function PortfolioPage() {
  return (
    <div className="bg-black">
      <div className="bg-black text-white lg:ml-20 lg:mr-20">
        <Element name="home" className="m-0 p-0 bg-black">
          <div className="bg-black -mt-20 pt-23">
            <Hero />
          </div>
          <SmoothMarquee />
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