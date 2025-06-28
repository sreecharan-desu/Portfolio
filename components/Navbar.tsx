import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Experience', to: 'work-experience' },
    { name: 'Projects', to: 'projects' },
    // { name: 'SkillSet', to: 'skills' },
  ];

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 bg-black/60 backdrop-blur-md border border-white/10 shadow-md rounded-xl ${loaded ? 'loaded' : ''}`}
      style={{
        boxShadow: '0 6px 20px rgba(255, 255, 255, 0.1)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 blur-effect">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="text-white text-xl font-bold tracking-widest">SR3X0R</div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-30}
                  className="text-white hover:text-gray-300 text-md font-medium tracking-wide transition-colors cursor-pointer relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full"
                    style={{ transition: 'width 0.3s' }}
                  />
                </Link>
              </div>
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
        {isOpen && (
          <div className="md:hidden flex flex-col items-start px-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-30}
                className="text-white hover:text-gray-300 text-base font-medium tracking-wide transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .blur-effect {
          filter: blur(2px);
          transition: filter 0s;
        }
        .loaded .blur-effect {
          filter: blur(0);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
