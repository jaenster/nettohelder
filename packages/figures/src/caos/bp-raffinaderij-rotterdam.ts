import type { Cao } from '../types.js';

/**
 * Cao BP Raffinaderij Rotterdam B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao BP Raffinaderij Rotterdam B.V.
 * https://cao-kijker.awvn.nl/bestanden/3437_01-04-2026%20tot%2001-10-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01, 2027-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoBpRaffinaderijRotterdam2026: Cao = {
  id: 'bp-raffinaderij-rotterdam',
  name: "Cao BP Raffinaderij Rotterdam B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-09-30; loontabel per 2025-04-01. Let op: Cao 2026-2027 is een door FNV en CNV geaccepteerd (hernieuwd) eindbod van 3 juni 2026 Eenmalige bruto uitkering van € 1.750 'per de eerstvolgende mogelijkheid na akkoord'; exacte datum niet vermeld, daarom niet als eenmalige uitkering opgenomen Salarisschalen (cao 2025-2026, per 1-4-2025) kennen alleen een minimum en maximum; hier als twee treden opgenomen Jaarlijkse merit-verhoging per 1 april afhankelijk van beoordeling (0% tot 5%), niet opgenomen Vakantietoeslag is een 13e maand (basis maandsalaris in mei) en er is een 14e maand (december); beide als 8,33% opgenomen Normale arbeidsduur 40 uur per week; in dagdienst door adv gemiddeld 37,85 uur, in 5-ploegendienst 34,05 uur Pensioen via eigen pensioenregeling; werknemerspremie niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3437_01-04-2026%20tot%2001-10-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '003': [2189, 3191],
      '004': [2472, 3697],
      '005': [2965, 4436],
      '006': [3548, 5435],
      '007': [4253, 6356],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+2,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '003': [2238.25, 3262.8],
          '004': [2527.62, 3780.18],
          '005': [3031.71, 4535.81],
          '006': [3627.83, 5557.29],
          '007': [4348.69, 6499.01],
        },
      },
    },
    {
      from: '2027-04-01',
      note: "+1,25% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '003': [2266.23, 3303.58],
          '004': [2559.22, 3827.43],
          '005': [3069.61, 4592.51],
          '006': [3673.18, 5626.75],
          '007': [4403.05, 6580.25],
        },
      },
    },
  ],
  vergoedingen: [],
};
