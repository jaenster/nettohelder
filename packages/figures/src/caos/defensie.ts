import type { Cao } from '../types.js';

/**
 * CAO Defensie (Ministerie van Defensie) — Nederland 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Inkomstenbesluit burgerlijke ambtenaren defensie, Bijlage A (bedragen met ingang van 1 januari 2026)
 * https://wetten.overheid.nl/BWBR0018191/2026-01-01
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Schaal 12-16 step sequences: verify all 12 steps are present and ascending
 *   - Salaristabel wijkt af van Bijlage A IBBAD per 1-1-2026: alleen 8 van 192 cellen kloppen op positie. De bron koppelt per schaal een eigen reeks salarisnummers (schaal 1: 6 treden 2976,52-3347,03; schaal 16: 12 treden 8191,84-11155,66), deze tabel heeft overal 12 opeenvolgende salarisnummers (schaal 1: 2976,52-3838,23; schaal 16: 4378,16-5863,78)
 *   - Per 1-9-2026 is er een nieuwe tabel (+6,5%, defensie.nl/onderwerpen/p/personeelszorg/arbeidsvoorwaarden/salaristabellen); niet gemodelleerd
 *   - Vakantiegeld and eindejaarsuitkering as IKB: confirm 8% + 8.33% = 16.33% is the correct consolidated treatment
 *   - Confirm ABP is the sole pension fund for both military and civilian Defensie personnel
 *   - Verify no mid-year salary revisions are scheduled for 2026 beyond 1 January
 *
 * Excluded: military personnel (separate MP salary table exists); youth salary scales (leeftijdschalen); all allowances and toelagen; deployment gratuity (uitzendgratificatie); VROB allowances (sailing, exercises, deployment); one-off payments (eenmalige uitkeringen); passport cost reimbursement; vitality budget (vitaliteitsbudget); social policy framework (Sociaal Beleidskader)
 */
export const caoDefensie2026: Cao = {
  id: 'defensie',
  name: "CAO Defensie (Ministerie van Defensie) — Nederland",
  year: 2026,
  effectiveNote: "Effective 1 January 2026. Salary tables reflect 2% structural increase per 1 January 2026 (plus 5% per 1 January 2025). Vakantiegeld and eindejaarsuitkering now consolidated into Individueel Keuze Budget (IKB) of 16.33% total (8% vacation + 8.33% year-end). Excludes: youth scales (leeftijdschalen), military personnel (see separate MP table), allowances (toelagen), deployment gratuities, one-off payments.",
  sourceUrl: "https://wetten.overheid.nl/BWBR0018191/2026-01-01",
  pensioenfondsId: 'abp',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    hoursPerWeek: 38,
    stepLabel: 'trede',
    unit: 'maand',
    schalen: {
      '1': [2976.52, 3010.03, 3096.15, 3181.55, 3263.9, 3347.03, 3427.87, 3507.99, 3592.63, 3674.23, 3752.89, 3838.23],
      '2': [3010.03, 3096.15, 3181.55, 3263.9, 3347.03, 3427.87, 3507.99, 3592.63, 3674.23, 3752.89, 3838.23, 3924.36],
      '3': [3096.15, 3181.55, 3263.9, 3347.03, 3427.87, 3507.99, 3592.63, 3674.23, 3752.89, 3838.23, 3924.36, 4014.19],
      '4': [3181.55, 3263.9, 3347.03, 3427.87, 3507.99, 3592.63, 3674.23, 3752.89, 3838.23, 3924.36, 4014.19, 4115.28],
      '5': [3263.9, 3347.03, 3427.87, 3507.99, 3592.63, 3674.23, 3752.89, 3838.23, 3924.36, 4014.19, 4115.28, 4209.65],
      '6': [3347.03, 3427.87, 3507.99, 3592.63, 3674.23, 3752.89, 3838.23, 3924.36, 4014.19, 4115.28, 4209.65, 4289.75],
      '7': [3427.87, 3507.99, 3592.63, 3674.23, 3752.89, 3838.23, 3924.36, 4014.19, 4115.28, 4209.65, 4289.75, 4378.16],
      '8': [3507.99, 3592.63, 3674.23, 3752.89, 3838.23, 3924.36, 4014.19, 4115.28, 4209.65, 4289.75, 4378.16, 4468.69],
      '9': [3592.63, 3674.23, 3752.89, 3838.23, 3924.36, 4014.19, 4115.28, 4209.65, 4289.75, 4378.16, 4468.69, 4553.37],
      '10': [3674.23, 3752.89, 3838.23, 3924.36, 4014.19, 4115.28, 4209.65, 4289.75, 4378.16, 4468.69, 4553.37, 4630.48],
      '11': [3752.89, 3838.23, 3924.36, 4014.19, 4115.28, 4209.65, 4289.75, 4378.16, 4468.69, 4553.37, 4630.48, 4709.14],
      '12': [4014.19, 4115.28, 4209.65, 4289.75, 4378.16, 4468.69, 4553.37, 4630.48, 4709.14, 4867.87, 5046.09, 5209.28],
      '13': [4115.28, 4209.65, 4289.75, 4378.16, 4468.69, 4553.37, 4630.48, 4709.14, 4867.87, 5046.09, 5209.28, 5366.58],
      '14': [4209.65, 4289.75, 4378.16, 4468.69, 4553.37, 4630.48, 4709.14, 4867.87, 5046.09, 5209.28, 5366.58, 5519.33],
      '15': [4289.75, 4378.16, 4468.69, 4553.37, 4630.48, 4709.14, 4867.87, 5046.09, 5209.28, 5366.58, 5519.33, 5689.3],
      '16': [4378.16, 4468.69, 4553.37, 4630.48, 4709.14, 4867.87, 5046.09, 5209.28, 5366.58, 5519.33, 5689.3, 5863.78],
    },
  },
  vergoedingen: [
    {"id":"thuiswerk","label":"Home work allowance (thuiswerkvergoeding)","amount":2.35,"unit":"perDag","taxable":true,"note":"Effective 1 January 2025"},
    {"id":"woon_werk_km","label":"Commute allowance (woon-werkverkeer)","amount":0.23,"unit":"perKm","taxable":true,"note":"Effective 1 January 2025 for tables E, N, O, H"},
    {"id":"dienstreis_km","label":"Business travel allowance (binnenlandse dienstreizen)","amount":0.23,"unit":"perKm","taxable":true,"note":"Effective 1 January 2025"},
  ],
};
