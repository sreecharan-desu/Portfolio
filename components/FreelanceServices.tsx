/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';

const FreelanceServices = () => {
  // Keep mouse position state for potential future use, but unused here
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <section className="mt-28 mb-20 relative bg-black text-white overflow-hidden flex items-center">
      <div className="container mx-auto px-8 max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          {/* Clean typography */}
          <div className="space-y-8">
            <h2 className="text-6xl md:text-8xl font-thin tracking-tight leading-none">
              <span className="text-white">Freelance</span>
              <br />
              <span className="text-gray-400 font-extralight">Services</span>
            </h2>

            {/* Static divider */}
            <div className="flex justify-center place-content-center relative mx-auto text-center">
              <div className="h-px w-[100px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>
          </div>

          {/* Minimalist logo */}
          <div className="mb-12 flex justify-center">
            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center border border-white/10">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Refined description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Creating{' '}
            <span className="text-white font-normal border-b border-white/20">
              exceptional digital experiences
            </span>{' '}
            through meticulous development and thoughtful design.
          </p>

          {/* Monochrome CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <a
              href="https://www.fiverr.com/sreecharan_desu"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-12 py-4 bg-white text-black text-base font-medium rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="View SreeCharan’s Fiverr profile"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Profile
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                </svg>
              </span>
            </a>

            <a
              href="https://www.fiverr.com/s/5re0wZE"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-12 py-4 bg-black text-white text-base font-medium rounded-full border border-white/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Explore SreeCharan’s Fiverr services"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Services
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceServices;