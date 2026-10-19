import type { Cao } from '../types.js';

/**
 * Cao McCain Foods Holland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao McCain Foods Holland B.V.
 * https://cao-kijker.awvn.nl/bestanden/0877_01-10-2025%20tot%2001-10-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (hour) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoMccainFoods2026: Cao = {
  id: 'mccain-foods',
  name: "Cao McCain Foods Holland B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; loontabel per 2026-01-01. Let op: Geaccepteerd eindbod van 10 november 2025, looptijd 1-10-2025 t/m 30-9-2026: salarisschalen en feitelijke salarissen +3,25% per 1-1-2026 (CAO- en NCAO-populatie t/m functiegroep NCAO 13); minimumvakantietoeslag ook +3,25% Verhoging 4% per 1-1-2025 uit de vorige cao (AWVN-samenvatting) Normale arbeidsduur dagdienst en 2-/3-ploegendienst 40 uur per week; ploegendiensten met 36 of 33,6 uur gemiddeld Pensioen bij DNA (Algemeen Pensioenfonds): bruto premie 19% van de salarissom; werknemersdeel en franchise 2026 niet gevonden (franchise 2024 € 20.120, wordt bevroren tot de fiscaal minimale franchise) Schaal = bruto basis-uurloontabel CAO-populatie per 1-1-2026 (bijlage II/1, functiegroep 3 t/m 9, periodieken in halve stappen; groep 3 begint bij periodiek 2); NCAO-salarissen niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0877_01-10-2025%20tot%2001-10-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      '3': [14.87, 15.1, 15.22, 15.36, 15.49, 15.65, 15.82, 15.96, 16.1],
      '4': [14.98, 15.21, 15.36, 15.51, 15.69, 15.88, 16.06, 16.2, 16.37, 16.55, 16.72, 16.91, 17.06],
      '5': [15.6, 15.82, 16, 16.19, 16.41, 16.57, 16.8, 16.99, 17.2, 17.41, 17.57, 17.84, 18.03],
      '6': [16.18, 16.41, 16.65, 16.87, 17.06, 17.28, 17.53, 17.79, 17.99, 18.23, 18.4, 18.65, 18.83, 19.05, 19.33],
      '7': [17.04, 17.29, 17.54, 17.82, 18.03, 18.29, 18.53, 18.76, 18.97, 19.25, 19.51, 19.67, 19.96, 20.14, 20.39, 20.67, 20.88],
      '8': [17.94, 18.22, 18.49, 18.74, 19, 19.33, 19.59, 19.85, 20.09, 20.36, 20.65, 20.93, 21.23, 21.5, 21.8, 22.04, 22.31, 22.62, 22.9],
      '9': [18.81, 19.12, 19.42, 19.65, 19.95, 20.25, 20.56, 20.82, 21.1, 21.39, 21.66, 22, 22.28, 22.58, 22.86, 23.15, 23.42, 23.73, 24.02, 24.32, 24.61],
    },
  },
  vergoedingen: [],
};
