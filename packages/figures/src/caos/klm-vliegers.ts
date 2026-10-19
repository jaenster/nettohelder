import type { Cao } from '../types.js';

/**
 * Cao KLM Vliegers 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao KLM Vliegers
 * https://www.vnv.nl/nieuws/vnv-en-klm-bereiken-principeakkoord-over-simpele-en-realistische-cao
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 8,33%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2027-01-01 +1,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoKlmVliegers2026: Cao = {
  id: 'klm-vliegers',
  name: "Cao KLM Vliegers",
  year: 2026,
  effectiveNote: "Cao 2025-03-01 t/m 2027-02-28; geen loontabel bekend. Let op: Principeakkoord KLM-VNV van 1 juni 2026 voor cao 1-3-2025 t/m 28-2-2027; ter stemming aan VNV-leden voorgelegd (juli 2026). Uitslag van de stemming niet gevonden Per 1-1-2027 1,5% loonsverhoging, gekoppeld aan productiviteitsafspraken Volgens VNV volgt de loonontwikkeling verder de afspraken elders binnen KLM (grondpersoneel: 1% per 1-12-2025, 1,25% per 1-7-2026, 1% per 1-1-2027); de exacte data en percentages voor vliegers zijn niet bevestigd en daarom niet opgenomen. Persberichten noemen in totaal 3,25% resp. 4,75% In plaats van terugwerkende kracht een eenmalige bruto uitkering van 1% over de tussenliggende periode; bedrag en betaaldatum hangen af van de ratificatie, niet opgenomen Vakantietoeslag 8% en eindejaarsuitkering 8,33% van 12 maal het salaris per 31 december (cao-tekst versie april 2026) Salarisschalen (per rang/vliegtuigtype en dienstjaren) en pensioen (eigen regeling vliegers) niet opgenomen Onderhandelingen over de cao na februari 2027 starten najaar 2026",
  sourceUrl: "https://www.vnv.nl/nieuws/vnv-en-klm-bereiken-principeakkoord-over-simpele-en-realistische-cao",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.0833,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2027-01-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.015 }] },
    },
  ],
  vergoedingen: [],
};
