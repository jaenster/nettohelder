import type { Cao } from '../types.js';

/**
 * Cao Nobian Nederland 2 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nobian Nederland 2
 * https://www.fnv.nl/getmedia/ff4fa1d6-313f-4c37-80f1-aee039be0bde/2055-nobian-nederland-2-cao-01-01-2026-tm-31-12-2027-v28042026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +1%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01, 2027-07-01)
 *
 * Excluded: none stated
 */
export const caoNobian22026: Cao = {
  id: 'nobian-2',
  name: "Cao Nobian Nederland 2",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-04-01. Let op: Cao 2026-2027 (aangepast eindbod november 2025, aanvaard december 2025): 1% per 1-4-2026, 3% per 1-7-2027 en € 750 bruto eenmalig in januari 2027; loonparagraaf ongewijzigd t.o.v. het eerste eindbod Per 1-1-2025 verhoging van het jaarsalaris met € 1.000 bruto (jaarsalaris = 12 maandsalarissen + 8% vakantietoeslag, hier omgerekend als € 77,16 per maand) en per 1-4-2025 3,5% (cao 2024-2025) Cao II: STI-uitkering voor salarisgroepen MM1 t/m MM4 (56 t/m 59) per 1-1-2026 structureel verhoogd van 10% naar 12,5% (resultaatafhankelijk, niet opgenomen) Salarisschalen per 1-4-2026 (incl. 1%) als maandbedragen: minimumsalaris, 90%-niveau en 100%-niveau als drie treden; de jaarsalarissen zijn bepalend. Per 1-7-2027 nieuwe schalen incl. 3% Arbeidsduur gemiddeld 40 uur per week; 5-ploegendienst 33,6 uur. Ploegentoeslag per 1-1-2026 verhoogd (5-ploegen 30%, 3-ploegen 20,5%, 2-ploegen 12,75%) Vakantietoeslag 8% van de maandsalarissen Pensioen bij Stichting Pensioenfonds APF (collectieve beschikbare middelloonregeling): totale werknemerspremie 2026 7,2% van de pensioengrondslag middelloon (structureel 4,3% plus extra premie), franchise 2026 € 19.172; daarnaast eventueel premie individuele beschikbare premieregeling boven het opbouwgrensbedrag (niet opgenomen)",
  sourceUrl: "https://www.fnv.nl/getmedia/ff4fa1d6-313f-4c37-80f1-aee039be0bde/2055-nobian-nederland-2-cao-01-01-2026-tm-31-12-2027-v28042026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '54': [3449.5, 4209.9, 4841.58],
      '55': [3792.08, 4634.65, 5329.7],
      '56': [4260.4, 5213.86, 5996.04],
      '57': [4730.69, 5987.13, 6885.15],
      '58': [5241.58, 6870.3, 7900.99],
      '59': [5808.91, 7895.05, 9079.21],
      '60': [6430.69, 9078.22, 10439.6],
      '61': [7119.8, 10453.47, 12021.78],
    },
  },
  periods: [
    {
      from: '2026-04-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '54': [3484, 4252, 4890],
          '55': [3830, 4681, 5383],
          '56': [4303, 5266, 6056],
          '57': [4778, 6047, 6954],
          '58': [5294, 6939, 7980],
          '59': [5867, 7974, 9170],
          '60': [6495, 9169, 10544],
          '61': [7191, 10558, 12142],
        },
      },
    },
    {
      from: '2027-07-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '54': [3588.52, 4379.56, 5036.7],
          '55': [3944.9, 4821.43, 5544.49],
          '56': [4432.09, 5423.98, 6237.68],
          '57': [4921.34, 6228.41, 7162.62],
          '58': [5452.82, 7147.17, 8219.4],
          '59': [6043.01, 8213.22, 9445.1],
          '60': [6689.85, 9444.07, 10860.32],
          '61': [7406.73, 10874.74, 12506.26],
        },
      },
    },
  ],
  vergoedingen: [],
};
