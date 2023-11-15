import React from 'react';
import { motion } from 'framer-motion';
import '../../CSS/styles.css';

const Home = () => (
  <div
    id="home"
    className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-tr from-black to-red-300 p-10"
  >
    <motion.h1
      className="new mb-10 mt-5 w-full p-10 text-center text-5xl font-regular text-white lg:text-left lg:text-[5vw]"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      Creating Web Wonders,
      <br />
      One Line of Code at a
      <br />
      Time.
    </motion.h1>
    <motion.p
      className="new mb-10 w-full p-10 text-center text-2xl font-regular text-gray-300 lg:text-left lg:text-[2vw]"
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      We are a team of passionate developers dedicated to creating web wonders.
      With every line of code, we strive to push the boundaries of what&apos;s
      possible on the web. Join us on this exciting journey.
    </motion.p>
  </div>
);

export default Home;
