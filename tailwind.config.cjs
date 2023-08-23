/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			margin: {
				"space-x": "var(--space-x)",
			},
			padding: {
				"space-x": "var(--space-x)",
			},
			transitionDuration: {
				350: "350ms",
				400: "400ms",
			},
		},
	},
	plugins: [],
};
