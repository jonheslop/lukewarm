// @ts-check
import { defineConfig, fontProviders } from "astro/config"; import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tinaDirective from "./astro-tina-directive/register";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://lukewarm.albion-dev.workers.dev",
  integrations: [mdx(), sitemap(), react(), tinaDirective()],
  adapter: cloudflare(),
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Anton",
    cssVariable: "--font-anton",
  },
  {
    provider: fontProviders.fontsource(),
    name: "Mona Sans",
    cssVariable: "--font-mona",
    weights: [400, 700],
  }]
});
