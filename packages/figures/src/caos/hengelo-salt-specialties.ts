import type { Cao } from '../types.js';

/**
 * Cao Hengelo Salt Specialties 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Hengelo Salt Specialties
 * https://www.cnv.nl/industrie/chemie-en-energie/cao-hengelo-salt-specialties/nieuws/onderhandelingsresultaat-hengelo-salt-specialties-is-goedgekeurd-door-de-leden-2025-07-11/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-04-01 verhoogd met +€ 100/mnd per 2025-10-01
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHengeloSaltSpecialties2026: Cao = {
  id: 'hengelo-salt-specialties',
  name: "Cao Hengelo Salt Specialties",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-06-30; loontabel per 2025-04-01. Let op: Onderhandelingsresultaat juni 2025, door de leden goedgekeurd (CNV, 11 juli 2025); looptijd 12 maanden. Begin- en einddatum zijn afgeleid uit het einde van de vorige cao (30-6-2025), niet letterlijk gevonden Per 1-10-2025 jaarsalarissen en schalen structureel + € 1.200 bruto per jaar (€ 100 per maand); per 1-4-2026 + 2% Eindejaarsuitkering ter grootte van het maandinkomen van december (cao-tekst 2024-2025), als 8,33% opgenomen Vakantietoeslag 8% en arbeidsduur 40 uur (volcontinu 33,6 uur) uit de cao-tekst 2024-2025 Salarisschalen per 1-4-2025 (incl. 2%) uit bijlage I van de cao 2024-2025 (https://www.cnv.nl/documents/4528/Hengelo_Salt_Specialties_2024-2025_def_1.pdf), maandbedragen in hele euro's; treden = minimum, 90%- en 100%-niveau. De jaarsalarissen zijn bepalend (maandbedragen kunnen door afronding afwijken). Groep A0 (minimumloon tot 120% minimumloon) niet opgenomen. Geen nieuwe cao na juni 2026 gevonden; pensioenpremie niet opgenomen",
  sourceUrl: "https://www.cnv.nl/industrie/chemie-en-energie/cao-hengelo-salt-specialties/nieuws/onderhandelingsresultaat-hengelo-salt-specialties-is-goedgekeurd-door-de-leden-2025-07-11/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2655, 2978, 3279],
      'B': [2681, 3073, 3384],
      'C': [2739, 3211, 3538],
      'D': [2821, 3357, 3700],
      'E': [2939, 3578, 3945],
      'F': [3085, 3857, 4255],
      'G': [3342, 4203, 4639],
      'H': [3625, 4579, 5057],
      'K': [4024, 5110, 5647],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2708.1, 3037.56, 3344.58],
          'B': [2734.62, 3134.46, 3451.68],
          'C': [2793.78, 3275.22, 3608.76],
          'D': [2877.42, 3424.14, 3774],
          'E': [2997.78, 3649.56, 4023.9],
          'F': [3146.7, 3934.14, 4340.1],
          'G': [3408.84, 4287.06, 4731.78],
          'H': [3697.5, 4670.58, 5158.14],
          'K': [4104.48, 5212.2, 5759.94],
        },
      },
    },
  ],
  vergoedingen: [],
};
