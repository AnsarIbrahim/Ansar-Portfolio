import PropTypes from 'prop-types';
import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import {
  Book, Calc, Cap, Fix, Port, Project, ReactCap,
} from '../../assests/projects';

const CustomRightArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={() => onClick()}
    style={{
      color: 'black', fontSize: '30px', position: 'absolute', right: 0,
    }}
    aria-label="Move right"
  >
    <FaArrowRight />
  </button>
);

const CustomLeftArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={() => onClick()}
    style={{
      color: 'black', fontSize: '30px', position: 'absolute', left: 0,
    }}
    aria-label="Move left"
  >
    <FaArrowLeft />
  </button>
);

const projects = [
  {
    title: 'FixMate',
    image: Fix,
    description:
      'Experience seamless repair services with FixMate, a dynamic app powered by React and Redux. Enjoy modern, interactive animations and styling, thanks to Frame Motion and Tailwind CSS.',
    tech: [
      {
        name: '#react',
        color: 'text-blue-500',
      },
      {
        name: '#redux',
        color: 'text-green-500',
      },
      {
        name: '#ruby',
        color: 'text-red-500',
      },
      {
        name: '#rails',
        color: 'text-yellow-500',
      },
    ],
    live: 'https://fixmate.netlify.app/',
    source: 'https://github.com/AnsarIbrahim/FixMate',
  },

  {
    title: 'Thirukkural',
    image: ReactCap,
    description:
      "Unleash the power of data with Thirukkural, a cutting-edge metrics app. With real-time updates and a user-friendly interface, it's data management made easy and efficient.",
    tech: [
      {
        name: '#react',
        color: 'text-blue-500',
      },
      {
        name: '#redux',
        color: 'text-green-500',
      },
      {
        name: '#android',
        color: 'text-yellow-500',
      },
    ],
    live: 'https://thirukkural-ansaribrahim.netlify.app/',
    source: 'https://github.com/AnsarIbrahim/Metrics-Webapp',
  },

  {
    title: 'Portfolio-in-3D',
    image: Port,
    description:
      'Explore the digital portfolio of Ansar, a full-stack developer passionate about crafting exceptional experiences. Dive into diverse projects that blend functionality with aesthetics.',
    tech: [
      {
        name: '#react',
        color: 'text-blue-500',
      },
      {
        name: '#tailwindcss',
        color: 'text-indigo-500',
      },
      {
        name: '#three.js',
        color: 'text-purple-500',
      },
    ],
    live: 'https://ansaribrahim.netlify.app/',
    source: 'https://github.com/AnsarIbrahim/Portfolio-in-3D',
  },

  {
    title: 'Bookstore',
    image: Book,
    description:
      'Dive into the world of books with Bookstore, a web app powered by React and Redux. Enjoy a seamless online book browsing and purchasing experience, all wrapped in a visually stunning design.',
    tech: [
      {
        name: '#react',
        color: 'text-blue-500',
      },
      {
        name: '#redux',
        color: 'text-green-500',
      },
      {
        name: '#tailwindcss',
        color: 'text-indigo-500',
      },
    ],
    live: 'https://book-store-dads.onrender.com/',
    source: 'https://github.com/AnsarIbrahim/Bookstore',
  },

  {
    title: 'Math Magicians',
    image: Calc,
    description:
      'Unleash the magic of math with Math Magicians, a React-based platform. Explore a collection of interactive tools and resources designed to enhance your mathematical skills.',
    tech: [
      {
        name: '#react',
        color: 'text-blue-500',
      },
      {
        name: '#redux',
        color: 'text-green-500',
      },
      {
        name: '#bootstrap',
        color: 'text-purple-500',
      },
    ],
    live: 'https://ansaribrahim.github.io/Math-Magicians/',
    source: 'https://github.com/AnsarIbrahim/Math-Magicians',
  },

  {
    title: 'Oscar 2023 awards',
    image: Cap,
    description:
      'Step into the spotlight with Oscar 2023 Awards, a fictional website crafted with HTML, CSS, and JavaScript. Built from scratch, it showcases the power of modern web development techniques.',
    tech: [
      {
        name: '#javascript',
        color: 'text-yellow-500',
      },
      {
        name: '#html',
        color: 'text-red-500',
      },
      {
        name: '#css',
        color: 'text-blue-500',
      },
    ],
    live: 'https://ansaribrahim.github.io/Capstone-Project-1/',
    source: 'https://github.com/AnsarIbrahim/Capstone-Project-1',
  },

  {
    title: 'TV Shows',
    image: Project,
    description:
      'Immerse yourself in the world of TV Shows with our interactive website. Get the scoop on popular shows and actors, all powered by real-time data fetched from a dedicated API.',
    tech: [
      {
        name: '#javascript',
        color: 'text-yellow-500',
      },
      {
        name: '#html',
        color: 'text-red-500',
      },
      {
        name: '#css',
        color: 'text-blue-500',
      },
    ],
    live: 'https://ansaribrahim.github.io/Capstone-2/dist/',
    source: 'https://github.com/AnsarIbrahim/Capstone-2',
  },
];

CustomRightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

CustomLeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { CustomRightArrow, CustomLeftArrow, projects };
