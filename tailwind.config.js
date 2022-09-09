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
        'theme-primary': '#EEFDFE',
        'theme-secondary': '#F0FEFF',
        'theme-active': '#50ABD0',
        'theme-inactive': '#57BEE8',
        'theme-shadow': '#B2D8E0',
      },
    },
  },
  experimental: { optimizeUniversalDefaults: true },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
  important: true,
};
