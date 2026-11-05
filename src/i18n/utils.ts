import type { Locale } from './ui';

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALES: Locale[] = ['en', 'es'];

export function getLocaleFromUrl(url: URL): Locale {
  const path = url.pathname;
  if (path === '/es' || path.startsWith('/es/')) return 'es';
  return DEFAULT_LOCALE;
}

export function stripLocalePrefix(path: string): string {
  return path.replace(/^\/es/, '') || '/';
}

export function addLocalePrefix(path: string): string {
  if (path === '/') return '/es';
  return `/es${path}`;
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
    return currentPath === '/' ? '/es' : `/es${currentPath}`;
  }
  return stripLocalePrefix(currentPath);
}

export function getAlternateHref(currentPath: string, currentLocale: Locale): string {
  // Siempre devuelve la ruta en el otro idioma, sin duplicar prefijos
  if (currentLocale === 'es') {
    return currentPath === '/es' ? '/' : stripLocalePrefix(currentPath);
  }
  return currentPath === '/' ? '/es' : addLocalePrefix(currentPath);
}
