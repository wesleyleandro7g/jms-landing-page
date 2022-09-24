/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#CD0707',
      'primary-300': '#DC002D',
      'secondary': '#EDEDED',
      'gray-600': '#797979',
      'gray-800': '#333333',
      'black-800': '#1A1A1A',
      'black-900': '#000000',
      'white-200': '#F1EEF5',
      ...colors
    },
    extend: {
      keyframes: {
        bg: {
          '0%': {
            'box-shadow': '0 0 0 0 rgba(255, 82, 82, 0.7)'
          },
          '70%': {
            'box-shadow': '0 0 0 10px rgba(255, 82, 82, 0)'
          },
          '100%': {
            'box-shadow': '0 0 0 0 rgba(255, 82, 82, 0)'
          }
        }
      },
      animation: {
        'bg-pulse': 'bg 2s linear infinite'
      }
    }
  },
  plugins: [],
}
