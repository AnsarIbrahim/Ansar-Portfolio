import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { locations } from '../../seo/content';
import site from '../../seo/site';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease: 'easeOut' },
  }),
};

const Locations = () => (
  <section
    id="locations"
    className="relative overflow-hidden py-24 sm:py-32"
    aria-labelledby="locations-title"
  >
    <div className="orb -right-24 bottom-0 h-80 w-80 bg-cyanx/40" />
    <div className="container-x relative">
      <span className="eyebrow">Where I work</span>
      <h2 id="locations-title" className="section-title mt-5">
        Software developer in Coimbatore, Tamil Nadu, India.
        <br className="hidden sm:block" />
        {' '}
        Working with clients worldwide.
      </h2>
      <p className="section-sub">
        &ldquo;Developer&rdquo; here means software: I build websites, web
        apps, mobile apps, CRMs and cloud systems. I am not a land or property
        developer. If you are searching for a world-class software developer
        or software engineer in
        {' '}
        {site.location.city}
        ,
        {' '}
        {site.location.region}
        {' '}
        or anywhere in
        {' '}
        {site.location.country}
        , you have found him.
      </p>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {locations.map((l, i) => (
          <motion.li
            key={l.name}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1, margin: '0px 0px -10% 0px' }}
            custom={i}
            className="glass p-5 transition hover:border-primary/40 hover:bg-white/[0.06]"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary-light">
              <FaMapMarkerAlt />
            </span>
            <h3 className="mt-4 text-base font-semibold text-white">
              Software developer in
              {' '}
              {l.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{l.note}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default Locations;
