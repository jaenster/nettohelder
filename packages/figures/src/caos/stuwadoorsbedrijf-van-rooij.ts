import type { Cao } from '../types.js';

/**
 * Cao Stuwadoorsbedrijf van Rooij B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Stuwadoorsbedrijf van Rooij B.V.
 * https://cao-kijker.awvn.nl/bestanden/3332_29-12-2025%20tot%2028-12-2026_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-12-29 (4weeks) uit de bron
 *   - Bron is een 4-wekentabel, omgerekend naar maand (×13/12)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoStuwadoorsbedrijfVanRooij2026: Cao = {
  id: 'stuwadoorsbedrijf-van-rooij',
  name: "Cao Stuwadoorsbedrijf van Rooij B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-12-29 t/m 2026-12-27; loontabel per 2025-12-29. Let op: Volledig dienstverband werknemersgroepen A en B: 144 uur per periode van 4 weken; groep K: 152 uur per 4 weken. Schaal = werknemersgroep B (vast bedrag per functie per 4 weken, geen leeftijdsonderscheid). Werknemersgroep A ontvangt het wettelijk minimumuurloon (21 jaar) plus € 0,50 per uur: € 2.190,24 per 4 weken per 1 januari 2026; de WML-verhoging per 1 juli 2026 gaat al in per 29 juni 2026. Werknemersgroep K wordt beloond volgens het loongebouw van Angrisa Group (niet in de cao). Geen collectieve pensioenregeling voor werknemersgroepen A en B. Structurele loonsverhogingen ten opzichte van de vorige cao zijn niet als percentage vermeld.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3332_29-12-2025%20tot%2028-12-2026_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      'Stuwadoor D1': [2383.33],
      'Stuwadoor D2': [2437.5],
      'Stuwadoor C': [2518.75],
      'Stuwadoor B': [2572.92],
      'Stuwadoor A': [2627.08],
    },
  },
  vergoedingen: [],
};
