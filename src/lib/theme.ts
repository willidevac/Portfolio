export type ThemePreference = 'system' | 'light' | 'dark';

const storageKey = 'portfolio-theme';
const changeEvent = 'portfolio-theme-change';

export function parseTheme(value: unknown): ThemePreference {
  return value === 'light' || value === 'dark' ? value : 'system';
}

export function getTheme(): ThemePreference {
  return parseTheme(document.documentElement.dataset.theme);
}

export function getServerTheme(): ThemePreference {
  return 'system';
}

export function setTheme(preference: ThemePreference) {
  document.documentElement.dataset.theme = preference;
  try {
    localStorage.setItem(storageKey, preference);
  } catch {
    // The selected theme still works for this page if storage is unavailable.
  }
  window.dispatchEvent(new Event(changeEvent));
}

export function subscribeToTheme(onChange: () => void) {
  const syncStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) {
      document.documentElement.dataset.theme = parseTheme(event.newValue);
      onChange();
    }
  };
  window.addEventListener(changeEvent, onChange);
  window.addEventListener('storage', syncStorage);
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener('storage', syncStorage);
  };
}

// Run before the first paint. CSS handles the system preference without JS.
export const themeInitializationScript = `
  try {
    const theme = localStorage.getItem('${storageKey}');
    document.documentElement.dataset.theme =
      theme === 'light' || theme === 'dark' ? theme : 'system';
  } catch {
    document.documentElement.dataset.theme = 'system';
  }
`;
