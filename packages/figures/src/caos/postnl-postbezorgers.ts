import type { Cao } from '../types.js';

/**
 * Cao PostNL Postbezorgers 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao PostNL Postbezorgers
 * https://www.fnv.nl/getmedia/bbd9baad-dc57-48bc-9a93-62faa32f34cf/1497-postnl-postbezorgers-cao-01-01-2026-tm-31-12-2027-v07092026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-07-01 (hour) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-07-01 (gedeeld door +1,5%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01, 2027-01-01, 2027-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoPostnlPostbezorgers2026: Cao = {
  id: 'postnl-postbezorgers',
  name: "Cao PostNL Postbezorgers",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-07-01. Let op: Cao voor circa 14.000 postbezorgers van PostNL; leden van BVPP, CNV en FNV stemden in juli 2026 in Netto fietsbijdrage voor 750 postbezorgers per jaar (niet uit te drukken in de calculator) Onderzoek naar onderbrengen van de pensioenregeling bij Pensioenfonds PostNL; werknemerspremie niet gevonden Verhogingen uit 2025 (vorige cao postbezorgers) niet gevonden Schaal = salaristabel per 1-7-2026 (bijlage 1 cao), bruto uurlonen loontredes 1 t/m 4 (trede 2 en 3 na telkens 2 jaar, trede 4 na 5 jaar); per 1-1-2026 € 14,71-€ 15,38, tabellen 2027 staan ook in de cao Voltijd 38 uur per week (begrippenlijst cao); vakantiegeld 8% over het ontvangen maandsalaris",
  sourceUrl: "https://www.fnv.nl/getmedia/bbd9baad-dc57-48bc-9a93-62faa32f34cf/1497-postnl-postbezorgers-cao-01-01-2026-tm-31-12-2027-v07092026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      'postbezorger': [14.77, 14.94, 15.1, 15.38],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 38,
        schalen: {
          'postbezorger': [14.99, 15.16, 15.33, 15.61],
        },
      },
    },
    {
      from: '2027-01-01',
      note: "+1,75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 38,
        schalen: {
          'postbezorger': [15.25, 15.43, 15.6, 15.88],
        },
      },
    },
    {
      from: '2027-07-01',
      note: "+1,75% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 38,
        schalen: {
          'postbezorger': [15.52, 15.7, 15.87, 16.16],
        },
      },
    },
  ],
  vergoedingen: [],
};
