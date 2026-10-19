import type { Cao } from '../types.js';

/**
 * CAO ASN Bank (vh De Volksbank) 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Cao de Volksbank 2025 t/m 2026 (FNV) - Salaristabellen p.53-54
 * https://www.fnv.nl/getmedia/421f63fc-d6c3-4061-b15b-c11ab00e9dae/1056-de-volksbank-cao-01-01-2025-31-12-2026-v-15052025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Band min-max maandbedragen schaal 1-13 per 01-05-2025 (gebruikt als salary tabel geldig op 1 jan 2026)
 *   - Verhoging +2% per 1 februari 2026 en +1,75% per 1 mei 2026
 *   - Schaal 1 en 2 aanvang=eind = 2496,00 (min=max, smalle/geen band)
 *   - pensioenfondsId='generiek' — De Volksbank heeft eigen pensioenregeling, geen sectorfonds uit de lijst past
 *   - vakantiegeld 8% en geen eindejaarsuitkering: niet expliciet bevestigd uit dit tabellengedeelte
 *
 * Excluded: eenmalige uitkering EUR 500 bruto; toeslagen (overwerk, ploegentoeslag, waarnemingstoeslag); onkostenvergoedingen / reiskosten; minimumuurloon-garantie EUR 16/uur; jeugd-/aanloopregelingen
 */
export const caoDeVolksbank2026: Cao = {
  id: 'de-volksbank',
  name: "CAO ASN Bank (vh De Volksbank)",
  year: 2026,
  effectiveNote: "Band-model (functieschalen 1 t/m 13) met aanvangssalaris/eindsalaris als min-max, maandbedragen op basis van 36 uur/week. De `salary` is de tabel zoals geldig op 1 januari 2026 (= de tabel per 01-05-2025, want die gold t/m 31-01-2026). Collectieve verhogingen in 2026: +2% per 1 februari 2026 (tabel per 01-02-2026) en +1,75% per 1 mei 2026 (tabel per 01-05-2026); beide opgenomen in periods. CAO-looptijd 01-01-2025 t/m 31-12-2026. Uitgesloten: eenmalige uitkering EUR 500 bruto, jeugd-/aanloopaspecten, toeslagen (overwerk, ploegen, waarneming), onkostenvergoedingen en de minimumuurloon-garantie van EUR 16. Schaalminimum is 75% van schaalmaximum.",
  sourceUrl: "https://www.fnv.nl/cao-sector/finance/cao-de-volksbank",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'band',
    levelLabel: "Salarisschaal",
    unit: 'maand',
    levels: [
      { id: '1', min: 2496, max: 2496 },
      { id: '2', min: 2496, max: 2496 },
      { id: '3', min: 2496, max: 2782.93 },
      { id: '4', min: 2496, max: 3132.43 },
      { id: '5', min: 2650.73, max: 3534.3 },
      { id: '6', min: 2995.52, max: 3994.02 },
      { id: '7', min: 3384.87, max: 4513.16 },
      { id: '8', min: 3856.18, max: 5141.57 },
      { id: '9', min: 4386.45, max: 5848.6 },
      { id: '10', min: 4990.82, max: 6654.42 },
      { id: '11', min: 5729.37, max: 7639.16 },
      { id: '12', min: 6578.22, max: 8770.96 },
      { id: '13', min: 7554.23, max: 10072.3 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 36,
  },
  periods: [
    {
      from: '2026-02-01',
      note: "+2% collectieve verhoging",
      status: 'confirmed',
      salary: {
        kind: 'band',
        levelLabel: "Salarisschaal",
        unit: 'maand',
        levels: [
          { id: '1', min: 2496, max: 2496 },
          { id: '2', min: 2496, max: 2542.67 },
          { id: '3', min: 2496, max: 2838.59 },
          { id: '4', min: 2496, max: 3195.08 },
          { id: '5', min: 2703.74, max: 3604.99 },
          { id: '6', min: 3055.43, max: 4073.9 },
          { id: '7', min: 3452.57, max: 4603.42 },
          { id: '8', min: 3933.3, max: 5244.4 },
          { id: '9', min: 4474.18, max: 5965.57 },
          { id: '10', min: 5090.63, max: 6787.51 },
          { id: '11', min: 5843.96, max: 7791.94 },
          { id: '12', min: 6709.79, max: 8946.38 },
          { id: '13', min: 7705.31, max: 10273.75 },
        ],
        defaultRsp: 0.9,
        hoursPerWeek: 36,
      },
    },
    {
      from: '2026-05-01',
      note: "+1,75% collectieve verhoging",
      status: 'confirmed',
      salary: {
        kind: 'band',
        levelLabel: "Salarisschaal",
        unit: 'maand',
        levels: [
          { id: '1', min: 2496, max: 2496 },
          { id: '2', min: 2496, max: 2587.17 },
          { id: '3', min: 2496, max: 2888.27 },
          { id: '4', min: 2496, max: 3250.99 },
          { id: '5', min: 2751.06, max: 3668.08 },
          { id: '6', min: 3108.89, max: 4145.19 },
          { id: '7', min: 3512.99, max: 4683.98 },
          { id: '8', min: 4002.14, max: 5336.18 },
          { id: '9', min: 4552.48, max: 6069.97 },
          { id: '10', min: 5179.72, max: 6906.29 },
          { id: '11', min: 5946.23, max: 7928.3 },
          { id: '12', min: 6827.21, max: 9102.94 },
          { id: '13', min: 7840.16, max: 10453.54 },
        ],
        defaultRsp: 0.9,
        hoursPerWeek: 36,
      },
    },
  ],
  vergoedingen: [],
};
