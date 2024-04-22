const base = require('./configs/base');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
  ...base,
  eslintConfigPrettier,
  {
    ignores: ['/node_modules', '*.d.ts'],
  },
];
