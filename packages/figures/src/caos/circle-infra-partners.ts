import type { Cao } from '../types.js';

/**
 * Cao Circle Infra Partners B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Circle Infra Partners B.V.
 * https://cao-kijker.awvn.nl/bestanden/4389_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoCircleInfraPartners2026: Cao = {
  id: 'circle-infra-partners',
  name: "Cao Circle Infra Partners B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Gebaseerd op de cao-tekst 2026 en het eindbod cao 2025 (14 april 2025) Verhoging 2,75% per 1-1-2026 geldt voor de salarisschalen C32 tot en met C41; 3,25% per 1-1-2025 gold voor alle salarisschalen Resultaatbeloning (art. 2.9) bestaat, hoogte niet bekend Jaaruitkering van 2 maandinkomens (vakantietoeslag plus eindejaarsuitkering), minimaal € 7.268,94 per 1-1-2026; hier alleen 8% vakantiegeld opgenomen. Pensioenpremie niet gevonden Looptijd 1 januari 2026 tot en met 31 december 2026 Salarisschalen C32-C41 hebben alleen een minimum en maximum (schaal = [min, max]); groei binnen de schaal 2% per jaar. Salarissen C42-C44 stelt de werkgever vast",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4389_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'C32': [2616, 2984],
      'C33': [2723, 3108],
      'C34': [2908, 3351],
      'C35': [3186, 3718],
      'C36': [3533, 4174],
      'C37': [3927, 4721],
      'C38': [4339, 5319],
      'C39': [4850, 6060],
      'C40': [5447, 6933],
      'C41': [6118, 7950],
    },
  },
  vergoedingen: [],
};
