/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // eslint-disable-next-line quote-props
        '80': '80px',
      },
      fontWeight: {
        // eslint-disable-next-line quote-props
        'regular': '400',
      },
    },
  },
  plugins: [],
};
