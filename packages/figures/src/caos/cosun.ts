import type { Cao } from '../types.js';

/**
 * Cao Cosun Beet Company, Sensus B.V. en Hoofdkantoororganisatie Cosun 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Cosun Beet Company, Sensus B.V. en Hoofdkantoororganisatie Cosun
 * https://cao-kijker.awvn.nl/bestanden/3067_01-09-2025%20tot%2001-03-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-08-01 +€ 50/mnd collectieve verhoging; 2027-01-01 +1,75% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoCosun2026: Cao = {
  id: 'cosun',
  name: "Cao Cosun Beet Company, Sensus B.V. en Hoofdkantoororganisatie Cosun",
  year: 2026,
  effectiveNote: "Cao 2025-09-01 t/m 2027-02-28; geen loontabel bekend. Let op: Gegevens uit het eindbod van 3 maart 2026; FNV-leden stemden in, CNV heeft in april 2026 alsnog getekend. Eenmalige uitkering van € 250 bruto (pro rata) ter compensatie van september t/m december 2025, uit te betalen zodra de cao formeel tot stand is gekomen; betaaldatum onbekend. Per 1 januari 2026 stijgt de ploegentoeslag met 2%; de toeslag voor de ploegenoverdracht vervalt. De verhoging van 1,5% per 1 maart 2025 komt uit de vorige cao (1 september 2024 - 1 september 2025). Vakantietoeslag 8% en eindejaarsuitkering 8,33% (in januari, met minimumbedragen) volgens de cao 2023-2024. Pensioen via Pensioenfonds Koninklijke Cosun (middelloon); in 2023 werknemersdeel 3% van de loonsom (ca. 4,5% van de pensioengrondslag), franchise € 18.044 per 1-1-2023. Actuele cijfers niet gevonden. Salarisschalen alleen in de cao 2024-2025 gevonden; geen tabel voor 2026 of 2027, daarom niet opgenomen.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3067_01-09-2025%20tot%2001-03-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-08-01',
      note: "+€ 50/mnd collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ perMaand: 50 }] },
    },
    {
      from: '2027-01-01',
      note: "+1,75% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.0175 }] },
    },
  ],
  vergoedingen: [],
};
