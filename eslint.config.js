// /* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
import defaultRules from './recommended.js';

const globalIgnores = {
  ignores: ['dist', 'node_modules/*', 'build', 'scripts', 'vite.config.js'],
};

export default [...defaultRules, globalIgnores];
