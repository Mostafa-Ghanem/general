// src/i18n/utils.ts — language detection + translation helpers + URL building.

import { ui, defaultLang, languages, routes, type Lang, type UIKey } from './ui';

// Detect language from URL pathname.
// Routes under /ar/ → 'ar'. Everything else → defaultLang ('en').
export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] && segments[0] in languages) {
    return segments[0] as Lang;
  }
  return defaultLang;
}

// Hook-style translation accessor.
// usage: const t = useTranslations(lang); t('nav.home');
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

// Get the route key currently being viewed (home/about/services/projects/contact)
export function getRouteFromUrl(url: URL): keyof typeof routes['en'] | null {
  const lang = getLangFromUrl(url);
  const segments = url.pathname.split('/').filter(Boolean);
  // strip lang prefix
  const path = lang === defaultLang ? segments : segments.slice(1);
  const first = path[0] ?? '';
  if (first === '') return 'home';
  const localeRoutes = routes[lang];
  for (const key of Object.keys(localeRoutes) as Array<keyof typeof localeRoutes>) {
    if (localeRoutes[key] === first) return key;
  }
  return null;
}

// Build a URL for a logical route in a given language.
// e.g. getLocalizedPath('about', 'ar') → '/ar/من-نحن/'
export function getLocalizedPath(
  routeKey: keyof typeof routes['en'],
  lang: Lang,
  subpath?: string
): string {
  const segment = routes[lang][routeKey];
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const sub = subpath ? `/${subpath}` : '';
  const path = segment === '' ? `${prefix}/${sub.replace(/^\//, '')}` : `${prefix}/${segment}${sub}`;
  // ensure trailing slash
  return (path.endsWith('/') ? path : path + '/').replace(/\/\/+/g, '/') || '/';
}

// Switch language: return the equivalent path for the other locale.
export function getAlternatePath(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  if (currentLang === targetLang) return url.pathname;
  const routeKey = getRouteFromUrl(url);
  if (!routeKey) {
    return targetLang === defaultLang ? '/' : `/${targetLang}/`;
  }
  // Handle dynamic [slug] routes for services
  const segments = url.pathname.split('/').filter(Boolean);
  const slugSegments = currentLang === defaultLang ? segments.slice(1) : segments.slice(2);
  const slug = slugSegments[0];
  return getLocalizedPath(routeKey, targetLang, slug);
}

// Build the alternates list for <link rel="alternate" hreflang>
export function buildHrefLangAlternates(url: URL, siteOrigin: string) {
  const langs: Lang[] = ['en', 'ar'];
  return langs.map(l => ({
    lang: l,
    href: siteOrigin.replace(/\/$/, '') + getAlternatePath(url, l),
  }));
}

// Locale-aware whatsapp number (same)
export const WHATSAPP_NUMBER = '+201016265762';
export const WHATSAPP_URL = 'https://wa.me/201016265762';
export const PHONE_TEL = 'tel:+201016265762';
