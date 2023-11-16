import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img from '../../assests/Ansar.jpg';
import '../../CSS/styles.css';
import resume from '../../assests/Ansar-Resume.pdf';

const About = () => {
  const controlsImg = useAnimation();
  const controlsText = useAnimation();
  const { ref: refImg, inView: inViewImg } = useInView({ triggerOnce: true });
  const { ref: refText, inView: inViewText } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inViewImg) {
      controlsImg.start({
        x: 0,
        transition: { delay: 1, duration: 0.5 },
      });
    }
    if (inViewText) {
      controlsText.start({
        x: 0,
        opacity: 1,
        transition: { delay: 1, duration: 0.5 },
      });
    }
  }, [controlsImg, inViewImg, controlsText, inViewText]);

  return (
    <div
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-black lg:flex-row lg:justify-around lg:p-40"
    >
      <motion.div
        className="mb-10 flex w-full flex-col items-start p-5 text-left"
        ref={refImg}
        initial={{ x: '-40vw' }}
        animate={controlsImg}
      >
        <img
          src={img}
          alt="img"
          className="h-20 w-20 rounded-full"
          style={{ filter: 'grayscale(100%)' }}
        />
      </motion.div>
      <motion.div
        className="flex w-full flex-col items-start p-5 text-left"
        ref={refText}
        initial={{ opacity: 0 }}
        animate={controlsText}
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
            className="gradient-text text-white"
          >
            GitHub profile
          </a>
          {' '}
          for more. Reach out to me at
          {' '}
          <a
            href="mailto:ansaradheeb@gmail.com"
            className="gradient-text text-white"
          >
            ansaradheeb@gmail.com
            {' '}
          </a>
          for inquiries or collaborations.
        </p>
        <div className="my-4">
          <button
            type="button"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            <a
              href={resume}
              className="text-white no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get my Resume
            </a>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
