import type { Cao } from '../types.js';

/**
 * Cao CRV Monsternemers 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao CRV Monsternemers
 * https://cao-kijker.awvn.nl/bestanden/3547_01-06-2026%20tot%2001-06-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 2,25%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-06-01 +3% collectieve verhoging; 2027-01-01 +0,5% collectieve verhoging; 2027-06-01 +3,5% collectieve verhoging; 2028-01-01 +0,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoCrvMonsternemers2026: Cao = {
  id: 'crv-monsternemers',
  name: "Cao CRV Monsternemers",
  year: 2026,
  effectiveNote: "Cao 2026-06-01 t/m 2028-05-31; geen loontabel bekend. Let op: Eén bruto basisuurloon voor alle monsternemers: € 15,15 per 1-6-2026, € 15,23 per 1-1-2027, € 15,76 per 1-6-2027 en € 15,84 per 1-1-2028 (altijd minimaal het wettelijk minimumloon) Bovenop het uurloon: 8,51% voor vakantiedagen en 2,98% voor feestdagen; vakantietoeslag 8% en eindejaarsuitkering 2,25% Vooral oproepkrachten; geen voltijdse arbeidsduur vastgelegd, daarom geen salaristabel Eenmalige netto reiskostenvergoeding van € 100 of € 200 (afhankelijk van gereden kilometers) Pensioen bij Bedrijfspensioenfonds voor de Landbouw (BPL); premie niet in de cao",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/3547_01-06-2026%20tot%2001-06-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0225,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-06-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.03 }] },
    },
    {
      from: '2027-01-01',
      note: "+0,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.005 }] },
    },
    {
      from: '2027-06-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.035 }] },
    },
    {
      from: '2028-01-01',
      note: "+0,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.005 }] },
    },
  ],
  vergoedingen: [],
};
