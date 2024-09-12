# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.3] - 2024-09-12

- Updating eslint-plugin dependencies.

## [2.1.2] - 2024-09-12

- Updating typescript-eslint dependencies.

## [2.1.1] - 2024-07-10

- Updating naming convention for imports. Added `camelCase`, `PascalCase` and `UPPER_CASE`.

## [2.1.0] - 2024-06-20

- Updating dependencies before migration to ESlint 9.

## [2.0.1] - 2023-07-12

- Bumped prettier to v3 and eslint-plugin-prettier to v5 because of [compatibility issues between them](https://github.com/prettier/eslint-plugin-prettier/issues/562).

## [2.0.0] - 2023-06-19

### Changed

- Breaking change in how type imports are sorted [eslint-plugin-simple-import-sort@10.0.0](https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/CHANGELOG.md#version-1000-2023-01-27).
  - Just run `eslint . --fix`.
- Bumped dependencies.
- Bumped `eslint-plugin-import` dependencies [after security alert](https://github.com/cabify/eslint-config/security/dependabot/2).

## [1.1.2] - 2022-10-24

### Changed

- Bump dependencies

## [1.0.3] - 2022-07-22

### Changed

- Bump dependencies

## [1.0.2] - 2021-11-25

### Changed

- Bump dependencies

## [1.0.1] - 2021-11-15

### Changed

- Bump dependencies

## [1.0.0] - 2021-10-27

### Changed

- ESLint v8 is now required as a peer dependency.
- Node.js 10, 13, and 15 are no longer supported.
- New rules and changes into some of the old ones.

## [0.0.1] - 2021-10-22

- Init
