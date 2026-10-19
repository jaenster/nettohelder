import type { Cao } from '../types.js';

/**
 * Cao Verhurende Bedrijven Bulksector Rotterdams Havengebied 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Verhurende Bedrijven Bulksector Rotterdams Havengebied
 * https://www.fnv.nl/getmedia/5b2ce4c7-bfaa-4c90-9aff-037a8ee5e9c1/1446-verhurende-bedrijven-bulksector-rotterdamse-havengebied-cao-01-01-2025-tm-31-12-2027-v19052026.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +1% per 2025-07-01
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +1% per 2026-01-01
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoBulksectorRotterdamVerhuur2026: Cao = {
  id: 'bulksector-rotterdam-verhuur',
  name: "Cao Verhurende Bedrijven Bulksector Rotterdams Havengebied",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; loontabel per 2025-01-01. Let op: Naast de vaste verhogingen van 1% (1-7-2025, 1-1-2026, 1-1-2027) worden de basismaandsalarissen jaarlijks per 1 januari aangepast aan de CPI (oktober-oktober); die uitkomsten zijn niet opgenomen Schaal = maandsalarissen per 1-1-2025 incl. 2,579% prijscompensatie, treden 1 t/m 3 (Groep 1 aankomend operator t/m Groep 4 operator A); jeugdlonen tot 21 jaar niet opgenomen Vakantietoeslag is 1,08 bruto basismaandsalaris per jaar, als 9% opgenomen Eenmalige uitkering van € 350 bruto bij de salarisbetaling van december 2025 (bij een volledig jaar in dienst; anders naar rato) Normale arbeidsduur 7 3/4 uur per dag en 38 3/4 uur per week Pensioen: premieregeling met leeftijdsafhankelijke staffel; werknemersbijdrage 4% (20-29 jaar) of 6,5% (30 jaar en ouder) van de pensioengrondslag; franchise niet in de cao, daarom niet als pensioen opgenomen",
  sourceUrl: "https://www.fnv.nl/getmedia/5b2ce4c7-bfaa-4c90-9aff-037a8ee5e9c1/1446-verhurende-bedrijven-bulksector-rotterdamse-havengebied-cao-01-01-2025-tm-31-12-2027-v19052026.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.09,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 38.75,
    schalen: {
      '1': [3094.27, 3118.08, 3208.27],
      '2': [3104.32, 3433.79, 3533.02],
      '3': [3600.45, 3695.37, 3857.75],
      '4': [3921.77, 4029.15, 4110.31],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 38.75,
        schalen: {
          '1': [3125.21, 3149.26, 3240.35],
          '2': [3135.36, 3468.13, 3568.35],
          '3': [3636.46, 3732.33, 3896.33],
          '4': [3960.99, 4069.44, 4151.41],
        },
      },
    },
  ],
  vergoedingen: [],
};
