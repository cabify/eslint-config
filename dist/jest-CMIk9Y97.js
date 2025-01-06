import e from "eslint-plugin-jest";
const r = {
  ...e.configs["flat/recommended"],
  rules: {
    ...e.configs["flat/recommended"].rules
  }
};
export {
  r as jestConf
};
