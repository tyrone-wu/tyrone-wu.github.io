import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://tyrone-wu.github.io",
  integrations: [react()],
});