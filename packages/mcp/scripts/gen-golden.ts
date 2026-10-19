import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { NettoRequestSchema, computeNetto, resolveNetto, type NettoRequestInput } from '../src/core/index.js';

/**
 * Golden vectors: API request → exact engine input → expected outputs, frozen from the
 * current engine. A port of the engine (Zig, wasm, ...) replays `engine` and must
 * reproduce `expected`; the API test replays `request` and must reproduce both.
 */

interface Case {
  name: string;
  description: string;
  request: NettoRequestInput;
}

/** Fixed "today" so CAO period selection and own-salary raises are deterministic. */
const TODAY = '2026-06-01';

const cases: Case[] = [
  { name: '2026-maand-3000', description: 'Median-ish monthly salary, 8% vakantiegeld', request: { brutoPerMaand: 3000 } },
  { name: '2026-maand-2200-laag', description: 'Low income near minimum wage', request: { brutoPerMaand: 2200 } },
  { name: '2026-maand-4000-13e-maand', description: 'With a 13th month', request: { brutoPerMaand: 4000, dertiendeMaand: true } },
  { name: '2026-maand-6500-hoog', description: 'High income into the top bracket', request: { brutoPerMaand: 6500 } },
  { name: '2026-maand-3500-geen-vakantiegeld', description: 'Vakantiegeld 0%', request: { brutoPerMaand: 3500, vakantiegeldPct: 0 } },
  { name: '2026-jaar-30000', description: 'All-in annual gross', request: { brutoPerJaar: 30_000 } },
  { name: '2026-jaar-120000', description: 'High all-in annual gross, arbeidskorting afbouw', request: { brutoPerJaar: 120_000 } },
  { name: '2026-bonus-5000', description: 'Bonus at the bijzonder tarief', request: { brutoPerMaand: 4000, bonusJaar: 5000 } },
  { name: '2026-overwerk-10u-125', description: '10 overtime hours/month at 125%', request: { brutoPerMaand: 3500, overwerkUrenPerMaand: 10, overwerkToeslagPct: 0.25 } },
  { name: '2026-overwerk-deeltijd-32u', description: 'Overtime with a 32-hour contract week', request: { brutoPerMaand: 2800, uurPerWeek: 32, overwerkUrenPerMaand: 8, overwerkToeslagPct: 0.5 } },
  { name: '2026-30procent-100000', description: '30%-regeling, full exemption', request: { brutoPerJaar: 100_000, dertigProcentRegeling: true } },
  { name: '2026-30procent-normgrens-60000', description: '30%-regeling limited by the salary norm', request: { brutoPerJaar: 60_000, dertigProcentRegeling: true } },
  { name: '2026-30procent-jongmaster-45000', description: '30%-regeling against the young-master norm', request: { brutoPerJaar: 45_000, dertigProcentRegeling: true, dertigProcentNorm: 'jongMaster' } },
  { name: '2026-30procent-wnt-400000', description: '30%-regeling capped at the WNT norm', request: { brutoPerJaar: 400_000, dertigProcentRegeling: true } },
  { name: '2026-aow-jaar-30000', description: 'AOW-age regime with ouderenkorting', request: { brutoPerJaar: 30_000, aow: true } },
  { name: '2026-aow-maand-2500-zonder-lhk', description: 'AOW-age, second employer without loonheffingskorting', request: { brutoPerMaand: 2500, aow: true, loonheffingskorting: false } },
  { name: '2026-zonder-loonheffingskorting', description: 'No loonheffingskorting applied', request: { brutoPerMaand: 3000, loonheffingskorting: false } },
  { name: '2026-tijdvak-4weken', description: 'Pay period of 4 weeks', request: { brutoPerMaand: 3500, loontijdvak: '4weken' } },
  { name: '2026-tijdvak-week', description: 'Weekly pay period', request: { brutoPerMaand: 3500, loontijdvak: 'week' } },
  { name: '2026-pensioen-abp', description: 'ABP pension preset', request: { brutoPerMaand: 4000, pensioenfondsId: 'abp' } },
  { name: '2026-pensioenpremie-vast', description: 'Fixed pension contribution', request: { brutoPerJaar: 60_000, pensioenpremieJaar: 2000 } },
  { name: '2026-bijtelling-vrijstelling', description: 'Lease-car bijtelling plus untaxed allowances', request: { brutoPerMaand: 5000, bijtellingJaar: 6000, gerichteVrijstellingenJaar: 1000 } },
  { name: '2026-cao-gemeenten-tabel', description: 'Table CAO (Gemeenten), schaal 8 trede 3, full-time', request: { cao: { id: 'gemeenten', schaal: '8', trede: 3, peildatum: '2026-06-01' } } },
  { name: '2026-cao-gemeenten-deeltijd-24u', description: 'Table CAO, part-time 24 of 36 hours', request: { uurPerWeek: 24, cao: { id: 'gemeenten', schaal: '8', trede: 3, peildatum: '2026-06-01' } } },
  { name: '2026-cao-vvt-28u', description: 'Table CAO (VVT), PFZW pension, 28 hours', request: { uurPerWeek: 28, cao: { id: 'vvt', schaal: '35', trede: 4, peildatum: '2026-06-01' } } },
  { name: '2026-cao-kappers-na-verhoging', description: 'Table CAO after the 1 July raise', request: { cao: { id: 'kappers', schaal: '3 Haarstylist Allround/Haarwerker', trede: 2, peildatum: '2026-09-01' } } },
  { name: '2026-cao-abu-uurloon', description: 'Hourly table CAO (ABU)', request: { cao: { id: 'abu', schaal: '5', trede: 2, peildatum: '2026-06-01' } } },
  { name: '2026-cao-abn-amro-band', description: 'Band CAO (ABN AMRO), niveau 3 at 90% RSP', request: { cao: { id: 'abn-amro', niveau: '3', rsp: 0.9, peildatum: '2026-06-01' } } },
  { name: '2026-cao-ab-mauri-eigen-salaris', description: 'Own-salary CAO carried over a December raise', request: { brutoPerMaand: 3500, cao: { id: 'ab-mauri', peildatum: '2026-12-15' } } },
  { name: '2026-cao-chane-eenmalig', description: 'Own-salary CAO with an eenmalige uitkering', request: { brutoPerMaand: 3200, cao: { id: 'chane-terminals', peildatum: '2026-06-01' } } },
  { name: '2027-maand-3000', description: '2027 provisional figures', request: { year: 2027, brutoPerMaand: 3000 } },
  { name: '2027-jaar-120000', description: '2027 high income', request: { year: 2027, brutoPerJaar: 120_000 } },
  { name: '2027-27procent-100000', description: '2027 expat ruling at 27%', request: { year: 2027, brutoPerJaar: 100_000, dertigProcentRegeling: true } },
  { name: '2027-bonus-deeltijd', description: '2027 bonus with a pension preset', request: { year: 2027, brutoPerMaand: 2600, bonusJaar: 1500, pensioenfondsId: 'pfzw' } },
  { name: '2027-cao-gemeenten', description: '2027 tax year on the Gemeenten table', request: { year: 2027, cao: { id: 'gemeenten', schaal: '10', trede: 5, peildatum: '2027-01-01' } } },
  { name: '2027-aow-jaar-45000', description: '2027 AOW-age regime above the credits', request: { year: 2027, brutoPerJaar: 45_000, aow: true } },
];

const dir = fileURLToPath(new URL('../../engine/test/golden', import.meta.url));
mkdirSync(dir, { recursive: true });
for (const f of readdirSync(dir).filter((f) => f.endsWith('.json'))) rmSync(join(dir, f));

let written = 0;
for (const c of cases) {
  const req = NettoRequestSchema.parse(c.request);
  let resolved;
  let response;
  try {
    resolved = resolveNetto(req, TODAY);
    response = computeNetto(req, TODAY);
  } catch (err) {
    console.warn(`skip ${c.name}: ${(err as Error).message}`);
    continue;
  }
  const vector = {
    $comment: 'Generated by packages/mcp/scripts/gen-golden.ts from the current engine. Do not edit by hand.',
    name: c.name,
    description: c.description,
    today: TODAY,
    request: c.request,
    engine: { year: resolved.year, sources: [resolved.source], options: resolved.options },
    expected: response.result,
  };
  writeFileSync(join(dir, `${c.name}.json`), JSON.stringify(vector, null, 2) + '\n');
  written++;
}
console.log(`golden: ${written} vectors -> ${dir}`);
