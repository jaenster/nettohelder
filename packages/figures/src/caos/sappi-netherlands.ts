import type { Cao } from '../types.js';

/**
 * Cao Sappi Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Sappi Netherlands B.V.
 * https://www.cnv.nl/industrie/papier-en-karton/cao-sappi/nieuws/cao-sappi-neterlands-uitnodiging-ledenraadpleging-aangepast-cao-eindbod-2026-09-21/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2025-04-01 (month) uit de bron
 *   - Latere tabellen berekend uit de cao-verhogingen (2027-04-01)
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoSappiNetherlands2026: Cao = {
  id: 'sappi-netherlands',
  name: "Cao Sappi Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2028-03-31; loontabel per 2025-04-01. Let op: Aangepast eindbod geaccepteerd door leden van CNV, FNV en ACV op 6-10-2026; cao 1-4-2026 t/m 31-3-2028. Geen structurele verhoging in 2026; 1,5% per 1-4-2027 Eenmalige uitkering EUR 1.250 bruto voor werknemers die op 1-4-2026 in dienst waren; betaaldatum niet gevonden, daarom niet in oneOffPayments Vakantietoeslag = bruto maandsalaris van april (betaald uiterlijk 30 juni) en eindejaarsuitkering = maandsalaris van december (rond 15 december), beide met als vloer het salaris van functiegroep 6 met 6 periodieken; hier weergegeven als 8,33% (1/12) Vorige cao (1-4-2024 t/m 31-3-2026): 4% per 1-4-2025 plus EUR 600 eenmalig per 1-10-2025 (voor 2025) Minimum basisloon EUR 16 bruto per uur Pensioen bij PGB; volgens cao 2024-2026 geen werknemersbijdrage. Nieuw: 10,5% pensioenbijdrage voor werknemers zonder vast contract (details niet gevonden) Salaristabel per 1-4-2025 uit de cao 2024-2026 (geen structurele verhoging in 2026); functiegroep 9 en 10 met beoordelingsmarge 0% (de cao kent daarnaast +2%, +4% en +6% marges) (bron tabel: https://cao-kijker.awvn.nl/bestanden/0237_01-04-2024%20tot%2001-04-2026_cao.pdf)",
  sourceUrl: "https://www.cnv.nl/industrie/papier-en-karton/cao-sappi/nieuws/cao-sappi-neterlands-uitnodiging-ledenraadpleging-aangepast-cao-eindbod-2026-09-21/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '1': [2768, 2806, 2832, 2860, 2891],
      '2': [2809, 2836, 2863, 2896, 2929, 2962],
      '3': [2852, 2885, 2921, 2953, 2990, 3025, 3061],
      '4': [2913, 2950, 2989, 3025, 3065, 3108, 3148],
      '5': [2997, 3032, 3073, 3120, 3160, 3202, 3243],
      '6': [3095, 3141, 3184, 3226, 3267, 3310, 3357],
      '7': [3148, 3209, 3272, 3334, 3397, 3458, 3523, 3585],
      '8': [3316, 3388, 3447, 3521, 3586, 3651, 3723, 3788, 3859],
      '9': [3488, 3580, 3671, 3765, 3854, 3947, 4041, 4128, 4223, 4313],
      '10': [3700, 3811, 3928, 4043, 4155, 4271, 4381, 4494, 4610, 4720, 4835],
    },
  },
  periods: [
    {
      from: '2027-04-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: {
        kind: 'table',
        stepLabel: 'trede',
        unit: 'maand',
        hoursPerWeek: 40,
        schalen: {
          '1': [2809.52, 2848.09, 2874.48, 2902.9, 2934.37],
          '2': [2851.14, 2878.54, 2905.95, 2939.44, 2972.94, 3006.43],
          '3': [2894.78, 2928.28, 2964.82, 2997.3, 3034.85, 3070.38, 3106.92],
          '4': [2956.7, 2994.25, 3033.84, 3070.38, 3110.98, 3154.62, 3195.22],
          '5': [3041.96, 3077.48, 3119.1, 3166.8, 3207.4, 3250.03, 3291.65],
          '6': [3141.43, 3188.12, 3231.76, 3274.39, 3316.01, 3359.65, 3407.36],
          '7': [3195.22, 3257.14, 3321.08, 3384.01, 3447.96, 3509.87, 3575.85, 3638.78],
          '8': [3365.74, 3438.82, 3498.71, 3573.82, 3639.79, 3705.77, 3778.85, 3844.82, 3916.89],
          '9': [3540.32, 3633.7, 3726.07, 3821.48, 3911.81, 4006.21, 4101.62, 4189.92, 4286.35, 4377.7],
          '10': [3755.5, 3868.17, 3986.92, 4103.65, 4217.33, 4335.07, 4446.72, 4561.41, 4679.15, 4790.8, 4907.53],
        },
      },
    },
  ],
  vergoedingen: [],
};
