/* export default async function isPackageAvailable(packageName) {
  try {
    // Dynamically import the package
    await import(packageName);
    return true;
  } catch (error) {
    return false;
  }
}
*/

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
