// Single source of truth for identity, location and SEO copy.
// Update here and every meta tag, schema block and text block follows.
const site = {
  url: 'https://ansaribrahim.me',
  name: 'Ansar Ibrahim',
  legalName: 'Ansar Ibrahim',
  jobTitle: 'World-Class Software Developer & Software Engineer · Full-Stack, MERN & Mobile · Forward Deployed Engineer',
  tagline: 'World-Class Software Developer & Engineer in Coimbatore, Tamil Nadu, India',
  headline: 'World-Class Software Developer in Coimbatore, Tamil Nadu, India',
  alternateNames: [
    'Ansar Ibrahim Coimbatore',
    'Ansar Ibrahim software developer',
    'Ansar Ibrahim software engineer',
    'Ansar Ibrahim full-stack developer',
    'Ansar Ibrahim AI Techies',
  ],
  disambiguation:
    'Ansar Ibrahim is a software developer and software engineer who builds websites, web applications, mobile apps and cloud systems. He is not a land developer, property developer or real-estate broker.',
  description:
    'Ansar Ibrahim is a world-class software developer and software engineer from Coimbatore, Tamil Nadu, India, and the founder of AI Techies. Full-stack, MERN and mobile (iOS & Android) developer and forward deployed engineer. Give him an idea and a budget and he ships the entire digital platform: website, web app, iOS/Android apps, CRM, admin panel, APIs, cloud hosting on AWS, Google Cloud or DigitalOcean, CI/CD pipelines and SEO/AEO/GEO/LLMO growth. Stack: JavaScript, TypeScript, React, Next.js, Node.js, Python, Django, FastAPI, Ruby on Rails, PostgreSQL, MongoDB, React Native.',
  shortDescription:
    'World-class software developer and engineer in Coimbatore, Tamil Nadu, India. Idea + budget in, complete digital platform out: web, iOS/Android apps, CRM, cloud, CI/CD and SEO.',
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
    'world class developer Coimbatore',
    'world class software developer Tamil Nadu',
    'world class software engineer India',
    'best software developer in Coimbatore',
    'top software engineer Tamil Nadu',
    'software developer Coimbatore',
    'software engineer Coimbatore Tamil Nadu India',
    'app developer Coimbatore',
    'web developer Coimbatore',
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
