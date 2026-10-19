import type { Cao } from '../types.js';

/**
 * Cao KLM Cabinepersoneel 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao KLM Cabinepersoneel
 * https://www.fnvcabine.nl/pdf/CAO2025/20251209_Onderhandelingsresultaat_cabine.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-07-01 +1,25% collectieve verhoging; 2027-01-01 +1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoKlmCabine2026: Cao = {
  id: 'klm-cabine',
  name: "Cao KLM Cabinepersoneel",
  year: 2026,
  effectiveNote: "Cao 2025-03-01 t/m 2027-02-28; geen loontabel bekend. Let op: Eenmalige uitkering van € 750 NETTO in januari 2026 (naar rato van het tewerkstellingspercentage); niet als bruto bedrag opgenomen Verhoging per 1 december 2025 wordt met terugwerkende kracht in januari 2026 betaald Daggelden, toeslagen en vergoedingen (o.a. leeftijdstoeslag) niet opgenomen Vakantiegeldpercentage, arbeidsduur en pensioenpremie (KLM Cabinefonds) niet geverifieerd; 8% is het wettelijk minimum Salarisschalen niet gevonden Loonsverhoging na 28 februari 2027 nog niet bekend",
  sourceUrl: "https://www.fnvcabine.nl/pdf/CAO2025/20251209_Onderhandelingsresultaat_cabine.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-07-01',
      note: "+1,25% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.0125 }] },
    },
    {
      from: '2027-01-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.01 }] },
    },
  ],
  vergoedingen: [],
};
