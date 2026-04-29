/** @type {import('tailwindcss').Config} */
const extend = require('./tailwind.extend');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend,
  },
  plugins: [],
};

