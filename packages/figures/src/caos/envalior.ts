import type { Cao } from '../types.js';

/**
 * Cao Envalior 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Envalior
 * https://www.cnv.nl/documents/5769/Cao_Envalior_2025-2026.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-03-01 +2% collectieve verhoging
 *   - Eenmalige uitkeringen: 2026-03-01 € 381
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoEnvalior2026: Cao = {
  id: 'envalior',
  name: "Cao Envalior",
  year: 2026,
  effectiveNote: "Cao 2025-12-01 t/m 2026-11-30; geen loontabel bekend. Let op: Collectieve verhoging 2% per 1-3-2026 met een minimum van € 1.600 bruto per jaar (voltijd, op het jaarsalaris inclusief vakantietoeslag); het minimum is niet als maandbedrag opgenomen Eenmalige bruto-uitkering € 381 (voltijd) bij de verloning van maart 2026, ter overbrugging van december 2025 t/m februari 2026 Jaarsalaris en salarisschalen zijn inclusief de wettelijke vakantietoeslag. Salarisschalen per 1-3-2026 als jaarbedragen met minimum (70%), midpoint en maximum (100%), bijv. C33 € 34.143 - € 48.775, C38 € 54.255 - € 77.507, C44 € 126.340 - € 180.485; niet als tabel opgenomen omdat de omrekening naar maandsalaris niet in de cao staat Daarnaast maandelijks MyChoice-budget van 6,11% van het jaarsalaris / 12 (niet opgenomen) Beoordelingsafhankelijke (merit) verhoging jaarlijks per 1 april, 0% tot 6% afhankelijk van beoordeling en salarispositie Arbeidsduur voltijd gemiddeld 40 uur per week; volcontinudienst 33,6 uur Pensioen bij Stichting Pensioenfonds PDN: werknemersbijdrage 6% van het pensioengevend jaarinkomen boven de franchise; bedrag franchise niet gevonden Nieuwe cao vanaf 1-12-2026 in voorbereiding (oktober 2026)",
  sourceUrl: "https://www.cnv.nl/documents/5769/Cao_Envalior_2025-2026.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-03-01',
      note: "+2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.02 }] },
    },
  ],
  vergoedingen: [],
  eenmaligeUitkeringen: [
    { date: '2026-03-01', amount: 381 },
  ],
};
