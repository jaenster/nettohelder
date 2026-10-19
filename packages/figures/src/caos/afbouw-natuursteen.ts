import type { Cao } from '../types.js';

/**
 * CAO Afbouw (Nederland) 2026 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Boekje Cao Afbouw 2026-2027, Versie 2 - bijlage 2 Loontabellen
 * https://www.noa.nl/media/5fxep4jn/boekje-cao-afbouw-2026-2027-versie-2.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Alle uurlonen groepen 1b-6b en 1a-6a per 1 januari 2026 (doorlopende 2025-tabel)
 *   - Alle uurlonen groepen 1b-6b en 1a-6a per 1 februari 2026 (na +3,5% + EUR 30)
 *   - hoursPerWeek: 37,5 voor afbouw (b)-schalen vs 37 voor natuursteen (a)-schalen - de a-schalen zijn op 37u gebaseerd, niet 37,5
 *   - Of natuursteen (a) en afbouw (b) in een gecombineerde table horen of als aparte CAO-records
 *   - eindejaarsuitkering = 0 (alleen WAO/WIA-eindejaarsuitkering bestaat, geen algemeen 13e maand)
 *   - reisuren EUR 14/uur per 1-2-2026 is per uur, hier provisorisch als perDag gemodelleerd - aanpassen
 *   - kilometervergoeding EUR 0,34 bruto belastbaarheid (deel boven fiscaal vrije ruimte is belast)
 *
 * Excluded: jeugdschalen (werknemers t/m 20 jaar); BBL-leerling- en inloopschalen; doelgroepen (Participatiewet/Wajong/Wsw); uta-werknemers (maandsalaristabel, functieniveau 1-6 min/max); prestatietoeslag; overwerk-, ploegen-, verschoven-tijd- en weekend-/zondagtoeslagen; EHBO-/diplomatoeslag; eenmalige uitkeringen en WAO/WIA-eindejaarsuitkering
 */
export const caoAfbouwNatuursteen2026: Cao = {
  id: 'afbouw-natuursteen',
  name: "CAO Afbouw",
  year: 2026,
  effectiveNote: "Uurlonen (garantieloon) per 1 januari 2026, zoals opgenomen in bijlage 2 van het CAO-boekje Afbouw 2026-2027 (NOA/FNV/CNV). De per-1-jan tabel is feitelijk de doorlopende 2025-tabel; per 1 februari 2026 worden alle lonen met 3,5% + EUR 30/maand verhoogd (zie periods). Schalen met suffix 'b' = stukadoors/afbouw (fulltime 37,5 uur/week); schalen met suffix 'a' = natuursteen (fulltime gem. 37 uur/week). Stappen = jaren relevante werkervaring (0-4). UITGESLOTEN: jeugdschalen (t/m 20 jaar), BBL-leerling/inloopschalen, doelgroepen (Participatiewet/Wajong/Wsw), uta-werknemers (maandsalaris, aparte tabel), prestatietoeslag, overwerk-/ploegen-/verschoven-tijd-toeslagen, EHBO-/diploma-toeslagen en eenmalige uitkeringen. hoursPerWeek=37,5 geldt voor de afbouw (b)-schalen; natuursteen (a)-schalen gaan uit van 37 uur/week.",
  sourceUrl: "https://www.noa.nl/nl/kennisbank/cao-afbouw/",
  pensioenfondsId: 'bpfbouw',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: {
    kind: 'table',
    stepLabel: 'functiejaar',
    unit: 'uur',
    hoursPerWeek: 37.5,
    schalen: {
      '1b': [19.21, 19.49, 20.23, 20.95, 20.95],
      '2b': [19.21, 19.85, 20.61, 21.38, 21.87],
      '3b': [19.21, 20.21, 20.99, 21.8, 22.59],
      '4b': [19.21, 20.84, 21.64, 22.48, 23.31],
      '5b': [19.21, 22.1, 22.96, 23.85, 24.74],
      '6b': [19.21, 24.45, 25.42, 26.42, 27.41],
      '1a': [19.46, 19.74, 20.49, 21.02, 21.21],
      '2a': [19.46, 20.02, 20.58, 21.12, 21.29],
      '3a': [19.46, 20.51, 21.59, 22.15, 22.34],
      '4a': [19.46, 20.8, 22.11, 22.68, 22.9],
      '5a': [19.46, 20.83, 22.18, 22.76, 22.97],
      '6a': [19.46, 23.49, 25.01, 25.68, 25.92],
    },
  },
  periods: [
    {
      from: '2026-02-01',
      note: "+3,5% + EUR 30/maand collectieve verhoging (verwerkt in de loontabel per 1 februari 2026, bijlage 2)",
      status: 'confirmed',
      salary: {
        kind: 'table',
        stepLabel: 'functiejaar',
        unit: 'uur',
        hoursPerWeek: 37.5,
        schalen: {
          '1b': [20.06, 20.35, 21.12, 21.86, 21.86],
          '2b': [20.06, 20.72, 21.51, 22.31, 22.82],
          '3b': [20.06, 21.1, 21.9, 22.74, 23.56],
          '4b': [20.06, 21.75, 22.58, 23.45, 24.31],
          '5b': [20.06, 23.05, 23.94, 24.86, 25.79],
          '6b': [20.06, 25.49, 26.49, 27.52, 28.55],
          '1a': [20.33, 20.62, 21.4, 21.95, 22.14],
          '2a': [20.33, 20.91, 21.49, 22.05, 22.23],
          '3a': [20.33, 21.42, 22.54, 23.12, 23.31],
          '4a': [20.33, 21.72, 23.07, 23.66, 23.89],
          '5a': [20.33, 21.75, 23.15, 23.75, 23.96],
          '6a': [20.33, 24.5, 26.08, 26.77, 27.02],
        },
      },
    },
  ],
  vergoedingen: [
    {"id":"km-eigen-vervoer-afbouw","label":"Kilometervergoeding eigen auto (afbouw, geen collectief vervoer)","amount":0.34,"unit":"perKm","taxable":false,"note":"Art. 66 lid 3, bruto per km bij gebruik eigen vervoer als werkgever geen vervoer regelt; geldt niet voor natuursteen"},
    {"id":"km-fiets-afbouw","label":"Kilometervergoeding fiets (afbouw)","amount":0.22,"unit":"perKm","taxable":false,"note":"Art. 66 lid 8, bruto per km"},
    {"id":"reisuren-natuursteen","label":"Reisurenvergoeding (reistijd)","amount":14,"unit":"perDag","taxable":true,"note":"Reisuren-/reistijdvergoeding EUR 14 bruto per uur per 1 februari 2026 (EUR 15,50 in 2027); per-uur, niet per dag - verifieer toepassing"},
  ],
};
