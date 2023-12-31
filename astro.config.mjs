import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkHeadingId } from "remark-custom-heading-id";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://bhuynh.dev",
	integrations: [mdx(), sitemap(), tailwind({ applyBaseStyles: false })],
	scopedStyleStrategy: "class",
	markdown: {
		remarkPlugins: [remarkHeadingId],
	},
});
