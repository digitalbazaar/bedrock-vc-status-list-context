# bedrock-vc-status-list-context ChangeLog

## 2.0.0 - 2022-04-xx

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
