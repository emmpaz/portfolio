/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        incon : ['Inconsolata', ...defaultTheme.fontFamily.sans]
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000' : '2000ms'
      }
    },
  },
  plugins: [],
}

