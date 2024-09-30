const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'neue': ['"Neue Montreal"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '40px': '40px',
        '150px': '150.38px',
      },
      lineHeight: {
        '48px': '48px',
        '180px': '180.45px',
      },
      colors: {
        'custom-gray': '#F4F7FA',
      },
      boxShadow: {
        '3xl': '0 35px 60px -5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
});