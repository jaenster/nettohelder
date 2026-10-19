import type { Cao } from '../types.js';

/**
 * Cao Intertek Polychemlab B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Intertek Polychemlab B.V.
 * https://cao-kijker.awvn.nl/bestanden/2768_01-02-2026%20tot%2001-02-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8,33%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-02-01 +2,55% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoIntertekPolychemlab2026: Cao = {
  id: 'intertek-polychemlab',
  name: "Cao Intertek Polychemlab B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-02-01 t/m 2027-01-31; geen loontabel bekend. Let op: Bron is het verbeterde eindbod van 25 juni 2026 (voorgelegd aan FNV en Vakbond ABW); AWVN registreert het als geaccepteerd eindbod Cao 2025-2026 (1 februari 2025 t/m 31 januari 2026): structurele verhoging van 3%; het akkoord vermeldt als datum '1 februari 2024', daarom niet als verhoging opgenomen Vakantiebijslag bedraagt 1 maal het maandinkomen (opgenomen als 8,33%) met een minimumbedrag, uitbetaald in mei Salarisschalen C34 t/m C41 staan in bijlage 1 van de cao; tabel per 1 februari 2026 niet gevonden Ploegendiensten: continudienst 33,6 uur, 2- en 3-ploegendienst 40 uur, verlengde 2-ploegendienst 37,3 uur per week Pensioen via PGB; werknemersbijdrage in de cao alleen met cijfers 2022 (2,5% / 4%), daarom niet opgenomen Werkgever betaalt de WGA-premie voor medewerkers gedurende de looptijd",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2768_01-02-2026%20tot%2001-02-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.0833,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-02-01',
      note: "+2,55% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.0255 }] },
    },
  ],
  vergoedingen: [],
};
