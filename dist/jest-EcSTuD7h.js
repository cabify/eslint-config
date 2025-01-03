import e from "eslint-plugin-jest";
const t = {
  name: "jest-cabify-eslint-config",
  ...e.configs["flat/recommended"],
  rules: {
    ...e.configs["flat/recommended"].rules
  }
};
export {
  t as default
};
