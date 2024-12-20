import eslintConfigPrettier from 'eslint-config-prettier';

// eslint-disable-next-line import/extensions
import base from './configs/base.js';

export default [...base, eslintConfigPrettier];
