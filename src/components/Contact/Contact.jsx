import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaMedium,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaPaperPlane,
} from 'react-icons/fa';
import { collectLeadMeta } from '../../utils/leadMeta';
import Dropdown from './Dropdown';

const PROJECT_TYPES = [
  'Complete digital platform (web + apps + CRM)',
  'Website / landing page',
  'Web application (React / Next.js / MERN)',
  'iOS & Android app',
  'CRM / admin panel / dashboard',
  'E-commerce / marketplace',
  'API / backend (Node, Django, FastAPI, Rails)',
  'Cloud, DevOps & CI/CD (AWS, GCP, DigitalOcean)',
  'AI integration / automation',
  'SEO / AEO / GEO / LLMO',
  'Forward deployed engineer (FDE) engagement',
  'UI/UX design',
  'Consulting / code review',
  'Partnership / collaboration',
  'Other',
];

const BUDGETS = [
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Not sure yet',
];

const TIMELINES = ['ASAP', 'Within 1 month', '1 – 3 months', '3 – 6 months', 'Flexible'];

const SOURCES = [
  'Google search',
  'LinkedIn',
  'GitHub',
  'Twitter / X',
  'Referral from a friend or colleague',
  'AI Techies website',
  'Other',
];

const CONTACT_PREFS = ['Email', 'Phone call', 'WhatsApp', 'Video call'];

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  role: '',
  location: '',
  projectType: '',
  budget: '',
  timeline: '',
  hearAbout: '',
  contactPref: 'Email',
  message: '',
  consent: false,
};

const socials = [
  { name: 'GitHub', href: 'https://github.com/AnsarIbrahim/', icon: <FaGithub /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ansar-ibrahim/', icon: <FaLinkedin /> },
  { name: 'Twitter', href: 'https://twitter.com/ansaradheeb/', icon: <FaTwitter /> },
  { name: 'Medium', href: 'https://medium.com/@ansaradheeb', icon: <FaMedium /> },
];

const Field = ({
  id, label, required, hint, children,
}) => (
  <div>
    <label htmlFor={id} className="field-label">
      {label}
      {required && <span className="ml-1 text-pinkx">*</span>}
      {hint && <span className="ml-2 normal-case tracking-normal text-white/50">{hint}</span>}
    </label>
    {children}
  </div>
);

Field.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  hint: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Field.defaultProps = { required: false, hint: '' };

const Contact = () => {
  const [state, handleSubmit] = useForm('xwkdjqwo');
  const [form, setForm] = useState(initialForm);
  const [meta, setMeta] = useState({});
  const [sent, setSent] = useState(false);

  // Capture visitor context when the section mounts; refresh at submit time too.
  useEffect(() => {
    setMeta(collectLeadMeta());
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setSent(true);
      setForm(initialForm);
    }
  }, [state.succeeded]);

  const onChange = (e) => {
    const {
      name, value, type, checked,
    } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = (e) => {
    setMeta(collectLeadMeta());
    handleSubmit(e);
  };

  const subject = useMemo(() => {
    const who = [form.firstName, form.lastName].filter(Boolean).join(' ') || 'New lead';
    const what = form.projectType ? ` · ${form.projectType}` : '';
    return `Portfolio lead: ${who}${what}`;
  }, [form.firstName, form.lastName, form.projectType]);

  const messageLength = form.message.length;

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="orb -right-32 top-20 h-96 w-96 bg-primary/70" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title mt-5">Let&apos;s talk about your project.</h2>
          <p className="section-sub">
            Share a few details so I can understand what you need and reply
            with a clear next step. The more context you give, the faster I
            can get back to you with an estimate.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary-light">
                <FaEnvelope />
              </span>
              <div>
                <p className="text-white/50">Email</p>
                <a href="mailto:ansaribrahimdev@gmail.com" className="font-medium text-white hover:text-primary-light">
                  ansaribrahimdev@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyanx/20 text-cyan-300">
                <FaMapMarkerAlt />
              </span>
              <div>
                <p className="text-white/50">Based in</p>
                <p className="font-medium text-white">India · working with clients worldwide</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                <FaClock />
              </span>
              <div>
                <p className="text-white/50">Response time</p>
                <p className="font-medium text-white">Usually within one business day</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-primary/50 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="glass p-6 shadow-card sm:p-8">
          {sent ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-3xl text-green-400">
                <FaCheckCircle />
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">Message sent!</h3>
              <p className="mt-2 max-w-sm text-white/60">
                Thanks for reaching out. I&apos;ve received your details and will
                reply to your email within one business day.
              </p>
              <button type="button" onClick={() => setSent(false)} className="btn-ghost mt-8">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate={false} className="space-y-6">
              {/* Formspree controls */}
              <input type="hidden" name="_subject" value={subject} />
              <input type="hidden" name="_replyto" value={form.email} />
              {/* Honeypot for bots: hidden from humans, should stay empty */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              {/* Visitor context: where the lead came from */}
              {Object.entries(meta).map(([key, value]) => (
                <input key={key} type="hidden" name={`meta_${key}`} value={value} />
              ))}

              <fieldset className="space-y-4">
                <legend className="mb-1 text-sm font-semibold text-white">About you</legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="firstName" label="First name" required>
                    <input id="firstName" name="firstName" className="field" placeholder="Alex" autoComplete="given-name" value={form.firstName} onChange={onChange} required />
                  </Field>
                  <Field id="lastName" label="Last name" required>
                    <input id="lastName" name="lastName" className="field" placeholder="Chen" autoComplete="family-name" value={form.lastName} onChange={onChange} required />
                  </Field>
                  <Field id="email" label="Email" required>
                    <input id="email" name="email" type="email" className="field" placeholder="you@company.com" autoComplete="email" value={form.email} onChange={onChange} required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-pinkx" />
                  </Field>
                  <Field id="phone" label="Phone / WhatsApp" hint="with country code">
                    <input id="phone" name="phone" type="tel" className="field" placeholder="+91 98765 43210" autoComplete="tel" value={form.phone} onChange={onChange} />
                  </Field>
                  <Field id="company" label="Company / organisation">
                    <input id="company" name="company" className="field" placeholder="Acme Inc." autoComplete="organization" value={form.company} onChange={onChange} />
                  </Field>
                  <Field id="role" label="Your role">
                    <input id="role" name="role" className="field" placeholder="Founder, Product Manager…" autoComplete="organization-title" value={form.role} onChange={onChange} />
                  </Field>
                  <Field id="website" label="Company website" hint="optional">
                    <input id="website" name="website" type="url" className="field" placeholder="https://" autoComplete="url" value={form.website} onChange={onChange} />
                  </Field>
                  <Field id="location" label="City & country">
                    <input id="location" name="location" className="field" placeholder="Chennai, India" autoComplete="address-level2" value={form.location} onChange={onChange} />
                  </Field>
                </div>
              </fieldset>

              <fieldset className="space-y-4">
                <legend className="mb-1 text-sm font-semibold text-white">About the project</legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="projectType" label="What do you need?" required>
                    <Dropdown
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={onChange}
                      options={PROJECT_TYPES}
                      placeholder="Select a project type"
                      required
                    />
                  </Field>
                  <Field id="budget" label="Budget range">
                    <Dropdown
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={onChange}
                      options={BUDGETS}
                      placeholder="Select a budget"
                    />
                  </Field>
                  <Field id="timeline" label="Timeline">
                    <Dropdown
                      id="timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={onChange}
                      options={TIMELINES}
                      placeholder="When do you want to start?"
                    />
                  </Field>
                  <Field id="hearAbout" label="How did you find me?">
                    <Dropdown
                      id="hearAbout"
                      name="hearAbout"
                      value={form.hearAbout}
                      onChange={onChange}
                      options={SOURCES}
                      placeholder="Select an option"
                    />
                  </Field>
                </div>

                <Field id="message" label="Project details" required hint={`${messageLength}/2000`}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                    className="field resize-y"
                    placeholder="What are you building, who is it for, and what does success look like? Links to briefs, designs or existing products are welcome."
                    value={form.message}
                    onChange={onChange}
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-pinkx" />
                </Field>

                <div>
                  <span className="field-label">Preferred way to be contacted</span>
                  <div className="flex flex-wrap gap-2">
                    {CONTACT_PREFS.map((o) => (
                      // eslint-disable-next-line jsx-a11y/label-has-associated-control
                      <label
                        key={o}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition ${
                          form.contactPref === o
                            ? 'border-primary bg-primary/20 text-white'
                            : 'border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="contactPref"
                          value={o}
                          checked={form.contactPref === o}
                          onChange={onChange}
                          className="sr-only"
                        />
                        {o}
                      </label>
                    ))}
                  </div>
                </div>
              </fieldset>

              <label htmlFor="consent" className="flex cursor-pointer items-start gap-3 text-sm text-white/60">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={onChange}
                  required
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 accent-primary"
                />
                <span>
                  I agree that my details will be used to respond to this enquiry,
                  as described in the
                  {' '}
                  <Link to="/privacy-policy" className="text-white underline decoration-primary/60 underline-offset-4">
                    privacy policy
                  </Link>
                  .
                </span>
              </label>

              <ValidationError errors={state.errors} className="text-sm text-pinkx" />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-white/55">
                  <span className="text-pinkx">*</span>
                  {' '}
                  Required fields. No spam, ever.
                </p>
                <button type="submit" disabled={state.submitting} className="btn-primary">
                  {state.submitting ? 'Sending…' : 'Send message'}
                  {!state.submitting && <FaPaperPlane className="text-xs" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
