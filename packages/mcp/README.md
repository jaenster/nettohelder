# @nettohelder/mcp

MCP server for Dutch gross-to-net (bruto → netto) salary calculations, built on the same
engine and data as [nettohelder.nl](https://nettohelder.nl). Everything runs locally over
stdio: no network access, no API key.

- Tax years **2026** (confirmed) and **2027** (provisional, Belastingplan 2027)
- 550+ CAOs with salary tables, bands or own-salary terms (vakantiegeld, eindejaarsuitkering,
  pension fund, collective raises, one-off payments)
- Pension, bonus, overtime, part-time hours, loontijdvak, 30%/27%-regeling, AOW age,
  loonheffingskorting
- Every tax figure comes with its official source URL and a confirmed/provisional status

Results are returned as [TOON](https://github.com/toon-format/toon) (Token-Oriented Object
Notation), which costs a model fewer tokens than JSON.

## Install

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

Requires Node.js 20 or newer.

## Tools

| Tool | What it does |
|-|-|
| `bereken_netto` | Gross → net for one job: `brutoPerMaand`, `brutoPerJaar` or a `cao` position, plus options. Returns the result, a step-by-step breakdown and the provenance of each figure. |
| `zoek_cao` | Search CAOs by name (`q`), `sector` or `salaryKind`. |
| `cao_details` | Terms, pension fund, allowances and the salary timeline/tables of one CAO. |
| `vergelijk_jaren` | Same input as `bereken_netto`, computed for 2026 and 2027 side by side with the difference. |

Example prompts:

- "Wat is netto 3.800 per maand bruto met 13e maand en ABP-pensioen?"
- "Ik werk bij een gemeente in schaal 9, trede 4, 32 uur. Wat houd ik over?"
- "Hoeveel scheelt de 27%-regeling in 2027 bij 95.000 bruto per jaar?"

## Accuracy

The calculation uses the jaarloon method; an actual payslip can differ slightly because of
rounding in the loonheffing tables and employer-specific arrangements. CAO records marked
`draft` were extracted automatically and are not yet hand-reviewed.

The same calculations are available as an open HTTP API at `https://nettohelder.nl/api/v1`
(OpenAPI spec at `/api/v1/openapi.json`).

## License

MIT
