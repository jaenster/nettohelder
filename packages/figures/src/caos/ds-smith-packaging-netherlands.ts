import type { Cao } from '../types.js';

/**
 * Cao DS Smith Packaging Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao DS Smith Packaging Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/2731_01-01-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDsSmithPackagingNetherlands2026: Cao = {
  id: 'ds-smith-packaging-netherlands',
  name: "Cao DS Smith Packaging Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Geldt ook voor DS Smith Packaging Tilburg, DS Smith Toppositie en DS Smith Recycling Benelux. ATV-toeslag: wie gemiddeld minstens 38 uur per week werkt krijgt in november 3% van 12 maal het inkomen per 1 november. Vakantietoeslag 8% met een minimum (laatst genoemd: € 2.794,39 per 1 mei 2023). Pensioen: eigen regeling (vrijstelling PGB); werkgeverspremie 22,4%, verdeling uitgangspunt 2/3 werkgever en 1/3 werknemer. De genoemde werknemerspercentages (8,33% van de pensioengrondslag plus 1,9% boven € 57.658) gelden volgens de cao tot en met 2023; actuele percentages niet gevonden. Franchise € 18.475 en maximum € 137.800 (2025). Daarnaast een participatieschaal (100-110% WML) en aanloopschalen van 80% en 90%.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2731_01-01-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2876, 2930, 2987, 3037, 3095, 3156],
      '2': [2953, 3013, 3068, 3129, 3193, 3254],
      '3': [3033, 3095, 3160, 3221, 3290, 3354],
      '4': [3133, 3196, 3265, 3337, 3386, 3454, 3527],
      '5': [3240, 3311, 3358, 3433, 3506, 3581, 3651],
      '6': [3345, 3419, 3494, 3574, 3645, 3719, 3790],
      '7': [3479, 3559, 3636, 3714, 3787, 3869, 3945, 4025],
      '8': [3621, 3700, 3782, 3867, 3946, 4032, 4117, 4196],
      '9': [3769, 3847, 3937, 4025, 4117, 4201, 4279, 4373],
      '10': [3937, 4032, 4121, 4211, 4301, 4388, 4482, 4568, 4663],
      '11': [4121, 4213, 4307, 4404, 4500, 4589, 4691, 4782, 4875],
      '12': [4307, 4406, 4511, 4608, 4707, 4809, 4907, 5007, 5107],
    },
  },
  vergoedingen: [],
};
