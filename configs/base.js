/* eslint-disable import/extensions */
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

import bestPractices from './best-practices.js';
import { getConditionalPackages } from './conditionalPackages.js';
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

const { jestConfigs, tsConfigs } = await getConditionalPackages();

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
  jestConfigs,
  ...tsConfigs,
  eslintConfigPrettier,
];

export default rules;
