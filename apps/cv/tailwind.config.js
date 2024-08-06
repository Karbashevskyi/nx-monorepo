const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  presets: [require('../../tailwind.preset.js')],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    'node_modules/preline/dist/*.js',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ]
};
