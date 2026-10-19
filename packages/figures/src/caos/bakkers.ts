import type { Cao } from '../types.js';

export const caoBakkers2026: Cao = {
  id: 'bakkers',
  name: 'Cao Bakkersbedrijf',
  year: 2026,
  effectiveNote:
    'Functie-uurloontabel per 1 januari 2026 (inclusief 2,25% verhoging) uit de cao Ambachtelijke Bakkerijen (cao Bakkersbedrijf - deel A), looptijd 1 maart 2025 t/m 31 augustus 2026. Bron: Salarisschalen Ambacht per 1 januari 2026, gepubliceerd door het Fonds Ambachtelijke Bakkerijen. Bedragen zijn bruto uurlonen in euro; voltijd is 38 uur per week, dus het maandloon wordt benaderd met uurloon × 38 × 52 / 12 ≈ uurloon × 164,67. De cao kent twee loongebouwen: "Productie, algemeen, financieel, administratief, ICT, kwaliteit & productontwikkeling, logistiek en technische dienst" (schalen Productie 1 t/m 11) en het per 1 januari 2026 nieuwe loongebouw "Commercie" (schalen Commercie 1 t/m 10); beide zijn hier opgenomen met een prefix per loongebouw. De stappen zijn functietreden (ervaringsjaren). Per schaal begint de functietrede-nummering bij 1, maar verschillende schalen starten pas op een hogere functietrede in de cao-tabel; in deze dataset is elke schaal-array uitgelijnd vanaf de laagste in de cao afgedrukte functietrede van die schaal (index 0 = die eerste trede). De op leeftijd gebaseerde jeugdschalen (15 t/m 20 jaar) zijn NIET opgenomen; deze tool rekent met het vakvolwassen loon vanaf functietrede 1. Per 1 januari 2026 is de functietrede-nummering gewijzigd (oude functietrede 3 wordt 1, oude 4 wordt 2, enz.); de hier opgenomen bedragen volgen de nieuwe nummering. Een afzonderlijke loontabel geldt per 1 juli 2026 (niet opgenomen). Geen eindejaarsuitkering: de cao kent geen periodiek terugkerende uitkeringen.',
  sourceUrl:
    'https://www.fondsambachtelijkebakkerijen.nl/app/uploads/sites/2/2025/12/Salarisschalen-Ambacht-per-1-jan-def-publicatie.pdf',
  pensioenfondsId: 'bakkers',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      'Productie 1': [15.24, 15.67, 16.11, 16.55, 17.02, 17.45, 17.9, 18.34],
      'Productie 2': [16.5, 16.85, 17.14, 17.47, 17.78, 18.13, 18.41, 18.75],
      'Productie 3': [16.89, 17.24, 17.61, 17.97, 18.3, 18.71, 19.06, 19.42],
      'Productie 4': [
        17.2, 17.63, 18.06, 18.43, 18.87, 19.24, 19.64, 20.03, 20.47,
      ],
      'Productie 5': [
        17.68, 18.15, 18.58, 19.05, 19.49, 19.92, 20.39, 20.83, 21.26, 21.74,
      ],
      'Productie 6': [
        18.22, 18.76, 19.29, 19.83, 20.37, 20.89, 21.43, 21.95, 22.51, 23.02,
      ],
      'Productie 7': [
        18.64, 19.24, 19.86, 20.49, 21.1, 21.76, 22.36, 22.98, 23.6, 24.23,
        24.84,
      ],
      'Productie 8': [
        19.22, 19.92, 20.63, 21.31, 21.99, 22.67, 23.41, 24.08, 24.8, 25.47,
        26.17, 26.86,
      ],
      'Productie 9': [
        19.93, 20.73, 21.54, 22.32, 23.11, 23.91, 24.71, 25.49, 26.29, 27.11,
        27.9, 28.68, 29.48,
      ],
      'Productie 10': [
        20.86, 21.82, 22.74, 23.69, 24.68, 25.62, 26.56, 27.53, 28.49, 29.43,
        30.38, 31.32, 32.32,
      ],
      'Productie 11': [
        21.88, 22.94, 24.02, 25.09, 26.16, 27.24, 28.27, 29.35, 30.41, 31.51,
        32.58, 33.62, 34.72, 35.8,
      ],
      'Commercie 1': [14.71],
      'Commercie 2': [14.86, 15.16, 15.46],
      'Commercie 3': [15.0, 15.3, 15.53, 15.69, 16.07],
      'Commercie 4': [15.52, 15.86, 16.17, 16.5, 16.87],
      'Commercie 5': [17.18, 17.55, 17.92, 18.24, 18.59],
      'Commercie 6': [17.54, 17.9, 18.23, 18.57, 18.94, 19.27],
      'Commercie 7': [18.13, 18.51, 18.99, 19.41, 19.83, 20.24, 20.67],
      'Commercie 8': [
        18.62, 19.17, 19.72, 20.26, 20.84, 21.42, 21.97, 22.5,
      ],
      'Commercie 9': [
        19.24, 19.89, 20.57, 21.2, 21.87, 22.52, 23.21, 23.81, 24.53,
      ],
      'Commercie 10': [
        20.03, 20.77, 21.56, 22.3, 23.09, 23.79, 24.58, 25.31, 26.08, 26.86,
      ],
    },
  },
  vergoedingen: [],
};
