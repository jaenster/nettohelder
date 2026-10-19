import type { Cao } from '../types.js';

/**
 * Cao CRV 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao CRV
 * https://www.cnv.nl/documents/6015/CAO_CRV_2026-2028.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 2,25%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-06-01 +3% collectieve verhoging; 2027-01-01 +0,5% collectieve verhoging; 2027-06-01 +3,5% collectieve verhoging; 2028-01-01 +0,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoCrv2026: Cao = {
  id: 'crv',
  name: "Cao CRV",
  year: 2026,
  effectiveNote: "Cao 2026-06-01 t/m 2028-05-31; geen loontabel bekend. Let op: Voltijd 2087 uur per jaar (40 uur per week) met 140 ATV-uren per jaar Eindejaarsuitkering 2,25% over de som van de maandinkomens, uitbetaald in december Salarisschalen kennen alleen een normsalaris per schaal (RSP 100), geen treden; per 1-6-2026 van € 2.786 (schaal 1) tot € 7.680 (schaal 13), per 1-1-2027 van € 2.800 tot € 7.719. Instroom op RSP minimaal 70 (schaal 1-9) of 60 (schaal 10-13). Niet als tabel opgenomen Pensioen via BPL (middelloon); werknemerspremie niet gevonden Aparte cao CRV Monsternemers (uurloon € 15,15 per 1-6-2026) met dezelfde procentuele verhogingen; niet hier opgenomen Verhogingen per 1-6-2025 en 1-1-2026 uit de vorige cao (1-6-2025 t/m 31-5-2026)",
  sourceUrl: "https://www.cnv.nl/documents/6015/CAO_CRV_2026-2028.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0225,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-06-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.03 }] },
    },
    {
      from: '2027-01-01',
      note: "+0,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.005 }] },
    },
    {
      from: '2027-06-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.035 }] },
    },
    {
      from: '2028-01-01',
      note: "+0,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.005 }] },
    },
  ],
  vergoedingen: [],
};
