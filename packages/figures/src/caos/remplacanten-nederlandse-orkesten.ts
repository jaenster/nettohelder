import type { Cao } from '../types.js';

/**
 * Cao Remplaçanten Nederlandse Orkesten 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Remplaçanten Nederlandse Orkesten
 * https://www.fnv.nl/getmedia/c59fbc3a-00a6-4b0b-97a3-bcfc25aa9a70/1393-remplacanten-nederlandse-orkesten-cao-01-07-2025-tm-31-12-2026-v29082025.pdf?ext=.pdf
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 0%
 *   - Voltijdsuren niet in de bron: 40 aangenomen
 *   - Verhogingen na 1-1-2026: 2026-02-01 +1,5% collectieve verhoging; 2026-08-01 +1% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoRemplacantenNederlandseOrkesten2026: Cao = {
  id: 'remplacanten-nederlandse-orkesten',
  name: "Cao Remplaçanten Nederlandse Orkesten",
  year: 2026,
  effectiveNote: "Cao 2025-07-01 t/m 2026-12-31; geen loontabel bekend. Let op: Partijen: VvNO, Vereniging van Stichtingen Remplaçanten Nederlandse Orkesten (VSR) en FNV Media & Cultuur / Kunstenbond; looptijd 1-7-2025 t/m 31-12-2026 Remplaçant wordt ingedeeld in dezelfde salarisschaal als de vaste musicus in een gelijke functie; salarisverbetering volgt de cao Nederlandse Orkesten (verhogingen hier overgenomen uit die cao) Beloning is een bruto uurloon: (100 + 0,4% persoonlijk budget) x ((108% x 12 x maandsalaris) + eindejaarsuitkering) / netto inzetbare uren; vakantietoeslag (8%) en eindejaarsuitkering zitten dus al in het uurloon Bovenop het uurloon: opbouw transitievergoeding 2,78% en een vaste toeslag van € 1,33 per uur (onkosten) Pensioen bij PFZW; werknemersdeel volgens premietabel in de cao 9,2% (tabel t/m 2022), actuele verdeling niet gevonden Nieuwe cao vanaf 2027 nog niet bekend",
  sourceUrl: "https://www.fnv.nl/getmedia/c59fbc3a-00a6-4b0b-97a3-bcfc25aa9a70/1393-remplacanten-nederlandse-orkesten-cao-01-07-2025-tm-31-12-2026-v29082025.pdf?ext=.pdf",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0,
  salary: { kind: 'own', unit: 'maand' },
  periods: [
    {
      from: '2026-02-01',
      note: "+1,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.015 }] },
    },
    {
      from: '2026-08-01',
      note: "+1% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', raises: [{ pct: 0.01 }] },
    },
  ],
  vergoedingen: [],
};
