/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const FreelanceServices = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const updateMousePosition = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1] 
      },
    },
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      rotateX: 45,
      filter: 'blur(4px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      y: -2,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      },
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    },
  };

  return (
    <motion.section
      className="mt-28 relative bg-black text-white overflow-hidden flex items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ y }}
    >
      <div className="container mx-auto px-8 max-w-5xl relative z-10">
        <motion.div className="text-center space-y-8" variants={childVariants}>
 

          {/* Clean typography */}
          <motion.div variants={childVariants} className="space-y-8">
            <h2 className="text-6xl md:text-8xl font-thin tracking-tight leading-none">
              <span className="text-white">
                Freelance
              </span>
              <br />
              <span className="text-gray-400 font-extralight">
                Services
              </span>
            </h2>

            {/* Elegant animated divider */}
            <motion.div
              className="relative mx-auto"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 100, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <motion.div
                className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ 
                  opacity: [0, 0.8, 0],
                  scaleX: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </motion.div>
          </motion.div>
              
                   {/* Minimalist logo */}
          <motion.div
            className="mb-12 flex justify-center"
            variants={logoVariants}
          >
            <motion.div
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                borderColor: 'rgba(255,255,255,0.2)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center border border-white/10">
                <svg 
                  className="w-8 h-8 text-white" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
          {/* Refined description */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            variants={childVariants}
          >
            Creating{' '}
            <motion.span 
              className="text-white font-normal border-b border-white/20"
              animate={{ 
                borderColor: ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.2)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              exceptional digital experiences
            </motion.span>
            {' '}through meticulous development and thoughtful design.
          </motion.p>

          {/* Monochrome CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
            variants={childVariants}
          >
            <motion.a
              href="https://www.fiverr.com/sreecharan_desu"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-4 bg-white text-black text-base font-medium rounded-full overflow-hidden transition-all duration-300 border border-white"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Profile
                <motion.svg 
                  className="w-4 h-4" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </motion.svg>
              </span>
              
              <motion.div
                className="absolute inset-0 bg-gray-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="https://www.fiverr.com/s/5re0wZE"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-4 bg-black text-white text-base font-medium rounded-full border border-white/30 backdrop-blur-sm overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Services
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </motion.svg>
              </span>
              
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/60"
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{ scale: 1.02, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FreelanceServices;