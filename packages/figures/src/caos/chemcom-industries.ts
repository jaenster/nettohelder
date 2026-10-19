import type { Cao } from '../types.js';

/**
 * Cao ChemCom Industries B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao ChemCom Industries B.V.
 * https://cao-kijker.awvn.nl/bestanden/0835_01-07-2024%20tot%2001-07-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +2% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoChemcomIndustries2026: Cao = {
  id: 'chemcom-industries',
  name: "Cao ChemCom Industries B.V.",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2027-06-30; geen loontabel bekend. Let op: Verhogingen per 1-7-2025 en 1-7-2026 zijn automatische prijscompensatie (APC, CBS-inflatie 1 april tot 1 april) plus 0,7% resp. 2,0%; de uitkomst van de APC is niet gevonden, hier alleen het vaste deel opgenomen (totale verhoging met bodem van 0%) Salarisschalen (11 schalen met minimum, stapgrootte en maximum) alleen per 1-7-2024 gevonden; niet opgenomen omdat de tabellen 2025/2026 niet bekend zijn Eindejaarsuitkering vanaf december 2024: 100% van het maandsalaris (incl. eventuele ploegentoeslag), hier als 8,33% opgenomen Voltijd 40 uur per week; 5-ploegendienst gemiddeld 33,6 uur per week Pensioen: middelloonregeling bij Pensioenfonds PGB (aansluiting voortgezet t/m 31-12-2025); werknemersbijdrage 6% van (pensioengevend salaris minus franchise); franchise niet in de cao vermeld, daarom niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0835_01-07-2024%20tot%2001-07-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-07-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.02 }] },
    },
  ],
  vergoedingen: [],
};
