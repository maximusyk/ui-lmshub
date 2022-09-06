const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        ...colors,
        'theme-primary': '#eeeefe',
        'theme-secondary': '#e7e9fb',
        'theme-sidebar-from': '#dfdffa',
        'theme-sidebar-to': '#c9ccf1',
        'theme-active': '#4c4bd2',
        'theme-inactive': '#00000c',
        'theme-shadow': '#b8b2e0',
      },
    },
  },
  experimental: { optimizeUniversalDefaults: true },
  plugins: [require('flowbite/plugin'), require('daisyui')],
};
