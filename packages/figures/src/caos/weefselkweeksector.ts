import type { Cao } from '../types.js';

/**
 * Cao voor de Weefselkweeksector 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor de Weefselkweeksector
 * https://www.fnv.nl/getmedia/9cf8fe88-fa57-4077-b109-a37946496788/906-weefselkweek-cao-01-10-2022-tm-30-09-2027-v09092024.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-08-01 +2,15% collectieve verhoging; 2027-01-01 +1,1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoWeefselkweeksector2026: Cao = {
  id: 'weefselkweeksector',
  name: "Cao voor de Weefselkweeksector",
  year: 2026,
  effectiveNote: "Cao 2022-10-01 t/m 2027-09-30; geen loontabel bekend. Let op: De bepalingen van de cao Glastuinbouw (en toekomstige cao's Glastuinbouw) maken volledig deel uit van deze cao, met uitzondering van enkele artikelen; loonsverhogingen en loongebouw B volgen daarom de cao Glastuinbouw (verhogingen hier overgenomen uit de cao Glastuinbouw 2025-2027) Verhogingen 2026-08-01 en 2027-01-01 gelden in de Glastuinbouw voor schalen C t/m H en het feitelijk loon Vakantiegeld 8,33% (jaarloon = 12 x maandloon plus 8,33% vakantiegeld volgens de cao) Eigen pensioenregeling per bedrijf (minimaal 1,75% opbouw over salaris minus franchise); aansluiting bij BPL vrijwillig; werknemersdeel niet gevonden Geen toeslag voor onregelmatige avonduren uit de cao Glastuinbouw",
  sourceUrl: "https://www.fnv.nl/getmedia/9cf8fe88-fa57-4077-b109-a37946496788/906-weefselkweek-cao-01-10-2022-tm-30-09-2027-v09092024.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-08-01',
      note: "+2,15% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.0215 }] },
    },
    {
      from: '2027-01-01',
      note: "+1,1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.011000000000000001 }] },
    },
  ],
  vergoedingen: [],
};
