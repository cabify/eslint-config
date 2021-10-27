# @cabify/eslint-config

![npm (scoped)](https://img.shields.io/npm/v/@cabify/eslint-config)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-20-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

## Legacy

If you want to maintain the formatting within ESLint, you can opt to extend the `@cabify/eslint-config/legacy` configuration instead of `@cabify/eslint-config/recommended`:

```json
{
  "extends": ["@cabify/eslint-config/legacy"],
  ...
}
```

## Publish new version

Just merge to `main` branch and run:

- `git checkout main`
- `git pull`
- `yarn`
- `yarn publish:(major|minor|patch)`
- `git push --tags`

This will trigger a workflow on Github which will publish to npm eventually.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://aarongarciah.com/"><img src="https://avatars.githubusercontent.com/u/7225802?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aarón García Hervás</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=aarongarciah" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/alejandrofdiaz"><img src="https://avatars.githubusercontent.com/u/9197247?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alejandro</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=alejandrofdiaz" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/alexgallardo"><img src="https://avatars.githubusercontent.com/u/7766614?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alejandro Gallardo Escobar</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=alexgallardo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/cicloon"><img src="https://avatars.githubusercontent.com/u/818328?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alejandro León</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=cicloon" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/AlexTemina"><img src="https://avatars.githubusercontent.com/u/14157093?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alex Temina</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=AlexTemina" title="Code">💻</a></td>
    <td align="center"><a href="http://www.ari.soy/"><img src="https://avatars.githubusercontent.com/u/29388744?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Arian Zargaran</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=ArianZargaran" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/carloscasalar"><img src="https://avatars.githubusercontent.com/u/6154549?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Carlos Castillo</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=carloscasalar" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/christiandebarrio"><img src="https://avatars.githubusercontent.com/u/13832650?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Christian</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=christiandebarrio" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Crismmgg"><img src="https://avatars.githubusercontent.com/u/56558107?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Crismmgg</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=Crismmgg" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/d-asensio"><img src="https://avatars.githubusercontent.com/u/13970905?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Asensio Cañas</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=d-asensio" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/inspiratweb"><img src="https://avatars.githubusercontent.com/u/6814061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Francisco Sánchez</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=inspiratweb" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jalopez"><img src="https://avatars.githubusercontent.com/u/259623?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Javier López</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=jalopez" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jmmerino"><img src="https://avatars.githubusercontent.com/u/1152640?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jesús Merino Parra</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=jmmerino" title="Code">💻</a></td>
    <td align="center"><a href="https://leireriel.github.io/leire-rico-portfolio/#/"><img src="https://avatars.githubusercontent.com/u/48056077?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leire Rico</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=leireriel" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/riboher"><img src="https://avatars.githubusercontent.com/u/11684090?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ricardo Boluda</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=riboher" title="Code">💻</a></td>
    <td align="center"><a href="http://www.siete3.com/"><img src="https://avatars.githubusercontent.com/u/2030605?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rodrigo</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=area73" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/humanrender"><img src="https://avatars.githubusercontent.com/u/161557?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sergio Ramirez</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=humanrender" title="Code">💻</a></td>
    <td align="center"><a href="https://valya.codes/"><img src="https://avatars.githubusercontent.com/u/7880641?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Valentin Berlin</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=valenber" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/YagoQuinoy"><img src="https://avatars.githubusercontent.com/u/2685554?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yago Quiñoy Lobariñas</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=YagoQuinoy" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/alejandromolero"><img src="https://avatars.githubusercontent.com/u/5390467?v=4?s=100" width="100px;" alt=""/><br /><sub><b>alejandromolero</b></sub></a><br /><a href="https://github.com/cabify/eslint-config/commits?author=alejandromolero" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
