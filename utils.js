/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/prefer-default-export
export async function isPackageAvailable(packageName) {
  try {
    // Dynamically import the package
    await import(packageName);
    return true;
  } catch (_) {
    return false;
  }
}
