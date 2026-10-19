import type { Cao } from '../types.js';

/**
 * Cao Transavia 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Transavia
 * https://www.fnv.nl/getmedia/65de88af-fce3-416a-9957-1ed5901821f9/574-transavia-airlines-grondpersoneel-cao-01-07-2024-tm-28-02-2026-v20062025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loontabel per 2026-01-01 (month) uit de bron
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: none stated
 */
export const caoTransavia2026: Cao = {
  id: 'transavia',
  name: "Cao Transavia",
  year: 2026,
  effectiveNote: "Cao 2024-07-01 t/m 2026-02-28; loontabel per 2026-01-01. Let op: Ingevuld voor de cao Transavia Airlines Grondpersoneel (1-7-2024 t/m 28-2-2026); Transavia heeft daarnaast aparte cao's voor cabinepersoneel en vliegers (niet opgenomen) Cao is per 28-2-2026 afgelopen; onderhandelingen over een nieuwe cao zijn op 1 april 2026 gestart (FNV-inzet 6% per jaar); geen resultaat gevonden CPI-afspraak: was de CBS-jaarmutatie CPI december 2025 hoger dan 3%, dan per 1-1-2026 extra verhoging ter grootte van het verschil (max 2%); uitkomst niet geverifieerd, niet opgenomen CPI-afspraak: was de CPI-jaarmutatie februari 2026 hoger dan 0,33% t.o.v. december 2025, dan extra verhoging per 1-3-2027 (tekst noemt ook terugwerkende kracht per 1-1-2027, uiterlijk juni 2027 geïmplementeerd) van het verschil (max 0,5%); uitkomst onbekend, niet opgenomen Salaristabel per 1-1-2026 (incl. 2%); treden met halve stappen (bijv. 4, 4x, 5) als aparte treden opgenomen. Groepen 3-9 beginnen bij trede 4 Groepen 10, 11 en 12 hebben alleen een minimum en maximum (periodiek € 130,69 / € 146,44 / € 179,52); opgenomen als [min, max] Medewerkers in T-schalen (technici) krijgen een retentietoeslag van 8,5% van het schaalsalaris (niet opgenomen) Eenmalige uitkeringen (€ 2.000 + € 1.000 bruto) en compensatie gemiste verhogingen 2024 zijn in december 2024 betaald; niet opgenomen Pensioen niet opgenomen (premie werknemer niet gevonden)",
  sourceUrl: "https://www.fnv.nl/getmedia/65de88af-fce3-416a-9957-1ed5901821f9/574-transavia-airlines-grondpersoneel-cao-01-07-2024-tm-28-02-2026-v20062025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: {
    kind: 'table',
    stepLabel: 'trede',
    unit: 'maand',
    hoursPerWeek: 40,
    schalen: {
      '3': [2872.77, 2899.58, 2926.4, 2953.58, 2980.78, 3008.55, 3036.35, 3064.66, 3092.99, 3121.94, 3150.83, 3176.94, 3203.04, 3233.04, 3263.04, 3295.67, 3328.31],
      '4': [2980.78, 3008.55, 3036.35, 3064.66, 3092.99, 3121.94, 3150.83, 3180.29, 3209.78, 3239.85, 3269.9, 3300.61, 3331.27, 3358.01, 3384.75, 3416.58, 3448.4, 3482.88, 3517.37],
      '5': [3092.99, 3121.94, 3150.83, 3180.29, 3209.78, 3239.85, 3269.9, 3300.61, 3331.27, 3362.57, 3393.86, 3425.78, 3457.66, 3490.25, 3522.78, 3555.96, 3589.17, 3613.88, 3638.59, 3672.96, 3707.33, 3744.41, 3781.47],
      '6': [3269.9, 3300.61, 3331.27, 3362.57, 3393.86, 3425.78, 3457.66, 3490.25, 3522.78, 3555.96, 3589.17, 3623.03, 3656.9, 3691.44, 3725.99, 3761.21, 3796.45, 3832.39, 3868.31, 3913.45, 3958.61, 3996.17, 4033.72, 4074.06, 4114.39],
      '7': [3457.66, 3490.25, 3522.78, 3555.96, 3589.17, 3623.03, 3656.9, 3691.44, 3725.99, 3761.21, 3796.45, 3832.39, 3868.31, 3904.98, 3941.65, 3979.03, 4016.41, 4054.56, 4092.68, 4131.61, 4170.91, 4211.57, 4252.22, 4294.58, 4337.12, 4372.38, 4407.61, 4451.72, 4495.79, 4540.74, 4585.71],
      '8': [3656.9, 3691.44, 3725.99, 3761.21, 3796.45, 3832.39, 3868.31, 3904.98, 3941.65, 3979.03, 4016.41, 4054.56, 4092.68, 4131.61, 4170.91, 4211.57, 4252.22, 4294.58, 4337.12, 4380.48, 4423.84, 4468.05, 4512.31, 4557.46, 4602.55, 4648.58, 4694.63, 4741.56, 4788.51, 4836.4, 4884.3, 4941.6, 4998.89, 5048.88, 5098.86, 5149.86, 5200.84],
      '9': [3868.31, 3904.98, 3941.65, 3979.03, 4016.41, 4054.56, 4092.68, 4131.61, 4170.91, 4211.57, 4252.22, 4294.58, 4337.12, 4380.48, 4423.84, 4468.05, 4512.31, 4557.46, 4602.55, 4648.58, 4694.63, 4741.56, 4788.51, 4836.4, 4884.3, 4933.12, 4981.98, 5031.77, 5081.6, 5132.42, 5183.26, 5235.07, 5286.91, 5339.77, 5392.63, 5446.56, 5500.51, 5555.52, 5610.49, 5666.61, 5722.7, 5783.67, 5844.64, 5903.11],
      '10': [4227.5, 7289.1],
      '11': [4881, 8398.52],
      '12': [5893.56, 10355.2],
      '6T': [3608.5, 3639.19, 3669.86, 3701.16, 3732.45, 3764.37, 3796.24, 3828.82, 3861.36, 3894.54, 3927.77, 3961.62, 3995.48, 4030.03, 4064.58, 4099.8, 4135.03, 4170.97, 4206.9, 4252.05, 4297.2, 4334.74, 4372.31, 4416.03, 4459.75],
      '7T': [3920.46, 3953.05, 3985.59, 4018.77, 4051.98, 4085.83, 4119.7, 4154.25, 4188.79, 4224.01, 4259.22, 4295.2, 4331.12, 4367.78, 4404.45, 4441.83, 4479.22, 4517.36, 4555.48, 4594.4, 4633.71, 4674.37, 4715.03, 4757.39, 4799.9, 4835.18, 4870.42, 4914.51, 4958.58, 5008.16, 5057.76],
      '8T': [4119.7, 4154.25, 4188.79, 4224.01, 4259.22, 4295.2, 4331.12, 4367.78, 4404.45, 4441.83, 4479.22, 4517.36, 4555.48, 4594.4, 4633.71, 4674.37, 4715.03, 4757.39, 4799.9, 4843.28, 4886.64, 4930.86, 4975.11, 5020.26, 5065.36, 5111.39, 5157.43, 5204.37, 5251.32, 5299.21, 5347.09, 5404.4, 5461.68, 5511.68, 5561.67, 5617.28, 5672.91],
      '9T': [4331.12, 4367.78, 4404.45, 4441.83, 4479.22, 4517.36, 4555.48, 4594.4, 4633.71, 4674.37, 4715.03, 4757.39, 4799.9, 4843.28, 4886.64, 4930.86, 4975.11, 5020.26, 5065.36, 5111.39, 5157.43, 5204.37, 5251.32, 5299.21, 5347.09, 5395.91, 5444.78, 5494.58, 5544.4, 5595.22, 5646.06, 5697.88, 5749.72, 5802.56, 5855.42, 5909.37, 5963.31, 6018.32, 6073.29, 6129.4, 6185.51, 6246.48, 6307.44, 6365.91],
    },
  },
  vergoedingen: [],
};
