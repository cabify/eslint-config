/* eslint-disable import/extensions */
const globals = require('globals');

const { isPackageAvailable } = require('../utils');
const bestPractices = require('./best-practices.js');
const errors = require('./errors.js');
const es6 = require('./es6.js');
const formats = require('./formats.js');
const imports = require('./imports.js');
const jest = require('./jest.js');
const lodash = require('./lodash.js');
const node = require('./node.js');
const postcss = require('./postcss.js');
const promises = require('./promises.js');
const react = require('./react.js');
const reactA11y = require('./react-a11y.js');
const storybook = require('./storybook.js');
const strict = require('./strict.js');
const style = require('./style.js');
const variables = require('./variables.js');

const isTSAvailable = isPackageAvailable('typescript');

console.log('isTSAvailable', isTSAvailable);
const tsCustomConfigs = require('./ts.js');
let tsConfigs = [];
if (isTSAvailable) {
  tsConfigs = tsCustomConfigs;
}
const isJestAvailable = isPackageAvailable('jest');

const configs = [
  bestPractices,
  errors,
  es6,
  imports,
  node,
  promises,
  strict,
  style,
  variables,
  react,
  lodash,
  reactA11y,
  formats,
  isJestAvailable && jest,
].filter(Boolean);

const overrides = [
  {
    files: ['*.story.tsx', '*.stories.tsx'],
    ...storybook,
  },
  {
    files: ['postcss.config.js'],
    ...postcss,
  },
].filter(Boolean);

module.exports = [
  ...configs,
  {
    name: 'base-cabify-eslint-config',
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      strict: 'error',
    },
  },
  ...tsConfigs,
  ...overrides,
];
