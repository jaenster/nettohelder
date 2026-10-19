import type { Cao } from '../types.js';

/**
 * Cao Actor Partner in besturen 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Actor Partner in besturen
 * https://cao-kijker.awvn.nl/bestanden/3329_01-01-2026%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoActorPartnerInBesturen2026: Cao = {
  id: 'actor-partner-in-besturen',
  name: "Cao Actor Partner in besturen",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao 1-1-2026 t/m 31-12-2026 (FNV); salarissen per 1-1-2026 +4,25%. De jaarlijkse indexatie is het gemiddelde van de loonsverhogingen in de cao's Glastuinbouw, Hoveniers, Groen, Grond en Infrastructuur en Open Teelten Salarisschalen 3 t/m 13 kennen alleen een minimum en maximum (per maand, fulltime 40 uur); hier weergegeven als twee treden. Individuele salarisverhoging binnen de schaal Eindejaarsuitkering (13e maand) 8,33% van het jaarsalaris in december; daarnaast een resultaatafhankelijke eindejaarsgratificatie van maximaal 4% (besluit directeur) Vakantietoeslag 8% van het in het jaar ontvangen salaris Pensioen bij BPL Pensioen: eigen bijdrage basisregeling 7,31% van de grondslag in 2026 (franchise niet in de cao vermeld); excedentregeling eigen bijdrage 7,4%",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3329_01-01-2026%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '3': [2633.95, 3382.92],
      '4': [2899.88, 3726.58],
      '5': [3193.34, 4106.6],
      '6': [3441.39, 4527.99],
      '7': [3643.76, 4992.14],
      '8': [3853.83, 5505.23],
      '9': [4246.47, 6065.99],
      '10': [4677.61, 6682.94],
      '11': [5334.21, 7621.05],
      '12': [6088.7, 8698.09],
      '13': [6950.97, 9929.43],
    },
  },
  vergoedingen: [],
};
