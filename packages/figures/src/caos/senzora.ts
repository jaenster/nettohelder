import type { Cao } from '../types.js';

/**
 * Cao Senzora B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Senzora B.V.
 * https://cao-kijker.awvn.nl/bestanden/4381_01-01-2026%20tot%2001-01-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2027-01-01 +1% + +€ 100/mnd collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoSenzora2026: Cao = {
  id: 'senzora',
  name: "Cao Senzora B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Cao 1-1-2026 t/m 31-12-2027 (onderhandelingsresultaat met De Unie, 27-10-2025): salarisschalen en salarissen per 1-1-2026 en per 1-1-2027 +1,0% plus € 100 vast per maand (naar rato FTE). Voorbeeld: normsalaris € 2.850 wordt € 2.978,50 per 1-1-2026 en € 3.108,29 per 1-1-2027 13e maand (8,33%) wordt afgebouwd: bestaande medewerkers kiezen in 2026 tussen een onvoorwaardelijke 13e maand van 8,33% of een kleinere 13e maand van 4% plus een resultaatafhankelijke bonus (on target 10%); in 2027 tussen 8,33% 13e maand of een resultaatafhankelijke bonus van 8,33% (+8,33% bij ruime overschrijding van de doelstelling). Nieuwe medewerkers vanaf 1-1-2026 krijgen altijd de bonusregeling Vakantietoeslag niet gevonden in de bron; 8% is het wettelijk minimum Salarisschalen, arbeidsduur en pensioen niet gevonden Kilometervergoeding woon-werk € 0,23 per km onbelast",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/4381_01-01-2026%20tot%2001-01-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2027-01-01',
      note: "+1% + +€ 100/mnd collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.01 }, { perMaand: 100 }] },
    },
  ],
  vergoedingen: [],
};
