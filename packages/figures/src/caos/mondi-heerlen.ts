import type { Cao } from '../types.js';

/**
 * Cao Mondi Heerlen B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Mondi Heerlen B.V.
 * https://cao-kijker.awvn.nl/bestanden/1640_01-10-2025%20tot%2001-10-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoMondiHeerlen2026: Cao = {
  id: 'mondi-heerlen',
  name: "Cao Mondi Heerlen B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; loontabel per 2025-10-01. Let op: Eenmalige uitkering EUR 750 bruto (parttime naar rato), uitbetaald met het salaris van december 2025; exacte datum niet bekend, daarom niet in oneOffPayments Salarisschalen geven alleen minimum en maximum per schaal (opgenomen als [min, max]); schalen 1-10 op basis van 36 uur per week, schalen 11-13 op basis van 40 uur per week Aparte schalen en promotiesystematiek voor ABC-operators in ploegendienst (bijlage 3), niet opgenomen Minimum uurloon EUR 16,00 Vakantietoeslag 8,33%, uitbetaald in mei Dagdienst: 40 uur per week minus 26 ADV-dagen = gemiddeld 36 uur; 5-ploegendienst 33,6 uur Pensioen: middelloonregeling bij Pensioenfonds Grafische Bedrijven; premie 72,2% werkgever / 27,8% werknemer, totale premie en franchise niet in de cao, daarom geen pension-veld Cao loopt af op 30-9-2026; nieuw akkoord nog niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1640_01-10-2025%20tot%2001-10-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2416.45, 2750.39],
      '2': [2463.66, 2932.59],
      '3': [2519.98, 3010.22],
      '4': [2588.48, 3084.83],
      '5': [2707.25, 3174.65],
      '6': [2826, 3278.16],
      '7': [2966.05, 3395.41],
      '8': [3110.7, 3724.6],
      '9': [3256.86, 3986.26],
      '10': [3439.55, 4327.76],
      '11': [4440.49, 5151.93],
      '12': [5151.93, 6008.08],
      '13': [6008.08, 6909.23],
    },
  },
  vergoedingen: [],
};
