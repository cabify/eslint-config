const { isPackageAvailable } = require('../utils');

const isTSAvailable = isPackageAvailable('typescript');
const isJestAvailable = isPackageAvailable('jest');

const configs = [
  './best-practices',
  './errors',
  './es6',
  './imports',
  './node',
  './promises',
  './strict',
  './style',
  './variables',
  './react',
  './lodash',
  './react-a11y',
  isJestAvailable && './jest',
].filter(Boolean);

const overrides = [
  isTSAvailable && {
    files: ['**/*.ts', '**/*.tsx'],
    excludedFiles: '*.d.ts',
    extends: ['./ts'],
  },
  {
    files: ['*.story.tsx', '*.stories.tsx'],
    extends: ['./storybook'],
  },
  {
    files: ['postcss.config.js'],
    extends: ['./postcss'],
  },
].filter(Boolean);

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: configs,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
  overrides,
};
