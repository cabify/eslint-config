const globals = require('globals');
const { isPackageAvailable } = require('./utils.cjs');
const bestPractices = require('./best-practices.cjs');
const errors = require('./errors.cjs');
const es6 = require('./es6.cjs');
const formats = require('./formats.cjs');
const imports = require('./imports.cjs');
const jest = require('./jest.cjs');
const lodash = require('./lodash.cjs');
const node = require('./node.cjs');
const postcss = require('./postcss.cjs');
const promises = require('./promises.cjs');
const react = require('./react.cjs');
const reactA11y = require('./react-a11y.cjs');
const storybook = require('./storybook.cjs');
const strict = require('./strict.cjs');
const style = require('./style.cjs');
const variables = require('./variables.cjs');

const isTSAvailable = isPackageAvailable('typescript');
let tsConfigs = [];
if (isTSAvailable) {
  // eslint-disable-next-line global-require
  const { tsLintConfig } = require('./ts.cjs');
  tsConfigs = tsLintConfig;
}
const isJestAvailable = isPackageAvailable('jest');

const configs = [
  bestPractices,
  errors,
  es6,
  ...imports,
  node,
  promises,
  strict,
  style,
  variables,
  react,
  lodash,
  reactA11y,
  formats,
  storybook,
  postcss,
  isJestAvailable && jest,
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
];
