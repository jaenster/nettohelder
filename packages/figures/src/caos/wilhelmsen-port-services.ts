import type { Cao } from '../types.js';

/**
 * Cao Wilhelmsen Port Services 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Wilhelmsen Port Services
 * https://cao-kijker.awvn.nl/bestanden/4344_01-01-2024%20tot%2001-01-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoWilhelmsenPortServices2026: Cao = {
  id: 'wilhelmsen-port-services',
  name: "Cao Wilhelmsen Port Services",
  year: 2026,
  effectiveNote: "Cao 2024-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Onderhandelingsresultaat 18-12-2023 (looptijd 1-1-2024 t/m 31-12-2026) voor Wilhelmsen Port Services Rotterdam, Terneuzen en Amsterdam B.V. Jaarlijks per 1 januari automatische prijscompensatie (APC) op basis van CPI (alle huishoudens, afgeleid) oktober-oktober; uitkomsten per 1-1-2025 en 1-1-2026 niet gevonden en niet opgenomen. De 1% per 1-1-2026 komt bovenop de APC Eenmalige uitkering EUR 750 bruto in januari 2025 (en in januari 2024); exacte datum niet genoemd, daarom niet in oneOffPayments Winstdelingsregeling 1-8% afhankelijk van het resultaat ten opzichte van budget (niet meegenomen); de vroegere vaste 4% is per 1-1-2024 in het basissalaris verwerkt Vakantiegeld 8% is het wettelijk minimum, niet geverifieerd (alleen akkoordtekst beschikbaar) Salaristabel en pensioen niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4344_01-01-2024%20tot%2001-01-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
