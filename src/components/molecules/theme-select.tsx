'use client';

import { useSyncExternalStore } from 'react';
import {
  getServerTheme,
  getTheme,
  parseTheme,
  setTheme,
  subscribeToTheme,
} from '@/lib/theme';

export function ThemeSelect() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getTheme,
    getServerTheme,
  );

  return (
    <div className="theme-select">
      <label htmlFor="color-theme">Farbschema</label>
      <select
        id="color-theme"
        value={theme}
        onChange={(event) => setTheme(parseTheme(event.target.value))}
      >
        <option value="system">System</option>
        <option value="light">Hell</option>
        <option value="dark">Dunkel</option>
      </select>
    </div>
  );
}
