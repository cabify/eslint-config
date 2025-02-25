import jest from 'eslint-plugin-jest';

const jestConf = {
  name: 'jest-cabify-eslint-config',
  ...jest.configs['flat/recommended'],
  rules: {
    ...jest.configs['flat/recommended'].rules,
  },
};

// eslint-disable-next-line import/prefer-default-export
export { jestConf };
