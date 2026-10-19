import type { Cao } from '../types.js';

/**
 * Cao RTL Nieuws B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao RTL Nieuws B.V.
 * https://cao-kijker.awvn.nl/?s=RTL
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2027-01-01 +3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoRtlNieuws2026: Cao = {
  id: 'rtl-nieuws',
  name: "Cao RTL Nieuws B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Verhogingen 2026 en 2027 uit de AWVN Cao-kijker-samenvatting van het principeakkoord van 19 februari 2026 (looptijd 1 januari 2026 - 1 januari 2028); de akkoord-PDF was niet beschikbaar Verhoging 2025 (3,3%) en overige gegevens uit de cao RTL Nieuws 2025 Vakantiebijslag 8% van de verdiende maandsalarissen, uitbetaald in december (op verzoek in mei of maandelijks) Variabele prestatie-uitkering afhankelijk van EBITA RTL Nederland en beoordeling (max. 12,8%); voor een deel van de werknemers een vaste eindejaarsuitkering van 5% plus EBITA-bonus; niet opgenomen Salarisschalen 2026 niet gevonden Pensioenpremie niet gevonden",
  sourceUrl: "https://cao-kijker.awvn.nl/?s=RTL",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2027-01-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
};
