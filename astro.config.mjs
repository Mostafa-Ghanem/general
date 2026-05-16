import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://generalea.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-EG', ar: 'ar-EG' },
      },
    }),
    mdx(),
  ],
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'static',
  image: {
    domains: [],
  },
  build: {
    format: 'directory', // trailing-slash URLs to match existing SEO
  },
  trailingSlash: 'always',
});
