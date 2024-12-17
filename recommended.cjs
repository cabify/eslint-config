const eslintConfigPrettier = require('eslint-config-prettier');

const base = require('./configs/commonjs/base.cjs');

module.exports = [...base, eslintConfigPrettier];
