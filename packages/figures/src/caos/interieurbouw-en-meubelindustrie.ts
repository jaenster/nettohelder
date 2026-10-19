import type { Cao } from '../types.js';

/**
 * CAO Interieurbouw en Meubelindustrie 2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Loontabellen CAO Interieurbouw en Meubelindustrie per 1 januari 2026 (CBM)
 * https://cbm.nl?file=9000&m=1763634154&action=file.download
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Schaal A heeft Trede 0 en Trede 1 beide 2432,99 (gelijk) - dit staat zo in de officiele tabel
 *   - Irregulier grid: schaal A loopt slechts t/m Trede 3, C t/m Trede 4, B en D t/m Trede 6, E/F/G t/m Trede 7 - lege cellen niet ingevuld
 *   - pensioenfondsId 'generiek' gebruikt omdat het sectorfonds Pensioenfonds Meubelindustrie en Meubileringsbedrijven (Oak Pension) niet in de toegestane sluglijst staat
 *   - eindejaarsuitkering op 0 gezet: geen 13e maand / eindejaarsuitkering aangetroffen in deze CAO - controleren
 *   - of er per 1 juli 2026 (na afloop huidige CAO) een nieuwe loongebouw/verhoging komt (CNV bericht 'Nieuw loongebouw 2026') - valt buiten huidige gepubliceerde tabel
 *
 * Excluded: jeugdschalen 16-20 jaar; WML/minimumtoetsloon-kolom; loonschaal B1 (aanloop/instroomschaal); eenmalige uitkering EUR 650 (1 nov 2025); reiskostenvergoeding (max 40 km enkele reis per 1 jan 2026); alle toeslagen (overwerk, ploegen, etc.)
 */
export const caoInterieurbouwEnMeubelindustrie2026: Cao = {
  id: 'interieurbouw-en-meubelindustrie',
  name: "CAO Interieurbouw en Meubelindustrie 2026",
  year: 2026,
  effectiveNote: "Maandbedragen per 1 januari 2026, inclusief de collectieve loonsverhoging van 2% (CAO 2025-2026, looptijd t/m 30 juni 2026). Bedragen zijn brutomaandbedragen bij de normale arbeidsduur van 37,5 uur per week (7,5 uur/dag). Vakantietoeslag per 1 jan 2026 verhoogd naar 8,33%. Geen verdere aangekondigde collectieve verhoging binnen 2026 (de 2% per 1 jan is de enige 2026-trede; CAO loopt af op 30 juni 2026). UITGESLOTEN: jeugdschalen (16-20 jaar), de WML/minimumtoetsloon-kolom, loonschaal B1 (instroom/aanloop), de eenmalige uitkering van EUR 650 (1 nov 2025), reiskostenvergoeding en alle toeslagen.",
  sourceUrl: "https://cbm.nl/nieuws/1914-cao-loonschalen-per-1-januari-2026",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 37.5,
    schalen: {
      'A': [2432.99, 2432.99, 2514.47, 2600.32],
      'B': [2432.99, 2474.43, 2559, 2643.52, 2728, 2812.57, 2912.62],
      'C': [2433.9, 2513.75, 2593.45, 2673.26, 2753.01],
      'D': [2540.41, 2624.25, 2708.05, 2791.88, 2875.68, 2959.53, 3043.37],
      'E': [2665.76, 2752.08, 2838.41, 2924.68, 3010.96, 3097.28, 3183.55, 3269.89],
      'F': [2849.36, 2946.34, 3043.22, 3140.25, 3237.18, 3334.11, 3431.05, 3528.07],
      'G': [3089.25, 3192.75, 3296.25, 3399.76, 3503.26, 3606.75, 3710.31, 3813.81],
    },
  },
  vergoedingen: [],
};
