import type { Cao } from '../types.js';

/**
 * Cao Saint-Gobain Abrasives Born 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Saint-Gobain Abrasives Born
 * https://www.cnv.nl/industrie/papier-en-karton/cao-st-gobain-abrasives/nieuws/cao-saint-gobain-abrasives-leden-cnv-stemmen-in-met-het-verbeterd-eindbod-2026-07-03/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-01-01 (month) uit de bron
 *   - Basistabel 1-1-2026: tabel per 2025-01-01 verhoogd met +1% per 2026-01-01
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSaintGobainAbrasivesBorn2026: Cao = {
  id: 'saint-gobain-abrasives-born',
  name: "Cao Saint-Gobain Abrasives Born",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; loontabel per 2025-01-01. Let op: Nieuwe cao 1-1-2026 t/m 31-12-2026: verbeterd eindbod aangenomen door CNV-leden (2-7-2026), met terugwerkende kracht per 1-1-2026 Eindbod: salarissen per 1-1-2026 structureel +1%, plus keuze tussen € 72,50 bruto per maand of 3,3% structureel; welke optie is gekozen en of de 3,3% bovenop de 1% komt is niet gevonden (voor schaal D7 noemt CNV totaal 3,53% bij € 72,50 of 3,3%) Vorige cao 1-4-2024 tot 1-1-2026: 4,5% per 1-4-2024 en 3,5% per 1-1-2025 ISR-bonus (per kwartaal) met mogelijke verdubbelaar in kwartaal 4 Arbeidsduur en vakantietoeslag niet gevonden in de geraadpleegde bronnen; vakantietoeslag hier op wettelijk 8% gezet Loongebouw 1-1-2025 t/m 31-12-2025 uit de cao 2024-2026 (afbeelding, gecontroleerd tegen de tabel 2024 x 1,035); laatste trede van D t/m K is een uitlooptrede (eventueel na wachtjaren), A en B kennen alleen trede 0. Tabel per 1-1-2026 niet gevonden",
  sourceUrl: "https://www.cnv.nl/industrie/papier-en-karton/cao-st-gobain-abrasives/nieuws/cao-saint-gobain-abrasives-leden-cnv-stemmen-in-met-het-verbeterd-eindbod-2026-07-03/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      'A': [2519.86],
      'B': [2557.65],
      'C': [2596.02, 2637.72, 2662.29, 2689.32],
      'D': [2660.93, 2675.79, 2723.69, 2770.36, 2817.02, 2845.27, 2872.27, 2899.26],
      'E': [2738.97, 2755.62, 2813.33, 2872.27, 2928.78, 2988.95, 3046.67, 3077.37],
      'F': [2817.02, 2889.49, 2960.7, 3034.38, 3105.6, 3178.09, 3250.54, 3320.53, 3353.69],
      'G': [3034.38, 3122.81, 3212.46, 3300.88, 3388.08, 3476.49, 3566.15, 3658.25, 3747.9, 3781.05],
      'H': [3202.63, 3308.26, 3415.09, 3521.94, 3629.99, 3740.54, 3844.92, 3951.77, 4061.06, 4166.67, 4208.44],
      'I': [3390.53, 3519.48, 3649.67, 3777.37, 3907.56, 4035.27, 4164.22, 4293.16, 4420.88, 4549.83, 4675.08, 4722.98],
      'J': [3589.5, 3747.9, 3898.96, 4052.46, 4205.97, 4354.56, 4511.77, 4665.27, 4816.32, 4964.93, 5102.46, 5152.81],
      'K': [3822.41, 3980.8, 4131.87, 4285.37, 4438.89, 4587.47, 4744.68, 4898.18, 5049.22, 5197.83, 5335.37, 5465.58, 5595.04],
    },
  },
  vergoedingen: [],
};
