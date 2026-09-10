import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub, FaTwitter, FaLinkedin, FaMedium,
} from 'react-icons/fa';
import Logo from '../../assests/aitechies-logo.svg';

const socials = [
  { name: 'GitHub', href: 'https://github.com/AnsarIbrahim/', icon: <FaGithub /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ansar-ibrahim/', icon: <FaLinkedin /> },
  { name: 'Twitter', href: 'https://twitter.com/ansaradheeb/', icon: <FaTwitter /> },
  { name: 'Medium', href: 'https://medium.com/@ansaradheeb', icon: <FaMedium /> },
];

const Footer = () => (
  <footer className="border-t border-white/10 py-10">
    <div className="container-x flex flex-col items-center justify-between gap-6 sm:flex-row">
      <Link to="/" className="flex items-center gap-3">
        <img src={Logo} alt="" className="h-8 w-8 rounded-lg" />
        <span className="text-sm font-semibold text-white">Ansar Ibrahim</span>
      </Link>
      <nav className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/60" aria-label="Footer">
        <a href="/#about" className="hover:text-white">About</a>
        <a href="/#services" className="hover:text-white">Services</a>
        <a href="/#work" className="hover:text-white">Work</a>
        <a href="/#faq" className="hover:text-white">FAQ</a>
        <a href="/#contact" className="hover:text-white">Contact</a>
        <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
        <a href="https://aitechies.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white">AI Techies</a>
      </nav>
      <div className="flex items-center gap-1">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition hover:bg-white/[0.06] hover:text-white"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
    <p className="container-x mt-6 text-center text-xs text-white/55 sm:text-left">
      ©
      {' '}
      {new Date().getFullYear()}
      {' '}
      Ansar Ibrahim · World-class software developer & software engineer ·
      Coimbatore, Tamil Nadu, India. Built with React & Tailwind CSS.
    </p>
  </footer>
);

export default Footer;
