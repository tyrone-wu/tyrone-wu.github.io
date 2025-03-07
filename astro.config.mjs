import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://tyrone-wu.pages.dev",
  trailingSlash: "never",
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    mdx(),
  ],
});
