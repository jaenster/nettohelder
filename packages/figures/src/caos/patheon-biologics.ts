import type { Cao } from '../types.js';

/**
 * Cao Patheon Biologics B.V. (Thermo Fisher Groningen) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Patheon Biologics B.V. (Thermo Fisher Groningen)
 * https://cao-kijker.awvn.nl/bestanden/3932_01-10-2025%20tot%2001-10-2026_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-02-01 +3,2% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoPatheonBiologics2026: Cao = {
  id: 'patheon-biologics',
  name: "Cao Patheon Biologics B.V. (Thermo Fisher Groningen)",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2026-09-30; geen loontabel bekend. Let op: Eindbod (looptijd 1 oktober 2025 - 1 oktober 2026) met twee opties; AWVN registreert het als geaccepteerd eindbod per 1 februari 2026, welke optie is gekozen is niet vermeld Beide opties: 3,2% collectief per 1 februari 2026 plus een eenmalige uitkering ter hoogte van de bruto maandelijkse verhoging over januari 2026 Optie 1: daarnaast een site merit budget van 2% per 1 april (individueel); optie 2: daarnaast een eenmalige bruto-uitkering van € 1.500 in juli 2026 Salarisschalen zijn jaarsalarissen (minimum, midpoint, maximum) inclusief vakantietoeslag; niet opgenomen. De C-schaaltabel blijft ongewijzigd Annual Incentive Plan (AIP) bonus niet opgenomen Volcontinudienst gemiddeld 33,6 uur per week Pensioenpremie niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3932_01-10-2025%20tot%2001-10-2026_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-02-01',
      note: "+3,2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.032 }] },
    },
  ],
  vergoedingen: [],
};
