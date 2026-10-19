import type { Cao } from '../types.js';

/**
 * Cao Terminal Recruiters B.V. - verlading/steigeroperators 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Terminal Recruiters B.V. - verlading/steigeroperators
 * https://cao-kijker.awvn.nl/bestanden/4308_01-01-2023%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoTerminalRecruiters2026: Cao = {
  id: 'terminal-recruiters',
  name: "Cao Terminal Recruiters B.V. - verlading/steigeroperators",
  year: 2026,
  effectiveNote: "Cao 2023-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Basismaandsalarissen worden jaarlijks per 1 januari met 1,75% verhoogd, bovenop de automatische prijscompensatie (APC) APC: sinds 2024 jaarlijks per januari op basis van de CPI (alle huishoudens, afgeleid) over oktober-oktober; uitkomsten 2025 en 2026 niet gevonden en niet opgenomen Vakantiebijslag 8,33% van het jaarsalaris, uitbetaald in mei Onregelmatigheidstoeslag 13% (semicontinu) of 30% (volcontinu); 2-ploegendienst 38,75 uur per week Pensioen: eigen bijdrage 5% van de pensioengrondslag; franchise niet in de cao, daarom geen pension-veld Bij uitleen geldt de cao (salarisgebouw en toeslagen) van het inlenende bedrijf Salaristabel in de cao is die van 1-1-2023; niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4308_01-01-2023%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
