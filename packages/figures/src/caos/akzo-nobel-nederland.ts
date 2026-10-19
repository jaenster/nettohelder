import type { Cao } from '../types.js';

/**
 * Cao AkzoNobel Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao AkzoNobel Nederland
 * https://www.cnv.nl/industrie/chemie-en-energie/cao-akzonobel/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-05-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAkzoNobelNederland2026: Cao = {
  id: 'akzo-nobel-nederland',
  name: "Cao AkzoNobel Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2025-05-01. Let op: Cao 2026 (1-1-2026 t/m 31-12-2026) volgens vernieuwd eindbod van juni 2026, aangenomen door CNV-leden en door CNV ondertekend; FNV- en De Unie-leden stemden tegen Verhoging per 1-7-2026: G-schalen 3%; MM1/MM2 2,8%; MM3/MM4 0,5% plus eenmalig € 1.000 bruto. Hier is het G-percentage opgenomen In juli 2026 een eenmalige nabetaling over januari t/m juni 2026, afhankelijk van salaris; bedrag niet als vast bedrag op te nemen Verhoging per 1-5-2025: € 1.620 bruto per jaar (= € 1.500 + 8% vakantietoeslag), d.w.z. € 125 per maand; als maandbedrag opgenomen. Plus eenmalig € 125 bruto per maand over jan-apr 2025 Salarisschalen G2-G9 (cao 2025, per 1-5-2025) geven per groep minimum, 90%- en 100%-niveau; hier als drie treden opgenomen. Tabel 2026 (na 3%) niet gevonden Volcontinudienst: gemiddeld 33,6 uur per week; overige werknemers 40 uur 13e maand 8,33% van het jaarsalaris (uitbetaald in december); voor sommige Sales-medewerkers vervangen door Sales Force Incentives Pensioen bij Pensioenfonds APF: werknemerspremie 4,3% van de pensioengrondslag, franchise € 18.475 (stand 2025); cijfers 2026 niet gevonden, daarom niet opgenomen Aparte cao's voor AkzoNobel Coatings en Hoger Personeel (MM-schalen) delen Deel A met deze cao",
  sourceUrl: "https://www.cnv.nl/industrie/chemie-en-energie/cao-akzonobel/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'G2': [2524, 2805, 3117],
      'G3': [2535, 2894, 3216],
      'G4': [2560, 3005, 3339],
      'G5': [2628, 3141, 3490],
      'G6': [2700, 3288, 3653],
      'G7': [2798, 3519, 3910],
      'G8': [3077, 3873, 4303],
      'G9': [3440, 4365, 4850],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'G2': [2599.72, 2889.15, 3210.51],
          'G3': [2611.05, 2980.82, 3312.48],
          'G4': [2636.8, 3095.15, 3439.17],
          'G5': [2706.84, 3235.23, 3594.7],
          'G6': [2781, 3386.64, 3762.59],
          'G7': [2881.94, 3624.57, 4027.3],
          'G8': [3169.31, 3989.19, 4432.09],
          'G9': [3543.2, 4495.95, 4995.5],
        },
      },
    },
  ],
  vergoedingen: [],
};
