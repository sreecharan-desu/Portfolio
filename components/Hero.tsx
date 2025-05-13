'use client';

import { motion } from 'framer-motion';
import { FaComment } from 'react-icons/fa';
import Image from 'next/image';
import { Link } from 'react-scroll'; // Import react-scroll Link
import { socialLinks } from '@/lib/socialLinks';

export const whatsappLink = 'https://wa.me/+916300625861?text=Hi%20SreeCharan,%20I%27m%20interested%20in%20hiring%20you!';

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleScroll = (to: string) => {
    // Prevent hash from appearing in URL
    window.history.replaceState(null, window.location.pathname);
  };

  return (
          <section id="home" className="min-h-screen bg-black py-12 mt-10 pt-20">
      {/* Navbar */}
      <Navbar/>                                                                                                                                                                     

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">                                 
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <motion.div
            className="w-48 sm:w-56 md:w-64 lg:w-72"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
              <Image
                src="/sr3x0r.jpeg"
                alt="SreeCharan"
                width={288}
                height={288}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-2/3 lg:w-3/5 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl first-letter:text-4xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Hi, I’m SreeCharan            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
              <b>CS junior</b> passionate about crafting websites and turning ideas into reality.
            </p>
            <p className="text-base text-gray-400 mb-8">
              Follow me on{' '}
                <a
                href="https://x.com/sr3x0r"
                className="text-gray-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
                >
                𝕏
                </a>{' '}
              for insights and updates.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 justify-center md:justify-start mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label={`Visit my ${link.name} profile`}
                >
                  <link.icon className="text-2xl" />
                </a>
              ))}
            </div>

            <motion.a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-flex items-center gap-2 bg-black/90 text-white px-5 py-2.5 rounded-full font-medium overflow-hidden border border-white/20 hover:bg-black/70 transition-all duration-300 shadow-md hover:shadow-lg"
  style={{
    background: 'linear-gradient(90deg, rgb(20, 20, 25) 0%, rgb(10, 10, 15) 100%)',
    boxShadow: '0 0 18px rgba(255, 255, 255, 0.2), 0 0 36px rgba(255, 255, 255, 0.1)'
  }}
  aria-label="Contact via WhatsApp"
  initial={{ y: 0 }}
  whileHover={{
    y: -5,
    scale: 1.08,
    transition: { duration: 0.2 },
  }}
  whileTap={{ scale: 0.95 }}
>
  <div 
    className="absolute inset-0 rounded-full -z-10"
    style={{
      background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(210, 210, 230, 0.2) 100%)',
      margin: '-1px',
      opacity: 0.6
    }}
  />
  
  <motion.span
    className="absolute inset-0 bg-white/5"
    initial={{ x: '-100%' }}
    whileHover={{
      x: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    }}
  />
  
  <div 
    className="absolute inset-0 rounded-full opacity-20"
    style={{
      background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
    }}
  />
  
  <span className="relative z-10 flex items-center gap-2">
    <FaComment className="text-xl" size={20} />
    <span className="text-base">Hire me</span>
  </span>
</motion.a>

          </motion.div>


      </div>
      </div>
    </section>

  );
};

export default Hero;

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // or use any other icon library


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Experience', to: 'work-experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'SkillSet', to: 'skills' },

  ];

  return (
    <motion.nav
      className="fixed top-4 left-4 right-4 z-50 bg-black/60 backdrop-blur-md border border-white/10 shadow-md rounded-xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        boxShadow: '0 6px 20px rgba(255, 255, 255, 0.1)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="text-white text-xl font-bold tracking-widest">
            SR3X0R
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-30} // Add 10px top offset
                  className="text-white hover:text-gray-300 text-sm font-medium tracking-wide transition-colors cursor-pointer relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full"
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden flex flex-col items-start px-4 pb-4 space-y-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-30} // Add 10px top offset
                  className="text-white hover:text-gray-300 text-base font-medium tracking-wide transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

