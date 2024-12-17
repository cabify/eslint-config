module.exports = {
  isPackageAvailable(packageName) {
    try {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return !!require(packageName);
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return false;
    }
  },
};
