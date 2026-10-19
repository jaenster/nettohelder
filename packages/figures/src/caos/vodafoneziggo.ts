import type { Cao } from '../types.js';

/**
 * VodafoneZiggo Cao 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: VodafoneZiggo Cao
 * https://www.unie.nl/en/your-collective-labour-agreement-and-sector/a-revised-collective-labour-agreement-from-vodafoneziggo
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-06-01 +2,8% collectieve verhoging; 2027-01-01 +2,8% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoVodafoneziggo2026: Cao = {
  id: 'vodafoneziggo',
  name: "VodafoneZiggo Cao",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Eerste onderhandelingsresultaat (februari 2026, 2,5% per 1-6-2026, looptijd 1 jaar) werd bij De Unie afgewezen; aangepast eindbod van 9-4-2026: looptijd 1-1-2026 t/m 31-12-2027, 2,8% per juni 2026 en 2,8% per januari 2027 Aangepast resultaat door De Unie-leden aangenomen (81% voor, mei 2026); CNV had de ondertekening van het eerste resultaat opgeschort Verhoging juni 2026 geldt ook voor persoonlijke garanties en toeslagen Verhoging 1-4-2025 (2,5%) uit de cao 2024-2025 Fulltime 40 uur per week; voor het Retail-cluster 38 uur Vakantietoeslag 8% (cao 2024-2025); geen 13e maand gevonden Pensioen: Cappital (a.s.r.), ABP of PNO Media afhankelijk van de groep; nieuwe medewerkers vanaf 2027 vlakke premie 17,9% waarvan werkgever 13,4 (werknemersdeel niet expliciet vermeld); niet opgenomen Loontabel 2026 niet gevonden",
  sourceUrl: "https://www.unie.nl/en/your-collective-labour-agreement-and-sector/a-revised-collective-labour-agreement-from-vodafoneziggo",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-06-01',
      note: "+2,8% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.027999999999999997 }] },
    },
    {
      from: '2027-01-01',
      note: "+2,8% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.027999999999999997 }] },
    },
  ],
  vergoedingen: [],
};
