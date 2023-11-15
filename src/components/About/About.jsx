import React from 'react';
import img from '../../assests/Ansar.jpg';
import '../../CSS/styles.css';

const About = () => (
  <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black lg:flex-row lg:justify-around lg:p-40">
    <div className="mb-10 flex w-full flex-col items-start p-5 text-left">
      <img
        src={img}
        alt="img"
        className="h-20 w-20 rounded-full"
        style={{ filter: 'grayscale(100%)' }}
      />
    </div>
    <div
      id="about"
      className="flex w-full flex-col items-start p-5 text-left"
    >
      <h2 className="new mb-5 text-4xl text-white">About</h2>
      <p className="about new1 mb-5 mt-5 text-left">
        I&apos;m Ansar Ibrahim, a Full-Stack Developer proficient in
        JavaScript, React, Redux, HTML5, CSS3, Ruby, Rails, PostgreSQL, and
        more. I &apos;ve completed 50+ projects, demonstrating my commitment
        to quality and innovation. Visit my
        {' '}
        <a
          href="https://github.com/AnsarIbrahim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          GitHub profile
        </a>
        {' '}
        for more. Reach out to me at
        {' '}
        <a href="mailto:ansaradheeb@gmail.com" className="text-white">
          ansaradheeb@gmail.com
          {' '}
        </a>
        for inquiries or collaborations.
      </p>
    </div>
  </div>
);

export default About;
