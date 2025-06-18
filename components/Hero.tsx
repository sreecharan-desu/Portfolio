import { useState, useEffect } from 'react';
// import Image from 'next/image';
import Navbar from './Navbar'; // Assuming Navbar is a separate component
import { FaComment } from 'react-icons/fa';
import { socialLinks, whatsappLink } from '../lib/socialLinks'; // Assuming these are imported from a data file
import Image from 'next/image';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className={`bg-black py-20 -mb-10 lg:mt-20 ${loaded ? 'loaded' : ''}`}>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-10 lg:px-16 blur-effect">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="w-64 sm:w-52 md:w-32 lg:w-72">
            <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
              <Image
                src="/sr3x0r-icon.jpeg"
                alt="SreeCharan"
                width= {400}
                height={400}
                className="object-contain rounded-full filter"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full text-center">
            <h1 className="text-3xl md:text-5xl sm:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">
              Hi, I’m SreeCharan
            </h1>

            <p className="text-xl sm:text-2xl md:text-xl text-gray-300 mb-6 font-medium leading-relaxed">
              a <b>third year</b> CS student who loves building apps and websites that are useful.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 justify-center mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label={`Visit my ${link.name} profile`}
                >
                  <link.icon className="text-3xl sm:text-4xl" />
                </a>
              ))}
            </div>

            {/* Social Media Mention */}
            <p className="text-base sm:text-lg text-gray-400 mb-8">
              Follow me on{' '}
              <a
                href="https://x.com/sr3x0r"
                className="text-gray-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                𝕏
              </a>{' '}
              for insights and updates.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-black/90 text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold overflow-hidden border border-white/20 hover:bg-black/70 transition-all duration-300 shadow-md hover:shadow-lg"
              style={{
                background: 'linear-gradient(90deg, rgb(20, 20, 25) 0%, rgb(10, 10, 15) 100%)',
                boxShadow: '0 0 18px rgba(255, 255, 255, 0.2), 0 0 36px rgba(255, 255, 255, 0.1)',
              }}
              aria-label="Contact via WhatsApp"
            >
              <div
                className="absolute inset-0 rounded-full -z-10"
                style={{
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(210, 210, 230, 0.2) 100%)',
                  margin: '-1px',
                  opacity: 0.6,
                }}
              />
              <div
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <FaComment className="text-xl sm:text-2xl" />
                <span className="text-base sm:text-lg">Hire me</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .blur-effect {
          filter: blur(2px);
          transition: filter 0.3s;
        }
        .loaded .blur-effect {
          filter: blur(0);
        }
      `}</style>
    </section>
  );
};

export default Hero;