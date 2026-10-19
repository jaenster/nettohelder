import type { Cao } from '../types.js';

/**
 * Cao Luchtverkeersleiding Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Luchtverkeersleiding Nederland
 * https://fnv.nl/getmedia/2de00af5-78d3-47b6-8aac-0653a51a0d26/1732-luchtverkeersleiding-nederland-lvnl-cao-01-07-2024-tm-31-12-2026-v15072025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 38 uur/week
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoLvnl2026: Cao = {
  id: 'lvnl',
  name: "Cao Luchtverkeersleiding Nederland",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2026-12-31; geen loontabel bekend. Let op: Verhogingen zijn die voor niet-operationeel personeel (cao 1 juli 2024 t/m 31 december 2026) Operationeel personeel (cao 1 juli 2025 t/m 31 december 2026): prijscompensatie 3,7% per 1 juli 2025 en per 1 januari 2026 in totaal 4,28% (0,75% structureel, 2,28% compensatie nieuwe TOD-systematiek en 1,25% om garantieregelingen te beperken) Prijscompensatie per 1 juli 2025 is 3,7% (CPI maart 2025 t.o.v. maart 2024, zoals in de cao vermeld); per 1 juli 2026 volgt opnieuw prijscompensatie op basis van CPI maart 2026, uitkomst niet in de bron Niet-operationeel personeel krijgt in november 2025 en november 2026 een eenmalige uitkering van € 250 netto Pensioen via ABP; het werknemersdeel van de premie is niet in de cao vermeld Salaristabellen niet gevonden in de arbeidsvoorwaardenbundel Onderhandelingen over een nieuwe cao lopen; nog geen resultaat voor 2027 gevonden",
  sourceUrl: "https://fnv.nl/getmedia/2de00af5-78d3-47b6-8aac-0653a51a0d26/1732-luchtverkeersleiding-nederland-lvnl-cao-01-07-2024-tm-31-12-2026-v15072025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38 },
  vergoedingen: [],
};
