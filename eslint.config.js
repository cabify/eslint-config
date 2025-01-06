/* eslint-disable import/extensions */
import defaultRules from './dist/eslint.config.js';

const globalIgnores = {
  ignores: ['dist', 'node_modules/*', 'build', 'scripts', 'vite.config.js'],
};

export default [...defaultRules, globalIgnores];

// const defaultRules = require('./dist/eslint.config.cjs');

// console.log(defaultRules);
// // const globalIgnores = {
// //   ignores: ['dist', 'node_modules/*', 'build', 'scripts', 'vite.config.js'],
// // };

// module.exports = [...defaultRules];
