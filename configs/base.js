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
import variables from './variables.js';

async function checkIsTSAvailable() {
  try {
    // Dynamically import the package
    await import('typescript');
    console.log(`Package typescript is available`);
    return true;
  } catch (error) {
    console.log(error);
    console.log(`Package typescript is not available`);
    return false;
  }
}

async function checkJestTSAvailable() {
  try {
    // Dynamically import the package
    await import('jest');
    console.log(`Package jest is available`);
    return true;
  } catch (error) {
    console.log(error);
    console.log(`Package jest is not available`);
    return false;
  }
}

async function checkNextJSAvailable() {
  try {
    // Dynamically import the package
    await import('next');
    console.log(`Package next is available`);
    return true;
  } catch (error) {
    console.log(error);
    console.log(`Package next is not available`);
    return false;
  }
}

const isTSAvailable = true;
let tsConfigs = [];
if (isTSAvailable) {
  tsConfigs = await import('./ts.js');
}
const isJestAvailable = await checkJestTSAvailable();
checkNextJSAvailable();

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

console.log({ tsConfigs });

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
  ...tsConfigs,
  ...overrides,
];
