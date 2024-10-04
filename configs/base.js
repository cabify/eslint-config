/* eslint-disable import/extensions */
import globals from 'globals';

import { isPackageAvailable } from '../utils.js';
import bestPractices from './best-practices.js';
import errors from './errors.js';
import es6 from './es6.js';
import formats from './formats.js';
import imports from './imports.js';
import jest from './jest.js';
import lodash from './lodash.js';
import node from './node.js';
import postcss from './postcss.js';
import promises from './promises.js';
import react from './react.js';
import reactA11y from './react-a11y.js';
import storybook from './storybook.js';
import strict from './strict.js';
import style from './style.js';
import ts from './ts.js';
import variables from './variables.js';

const isTSAvailable = await isPackageAvailable('typescript');
const isJestAvailable = await isPackageAvailable('jest');

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

export default [
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
