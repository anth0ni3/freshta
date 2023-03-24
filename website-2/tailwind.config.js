const { colors } = require('tailwindcss/colors')
const { fontFamily, screens } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		screens: {
			xs: '375px',
			...screens,
			// sm: '640px',
			// md: '768px',
			// lg: '1024px',
			// xl: '1280px',
			// '2xl': '1536px',
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans],
			},
			colors: {
				...colors,
			},
			containers: {
				xs: '375px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',

				// xs: "20rem",
				// sm: "24rem",
				// md: "28rem",
				// lg: "32rem",
				// xl: "36rem",
				// "2xl": "42rem",
				// "3xl": "48rem",
				// "4xl": "56rem",
				// "5xl": "64rem",
				// "6xl": "72rem",
				// "7xl": "80rem"
			},
		},
	},
	daisyui: {
		themes: [
			// {
			//   mytheme: {
			//     primary: '#efe98d',
			//     secondary: '#04747c',
			//     accent: '#e55b77',
			//     neutral: '#000',
			//     'base-100': '#EDEDEE',
			//     info: '#92CEE3',
			//     success: '#25A28F',
			//     warning: '#F6B36F',
			//     error: '#FB5157',
			//   },
			// 'light',
			// 'dark',
			// 'cupcake',
			// 'bumblebee',
			// 'emerald',
			// 'corporate',
			// 'synthwave',
			// 'retro',
			// 'cyberpunk',
			// 'valentine',
			// 'halloween',
			// 'garden',
			// 'forest',
			// 'aqua',
			// 'lofi',
			// 'pastel',
			// 'fantasy',
			// 'wireframe',
			// 'black',
			// 'luxury',
			// 'dracula',
			// 'cmyk',
			// 'autumn',
			// 'business',
			// 'acid',
			'lemonade',
			// 'night',
			// 'coffee',
			// 'winter',

			// },
		],
	},
	plugins: [
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar')({ nocompatible: true }),
		require('daisyui'),
	],
}
