import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import lit from '@astrojs/lit';

// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  adapter: netlify()
});
