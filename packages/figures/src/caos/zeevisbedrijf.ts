import type { Cao } from '../types.js';

/**
 * Cao voor het Zeevisbedrijf 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor het Zeevisbedrijf
 * https://www.cnv.nl/voeding/vlees-en-vis/cao-zeevisbedrijf/nieuws/update-cao-zeevisbedrijf-2026-07-13/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-07-01 +3% collectieve verhoging; 2027-01-01 +3% collectieve verhoging
 *   - Eenmalige uitkeringen: 2026-07-01 € 600
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoZeevisbedrijf2026: Cao = {
  id: 'zeevisbedrijf',
  name: "Cao voor het Zeevisbedrijf",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Per 1 juli 2026 worden loongroepen 00 t/m 3 vastgesteld: 00 en 0 op het wettelijk minimumloon, loongroep 1 € 2.680, 2 € 2.750, 3 € 2.830 per maand; de 3% per 1 juli 2026 geldt voor loongroep 4 en hoger. De 3% per 1 januari 2027 geldt voor loongroep 1 en hoger. Eenmalige uitkering € 600 bruto per 1 juli 2026 op basis van een fulltime dienstverband. Bij inflatie boven 5% kan de cao worden heropend voor het loon in 2027. Vergoedingen en de eindejaarsbonus (artikel 8, bedrag onbekend) stijgen per 1 juli 2026 en 1 januari 2027 met 3%. Pensioenregeling Zeevisserij; werknemerspremie niet gevonden. Bron is het onderhandelingsresultaat van 19 mei 2026; leden stemden eind juli 2026 in. Volledige salaristabel niet gevonden.",
  sourceUrl: "https://www.cnv.nl/voeding/vlees-en-vis/cao-zeevisbedrijf/nieuws/update-cao-zeevisbedrijf-2026-07-13/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-07-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.03 }] },
    },
    {
      from: '2027-01-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
  eenmaligeUitkeringen: [
    { date: '2026-07-01', amount: 600 },
  ],
};
