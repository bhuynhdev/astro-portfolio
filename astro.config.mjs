import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkHeadingId } from "remark-custom-heading-id";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://bhuynh.dev",
  integrations: [mdx(), sitemap()],
  scopedStyleStrategy: "class",

  markdown: {
      remarkPlugins: [remarkHeadingId],
	},

  vite: {
    plugins: [tailwindcss()],
  },
});