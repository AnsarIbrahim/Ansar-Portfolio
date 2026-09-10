import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import skills from '.';
import { stack } from '../../seo/content';

const highlights = [
  {
    title: 'Web, MERN & Next.js',
    text: 'React, Next.js, Node, Express and MongoDB or PostgreSQL. Python with Django and FastAPI, or Ruby on Rails, when they fit better.',
  },
  {
    title: 'iOS & Android apps',
    text: 'React Native, Expo, Swift and Kotlin apps published to the App Store and Google Play, sharing one backend with the web.',
  },
  {
    title: 'CRM, admin & cloud',
    text: 'Back-offices, dashboards and APIs deployed on AWS, Google Cloud or DigitalOcean with Docker, CI/CD, monitoring and backups.',
  },
  {
    title: 'Found & cited',
    text: 'SEO, AEO, GEO and LLMO baked in, so the product ranks on Google and gets quoted by ChatGPT and Gemini.',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => (
  <section id="about" className="relative overflow-hidden py-24 sm:py-32">
    <div className="orb right-0 top-40 h-80 w-80 bg-primary/70" />
    <div className="container-x relative">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: '0px 0px -10% 0px' }}
        className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
      >
        <div>
          <span className="eyebrow">About me</span>
          <h2 className="section-title mt-5">
            One engineer. The entire product, A to Z.
          </h2>
          <p className="section-sub">
            Hi, I&apos;m Ansar. Clients bring me an idea and a budget, and I
            deliver the whole digital business: the website, the web app, the
            iOS and Android apps, the CRM and admin panel, the APIs, the cloud
            setup, the CI/CD pipeline and the SEO. Over 50 products shipped
            across e-commerce, marketplaces, dashboards and content platforms.
          </p>
          <p className="section-sub !mt-3">
            I also work as a forward deployed engineer, embedded with your team
            or customer to integrate and ship in the real environment.
          </p>
          <p className="section-sub !mt-3">
            When I&apos;m not writing code I&apos;m running
            {' '}
            <a
              href="https://aitechies.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-primary/60 underline-offset-4 hover:decoration-primary"
            >
              AI Techies
            </a>
            , where we design and ship web, mobile and AI products for clients.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Start a project
              <FaArrowRight className="text-xs" />
            </a>
            <a
              href="https://aitechies.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FaExternalLinkAlt className="text-xs" />
              Visit AI Techies
            </a>
            <a href="mailto:ansaradheeb@gmail.com" className="btn-ghost">
              <FaEnvelope className="text-xs" />
              Email me
            </a>
          </div>
        </div>

        <div className="grid content-start gap-4 sm:grid-cols-2">
          {highlights.map((h) => (
            <div key={h.title} className="glass p-5 transition hover:border-primary/40 hover:bg-white/[0.06]">
              <div className="mb-3 h-1 w-8 rounded-full bg-gradient-to-r from-primary to-pinkx" />
              <h3 className="text-base font-semibold text-white">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{h.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: '0px 0px -10% 0px' }}
        className="mt-20"
      >
        <div className="flex items-end justify-between gap-4">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">Tools I work with</h3>
          <p className="hidden text-sm text-white/40 sm:block">Hover to pause</p>
        </div>
        <div className="marquee glass mt-6 overflow-hidden py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <ul className="marquee-track">
            {[...skills, ...skills].map((s, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${s.id}-${i}`} className="flex items-center gap-3 px-6">
                <span className={`text-2xl ${s.color}`}>{s.icon}</span>
                <span className="whitespace-nowrap text-sm font-medium text-white/80">{s.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(stack).map(([group, items]) => (
            <div key={group} className="glass p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{group}</dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {items.map((it) => (
                  <span key={it} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/80">
                    {it}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </div>
  </section>
);

export default About;
