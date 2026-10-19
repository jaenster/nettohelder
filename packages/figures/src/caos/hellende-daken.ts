import type { Cao } from '../types.js';

/**
 * Cao voor Hellende Daken 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor Hellende Daken
 * https://www.hellendedaken.nl/inhoud/uploads/CAO-HD_2022-2027_versie-dec25.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2027-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2027-01-01 (gedeeld door +2%)
 *   - Bron (bijlage 2) bevat zelf een tabel per 1-1-2026; teruggerekende bedragen wijken
 *     daar tot < 1 euro van af (bv. 4: 3696.08 vs 3695.47, 1B: 3130.2 vs 3130.40,
 *     ondersteunend lager trede 10: 3417.38 vs 3418.13, middelbaar trede 9: 4719.09 vs 4719.87)
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoHellendeDaken2026: Cao = {
  id: 'hellende-daken',
  name: "Cao voor Hellende Daken",
  year: 2026,
  effectiveNote: "Cao 2022-04-01 t/m 2027-03-31; loontabel per 2027-01-01. Let op: Cao gesloten tussen GNL (sectie Hellende Daken), Vakfederatie Rietdekkers, NVVL en de werknemersvereniging LBV (niet FNV/CNV) Loonsverhogingen gelden niet voor werknemers met een loon boven 115% van de toepasselijke loonschaal (alleen tot die grens) Loontabel per 1-1-2027 (geldig t/m 30-6-2027): uitvoerende functies (loongroep 4, functiegroepen 1A t/m 5) kennen één bedrag per functiegroep; ondersteunende functies hebben treden (lager ondersteunend trede 4-10, treden 0-3 = WML) De cao geeft ook week-, 4-weken- en uurlonen; hier zijn de maandlonen opgenomen Loontabel van lager ondersteunende functies per 1-1-2026 vermeldt 3% i.p.v. de 4% uit artikel 29 Jeugdlonen (loongroep 1-3) niet opgenomen Pensioen niet opgenomen: werknemerspremie niet in de cao-tekst gevonden Geen cao-afspraken na 31-3-2027 gevonden",
  sourceUrl: "https://www.hellendedaken.nl/inhoud/uploads/CAO-HD_2022-2027_versie-dec25.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '2': [3320.52],
      '3': [3514.25],
      '4': [3696.08],
      '5': [3883.01],
      '1A': [2863.4],
      '1B': [3130.2],
      'Ondersteunend lager': [2550.72, 2678.17, 2809.02, 2956.86, 3101.3, 3257.65, 3417.38],
      'Ondersteunend middelbaar/hoger': [3043.53, 3194.77, 3352.81, 3521.05, 3697.77, 3883.01, 4076.74, 4299.34, 4494.77, 4719.09, 4953.6],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '2': [3386.93],
          '3': [3584.53],
          '4': [3770],
          '5': [3960.67],
          '1A': [2920.67],
          '1B': [3192.8],
          'Ondersteunend lager': [2601.73, 2731.73, 2865.2, 3016, 3163.33, 3322.8, 3485.73],
          'Ondersteunend middelbaar/hoger': [3104.4, 3258.67, 3419.87, 3591.47, 3771.73, 3960.67, 4158.27, 4385.33, 4584.67, 4813.47, 5052.67],
        },
      },
    },
  ],
  vergoedingen: [],
};
