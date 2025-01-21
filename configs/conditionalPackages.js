/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
async function isPackageAvailable(packageName) {
  try {
    // Dynamically import the package
    await import(packageName);
    return true;
  } catch (_) {
    return false;
  }
}

export const getConditionalPackages = async () => {
  let isTSAvailable = false;
  let isJestAvailable = false;
  let tsConfigs = [];
  let jestConfigs = {};

  isTSAvailable = await isPackageAvailable('typescript');
  isJestAvailable = await isPackageAvailable('jest');
  if (isTSAvailable) {
    const { tsLintConfig } = await import('./ts.js');
    tsConfigs = tsLintConfig;
  }

  if (isJestAvailable) {
    const { jestConf } = await import('./jest.js');
    jestConfigs = jestConf;
  }

  return {
    jestConfigs,
    tsConfigs,
  };
};
