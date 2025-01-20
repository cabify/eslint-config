import e from "eslint-plugin-jest";
const n = {
  name: "jest-cabify-eslint-config",
  ...e.configs["flat/recommended"],
  rules: {
    ...e.configs["flat/recommended"].rules
  }
};
export {
  n as jestConf
};
