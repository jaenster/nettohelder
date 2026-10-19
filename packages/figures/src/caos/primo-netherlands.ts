import type { Cao } from '../types.js';

/**
 * Cao Primo Netherlands B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Primo Netherlands B.V.
 * https://cao-kijker.awvn.nl/bestanden/0060_01-04-2025%20tot%2001-04-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 2,5%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +5,2% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoPrimoNetherlands2026: Cao = {
  id: 'primo-netherlands',
  name: "Cao Primo Netherlands B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: Bedrijf ook bekend als Enitor Primo (Buitenpost) Per 1-4-2025 een vast bedrag van € 85 per maand plus 3,5%; de volgorde van toepassing staat niet in de cao Per 1-4-2026: CPI over 2025 (min. 2%, max. 4%) plus 2% koopkracht; volgens CNV (update 16-6-2026) is dit 3,2% + 2% = 5,2%, met terugwerkende kracht uitbetaald in juli 2026 Salaristabel per 1-4-2025 t/m 31-3-2026 (bijlage 2) geeft 11 rijen met alleen minimum en maximum (laagste rij € 2.691,61-€ 2.983,28, hoogste € 4.916,90-€ 6.207,67), maar zonder groepsaanduiding; daarom niet als schaal opgenomen Vakantietoeslag 8% van het jaarinkomen, voor 21+ minimaal een maandsalaris van het minimum van salarisgroep 6 Eindejaarsuitkering 2,5% van het in het kalenderjaar verdiende jaarinkomen Normale arbeidsduur 40 uur per week; 5-ploegendienst 33,6 uur; ADV omgezet in 31,5 vakantiedagen PAWW-premie 0,10% van het brutoloon voor rekening van de werknemer Pensioenregeling en werknemerspremie niet in de cao vermeld",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0060_01-04-2025%20tot%2001-04-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.025,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-04-01',
      note: "+5,2% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.052000000000000005 }] },
    },
  ],
  vergoedingen: [],
};
