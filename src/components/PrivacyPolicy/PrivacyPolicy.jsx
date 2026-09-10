import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const sections = [
  {
    title: '1. Introduction',
    body: (
      <p>
        Welcome to my portfolio website. This Privacy Policy explains what
        information I collect when you visit the site or use the contact form,
        why I collect it, and how it is protected.
      </p>
    ),
  },
  {
    title: '2. Information you give me',
    body: (
      <>
        <p>When you submit the contact form I collect the details you enter:</p>
        <ul>
          <li>Your first and last name, email address and, optionally, phone number.</li>
          <li>Your company, role, website and location, if you choose to provide them.</li>
          <li>
            Project details: the type of work, budget range, timeline, how you
            found me and your message.
          </li>
          <li>Your preferred contact method and your consent to this policy.</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Information collected automatically',
    body: (
      <>
        <p>
          To understand where enquiries come from and to prevent spam, the
          form also records some technical context at the time you submit it:
        </p>
        <ul>
          <li>
            The page you submitted from, the first page you landed on and the
            referring site.
          </li>
          <li>
            Campaign parameters in the URL (utm_source, utm_medium, utm_campaign
            and similar).
          </li>
          <li>Device type, browser, operating system, language, time zone and screen size.</li>
          <li>The date and time of submission.</li>
        </ul>
        <p>
          This information is attached to your message only. I do not use
          tracking cookies or third-party advertising trackers on this site.
        </p>
      </>
    ),
  },
  {
    title: '4. How I use your information',
    body: (
      <ul>
        <li>To respond to your enquiry and discuss your project.</li>
        <li>To understand which channels bring genuine enquiries so I can improve the site.</li>
        <li>To detect and filter spam or abusive submissions.</li>
      </ul>
    ),
  },
  {
    title: '5. Third-party services',
    body: (
      <>
        <p>
          Form submissions are processed and stored by Formspree, which
          delivers them to my inbox. Formspree handles your data under its own
          privacy policy. The site itself is hosted on a static hosting
          provider that may log standard request data such as IP address and
          user agent.
        </p>
      </>
    ),
  },
  {
    title: '6. Data retention and security',
    body: (
      <p>
        Enquiries are kept for as long as needed to respond and follow up on
        the conversation, and are deleted when no longer required. I take
        reasonable measures to protect your information, but no method of
        transmission over the Internet is completely secure.
      </p>
    ),
  },
  {
    title: '7. Your rights',
    body: (
      <ul>
        <li>Ask what personal information I hold about you.</li>
        <li>Request correction or deletion of that information.</li>
        <li>Withdraw consent and opt out of further communication at any time.</li>
      </ul>
    ),
  },
  {
    title: '8. Children’s privacy',
    body: (
      <p>
        This website is not intended for children under 13 and I do not
        knowingly collect personal information from them.
      </p>
    ),
  },
  {
    title: '9. Changes to this policy',
    body: (
      <p>
        I may update this policy from time to time. Changes are posted on
        this page with a new &ldquo;last updated&rdquo; date.
      </p>
    ),
  },
  {
    title: '10. Contact',
    body: (
      <p>
        Questions about this policy? Email me at
        {' '}
        <a href="mailto:ansaribrahimdev@gmail.com">ansaribrahimdev@gmail.com</a>
        {' '}
        or use the contact form on the home page.
      </p>
    ),
  },
];

const PrivacyPolicy = () => (
  <section className="relative min-h-screen overflow-hidden py-32">
    <div className="orb -left-24 top-20 h-80 w-80 bg-primary/70" />
    <div className="container-x relative max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
        <FaArrowLeft className="text-xs" />
        Back to home
      </Link>
      <span className="eyebrow mt-8 block w-fit">Legal</span>
      <h1 className="section-title mt-5">Privacy Policy</h1>
      <p className="mt-3 text-sm text-white/50">Last updated: September 10, 2026</p>

      <div className="glass mt-10 divide-y divide-white/10 p-6 sm:p-10">
        {sections.map((s) => (
          <section key={s.title} className="py-7 first:pt-0 last:pb-0">
            <h2 className="text-lg font-semibold text-white">{s.title}</h2>
            <div className="prose-policy mt-3 space-y-3 text-sm leading-relaxed text-white/65 [&_a]:text-white [&_a]:underline [&_a]:decoration-primary/60 [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </div>
  </section>
);

export default PrivacyPolicy;
