import type { Cao } from '../types.js';

/**
 * Cao Ricardo Nederland B.V. en Ricardo Certification B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Ricardo Nederland B.V. en Ricardo Certification B.V.
 * https://www.fnv.nl/getmedia/2d85248c-4482-4054-a45c-7a7e9a3c8ccd/1752-ricardo-nederland-en-certification-cao-01-01-2026-tm-31-12-2027-v30032026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoRicardoNederland2026: Cao = {
  id: 'ricardo-nederland',
  name: "Cao Ricardo Nederland B.V. en Ricardo Certification B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Looptijd 1-1-2026 tot 1-1-2028 Jaarlijkse indexatie per 1 januari op basis van de CPI van oktober van het voorgaande jaar (door de werkgever bepaald); voor 2026 is dit 3,1%. De indexatie per 1-1-2027 is nog niet bekend Decemberuitkering: reservering van 3% van het bruto maandsalaris; vakantietoeslag: reservering van 8,33% van het bruto maandsalaris Salaristabel per 1-1-2026 geeft per salarisgroep alleen begin- en eindbedrag (per 36 contracturen); de groepsnummers zijn in de pdf niet goed leesbaar, daarom niet opgenomen Daarnaast individuele salarisaanpassing per januari afhankelijk van beoordeling en schaalpositie Pensioen bij Pensioenfonds Rail & Openbaar Vervoer: totale premie 26,6% van het pensioengevend inkomen, waarvan 1/3 door de werknemer (ingehouden boven de franchise); exacte werknemerspercentage en franchise niet in de cao, daarom niet opgenomen Salaristabel per 1-1-2026 geeft alleen begin- en eindbedrag per schaal (56-63) bij 36 uur; opgenomen als [min, max]",
  sourceUrl: "https://www.fnv.nl/getmedia/2d85248c-4482-4054-a45c-7a7e9a3c8ccd/1752-ricardo-nederland-en-certification-cao-01-01-2026-tm-31-12-2027-v30032026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.03,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '56': [2316, 3724],
      '57': [2421, 4001],
      '58': [2776, 4593],
      '59': [3190, 5282],
      '60': [3701, 6134],
      '61': [4281, 7101],
      '62': [5307, 8810],
      '63': [6427, 10678],
    },
  },
  vergoedingen: [],
};
