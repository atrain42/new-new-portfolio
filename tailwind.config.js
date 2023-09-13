/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7F5AF0',
        background: '#212121',
        paragraph: '#FCF7E5',
        offwhite: '#fefcf7',
      },

      width: {
        100: '32rem',
        200: '26rem',
        300: '22rem',
        400: '44rem',
        500: '50rem',
        form: '52rem',
        0.75: '3px',
        290: '290px',
      },

      height: {
        100: '32rem',
        200: '26rem',
        280: '28rem',
        300: '22rem',
        400: '44rem',
        500: '55rem',
      },

      boxShadow: {
        btn: '0px 0px 25px -11px rgba(127, 90, 240, 0.5)',
      },

      borderRadius: {
        '4xl': '2rem',
      },

      screens: {
        mv: '0px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
