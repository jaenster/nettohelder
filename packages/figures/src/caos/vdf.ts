import type { Cao } from '../types.js';

/**
 * CAO VDF drogisterijbranche (Vereniging Drogisterij- en aanverwante Filiaalbedrijven) 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: VDF CAO 2025-2026 (Vereniging Drogisterij- en aanverwante Filiaalbedrijven), Bijlage 1 Loonschalen - Loonschalen per 1-1-2026 per maand (referentie)
 * https://www.fnv.nl/getmedia/0a2eec82-6c1d-4676-90c1-fa8c6dae3b69/2072-vereniging-drogisterij-en-aanverwante-filiaalbedrijven-vdf-01-07-2025-tm-30-06-2026-v27102025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Group 1 only has functiejaren up to 2 (21-base 2358.50, fj1 2358.50, fj2 2363.31) - verify group 1 has no fj3-6 in 1-1-2026 maand table
 *   - First entry of each schaal array is the leeftijd-21-zonder-functiejaar amount used as base trede, then functiejaren 1..6
 *   - hoursPerWeek=38 assumed (drogisterij fulltime norm) - the per-maand amounts are REFERENTIE based on 260 werkbare dagen per jaar, not a strict hours-per-week conversion; verify the fulltime hours basis
 *   - Whether to use per-maand referentie vs per-uur as primary (CAO states per-uur/4-weken are leading, maand is reference)
 *   - pensioenfondsId detailhandel - branche is registered with Bedrijfspensioenfonds Detailhandel, but a separate Stichting Pensioenfonds A.S. Watson Nederland also exists for some employers
 *   - All 1-1-2026 PER MAAND amounts transcribed from PDF page 47
 *
 * Excluded: jeugdschalen / leeftijdslonen (16, 17, 18, 19, 20 jaar); avondtoeslag; zondag- en feestdagtoeslag; plaatsvervangingstoeslag (15%); diplomatoeslag; overwerktoeslag; per-uur en per-4-weken loonschalen (only per-maand referentie modelled); successor CAO from 1-7-2026 (not yet known)
 */
export const caoVdf2026: Cao = {
  id: 'vdf',
  name: "CAO VDF",
  year: 2026,
  effectiveNote: "Salary table effective from 1 January 2026 (LOONSCHALEN PER 1-1-2026), reflecting the +1,5% collectieve verhoging per 1-1-2026 (after +2,5% per 1-7-2025), as agreed in the VDF-cao 1-7-2025 t/m 30-6-2026. These are the REFERENTIE maandlonen based on 260 werkbare dagen per jaar (the CAO's primary unit is per uur / per 4 weken; the per-maand amounts are reference figures and the per-maand for groups 1 and 2 must be checked against the statutory minimum hourly wage). No further wage increase is scheduled within 2026 in this akkoord (CAO expires 30-6-2026; a successor CAO from 1-7-2026 is not yet known). EXCLUDED: jeugdschalen/leeftijdslonen (ages 16-20), the leeftijd-21-zonder-functiejaar starting amount is included as the base trede; toeslagen (avondtoeslag, zondagtoeslag, plaatsvervangingstoeslag 15%, diplomatoeslag, overwerk), maaltijdvergoeding and reiskostenvergoeding are listed under vergoedingen, not in the scale.",
  sourceUrl: "https://www.fnv.nl/cao-sector/handel/drogisterijbranche/cao-vdf",
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'maand',
    hoursPerWeek: 38,
    schalen: {
      '1': [2358.5, 2358.5, 2363.31],
      '2': [2380.95, 2409.81, 2438.67, 2467.53, 2494.79, 2523.65, 2554.11],
      '3': [2477.15, 2506.01, 2533.27, 2562.13, 2592.59, 2619.85, 2666.34],
      '4': [2485.17, 2517.23, 2558.92, 2600.61, 2643.9, 2685.58, 2727.27],
      '5': [2605.42, 2651.91, 2674.36, 2724.06, 2762.54, 2805.83, 2845.92],
      '6': [2810.64, 2855.54, 2898.83, 2930.89, 2972.58, 3019.08, 3060.76],
    },
  },
  vergoedingen: [
    {"id":"maaltijdvergoeding","label":"Maaltijdvergoeding","amount":6.5,"unit":"perDag","taxable":false,"note":"Op declaratiebasis voor werknemer die werkdag begon voor/op 15:00 en doorwerkt na 19:00."},
    {"id":"reiskosten","label":"Reiskostenvergoeding woon-werkverkeer","amount":0.19,"unit":"perKm","taxable":false,"note":"Vanaf 10 km enkele reis, max EUR 10,50 per dag. Minimumregeling; werkgever mag positief afwijken."},
  ],
};
