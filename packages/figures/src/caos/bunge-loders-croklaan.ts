import type { Cao } from '../types.js';

/**
 * Cao Bunge Loders Croklaan B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Bunge Loders Croklaan B.V.
 * https://cao-kijker.awvn.nl/bestanden/2368_01-04-2026%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +3,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoBungeLodersCroklaan2026: Cao = {
  id: 'bunge-loders-croklaan',
  name: "Cao Bunge Loders Croklaan B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: Cao 2026-2027 is een verbeterd eindbod van 18 mei 2026 (door FNV voorgelegd aan de leden, CNV sluit zich aan bij instemming) Eenmalige uitkering van € 1.000 bruto bij de eerst mogelijke salarisdatum; exacte datum niet vermeld, daarom niet als eenmalige uitkering opgenomen Minimum vakantietoeslag € 3.116 per jaar bij volledig dienstverband per 1 april 2025 (cao 2024-2026), aan te passen met de structurele verhoging Gemiddelde werktijd volledig dienstverband 40 uur per week (bijlage IV cao 2024-2026); volcontinu-roosters 33,6 tot 34,4 uur per week ingeroosterd Resultaatafhankelijke bonus (RAB) afhankelijk van bedrijfsresultaat, niet opgenomen Pensioen via PGB (pensioenbudget 26,5% van de loonsom); werknemersbijdrage niet gevonden Salarisschalen staan als afbeelding in de cao-tekst 2024-2026 en zijn niet opgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2368_01-04-2026%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.035 }] },
    },
  ],
  vergoedingen: [],
};
