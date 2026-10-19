import type { Cao } from '../types.js';

/**
 * Cao Carux Technology Europe B.V. en Innocare Optoelectronics Europe B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Carux Technology Europe B.V. en Innocare Optoelectronics Europe B.V.
 * https://www.fnv.nl/getmedia/6c58a4ed-ac80-4647-ba91-1ada4a997526/1856-carux-technology-europe-b-v-en-innocare-optoelectronics-europe-b-v-cao-010126-311226-v140926.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-08-01 +3% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoCaruxTechnologyEurope2026: Cao = {
  id: 'carux-technology-europe',
  name: "Cao Carux Technology Europe B.V. en Innocare Optoelectronics Europe B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2026-12-31; geen loontabel bekend. Let op: Collectieve schaalaanpassing van 3,0% per 1 augustus 2026 geldt alleen bij beoordeling Goed of hoger (bij 'Niet acceptabel' 0%) Geen structurele verhoging in 2025: de 9% per 1 augustus 2024 gold voor 2024/2025 Salarisschalen zijn jaarsalarissen (12 maandsalarissen) per schaalpositie 60-130 voor functiegroepen 55-61 en aanvangs-/functie-/eindsalaris voor groepen 51-54; niet als treden opgenomen Vakantiegeld 8% met minimum € 2.447 (21+, geïndexeerd met de schaalaanpassing); 13e maand 8,33% Pensioen: werknemerspremie 1,7% van de pensioengrondslag (bruto grondslag min franchise); franchise en uitvoerder niet in de cao vermeld Intentie om bij de cao 2027 terug te kijken naar 2026 voor eventuele reparatie of inhaalslag Looptijd 1 januari 2026 tot en met 31 december 2026; voorheen ook bekend als Innolux / TPO Displays Europe",
  sourceUrl: "https://www.fnv.nl/getmedia/6c58a4ed-ac80-4647-ba91-1ada4a997526/1856-carux-technology-europe-b-v-en-innocare-optoelectronics-europe-b-v-cao-010126-311226-v140926.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-08-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
};
