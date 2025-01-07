/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors here
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'ul': { 
          listStyleType: 'disc',  // Default bullet style
          paddingLeft: '1.25rem', // Padding to align the bullets
        },
      });
    },
  ],
}
