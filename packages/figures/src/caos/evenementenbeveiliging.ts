import type { Cao } from '../types.js';

/**
 * Cao Evenementen- en Horecabeveiligingsbranche 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Evenementen- en Horecabeveiligingsbranche
 * https://d1p3jfjj2ztqji.cloudfront.net/wp-content/uploads/2025/12/16121903/CAO-EHB-2024-2027-januari-2026-.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (hour) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoEvenementenbeveiliging2026: Cao = {
  id: 'evenementenbeveiliging',
  name: "Cao Evenementen- en Horecabeveiligingsbranche",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Uurlonen 21 jaar en ouder; treden: één trede omhoog per 1.000 gewerkte uren (max. één per kalenderjaar, na minimaal 12 maanden in dienst) Aanvangsloon schaal A/B1/B2 is 102%/104%/107% van het wettelijk minimumuurloon; schaal C per 1 januari 2026 117%. Loonstijging voor schaal C wordt jaarlijks opnieuw afgesproken Per 1 januari 2025 is een nieuw loongebouw met treden ingevoerd; geen eenduidig structureel percentage voor 2025 vermeld Loonsverhoging per 1 januari 2027 nog niet in de cao-tekst (versie januari 2026) opgenomen Oproepkrachten met nulurencontract krijgen vakantie-uren als all-in toeslag: 10,39% in 2026 en 10,35% in 2027 Pensioen via Bedrijfstakpensioenfonds Particuliere Beveiliging; premie werknemer niet in de cao vermeld",
  sourceUrl: "https://d1p3jfjj2ztqji.cloudfront.net/wp-content/uploads/2025/12/16121903/CAO-EHB-2024-2027-januari-2026-.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      'A': [15, 15.3, 15.59, 15.89, 16.18, 16.48, 16.77, 17.06, 17.36, 17.65, 17.95],
      'B1': [15.3, 15.59, 15.89, 16.18, 16.48, 16.77, 17.06, 17.36, 17.65, 17.95, 18.24],
      'B2': [15.74, 16.03, 16.33, 16.62, 16.92, 17.21, 17.5, 17.8, 18.09, 18.39, 18.68],
      'C': [17.21, 17.5, 17.8, 18.09, 18.39, 18.68, 18.98, 19.27, 19.56, 19.86, 20.15],
    },
  },
  vergoedingen: [],
};
