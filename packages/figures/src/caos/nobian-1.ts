import type { Cao } from '../types.js';

/**
 * Cao Nobian 1 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Nobian 1
 * https://www.cnv.nl/documents/6116/2054-nobian-nederland-1-cao-01-01-2026-tm-31-12-2027-v28042026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-04-01 (month) uit de bron
 *   - Basistabel 1-1-2026 teruggerekend uit de tabel per 2026-04-01 (gedeeld door +1%)
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-04-01, 2027-07-01)
 *
 * Excluded: none stated
 */
export const caoNobian12026: Cao = {
  id: 'nobian-1',
  name: "Cao Nobian 1",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; loontabel per 2026-04-01. Let op: Salarisgroepen met drie punten: minimumsalaris, 90%-niveau en 100%-niveau (maandbedragen; de jaarsalarissen zijn bepalend). Met uitstekende beoordeling kan het salaris tot 105% van het 100%-niveau groeien Groep A0: minimumloon tot 120% minimumloon (aanloopschaal werkervaringsplaatsen), niet opgenomen Eenmalige uitkering € 750 bruto in januari 2027 voor werknemers in dienst op 1-1-2027 (geen naar-rato-bepaling vermeld) Vaste eindejaarsuitkering gelijk aan het maandinkomen van december (hier als 8,33%) Pensioen: Stichting Pensioenfonds APF, collectieve beschikbare middelloonregeling; werknemerspremie 2026 7,2% van de pensioengrondslag, franchise € 19.172 (2026). Boven het opbouwgrensbedrag (1% boven 100%-niveau salarisgroep 57 Hoger Personeel) een individuele beschikbare premieregeling; dat grensbedrag is niet opgenomen Gemiddeld 40 uur per week; volcontinudienst 33,6 uur per week Individuele jaarlijkse herziening per 1 april op basis van beoordeling, niet opgenomen",
  sourceUrl: "https://www.cnv.nl/documents/6116/2054-nobian-nederland-1-cao-01-01-2026-tm-31-12-2027-v28042026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2677.23, 2982.18, 3312.87],
      'B': [2703.96, 3079.21, 3420.79],
      'C': [2763.37, 3219.8, 3577.23],
      'D': [2845.54, 3368.32, 3742.57],
      'E': [2966.34, 3593.07, 3993.07],
      'F': [3115.84, 3878.22, 4308.91],
      'G': [3377.23, 4230.69, 4700],
      'H': [3666.34, 4613.86, 5126.73],
      'K': [4073.27, 5155.45, 5727.72],
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
          'A': [2704, 3012, 3346],
          'B': [2731, 3110, 3455],
          'C': [2791, 3252, 3613],
          'D': [2874, 3402, 3780],
          'E': [2996, 3629, 4033],
          'F': [3147, 3917, 4352],
          'G': [3411, 4273, 4747],
          'H': [3703, 4660, 5178],
          'K': [4114, 5207, 5785],
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
          'A': [2785.12, 3102.36, 3446.38],
          'B': [2812.93, 3203.3, 3558.65],
          'C': [2874.73, 3349.56, 3721.39],
          'D': [2960.22, 3504.06, 3893.4],
          'E': [3085.88, 3737.87, 4153.99],
          'F': [3241.41, 4034.51, 4482.56],
          'G': [3513.33, 4401.19, 4889.41],
          'H': [3814.09, 4799.8, 5333.34],
          'K': [4237.42, 5363.21, 5958.55],
        },
      },
    },
  ],
  vergoedingen: [],
};
