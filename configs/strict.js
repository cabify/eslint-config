module.exports = {
  name: 'strict-cabify-eslint-config',
  rules: {
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],
  },
};
