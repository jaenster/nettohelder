import type { Cao } from '../types.js';

/**
 * Cao Ampleon Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Ampleon Netherlands B.V.
 * https://www.cnv.nl/industrie/metalektro/cao-ampleon-netherlands/nieuws/ampleon-cao-onderhandelingsakkoord-ondertekend/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAmpleon2026: Cao = {
  id: 'ampleon',
  name: "Cao Ampleon Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-09-01 t/m 2027-12-31; loontabel per 2025-01-01. Let op: Onderhandelingsakkoord (CNV, getekend oktober 2026) voor cao 1-9-2025 t/m 31-12-2027; definitieve cao-tekst nog niet gepubliceerd Nominale verhoging van het fulltime basissalaris: € 1.100 bruto per jaar per 1-4-2026 en € 1.200 bruto per jaar per 1-4-2027 (jaarbedragen; niet omgerekend naar maandbedrag). Salarisschalen blijven ongewijzigd Salarisschalen functiegroepen 10 t/m 19 per 1-1-2025 in hele euro's per maand, naar schaalpositie 70% t/m 120% van het referentiesalaris (groep 16-19 ook 60%); de posities zijn hier als treden opgenomen Vakantiebijslag (8%) zit in een persoonlijk budget van 24,57% van het maandsalaris dat maandelijks wordt uitbetaald; minimaal vakantiebijslag € 2.476 per jaar (22+, per 1-1-2025) On-target bonus verhoogd van 6% naar 8% van het jaarsalaris per 1-1-2026 (afhankelijk van doelrealisatie) Minimumvangnet van 1,5% individuele verhoging per 1-4-2027 bij voldoende beoordeling en salaris onder 80% van het referentiesalaris Medewerkersdeel pensioenpremie 2,7% van de pensioengrondslag (sinds 1-7-2014, cao 2024-2025); franchise niet vermeld",
  sourceUrl: "https://www.cnv.nl/industrie/metalektro/cao-ampleon-netherlands/nieuws/ampleon-cao-onderhandelingsakkoord-ondertekend/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '10': [2262, 2423, 2585, 2746, 2908, 3070, 3231, 3393, 3554, 3716, 3877],
      '11': [2396, 2566, 2738, 2909, 3081, 3252, 3422, 3594, 3765, 3936, 4107],
      '12': [2645, 2834, 3023, 3212, 3401, 3590, 3778, 3967, 4156, 4346, 4535],
      '13': [2894, 3101, 3308, 3514, 3721, 3927, 4135, 4342, 4548, 4755, 4961],
      '14': [3214, 3443, 3673, 3902, 4132, 4361, 4591, 4820, 5050, 5279, 5509],
      '15': [3699, 3963, 4227, 4492, 4756, 5020, 5284, 5548, 5813, 6077, 6342],
      '16': [4030, 4701, 5037, 5373, 5709, 6045, 6380, 6716, 7052, 7388, 7724, 8059],
      '17': [4755, 5546, 5943, 6338, 6735, 7131, 7528, 7923, 8320, 8716, 9113, 9508],
      '18': [5505, 6423, 6881, 7341, 7800, 8258, 8717, 9176, 9635, 10093, 10552, 11011],
      '19': [6530, 7618, 8162, 8706, 9250, 9795, 10338, 10882, 11426, 11970, 12514, 13058],
    },
  },
  vergoedingen: [],
};
