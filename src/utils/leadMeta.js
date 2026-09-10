const LANDING_KEY = 'ai_landing';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

const safeStorage = (fn, fallback = '') => {
  try {
    return fn() ?? fallback;
  } catch {
    return fallback;
  }
};

const getParams = (search) => {
  const params = new URLSearchParams(search);
  const result = {};
  UTM_KEYS.forEach((key) => {
    result[key] = params.get(key) || '';
  });
  result.ref = params.get('ref') || params.get('source') || '';
  return result;
};

/**
 * Remember the very first URL + referrer of this browsing session so the
 * contact form can report where the visitor originally came from, even if
 * they navigate around before submitting.
 */
export const rememberLanding = () => {
  safeStorage(() => {
    if (!window.sessionStorage.getItem(LANDING_KEY)) {
      window.sessionStorage.setItem(
        LANDING_KEY,
        JSON.stringify({
          url: window.location.href,
          referrer: document.referrer || '',
          at: new Date().toISOString(),
          ...getParams(window.location.search),
        }),
      );
    }
    return null;
  });
};

const deviceType = () => {
  const ua = navigator.userAgent || '';
  if (/iPad|Tablet/i.test(ua)) return 'tablet';
  if (/Mobi|Android|iPhone/i.test(ua)) return 'mobile';
  const w = window.innerWidth || 0;
  if (w && w < 768) return 'mobile';
  if (w && w < 1024) return 'tablet';
  return 'desktop';
};

const browserName = () => {
  const ua = navigator.userAgent || '';
  if (/Edg\//.test(ua)) return 'Edge';
  if (/OPR\//.test(ua)) return 'Opera';
  if (/Chrome\//.test(ua)) return 'Chrome';
  if (/Safari\//.test(ua)) return 'Safari';
  if (/Firefox\//.test(ua)) return 'Firefox';
  return 'Unknown';
};

const osName = () => {
  const ua = navigator.userAgent || '';
  if (/Windows/.test(ua)) return 'Windows';
  if (/Android/.test(ua)) return 'Android';
  if (/iPhone|iPad/.test(ua)) return 'iOS';
  if (/Mac OS/.test(ua)) return 'macOS';
  if (/Linux/.test(ua)) return 'Linux';
  return 'Unknown';
};

/**
 * Snapshot of everything we can learn about the visitor at submit time.
 * These are sent as hidden fields alongside the lead form.
 */
export const collectLeadMeta = () => {
  const landing = safeStorage(
    () => JSON.parse(window.sessionStorage.getItem(LANDING_KEY) || 'null'),
    null,
  ) || {};
  const current = getParams(window.location.search);
  const pick = (key) => landing[key] || current[key] || '';

  return {
    submitted_at: new Date().toISOString(),
    page_url: window.location.href,
    landing_url: landing.url || window.location.href,
    landing_at: landing.at || '',
    referrer: landing.referrer || document.referrer || 'direct',
    utm_source: pick('utm_source'),
    utm_medium: pick('utm_medium'),
    utm_campaign: pick('utm_campaign'),
    utm_term: pick('utm_term'),
    utm_content: pick('utm_content'),
    ref_code: pick('ref'),
    device: deviceType(),
    browser: browserName(),
    os: osName(),
    user_agent: navigator.userAgent || '',
    language: navigator.language || '',
    timezone: safeStorage(() => Intl.DateTimeFormat().resolvedOptions().timeZone, ''),
    screen: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
  };
};
