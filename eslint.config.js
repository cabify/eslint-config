// eslint-disable-next-line import/extensions
import recommended from './recommended.js';

const globalIgnores = {
  ignores: ['dist', 'node_modules/*', 'build', 'scripts'],
};

export default [...recommended, globalIgnores];
