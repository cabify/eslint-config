module.exports = {
  isPackageAvailable(packageName) {
    try {
      return !!require(packageName);
    } catch (e) {
      return false;
    }
  },
};
