import type { Cao } from '../types.js';

export const caoSupermarktLmb2026: Cao = {
  id: 'supermarktlmb',
  name: 'Cao Supermarkt Levensmiddelenbedrijf (LMB)',
  year: 2026,
  effectiveNote:
    'Bijlage 2 Loonschalen, tabel "LOONSCHALEN PER UUR PER 1 JANUARI 2026", uit de Cao voor het Levensmiddelenbedrijf 2024-2026 (Vakcentrum/CNV, looptijd 2 juli 2024 t/m 1 april 2026, algemeen verbindend verklaard 22 september 2025). Dit is de cao Levensmiddelenbedrijf (LMB) van het Vakcentrum voor franchisenemers en zelfstandige supermarkten (o.a. Plus, Spar), niet te verwarren met de cao VGL (grootwinkelbedrijven). Bedragen zijn bruto uurlonen in euro; de schaallonen zijn per 1 januari 2026 met 1% verhoogd. De cao kent geen vaste voltijdsweek per contract maar rekent met gemiddeld 40 uur per week; het maandloon wordt berekend door het uurloon te vermenigvuldigen met factor 174 (periodeloon van vier weken: factor 160). De hoursPerWeek van 40 sluit hierop aan. Functiegroepen A t/m I. De stappen zijn functiejaren: index 0 = trede 21 (volwassen aanvangsloon, 21 jaar / 0 functiejaren), daarna oplopende functiejaren. Volgens artikel 18 kent groep A alleen trede 21/0 en functiejaar 1; groepen B t/m E kennen trede 21/0 plus functiejaren 1 t/m 5; groepen F t/m I kennen alleen trede 21/0 en functiejaar 5 (hier als index 0 en 1 opgenomen). De jeugdlonen (15 t/m 20 jaar), die op leeftijd in plaats van functiejaren zijn gebaseerd, zijn niet opgenomen; deze tool rekent met het volwassen loon vanaf 21 jaar. De laagste lonen volgen waar nodig het wettelijk minimum(uur)loon. Geen eindejaarsuitkering in deze cao.',
  sourceUrl:
    'https://www.vakcentrum.nl/media/xaeb54x4/cao-lmb-2024-2026-web-def.pdf',
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'uur',
    hoursPerWeek: 40,
    schalen: {
      A: [14.51, 14.51],
      B: [14.51, 15.5, 15.72, 15.94, 16.16, 16.6],
      C: [14.73, 16.23, 16.5, 16.78, 17.05, 17.59],
      D: [15.47, 16.96, 17.28, 17.61, 17.94, 18.59],
      E: [17.23, 17.92, 18.32, 18.71, 19.1, 19.89],
      F: [19.91, 22.09],
      G: [22.84, 25.34],
      H: [26.19, 29.07],
      I: [30.05, 33.34],
    },
  },
  vergoedingen: [],
};
