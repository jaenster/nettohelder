import type { Cao } from '../types.js';

/**
 * Cao HAL Beheer B.V. (Nautilus-overeenkomst officieren) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao HAL Beheer B.V. (Nautilus-overeenkomst officieren)
 * https://cao-kijker.awvn.nl/bestanden/2621_01-01-2025%20tot%2001-01-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoHalBeheer2026: Cao = {
  id: 'hal-beheer',
  name: "Cao HAL Beheer B.V. (Nautilus-overeenkomst officieren)",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Overeenkomst HAL Beheer - Nautilus voor officieren (zeevaart), 1-1-2025 t/m 31-12-2026; de PDF is een scan Algemene gageverhoging per 1-1-2025 volgens bijlage B (percentage niet uit de bron overgenomen); partijen zouden in oktober 2025 bespreken of een vooraf onderhandelde verhoging van 3% (voor 2026) plaatsvindt - uitkomst niet gevonden Gage is een jaargage inclusief 8% vakantietoeslag en alle overuren, afhankelijk van vaar-verlofschema (193 of 253 vaardagen; 11% toeslag bij 253 dagen); gageschalen (bijlage B) niet opgenomen Gageafrekening vermeldt wisselkoers bij betalingen in een andere valuta dan de euro",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2621_01-01-2025%20tot%2001-01-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
