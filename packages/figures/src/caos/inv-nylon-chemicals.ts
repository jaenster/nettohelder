import type { Cao } from '../types.js';

/**
 * Cao INV Nylon Chemicals Netherlands B.V. (INVISTA Rozenburg) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao INV Nylon Chemicals Netherlands B.V. (INVISTA Rozenburg)
 * https://cao-kijker.awvn.nl/bestanden/1238_01-07-2025%20tot%2001-07-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +3%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoInvNylonChemicals2026: Cao = {
  id: 'inv-nylon-chemicals',
  name: "Cao INV Nylon Chemicals Netherlands B.V. (INVISTA Rozenburg)",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2027-06-30; loontabel per 2026-07-01. Let op: Salaristabel kent alleen een minimum en maximum per schaal (geen treden); opgenomen als [min, max] Geen structurele verhoging in 2025; eenmalige uitkering van 4% van het basismaandsalaris van november 2025 x 12, uitbetaald met het salaris van december 2025 (niet als bedrag op te nemen) Individuele pay-for-performance verhogingen tot 3% per 1 januari 2025, 2026 en 2027 (niet collectief); niet opgenomen Dertiende maand: 1/12 van het jaarinkomen, uitbetaald in november Vakantietoeslag 8% met een minimum van € 2.397 per jaar (22 jaar en ouder) Dagdienst 8 uur per dag maandag t/m vrijdag met 18 atv-dagen; vijfploegendienst gemiddeld 33,6 uur (34,21 incl. inhaaluren), labrooster 33,84 uur Bijdrage bovenwettelijke zorgverzekering verhoogd van € 55 naar € 85 bruto per maand per 1 juli 2025 Pensioen via Stichting Pensioenfonds INV Nylon Chemicals / asr; werknemersbijdrage niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1238_01-07-2025%20tot%2001-07-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A3': [3261.99, 3792.14],
      'A4': [3331.71, 3962.4],
      'A5': [3460.59, 4292.6],
      'A6': [3596.5, 4727.01],
      'A7': [3800.36, 5262.13],
      'A8': [4062.49, 5897.94],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A3': [3359.85, 3905.9],
          'A4': [3431.66, 4081.27],
          'A5': [3564.41, 4421.38],
          'A6': [3704.4, 4868.82],
          'A7': [3914.37, 5419.99],
          'A8': [4184.36, 6074.88],
        },
      },
    },
  ],
  vergoedingen: [],
};
