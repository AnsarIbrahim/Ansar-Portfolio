import React from 'react';
import Contact from '../../assests/contact.jpeg';
import '../../CSS/styles.css';

const Add = () => (
  <div className="lg:h-half relative">
    <img src={Contact} alt="Contact" className="h-half w-full object-cover" />
    <div className="absolute inset-0 bg-cyan-800 opacity-60" />
    <h1 className="new absolute inset-0 flex items-center justify-center text-center text-2xl text-white sm:text-4xl md:text-6xl lg:text-9xl">
      Exploring Digital Frontiers.
      <br />
      Let’s Connect.
    </h1>
  </div>
);

export default Add;
