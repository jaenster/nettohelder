import type { Cao } from '../types.js';

/**
 * CAO Golfbranche 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Salaristabellen 2026 | cao golfbranche (1 januari 2026 - incl. 4% cao verhoging), NVG
 * https://nvg-golf.nl/wp-content/uploads/2025/11/Salaristabellen-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Kolom-uitlijning van de PDF: of Eindsalaris EUR 2.624,44 hoort bij functiegroep 1 of 2. Op basis van 2025 x1,04 (G1 2.523,50 -> 2.624,44; G2 2.987,00 -> 3.106,48) lijken de eindsalarissen G1..G5 te zijn, terwijl ze visueel onder kolommen 2..6 staan. De levels-mapping (G2..G6) kan daardoor een functiegroep verschoven zijn.
 *   - Aanvangssalarissen staan visueel onder kolommen 3-6 (2.559,54 / 2.659,68 / 3.205,39 / 3.720,64); bevestig welke functiegroep elk minimum hoort.
 *   - Of functiegroepen 1 en 2 een eigen aanvangssalaris hebben of starten op het 21+ WML van EUR 2.559,54 (EUR 14,71/uur x 174).
 *   - Eindsalaris functiegroep 6 (EUR 6.602,14) en functiegroep 5 (EUR 5.045,86) - controleer of er geen extra (6e) eindsalariskolom is afgekapt.
 *   - hoursPerWeek=38 is aangenomen; niet uit de salaristabel bevestigd (de minimumuurloon-sectie rekent met 174 uur/maand = ~40 u/week bij 2088 uur/261 dagen). Verifieer de cao-arbeidsduur.
 *   - Reiskosten kilometertarief 2026 (bron noemt EUR 0,23 voor 2024).
 *   - Pensioenfonds: geen sectorfonds in de toegestane lijst gevonden; 'generiek' gekozen.
 *   - Geen eindejaarsuitkering aangetroffen -> 0; bevestigen.
 *
 * Excluded: Jeugdlonen 15-20 jaar; Minimum-jeugdloon functiegroepen 1 en 2; Per 1 juli 2026 aangekondigde WML/minimumjeugdloon-aanpassing (nog niet gepubliceerd); Functiegroep 1 (alleen WML-minimum, geen eigen eindsalaris in tabel); Reiskostenvergoeding details/toeslagen; IKB en eenmalige betalingen; Verhoging +3% per 1 januari 2027 (buiten 2026)
 */
export const caoGolfbranche2026: Cao = {
  id: 'golfbranche',
  name: "CAO Golfbranche",
  year: 2026,
  effectiveNote: "Salaristabel per 1 januari 2026, inclusief de collectieve verhoging van 4% (looptijd cao 1-1-2026 t/m 31-12-2027; per 1-1-2027 volgt +3%, buiten scope). Bedragen zijn bruto per maand (fulltime). Het betreft een min-max loongebouw per functiegroep (aanvangssalaris t/m eindsalaris, 21 jaar en ouder). Uitgesloten: jeugdlonen 15-20 jaar, het minimum-jeugdloon van functiegroepen 1 en 2, en de per 1 juli 2026 aangekondigde aanpassing van de minimum(jeugd)lonen (WML-indexatie, nog niet gepubliceerd). Ook uitgesloten: reiskostenvergoeding, toeslagen, IKB en eenmalige betalingen. LET OP: de PDF-kolommen zijn lastig uit te lijnen; functiegroep 1 toont alleen een minimum (WML-vloer) zonder eigen eindsalaris.",
  sourceUrl: "https://nvg-golf.nl/wp-content/uploads/2025/11/Salaristabellen-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'band',
    levelLabel: "Functiegroep",
    unit: 'maand',
    levels: [
      { id: '2', min: 2559.54, max: 2624.44 },
      { id: '3', min: 2559.54, max: 3106.48 },
      { id: '4', min: 2659.68, max: 3749.2 },
      { id: '5', min: 3205.39, max: 5045.86 },
      { id: '6', min: 3720.64, max: 6602.14 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 38,
  },
  vergoedingen: [
    {"id":"reiskosten","label":"Reiskostenvergoeding woon-werkverkeer","amount":0.23,"unit":"perKm","taxable":false,"note":"Minimumregeling: fiscaal vrijgestelde kilometervergoeding van het geldende jaar (2024 was EUR 0,23/km), maximaal EUR 7,50 per dag, eerste 5 km per rit voor rekening medewerker. Tarief 2026 niet bevestigd uit bron; verifieren."},
  ],
};
