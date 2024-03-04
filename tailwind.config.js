/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'blue': '#7695d1',
        'yellow': '#fff08d',
        'lightGray': '#7a7a7a',
        'darkGray': '#303030',
      },
      fontFamily: {
        'paragraph': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [require('tailwindcss-animated')],
}

