import type { Cao } from '../types.js';

/**
 * Cao AZL N.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao AZL N.V.
 * https://www.cnv.nl/dienstverlening/verzekeraars/cao-azl/nieuws/azl-stem-over-het-onderhandelingsresultaat-cao-en-sociaal-plan-2025-12-05/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 7%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2027-01-01 +3,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoAzl2026: Cao = {
  id: 'azl',
  name: "Cao AZL N.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Jaaruitkering van 15,33% van 12 maandsalarissen: 8,33% vakantiegeld (mei) en 7,0% eindejaarsuitkering (november); vanaf 2026 kan gekozen worden voor maandelijkse uitbetaling (bron: cao 2024-2025 en onderhandelingsresultaat 2026-2027) Medewerkers in dienst vóór 2026 krijgen 8 van hun 42 verlofdagen in de vorm van geld (uit te laten betalen of verlof van te kopen) Internetvergoeding +€ 5 per maand (max. € 35) Salaristabel 2026 niet gevonden; schalen stijgen met de genoemde percentages",
  sourceUrl: "https://www.cnv.nl/dienstverlening/verzekeraars/cao-azl/nieuws/azl-stem-over-het-onderhandelingsresultaat-cao-en-sociaal-plan-2025-12-05/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.07,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2027-01-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.035 }] },
    },
  ],
  vergoedingen: [],
};
