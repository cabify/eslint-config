/* eslint-disable no-unused-vars */

/* eslint-disable global-require */
function isPackageAvailable(packageName) {
  try {
    // Dynamically require the package
    require.resolve(packageName);
    return true;
  } catch (_) {
    return false;
  }
}

const getConditionalPackages = () => {
  let isTSAvailable = false;
  let isJestAvailable = false;
  let tsConfigs = [];
  let jestConfigs = {};

  isTSAvailable = isPackageAvailable('typescript');
  isJestAvailable = isPackageAvailable('jest');

  if (isTSAvailable) {
    // this file will be included in the build process
    // eslint-disable-next-line import/no-unresolved
    const tsModule = require('./ts.cjs');
    tsConfigs = tsModule.tsLintConfig;
  }

  if (isJestAvailable) {
    // this file will be included in the build process
    // eslint-disable-next-line import/no-unresolved
    const jestModule = require('./jest.cjs');
    jestConfigs = jestModule.jestConf;
  }

  return {
    jestConfigs,
    tsConfigs,
  };
};

module.exports = {
  getConditionalPackages,
};
