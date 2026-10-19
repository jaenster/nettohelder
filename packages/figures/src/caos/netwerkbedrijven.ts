import type { Cao } from '../types.js';

/**
 * Cao Netwerkbedrijven (NWb) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Netwerkbedrijven (NWb)
 * https://www.fnv.nl/getmedia/b9ddc50b-2307-475d-bdce-1f8cc2543a76/Uitkomst-cao-NWb-2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 3,7%
 *   - Voltijd 38 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +2% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoNetwerkbedrijven2026: Cao = {
  id: 'netwerkbedrijven',
  name: "Cao Netwerkbedrijven (NWb)",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-12-31; geen loontabel bekend. Let op: Vakantie-uitkering (8%) wordt maandelijks uitbetaald als onderdeel van het Persoonlijk Budget van 18% (8% vakantie-uitkering, 5,2% ADV, 4,8% overig budget); zonder ADV is het Persoonlijk Budget 12,8%. Het overige deel kan de calculator niet uitdrukken Minimum vakantie-uitkering voor 21+: 8% van € 3.093 bruto per maand (per 1 juli 2025) Gemiddelde arbeidsduur 38 uur per week; functiecontracten hebben een standaard arbeidsduur van 40 uur Verhoging per 1 januari 2025 (3%) komt uit de vorige cao (1 januari 2024 - 30 juni 2025) Pensioen via ABP; premieverdeling volgt het ABP-pensioenreglement Salarisschalen staan in de bedrijfs-cao's (Alliander, Stedin, Enexis e.a.), niet in de sector-cao Onderhandelingen voor een nieuwe cao zijn op 6 oktober 2026 gestart (FNV-inzet 5,5% plus € 80 bruto per maand); loonsverhoging 2027 nog niet bekend",
  sourceUrl: "https://www.fnv.nl/getmedia/b9ddc50b-2307-475d-bdce-1f8cc2543a76/Uitkomst-cao-NWb-2025-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.037000000000000005,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38 },
  periods: [
    {
      from: '2026-07-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38, raises: [{ pct: 0.02 }] },
    },
  ],
  vergoedingen: [],
};
