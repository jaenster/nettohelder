# Contributing

Thanks for helping keep the numbers right.

## Data corrections

Tax figures (`packages/figures/src/2026.ts`, `2027.ts`) and CAO records
(`packages/figures/src/caos/*.ts`) must trace back to a **primary source**: Belastingdienst,
wetten.overheid.nl, Tweede Kamer / officielebekendmakingen.nl, or the CAO text published by the
CAO parties (employers' organisation or union). A correction without a primary source URL will
not be merged. Put the URL in the record's `sourceUrl` (CAO) or provenance entry (tax figures).

If you only want to report an error, open an issue or mail contact@nettohelder.nl with the CAO
or figure, what is wrong and the source that says so.

## Before opening a PR

```sh
pnpm install
pnpm build
pnpm test
pnpm typecheck
```

`pnpm build` regenerates `packages/figures/src/cao-index.generated.ts` and
`packages/mcp/src/core/cao-meta.generated.ts`; commit them when they change.

## Golden vectors

`packages/engine/test/golden/*.json` freeze the engine's output. Regenerate them only when a
change to the numbers is intended (new figures, a fixed bug), never to make a failing test pass:

```sh
pnpm --filter @nettohelder/mcp golden
```

Explain in the PR which vectors changed and why.
