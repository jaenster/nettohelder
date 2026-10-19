import type { Cao } from '../types.js';

export const caoRetailNonFood2026: Cao = {
  id: 'retailnonfood',
  name: 'Cao Retail Non-Food',
  year: 2026,
  effectiveNote:
    'Loontabel Mode, Juweliers en Parfumerieën, Verf en Woninginrichting en Tabaks- en Gemakswinkels per 1 januari 2026 (bijlage 1b), uit de cao Retail Non-Food, versie januari 2026. Dit is de standaardtabel: de cao bepaalt dat bij gebrek aan andere vermelding de loontabel Mode geldt. De cao kent vier afzonderlijke branchetabellen (Mode; Sport en Schoenen; Tuincentra; Wonen) met onderling afwijkende uurlonen; alleen de Mode-tabel is hier opgenomen. Bedragen zijn bruto uurlonen in euro. Het fulltime maandloon wordt berekend door het uurloon te vermenigvuldigen met 164,67 (bij Wonen met 160,33); de hoursPerWeek van 38 benadert deze factor. Functiegroepen A t/m I, waarbij A en B in de Mode-tabel hetzelfde uurloon delen. De stappen zijn functiejaren (ervaringsjaren): trede 0 = 21 jaar / 0 ervaringsjaren, daarna 1..n. De jeugdschalen (15 t/m 20 jaar), die op leeftijd in plaats van ervaring zijn gebaseerd, zijn niet opgenomen; deze tool rekent met het volwassen loon vanaf 21 jaar. Treden die in de cao als "2%" zijn afgedrukt (= vorige trede + 2%, afgerond op 2 decimalen) zijn hier uitgerekend; de berekende waarden sluiten exact aan op de daarna afgedrukte expliciete bedragen. De laagste treden van groep A volgen het wettelijk minimum(uur)loon; de schaallonen zijn per 1-1-2026 met 2,15% verhoogd. Een afzonderlijke loontabel geldt per 1 juli 2026 (niet opgenomen).',
  sourceUrl:
    'https://www.inretail.nl/wp-content/uploads/2026/01/260121-Cao-Retail-Non-Food-januari-2026.pdf',
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'uur',
    hoursPerWeek: 38,
    schalen: {
      'A en B': [14.71, 14.85, 15.0, 15.15, 15.45, 15.76, 16.08, 16.4],
      C: [14.93, 15.15, 15.38, 15.61, 15.84, 16.16, 16.48, 16.81, 17.15],
      D: [15.23, 15.45, 15.69, 15.92, 16.16, 16.4, 16.73, 17.06, 17.4, 17.75, 18.11],
      E: [
        15.76, 16.07, 16.4, 16.72, 17.06, 17.4, 17.75, 18.1, 18.46, 18.83, 19.21,
        19.59, 19.98, 20.39,
      ],
      F: [
        16.15, 16.56, 16.97, 17.4, 17.83, 18.28, 18.73, 19.2, 19.72, 20.11, 20.51,
        20.92, 21.34, 21.77, 22.2,
      ],
      G: [
        16.55, 17.29, 17.81, 18.35, 18.9, 19.46, 20.05, 20.65, 21.27, 21.91, 22.35,
        22.8, 23.26, 23.73, 24.2, 24.67,
      ],
      H: [
        17.43, 18.35, 19.32, 19.84, 20.38, 20.93, 21.5, 22.08, 22.67, 23.28, 23.75,
        24.23, 24.71, 25.2, 25.7, 26.22,
      ],
      I: [
        18.52, 19.69, 20.93, 21.5, 22.08, 22.67, 23.29, 23.91, 24.56, 25.22, 25.72,
        26.23, 26.75, 27.29, 27.84, 28.41,
      ],
    },
  },
  vergoedingen: [],
};
