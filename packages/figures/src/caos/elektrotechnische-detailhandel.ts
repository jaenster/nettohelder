import type { Cao } from '../types.js';

/**
 * CAO Elektrotechnische Detailhandel (Nederland) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: CAO ETD 2024-2025 - CAO voor de Elektrotechnische Detailhandel (Hoofdstuk 6 Salaris, salaristabellen per 1 januari 2025)
 * https://zoek.officielebekendmakingen.nl/stcrt-2024-23043.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Of er inmiddels (na feb 2026) alsnog een nieuwe CAO ETD met loonsverhoging per 1 jan of 1 jul 2026 is afgesloten; zo ja, dan moet de tabel en periods worden bijgewerkt
 *   - De 38-urige werkweek als basis voor de uurtabel (de CAO noemt 38 uur als gemiddelde fulltime arbeidsduur, niet expliciet bij de tabel)
 *   - Alle uurbedragen schaal B t/m F (per 1 jan 2025) zijn overgenomen uit de officiele CAO-tekst; de onregelmatige grid (B t/m stap 4, C t/m 5, D t/m 7, E t/m 8, F t/m 9) handmatig getranscribeerd
 *   - Of de tabel per 1 jan 2025 daadwerkelijk ongewijzigd geldt in 2026 (aanname o.b.v. 0% per 1 jan 2026 en geen nieuw akkoord)
 *   - WML-bodemgarantie per 1 jul 2026 (+1,85%) kan onderkant van schaal B/C in 2026 verhogen tot WML-niveau
 *
 * Excluded: Salarisgroep A (volgt WML, geen vast bedrag in de tabel); Jeugdgroepen 15-20 jaar (WML / WML+5% / WML+10%); Toeslag VMBO-diploma 5%; Toeslag MBO/ET-diploma 10%; Ploegentoeslag en onregelmatigheidstoeslag; Feitelijke lonen boven het schaalmaximum; Maaltijdvergoeding meegegeven als vergoeding maar situationeel; Eenmalige uitkeringen (350 EUR okt 2024, 200 EUR dec 2024)
 */
export const caoElektrotechnischeDetailhandel2026: Cao = {
  id: 'elektrotechnische-detailhandel',
  name: "CAO Elektrotechnische Detailhandel",
  year: 2026,
  effectiveNote: "Hourly wage table (per uur, gebaseerd op 38-urige werkweek) zoals geldend per 1 januari 2025 en ONGEWIJZIGD doorlopend in 2026. De CAO ETD 2024-2025 (looptijd 1 jan 2024 t/m 31 dec 2025) bevat geen loonsverhoging voor 2026; per 1 januari 2026 geldt 0% (geen nieuwe CAO). Per stand 23 feb 2026 waren de onderhandelingen voor een nieuwe CAO nog niet inhoudelijk gestart (representativiteitsonderzoek loopt), dus er is geen aangekondigde collectieve verhoging voor B t/m F in 2026 om in periods te zetten. Per 1 juli 2026 stijgt alleen het WML met 1,85%, wat salarisgroep A en de jeugdgroepen raakt (uitgesloten) en als bodem geldt voor B t/m F. UITGESLOTEN: salarisgroep A (volgt WML, geen vast bedrag), jeugdgroepen (15-20 jaar, WML/WML+5%/WML+10%), VMBO-toeslag 5% en MBO/ET-toeslag 10%, ploegentoeslag/onregelmatigheidstoeslag, feitelijke lonen boven schaalmaximum, maaltijdvergoeding (situationeel), en eenmalige uitkeringen uit 2024.",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2024-23043.html",
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      'B': [14.06, 14.09, 14.13, 14.16, 14.2],
      'C': [14.13, 14.16, 14.2, 14.23, 14.27, 14.31],
      'D': [14.2, 14.23, 14.27, 14.3, 14.34, 14.38, 14.41, 14.45],
      'E': [14.27, 14.3, 14.34, 14.37, 14.41, 14.45, 14.48, 14.52, 14.56],
      'F': [14.34, 14.37, 14.41, 14.45, 14.48, 14.52, 14.55, 14.59, 15.02, 15.47],
    },
  },
  vergoedingen: [
    {"id":"maaltijdvergoeding","label":"Maaltijdvergoeding bij werken na 19.00 uur en >8 uur op een dag","amount":6.25,"unit":"perDag","taxable":false,"note":"Netto. Alleen wanneer de werknemer na 19.00 uur moet werken en die dag langer dan 8 uur werkt; geen maaltijd verstrekt. Situationeel, geen vaste maandelijkse vergoeding. Woon-werkverkeer kent geen reiskostenvergoeding."},
  ],
};
