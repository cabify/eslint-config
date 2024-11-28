// eslint-disable-next-line import/prefer-default-export
export async function isPackageAvailable(packageName) {
  try {
    // Dynamically import the package
    await import(packageName);
    console.log(`Package ${packageName} is available`);
    return true;
  } catch (error) {
    console.log(error);
    console.log(`Package ${packageName} is not available`);
    return false;
  }
}
