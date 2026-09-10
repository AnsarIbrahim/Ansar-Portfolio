import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assests/aitechies-logo.svg';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const hrefFor = (href) => (onHome ? href : `/${href}`);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav
        className={`container-x flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? 'border-white/10 bg-ink/80 shadow-card backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
        aria-label="Primary"
      >
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={Logo} alt="Ansar Ibrahim" className="h-9 w-9 rounded-xl" />
          <span className="text-sm font-semibold tracking-tight text-white">
            Ansar Ibrahim
            <span className="ml-2 hidden text-white/40 sm:inline">/ Full-Stack · Mobile · Cloud</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={hrefFor(l.href)}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={hrefFor('#contact')} className="btn-primary hidden !px-5 !py-2 lg:inline-flex">
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="container-x mt-3 lg:hidden"
          >
            <div className="glass flex flex-col gap-1 p-3 shadow-card">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={hrefFor(l.href)}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <Link
                to="/privacy-policy"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white"
              >
                Privacy
              </Link>
              <a
                href={hrefFor('#contact')}
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
