import type { Cao } from '../types.js';

/**
 * CAO Gespecialiseerde Detailhandel in Bloemen en Planten 2025-2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Uurloontabel bloemendetailhandel 1-1-2026 / 1-7-2026 (VBW Voor de bloemist)
 * https://vbw.nu/download_file/view/15443/1053
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - hoursPerWeek=38 is an assumption (CAO normwerkweek); the table is purely hourly so weekly hours are not stated in the loontabel PDF
 *   - pensioenfondsId 'detailhandel' assumed for bloemendetailhandel — confirm the actual sector pension fund (could differ for specialized florist retail)
 *   - eindejaarsuitkering set to 0 — verify whether this CAO has a 13e maand or eindejaarsuitkering
 *   - vakantiegeld 0.08 assumed standard — verify in CAO text
 *   - Per 1-7-2026 functiegroep C shifts to 5 steps matching D column; confirm intended (WML inpassing)
 *
 * Excluded: Jeugdschalen (leeftijd 15 t/m 20 jaar); Aanloopschaal; Functiegroep C Prestatie-trede E ontbreekt per 1-1-2026 (alleen A-D); pas vanaf 1-7-2026 vijf treden; Alle toeslagen en vergoedingen (geen vergoedingen in de loontabel-PDF opgenomen)
 */
export const caoBloemenEnPlantendetailhandel2026: Cao = {
  id: 'bloemen-en-plantendetailhandel',
  name: "CAO Gespecialiseerde Detailhandel in Bloemen en Planten",
  year: 2026,
  effectiveNote: "Uurlonen per 1-1-2026 (bruto uurloon incl. 1,52% waarde 4 vrije dagen voor medewerkers in dienst vanaf 1-1-2025; indexering 3,3% obv CPI alle huishoudens september 2025; incl. inpassing nieuw WML per 1-1-2026). Per 1-7-2026 volgt een tweede WML-inpassing die alleen functiegroep C en de jeugd-/aanlooplonen wijzigt (zie periods); functiegroepen D, E en F blijven dan ongewijzigd. Gemodelleerd zijn de volwassen Prestatie-treden (A t/m de top per groep) van functiegroepen C, D, E en F. UITGESLOTEN: jeugdschalen (15 t/m 20 jaar), de Aanloopschaal, en alle toeslagen/vergoedingen.",
  sourceUrl: "https://vbw.nu/themas/personeel/CAO/Loontabellen",
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      'C': [14.93, 15.22, 15.52, 15.82],
      'D': [15.29, 15.66, 16.03, 16.39, 16.76],
      'E': [15.67, 16.07, 16.48, 16.89, 17.3, 17.7, 18.11, 18.52],
      'F': [16.79, 17.26, 17.73, 18.2, 18.67, 19.14, 19.6, 20.07, 20.54],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "WML-inpassing per 1-7-2026: functiegroep C verhoogd; D, E en F ongewijzigd",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 38,
        schalen: {
          'C': [15.22, 15.66, 16.03, 16.39, 16.76],
          'D': [15.29, 15.66, 16.03, 16.39, 16.76],
          'E': [15.67, 16.07, 16.48, 16.89, 17.3, 17.7, 18.11, 18.52],
          'F': [16.79, 17.26, 17.73, 18.2, 18.67, 19.14, 19.6, 20.07, 20.54],
        },
      },
    },
  ],
  vergoedingen: [],
};
