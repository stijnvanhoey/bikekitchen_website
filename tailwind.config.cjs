/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				darkgray: '#1e1e1e',
				semigray: '#373737',
				lightgray: '#9a9a9a',
				extralightgray: '#e4e4e4',
				white: '#f3f4f6',
				blue: '#427AA1',
				velofestival: "#412f79"
			},
			fontFamily: {
				atkinson: ['Atkinson']
			}
		}
	},
	plugins: []
};
