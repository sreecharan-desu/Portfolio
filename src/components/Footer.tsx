import { FaHeart } from 'react-icons/fa'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { RiTwitterXFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/sreecharan-desu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
          >
            <SiGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/sreecharan-desu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
          >
            <SiLinkedin className="text-xl" />
          </a>
          <a
            href="https://x.com/sreecharandesu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
          >
            <RiTwitterXFill className="text-xl" />
          </a>
        </div>

        {/* Made with Love */}
        <div className="flex items-center gap-2 text-gray-600">
          <span>Made with</span>
          <FaHeart className="text-orange-500 animate-pulse" />
          <span>by</span>
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300"
          >
            Sreecharan
          </a>
          for           
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300"
          >
            Sreecharan
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} SREEhttps://www.linkedin.com/in/sreecharan-desu/https://www.linkedin.com/in/sreecharan-desu/CHARAN DESU. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer