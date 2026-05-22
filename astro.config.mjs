// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://majs1992j29.github.io',
  base: '/gym-macara-website',
  vite: {
    plugins: [tailwindcss()]
  }
});