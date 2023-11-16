import React from 'react';
import {
  Navbar, Home, Recent, About, Contact, Add,
} from './components';

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Recent />
    <Add />
    <Contact />
  </div>
);

export default App;
