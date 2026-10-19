import type { Cao } from '../types.js';

/**
 * Cao Nederlandse Gasunie 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nederlandse Gasunie
 * https://www.fnv.nl/getmedia/199b6713-c9c7-45fc-abcc-f04d8f56e8fa/19-gasunie-nederland-cao-01-01-2026-tm-31-12-2027-v19032026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoGasunie2026: Cao = {
  id: 'gasunie',
  name: "Cao Nederlandse Gasunie",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Per 1-1-2026 naast 2,84% (CPI) een structurele verhoging van het jaarsalaris met een vast bedrag: t/m schaal 55 € 1.300, schaal 60 € 750, schaal 65 € 550, schaal 70 € 350, schaal 75 € 200, Cx en hoger niets (al verwerkt in de salarisschalen) Per 1-1-2027 verhoging met het dan geldende CPI-percentage (bij 6% of hoger overleg); uitkomst nog niet bekend Salarisschalen staan in de cao als jaarbedragen (minimum en maximum, zonder 13e en 14e maand); hier omgerekend naar maandbedragen (jaarbedrag / 12) met [min, max] als twee treden Individuele verhoging bij voldoende functioneren jaarlijks per 1 april 2,5% tot het maximum van de schaal 13e maand en 14e maand van elk 8,3333% van het maandsalaris, maandelijks uitbetaald; de wettelijke vakantietoeslag is hierin inbegrepen (hier als vakantiegeld 8,3333% + eindejaarsuitkering 8,3333% opgenomen) Voltijd gemiddeld 40 uur per week; ploegendienst 34 2/3 uur (met reservedienst) of 33 2/3 uur (zonder) Pensioen via Stichting Pensioenfonds Gasunie met eigen bijdrage werknemer; hoogte premie en franchise niet gevonden. Overgang naar nieuwe pensioenregeling naar verwachting per 1-1-2027 Ook BBL-schalen, aanloopschaal YD (minimum € 48.703 per jaar) en gesloten schalen; niet opgenomen",
  sourceUrl: "https://www.fnv.nl/getmedia/199b6713-c9c7-45fc-abcc-f04d8f56e8fa/19-gasunie-nederland-cao-01-01-2026-tm-31-12-2027-v19032026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08333299999999999,
  eindejaarsuitkeringPct: 0.08333299999999999,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '20': [2801.58, 3183.08],
      '25': [2850.08, 3401.08],
      '30': [2898.5, 3650.33],
      '35': [3031.42, 3939.75],
      '40': [3172, 4212],
      '45': [3412.17, 4527.75],
      '50': [3673.67, 4867.5],
      '55': [3912.17, 5326.75],
      '60': [4582.5, 6240.17],
      '65': [5415.5, 7366.17],
      '70': [5903, 8070.08],
      '75': [6445.5, 8760.5],
      'Cx': [7035.67, 9607.33],
      'Ca': [8190.25, 11261.5],
      'Bc': [9828.25, 13309.08],
      'Bb': [11795.92, 15835.25],
      'Ac': [13111.25, 17588.92],
      'Ab': [14272.75, 19182.75],
      'Aa': [15502.42, 20837.08],
    },
  },
  vergoedingen: [],
};
