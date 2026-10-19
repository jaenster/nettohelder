import type { Cao } from '../types.js';

/**
 * Cao Koninklijke Euroma B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Koninklijke Euroma B.V.
 * https://www.cnv.nl/documents/5475/CAO-Euroma-2026-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoKoninklijkeEuroma2026: Cao = {
  id: 'koninklijke-euroma',
  name: "Cao Koninklijke Euroma B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Looptijd 1-1-2026 tot 1-1-2028; bij inflatie boven 4,5% in het tweede cao-jaar gaan partijen opnieuw in overleg Minimum uurloon € 15,50 na de verhoging per 1-1-2026 13e maand: 8,33% van het in het kalenderjaar verdiende salaris, in december Medewerkers in dagdienst die tot 2020 8,33% vakantietoeslag hadden, krijgen een persoonlijke toeslag van 0,33% van het maandsalaris Winstdelingsregeling: maximaal € 2.000 bruto per werknemer, afhankelijk van de winst; niet opgenomen Pensioenpremie voor 1/3 voor rekening van de werknemer; fonds en premiepercentage niet in de cao, daarom niet opgenomen Salarisschalen per 1-1-2026 overgenomen van de tabel-afbeelding in bijlage II (per maand, 40 uur); alleen aanvangs- en eindsalaris per schaal, als twee treden opgenomen. Groei jaarlijks per 1 januari 3% (schaal 1-3) of 1,75% (schaal 4-9) tot het eindsalaris. De cao bevat ook een tabel per 1-1-2027.",
  sourceUrl: "https://www.cnv.nl/documents/5475/CAO-Euroma-2026-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2588.77, 2932.04],
      '2': [2599.04, 2995.76],
      '3': [2656.61, 3073.88],
      '4': [2718.21, 3174.59],
      '5': [2788.15, 3302.03],
      '6': [2917.65, 3447.96],
      '7': [3051.26, 3715.19],
      '8': [3256.81, 4025.57],
      '9': [3524.02, 4500.39],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2666.43, 3020],
          '2': [2677.01, 3085.63],
          '3': [2736.31, 3166.1],
          '4': [2799.76, 3269.83],
          '5': [2871.79, 3401.09],
          '6': [3005.18, 3551.4],
          '7': [3142.8, 3826.65],
          '8': [3354.51, 4146.34],
          '9': [3629.74, 4635.4],
        },
      },
    },
  ],
  vergoedingen: [],
};
