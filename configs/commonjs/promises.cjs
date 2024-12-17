module.exports = {
  name: 'promises-cabify-eslint-config',
  rules: {
    'no-floating-promises': 'off',

    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    // TODO: enable, semver-major
    'no-async-promise-executor': 'off',

    // disallow redundant `return await`
    'no-return-await': 'error',

    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',
  },
};
