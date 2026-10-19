import type { Cao } from '../types.js';

/**
 * Cao Veiligheidsdomein 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Veiligheidsdomein 2025-2027 (Sociaal Fonds Veiligheidsdomein, VVNL/AVV)
 * https://jouwveiligheidsdomein.nl/wp-content/uploads/2026/01/Cao-Veiligheidsdomein-2025-2027-28-12.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel gemodelleerd: de gebruiker vult het eigen brutosalaris in (de cao-tekst bevat wel loontabellen per 1 januari 2026)
 *   - Vakantiegeld 8%, eindejaarsuitkering 2,5%
 *   - Voltijd 38 uur/week
 *   - Pensioenfonds staat op generiek; de cao noemt Bpf Particuliere Beveiliging
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoVeiligheidsdomein2026: Cao = {
  id: 'veiligheidsdomein',
  name: "Cao Veiligheidsdomein",
  year: 2026,
  effectiveNote: "Cao 2025-12-28 t/m 2027-12-28; geen loontabel bekend. Let op: Partijen: Vereniging Veiligheidsdomein Nederland (VVNL) en AVV; geldt alleen bij werkgevers die lid zijn van VVNL (niet algemeen verbindend; de cao Particuliere Beveiliging is leidend in de sector) Verhoging 2,5% per 1-1-2026 geldt niet voor verkeersregelaars (nieuwe loontabel vanaf WML met 2,5% per jaar tot de toptrede); VVNL noemt inclusief reiskostenvergoeding € 0,23/km (eerste 8 km) in totaal 4% Jaarlijkse verhoging vanaf 2027 op basis van CPI, prijsontwikkeling in de beveiliging en overleg; uitkomst onbekend Eindejaarsuitkering 2,5% over 13 x periodeloon of 12 x basismaandloon plus vakantietoeslag (cao 2025-2027) Om een loonsverlaging door de avv van de cao Particuliere Beveiliging te voorkomen wordt 4,5% omgezet in een individueel loonbudget Pensioen bij Bedrijfstakpensioenfonds Particuliere Beveiliging; werknemersdeel niet gevonden",
  sourceUrl: "https://jouwveiligheidsdomein.nl/wp-content/uploads/2026/01/Cao-Veiligheidsdomein-2025-2027-28-12.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.025,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38 },
  vergoedingen: [],
};
