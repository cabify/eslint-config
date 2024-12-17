const lodashPlugin = require('eslint-plugin-lodash');

module.exports = {
  name: 'lodash-cabify-eslint-config',
  plugins: { lodash: lodashPlugin },
  rules: {
    'lodash/import-scope': ['error', 'method'],
  },
};
