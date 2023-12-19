/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem'
			},
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)'
			}
		}
	},
	plugins: []
};
