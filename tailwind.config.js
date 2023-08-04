/** @type {import('tailwindcss').Config} */
module.exports = {
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

      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
