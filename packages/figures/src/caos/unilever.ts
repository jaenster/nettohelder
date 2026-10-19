import type { Cao } from '../types.js';

/**
 * Cao Unilever Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Unilever Nederland
 * https://www.cnv.nl/voeding/voeding/cao-unilever/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoUnilever2026: Cao = {
  id: 'unilever',
  name: "Cao Unilever Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-09-30; loontabel per 2025-04-01. Let op: Partijen: Unilever met FNV en CNV. Looptijd en verhogingen 2026-2027 (3% per 1-4-2026, 1% per 1-1-2027) volgens CNV; de cao-tekst 2026-2027 met nieuwe salarisschalen is niet ingezien Salarisschalen A t/m H per 1-4-2025 (cao 2025-2026) kennen alleen een minimum en maximum per klasse; opgeslagen als twee treden. Salarisgroei binnen de schaal gaat via individuele beoordeling Assistant managers (klasse 1K t/m 1M) hebben jaarbedragen; niet opgenomen Vakantietoeslag 8% van het jaarsalaris, maximaal 8% van driemaal het wettelijk minimumloon Prestatiebonus (VPA): on-target 6% x beoordelingsscore (0-200%), uitbetaald in maart; niet als vaste eindejaarsuitkering opgenomen Pensioen bij Stichting Unilever Pensioenfonds Forward; werknemerspremie niet gevonden",
  sourceUrl: "https://www.cnv.nl/voeding/voeding/cao-unilever/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2555, 3178],
      'B': [2624, 3316],
      'C': [2689, 3483],
      'D': [2766, 3667],
      'E': [2887, 3855],
      'F': [3037, 4094],
      'G': [3262, 4498],
      'H': [3487, 5060],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2631.65, 3273.34],
          'B': [2702.72, 3415.48],
          'C': [2769.67, 3587.49],
          'D': [2848.98, 3777.01],
          'E': [2973.61, 3970.65],
          'F': [3128.11, 4216.82],
          'G': [3359.86, 4632.94],
          'H': [3591.61, 5211.8],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A': [2657.97, 3306.07],
          'B': [2729.75, 3449.63],
          'C': [2797.37, 3623.36],
          'D': [2877.47, 3814.78],
          'E': [3003.35, 4010.36],
          'F': [3159.39, 4258.99],
          'G': [3393.46, 4679.27],
          'H': [3627.53, 5263.92],
        },
      },
    },
  ],
  vergoedingen: [],
};
