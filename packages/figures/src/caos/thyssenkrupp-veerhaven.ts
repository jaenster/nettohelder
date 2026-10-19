import type { Cao } from '../types.js';

/**
 * Thyssenkrupp Veerhaven B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Thyssenkrupp Veerhaven B.V.
 * https://cao-kijker.awvn.nl/bestanden/2416_01-01-2025%20tot%2001-01-2028_akkoord.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Eenmalige uitkeringen: 2026-07-01 € 750; 2027-07-01 € 1000
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoThyssenkruppVeerhaven2026: Cao = {
  id: 'thyssenkrupp-veerhaven',
  name: "Thyssenkrupp Veerhaven B.V.",
  year: 2026,
  effectiveNote: "Cao 2025-01-01 t/m 2027-12-31; geen loontabel bekend. Let op: Cao thyssenkrupp Veerhaven 1 januari 2025 t/m 31 december 2027 o.b.v. onderhandelingsakkoord van 9 december 2024. Salarisschalen en lonen per 1-1-2025 +2,58% (APC okt 2023-okt 2024); per 1-1-2026 en 1-1-2027 verhoging met de APC (okt-okt), uitkomst niet in de stukken vermeld. Na een negatieve CPI worden lonen pas weer verhoogd als dit is ingelopen. Eenmalige bruto-uitkeringen naast de APC met de salarisbetaling van juli: € 500 (2025), € 750 (2026) en € 1.000 (2027); niet vermeld of dit naar rato is. Cao-tekst is alleen als scan beschikbaar; vakantietoeslag, arbeidsduur, salarisschalen en pensioenpremie niet geverifieerd (8% vakantietoeslag niet geverifieerd).",
  sourceUrl: "https://cao-kijker.awvn.nl/bestanden/2416_01-01-2025%20tot%2001-01-2028_akkoord.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  vergoedingen: [],
  eenmaligeUitkeringen: [
    { date: '2026-07-01', amount: 750 },
    { date: '2027-07-01', amount: 1000 },
  ],
};
