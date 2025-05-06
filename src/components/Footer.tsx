import { FaHeart, FaYoutube } from 'react-icons/fa';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sreecharan-desu', icon: SiGithub },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/sreecharan-desu', icon: SiLinkedin },
    { name: 'X', url: 'https://x.com/sreecharandesu', icon: RiTwitterXFill },
    { name: 'YouTube', url: 'https://www.youtube.com/@mrsreecharan', icon: FaYoutube },
  ];

  return (
    <footer id="footer" className="bg-black text-white -mt-18 pb-8 border-t-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-400">
              Building the future, one app at a time.
            </p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label={`Visit my ${link.name} profile`}
              >
                <link.icon className="text-2xl" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-400 mt-8">
          Made with <FaHeart className="inline text-red-500" /> by SreeCharan 
        </p>
      </div>
    </footer>
  );
};

export default Footer;