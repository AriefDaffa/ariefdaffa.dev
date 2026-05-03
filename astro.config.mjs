import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ariefdaffa.dev',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
