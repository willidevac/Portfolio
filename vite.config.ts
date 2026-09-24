import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

// The portfolio exports static HTML. It needs no Worker, database or login.
export default defineConfig({
  plugins: [vinext()],
  css: {
    postcss: { plugins: [tailwindcss()] },
  },
});
