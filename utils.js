module.exports = {
  isPackageAvailable(packageName) {
    try {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return !!require(packageName);
    } catch (e) {
      return false;
    }
  },
};
