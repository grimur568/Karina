/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#25274D', // Custom primary color
        secondary: '#464866', // Custom secondary color
        cWhite: '#FFFFFF', // Assuming you want custom white
        cLightBlue: '#2E9CCA',
        cDarkBlue: '#29648A',
        // Define additional colors as needed
      },
    },
  },
  plugins: [],
};
