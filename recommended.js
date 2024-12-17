import eslintConfigPrettier from 'eslint-config-prettier';

// eslint-disable-next-line import/extensions
import base from './configs/es6/base.js';

export default [...base, eslintConfigPrettier];
