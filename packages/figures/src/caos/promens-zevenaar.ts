import type { Cao } from '../types.js';

/**
 * Cao Promens Zevenaar B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Promens Zevenaar B.V.
 * https://cao-kijker.awvn.nl/bestanden/0660_01-10-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPromensZevenaar2026: Cao = {
  id: 'promens-zevenaar',
  name: "Cao Promens Zevenaar B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao 1 oktober 2025 t/m 31 december 2026 (cao-tekst); verhogingen van 2025 komen uit de vorige cao 2023-2025 Salarisschalen per 1-1-2026 met de posities Start, Groei, Norm en Top; doorgroei binnen de schaal is afhankelijk van beoordeling (0% tot 4%) Aanloopschaal voor werknemers zonder relevante ervaring: 90% van de startschaal (minimaal het wettelijk minimumloon), maximaal 1 jaar Vakantietoeslag 8% met een minimum van € 2.447,69 bruto in 2026 (21+, voltijd) Er wordt maandelijks een eindejaarsuitkering gereserveerd (uitbetaling in december); de cao noemt bij uitruil een 3% hoger loon, maar het percentage van de eindejaarsuitkering staat er niet expliciet, daarom niet opgenomen Normale arbeidsduur dagdienst 40 uur per week; 2- en 3-ploegendienst 37,5 uur, 4-ploegendienst 36 uur, 5-ploegendienst 33,6 uur Pensioen: cao-partijen zijn het oneens over de pensioenafspraak; werknemerspremie niet vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0660_01-10-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2549.68, 2549.68, 2549.68, 2598.25],
      '2': [2549.68, 2549.68, 2549.68, 2704.37],
      '3': [2549.68, 2549.68, 2619.22, 2850.4],
      '4': [2549.68, 2607.69, 2863.27, 3118.15],
      '5': [2612.45, 2865.96, 3149.91, 3433.19],
      '6': [2792.96, 3214.12, 3536.62, 3859.05],
      '7': [3026.19, 3600.82, 3966.55, 4331.62],
    },
  },
  vergoedingen: [],
};
