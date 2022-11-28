/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: [
		'./src/**/*.tsx',
		'./src/**/*.ts',
		'./src/**/*.jsx',
		'./src/**/*.js',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				rubik: ['Rubik', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				'm-plus-rounded-1c':['M PLUS Rounded 1c', 'sans-serif']
			},
		},
	},
	plugins: [],
};
