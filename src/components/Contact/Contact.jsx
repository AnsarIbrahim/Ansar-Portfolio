import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaMedium,
  FaAngellist,
} from 'react-icons/fa';
import '../../CSS/styles.css';

const Contact = () => {
  const [state, handleSubmit] = useForm('xwkdjqwo');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
      setMessage('');
      setEmail('');
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
  }, [state.succeeded]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div id="contact" className="flex min-h-screen flex-col justify-center bg-cyan-300">
      <div className="new mt-3 text-center sm:mt-20">
        <h1 className="new text-2xl sm:text-5xl lg:text-9xl">GET IN TOUCH</h1>
        <p className="mt-5 flex items-center justify-center p-5 text-center font-inter">
          Want to discuss your project? Or, just chat about latest in tech
          world?
          <br />
          Drop a message below.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col items-center justify-center gap-5"
        >
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            className="rounded-lg border border-red-300 bg-transparent p-3 font-inter outline-none"
            placeholder="name@email.com"
            required
          />
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessage}
            className="rounded-lg border border-red-300 bg-transparent p-7 font-inter outline-none"
            placeholder="Your message"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <button
            type="submit"
            disabled={state.submitting}
            className="rounded-lg bg-[#BDB2FF] p-3 font-inter text-[#9BF6FF] hover:bg-[#A5B4FC] focus:ring-4 focus:ring-[#93C5FD] focus:ring-opacity-50 active:bg-[#818CF8]"
          >
            Get in touch
          </button>
          {showSuccessMessage && (
            <p className="text-lg font-bold text-green-500">
              Thanks for joining!
            </p>
          )}
        </form>
        <div className="flex flex-col mt-10 sm:mt-20 items-center justify-center lg:mt-16">
          <h2 className="text-9xl">2023</h2>
          <div className="mt-5 flex gap-5">
            <a
              href="https://github.com/AnsarIbrahim/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://twitter.com/ansaradheeb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ansar-ibrahim/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://medium.com/@ansaradheeb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
            >
              <FaMedium size={20} />
            </a>
            <a
              href="https://angel.co/ansar-ibrahim"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AngelList"
            >
              <FaAngellist size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
