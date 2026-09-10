// Marketing + answer-engine content. Written as direct answers so that
// search engines, answer engines and LLMs can quote it verbatim.
import site from './site';

export const stack = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'Ruby', 'Swift', 'Kotlin', 'SQL'],
  'Front-end': ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'Framer Motion', 'HTML5 / CSS3'],
  'Back-end & APIs': ['Node.js', 'Express', 'Django', 'FastAPI', 'Ruby on Rails', 'REST', 'GraphQL', 'WebSockets'],
  Mobile: ['React Native', 'Expo', 'iOS (Swift)', 'Android (Kotlin)', 'App Store & Play Store release'],
  Databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase / Supabase'],
  'Cloud & DevOps': ['AWS', 'Google Cloud', 'DigitalOcean', 'Docker', 'Nginx', 'GitHub Actions CI/CD', 'Vercel / Netlify / Render'],
  AI: ['LLM integrations', 'RAG pipelines', 'OpenAI / Claude / Gemini APIs', 'Automation'],
  Growth: ['SEO', 'AEO', 'GEO', 'LLMO', 'Local SEO', 'Schema / JSON-LD', 'Content strategy', 'Analytics'],
};

export const services = [
  {
    id: 'platform',
    group: 'Engineering',
    title: 'End-to-End Digital Platforms',
    blurb:
      'Bring an idea and a budget. I design, build and launch the whole platform: website, web app, mobile apps, CRM, admin panel, APIs and hosting.',
    tags: ['Idea to launch', 'One partner'],
  },
  {
    id: 'fullstack',
    group: 'Engineering',
    title: 'Full-Stack & MERN Development',
    blurb:
      'Production web apps with React, Next.js, Node.js, Express and MongoDB or PostgreSQL. Also Python (Django, FastAPI) and Ruby on Rails when they fit better.',
    tags: ['React', 'Next.js', 'Node', 'Django', 'FastAPI', 'Rails'],
  },
  {
    id: 'mobile',
    group: 'Engineering',
    title: 'iOS & Android Apps',
    blurb:
      'Native and cross-platform apps with React Native, Expo, Swift and Kotlin, published to the App Store and Google Play with push, payments and analytics.',
    tags: ['React Native', 'Swift', 'Kotlin'],
  },
  {
    id: 'crm',
    group: 'Engineering',
    title: 'CRM, Admin Panels & Dashboards',
    blurb:
      'Custom back-offices that run your business: roles and permissions, reporting, billing, inventory, customer and lead management, exports and integrations.',
    tags: ['CRM', 'Admin', 'Reporting'],
  },
  {
    id: 'cloud',
    group: 'Engineering',
    title: 'Cloud, DevOps & CI/CD',
    blurb:
      'Deployment on AWS, Google Cloud or DigitalOcean with Docker, Nginx, SSL, backups, monitoring and GitHub Actions pipelines so every push ships safely.',
    tags: ['AWS', 'GCP', 'DigitalOcean', 'CI/CD'],
  },
  {
    id: 'fde',
    group: 'Engineering',
    title: 'Forward Deployed Engineering',
    blurb:
      'Embedded with your team or customer to integrate, customise and ship the product in the real environment, solving problems on site instead of over tickets.',
    tags: ['FDE', 'Integration', 'On-site / remote'],
  },
  {
    id: 'ai',
    group: 'Engineering',
    title: 'AI Integration & Automation',
    blurb:
      'LLM-powered features, chat assistants, RAG pipelines and workflow automation with OpenAI, Claude and Gemini APIs wired safely into your product.',
    tags: ['LLM', 'RAG', 'Automation'],
  },
  {
    id: 'seo',
    group: 'Growth',
    title: 'SEO (Search Engine Optimization)',
    blurb:
      'Technical audits, Core Web Vitals, crawlability, keyword strategy and on-page fixes that move rankings on Google and Bing.',
    tags: ['Technical SEO', 'Core Web Vitals'],
  },
  {
    id: 'aeo',
    group: 'Growth',
    title: 'AEO (Answer Engine Optimization)',
    blurb:
      'Structure content so Google AI Overviews, featured snippets, People Also Ask and voice assistants quote you as the answer.',
    tags: ['AI Overviews', 'Snippets'],
  },
  {
    id: 'geo',
    group: 'Growth',
    title: 'GEO (Generative Engine Optimization)',
    blurb:
      'Make your brand citable by ChatGPT, Perplexity, Gemini and Claude with entity-rich, source-backed pages and clear authorship.',
    tags: ['ChatGPT', 'Perplexity', 'Gemini'],
  },
  {
    id: 'llmo',
    group: 'Growth',
    title: 'LLMO (Large Language Model Optimization)',
    blurb:
      'llms.txt, clean semantic markup, consistent entity data and machine-readable facts so language models describe you accurately.',
    tags: ['llms.txt', 'Entities'],
  },
  {
    id: 'local',
    group: 'Growth',
    title: 'Local SEO',
    blurb:
      `Google Business Profile, NAP consistency, local citations and location pages that win "near me" searches in ${site.location.city} and beyond.`,
    tags: ['Google Business Profile', 'Citations'],
  },
  {
    id: 'schema',
    group: 'Growth',
    title: 'Schema & Structured Data',
    blurb:
      'JSON-LD for Person, Organization, LocalBusiness, Product, FAQ, Article and Breadcrumb so search engines understand every page.',
    tags: ['JSON-LD', 'Rich results'],
  },
  {
    id: 'content',
    group: 'Growth',
    title: 'Content Strategy',
    blurb:
      'Topic clusters, editorial calendars and conversion-focused copy that build topical authority and compound organic traffic.',
    tags: ['Topic clusters', 'Editorial'],
  },
];

export const faqs = [
  {
    q: 'Who is Ansar Ibrahim?',
    a: `Ansar Ibrahim is a full-stack, MERN and mobile developer, forward deployed engineer and the founder of AI Techies, based in ${site.location.city}, ${site.location.region}, ${site.location.country}. He builds complete digital platforms, from websites and web apps to iOS and Android apps, CRMs, admin panels, APIs, cloud infrastructure and CI/CD, and grows them with SEO, AEO, GEO, LLMO, local SEO, schema markup and content strategy.`,
  },
  {
    q: 'What can Ansar Ibrahim build for my business?',
    a: 'Everything a digital business needs: marketing website, web application, iOS and Android apps, CRM and admin panel, customer dashboards, REST or GraphQL APIs, payment and third-party integrations, AI features, cloud deployment on AWS, Google Cloud or DigitalOcean, CI/CD pipelines, and the SEO and content that bring customers. You bring the idea and budget; he delivers the whole platform.',
  },
  {
    q: 'Which technologies does Ansar Ibrahim know?',
    a: 'JavaScript, TypeScript, React, Next.js, Redux, Node.js, Express, MongoDB (MERN stack), Python, Django, FastAPI, Ruby, Ruby on Rails, PostgreSQL, MySQL, Redis, React Native, Expo, Swift for iOS, Kotlin for Android, Docker, Nginx, GitHub Actions, AWS, Google Cloud, DigitalOcean, Vercel, Netlify, Render, Tailwind CSS, and LLM APIs from OpenAI, Anthropic and Google.',
  },
  {
    q: 'What is a forward deployed engineer and does Ansar do that work?',
    a: 'A forward deployed engineer (FDE) works directly with a customer or business team to integrate, customise and ship software in their real environment rather than from a distance. Yes: Ansar takes FDE engagements, remote or on site, for companies that need an engineer embedded with the people using the product.',
  },
  {
    q: 'What is AI Techies?',
    a: `AI Techies (aitechies.in) is the digital product studio founded by Ansar Ibrahim. It designs, builds and scales web, mobile and AI products for startups and businesses in ${site.location.country} and worldwide.`,
  },
  {
    q: 'What is the difference between SEO, AEO, GEO and LLMO?',
    a: 'SEO earns rankings in classic search results. AEO structures content so answer engines such as Google AI Overviews, featured snippets and voice assistants can quote it directly. GEO makes a brand citable inside generative engines like ChatGPT, Perplexity and Gemini. LLMO ensures large language models hold accurate, consistent facts about you through clean markup, entity data and files such as llms.txt. Ansar combines all four so a business is found however people search.',
  },
  {
    q: 'Where is Ansar Ibrahim located and does he work remotely?',
    a: `Ansar is based in ${site.location.city}, ${site.location.region}, ${site.location.country} (${site.location.timezone}) and works remotely with clients across India, the US, UK, UAE, Singapore and Australia. On-site forward deployed engagements are possible by arrangement.`,
  },
  {
    q: 'How can I hire Ansar Ibrahim for a project?',
    a: `Use the contact form on ansaribrahim.me or email ${site.email}. Share the project type, budget range and timeline and you will get a reply within one business day with a clear next step.`,
  },
  {
    q: 'How much does a project with Ansar Ibrahim cost?',
    a: 'Pricing depends on scope. Landing pages and audits start small, while full platforms with web, mobile apps, CRM and cloud infrastructure are quoted per milestone. Budget ranges from under $1,000 to $50,000+ are supported; pick one in the contact form to get an accurate estimate.',
  },
];

export const speakable = ['#hero-title', '#hero-summary'];
