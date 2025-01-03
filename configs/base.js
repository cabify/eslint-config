/* eslint-disable import/extensions */
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

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
import { isPackageAvailable } from './utils.js';
import variables from './variables.js';

let isTSAvailable = false;
let isJestAvailable = false;
let tsConfigs = [];

(async () => {
  isTSAvailable = await isPackageAvailable('typescript');
  isJestAvailable = await isPackageAvailable('jest');
  if (isTSAvailable) {
    const { tsLintConfig } = await import('./ts.js');
    tsConfigs = tsLintConfig;
  }
})();

const configs = [
  bestPractices,
  errors,
  es6,
  ...imports,
  postcss,
  node,
  promises,
  strict,
  style,
  variables,
  react,
  reactA11y,
  formats,
  storybook,
  lodash,

  isJestAvailable && jest,
].filter(Boolean);
const rules = [
  ...configs,
  {},
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
  eslintConfigPrettier,
];

export default rules;
