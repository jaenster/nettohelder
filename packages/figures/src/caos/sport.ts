import type { Cao } from '../types.js';

/**
 * CAO Sport 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: CAO Sport
 * https://www.fnv.nl/getmedia/6d2e3e86-3798-4bef-ac9b-8d722a62df01/341-sport-cao-1-1-2026-tm-31-12-2027-v17122025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-01-01 (gedeeld door +2,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *
 * Excluded: none stated
 */
export const caoSport2026: Cao = {
  id: 'sport',
  name: "CAO Sport",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2027-01-01. Let op: Eindejaarsuitkering december 2026: 2,1% en december 2027: 2,4% van het jaarsalaris inclusief vakantiegeld (yearEndBonusPercentage = 2027-waarde), plus vaste component van € 900 (naar rato, als eenmalige uitkering opgenomen); niet voor werknemers die al een 13e maand ontvangen Voltijd arbeidsduur is 1930 uur per jaar (jaarurensystematiek) Salarisschalen kennen alleen een aanvangs- en eindsalaris (geen treden); scale per 1-1-2027 bevat deze als twee treden. Jaarlijkse periodiek van 2,5% bij normaal functioneren; aanvangssalaris nooit lager dan WML Vakantietoeslag kent een minimumbedrag bij voltijd dienstverband Pensioen PFZW: cao bepaalt 50/50-verdeling; werknemer 12,95% van (salaris - franchise) afgeleid uit PFZW-premie 2026 van 25,9% Aparte salarisschalen voor KNVB (bijlage II) niet opgenomen",
  sourceUrl: "https://www.fnv.nl/getmedia/6d2e3e86-3798-4bef-ac9b-8d722a62df01/341-sport-cao-1-1-2026-tm-31-12-2027-v17122025.pdf?ext=.pdf",
  pensioenfondsId: 'pfzw',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.024,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2511.22, 2511.22],
      '2': [2511.22, 2637.07],
      '3': [2511.22, 2997.07],
      '4': [2511.22, 3255.61],
      '5': [2529.76, 3509.27],
      '6': [2701.46, 3787.32],
      '7': [2887.8, 4081.95],
      '8': [3177.56, 4541.46],
      '9': [3537.56, 5102.44],
      '10': [3909.27, 5732.68],
      '11': [4497.56, 6394.15],
      '12': [4918.05, 6900.49],
      '13': [5560, 7721.95],
      '14': [6397.07, 9076.1],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2574, 2574],
          '2': [2574, 2703],
          '3': [2574, 3072],
          '4': [2574, 3337],
          '5': [2593, 3597],
          '6': [2769, 3882],
          '7': [2960, 4184],
          '8': [3257, 4655],
          '9': [3626, 5230],
          '10': [4007, 5876],
          '11': [4610, 6554],
          '12': [5041, 7073],
          '13': [5699, 7915],
          '14': [6557, 9303],
        },
      },
    },
  ],
  vergoedingen: [],
};
