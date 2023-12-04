/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      'bluecolor':'#0d6efd',
      'white':'#FFFFFF',
      'black':'#000000',
      'graybg':'#e9ecef',
      'redcolor':'#ee626b',
      'bluebg':'#ADD8E6',
    },
    screens: {
      'xs': '393px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}

