import type { Cao } from '../types.js';

/**
 * Cao Vandervalk+deGroot B.V. en Verenigde Bedrijven Vandervalk+deGroot B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Vandervalk+deGroot B.V. en Verenigde Bedrijven Vandervalk+deGroot B.V.
 * https://cao-kijker.awvn.nl/bestanden/2114_01-04-2026%20tot%2001-04-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +4%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01, 2027-01-01, 2027-10-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoVandervalkDeGroot2026: Cao = {
  id: 'vandervalk-de-groot',
  name: "Cao Vandervalk+deGroot B.V. en Verenigde Bedrijven Vandervalk+deGroot B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2028-03-31; loontabel per 2026-04-01. Let op: Salarisgroepen kennen alleen een minimum en maximum (geen treden); hier als [min, max] opgenomen Groep 1 t/m 3: minimum op wettelijk minimumloon, maximum wettelijk minimumloon plus 20%; niet opgenomen Uitloopmaximum tot 110% van het schaalmaximum bij beoordeling 'uitstekend'; jaarlijkse herziening 2% (goed) of 4% (uitstekend) Eindejaarsuitkering van een maandsalaris (december) alleen voor werknemers in een indirecte functie; daarom niet als percentage opgenomen Normale arbeidsduur 40 uur per week; 40 uur adv per jaar (gemiddeld 39,15 uur per week) Pensioen: verzekerde beschikbare premieregeling, werknemerspremie 6,6% van (jaarsalaris minus franchise); franchise is het fiscaal laagst mogelijke bedrag (niet als bedrag vermeld), daarom niet opgenomen Cao geldt ook voor Grootvalk Materieel B.V.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2114_01-04-2026%20tot%2001-04-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '4': [2612.02, 3121.59],
      '5': [2782.73, 3325.58],
      '6': [2953.44, 3672.22],
      '7': [3209.53, 3912.37],
      '8': [3550.96, 4328.62],
      '9': [3900.62, 5106.28],
      '10': [4184.32, 5673.66],
      '11': [4468.01, 6382.84],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+4% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '4': [2716.5, 3246.45],
          '5': [2894.04, 3458.6],
          '6': [3071.58, 3819.11],
          '7': [3337.91, 4068.86],
          '8': [3693, 4501.76],
          '9': [4056.64, 5310.53],
          '10': [4351.69, 5900.61],
          '11': [4646.73, 6638.15],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '4': [2770.83, 3311.38],
          '5': [2951.92, 3527.77],
          '6': [3133.01, 3895.49],
          '7': [3404.67, 4150.24],
          '8': [3766.86, 4591.8],
          '9': [4137.77, 5416.74],
          '10': [4438.72, 6018.62],
          '11': [4739.66, 6770.91],
        },
      },
    },
    {
      from: '2027-10-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '4': [2826.25, 3377.61],
          '5': [3010.96, 3598.33],
          '6': [3195.67, 3973.4],
          '7': [3472.76, 4233.24],
          '8': [3842.2, 4683.63],
          '9': [4220.53, 5525.08],
          '10': [4527.5, 6138.99],
          '11': [4834.46, 6906.33],
        },
      },
    },
  ],
  vergoedingen: [],
};
