import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Contact from '../../assests/contact.jpeg';

const Add = () => (
  <section className="relative overflow-hidden py-24 sm:py-32">
    <img
      src={Contact}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-pinkx/20" />
    <div className="container-x relative text-center">
      <span className="eyebrow">Let&apos;s build together</span>
      <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        Exploring digital frontiers.
        <br />
        <span className="gradient-text">Let&apos;s connect.</span>
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-base text-white/60 sm:text-lg">
        Have an idea, a product to ship, or a team that needs a hand? Tell me
        about it and I&apos;ll get back within one business day.
      </p>
      <a href="#contact" className="btn-primary mt-8">
        Start a conversation
        <FaArrowRight className="text-xs" />
      </a>
    </div>
  </section>
);

export default Add;
