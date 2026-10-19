import type { Cao } from '../types.js';

/**
 * Cao Waterbedrijven 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Waterbedrijven
 * https://www.cnv.nl/documents/5055/WWb_cao_-_versie_21_juli_2025_-_DEF.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-01-01 (gedeeld door +2,1%, +1,2%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoWaterbedrijven2026: Cao = {
  id: 'waterbedrijven',
  name: "Cao Waterbedrijven",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2027-06-30; loontabel per 2027-01-01. Let op: Vakantiegeld (8,2%) en eindejaarsuitkering (2,5%) worden maandelijks uitbetaald als onderdeel van het Flexibel Arbeidsvoorwaarden Budget (FAB); vakantiegeld wordt berekend over ten minste het maximum van schaal 5 FAB bevat daarnaast o.a. Duurzame Inzetbaarheidstoeslag 2,51%, bijzonder verlof 0,10% en diensttijdgratificatie 0,68% Per 1 januari 2026 is de FAB-toeslag 'vakantiedagen (13)' van 6,62% in het basissalaris opgenomen (niet als loonsverhoging opgenomen) Als de CPI-inflatie over 2026 (oktober-oktober) hoger is dan 4% wordt opnieuw overlegd over de verhoging per 1 januari 2027 Pensioen via ABP; werknemerspremie niet in de cao vermeld Salarisschalen (bijlage 1.1) kennen alleen minimum en maximum per groep (2/B t/m 13/M); scale bevat deze als twee treden. Functies zwaarder dan schaal 13: beloning in overleg",
  sourceUrl: "https://www.cnv.nl/documents/5055/WWb_cao_-_versie_21_juli_2025_-_DEF.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08199999999999999,
  eindejaarsuitkeringPct: 0.025,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '2': [2772.8, 2972.17],
      '3': [2772.8, 3208.32],
      '4': [2772.8, 3464.79],
      '5': [2828.93, 3651.58],
      '6': [3046.69, 3939.99],
      '7': [3260.58, 4227.43],
      '8': [3555.76, 4623.27],
      '9': [3695.13, 5120.73],
      '10': [4150.97, 5756.58],
      '11': [4681.34, 6498.9],
      '12': [5291.06, 7352.51],
      '13': [6278.24, 8732.62],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [2831.03, 3034.58],
          '3': [2831.03, 3275.69],
          '4': [2831.03, 3537.55],
          '5': [2888.34, 3728.26],
          '6': [3110.67, 4022.73],
          '7': [3329.05, 4316.21],
          '8': [3630.43, 4720.36],
          '9': [3772.73, 5228.26],
          '10': [4238.14, 5877.47],
          '11': [4779.64, 6635.38],
          '12': [5402.17, 7506.92],
          '13': [6410.08, 8916.01],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+1,2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [2865, 3071],
          '3': [2865, 3315],
          '4': [2865, 3580],
          '5': [2923, 3773],
          '6': [3148, 4071],
          '7': [3369, 4368],
          '8': [3674, 4777],
          '9': [3818, 5291],
          '10': [4289, 5948],
          '11': [4837, 6715],
          '12': [5467, 7597],
          '13': [6487, 9023],
        },
      },
    },
  ],
  vergoedingen: [],
};
