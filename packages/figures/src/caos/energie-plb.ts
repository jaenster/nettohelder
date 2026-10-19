import type { Cao } from '../types.js';

/**
 * Sector-cao Productie- en Leveringsbedrijven (PLb) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Sector-cao Productie- en Leveringsbedrijven (PLb)
 * https://www.fnv.nl/getmedia/9bce7e2a-dfb9-4bd8-a130-e4e1f461dc5c/Eindbod-WENB-sector-cao-PLb-2025-2026-20250321.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoEnergiePlb2026: Cao = {
  id: 'energie-plb',
  name: "Sector-cao Productie- en Leveringsbedrijven (PLb)",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Dit is de sector-cao voor energieproductie- en leveringsbedrijven (werkgeversvereniging WENB); een aparte NWEA-cao is niet gevonden Gebaseerd op het eindbod van WENB (21 maart 2025), na ledenstemming per 1 mei 2025 ingevoerd Eenmalige uitkering € 750 bruto in mei 2025 (voltijd, naar rato bij indiensttreding na 1 januari 2025), pensioengevend Minimumuurloon € 16 per 1 mei 2025; minimum schaalsalaris € 2.640 bruto voor vakvolwassen medewerker Salarisschalen staan in de functieloongebouwen per bedrijf Onderhandelingen voor cao 2027 lopen: werkgevers bieden 2% per jaar bij twee jaar looptijd, FNV vraagt 5,5% plus € 80 per maand. Loonsverhoging 2027 nog niet bekend Vakantiegeldpercentage, eindejaarsuitkering en pensioenpremie niet geverifieerd; 8% is het wettelijk minimum",
  sourceUrl: "https://www.fnv.nl/getmedia/9bce7e2a-dfb9-4bd8-a130-e4e1f461dc5c/Eindbod-WENB-sector-cao-PLb-2025-2026-20250321.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
