/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      colors: {
        cream: 'hsl(30 38% 92%)',
        darkcyan: 'hsl(158 36% 37%)',
        grayish: 'hsl(228 12% 48%)',
        darkblue: 'hsl(212 21% 14%)'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'serif'],
        'fraunces': ['Fraunces', 'sans-serif']
      },
    },
  },
  plugins: [],
}

