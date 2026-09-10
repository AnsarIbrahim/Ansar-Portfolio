import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaHome, FaEnvelope } from 'react-icons/fa';
import site from '../../seo/site';

const NotFound = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `Page not found | ${site.name}`;
    let robots = document.head.querySelector('meta[name="robots"]');
    const previous = robots ? robots.getAttribute('content') : null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, follow');
    return () => {
      if (previous) robots.setAttribute('content', previous);
      else robots.remove();
    };
  }, []);

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden py-32">
      <div className="orb -left-24 top-20 h-80 w-80 bg-primary/70" />
      <div className="orb -right-24 bottom-0 h-80 w-80 bg-pinkx/50" />
      <div className="container-x relative text-center">
        <span className="eyebrow">404</span>
        <h1 className="section-title mt-5">That page doesn&apos;t exist.</h1>
        <p className="section-sub mx-auto">
          Nothing lives at
          {' '}
          <code className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-sm text-white/80">
            {pathname}
          </code>
          . It may have moved, or the link was mistyped.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-primary">
            <FaHome className="text-xs" />
            Back to home
          </Link>
          <Link to="/#work" className="btn-ghost">
            See my work
          </Link>
          <Link to="/#contact" className="btn-ghost">
            <FaEnvelope className="text-xs" />
            Contact me
          </Link>
        </div>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <FaArrowLeft className="text-xs" />
          Go back
        </button>
      </div>
    </main>
  );
};

export default NotFound;
