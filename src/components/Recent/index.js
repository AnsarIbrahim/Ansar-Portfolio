import {
  Book, Calc, Cap, Fix, Port, Project, ReactCap,
} from '../../assests/projects';

const projects = [
  {
    id: 'fixmate',
    title: 'FixMate',
    image: Fix,
    description:
      'A repair-services marketplace with bookings, admin tooling and smooth Framer Motion interactions.',
    tech: ['React', 'Redux', 'Ruby on Rails', 'Tailwind'],
    live: 'https://fixmate.netlify.app/',
    source: 'https://github.com/AnsarIbrahim/FixMate',
    featured: true,
  },
  {
    id: 'thirukkural',
    title: 'Thirukkural',
    image: ReactCap,
    description:
      'A metrics app built around the Thirukkural, with real-time search, filtering and a mobile-first UI.',
    tech: ['React', 'Redux', 'REST API'],
    live: 'https://thirukkural-ansaribrahim.netlify.app/',
    source: 'https://github.com/AnsarIbrahim/Metrics-Webapp',
  },
  {
    id: 'portfolio-3d',
    title: 'Portfolio in 3D',
    image: Port,
    description:
      'An interactive 3D portfolio experience powered by Three.js and React Three Fiber.',
    tech: ['React', 'Three.js', 'Tailwind'],
    live: 'https://ansaribrahim.netlify.app/',
    source: 'https://github.com/AnsarIbrahim/Portfolio-in-3D',
  },
  {
    id: 'bookstore',
    title: 'Bookstore',
    image: Book,
    description:
      'Browse, add and manage books with a Redux-powered store and a clean, responsive layout.',
    tech: ['React', 'Redux', 'Tailwind'],
    live: 'https://book-store-dads.onrender.com/',
    source: 'https://github.com/AnsarIbrahim/Bookstore',
  },
  {
    id: 'math-magicians',
    title: 'Math Magicians',
    image: Calc,
    description:
      'A calculator and maths-quotes app demonstrating React routing, state and component design.',
    tech: ['React', 'Bootstrap'],
    live: 'https://ansaribrahim.github.io/Math-Magicians/',
    source: 'https://github.com/AnsarIbrahim/Math-Magicians',
  },
  {
    id: 'oscars',
    title: 'Oscar 2023 Awards',
    image: Cap,
    description:
      'A fictional awards microsite built from scratch with semantic HTML, CSS and vanilla JavaScript.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://ansaribrahim.github.io/Capstone-Project-1/',
    source: 'https://github.com/AnsarIbrahim/Capstone-Project-1',
  },
  {
    id: 'tv-shows',
    title: 'TV Shows',
    image: Project,
    description:
      'Explore popular shows and actors with live data, likes and comments via the TVMaze API.',
    tech: ['JavaScript', 'Webpack', 'REST API'],
    live: 'https://ansaribrahim.github.io/Capstone-2/dist/',
    source: 'https://github.com/AnsarIbrahim/Capstone-2',
  },
];

export default projects;
