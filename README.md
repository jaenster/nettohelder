# nettohelder

Open-source engine and data behind [nettohelder.nl](https://nettohelder.nl): Dutch gross-to-net
(bruto → netto) salary calculations for employment income.

- **Engine**: loonheffing, heffingskortingen, Zvw, pension, bonus/bijzonder tarief, overtime,
  part-time hours, loontijdvak, 30%/27%-regeling and AOW age.
- **Tax figures** for **2026** (confirmed) and **2027** (provisional, Belastingplan 2027), every
  figure with its source URL and a confirmed/provisional status.
- **558 CAO salary datasets**: salary tables, bands or own-salary terms, vakantiegeld,
  eindejaarsuitkering, pension fund, collective raises and one-off payments.
- **MCP server** (`@nettohelder/mcp`) so an AI assistant can run the same calculations offline.

The same calculations are available as an open HTTP API at `https://nettohelder.nl/api/v1`
(OpenAPI spec: [`/api/v1/openapi.json`](https://nettohelder.nl/api/v1/openapi.json)).

## Packages

| Package | What it is |
|-|-|
| [`packages/engine`](packages/engine) | `@nettohelder/engine`: the pure calculation, no I/O |
| [`packages/figures`](packages/figures) | `@nettohelder/figures`: tax years, provenance, pension presets, CAO records |
| [`packages/mcp`](packages/mcp) | `@nettohelder/mcp`: MCP server over stdio, bundles engine and figures |

## MCP server

Claude Code:

```sh
claude mcp add nettohelder -- npx -y @nettohelder/mcp
```

Claude Desktop (`claude_desktop_config.json`) or Cursor (`.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "nettohelder": {
      "command": "npx",
      "args": ["-y", "@nettohelder/mcp"]
    }
  }
}
```

Tools: `bereken_netto`, `zoek_cao`, `cao_details`, `vergelijk_jaren`. No network access, no API
key; results are [TOON](https://github.com/toon-format/toon). See
[packages/mcp/README.md](packages/mcp/README.md) for details.

## Using the engine as a library

`@nettohelder/engine` and `@nettohelder/figures` are workspace packages (not on npm); use them
from a clone:

```sh
git clone https://github.com/jaenster/nettohelder
cd nettohelder
pnpm install
```

```ts
import { figures2026 } from '@nettohelder/figures';
import { computeCombined } from '@nettohelder/engine';

const r = computeCombined(
  [{ kind: 'loondienst', maandloon: 3000, vakantiegeldPct: 0.08 }],
  figures2026,
  { aow: false, loonheffingskorting: true, loontijdvak: 'maand' },
);

r.nettoMaand; // 2755.38 (annual net / 12, vakantiegeld included)
r.nettoPerTijdvak; // 2611.85 (regular monthly payslip, without vakantiegeld)
r.nettoJaar; // 33064.55
```

With `figures2027` the same input gives `nettoMaand` 2763.71. `provenance2026` /
`provenance2027` give the source and status of every figure; `caos2026` holds the CAO records and
`caoPeriodAt` / `caoTimeline` resolve the salary table that applies on a date.

## Data status

- **2026** tax figures are final (`confirmed`).
- **2027** figures are **provisional**: they follow the Belastingplan 2027 including the nota van
  wijziging of 9 October 2026, which parliament has not adopted yet. Some thresholds follow the
  minimum wage, set in November. Values not yet published for 2027 carry the 2026 value and the
  provenance note says so.
- **CAO records**: 35 are hand-checked; 523 are marked `DRAFT from cao-pipeline (confidence: ...)`
  in their header. Drafts were extracted automatically from the CAO text and carry a
  "verify these against the source" list. The MCP server and API report this as `draft: true`.
- **Sources**: primary sources wherever possible: Belastingdienst, Tweede Kamer /
  officielebekendmakingen.nl, and the CAO texts published by the CAO parties
  (AWVN cao-kijker, FNV, CNV, employers' organisations). Where a figure comes from a secondary
  source, its provenance note says so.

The calculation uses the jaarloon method; an actual payslip can differ by a few euros because of
rounding in the loonheffing tables and employer-specific arrangements.

## Golden vectors: a spec for ports

`packages/engine/test/golden/*.json` are frozen input/output pairs. Each vector holds:

- `request`: the API/MCP-level input (`brutoPerMaand`, `cao`, options) and a fixed `today`
- `engine`: the exact `computeCombined(sources, figures[year], options)` arguments it resolves to
- `expected`: the outputs, to the cent (`bijzonderTarief` to 1e-9)

A port of the engine to another language (Rust, Go, Python, wasm, ...) only needs the tax figures
and the `engine` + `expected` pairs: replay `engine`, compare with `expected`, and you have a
conformance suite. `packages/engine/test/golden.test.ts` does exactly that for this engine, and
`packages/mcp/test/golden.test.ts` also checks that each `request` resolves to the same `engine`
input. Vectors are regenerated only on an intended change, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Development

```sh
pnpm install
pnpm build      # regenerates CAO index/meta, compiles, bundles the MCP server
pnpm test
pnpm typecheck
```

Node.js 22 or newer.

## Reporting errors

Found a wrong figure or CAO amount? Open a
[GitHub issue](https://github.com/jaenster/nettohelder/issues) or mail
[contact@nettohelder.nl](mailto:contact@nettohelder.nl), ideally with the primary source that
shows the right value.

## Nederlands

Nettohelder is de open-source rekenkern en data achter [nettohelder.nl](https://nettohelder.nl):
bruto-netto voor loondienst, belastingjaren 2026 (definitief) en 2027 (voorlopig, Belastingplan
2027), en 558 cao's met loontabellen. Elk belastingcijfer heeft zijn officiële bron. Er is een
MCP-server (`npx -y @nettohelder/mcp`) en een open API op `https://nettohelder.nl/api/v1`.
Cao's met `draft` zijn automatisch uitgelezen en nog niet met de hand gecontroleerd. Fout gezien?
Meld het via een GitHub-issue of contact@nettohelder.nl, graag met de bron.

## License

[MIT](LICENSE)
