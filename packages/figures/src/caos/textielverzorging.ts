import type { Cao } from '../types.js';

/**
 * Cao Textielverzorging 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Textielverzorging
 * https://zoek.officielebekendmakingen.nl/stcrt-2025-24361.html
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (hour) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-12-31)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTextielverzorging2026: Cao = {
  id: 'textielverzorging',
  name: "Cao Textielverzorging",
  year: 2026,
  effectiveNote: "Cao 2026-09-01 t/m 2027-10-31; loontabel per 2026-01-01. Let op: Nieuwe cao 1-9-2026 t/m 31-10-2027 alleen afgesloten door CNV met FTN en Netex; FNV deed niet mee en kondigde stakingen aan. Cao-tekst was in september 2026 nog niet opgemaakt/aangemeld Verhoging per 31-12-2026: 4,3% op uurlonen en loontabel, behalve loongroep I (WML); uurlonen boven LG5 periodiek 6 stijgen met een vast bedrag van € 0,78 per uur Eenmalig € 200 bruto voor werknemers in loongroep 2 t/m 5, naar rato van het dienstverband; uitbetaaldatum onbekend, daarom niet in oneOffPayments Verhogingen per 1-7-2025 (+ € 0,60 per uur) en 1-1-2026 (+3%) uit de vorige cao (AVV tot en met 31-8-2026) Scale = uurlonen per 1-1-2026 voor LG2 t/m LG5, hele periodieken 0 t/m 6 als treden; halve periodieken alleen bij branche-beoordelingssystematiek. Loongroep I = wettelijk minimumloon Fulltime is 36 uur per week; voor chauffeurs en kleine vestigingen tot 40 uur Vakantiebijslag 8,33% en eindejaarsuitkering 5,33% van het brutojaarloon (niet voor loongroep I) Pensioen niet opgenomen: werknemerspremie niet gevonden",
  sourceUrl: "https://zoek.officielebekendmakingen.nl/stcrt-2025-24361.html",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0533,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'uur',
    hoursPerWeek: 36,
    schalen: {
      'LG2': [15.45, 15.57, 15.72, 15.84, 15.98, 16.12, 16.25],
      'LG3': [15.89, 16.02, 16.16, 16.3, 16.44, 16.57, 16.71],
      'LG4': [16.2, 16.33, 16.47, 16.61, 16.74, 16.88, 17.03],
      'LG5': [17.31, 17.47, 17.62, 17.79, 17.93, 18.1, 18.24],
    },
  },
  periods: [
    {
      from: '2026-12-31',
      note: "+4,3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'uur',
        hoursPerWeek: 36,
        schalen: {
          'LG2': [16.11, 16.24, 16.4, 16.52, 16.67, 16.81, 16.95],
          'LG3': [16.57, 16.71, 16.85, 17, 17.15, 17.28, 17.43],
          'LG4': [16.9, 17.03, 17.18, 17.32, 17.46, 17.61, 17.76],
          'LG5': [18.05, 18.22, 18.38, 18.55, 18.7, 18.88, 19.02],
        },
      },
    },
  ],
  vergoedingen: [],
};
