/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'razzmatazz-pink': '#E91E63',
        'davys-gray': '#555555',
        'blaze-orange': '#fc6a03',
        'ogre-orange': '#ff523b',
        'royal-brown': '#563434'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    },
  },
  plugins: [],
}


