import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import _ from 'lodash';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assests/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = _.debounce(() => {
      setIsLargeScreen(window.innerWidth > 1024);
    }, 300);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    closed: { opacity: 0, x: '-100%', transition: { duration: 1.5 } },
  };

  return (
    <motion.nav
      className={`fixed top-0 z-50 flex w-full flex-wrap justify-between p-5 lg:bg-transparent ${
        isOpen ? 'z-50 mt-0 h-screen bg-black' : 'bg-transparent'
      } text-white`}
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
    >
      <div className="rounded-full">
        <img
          src={Logo}
          alt="Logo"
          className="h-10 w-10 rounded-full lg:hidden"
        />
      </div>
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <motion.div
        className={`${
          isOpen ? 'z-50 flex' : 'hidden lg:flex'
        } z-50 w-full flex-col items-center space-y-4 font-inter text-xl lg:mt-10 lg:flex-row lg:justify-around lg:space-y-0 lg:bg-transparent lg:text-base`}
        variants={isLargeScreen ? {} : variants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className="">
          <img
            src={Logo}
            alt="Logo"
            className="hidden h-10 w-10 rounded-full lg:block"
          />
        </div>
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="w-full rounded px-3 py-2 text-center font-bold text-white hover:text-gray-300 lg:inline-flex lg:w-auto"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="w-full rounded px-3 py-2 text-center font-bold text-white hover:text-gray-300 lg:inline-flex lg:w-auto"
        >
          About
        </a>
        <a
          href="#recent"
          onClick={() => setIsOpen(false)}
          className="w-full rounded px-3 py-2 text-center font-bold text-white hover:text-gray-300 lg:inline-flex lg:w-auto"
        >
          Recent
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="w-full rounded px-3 py-2 text-center font-bold text-white hover:text-gray-300 lg:inline-flex lg:w-auto"
        >
          Contact
        </a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
