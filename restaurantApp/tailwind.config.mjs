/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				customDark: '#070200',
				customYellow: '#FFB605',
				customGrey: '#D9D9D9',
				customOrange:'#FB5C02',
			  },
			  fontFamily: {
				  jockey: ['JockeyOne', 'sans-serif'],
				},
				backgroundImage: {
				  'login': "url('/src/assets/login.jpg')",
				  'footer': "url('/src/assets/footer.webp')",
				}
		},
	},
	plugins: [],
}
