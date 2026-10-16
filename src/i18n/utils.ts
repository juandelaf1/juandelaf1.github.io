import type { Locale } from './ui';

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALES: Locale[] = ['en', 'es'];

export function getLocaleFromUrl(url: URL): Locale {
  const path = url.pathname;
  if (path.startsWith('/es/')) return 'es';
  if (path === '/es') return 'es';
  return DEFAULT_LOCALE;
}

export function localizePath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  if (path === '/') return '/es';
  return `/es${path}`;
}

export function getAlternateLocale(current: Locale): Locale {
  return current === 'en' ? 'es' : 'en';
}

export function getAlternateUrl(currentPath: string, currentLocale: Locale): string {
  const alt = getAlternateLocale(currentLocale);
  if (currentLocale === 'en') {
    // Switching from EN to ES
    if (currentPath === '/') return '/es';
    return `/es${currentPath}`;
  }
  // Switching from ES to EN
  if (currentPath === '/es') return '/';
  return currentPath.replace(/^\/es/, '') || '/';
}
