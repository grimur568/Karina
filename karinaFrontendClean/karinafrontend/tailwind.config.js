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
        cYellow: '#EAC435',
        cBlack: '#2D2D2A',
        cOlive: '#383831'
        // Define additional colors as needed
      },
      boxShadow: {
        'white': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -2px rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: theme => ({
        'dark-gradient': `linear-gradient(to right, ${theme('colors.cBlack')}, ${theme('colors.cOlive')}, ${theme('colors.cBlack')}, ${theme('colors.cYellow')})`,
      }),
    },
  },
  plugins: [],
};
