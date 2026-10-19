import type { Cao } from '../types.js';

/**
 * Cao Huisartsen in Loondienst 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Huisartsen in Loondienst
 * https://www.lhv.nl/wp-content/uploads/2026/09/Salaristabel-Cao-Huisartsen-in-loondienst-2025-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-08-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-08-01 (gedeeld door +3,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-08-01, 2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHuisartsenLoondienst2026: Cao = {
  id: 'huisartsen-loondienst',
  name: "Cao Huisartsen in Loondienst",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2027-12-31; loontabel per 2026-08-01. Let op: Partijen: LAD (werknemers), LHV en InEen (werkgevers); cao begin september 2026 vastgesteld. Geldt voor huisartsen in loondienst (HD en praktijkhouder dienstverband PD), niet voor praktijkpersoneel (zie Cao Huisartsenzorg) Eenmalige uitkering in 2026 van 4,25% van twaalf keer het bruto maandsalaris van juli 2026 (naar rato bij indiensttreding tussen oktober 2025 en augustus 2026); niet als vast bedrag in te voeren Eindejaarsuitkering vanaf 2026 5,75% (structureel verhoogd met 0,75%-punt) Salaristabel per 1-1-2027 (incl. 4%) staat ook in de cao; per 1-8-2026 is een extra trede 7 aan schaal B (PD) toegevoegd Schaal B (PD) kent geen vaste arbeidsduur: een voltijdfunctie komt overeen met de normpraktijk; 40 uur geldt voor de HD Pensioen bij PFZW of Huisarts & Pensioen (voorheen SPH), afhankelijk van de verplichtstelling; premie 50/50. Werknemerspremie niet opgenomen omdat het fonds per werkgever verschilt Verhoging per 1-4-2025 uit de vorige cao niet geverifieerd in een officiële bron; niet opgenomen Cao-tekst 2025-2027 is een definitief concept onder voorbehoud van redactionele controle",
  sourceUrl: "https://www.lhv.nl/wp-content/uploads/2026/09/Salaristabel-Cao-Huisartsen-in-loondienst-2025-2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0575,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A (HD)': [6787.98, 7043.42, 7305.97, 7581.35, 7865.33, 8160.71, 8467.51, 8785.7, 9115.51],
      'B (PD)': [8114.01, 8400.97, 8686.96, 8973.91, 9259.9, 9545.89, 9832.85],
    },
  },
  periods: [
    {
      from: '2026-08-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A (HD)': [7025.56, 7289.94, 7561.68, 7846.7, 8140.62, 8446.33, 8763.87, 9093.2, 9434.55],
          'B (PD)': [8398, 8695, 8991, 9288, 9584, 9880, 10177],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+4% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'A (HD)': [7306.58, 7581.54, 7864.15, 8160.57, 8466.24, 8784.18, 9114.42, 9456.93, 9811.93],
          'B (PD)': [8733.92, 9042.8, 9350.64, 9659.52, 9967.36, 10275.2, 10584.08],
        },
      },
    },
  ],
  vergoedingen: [],
};
