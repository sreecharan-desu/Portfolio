'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { socialLinks } from '@/lib/socialLinks';

export const whatsappLink = 'https://wa.me/+916300625861?text=Hi%20SreeCharan,%20I%27m%20interested%20in%20hiring%20you!';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-black py-12 -mb-28">
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
            <h1 className="text-4xl first-letter:text-5xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Hi, I&apos;m SreeCharan
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
              A CS junior passionate about crafting websites and turning ideas into reality.
            </p>
            <p className="text-base text-gray-400 mb-8">
              Follow me on{' '}
              <a
                href="https://x.com/sr3x0r"
                className="text-gray-300 hover:text-white transition-colors duration-200 underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
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

            {/* Hire Me Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-full hover:from-gray-600 hover:to-gray-500 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Contact SreeCharan via WhatsApp"
            >
              <FaWhatsapp className="text-lg" />
              <span className="font-medium">Hire Me</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;