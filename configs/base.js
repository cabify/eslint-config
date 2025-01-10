/* eslint-disable prefer-destructuring */
/* eslint-disable global-require */

/* eslint-disable import/extensions */
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

import bestPractices from './best-practices.js';
import errors from './errors.js';
import es6 from './es6.js';
import formats from './formats.js';
import imports from './imports.js';
import lodash from './lodash.js';
import node from './node.js';
import postcss from './postcss.js';
import promises from './promises.js';
import react from './react.js';
import reactA11y from './react-a11y.js';
import storybook from './storybook.js';
import strict from './strict.js';
import style from './style.js';
import variables from './variables.js';

// Placeholder for conditional import (will be replaced in build)
let jestConfigs = {};
let tsConfigs = [];

// ESM placeholder (dynamic replacement during build)
if (process.env.BUILD_FORMAT === 'es') {
  const { getConditionalPackages } = await import('./conditionalPackages.js');
  const packages = await getConditionalPackages();
  jestConfigs = packages.jestConfigs;
  tsConfigs = packages.tsConfigs;
}

// CJS placeholder (dynamic replacement during build)
if (process.env.BUILD_FORMAT === 'cjs') {
  const { getConditionalPackages } = require('./conditionalPackagesLegacy.cjs');
  const packages = getConditionalPackages();
  jestConfigs = packages.jestConfigs;
  tsConfigs = packages.tsConfigs;
}

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
  { ...jestConfigs },
  ...tsConfigs,
  eslintConfigPrettier,
];

export default rules;
