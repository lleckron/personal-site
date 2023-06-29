/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F9F9F9',
        'dark-gray': '#191919',
        'gray': '#343434',
        'menu-gray': '#4F4F4F',
        'hover-gray': '#676767'
      },
      height: {
        'full-minus-nav': 'calc(100% - 48px)'
      },
      keyframes: {
        cloudy_effect: {
          '0%': {
            opacity: 0,
            transform: 'scale(1)',
          },
          '25%, 75%': {
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2)',
            opacity: 0,
          },
        },
      },
      animation: {
        'cloudy-one': 'cloudy_effect 5s ease-in infinite',
        'cloudy-two': 'cloudy_effect 10s ease-in infinite',
        'cloudy-three': 'cloudy_effect 15s ease-in infinite',
        'cloudy-four': 'cloudy_effect 20s ease-in infinite',
      },
    },
  },
  plugins: [],
}