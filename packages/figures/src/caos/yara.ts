import type { Cao } from '../types.js';

/**
 * Cao Yara Sluiskil B.V. en Yara Vlaardingen B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Yara Sluiskil B.V. en Yara Vlaardingen B.V.
 * https://cao-kijker.awvn.nl/bestanden/0780_01-04-2026%20tot%2001-04-2027_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +3,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoYara2026: Cao = {
  id: 'yara',
  name: "Cao Yara Sluiskil B.V. en Yara Vlaardingen B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: 13e maand gelijk aan één maandinkomen (december), opgenomen als 8,33% Schaalsalarissen onder het maximum stijgen per 1 juli van ieder jaar met 2% (functiejaren, bij minimaal 9 maanden in dienst) Normale arbeidsduur 40 uur per week met gemiddeld 2,67 uur AVK per week Pensioen bij PGB (middelloon, opbouw 1,875%); werknemerspremie niet in de cao gevonden. Franchise € 17.545 en maximum pensioengevend salaris € 137.800 (niveau 2024) Salaristabel staat niet als tekst in de cao en is niet overgenomen",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/0780_01-04-2026%20tot%2001-04-2027_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.035 }] },
    },
  ],
  vergoedingen: [],
};
