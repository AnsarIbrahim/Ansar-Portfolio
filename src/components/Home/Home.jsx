import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import img from '../../assests/Ansar.jpg';
import site from '../../seo/site';

const stats = [
  { value: '50+', label: 'Products shipped' },
  { value: 'Web + Apps', label: 'iOS · Android · CRM · Admin' },
  { value: 'Idea → Live', label: 'Cloud, CI/CD & SEO included' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: 'easeOut' },
  }),
};

const Home = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
  >
    <div className="grid-bg absolute inset-0" />
    <div className="orb -left-24 top-10 h-96 w-96 bg-primary" />
    <div className="orb -right-24 bottom-0 h-[28rem] w-[28rem] bg-pinkx/70" />
    <div className="orb left-1/2 top-1/3 h-72 w-72 bg-cyanx/40" />

    <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <motion.span
          className="eyebrow"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          Available for new projects
        </motion.span>

        <motion.h1
          id="hero-title"
          className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
        >
          Your idea and budget in.
          <br />
          <span className="gradient-text">A complete digital platform</span>
          {' '}
          out.
        </motion.h1>

        <motion.p
          id="hero-summary"
          className="section-sub"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          I&apos;m Ansar Ibrahim, a full-stack, MERN and mobile developer and
          forward deployed engineer based in
          {' '}
          {site.location.city}
          ,
          {' '}
          {site.location.country}
          . I build the whole thing end to end: website, web app, iOS and
          Android apps, CRM and admin panel, APIs, cloud hosting, CI/CD and
          the SEO that brings customers. React, Next.js, Node, Python, Django,
          FastAPI, Rails and more. Founder of
          {' '}
          <a
            href="https://aitechies.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-primary/60 underline-offset-4 hover:decoration-primary"
          >
            AI Techies
          </a>
          , a digital product studio.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          <a href="#work" className="btn-primary">
            View my work
            <FaArrowRight className="text-xs" />
          </a>
          <a href="#contact" className="btn-ghost">
            Start a project
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a
              href="https://github.com/AnsarIbrahim/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white/60 transition hover:bg-white/[0.06] hover:text-white"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/ansar-ibrahim/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white/60 transition hover:bg-white/[0.06] hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.dl
          className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-6"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
        >
          {stats.map((s) => (
            <div key={s.label} className="px-3 first:pl-0 sm:px-4">
              <dt className="text-base font-semibold text-white sm:text-2xl">{s.value}</dt>
              <dd className="mt-1 text-[11px] leading-snug text-white/50 sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        className="relative mx-auto w-full max-w-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 via-pinkx/20 to-gold/30 blur-2xl" />
        <div className="glass animate-float relative overflow-hidden rounded-[2rem] p-3 shadow-card">
          <img
            src={img}
            alt="Ansar Ibrahim"
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-ink/70 p-4 backdrop-blur-md">
            <p className="text-sm font-semibold text-white">Ansar Ibrahim</p>
            <p className="text-xs text-white/60">Full-Stack · Mobile · Cloud · SEO</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Home;
