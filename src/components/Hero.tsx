import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';


const Hero = () => {
  const socialLinks = [
    { href: 'https://github.com/sreecharan-desu', icon: FaGithub, name: 'GitHub' },
    { href: 'https://linkedin.com/in/sreecharan-desu', icon: FaLinkedin, name: 'LinkedIn' },
    { href: 'https://x.com/sr3x0r', icon: RiTwitterXFill, name: 'X' },
    // { href: 'https://discord.com/users/sr3x0r', icon: FaDiscord, name: 'Discord' },
  ];

  // Replace with your WhatsApp number and optional message
  const whatsappLink = 'https://wa.me/+916300625861?text=Hi%20SreeCharan,%20I%27m%20interested%20in%20hiring%20you!';

  return (
    <>
      {/* <Navbar /> */}
      <section id="home" className="min-h-screen flex items-center bg-black py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <motion.div
              className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-full overflow-hidden shadow-lg">
                <img
                  src="/sr3x0r.jpeg"
                  alt="SreeCharan"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="w-full md:w-2/3 lg:w-3/4 text-center md:text-left">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Hi, I'm SreeCharan <span className="text-gray-300">👋</span>
              </motion.h1>
              <motion.p
                className="text-gray-300 text-base sm:text-lg mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
               CS Junior passionate about crafting user-friendly apps and websites.
              </motion.p>
              <motion.p
                className="text-gray-300 text-base sm:text-lg mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Follow my journey on{' '}
                <a
                  href="https://x.com/sr3x0r"
                  className="text-gray-300 hover:text-white underline transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X/Twitter
                </a>{' '}
                where I share insights and connect with the community.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="flex gap-4 sm:gap-6 justify-center md:justify-start mt-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition transform hover:scale-110"
                    aria-label={`Visit my ${link.name} profile`}
                  >
                    <link.icon className="text-2xl sm:text-3xl" />
                  </a>
                ))}
              </motion.div>

              {/* Hire Me Button */}
              <motion.div
                className="mt-6 flex justify-center md:justify-start"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  aria-label="Contact SreeCharan via WhatsApp to discuss hiring opportunities"
                >
                  <FaWhatsapp className="text-xl" />
                  Hire Me
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;