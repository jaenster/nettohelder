import type { Cao } from '../types.js';

/**
 * Cao voor het Uitgeverijbedrijf 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor het Uitgeverijbedrijf
 * https://www.cnv.nl/documents/5951/Cao_voor_het_Uitgeverijbedrijf_okt_2025_-_dec_2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-01-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoUitgeverij2026: Cao = {
  id: 'uitgeverij',
  name: "Cao voor het Uitgeverijbedrijf",
  year: 2026,
  effectiveNote: "Cao 2025-10-01 t/m 2027-12-31; loontabel per 2026-01-01. Let op: Salarisschalen van functiegroep Boeken- en Tijdschriftuitgeverijbedrijf (hoofdstuk 11); dagblad, journalisten en grafische werknemers hebben eigen tabellen. De tabel geeft per schaal alleen minimum en maximum; opgeslagen als twee treden. Schaal 1 begint op het wettelijk minimumloon (max € 2.303,59). Persoonlijk keuzebudget (PKB) van minimaal 12% van het jaarsalaris, waarvan 8% vakantietoeslag, 2% werkgeversbijdrage en 2% waarde van verlof; niet als eindejaarsuitkering meegenomen. Pensioen is per werkgever geregeld: minimaal 21,5% beschikbare premie, werknemer betaalt 1/3; franchise 2026 € 19.001 (of wettelijk € 19.172). Geen vast fonds, daarom niet ingevuld.",
  sourceUrl: "https://www.cnv.nl/documents/5951/Cao_voor_het_Uitgeverijbedrijf_okt_2025_-_dec_2027.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2303.59],
      '2': [2303.59, 2517.17],
      '3': [2380.46, 2705.98],
      '4': [2454.26, 2904.57],
      '5': [2617.45, 3347.96],
      '6': [2846.58, 3824.51],
      '7': [3301.61, 4477.99],
      '8': [3635.85, 4976.75],
      '9': [4007.98, 5507.49],
    },
  },
  periods: [
    {
      from: '2027-01-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 36,
        schalen: {
          '1': [2372.7],
          '2': [2372.7, 2592.69],
          '3': [2451.87, 2787.16],
          '4': [2527.89, 2991.71],
          '5': [2695.97, 3448.4],
          '6': [2931.98, 3939.25],
          '7': [3400.66, 4612.33],
          '8': [3744.93, 5126.05],
          '9': [4128.22, 5672.71],
        },
      },
    },
  ],
  vergoedingen: [],
};
