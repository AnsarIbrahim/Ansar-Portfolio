import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 px-4 py-20">
    <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-2xl md:p-12">
      <h1 className="mb-4 text-center text-4xl font-bold text-purple-600">
        Privacy Policy
      </h1>
      <p className="mb-8 text-center italic text-gray-600">
        Last Updated: October 15, 2025
      </p>

      <section className="mb-8">
        <h2 className="mb-4 border-b-2 border-purple-600 pb-2 text-2xl font-semibold text-gray-800">
          1. Introduction
        </h2>
        <p className="leading-relaxed text-gray-700">
          Welcome to my portfolio website. This Privacy Policy explains how I
          collect, use, and protect your information when you visit my website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 border-b-2 border-purple-600 pb-2 text-2xl font-semibold text-gray-800">
          2. Information Collection
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          I may collect the following types of information:
        </p>
        <ul className="ml-6 list-disc space-y-2 text-gray-700">
          <li>
            <strong className="font-semibold text-gray-900">
              Contact Information:
            </strong>
            When you use the contact form, I collect your name, email address,
            and any message you provide.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">
              Usage Data:
            </strong>
            I may collect information about how you access and use the website,
            including your IP address, browser type, pages visited, and time
            spent on pages.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 border-b-2 border-purple-600 pb-2 text-2xl font-semibold text-gray-800">
          3. How I Use Your Information
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          The information I collect is used to:
        </p>
        <ul className="ml-6 list-disc space-y-2 text-gray-700">
          <li>Respond to your inquiries and messages</li>
          <li>Improve the website&apos;s functionality and user experience</li>
          <li>Analyze website usage and trends</li>
          <li>Prevent fraudulent activity and enhance security</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 border-b-2 border-purple-600 pb-2 text-2xl font-semibold text-gray-800">
          4. Data Storage and Security
        </h2>
        <p className="leading-relaxed text-gray-700">
          I take reasonable measures to protect your personal information from
          unauthorized access, disclosure, or destruction. However, no method of
          transmission over the Internet is 100% secure, and I cannot guarantee
          absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 border-b-2 border-purple-600 pb-2 text-2xl font-semibold text-gray-800">
          5. Third-Party Services
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          This website may use third-party services for analytics, form
          submission, or hosting. These services may collect information as
          described in their respective privacy policies:
        </p>
        <ul className="ml-6 list-disc space-y-2 text-gray-700">
          <li>Formspree (for contact form submissions)</li>
          <li>Google Analytics (if applicable)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 border-b-2 border-purple-600 pb-2 text-2xl font-semibold text-gray-800">
          6. Cookies
        </h2>
        <p className="leading-relaxed text-gray-700">
          This website may use cookies to enhance your browsing experience. You
          can choose to disable cookies through your browser settings, though
          this may affect website functionality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 border-b-2 border-purple-600 pb-2 text-2xl font-semibold text-gray-800">
          7. Your Rights
        </h2>
        <p className="mb-3 leading-relaxed text-gray-700">
          You have the right to:
        </p>
        <ul className="ml-6 list-disc space-y-2 text-gray-700">
          <li>Access the personal information I hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of communications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 border-b-2 border-purple-600 pb-2 text-2xl font-semibold text-gray-800">
          8. Children&apos;s Privacy
        </h2>
        <p className="leading-relaxed text-gray-700">
          This website is not intended for children under the age of 13. I do
          not knowingly collect personal information from children under 13.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 border-b-2 border-purple-600 pb-2 text-2xl font-semibold text-gray-800">
          9. Changes to This Privacy Policy
        </h2>
        <p className="leading-relaxed text-gray-700">
          I may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated &quot;Last Updated&quot; date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 border-b-2 border-purple-600 pb-2 text-2xl font-semibold text-gray-800">
          10. Contact Information
        </h2>
        <p className="leading-relaxed text-gray-700">
          If you have any questions about this Privacy Policy, please contact me
          through the contact form on this website.
        </p>
      </section>

      <div className="mt-10 text-center">
        <Link
          to="/"
          className="inline-block rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
