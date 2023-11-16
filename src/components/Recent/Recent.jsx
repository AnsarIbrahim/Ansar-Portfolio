import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { projects, CustomRightArrow, CustomLeftArrow } from './index';
import '../../CSS/styles.css';

const useScrollAnimation = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return [ref, controls];
};

const Recent = () => {
  const [h2Ref, h2Controls] = useScrollAnimation();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      id="recent"
      className="min-h-screen overflow-hidden bg-cyan-300 p-8 py-20 sm:p-16 md:p-32"
    >
      <motion.h2
        className="mb-5 mt-5 text-center font-inter text-2xl font-semibold md:mt-0"
        ref={h2Ref}
        initial={{ opacity: 0 }}
        animate={h2Controls}
        transition={{ delay: 0.2 }}
      >
        My Recent Projects
      </motion.h2>
      <Carousel
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        infinite
        showDots
        dotListClass="custom-dot-list-style"
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval={2000}
        transitionTime={1000}
        responsive={responsive}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="m-2 mt-20 flex min-h-[500px] flex-col items-center justify-center rounded-lg bg-transparent p-4 shadow-2xl transition-transform duration-200 hover:scale-105 sm:m-4 sm:min-h-[300px] sm:p-8"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 md:h-48 md:w-48"
            />
            <h3 className="mt-4 text-xl font-bold sm:text-lg">
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:w-full">{project.description}</p>
            <div className="flex flex-wrap">
              {project.tech.map((tag) => (
                <span
                  key={tag.name}
                  className={`m-1 ${tag.color} rounded px-2 py-1 text-xs font-semibold tracking-wider`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-blue-700"
              >
                <a
                  href={project.live}
                  className="text-white no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </button>
              <button
                type="button"
                className="rounded bg-green-500 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-green-700"
              >
                <a
                  href={project.source}
                  className="text-white no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Recent;
