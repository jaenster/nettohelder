import type { Cao } from '../types.js';

/**
 * Cao Grondstoffen Energie en Omgeving (GEO), onderdelen Proces en Services 2026. DRAFT from cao-pipeline (confidence: medium).
 * Source: Cao Grondstoffen Energie en Omgeving (GEO), onderdelen Proces en Services
 * https://www.cnv.nl/publieke-diensten/afval-en-milieu/cao-geo/nieuws/cao-resultaat-geo-2026-2028-2026-04-07/
 *
 * REVIEW BEFORE SHIPPING — verify these against the source:
 *   - Geen loontabel in de bron: de gebruiker vult het eigen brutosalaris in
 *   - Vakantiegeld 8%, eindejaarsuitkering 5,5%
 *   - Voltijd 40 uur/week
 *   - Verhogingen na 1-1-2026: 2026-04-01 +3,5% collectieve verhoging; 2027-04-01 +3,5% collectieve verhoging
 *   - Pensioenfonds niet bekend: generiek
 *
 * Excluded: Loontabel (niet gevonden)
 */
export const caoWenbGeoProcesServices2026: Cao = {
  id: 'wenb-geo-proces-services',
  name: "Cao Grondstoffen Energie en Omgeving (GEO), onderdelen Proces en Services",
  year: 2026,
  effectiveNote: "Cao 2026-04-01 t/m 2028-03-31; geen loontabel bekend. Let op: Vakantie-uitkering en eindejaarsuitkering (5,5% sinds 1 januari 2025, pensioengevend) worden maandelijks in het PAB (persoonlijk arbeidsvoorwaardenbudget) gestort. Per 1 april 2026 vervalt de minimumgrondslag voor de vakantie-uitkering; dit wordt structureel in het schaalsalaris verwerkt (bedrag niet bekend). Pensioen bij ABP; werknemerspremie staat niet in de cao. Als de prijsinflatie daartoe aanleiding geeft, gaan partijen opnieuw in overleg. Inzet: minimumuurloon € 18 per 1 april 2028. Feestdagenvergoeding € 25 bruto bij werken op 1e Kerstdag, Nieuwjaarsdag of Koningsdag. Consignatievergoeding Services per 1 januari 2027 minimaal 15% hoger. Leden van CNV en FNV hebben ingestemd (april 2026). Salaristabellen 2026 niet gevonden. Rond 1 april 2024 werd het schaalsalaris met 5,5% verhoogd (vorige cao 2024-2026).",
  sourceUrl: "https://www.cnv.nl/publieke-diensten/afval-en-milieu/cao-geo/nieuws/cao-resultaat-geo-2026-2028-2026-04-07/",
  pensioenfondsId: 'generiek',
  vakantiegeldPct: 0.08,
  eindejaarsuitkeringPct: 0.055,
  salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40 },
  periods: [
    {
      from: '2026-04-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.035 }] },
    },
    {
      from: '2027-04-01',
      note: "+3,5% collectieve verhoging",
      status: 'provisional',
      salary: { kind: 'own', unit: 'maand', hoursPerWeek: 40, raises: [{ pct: 0.035 }] },
    },
  ],
  vergoedingen: [],
};
