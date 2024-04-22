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

const configs = [
  bestPractices,
  errors,
  es6,
  // imports, WE can't use this config since this plugin does not support es-lint v9 https://github.com/import-js/eslint-plugin-import/issues/2948
  node,
  promises,
  strict,
  style,
  variables,
  //react, WE can't use this config since this plugin does not support es-lint v9 https://github.com/jsx-eslint/eslint-plugin-react/issues/3699
  lodash,
  reactA11y,
  isJestAvailable && jest,
].filter(Boolean);

const overrides = [
  isTSAvailable && {
    files: ['**/*.ts', '**/*.tsx'],
    excludedFiles: '*.d.ts',
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
    languageOptions: {
      globals: {
        browser: true,
        node: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      strict: 'error',
    },
  },
  ...overrides,
];
