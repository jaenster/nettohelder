import type { Cao } from '../types.js';

/**
 * Cao Hoger Personeel AkzoNobel Nederland 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Hoger Personeel AkzoNobel Nederland
 * https://www.cnv.nl/industrie/chemie-en-energie/cao-akzonobel/nieuws/cao-akzonobel-vernieuwd-eindbod-akzonobel-en-stemming-2026-06-08/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-05-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2026-07-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoAkzoNobelHogerPersoneel2026: Cao = {
  id: 'akzo-nobel-hoger-personeel',
  name: "Cao Hoger Personeel AkzoNobel Nederland",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2025-05-01. Let op: Cao 2026 (1-1-2026 t/m 31-12-2026) op basis van het vernieuwde eindbod van AkzoNobel van 8 juni 2026; CNV-leden stemden in, FNV en De Unie stemden tegen; CNV heeft in september 2026 getekend Collectieve verhoging per 1 juli 2026 verschilt per salarisgroep: G-schalen (G8 HP, G9 HP) 3%, MM1/MM2 2,8%, MM3/MM4 0,5% plus eenmalig € 1.000 bruto (fulltime); hier 2,8% opgenomen. Voor MM5 HP en MM6 HP niets gevonden In juli 2026 eenmalige nabetaling over januari t/m juni 2026, afhankelijk van salaris en schaal (bedrag niet bekend) Per 1 mei 2025 verhoging van € 1.620 bruto per jaar (€ 1.500 + 8% vakantietoeslag), hier als € 125 per maand; eenmalig € 125 bruto per maand over januari t/m april 2025 Salarisschalen per 1 mei 2025 (salarislijn HP-CO) met minimumsalaris, 90%-niveau en 100%-niveau als drie treden; schalen 2026 niet gevonden 13e maand van 8,33% van het jaarsalaris (december, pensioengevend) Arbeidsduur gemiddeld 40 uur per week; volcontinudienst 33,6 uur Pensioen via APF (CDC-regeling); eigen bijdrage 2025 was 6,6%, bijdrage 2026 en franchise niet gevonden Een nieuwe cao voor 2027 moet nog worden onderhandeld",
  sourceUrl: "https://www.cnv.nl/industrie/chemie-en-energie/cao-akzonobel/nieuws/cao-akzonobel-vernieuwd-eindbod-akzonobel-en-stemming-2026-06-08/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'G8-HP': [3313, 4183, 4648],
      'G9-HP': [3641, 4604, 5116],
      'MM1': [4090, 5180, 5755],
      'MM2': [4541, 5947, 6608],
      'MM3': [5032, 6825, 7583],
      'MM4': [5576, 7843, 8714],
      'MM5-HP': [6173, 9016, 10018],
      'MM6-HP': [6833, 10382, 11536],
    },
  },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,8% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          'G8-HP': [3405.76, 4300.12, 4778.14],
          'G9-HP': [3742.95, 4732.91, 5259.25],
          'MM1': [4204.52, 5325.04, 5916.14],
          'MM2': [4668.15, 6113.52, 6793.02],
          'MM3': [5172.9, 7016.1, 7795.32],
          'MM4': [5732.13, 8062.6, 8957.99],
          'MM5-HP': [6345.84, 9268.45, 10298.5],
          'MM6-HP': [7024.32, 10672.7, 11859.01],
        },
      },
    },
  ],
  vergoedingen: [],
};
