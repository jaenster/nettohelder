import type { Cao } from '../types.js';

/**
 * Cao Rockwool B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Rockwool B.V.
 * https://cao-kijker.awvn.nl/bestanden/0263_01-05-2026%20tot%2001-02-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-05-01 +2% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoRockwool2026: Cao = {
  id: 'rockwool',
  name: "Cao Rockwool B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-05-01 t/m 2027-01-31; geen loontabel bekend. Let op: Cao 1-5-2026 t/m 31-1-2027 volgens eindbod van Rockwool aan FNV (door AWVN cao-kijker als akkoord geregistreerd): salarisschalen +2% per 1-5-2026 Vorige cao 1-4-2025 t/m 30-4-2026: +3,75% per 1-4-2025 en +1,0% per 1-1-2026 Salarisschalen (functiejarenschaal groep 1-10, per 1-1-2026) staan in de cao, maar de tabel bevat een afwijkende cel 'IV/6+' waardoor niet eenduidig is welke bedragen bij welke groep horen; daarom niet opgenomen Dertiende maand gelijk aan het maandinkomen van december Dagdienst: rooster van 40 uur per week met 26 ATV-dagen, gemiddeld 36 uur per week op jaarbasis Pensioen via Stichting Pensioenfonds Rockwool; werknemersbijdrage 'momenteel 12,6% van de premiegrondslag', franchise niet vermeld; niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0263_01-05-2026%20tot%2001-02-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-05-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.02 }] },
    },
  ],
  vergoedingen: [],
};
