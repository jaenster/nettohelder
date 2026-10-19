import type { Cao } from '../types.js';

/**
 * Cao voor het Hoger Personeel in de Zuivelindustrie (cao HP) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor het Hoger Personeel in de Zuivelindustrie (cao HP)
 * https://www.cnv.nl/voeding/zuivel/cao-zuivel/nieuws/partijen-bereiken-akkoord-voor-de-cao-zuivel-2026-07-02/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 4,5%
 *   - Voltijd 38 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +3,3% collectieve verhoging; 2027-01-01 +1,75% collectieve verhoging; 2027-05-01 +1,75% collectieve verhoging
 *   - Eenmalige uitkeringen: 2027-01-01 € 250
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoZuivelindustrieHogerPersoneel2026: Cao = {
  id: 'zuivelindustrie-hoger-personeel',
  name: "Cao voor het Hoger Personeel in de Zuivelindustrie (cao HP)",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2028-03-31; geen loontabel bekend. Let op: Salarisschalen en salarissen stijgen volgens de regeling op ondernemingsniveau (art. 4 lid 3); de opgenomen percentages gelden alleen als de onderneming geen eigen regeling heeft Eindejaarsuitkering 4,5% van het jaarinkomen zonder eigen ondernemingsregeling, 5% bij een eigen regeling Eenmalige uitkering € 250 bruto in januari 2027 (fulltime 36-40 uur) voor werknemers in dienst op 1 juli 2026 en 1 januari 2027; geldt ook voor bedrijven met een eigen regeling Fulltime 38 uur per week volgens cao HP 2025-2026; maximaal gemiddeld 40 uur af te spreken Onderhandelingsresultaat cao I en cao HP van 1 juli 2026 (NZO, FNV, CNV, De Unie) Geen salaristabel opgenomen; pensioen bij BPZ, werknemersdeel niet gevonden",
  sourceUrl: "https://www.cnv.nl/voeding/zuivel/cao-zuivel/nieuws/partijen-bereiken-akkoord-voor-de-cao-zuivel-2026-07-02/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.045,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38 },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38, raises: [{ pct: 0.033 }] },
    },
    {
      from: '2027-01-01',
      note: "+1,75% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38, raises: [{ pct: 0.0175 }] },
    },
    {
      from: '2027-05-01',
      note: "+1,75% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 38, raises: [{ pct: 0.0175 }] },
    },
  ],
  vergoedingen: [],
  eenmaligeUitkeringen: [
    { date: '2027-01-01', amount: 250 },
  ],
};
