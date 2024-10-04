const jest = require('eslint-plugin-jest');

module.exports = {
  name: 'jest-cabify-eslint-config',
  ...jest.configs['flat/recommended'],
  rules: {
    ...jest.configs['flat/recommended'].rules,
  },
};
