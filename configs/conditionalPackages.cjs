/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
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

async function getConditionalPackages() {
  let isTSAvailable = false;
  let isJestAvailable = false;
  let tsConfigs = [];
  let jestConfigs = {};

  isTSAvailable = isPackageAvailable('typescript');
  isJestAvailable = isPackageAvailable('jest');

  if (isTSAvailable) {
    const tsModule = require('./ts.js');
    tsConfigs = tsModule.tsLintConfig;
  }

  if (isJestAvailable) {
    jestConfigs = await import('./jest.js');
  }

  return {
    jestConfigs,
    tsConfigs,
  };
}

module.exports = {
  getConditionalPackages,
};
