# @cabify/eslint-config

ESLint config for both TS and JS, Cabify way.

## Installation

```sh
npm i -D @cabify/eslint-config eslint prettier
```

or

```sh
yarn add --dev @cabify/eslint-config eslint prettier
```

## Usage

1. Create a `.eslintrc` file at the root of your project:

```json
{
  "extends": ["@cabify/eslint-config/recommended"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

2. Add the lint task into your `package.json`:

```json
...
"scripts": {
  ...
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  ...
}
```

3. Add a `.eslintignore` file to avoid checking unwanted files:

https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file

### Formatting

The recomended configuration does not include formatting rules, as using the Prettier binary is quicker and brings more benefits.
To format the files from your app a and checking them are properly formatted you can add the following scripts to your `package.json` file:

```json
...
"scripts": {
  ...
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  ...
}
```

### Setup for Babel

If you use non-standard features in your JS code (like decorators),
or custom configs to import files you'll need to use `babel-eslint` as parser.
To do so, install the following dependencies and modify your `.eslintrc` file accordingly:

```sh
yarn add --dev babel-eslint eslint-import-resolver-babel-module
```

or

```sh
yarn add --dev babel-eslint eslint-import-resolver-babel-module
```

Modify `.eslintrc`:

```json
{
  ...
  "parser": "babel-eslint",
  "settings": {
    ...
    "import/resolver": {
      "babel-module": {}
    }
  }
}
```

### Setup for TypeScript

1.  Install the following dependencies:

```sh
npm i -D eslint-import-resolver-typescript
```

or

```sh
yarn add --dev eslint-import-resolver-typescript
```

2. Modify `.eslintrc`:

```json
{
  ...
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.eslint.json"
  },
  "settings": {
    ...
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

3.  Add a `./tsconfig.eslint.json` to the root of your project.
    NOTE: it is important that your `tsconfig.eslint.json` file includes
    the same files that you are going to lint, or it will fail and make linting so slow.

```json
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*", "test/**/*"] // remember to import also your test files if you want to lint them
}
```

#### A note on performance in TS projects

There is an known issue that may affect linting times in projects with TS. If you note that your
linting time is not acceptable, there is a workaround to improve it a lot, but it implies to disable
some rules. If you can live without them, just make these changes in your `.eslintrc` config:

```json
{
  ...
  // remove the "project" field (if you don't have any other parserOptions you can remove the full section)
  "parserOptions": {},
  "rules": {
    // this rules depend on project field, so they must be disabled to make linting much faster
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/prefer-string-starts-ends-with": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/unbound-method": "off"
  }
}
```

### Setup for Jest

If you use Jest, installing its import resolver into your project is encouraged.

```sh
npm i -D eslint-import-resolver-jest
```

or

```sh
yarn add --dev eslint-import-resolver-jest
```

### Legacy

If you want to maintain the formatting within ESLint, you can opt to extend the `@cabify/eslint-config/legacy` configuration instead of `@cabify/eslint-config/recommended`:

```json
{
  "extends": ["@cabify/eslint-config/legacy"],
  ...
}
```

## Migration

### From 7 > 8

The biggest change here is we adopted new major version of `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`. This upgrade comes with a ton of changes related with deprecated rules such:

- `@typescript-eslint/class-name-casing`
- `@typescript-eslint/interface-name-prefix`
- `@typescript-eslint/generic-type-naming`
- `@typescript-eslint/camelcase`
- `@typescript-eslint/ban-ts-ignore`

New stricter rules were enabled from the suite of recommended ones. We have disabled them due to requiring big changes to adopt them, although it's recommended to try to enable some of them into your projects as they enforce type safety:

- [`@typescript-eslint/explicit-module-boundary-types`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md)
- [`@typescript-eslint/no-unsafe-assignment`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md)
- [`@typescript-eslint/no-unsafe-member-access`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md)
- [`@typescript-eslint/no-unsafe-call`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md)
- [`@typescript-eslint/no-unsafe-return`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md)
- [`@typescript-eslint/ban-types`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md)

Required changes:

- Remove comments for any deprecated rules listed above.
- Change `@typescript-eslint/camelcase` for `eslint/camelcase` disable comments.
- `@typescript-eslint/restrict-plus-operands` forces to cast members of an operation both to string | number.
- `@typescript-eslint/restrict-template-expressions` forces to define a variable used inside a template literal into string/number.
- `@typescript-eslint/no-floating-promises` forces to have a `catch` in promises.
- `@typescript-eslint/no-var-requires` forces again to not use `require`.
- `@typescript-eslint/ban-types`, forbid usage of `String`, `Number` (in favor of `string`, `number`) and `{}`/`object` for types (in favor of `Record` type utility)

# Publish new version

Just merge to `main` branch and then pull and run:

- yarn publish:(major|minor|patch)

This will trigger a workflow on Github which will publish to npm eventually.

# Former contributors

Aarón García

Alejandro Frías

Alejandro Gallardo Escobar

alejandro Leon

Alejandro Molero

Alejandro Ruiz Temina

Arián Zargarán Florez

Carlos Castillo Alarcón

Christian de Barrio Arribas

Cristina Martín Gago

David Asensio Cañas

Francisco Sanchez

Javier López Pardo

Jesus Merino

Leire Rico Prieto

Ricardo Boluda Hernández

Rodrigo Erades Alonso

sergio ramirez

Valentin Berlin

Yago Quiñoy Lobariñas
