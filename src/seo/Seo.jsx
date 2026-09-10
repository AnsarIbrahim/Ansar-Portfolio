import { useEffect } from 'react';
import PropTypes from 'prop-types';
import site from './site';

const upsertMeta = (attr, key, content) => {
  if (content == null) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/**
 * Route-level SEO: title, description, canonical, Open Graph, Twitter and
 * a JSON-LD graph. Static, crawler-visible defaults live in public/index.html;
 * this keeps them in sync as the user navigates the SPA.
 */
const Seo = ({
  title, description, path, schema, type,
}) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`;
    const url = `${site.url}${path}`;
    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', type);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);

    const id = 'route-jsonld';
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, [title, description, path, schema, type]);

  return null;
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  schema: PropTypes.shape({}).isRequired,
  type: PropTypes.string,
};

Seo.defaultProps = { title: '', type: 'website' };

export default Seo;
