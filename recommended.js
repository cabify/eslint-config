const eslintConfigPrettier = require('eslint-config-prettier');

// eslint-disable-next-line import/extensions
const base = require('./configs/base.js');

module.exports = [...base, eslintConfigPrettier];
