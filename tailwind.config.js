/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // colors
        'gray-p': '#A8AAB7',
        'dark-blue':'#0D222D',
        'light':'#FCFBFC',
      }
    },
  },
  plugins: [],
}