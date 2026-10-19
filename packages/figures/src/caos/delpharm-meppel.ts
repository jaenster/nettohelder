import type { Cao } from '../types.js';

/**
 * Cao Delpharm Meppel B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Delpharm Meppel B.V.
 * https://www.fnv.nl/getmedia/86c31892-7047-49ce-82d0-3a9d47b139b3/15-delpharm-meppel-cao-01-07-2025-tm-30-06-2026-v15122025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-07-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDelpharmMeppel2026: Cao = {
  id: 'delpharm-meppel',
  name: "Cao Delpharm Meppel B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-06-30; loontabel per 2025-07-01. Let op: Cao 1-7-2025 t/m 30-6-2026 (FNV en CNV). Over een nieuwe cao vanaf 1-7-2026 lag in september/oktober 2026 een eindbod van de werkgever dat de bonden negatief aan de leden voorlegden; uitkomst onbekend Salarisschalen 1 t/m 11 (Global Grade 6-16) per 1-7-2025 in hele euro's, naar schaalpositie 70%, 100%, 105%, 110% en 120%; posities hier als treden. Voor schalen 1-3 is het 70%-punt het wettelijk minimumloon (niet opgenomen). Schalen 12-13 kennen een apart beloningsbeleid Normale arbeidsduur maximaal 40 uur per week; 4-ploegen 36 uur, volcontinu 33,6 uur gemiddeld Vakantietoeslag 8% van het feitelijk genoten salaris (juni t/m mei), uitbetaald op 25 mei; minimumvakantietoeslag = 80% van het 100%-punt van schaal 5 Dertiende maand 8,33% van salaris, meeruren- en overwerkbeloning, uitbetaald in december Pensioen bij Stichting Algemeen Pensioenfonds Stap; vaste premie 25,4% van de loonsom, in 2025 gelijk aan 34,2% van de pensioengrondslag, waarvan werknemers 30% betalen (2026-percentage en franchise niet vermeld)",
  sourceUrl: "https://www.fnv.nl/getmedia/86c31892-7047-49ce-82d0-3a9d47b139b3/15-delpharm-meppel-cao-01-07-2025-tm-30-06-2026-v15122025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [3036, 3188, 3340, 3643],
      '2': [3161, 3319, 3476, 3973],
      '3': [3348, 3517, 3684, 4018],
      '4': [2618, 3740, 3929, 4115, 4489],
      '5': [2904, 4147, 4355, 4563, 4976],
      '6': [3218, 4596, 4826, 5056, 5516],
      '7': [3528, 5042, 5293, 5545, 6049],
      '8': [3866, 5523, 5799, 6075, 6628],
      '9': [4305, 6151, 6458, 6765, 7381],
      '10': [4962, 7089, 7443, 7798, 8507],
      '11': [6033, 8618, 9049, 9479, 10341],
    },
  },
  vergoedingen: [],
};
