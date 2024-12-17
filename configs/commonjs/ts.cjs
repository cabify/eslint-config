/* eslint-disable no-param-reassign */
const path = require('path');
// eslint-disable-next-line import/no-unresolved
const tseslint = require('typescript-eslint');

const tsCustomConfig = {
  name: 'ts-cabify-eslint-config',
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowAny: true },
    ],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'import',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        // This is the 'property' group values. For some reason `property` selector is not recogniced.
        selector: ['classProperty', 'objectLiteralProperty', 'typeProperty'],
        format: null,
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        // 'memberLike' group selector values without 'property' and 'enumMember'.
        // Don't know why 'memberLike' selector it's not being overriden by 'property' and 'enumMember'
        selector: ['parameterProperty', 'method', 'accessor'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      // Allow leading underscore for untyped parameters on Ts
      // Also allow paramters to be PascalCase to receive React.Components as props.
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      // Enforce the names of generic types are at least 2 characters long
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: {
          regex: '^[A-Z][a-zA-Z]+$',
          match: true,
        },
      },
      // Enforce that interface names do not begin with an I
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      // Emulate the old @typescript-eslint/class-name-casing
      {
        selector: 'class',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE', 'PascalCase'],
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true },
    ],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disabled after upgraded parser
    '@typescript-eslint/no-unsafe-member-access': 'off', // Disabled after upgraded parser
    '@typescript-eslint/no-unsafe-assignment': 'off', // Disabled after upgraded parser
    '@typescript-eslint/no-unsafe-call': 'off', // Disabled after upgraded parser
    '@typescript-eslint/no-unsafe-return': 'off', // Disabled after upgraded parser
    camelcase: 'off', // superseeded by @typescript-eslint/naming-conventions
    'import/no-cycle': 'off',
    'import/no-default-export': 'error',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'react/sort-comp': 'off',
    'react/prop-types': 'off', // guaranteed by TS prop interfaces
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 'off',
    'no-unused-expressions': 'off', // superseeded by @typescript-eslint/no-unused-expressions
    'no-unused-vars': 'off', // superseeded by @typescript-eslint/no-unused-vars
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-use-before-define': 'off', // superseeded by @typescript-eslint/no-use-before-define
    'no-redeclare': 'off', // superseeded by @typescript-eslint/no-redeclare
    'no-shadow': 'off', // superseeded by @typescript-eslint/no-shadow
  },
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: path.resolve(process.cwd()),
    },
  },
  ignores: ['*.d.ts'],
};

const tsLintConfig = tseslint.config(
  tseslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tsCustomConfig,
);

if (tsLintConfig.length) {
  tsLintConfig.forEach((tsconfig) => {
    tsconfig.files = ['**/*.ts', '**/*.tsx'];
    tsconfig.ignores = ['**/*.d.ts'];
  });
}

module.exports = { tsLintConfig };
