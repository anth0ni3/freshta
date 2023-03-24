const { colors } = require('tailwindcss/colors')
const { fontFamily, screens } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './ui/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1440px',
      },
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
        primary: 'var(--primary)',
        brand: {
          50: '#f3f3f3',
          100: '#e7e7e7',
          200: '#c4c4c4',
          300: '#a0a0a0',
          400: '#585858',
          500: '#111111',
          600: '#0f0f0f',
          700: '#0d0d0d',
          800: '#0a0a0a',
          900: '#080808',
          DEFAULT: '#111111',
        },
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
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}
