import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', path: '/projects' },
    { name: 'Studio', path: '/about' },
    { name: 'Expertise', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isContactPage = location.pathname === '/contact';
  
  // Explicit color management to ensure visibility without relying on mix-blend-mode
  // 1. If Menu Open or Scrolled -> White Text (on Dark BG)
  // 2. Default (Top of page) -> Black Text (on Light BG)
  // 3. Exception: Contact Page Desktop Logo -> White Text (on Dark Left Panel)

  const getLogoClass = () => {
    if (isOpen || isScrolled) return 'text-white';
    if (isContactPage) return 'text-onyx lg:text-white'; 
    return 'text-onyx';
  };

  const getNavTextClass = () => {
    if (isOpen || isScrolled) return 'text-white';
    return 'text-onyx';
  };

  const showBackground = isScrolled && !isOpen;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-12 flex justify-between items-center transition-all duration-500 ${
          showBackground 
            ? 'py-4 bg-onyx/95 backdrop-blur-sm shadow-lg pointer-events-auto' 
            : 'py-8 bg-transparent pointer-events-none'
        }`}
      >
        {/* Logo */}
        <Link 
          to="/" 
          className={`pointer-events-auto relative z-50 group transition-colors duration-300 hover:text-bronze-500 ${getLogoClass()}`}
        >
          <span className="font-display font-bold text-2xl tracking-widest uppercase">
            Aurevo
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12 pointer-events-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-xs font-bold uppercase tracking-ultra transition-colors duration-300 hover:text-bronze-500 ${getNavTextClass()}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span 
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 w-full h-px bg-current"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <div className={`md:hidden pointer-events-auto z-50 transition-colors duration-300 hover:text-bronze-500 ${getNavTextClass()}`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X className="w-8 h-8" strokeWidth={1} /> : <Menu className="w-8 h-8" strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-onyx z-40 flex flex-col justify-center items-center pointer-events-auto"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="font-display font-bold text-5xl md:text-7xl text-white uppercase hover:text-bronze-500 transition-colors duration-300 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;