import type { Cao } from '../types.js';

/**
 * CAO De Bijenkorf (Nederland) 2026. DRAFT from cao-pipeline (confidence: high).
 * Source: CAO De Bijenkorf 1 mei 2025 t/m 30 april 2027 (FNV, doc 514, v02062025)
 * https://www.fnv.nl/getmedia/ed18a523-ee54-405a-ad89-032e4866889c/514-de-bijenkorf-cao-01-05-2025-tm-30-04-2027-v02062025.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Loongebouw band min/max bedragen fgr 1 t/m 12 (fulltime maand, fgr 1-8 op 38u en fgr 9-12 op 40u): fgr1 2323,42/2323,42; fgr2 2323,42/2497; fgr3 2428/2622; fgr4 2501/2779; fgr5 2589/2974; fgr6 2692/3242; fgr7 2813/3566; fgr8 2954/3958; fgr9 3252/4646; fgr10 3943/5632; fgr11 4749/6784; fgr12 5567/7952
 *   - Of de +2,5% per 1 mei 2026 inderdaad alleen individuele salarissen verhoogt en NIET de schaalgrenzen (CAO publiceert geen nieuwe schaaltabel per 1 mei 2026 - schalen gelden voor de looptijd)
 *   - Behandeling fgr 1 en fgr 2-minimum die gelijk zijn aan het wettelijk minimumloon (WML stijgt 1 jan en 1 jul 2026) - hier vastgezet op de 1-mei-2025 waarde 2323,42
 *   - Gemengde urennorm in een enkele band: fgr 1-8 = 38u, fgr 9-12 = 40u (hoursPerWeek staat op 38)
 *   - eindejaarsuitkering: kerstgratificatie 4% van jaarsalaris -> 0.04 maandequivalent; medewerkers in dienst voor 1-1-2016 kunnen kiezen voor winstdeling (2-6%) i.p.v. kerstgratificatie
 *   - Reiskostenvergoeding EUR 0,23/km met dagmaximum EUR 10,12
 *
 * Excluded: jeugdschalen (15-23 jaar, 70-100% van schaalminimum); ervaringsjaren-indeling / aanloopstappen fgr 1-6; in-opleiding schaal (naast lagere schaal); vaste persoonlijke toeslag 2-3% (verkoop); feestdagentoeslag; overwerktoeslag 40%; BHV-toeslag; vitaliteitsbudget; winstdeling (2-6%, alternatief voor kerstgratificatie); jubileumgratificatie; eenmalige uitkeringen; wettelijk minimumloon als CAO-bedrag voor fgr 1 en fgr 2-min (volgt WML, niet hier ingevuld)
 */
export const caoDeBijenkorf2026: Cao = {
  id: 'de-bijenkorf',
  name: "CAO De Bijenkorf",
  year: 2026,
  effectiveNote: "Salarisschalen (loongebouw) zoals overeengekomen voor de looptijd van de cao 1 mei 2025 t/m 30 april 2027; deze min-max bedragen gelden ook op 1 januari 2026. De bedragen zijn fulltime maandsalarissen: fgr 1-8 op basis van 38 uur/week, fgr 9-12 op basis van 40 uur/week (let op: de band mengt beide urennormen; hoursPerWeek=38 is hier gezet voor de meerderheid van de schalen). Functiegroep 1 kent als minimum EN maximum het wettelijk minimumloon; ook het minimum van fgr 2 is het wettelijk minimumloon (op 1 mei 2025 was dat 2323,42 bruto/maand bij 38u; dit volgt het WML en stijgt per 1 jan 2026 en 1 jul 2026, niet hier ingevuld als CAO-bedrag). Per 1 mei 2026 worden INDIVIDUELE salarissen structureel verhoogd met 2,5% (RSP <=100%) of 0,5% (RSP >100%) - de schaalgrenzen (min/max van het loongebouw) blijven ongewijzigd voor de hele cao-looptijd, daarom is er geen nieuwe schaaltabel per 1 mei 2026 en is periods leeg. UITGESLOTEN: jeugdschalen (15-23 jaar, 70-100% van schaalminimum), aanloop/ervaringsjaren-indeling, in-opleiding-schaal, vaste persoonlijke toeslag (2-3%), feestdagentoeslag, overwerktoeslag, BHV-toeslag, vitaliteitsbudget, winstdeling, jubileumgratificatie en eenmalige uitkeringen.",
  sourceUrl: "https://www.fnv.nl/getmedia/ed18a523-ee54-405a-ad89-032e4866889c/514-de-bijenkorf-cao-01-05-2025-tm-30-04-2027-v02062025.pdf",
  pensioenfondsId: 'detailhandel',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.04,
  salary: {
    kind: 'band',
    levelLabel: "Functiegroep",
    unit: 'maand',
    levels: [
      { id: '1', min: 2323.42, max: 2323.42 },
      { id: '2', min: 2323.42, max: 2497 },
      { id: '3', min: 2428, max: 2622 },
      { id: '4', min: 2501, max: 2779 },
      { id: '5', min: 2589, max: 2974 },
      { id: '6', min: 2692, max: 3242 },
      { id: '7', min: 2813, max: 3566 },
      { id: '8', min: 2954, max: 3958 },
      { id: '9', min: 3252, max: 4646 },
      { id: '10', min: 3943, max: 5632 },
      { id: '11', min: 4749, max: 6784 },
      { id: '12', min: 5567, max: 7952 },
    ],
    defaultRsp: 0.9,
    hoursPerWeek: 38,
  },
  vergoedingen: [
    {"id":"reiskosten-woon-werk","label":"Kostenvergoeding woon-werkverkeer","amount":0.23,"unit":"perKm","taxable":false,"note":"Maximaal het fiscaal vrijgestelde bedrag van EUR 0,23 per km, met een maximum van EUR 10,12 per gewerkte dag op locatie. Geen vergoeding bij enkele reis < 1 km; eigen regeling per categorie afstand."},
  ],
};
