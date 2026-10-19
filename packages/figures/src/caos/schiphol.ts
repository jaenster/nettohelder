import type { Cao } from '../types.js';

/**
 * Cao Schiphol Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Schiphol Nederland B.V.
 * https://www.fnv.nl/getmedia/80064f71-1a57-4052-9eec-296591b025a9/1110-schiphol-nederland-cao-01-04-2023-tm-30-09-2024-v12042023.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSchiphol2026: Cao = {
  id: 'schiphol',
  name: "Cao Schiphol Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-10-01 t/m 2026-09-30; loontabel per 2026-01-01. Let op: Cao is op 30 september 2026 verlopen; onderhandelingen over een nieuwe cao zijn in oktober 2026 stopgezet (FNV-inzet 6% bij 12 maanden looptijd) Loonsverhoging na 30 september 2026 nog niet bekend Eenmalige uitkering van € 750 bruto (november 2024) valt buiten de periode vanaf 2025 en is niet opgenomen Geldt voor personeel van Schiphol Nederland B.V. (o.a. kantoorpersoneel, platformmedewerkers, Schiphol-brandweer); afhandelaars/bagage vallen onder andere cao's Vakantiegeldpercentage, eindejaarsuitkering en pensioenpremie niet geverifieerd; 8% is het wettelijk minimum Salaristabel per 1-1-2026 (Arbeidsvoorwaardenbundel 2024-2026, bijlage A): alleen begin- en eindbedrag per schaal (1-15), maandsalaris bij 36 uur, opgenomen als [min, max]",
  sourceUrl: "https://www.fnv.nl/getmedia/80064f71-1a57-4052-9eec-296591b025a9/1110-schiphol-nederland-cao-01-04-2023-tm-30-09-2024-v12042023.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2486.64, 3182.4],
      '2': [2645.76, 3380.52],
      '3': [2772.12, 3566.16],
      '4': [2904.72, 3764.28],
      '5': [3085.68, 4056],
      '6': [3325.92, 4332.12],
      '7': [3572.4, 4630.08],
      '8': [3889.08, 5016.96],
      '9': [4366.44, 5662.8],
      '10': [4747.08, 6280.56],
      '11': [4851.6, 6754.8],
      '12': [5230.68, 7257.12],
      '13': [5703.36, 7912.32],
      '14': [6121.44, 8603.4],
      '15': [7002.84, 9573.72],
    },
  },
  vergoedingen: [],
};
