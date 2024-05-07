const lodashPlugin = require('eslint-plugin-lodash');

module.exports = {
  plugins: { lodash: lodashPlugin },

  rules: {
    'lodash/import-scope': ['error', 'method'],
  },
};
