// Single source of truth for identity, location and SEO copy.
// Update here and every meta tag, schema block and text block follows.
const site = {
  url: 'https://ansaribrahim.me',
  name: 'Ansar Ibrahim',
  legalName: 'Ansar Ibrahim',
  jobTitle: 'Full-Stack, MERN & Mobile Developer · Forward Deployed Engineer · Cloud, DevOps & AI-Search Specialist',
  tagline: 'Full-Stack Developer & End-to-End Product Builder',
  description:
    'Ansar Ibrahim is a full-stack, MERN and mobile (iOS & Android) developer, forward deployed engineer and founder of AI Techies in Coimbatore, India. Give him an idea and a budget and he ships the entire digital platform: website, web app, iOS/Android apps, CRM, admin panel, APIs, cloud hosting on AWS, Google Cloud or DigitalOcean, CI/CD pipelines and SEO/AEO/GEO/LLMO growth. Stack: JavaScript, TypeScript, React, Next.js, Node.js, Python, Django, FastAPI, Ruby on Rails, PostgreSQL, MongoDB, React Native.',
  shortDescription:
    'Idea + budget in, complete digital platform out: web, iOS/Android apps, CRM, admin panels, APIs, cloud, CI/CD and SEO. React, Next.js, Node, Python, Django, FastAPI, Rails.',
  email: 'ansaradheeb@gmail.com',
  altEmail: 'ansaribrahimdev@gmail.com',
  image: '/og-image.png',
  logo: '/favicon.svg',
  locale: 'en_IN',
  languages: ['English', 'Tamil'],
  // Location used for Local SEO. Change city/region here if you move.
  location: {
    city: 'Coimbatore',
    region: 'Tamil Nadu',
    regionCode: 'IN-TN',
    country: 'India',
    countryCode: 'IN',
    lat: 11.0168,
    lng: 76.9558,
    timezone: 'Asia/Kolkata',
    serviceArea: ['India', 'United States', 'United Kingdom', 'United Arab Emirates', 'Singapore', 'Australia', 'Worldwide (remote)'],
  },
  company: {
    name: 'AI Techies',
    url: 'https://aitechies.in',
    description: 'Digital product studio building web, mobile and AI products that scale.',
  },
  social: {
    github: 'https://github.com/AnsarIbrahim',
    linkedin: 'https://www.linkedin.com/in/ansar-ibrahim/',
    twitter: 'https://x.com/ansaribrahimdev',
    twitterHandle: '@ansaribrahimdev',
    medium: 'https://medium.com/@ansaradheeb',
  },
  keywords: [
    'Ansar Ibrahim',
    'Ansar Ibrahim developer',
    'Ansar Ibrahim AI Techies',
    'full-stack developer Coimbatore',
    'MERN stack developer India',
    'Next.js developer',
    'React Native developer',
    'iOS and Android app developer Coimbatore',
    'Python Django FastAPI developer',
    'Ruby on Rails developer',
    'forward deployed engineer',
    'AWS Google Cloud DigitalOcean DevOps',
    'CI/CD pipeline setup',
    'CRM and admin panel development',
    'SEO AEO GEO LLMO specialist',
    'hire full-stack developer India',
  ],
};

export const sameAs = [
  site.social.github,
  site.social.linkedin,
  site.social.twitter,
  site.social.medium,
  site.company.url,
];

export default site;
