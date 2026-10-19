import type { Cao } from '../types.js';

/**
 * Cao AOC Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao AOC Nederland B.V.
 * https://cao-kijker.awvn.nl/bestanden/3997_01-05-2026%20tot%2001-09-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-05-01 +2,5% collectieve verhoging; 2026-11-01 +1,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoAocNederland2026: Cao = {
  id: 'aoc-nederland',
  name: "Cao AOC Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-05-01 t/m 2027-08-31; geen loontabel bekend. Let op: Salarissen zijn jaarsalarissen inclusief de wettelijke vakantietoeslag; standaard uitbetaald in 14 termijnen (extra termijn in mei en november), keuze voor 13 of 12 termijnen Salarisschalen C34-C41 in jaarbedragen (min/max); geen tabel voor 2026 gevonden, daarom geen scale Minimumsalaris bij aanname EUR 37.200 bruto per jaar (eindbod 7-5-2026) Resultaatbeloning (EBITDA) en performance-uitkering (1-3% van eindsalaris) niet meegenomen Pensioen bij Stichting Pensioenfonds DSM Nederland; werknemersbijdrage 6% boven de franchise van het pensioenreglement (cao 2025), franchisebedrag niet in de cao, daarom geen pension-veld Volcontinu- en ploegenroosters hebben kortere gemiddelde arbeidsduur (33,6-37 uur)",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3997_01-05-2026%20tot%2001-09-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-05-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.025 }] },
    },
    {
      from: '2026-11-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.015 }] },
    },
  ],
  vergoedingen: [],
};
