import React from 'react';
import {
  Navbar, Home, Recent, About, Contact,
} from './components';

const App = () => (
  <div>
    <Navbar />

    <Home />
    <About />
    <Recent />
    <Contact />

  </div>
);

export default App;
