/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      virgil: ['Virgil', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        'fr-mono': ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      colors: {
        ui: {
          dark: '#000',
          white: '#fff',
          blue: '#1864ab',
          'blue-hover': '#0D121F',
          'gray-hover': 'rgba(24, 100, 171, .5)',
          'gray-before': 'rgba(24, 100, 171, .19)',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
