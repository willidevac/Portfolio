'use client';
import type { Locale } from '@/types/portfolio';
import { getTranslation } from '@/lib/localization';

import { useSyncExternalStore } from 'react';
import {
  getServerTheme,
  getTheme,
  parseTheme,
  setTheme,
  subscribeToTheme,
} from '@/lib/theme';

export function ThemeSelect({ locale = 'de' }: { readonly locale?: Locale }) {
  const copy = getTranslation(locale).theme;
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getTheme,
    getServerTheme,
  );

  return (
    <div className="theme-select">
      <label htmlFor="color-theme">{copy.label}</label>
      <select
        id="color-theme"
        value={theme}
        onChange={(event) => setTheme(parseTheme(event.target.value))}
      >
        <option value="system">{copy.system}</option>
        <option value="light">{copy.light}</option>
        <option value="dark">{copy.dark}</option>
      </select>
    </div>
  );
}
