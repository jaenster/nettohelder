import type { Cao } from '../types.js';

/**
 * Cao Givaudan Nederland B.V. 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Givaudan Nederland B.V.
 * https://www.cnv.nl/industrie/chemie-en-energie/cao-givaudan/nieuws/eindbod-givaudan-praat-mee-tijdens-de-ledenvergaderingen-2026-05-27/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-04-01 +3% collectieve verhoging
 *   - Eenmalige uitkeringen: 2026-07-01 € 250
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoGivaudanNederland2026: Cao = {
  id: 'givaudan-nederland',
  name: "Cao Givaudan Nederland B.V.",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2027-03-31; geen loontabel bekend. Let op: Cao 2026-2027 (eindbod 8 mei 2026, door leden aanvaard juni 2026): 3% structureel per 1-4-2026 en € 250 bruto eenmalig in juli 2026 (parttime naar rato) Minimumloon per 1-4-2026 € 18 per uur (€ 2.812,50 bruto per maand voltijd); salarisgroepen 5, 6 en 7 samengevoegd tot nieuwe schaal 7. Volledige salarisschalen 2026 niet gevonden Target PSP-bonusregeling verhoogd van € 750 naar 5% van het jaarsalaris (variabel, niet opgenomen) Vorige cao (1-4-2025 t/m 31-3-2026): 3,4% per 1-4-2025 en tegemoetkoming ziektekosten van € 120 naar € 150 bruto per maand Arbeidsduur dagdienst gemiddeld 36 uur per week (cao 2025-2026), ploegendiensten 40 uur; eindbod 2026 noemt 39 uur voor dagdienst. Daarom geen voltijduren opgenomen Vakantietoeslag 8% van 12x het schaalsalaris, uitbetaald in mei Pensioenregeling met werknemersbijdrage; hoogte premie en franchise niet gevonden",
  sourceUrl: "https://www.cnv.nl/industrie/chemie-en-energie/cao-givaudan/nieuws/eindbod-givaudan-praat-mee-tijdens-de-ledenvergaderingen-2026-05-27/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-04-01',
      note: "+3% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.03 }] },
    },
  ],
  vergoedingen: [],
  eenmaligeUitkeringen: [
    { date: '2026-07-01', amount: 250 },
  ],
};
