/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			red: '#FF0000',
			violet: '#7b2eda',
			white: '#ffffff',
			'smoke-white': 'hsl(0, 0%, 98%)',
			'light-erie': 'hsl(240, 2%, 13%)',
			erie: 'hsl(240, 2%, 12%)',
			'dark-erie': 'hsl(240, 2%, 10%)',
			onyx: 'hsl(240, 1%, 17%)',
			jet: 'hsl(0, 0%, 22%)',
			'smoke-black': 'hsl(0, 0%, 7%)',
			balck: '#000000'
		}
	},
	plugins: []
};
