import React, { useEffect, useMemo } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate, useLocation,
} from 'react-router-dom';
import { IconContext } from 'react-icons';
import {
  Navbar, Home, About, Services, Recent, Add, FAQ, Locations, Contact, Footer, PrivacyPolicy,
} from './components';
import Seo from './seo/Seo';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import site from './seo/site';
import {
  graph, webPageSchema, breadcrumbSchema, faqSchema, projectsSchema,
} from './seo/schema';

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Hash may contain anything the user typed; never pass it to querySelector.
    let id = '';
    try {
      id = hash ? decodeURIComponent(hash.slice(1)) : '';
    } catch {
      id = '';
    }
    const el = id ? document.getElementById(id) : null;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
};

const MainPage = () => {
  const schema = useMemo(() => graph([
    webPageSchema({
      path: '/',
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
      type: 'ProfilePage',
    }),
    breadcrumbSchema([{ name: 'Home', path: '/' }]),
    faqSchema(),
    projectsSchema(),
  ]), []);

  return (
    <main>
      <Seo path="/" description={site.description} schema={schema} type="profile" />
      <Home />
      <About />
      <Services />
      <Recent />
      <Locations />
      <FAQ />
      <Add />
      <Contact />
    </main>
  );
};

const PrivacyPage = () => {
  const description = `How ${site.name} collects, uses and protects information submitted through ansaribrahim.me, including the contact form and visitor context.`;
  const schema = useMemo(() => graph([
    webPageSchema({ path: '/privacy-policy', title: 'Privacy Policy', description }),
    breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }]),
  ]), [description]);

  return (
    <main>
      <Seo title="Privacy Policy" path="/privacy-policy" description={description} schema={schema} type="article" />
      <PrivacyPolicy />
    </main>
  );
};

// None of the icons in this app carry their own label — the visible text
// next to them, or an aria-label on their parent link/button, already does
// that job. Hiding every react-icons SVG from the accessibility tree by
// default avoids duplicate/empty announcements (e.g. an unlabelled
// role="img" svg) without having to touch each icon usage individually.
const iconContextValue = { attr: { 'aria-hidden': 'true', focusable: 'false' } };

const App = () => (
  <ErrorBoundary>
    <IconContext.Provider value={iconContextValue}>
      <Router>
        <ScrollManager />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </IconContext.Provider>
  </ErrorBoundary>
);

export default App;
