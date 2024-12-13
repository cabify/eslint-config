// eslint-disable-next-line import/prefer-default-export
export async function isPackageAvailable(packageName) {
  try {
    // Dynamically import the package
    await import(packageName);
    return true;
    // eslint-disable-next-line no-unused-vars
  } catch (_) {
    return false;
  }
}
