# bedrock-vc-status-list-context ChangeLog

## 6.0.2 - 2024-08-xx

### Fixed
- Add package `files` field.

## 6.0.1 - 2024-08-01

### Changed
- Remove `@bedrock/core` peer dep.
- Cleanups.

## 6.0.0 - 2024-08-01

### Added
- Add context from `@digitalbazaar/vc-bitstring-status-list-context`.
  - Export constants as `bslConstants`.

### Changed
- Update dependencies.
  - `@digitalbazaar/vc-status-list-context@3.1.1`
- **BREAKING**: Update peer dependencies.
  - `@bedrock/core@6.1.3`
  - `@bedrock/jsonld-document-loader@5.1.0`
- Update dev and test dependencies.

## 5.0.0 - 2023-09-19

### Changed
- **BREAKING**: Drop support for Node.js < 18.
- Use peer `@bedrock/jsonld-document-loader@4`.
- Update test deps.

## 4.1.0 - 2022-06-08

### Changed
- Export constants.

## 4.0.0 - 2022-04-29

### Changed
- **BREAKING**: Update peer deps:
  - `@bedrock/core@6`
  - `@bedrock/jsonld-document-loader@3`.

## 3.0.0 - 2022-04-06

### Changed
- **BREAKING**: Use `@digitalbazaar/vc-status-list-context` v3.0.

## 2.0.0 - 2022-04-03

### Changed
- **BREAKING**: Rename package to `@bedrock/vc-status-list-context`.
- **BREAKING**: Convert to module (ESM).
- **BREAKING**: Remove default export.
- **BREAKING**: Require node 14.x.

### Removed
- **BREAKING**: Remove adding any constants to bedrock config system. If
  constants are needed, import them from `constants`.

## 1.1.0 - 2022-03-28

### Changed
- Update peer deps:
  - `bedrock@4.5`
  - `bedrock-jsonld-document-loader@1.3`.
- Update internals to use esm style and use `esm.js` to
  transpile to CommonJS.

## 1.0.1 - 2022-02-21

### Changed
- Use `@digitalbazaar/vc-status-list-context`. This dependency was
  renamed to be `@digitalbazaar` scoped without any changes.

## 1.0.0 - 2022-02-01

- See git history for changes.
