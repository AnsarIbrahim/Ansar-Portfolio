import site, { sameAs } from './site';
import { faqs, services } from './content';
import projects from '../components/Recent';

const abs = (path) => (path.startsWith('http') ? path : `${site.url}${path}`);

const ids = {
  person: `${site.url}/#person`,
  org: `${site.url}/#organization`,
  business: `${site.url}/#business`,
  website: `${site.url}/#website`,
  webpage: (path) => `${site.url}${path}#webpage`,
};

const postalAddress = {
  '@type': 'PostalAddress',
  addressLocality: site.location.city,
  addressRegion: site.location.region,
  addressCountry: site.location.countryCode,
};

export const personSchema = () => ({
  '@type': 'Person',
  '@id': ids.person,
  name: site.name,
  url: site.url,
  image: abs(site.image),
  jobTitle: site.jobTitle,
  description: site.description,
  email: `mailto:${site.email}`,
  address: postalAddress,
  worksFor: { '@id': ids.org },
  founderOf: { '@id': ids.org },
  knowsAbout: [
    'Full-stack web development', 'MERN stack', 'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Node.js', 'Express', 'MongoDB', 'Python', 'Django', 'FastAPI', 'Ruby', 'Ruby on Rails',
    'PostgreSQL', 'MySQL', 'Redis', 'React Native', 'Expo', 'iOS development (Swift)',
    'Android development (Kotlin)', 'CRM and admin panel development', 'REST and GraphQL APIs',
    'AWS', 'Google Cloud', 'DigitalOcean', 'Docker', 'Nginx', 'CI/CD pipelines', 'GitHub Actions',
    'Forward deployed engineering', 'AI integration', 'LLM and RAG applications',
    'Search Engine Optimization (SEO)', 'Answer Engine Optimization (AEO)',
    'Generative Engine Optimization (GEO)', 'Large Language Model Optimization (LLMO)',
    'Local SEO', 'Schema.org structured data', 'Content strategy',
  ],
  knowsLanguage: site.languages,
  nationality: { '@type': 'Country', name: site.location.country },
  sameAs,
});

export const organizationSchema = () => ({
  '@type': 'Organization',
  '@id': ids.org,
  name: site.company.name,
  url: site.company.url,
  logo: abs(site.logo),
  description: site.company.description,
  founder: { '@id': ids.person },
  address: postalAddress,
  sameAs: [site.company.url],
});

export const localBusinessSchema = () => ({
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': ids.business,
  name: `${site.name} — ${site.tagline}`,
  url: site.url,
  image: abs(site.image),
  logo: abs(site.logo),
  email: site.email,
  priceRange: '$$',
  address: postalAddress,
  geo: { '@type': 'GeoCoordinates', latitude: site.location.lat, longitude: site.location.lng },
  areaServed: site.location.serviceArea.map((name) => ({ '@type': 'Place', name })),
  founder: { '@id': ids.person },
  parentOrganization: { '@id': ids.org },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  }],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service', name: s.title, description: s.blurb, provider: { '@id': ids.person },
      },
    })),
  },
  sameAs,
});

export const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': ids.website,
  url: site.url,
  name: site.name,
  description: site.shortDescription,
  inLanguage: 'en',
  publisher: { '@id': ids.person },
});

export const webPageSchema = ({
  path, title, description, type = 'WebPage',
}) => ({
  '@type': type,
  '@id': ids.webpage(path),
  url: `${site.url}${path}`,
  name: title,
  description,
  isPartOf: { '@id': ids.website },
  about: { '@id': ids.person },
  inLanguage: 'en',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#hero-title', '#hero-summary'],
  },
});

export const breadcrumbSchema = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${site.url}${it.path}`,
  })),
});

export const faqSchema = () => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const projectsSchema = () => ({
  '@type': 'ItemList',
  name: 'Projects by Ansar Ibrahim',
  itemListElement: projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'SoftwareSourceCode',
      name: p.title,
      description: p.description,
      url: p.live,
      codeRepository: p.source,
      programmingLanguage: p.tech.join(', '),
      author: { '@id': ids.person },
    },
  })),
});

export const graph = (nodes) => ({ '@context': 'https://schema.org', '@graph': nodes });
