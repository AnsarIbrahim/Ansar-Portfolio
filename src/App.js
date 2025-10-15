import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Navbar, Home, Recent, About, Contact, Add, PrivacyPolicy,
} from './components';

const MainPage = () => (
  <>
    <Home />
    <About />
    <Recent />
    <Add />
    <Contact />
  </>
);

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  </Router>
);

export default App;
