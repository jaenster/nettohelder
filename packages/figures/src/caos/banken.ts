import type { Cao } from '../types.js';

/**
 * CAO Banken (algemene bank-cao, NVB) 2025-2027, salaristabellen per 1 januari
 * 2026. De cao kent geen vaste trede-grid maar een loongebouw van salarisschalen
 * 3 t/m 15 (Tabel 3a): elke schaal heeft een functieaanvangsalaris (minimum) en
 * een functie-eindsalaris (maximum), met daartussen functiejaren. Daarom hier
 * gemodelleerd als 'band' per salarisschaal (levelLabel 'Salarisschaal').
 *
 * De gepubliceerde bedragen zijn bruto op jaarbasis (12 maanden) bij een
 * 36-urige werkweek; hier omgerekend naar maandbedragen (jaarbedrag / 12).
 * De min is het functieaanvangsalaris, de max het functie-eindsalaris van de
 * schaal — beide afgeleid uit Tabel 3a (per 1-1-2026, zonder de optionele
 * conversie van de beoordelingstoeslag naar functiesalaris; die +7,5%-variant
 * staat in Tabel 3b en geldt alleen als de werkgever daarvoor kiest).
 *
 * Vakantietoeslag 8% (art. 9.1). Dertiende maand: structureel 1/12e deel van het
 * persoonlijk functiesalaris (art. 9.2) ≈ 8,33%. Daarnaast een eenmalige
 * uitkering van € 500 bruto per 1 juli 2026 (niet als percentage te modelleren,
 * dus niet opgenomen).
 */
export const caoBanken2026: Cao = {
  id: 'banken',
  name: 'Cao Banken',
  year: 2026,
  effectiveNote:
    'Salaristabel per 1 januari 2026 (Tabel 3a, bruto 12 maanden bij 36-urige werkweek), omgerekend naar maandbedragen (/12). Loongebouw = salarisschalen 3 t/m 15, elk met functieaanvangsalaris (min) en functie-eindsalaris (max); daartussen functiejaren. defaultRsp 0,9. Cao-looptijd 1-1-2025 t/m 31-12-2026. NIET opgenomen: de +7,5%-variant na conversie van de beoordelingstoeslag naar functiesalaris (Tabel 3b, alleen als werkgever daarvoor kiest), de eenmalige uitkering van € 500 bruto per 1-7-2026, jeugd-/aanloopschalen en bovenschaligheid. Banken hebben geen sector-pensioenfonds (elke bank/Wtp-DC eigen regeling); pensioenfondsId = generieke richtwaarde.',
  sourceUrl:
    'https://www.fnv.nl/getmedia/560414b5-516d-4124-aed3-b4c96341e6cb/866-banken-cao-01-01-2025-tm-31-12-2026-v16042025.pdf',
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'band',
    hoursPerWeek: 36,
    levelLabel: 'Salarisschaal',
    unit: 'maand',
    levels: [
      { id: '3', min: 2274.25, max: 2587.95 },
      { id: '4', min: 2247.93, max: 2789.6 },
      { id: '5', min: 2355.79, max: 3113.94 },
      { id: '6', min: 2459.17, max: 3480.61 },
      { id: '7', min: 2754.09, max: 3906.28 },
      { id: '8', min: 3090.78, max: 4392.26 },
      { id: '9', min: 3478.24, max: 4949.18 },
      { id: '10', min: 3981.45, max: 5663.71 },
      { id: '11', min: 4551.46, max: 6475.61 },
      { id: '12', min: 5287.18, max: 7521.46 },
      { id: '13', min: 6140.35, max: 8740.3 },
      { id: '14', min: 7193.48, max: 10245.92 },
      { id: '15', min: 8454.17, max: 12046.1 },
    ],
    defaultRsp: 0.9,
  },
  vergoedingen: [],
};
