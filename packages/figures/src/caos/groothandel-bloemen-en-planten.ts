import type { Cao } from '../types.js';

/**
 * CAO Groothandel Bloemen en Planten (Nederland) 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO Groothandel in Bloemen en Planten 2024-2026
 * https://fnv.nl/getmedia/ac2a5ee9-3be3-45e6-b4d4-6156c536f786/1006-groothandel-in-bloemen-en-planten-vgb-cao-2024-2026-v08042025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Pension fund 'Bedrijfstakpensioenfonds Grafische Bedrijven' - verify if this should be categorized differently
 *   - defaultRsp of 0.9 assumed for band model - CAO does not specify RSP percentage explicitly
 *   - Functiegroep VI appears in some tables but was listed as 110-130 Orba in January 2026 table - structure may need verification
 *   - Youth scales (65%, 75%, 85%, 95%, 100% of adult scale) are excluded per rules
 *   - Eindejaarsuitkering is 1% not 1/12 - verify if this is correct (typically 8.33% for 13th month)
 *
 * Excluded: leeftijdsschalen (jeugdschalen voor werknemers 16-20 jaar); functiegroepen VII-IX (volwassen groepen met vrijwillige pensioendeelname); persoonlijke toeslagen en onkostenvergoedingen; overwerkuren (geen vakantiegeldopbouw); ORBA-bandbreedte details (0-50, 50-70 etc - niet opgenomen in basisstructuur)
 */
export const caoGroothandelBloemenEnPlanten2026: Cao = {
  id: 'groothandel-bloemen-en-planten',
  name: "CAO Groothandel Bloemen en Planten",
  year: 2026,
  effectiveNote: "1 januari 2026 (tabel met 3% verhoging per 1 oktober 2024); aanvullende verhoging 1% per 1 juli 2026. Vakantiegeld 8% van verdiende bruto maandinkomen juni-mei. Eindejaarsuitkering 1%. Exclusies: leeftijdsschalen (jeugdschalen voor 16-20 jaar), functiegroepen VII-IX (deelname vrijwillig pension), overwerkuren (geen vakantiegeldopbouw).",
  sourceUrl: "https://fnv.nl/getmedia/ac2a5ee9-3be3-45e6-b4d4-6156c536f786/1006-groothandel-in-bloemen-en-planten-vgb-cao-2024-2026-v08042025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0083,
  salary: {
    kind: 'band',
    hoursPerWeek: 40,
    levelLabel: "Functiegroep",
    unit: 'maand',
    levels: [
      { id: 'Orba', min: 2534.96, max: 2703.35 },
      { id: 'II', min: 2579.32, max: 2834.42 },
      { id: 'III', min: 2633.06, max: 2992.12 },
      { id: 'IV', min: 2714.65, max: 3231.73 },
      { id: 'V', min: 2853.52, max: 3522.87 },
    ],
    defaultRsp: 0.9,
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1% collectieve verhoging",
      status: 'confirmed',
      salary: {
        kind: 'band',
        hoursPerWeek: 40,
        levelLabel: "Functiegroep",
        unit: 'maand',
        levels: [
          { id: 'Orba', min: 2560.31, max: 2730.38 },
          { id: 'II', min: 2605.12, max: 2862.76 },
          { id: 'III', min: 2659.39, max: 3022.04 },
          { id: 'IV', min: 2741.8, max: 3264.05 },
          { id: 'V', min: 2882.06, max: 3558.1 },
        ],
        defaultRsp: 0.9,
      },
    },
  ],
  vergoedingen: [],
};
