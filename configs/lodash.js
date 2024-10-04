import lodashPlugin from 'eslint-plugin-lodash';

export default {
  name: 'lodash-cabify-eslint-config',
  plugins: { lodash: lodashPlugin },
  rules: {
    'lodash/import-scope': ['error', 'method'],
  },
};
