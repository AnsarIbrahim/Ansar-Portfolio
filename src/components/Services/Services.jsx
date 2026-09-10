import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaMobileAlt, FaRobot, FaSearch, FaCommentDots, FaBrain, FaProjectDiagram,
  FaMapMarkerAlt, FaSitemap, FaPenNib, FaLayerGroup, FaUsersCog, FaCloudUploadAlt, FaUserCog,
} from 'react-icons/fa';
import { services } from '../../seo/content';

const icons = {
  platform: <FaLayerGroup />,
  crm: <FaUsersCog />,
  cloud: <FaCloudUploadAlt />,
  fde: <FaUserCog />,
  fullstack: <FaCode />,
  mobile: <FaMobileAlt />,
  ai: <FaRobot />,
  seo: <FaSearch />,
  aeo: <FaCommentDots />,
  geo: <FaBrain />,
  llmo: <FaProjectDiagram />,
  local: <FaMapMarkerAlt />,
  schema: <FaSitemap />,
  content: <FaPenNib />,
};

const accents = {
  Engineering: 'from-primary to-cyanx',
  Growth: 'from-pinkx to-gold',
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.45, ease: 'easeOut' },
  }),
};

const groups = ['Engineering', 'Growth'];

const Services = () => (
  <section id="services" className="relative overflow-hidden py-24 sm:py-32" aria-labelledby="services-title">
    <div className="orb -right-24 top-10 h-80 w-80 bg-gold/40" />
    <div className="container-x relative">
      <span className="eyebrow">Services</span>
      <h2 id="services-title" className="section-title mt-5">
        Everything your business needs online, from one engineer.
      </h2>
      <p className="section-sub">
        Website, web app, iOS and Android apps, CRM, admin panel, APIs, cloud,
        CI/CD and AI features, then SEO, AEO, GEO, LLMO, local SEO, schema and
        content strategy so you rank on Google and get cited by ChatGPT,
        Perplexity and Gemini.
      </p>

      {groups.map((group) => (
        <div key={group} className="mt-14">
          <div className="flex items-center gap-3">
            <span className={`h-1 w-10 rounded-full bg-gradient-to-r ${accents[group]}`} />
            <h3 className="text-lg font-semibold text-white">
              {group === 'Engineering' ? 'Build: web, mobile, cloud & AI' : 'Grow: SEO & AI-search visibility'}
            </h3>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.filter((s) => s.group === group).map((s, i) => (
              <motion.li
                key={s.id}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
                custom={i % 4}
                className="glass group flex flex-col p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.06]"
              >
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accents[group]} text-white shadow-glow`}>
                  {icons[s.id]}
                </span>
                <h4 className="mt-4 text-base font-semibold text-white">{s.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{s.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
