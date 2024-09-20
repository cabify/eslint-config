const jest = require('eslint-plugin-jest');

module.exports = {
  // languageOptions: {
  //   globals: {
  //     'jest/globals': true,
  //   },
  // },
  rules: {
    ...jest.configs['flat/recommended'],
    ...jest.configs['flat/styles'],
  },
};
