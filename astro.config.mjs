// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { gitLastmod } from './scripts/git-lastmod.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://semanticlakehouse.com',
  integrations: [
    sitemap({
      serialize(item) {
        const lastmod = gitLastmod(item.url);
        if (lastmod) item.lastmod = lastmod.toISOString();
        else delete item.lastmod;
        return item;
      }
    })
  ]
});