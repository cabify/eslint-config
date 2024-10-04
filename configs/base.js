const globals = require('globals');

const { isPackageAvailable } = require('../utils');

const isTSAvailable = isPackageAvailable('typescript');
const isJestAvailable = isPackageAvailable('jest');

const storybook = require('./storybook');
const ts = require('./ts');
const postcss = require('./postcss');

const bestPractices = require('./best-practices');
const errors = require('./errors');
const es6 = require('./es6');
const imports = require('./imports');
const node = require('./node');
const promises = require('./promises');
const strict = require('./strict');
const style = require('./style');
const variables = require('./variables');
const react = require('./react');
const lodash = require('./lodash');
const reactA11y = require('./react-a11y');
const jest = require('./jest');
const formats = require('./formats');

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
  isTSAvailable && {
    files: ['**/*.ts', '**/*.tsx'],
    ...ts,
  },
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
  ...overrides,
];
