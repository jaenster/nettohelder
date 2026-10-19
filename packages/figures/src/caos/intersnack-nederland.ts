import type { Cao } from '../types.js';

/**
 * Cao Intersnack Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Intersnack Nederland B.V.
 * https://www.cnv.nl/voeding/voeding/cao-intersnack-nederland/nieuws/resultaat-cao-onderhandelingen-intersnack-2026-3-loonsverhoging-voortzetting-rvu-zware-beroepen-2026-04-10/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-05-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-03-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoIntersnackNederland2026: Cao = {
  id: 'intersnack-nederland',
  name: "Cao Intersnack Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-03-01 t/m 2027-02-28; loontabel per 2025-05-01. Let op: Onderhandelingsresultaat van 9 april 2026; na een eerste afwijzing alsnog door de leden goedgekeurd (mei 2026) Roosters van 40 uur per week, gemiddeld op jaarbasis 38 uur per week (bron: cao 2025-2026) Vakantietoeslag 8% van het in het vakantietoeslagjaar betaalde maandinkomen (12x), met een minimum RVU-regeling verlengd; 80/90/100-regeling voorafgaand aan RVU mogelijk Loongebouw per 1-5-2025 (incl. 4,2% verhoging uit de cao 2025-2026, bijlage II; https://www.cnv.nl/documents/5134/Cao_Intersnack_2025-2026.pdf) overgenomen van de tabel-afbeelding; per maand, alleen minimum en maximum per schaal, als twee treden opgenomen (schaal 1 heeft één bedrag). Stapgrootte per schaal van € 28,38 (schaal 1) tot € 75,94 (schaal 9). Nieuwe tabel per 1-3-2026 niet gevonden. Pensioenpremie niet gevonden",
  sourceUrl: "https://www.cnv.nl/voeding/voeding/cao-intersnack-nederland/nieuws/resultaat-cao-onderhandelingen-intersnack-2026-3-loonsverhoging-voortzetting-rvu-zware-beroepen-2026-04-10/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2549.19],
      '2': [2549.19, 2663.6],
      '3': [2578.57, 2838.36],
      '4': [2670.84, 3009.56],
      '5': [2753.28, 3252.2],
      '6': [2870.35, 3428.47],
      '7': [3001.31, 3716.28],
      '8': [3213.31, 4111.8],
      '9': [3484.69, 4623.62],
    },
  },
  periods: [
    {
      from: '2026-03-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38,
        schalen: {
          '1': [2625.67],
          '2': [2625.67, 2743.51],
          '3': [2655.93, 2923.51],
          '4': [2750.97, 3099.85],
          '5': [2835.88, 3349.77],
          '6': [2956.46, 3531.32],
          '7': [3091.35, 3827.77],
          '8': [3309.71, 4235.15],
          '9': [3589.23, 4762.33],
        },
      },
    },
  ],
  vergoedingen: [],
};
