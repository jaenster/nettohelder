import type { Cao } from '../types.js';

/**
 * Cao DHL Supply Chain Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao DHL Supply Chain Nederland
 * https://www.fnv.nl/getmedia/05b8efc0-3fb3-44b0-826c-8ca0627888c0/2099-dhl-supply-chain-nederland-cao-01-04-2025-tm-31-10-2026-v22092025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-10-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoDhlSupplyChain2026: Cao = {
  id: 'dhl-supply-chain',
  name: "Cao DHL Supply Chain Nederland",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2026-10-31; loontabel per 2025-10-01. Let op: Extra verhoging alleen voor schaal 1 t/m 8: 1,2% per 1 oktober 2025 en 0,8% per 1 september 2026 (niet in de verhogingen opgenomen) Eenmalige bruto uitkering in augustus 2025 ter waarde van 2% over april en mei 2025 (naar rato) Werknemers op het maximum van hun schaal krijgen in januari 2026 en januari 2027 een eenmalige bruto prestatiebonus van 1%, 2% of 3% van het jaarsalaris, afhankelijk van de beoordeling Pensioen bij Pensioenfonds DHL: werknemersbijdrage 11,25% per 1 juli 2025 en 9,75% per 1 juli 2026 (totaal 27%); franchise en grondslag niet gevonden, daarom niet ingevuld Bij significant hogere inflatie in 2026 kan in de volgende cao een extra verhoging volgen Onderhandelingen over de opvolger zijn op 25 augustus 2026 gestart; nog geen resultaat bekend Salarisschalen per 1-10-2025 (bijlage 3 cao 2025-2026) geven alleen minimum, mediaan en maximum per schaal; opgenomen als [minimum, maximum]. Minimum schaal 1-6 volgt het WML Voltijd is 40 uur per week",
  sourceUrl: "https://www.fnv.nl/getmedia/05b8efc0-3fb3-44b0-826c-8ca0627888c0/2099-dhl-supply-chain-nederland-cao-01-04-2025-tm-31-10-2026-v22092025.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2535.67, 2704.05],
      '2': [2535.67, 2766.89],
      '3': [2535.67, 2865.96],
      '4': [2535.67, 2984.37],
      '5': [2535.67, 3188.57],
      '6': [2535.67, 3680.32],
      '7': [2678.48, 3976.45],
      '8': [3039.76, 4490.85],
      '9': [3295.69, 5001.46],
      '10': [3577.03, 5614.97],
      '11': [3824.09, 6275.76],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2586.38, 2758.13],
          '2': [2586.38, 2822.23],
          '3': [2586.38, 2923.28],
          '4': [2586.38, 3044.06],
          '5': [2586.38, 3252.34],
          '6': [2586.38, 3753.93],
          '7': [2732.05, 4055.98],
          '8': [3100.56, 4580.67],
          '9': [3361.6, 5101.49],
          '10': [3648.57, 5727.27],
          '11': [3900.57, 6401.28],
        },
      },
    },
  ],
  vergoedingen: [],
};
