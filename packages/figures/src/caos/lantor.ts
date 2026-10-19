import type { Cao } from '../types.js';

/**
 * Cao Lantor B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Lantor B.V.
 * https://www.cnv.nl/documents/6169/260908_-_Cao_Lantor_BV_2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoLantor2026: Cao = {
  id: 'lantor',
  name: "Cao Lantor B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Salarisschalen en salarissen per 1-1-2026 +3% (met terugwerkende kracht); cao en sociaal plan ondertekend in september 2026 Wie 5 jaar of langer ononderbroken in dienst is, heeft recht op minimaal € 18 bruto per uur Vakantietoeslag 8% van 12 x het maandinkomen van april; minimaal € 2.612 per jaar voor vakvolwassen werknemers (2026) Er geldt een vaste eindejaarsuitkering en een bonusregeling (regelingenboek); hoogte niet gevonden Dagdienst en 2-ploegendienst 36 uur per week; andere ploegenroosters 35 of 33,6 uur Pensioen via BPF MITT; maximum pensioengevend loon € 137.800 in 2026; eigen bijdrage wordt door het fonds vastgesteld Salarisschalen per 1-1-2026 overgenomen van de tabel-afbeeldingen in bijlage III (cao-personeel, schaal 1-9) en bijlage VIIA (hoger personeel, schaal 10-13); per maand in hele euro's. Alleen aanvangssalaris en schaalmaximum per schaal, als twee treden opgenomen; groei per 1 januari afhankelijk van beoordeling. Het persoonlijk maximum (bijv. schaal 1 € 3.021, schaal 13 € 11.726) is niet opgenomen.",
  sourceUrl: "https://www.cnv.nl/documents/6169/260908_-_Cao_Lantor_BV_2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2587, 2786],
      '2': [2680, 2940],
      '3': [2757, 3052],
      '4': [2839, 3221],
      '5': [2951, 3414],
      '6': [3097, 3613],
      '7': [3310, 4003],
      '8': [3699, 4604],
      '9': [4164, 5233],
      '10': [4744, 6043],
      '11': [5391, 7097],
      '12': [6382, 8950],
      '13': [7503, 10817],
    },
  },
  vergoedingen: [],
};
