import type { Cao } from '../types.js';

/**
 * Cao Huisartsenzorg Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Salaristabel per 1-11-2025 - Cao Huisartsenzorg 2025-2027 (LHV)
 * https://www.lhv.nl/wp-content/uploads/2025/11/Salaristabel-per-1-11-25-Cao-Huisartsenzorg-2025-2027.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Schaal-naar-salarisnummer toewijzing is onregelmatig in de bron-PDF: elke schaal beslaat een ander bereik van salarisnummers. Verifieer begin/eindtrede per schaal (bijv. schaal 7 = nr 13 t/m 25, schaal 9 = nr 19 t/m 30 met afwijkende bedragen 5.007/5.128/5.256/5.388 op nr 23-26).
 *   - Schaal 9 wijkt vanaf nr 23 af van schaal 8/10 (5.007 i.p.v. 5.105 etc.) - bevestig de aparte kolomwaarden.
 *   - hoursPerWeek=36 aanname: bevestig of de cao-bedragen op een 36-urige werkweek zijn gebaseerd.
 *   - Eindejaarsuitkering 8,33% (13e maand) - bevestig dat de cao Huisartsenzorg dit kent en het percentage.
 *   - Pensioenfonds PFZW voor werknemers (huisartsen zelf vallen onder SPH; doktersassistenten/POH onder PFZW) - bevestig.
 *   - Loonsverhoging +3% per 1 juli 2026 is afgesproken maar tabel nog niet gepubliceerd; verifieer de gepubliceerde 1-7-2026 tabel zodra beschikbaar.
 *
 * Excluded: aanloop-/WML-salarisnummers worden niet apart gemodelleerd (negatieve en lage nummers met WML-ondergrens); ORT / onregelmatigheidstoeslag; gratificatie- en lustrumgratificatieregeling; generatieregeling; PLB-uren uitbreiding; eenmalige uitkeringen; loonsverhoging per 1 juli 2026 (+3%, tabel nog niet gepubliceerd); loonsverhoging per 1 mei 2027 (+3%, valt buiten 2026)
 */
export const caoHuisartsenzorg2026: Cao = {
  id: 'huisartsenzorg',
  name: "Cao Huisartsenzorg Nederland",
  year: 2026,
  effectiveNote: "Salaristabel per 1-11-2025 (verhoging 3% t.o.v. 1-5-2025), die ongewijzigd geldt op 1 januari 2026. Bruto maandbedragen bij voltijd (36 uur/week). LET OP: per 1 juli 2026 volgt een structurele loonsverhoging van 3% (cao-akkoord 2025-2027), maar de bijbehorende salaristabel is nog niet officieel gepubliceerd; deze is daarom NIET als periode opgenomen (geen tabel om te transcriberen). Per 1 mei 2027 volgt nog 3% (valt buiten 2026). Uitgesloten: aanloop-/WML-salarisnummers worden niet apart gemodelleerd, toeslagen (ORT/onregelmatigheidstoeslag), gratificatie-/lustrumregeling, generatieregeling, PLB-uren en eenmalige uitkeringen.",
  sourceUrl: "https://www.lhv.nl/wp-content/uploads/2025/11/Salaristabel-per-1-11-25-Cao-Huisartsenzorg-2025-2027.pdf",
  pensioenfondsId: 'pfzw',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 36,
    schalen: {
      '1': [2724, 2724, 2724, 2724, 2724, 2724, 2724, 2724],
      '2': [2724, 2724, 2724, 2724, 2724, 2775, 2905],
      '3': [2724, 2724, 2775, 2905, 3053, 3191, 3341],
      '4': [2724, 2775, 2905, 3053, 3191, 3341, 3496, 3644],
      '5': [2905, 3053, 3191, 3341, 3496, 3644, 3795, 3942],
      '6': [3341, 3496, 3644, 3795, 3942, 4095, 4236, 4383, 4515],
      '7': [3795, 3942, 4095, 4236, 4383, 4515, 4627, 4740, 4861, 4977, 5105, 5227, 5358],
      '8': [4095, 4236, 4383, 4515, 4627, 4740, 4861, 4977, 5105, 5227, 5358, 5493, 5628, 5770, 5913],
      '9': [4627, 4740, 4861, 4977, 5007, 5128, 5256, 5388, 5521, 5659, 5799, 5945],
      '10': [5007, 5128, 5256, 5388, 5521, 5659, 5799, 5945, 6092, 6243, 6397],
      '11': [5521, 5659, 5799, 5945, 6092, 6243, 6397, 6556, 6720, 6889, 7061],
      '12': [6092, 6243, 6397, 6556, 6720, 6889, 7061, 7235, 7414, 7598, 7787],
    },
  },
  vergoedingen: [],
};
