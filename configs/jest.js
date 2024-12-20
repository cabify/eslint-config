import jest from 'eslint-plugin-jest';

export default {
  name: 'jest-cabify-eslint-config',
  ...jest.configs['flat/recommended'],
  rules: {
    ...jest.configs['flat/recommended'].rules,
  },
};
