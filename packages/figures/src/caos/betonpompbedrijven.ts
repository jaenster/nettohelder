import type { Cao } from '../types.js';

/**
 * Cao Betonpompbedrijven 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Betonpompbedrijven
 * https://zoek.officielebekendmakingen.nl/stcrt-2025-38271.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (hour) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoBetonpompbedrijven2026: Cao = {
  id: 'betonpompbedrijven',
  name: "Cao Betonpompbedrijven",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Cao loopt af op 31-12-2026; onderhandelingen over een nieuwe cao zijn in september 2026 gestart, loonsverhoging 2027 nog niet bekend Garantielonen 2025 bevatten een loonsverhoging van 4% (de meeste bedrijven hadden die al toegekend); exacte ingangsdatum niet vermeld, daarom niet als verhoging opgenomen Scale = garantie-uurlonen per 1-1-2026 (bijlage I, 18 jaar en ouder), één bedrag per groep; maandlonen bij 40 uur: groep I € 3.449,33 t/m groep V € 3.839,33 Leidinggevend, toezichthoudend, hoger technisch en administratief personeel (bijlage II) heeft een eigen maandsalaristabel met min-max per groep II t/m VII, per 1-1-2026 van € 3.039,07 (II min) tot € 6.591,28 (VII max) Normale arbeidsduur 40 uur per week; werknemers die in 2010 voor 36 uur kozen mogen dat behouden Overwerktoeslag per 1-7-2025 met 20% verhoogd (uitbetaald in geld) Jeugdlonen voor 18- en 19-jarigen afgeschaft Pensioen via bpfBOUW; werknemerspremie voor deze sector niet gevonden Geen eindejaarsuitkering gevonden",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2025-38271.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      'I': [19.9],
      'II': [20.2],
      'III': [20.64],
      'IV': [21.47],
      'V': [22.15],
    },
  },
  vergoedingen: [],
};
