import type { Cao } from '../types.js';

/**
 * Cao AkzoNobel Coatings 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao AkzoNobel Coatings
 * https://www.cnv.nl/industrie/chemie-en-energie/cao-akzonobel/nieuws/cao-akzonobel-cnv-tekent-de-cao-2026-2026-09-11/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoAkzoNobelCoatings2026: Cao = {
  id: 'akzo-nobel-coatings',
  name: "Cao AkzoNobel Coatings",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Vernieuwd eindbod AkzoNobel van 8 juni 2026 voor alle AkzoNobel-cao's in Nederland; aanvaard door CNV-leden (CNV tekent, september 2026), FNV en De Unie stemden tegen Collectieve verhoging per 1-7-2026: salarisgroepen G 3%, MM1/2 2,8%, MM3/4 0,5% plus € 1.000 bruto eenmalig (fulltime); opgenomen is het percentage voor de G-schalen In juli 2026 een eenmalige nabetaling over januari t/m juni 2026, afhankelijk van salaris en schaal; bedrag niet vast, daarom niet opgenomen 13e maand 8,33% van het jaarsalaris (december); voor (Technical) Sales vervangen door de bonusregeling SFI Vakantietoeslag 8%, arbeidsduur gemiddeld 40 uur (5-ploegendienst 33,6 uur): cao-tekst 2025 (Deel A) Pensioen bij Stichting Pensioenfonds APF: werknemerspremie 4,3% plus eventuele extra premie over pensioengevend inkomen minus franchise; franchisebedrag en extra premie voor 2026 niet gevonden, daarom niet opgenomen Salarisschalen van 2026 niet gevonden; cao 2027 nog te onderhandelen",
  sourceUrl: "https://www.cnv.nl/industrie/chemie-en-energie/cao-akzonobel/nieuws/cao-akzonobel-cnv-tekent-de-cao-2026-2026-09-11/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-07-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
};
