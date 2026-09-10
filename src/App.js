import React, { useEffect, useMemo } from 'react';
import {
  BrowserRouter as Router, Routes, Route, useLocation,
} from 'react-router-dom';
import {
  Navbar, Home, About, Services, Recent, Add, FAQ, Locations, Contact, Footer, PrivacyPolicy,
} from './components';
import Seo from './seo/Seo';
import site from './seo/site';
import {
  graph, webPageSchema, breadcrumbSchema, faqSchema, projectsSchema,
} from './seo/schema';

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
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

const App = () => (
  <Router>
    <ScrollManager />
    <Navbar />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
