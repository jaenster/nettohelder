import type { Cao } from '../types.js';

/**
 * Cao Stichting Fokus Exploitatie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Stichting Fokus Exploitatie
 * https://www.fnv.nl/getmedia/bff3dd8c-056d-4e24-988f-bfb617e76016/1100-stichting-fokus-exploitatie-cao-01-01-2025-tm-30-06-2026-v04042025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoFokus2026: Cao = {
  id: 'fokus',
  name: "Cao Stichting Fokus Exploitatie",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-06-30; loontabel per 2026-01-01. Let op: Cao 1-1-2025 t/m 30-6-2026; onderhandelingen voor een nieuwe cao gestart in september 2026, loonbod nog niet bekend Verhoging per 1-4-2025 van 0,08% i.v.m. PAWW Salarisschalen 2026 (per 1-1-2026, incl. 2,5%) in hele euro's, schaal V t/m XIV met periodieken; er bestaan aparte schalen voor werknemers in een flexibel rooster (JUS), niet opgenomen Eindejaarsuitkering 7,5% van het bruto jaarsalaris inclusief vakantietoeslag (12 x maandsalaris x 1,08), hier omgerekend naar 8,1% van 12 maandsalarissen; uitbetaald in november Vakantietoeslag 8%, met een minimum op basis van salarisgroep V periodiek 6 Volledig dienstverband 1878 uur per jaar (gemiddeld 36 uur per week) Pensioen bij Pensioenfonds Zorg en Welzijn (PFZW); het werknemersdeel wordt jaarlijks door cao-partijen vastgesteld, percentage voor 2026 niet gevonden",
  sourceUrl: "https://www.fnv.nl/getmedia/bff3dd8c-056d-4e24-988f-bfb617e76016/1100-stichting-fokus-exploitatie-cao-01-01-2025-tm-30-06-2026-v04042025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.081,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'V': [2485, 2553, 2619, 2692, 2759, 2828, 2902, 2977, 3048, 3126, 3195, 3277, 3354],
      'VI': [2692, 2759, 2828, 2902, 2977, 3048, 3126, 3195, 3277, 3354, 3434, 3514, 3596],
      'VII': [2902, 2977, 3048, 3126, 3195, 3277, 3354, 3434, 3514, 3596, 3673, 3752, 3829, 3906],
      'VIII': [3277, 3397, 3514, 3632, 3752, 3870, 3989, 4104, 4220, 4341, 4465],
      'IX': [3752, 3906, 4069, 4220, 4381, 4538, 4700, 4854, 5011],
      'X': [4069, 4220, 4381, 4538, 4700, 4854, 5011, 5173, 5333, 5512, 5690],
      'XI': [4700, 4854, 5011, 5173, 5333, 5512, 5690, 5861, 6046, 6219, 6403],
      'XII': [5333, 5512, 5690, 5861, 6046, 6219, 6403, 6594, 6790, 6980, 7191],
      'XIII': [6046, 6219, 6403, 6594, 6790, 6980, 7191, 7425, 7657, 7894, 8143],
      'XIV': [6980, 7191, 7425, 7657, 7894, 8143, 8412, 8683, 8951, 9226, 9496],
    },
  },
  vergoedingen: [],
};
