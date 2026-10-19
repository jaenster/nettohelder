import type { Cao } from '../types.js';

/**
 * Cao DHL Express Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao DHL Express Nederland
 * https://cao-kijker.awvn.nl/bestanden/2822_01-01-2026%20tot%2001-01-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-10-01 verhoogd met +4% per 2026-01-01
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDhlExpress2026: Cao = {
  id: 'dhl-express',
  name: "Cao DHL Express Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2025-10-01. Let op: Principeakkoord FNV, CNV en DHL Express van 31-3-2026, door de leden aanvaard (april 2026); volledige cao-tekst 2026-2027 nog niet gevonden De 4% per 1-1-2026 is per 1-5-2026 in de salarisbetaling verwerkt, met een eenmalige nabetaling over januari t/m april in het mei-salaris Salarisschalen per 1-10-2025 uit de cao 2024-2025; alleen minimum en maximum per functiegroep (geen treden), opgenomen als [min, max]. Tabellen 2026 niet gevonden Cao à la Carte: jaarlijks saldo van 6,24% van het jaarsalaris, standaard uitbetaald in twaalf maandelijkse termijnen (telt niet mee voor pensioen en vakantietoeslag); niet als eindejaarsuitkering opgenomen Vakantietoeslag 8%; voltijders ontvangen minimaal 96% van het minimumsalaris van loonschaal 6 Werknemers op het maximum van hun schaal krijgen jaarlijks in april een bruto uitkering van 1,5% van het jaarsalaris (cao 2024-2025) Pensioen bij Pensioenfonds Vervoer (excedentregeling bij Pensioenfonds DHL Nederland, werknemer 50%); werknemerspremie 2026 niet gevonden Overwerktoeslag over meeruren (boven de contracturen) per 1-4-2026 Verhogingen 2025 komen uit de cao 2024-2025",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2822_01-01-2026%20tot%2001-01-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2650.5, 2703.58],
      '2': [2650.5, 2838.74],
      '3': [2650.5, 3009.08],
      '4': [2650.5, 3219.72],
      '5': [2727.29, 3477.29],
      '6': [2887.74, 3755.44],
      '7': [3087.07, 4093.47],
      '8': [3331.69, 4502.8],
      '9': [3678.78, 5065.67],
      '10': [4153.68, 5825.52],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2743.27, 2798.21],
          '2': [2743.27, 2938.1],
          '3': [2743.27, 3114.4],
          '4': [2743.27, 3332.41],
          '5': [2822.74, 3599],
          '6': [2988.81, 3886.88],
          '7': [3195.12, 4236.74],
          '8': [3448.3, 4660.4],
          '9': [3807.54, 5242.97],
          '10': [4299.06, 6029.41],
        },
      },
    },
  ],
  vergoedingen: [],
};
