import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from './index';

const card = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: 'easeOut' },
  }),
};

const Recent = () => (
  <section id="work" className="relative overflow-hidden py-24 sm:py-32">
    <div className="orb -left-20 bottom-20 h-80 w-80 bg-cyanx/50" />
    <div className="container-x relative">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title mt-5">Recent projects</h2>
          <p className="section-sub">
            A mix of client work and open-source builds. Every project ships
            with a live demo and public source code.
          </p>
        </div>
        <a
          href="https://github.com/AnsarIbrahim?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost self-start sm:self-auto"
        >
          <FaGithub />
          All repositories
        </a>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1, margin: '0px 0px -10% 0px' }}
            custom={i % 3}
            className={`glass group flex flex-col overflow-hidden shadow-card transition hover:-translate-y-1 hover:border-primary/40 ${
              p.featured ? 'sm:col-span-2 lg:col-span-2' : ''
            }`}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ink2">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              {p.featured && (
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                  Featured
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4 text-sm">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-white transition hover:text-primary-light"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live demo
                </a>
                <a
                  href={p.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-white/60 transition hover:text-white"
                >
                  <FaGithub />
                  Source
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Recent;
