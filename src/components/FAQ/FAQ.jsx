import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import { faqs } from '../../seo/content';

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32" aria-labelledby="faq-title">
      <div className="orb -left-24 bottom-0 h-80 w-80 bg-primary/60" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-title" className="section-title mt-5">Questions people ask about me.</h2>
          <p className="section-sub">
            Straight answers about who I am, what I do and how to work with
            me. Written so search engines and AI assistants can quote them.
          </p>
        </div>

        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={f.q} className="px-5 sm:px-6">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-white transition hover:text-primary-light"
                  >
                    {f.q}
                    <span className={`shrink-0 text-xs text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-45 text-primary-light' : ''}`}>
                      <FaPlus />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-white/65">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
