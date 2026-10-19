import type { Cao } from '../types.js';

/**
 * CAO Aardappelen Groenten en Fruit Detailhandel (Nederland) 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: Bruto uurlonen AGF detailhandel vanaf 1-1-2026 (AVN loontabel)
 * https://avn.nu/download_file/view/15464/3334
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Schaal B functiejaren 1-10: 15,14 / 15,14 / 15,42 / 15,70 / 16,26 / 16,56
 *   - Schaal C functiejaren 1-10: 15,87 / 16,46 / 16,75 / 17,05 / 17,64 / 18,04
 *   - Schaal D functiejaren 1-10 (1-1-2026): 16,90 / 17,54 / 18,17 / 18,81 / 19,45 / 19,99; per 1-7-2026 D trede 10 = 19,95
 *   - Schaal E functiejaren 1-10: 18,58 / 19,29 / 19,99 / 20,69 / 21,39 / 21,99
 *   - Step mapping: rows are functiejaren 1, 2, 3, 5, 8, 10 (gaps at 4, 6, 7, 9)
 *   - hoursPerWeek=40 (CAO: normale wekelijkse arbeidsduur bedraagt maximaal 40 uur) - confirm of dit het ft-fulltime urental is voor maandconversie
 *   - pensioenfondsId=detailhandel (Pensioenfonds Detailhandel) - CAO verwijst naar pensioenfondsdetailhandel.nl
 *   - No eindejaarsuitkering/13e maand found in CAO text
 *
 * Excluded: Jeugd-/leeftijdschalen (15 t/m 21 jaar) op basis van WML-percentages; Per 1-1-2026 vervallen aanloopschaal en functiegroep A; Alle toeslagen en overwerkvergoedingen; Eenmalige uitkeringen
 */
export const caoAardappelenGroentenEnFruitDetailhandel2026: Cao = {
  id: 'aardappelen-groenten-en-fruit-detailhandel',
  name: "CAO Aardappelen Groenten en Fruit Detailhandel",
  year: 2026,
  effectiveNote: "Bruto uurlonen per 1-1-2026 (APC +3,0% per 1-1-2026 toegepast, WML per 1-1-2026 ingepast). CAO loopt 1-1-2026 t/m 31-12-2027. Bedragen zijn uurlonen (unit=uur), volledige werkweek max 40 uur. De volwassen-loontabel (functiejaren) van functiegroepen B, C, D en E is opgenomen. EXCLUDED: jeugd-/leeftijdschalen (15-21 jaar), de per 1-1-2026 vervallen aanloopschaal en functiegroep A, alle toeslagen/overwerkvergoedingen en eenmalige uitkeringen. Per 1-7-2026 wijzigt de WML naar EUR 14,99 (raakt vooral de jeugdschalen); de volwassen functiejaren-tabel blijft gelijk behalve een correctie bij D trede 10 (EUR 19,99 -> EUR 19,95), opgenomen in periods.",
  sourceUrl: "https://avn.nu/themas/medewerkers/cao/loontabellen",
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      'B': [15.14, 15.14, 15.42, 15.7, 16.26, 16.56],
      'C': [15.87, 16.46, 16.75, 17.05, 17.64, 18.04],
      'D': [16.9, 17.54, 18.17, 18.81, 19.45, 19.99],
      'E': [18.58, 19.29, 19.99, 20.69, 21.39, 21.99],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "Loontabel per 1-7-2026 (WML EUR 14,99 ingepast). Volwassen functiejaren-tabel gelijk aan 1-1-2026 behalve correctie D trede 10 (19,99 -> 19,95).",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'functiejaar',
        unit: 'uur',
        hoursPerWeek: 40,
        schalen: {
          'B': [15.14, 15.14, 15.42, 15.7, 16.26, 16.56],
          'C': [15.87, 16.46, 16.75, 17.05, 17.64, 18.04],
          'D': [16.9, 17.54, 18.17, 18.81, 19.45, 19.95],
          'E': [18.58, 19.29, 19.99, 20.69, 21.39, 21.99],
        },
      },
    },
  ],
  vergoedingen: [],
};
