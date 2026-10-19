import type { Cao } from '../types.js';

/**
 * Chemgas Shipping B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Chemgas Shipping B.V.
 * https://cao-kijker.awvn.nl/bestanden/0300_01-01-2026%20tot%2001-01-2028_cao.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2027-01-01 +3,9% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoChemgasShipping2026: Cao = {
  id: 'chemgas-shipping',
  name: "Chemgas Shipping B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Cao voor het varend personeel van Chemgas Shipping B.V. 2026-2027 (cao-tekst); lonen +5% per 1-1-2026 en +3,9% per 1-1-2027. Als na 31-12-2027 geen nieuwe cao is afgesloten, herleeft de indexeringsregeling (eerste indexatie per 1-7-2028 o.b.v. CPI). Normale arbeidstijd aan boord 40 uur per week; verlofsysteem 25 weken aan boord / 27 weken vrij. Maandsalaris gebaseerd op 175 uur (12 uur x 7 dagen x 25 dienstweken / 12). Vakantiegeld 8% van 12x het maandloon per 1 april, uitbetaald half april. Loontabellen (bijlage) niet in het gepubliceerde cao-document opgenomen; salarissen per functie met schaaleenheden. Pensioen via Bedrijfspensioenfonds voor de Koopvaardij; premie niet in de cao vermeld.",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0300_01-01-2026%20tot%2001-01-2028_cao.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2027-01-01',
      note: "+3,9% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.039 }] },
    },
  ],
  vergoedingen: [],
};
