import type { Cao } from '../types.js';

/**
 * Nautische cao Blue Amigo Nautical Services (SwetsODV Maritiem) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Nautische cao Blue Amigo Nautical Services (SwetsODV Maritiem)
 * https://cao-kijker.awvn.nl/?s=Swets
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2027-01-01 +2,8% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoSwetsOdvMaritiem2026: Cao = {
  id: 'swets-odv-maritiem',
  name: "Nautische cao Blue Amigo Nautical Services (SwetsODV Maritiem)",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Principeakkoord 4-12-2025 (looptijd 1-1-2026 t/m 31-12-2027) volgens samenvatting AWVN cao-kijker; de akkoordtekst zelf was niet te downloaden Verhoging per 1-1-2027 wordt 3,4% als de gemiddelde cao-lonen in het 3e kwartaal 2026 met 4-5% stijgen en 4% bij 5% of meer; anders 2,8% 3,5% per 1-1-2025 is het minimum uit de cao 2024-2025 (stijging cao-lonen CBS 2e kwartaal 2024, minimaal 3,5%) Beloning per uur (basisuurloon, object-inschaling) en vierwekelijkse loonperiodes; vakantiedagen worden per loonperiode als geldelijke reservering uitbetaald Vakantiebijslag 8% van het basisuurloon plus onregelmatigheidstoeslagen, uitbetaald in mei (cao 2024-2025, art. 20) Fulltime dienstverband 40 uur per week; toeslagen per project Loongebouw (bijlage 1) en pensioen niet gevonden (cao-tekst is een scan)",
  sourceUrl: "https://cao-kijker.awvn.nl/?s=Swets",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2027-01-01',
      note: "+2,8% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.027999999999999997 }] },
    },
  ],
  vergoedingen: [],
};
