import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://scintillating-sundae-b8c0fc.netlify.app/',
  integrations: [preact()]
});