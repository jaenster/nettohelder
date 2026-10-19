import type { Cao } from '../types.js';

/**
 * CAO Zorgverzekeraars (Nederland) 2024-2026 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO voor de Zorgverzekeraars 2024-2026 (Zorgverzekeraars Nederland)
 * https://www.zn.nl/app/uploads/CAO-voor-de-Zorgverzekeraars-2024-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Functiegroep band min/max bedragen per 1-10-2025 (incl. 3,75%): FG1 2444-2566, FG2 2452-2636, FG3 2466-2730, FG4 2488-2853, FG5 2514-3059, FG6 2545-3305, FG7 2646-3683, FG8 3005-4183, FG9 3265-4806, FG10 3596-5622
 *   - hoursPerWeek=38 (voltijd) - de cao noemt een jaarurennorm van 1.734 uur voor schaal 1 t/m 10; verifieer of de feitelijke werkweek 36, 38 of een ander aantal uren is voor maandsalaris-equivalentie
 *   - Of er per 1-10-2026 een opvolgende cao/loonsverhoging is gepubliceerd (deze cao loopt af op 30-9-2026)
 *   - Reiskostenvergoeding dienstreizen voor 2026 (cao noemt expliciet alleen 2024 en 2025 als EUR 0,23/km)
 *
 * Excluded: functiegroepen/adviesschalen boven functiegroep 10 (vallen niet onder de cao); persoonlijke toeslag overgangsregeling merit rating (5% van salaris 1-1-1996); aanloop-/lagere indeling voor nieuwe medewerkers (6-12 maanden); beoordelingsafhankelijke salarisverhoging; jubileumuitkering (eenmalig maandsalaris bij 25/40 jaar dienst); reiskosten woon-werkverkeer (OV-/NS-abonnement-gebaseerd); overlijdensuitkering en overige toeslagen
 */
export const caoZorgverzekeraars2026: Cao = {
  id: 'zorgverzekeraars',
  name: "CAO Zorgverzekeraars",
  year: 2026,
  effectiveNote: "Salarisschalen per 1 oktober 2025 (inclusief de verhoging van 3,75%). Deze tabel is van kracht op 1 januari 2026 en blijft gelden tot de cao afloopt op 30 september 2026. Binnen deze cao is geen verdere collectieve loonsverhoging in 2026 afgesproken (6% per 1-10-2024 en 3,75% per 1-10-2025 zijn beide al verwerkt); een opvolgende cao vanaf 1-10-2026 was nog niet gepubliceerd. Bedragen zijn bruto per maand bij voltijd (jaarurennorm 1.734 uur voor schaal 1 t/m 10). Het model is een band per functiegroep: begin- en eindsalaris vormen de min/max van de schaal; de normgroei (aantal stappen) bepaalt het tempo binnen de band. UITGESLOTEN: functiegroepen/adviesschalen boven functiegroep 10 (vallen niet onder de cao), persoonlijke toeslag overgangsregeling merit rating (5%), aanloop-/lagere indeling voor nieuwe medewerkers, beoordelingsafhankelijke salarisverhoging, jubileumuitkering (eenmalig maandsalaris), reiskosten en alle toeslagen.",
  sourceUrl: "https://www.zn.nl/app/uploads/CAO-voor-de-Zorgverzekeraars-2024-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    levelLabel: "Functiegroep",
    unit: 'maand',
    levels: [
      { id: '1', min: 2444, max: 2566 },
      { id: '2', min: 2452, max: 2636 },
      { id: '3', min: 2466, max: 2730 },
      { id: '4', min: 2488, max: 2853 },
      { id: '5', min: 2514, max: 3059 },
      { id: '6', min: 2545, max: 3305 },
      { id: '7', min: 2646, max: 3683 },
      { id: '8', min: 3005, max: 4183 },
      { id: '9', min: 3265, max: 4806 },
      { id: '10', min: 3596, max: 5622 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 38,
  },
  vergoedingen: [
    {"id":"dienstreis-km","label":"Reiskostenvergoeding dienstreizen eigen auto","amount":0.23,"unit":"perKm","taxable":false,"note":"In 2024 en 2025 was dit EUR 0,23/km, gelijk aan de maximum onbelaste kilometervergoeding; voor 2026 volgt dit het wettelijk maximum (verifieer)."},
  ],
};
