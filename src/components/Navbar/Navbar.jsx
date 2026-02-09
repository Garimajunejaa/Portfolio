import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 py-6 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <motion.div
          className="text-3xl font-bold cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-white bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">Portfolio</span>
        </motion.div>
        <ul className="hidden md:flex space-x-10">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <motion.li
              key={item}
              className="text-lg font-medium text-gray-300 hover:text-blue-400 cursor-pointer transition-all duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              <a href={`#${item.toLowerCase()}`} className="relative">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className="md:hidden text-white text-2xl"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800"
          >
            <ul className="flex flex-col space-y-4 p-6">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  className="text-lg font-medium text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-300"
                  whileHover={{ x: 10 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;