import { defineConfig } from 'astro/config';
export default defineConfig({
  // CI can supply the configured Pages origin; local routes remain root-relative.
  site: process.env.SITE_URL || 'https://www.ellamwilliams.co.uk',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
