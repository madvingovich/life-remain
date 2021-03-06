const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const purgecssConfig = {
  content: ['./src/index.html', './src/**/*.svelte', './src/**/*.js'],
  whitelist: ['flatpickr'],
  whitelistPatterns: [/svelte-/, /flatpickr/, /span/],
  whitelistPatternsChildren: [/flatpickr/],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
};

const plugins =
  process.env.NODE_ENV === 'production'
    ? [
        tailwindcss('./tailwind.config.js'),
        autoprefixer(),
        purgecss(purgecssConfig)
      ]
    : [tailwindcss('./tailwind.config.js')];

module.exports = { plugins };
