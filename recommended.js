/* eslint-disable import/extensions */
import defaultRules from './configs/base.js';

const globalIgnores = {
  ignores: ['dist', 'node_modules/*', 'build', 'scripts', 'vite.config.js'],
};

export default [...defaultRules, globalIgnores];
