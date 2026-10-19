import type { Cao } from '../types.js';

/**
 * Cao voor Contractspelers Betaald Voetbal 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao voor Contractspelers Betaald Voetbal
 * https://www.vvcs.nl/documents/2023/10/CAO-Contractspelers-2023-2027-DEF-ENG.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoBetaaldVoetbal2026: Cao = {
  id: 'betaald-voetbal',
  name: "Cao voor Contractspelers Betaald Voetbal",
  year: 2026,
  effectiveNote: "Cao 2023-07-01 t/m 2027-06-30; geen loontabel bekend. Let op: De cao kent geen collectieve loonsverhogingen of loonschalen; salarissen worden individueel afgesproken met minimum het (jeugd)minimumloon (in sommige gevallen 55,5% voor amateurs/jeugdspelers met contract) Vakantietoeslag 8% van het jaarinkomen, maximaal 8% van 3x het volledige wettelijk minimumloon op jaarbasis; boven 3x het maximumdagloon WW/WIA wordt de vakantietoeslag geacht in het jaarsalaris te zijn inbegrepen Pensioenregeling via Nationale-Nederlanden (beschikbare premie); maximaal pensioengevend salaris € 128.810 en franchise € 16.623 per 1-7-2023, werknemersbijdrage niet als percentage vermeld Gebruikte bron is de Engelse vertaling van de cao (VVCS)",
  sourceUrl: "https://www.vvcs.nl/documents/2023/10/CAO-Contractspelers-2023-2027-DEF-ENG.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
};
