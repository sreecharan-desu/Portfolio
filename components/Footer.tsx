import { FaHeart } from 'react-icons/fa';
import { socialLinks } from '@/lib/socials';

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-400">Building the future, one app at a time.</p>
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
          Made with{' '}
          <b className="inline-block animate-pulse -mt-2">
            <FaHeart className="inline text-red-500" />
          </b>{' '}
          by SreeCharan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
