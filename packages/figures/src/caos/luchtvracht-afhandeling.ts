import type { Cao } from '../types.js';

/**
 * Cao Luchtvaart Vracht Afhandeling 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Luchtvaart Vracht Afhandeling
 * https://zoek.officielebekendmakingen.nl/stcrt-2026-7460.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (hour) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoLuchtvrachtAfhandeling2026: Cao = {
  id: 'luchtvracht-afhandeling',
  name: "Cao Luchtvaart Vracht Afhandeling",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; loontabel per 2026-01-01. Let op: Eerste sector-cao voor de luchtvrachtafhandeling; partijen WLVA en FNV. Algemeen verbindend verklaard tot en met 31-12-2026 (Stcrt. 2026, 7460; gewijzigd bij Stcrt. 2026, 25738) Salarisschalen geven alleen een minimum- en maximumbasisuurloon per groep (geen treden); opgenomen als [min, max]. Maandsalaris = basisuurloon x 164,667 Verhoging € 150 bruto per maand (38 uur) per 1-1-2025 is al verwerkt in het loongebouw 2025; 2% per 1-1-2026 geldt voor loongebouw en individuele salarissen Salarisgroei binnen de schaal via jaarlijkse beoordelingsverhoging per 1 januari van 0% tot 4%, tot het maximum van de schaal Bij overgang naar de sector-cao per 1-1-2025 gaat iedere werknemer er per uur minimaal 6% op vooruit (eventueel via een comfortbedrag) Eindejaarsuitkering vanaf 2026: 2,5% van het in het kalenderjaar uitbetaalde basissalaris, uitbetaald in december Pensioenregeling en werknemerspremie staan niet in de cao-tekst; niet opgenomen Cao loopt af op 31-12-2026; afspraken voor 2027 nog niet bekend",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2026-7460.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.025,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      'A': [16.29, 19.19],
      'B': [16.29, 19.46],
      'C': [16.43, 20.03],
      'D': [16.58, 20.88],
      'E': [17, 21.87],
      'F': [17.56, 23.14],
      'G': [18.28, 24.7],
      'H': [19.13, 26.41],
      'I': [20.26, 28.53],
      'J': [21.53, 31.22],
    },
  },
  vergoedingen: [],
};
