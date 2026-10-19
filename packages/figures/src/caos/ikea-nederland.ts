import type { Cao } from '../types.js';

/**
 * Cao IKEA Nederland B.V. en Inter IKEA Systems B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao IKEA Nederland B.V. en Inter IKEA Systems B.V.
 * https://cao-kijker.awvn.nl/bestanden/0559_01-01-2026%20tot%2001-01-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (hour) uit de bron
 *
 * Excluded: none stated
 */
export const caoIkeaNederland2026: Cao = {
  id: 'ikea-nederland',
  name: "Cao IKEA Nederland B.V. en Inter IKEA Systems B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Onderhandelingsresultaat 21 januari 2026, looptijd 1-1-2026 t/m 31-12-2026 Salaristabel per 1-1-2026 geeft alleen een minimum- en maximumuurloon per schaal (18 jaar en ouder), geen treden; schalen 43 en 44 samengevoegd Daarnaast individuele verhoging per 1-1-2026 afhankelijk van beoordeling en zone (2,1% / 1,4% / 1,05% bij een goede beoordeling, dubbel bij uitstekend) Verhoging 2,4% per 1-4-2025 en een eenmalige uitkering (bedrag niet gevonden) uit de AWVN-samenvatting van de cao 2025 Voltijd is gemiddeld 36 uur per week; keuze voor 38 of 40 uur mogelijk Pensioen STIP: totale premie 30,4% van de pensioengrondslag, werknemer betaalt 25% daarvan (= 7,6%); franchise en maximum op niveau 2026",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0559_01-01-2026%20tot%2001-01-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 36,
    schalen: {
      '43': [15.25, 18.89],
      '44': [15.25, 18.89],
      '45': [16.18, 20.74],
      '46': [17.31, 22.77],
      '47': [17.31, 22.77],
      '48': [18.64, 25.2],
      '49': [20.46, 28.82],
      '50': [20.46, 28.82],
      '51': [22.77, 33.47],
      '52': [25.78, 38.45],
      '53': [27.95, 42.34],
      '54': [27.95, 42.34],
      '55': [31.81, 48.18],
      '56': [31.81, 48.18],
    },
  },
  vergoedingen: [],
};
