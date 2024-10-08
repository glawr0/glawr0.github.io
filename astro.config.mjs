// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
  site: 'https://glawr0.github.io',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [
      remarkBreaks,
    ],
  },
});