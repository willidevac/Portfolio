import type { Locale, PageKind } from '@/types/portfolio';
import { de } from '@/data/translations/de';
import { en } from '@/data/translations/en';

export function getTranslation(locale: Locale) {
  return locale === 'en' ? en : de;
}

export function getPagePath(locale: Locale, page: PageKind = 'home') {
  if (page === 'accessibility')
    return locale === 'en' ? '/en/accessibility/' : '/barrierefreiheit/';
  return locale === 'en' ? '/en/' : '/';
}

export function getPageMetadata(locale: Locale, page: PageKind = 'home') {
  const copy = getTranslation(locale);
  return {
    title:
      page === 'home'
        ? copy.metadata.title
        : `${copy.accessibility.title} | Jayanath Willi Kasberg`,
    description:
      page === 'home'
        ? copy.metadata.description
        : copy.accessibility.description,
    alternates: {
      languages: { de: getPagePath('de', page), en: getPagePath('en', page) },
    },
    robots: { index: true, follow: true },
    icons: { icon: '/favicon.svg' },
  };
}
