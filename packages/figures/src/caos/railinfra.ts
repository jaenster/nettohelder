import type { Cao } from '../types.js';

/**
 * Cao Railinfrastructuur 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Railinfrastructuur
 * https://www.cnv.nl/documents/5688/Cao_Railinfrastructuur_2025-2026_MrGPUxB.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-08-01 (4weeks) uit de bron
 *   - Bron is een 4-wekentabel, omgerekend naar maand (×13/12)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRailinfra2026: Cao = {
  id: 'railinfra',
  name: "Cao Railinfrastructuur",
  year: 2026,
  effectiveNote: "Cao 2025-08-01 t/m 2026-12-31; loontabel per 2026-08-01. Let op: Verloning per 4 weken (13 periodes per jaar); verhogingen gelden per periode 8 2025, periode 1 2026 en periode 8 2026. De kalenderdata 1-8-2025, 1-1-2026 en 1-8-2026 zijn benaderingen. De tabel geeft per schaal alleen begin- en eindsalaris; opgeslagen als twee treden. Periodiek per schaal staat in de cao. C-schalen gelden voor personeel in dienst vóór periode 6 van 2005, N-schalen voor nieuw personeel. Minimumuurloon € 15,00 bruto vanaf periode 1 2026 voor 21 jaar en ouder. Werkweek 40 uur met 18 roostervrije dagen per jaar (niet-uitvoerend). Pensioen bij Pensioenfonds Rail & OV (niet verplichtgesteld); premieverdeling 2025: werknemer 9,43%. Premie en franchise voor 2026 niet gevonden. Bonusregeling voor groep N (prestatieafhankelijk) niet meegenomen. Partijen streven naar maandverloning per 1 januari 2027. Verhoging van 0,5% in 2026 valt in een 4-wekenperiode waarvan de kalenderdatum niet vaststaat; niet opgenomen",
  sourceUrl: "https://www.cnv.nl/documents/5688/Cao_Railinfrastructuur_2025-2026_MrGPUxB.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'C1': [2613, 3266.14],
      'C2': [2613, 3463.67],
      'C3': [2838.89, 3801.55],
      'C4': [3073.05, 4117.07],
      'C5': [3182.08, 4423.68],
      'C6': [3396.63, 4822.34],
      'C7': [3925.77, 5540.11],
      'C8': [4516.64, 6487.59],
      'N1': [2613, 2939.5],
      'N2': [2613, 3117.31],
      'N3': [2696.95, 3421.41],
      'N4': [2919.4, 3705.34],
      'N5': [3022.98, 3981.29],
      'N6': [3226.78, 4340.1],
      'N7': [3729.48, 4986.1],
      'N8': [4290.81, 5838.83],
    },
  },
  vergoedingen: [],
};
