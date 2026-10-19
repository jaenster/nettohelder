import type { Cao } from '../types.js';

/**
 * Cao DHL Global Forwarding Nederland / DHL Freight Nederland (DGFF) 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao DHL Global Forwarding Nederland / DHL Freight Nederland (DGFF)
 * https://www.cnv.nl/vervoer/vervoer-en-logistiek/cao-dhl-freight-en-global-forwarding/nieuws/cao-dhl-freight-forwarding-en-toen-was-er-een-eindbod-2026-03-23/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-04-01 +2,5% collectieve verhoging; 2026-09-01 +1% collectieve verhoging; 2027-04-01 +2,5% collectieve verhoging; 2027-10-01 +1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoDhlGlobalForwardingFreight2026: Cao = {
  id: 'dhl-global-forwarding-freight',
  name: "Cao DHL Global Forwarding Nederland / DHL Freight Nederland (DGFF)",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2028-03-31; geen loontabel bekend. Let op: Eindvoorstel van 18 maart 2026, door CNV-leden aanvaard op 31 maart 2026; volgens CNV gaat de loonsverhoging per 1 april 2026 in (eindvoorstel: eerste van de maand na het akkoord) Nieuw loongebouw met afgeronde salarissen; schalen eerst gerepareerd (verhogingen tot max. 6,72%) en daarna +2,5%. De verhogingen van 2,5% en 1% in 2026 gelden voor de salarissen; in 2027 worden ook de schalen met hetzelfde percentage geïndexeerd. Nieuwe salaristabel niet gevonden Verhoging 2025 (3% per 1 april 2025, plus € 50 voor schalen 4-6) uit de vorige cao volgens CNV Winstdeling en prestatiebonus aan het einde van de schaal niet opgenomen Werknemerspensioenpremie volgens CNV verlaagd van 13,5% naar 10,16% (jaar en grondslag niet vermeld); niet opgenomen Vakantietoeslagpercentage en arbeidsduur niet in de gevonden bronnen; 8% aangehouden (wettelijk)",
  sourceUrl: "https://www.cnv.nl/vervoer/vervoer-en-logistiek/cao-dhl-freight-en-global-forwarding/nieuws/cao-dhl-freight-forwarding-en-toen-was-er-een-eindbod-2026-03-23/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-04-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.025 }] },
    },
    {
      from: '2026-09-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.01 }] },
    },
    {
      from: '2027-04-01',
      note: "+2,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.025 }] },
    },
    {
      from: '2027-10-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.01 }] },
    },
  ],
  vergoedingen: [],
};
