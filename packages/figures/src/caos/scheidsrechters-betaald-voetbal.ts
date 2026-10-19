import type { Cao } from '../types.js';

/**
 * CAO (assistent-)scheidsrechters betaald voetbal 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: CAO (assistent-)scheidsrechters betaald voetbal
 * https://cao-kijker.awvn.nl/bestanden/1809_01-01-2023%20tot%2001-07-2027_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 0%, eindejaarsuitkering 4%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-07-01 +2,9% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoScheidsrechtersBetaaldVoetbal2026: Cao = {
  id: 'scheidsrechters-betaald-voetbal',
  name: "CAO (assistent-)scheidsrechters betaald voetbal",
  year: 2026,
  effectiveNote: "Cao 2023-01-01 t/m 2027-06-30; geen loontabel bekend. Let op: Beloning bestaat vooral uit wedstrijdvergoedingen per wedstrijdcategorie plus een kleine vaste maandvergoeding (€ 50 scheidsrechter / € 25 assistent, oplopend per seizoen en per 100 eredivisiewedstrijden); geen salarisschalen Alle bedragen in de cao zijn inclusief 8% vakantietoeslag; daarom hier vakantiegeld 0% Wedstrijdvergoedingen (art. 4.3) worden per 1 juli 2024, 2025 en 2026 geïndexeerd conform de indexering van de KNVB-salarisschalen onder de Cao Sport per 1 januari van dat jaar; de verhoging van 2,9% per 1-7-2026 is afgeleid van de Cao Sport-verhoging per 1-1-2026 en niet in de scheidsrechterscao zelf genoemd Vergoedingen voor (A)VAR-werkzaamheden (art. 5.2) stijgen per 1 juli 2023, 2024, 2025 en 2026 met 15%; die voor voormalig senior-scheidsrechters (art. 5.1) worden niet geïndexeerd Einde-seizoensuitkering van 4% over 12 x het maandsalaris van het seizoen Dienstverband gemiddeld 11 uur per week; collectief afstand gedaan van pensioenvoorziening",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/1809_01-01-2023%20tot%2001-07-2027_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0,
  eindejaarsuitkeringPct: 0.04,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-07-01',
      note: "+2,9% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.028999999999999998 }] },
    },
  ],
  vergoedingen: [],
};
