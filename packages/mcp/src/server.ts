import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import {
  CaoListQuerySchema,
  InputError,
  NettoRequestBaseSchema,
  NettoRequestSchema,
  TOON_EXPLAINER,
  caoDetail,
  caoSectors,
  computeNetto,
  findCao,
  isoToday,
  refineNettoRequest,
  searchCaos,
  toToon,
  type NettoResponse,
} from './core/index.js';

export const SERVER_NAME = 'nettohelder';
export const SERVER_VERSION = '0.1.0';

export const INSTRUCTIONS = [
  'Nettohelder: Dutch bruto→netto for loondienst (tax years 2026 and 2027), 550+ CAO salary tables and the',
  'official tax figures, computed locally with the engine behind nettohelder.nl. All amounts are euros per year',
  'unless a field says maand/tijdvak. 2027 figures are provisional; every figure carries a source URL and status.',
  'Typical flow: zoek_cao → cao_details (pick schaal/trede or niveau) → bereken_netto with cao.',
  TOON_EXPLAINER,
].join(' ');

function toon(value: unknown): CallToolResult {
  return { content: [{ type: 'text', text: toToon(value) }] };
}

function toolError(err: unknown): CallToolResult {
  let body: Record<string, unknown>;
  if (err instanceof z.ZodError) {
    body = {
      error: 'invalid_request',
      issues: err.issues.map((i) => ({ path: i.path.map(String).join('.') || '(root)', message: i.message })),
    };
  } else if (err instanceof InputError) {
    body = { error: err.code, path: err.path, message: err.message };
  } else {
    body = { error: 'failed', message: err instanceof Error ? err.message : String(err) };
  }
  return { isError: true, content: [{ type: 'text', text: toToon(body) }] };
}

/** The response, trimmed to what a model needs: uniform rows so TOON renders tables. */
function compactNetto(r: NettoResponse): Record<string, unknown> {
  return {
    year: r.year,
    result: r.result,
    ...(r.cao ? { cao: r.cao } : {}),
    steps: r.steps.map((s) => ({ key: s.key, label: s.nl, amount: s.amount, status: s.status ?? '' })),
    provenance: {
      status: r.provenance.status,
      figures: Object.entries(r.provenance.figures).map(([key, p]) => ({ key, status: p.status, url: p.url })),
    },
    disclaimer: r.disclaimer,
  };
}

const VergelijkSchema = NettoRequestBaseSchema.omit({ year: true }).superRefine(refineNettoRequest);

const KEY_OUTPUTS = ['brutoJaarloon', 'belastingNaKorting', 'nettoJaar', 'nettoMaand', 'nettoPerTijdvak'] as const;

export function createServer(opts: { today?: () => string } = {}): McpServer {
  const today = opts.today ?? isoToday;
  const server = new McpServer({ name: SERVER_NAME, version: SERVER_VERSION }, { instructions: INSTRUCTIONS });

  server.registerTool(
    'bereken_netto',
    {
      title: 'Bereken netto salaris',
      description:
        'Gross → net for one Dutch employment income. Give exactly one of brutoPerMaand (base monthly salary; ' +
        '8% vakantiegeld added by default), brutoPerJaar (all-in annual) or cao (salary from a CAO table: ' +
        'schaal + trede, or niveau + rsp; for an own-salary CAO also pass brutoPerMaand). Supports pension, ' +
        'bonus, overtime, part-time hours, loontijdvak, 30%/27%-regeling, AOW age and loonheffingskorting. ' +
        'Returns result, step-by-step breakdown and provenance (source URL + confirmed/provisional per figure).',
      inputSchema: NettoRequestBaseSchema,
      annotations: { readOnlyHint: true, openWorldHint: false },
    },
    async (args) => {
      try {
        return toon(compactNetto(computeNetto(NettoRequestSchema.parse(args), today())));
      } catch (err) {
        return toolError(err);
      }
    },
  );

  server.registerTool(
    'zoek_cao',
    {
      title: 'Zoek CAO',
      description:
        'Search the CAOs with salary data by name/id (q, accent-insensitive) and/or sector. ' +
        `Sectors: ${caoSectors().join('; ')}. Returns id, salaryKind (table = schaal/trede, band = niveau/rsp, ` +
        'own = bring your own salary), number of salary periods, status and whether the record is a draft.',
      inputSchema: z.object({
        q: CaoListQuerySchema.shape.q,
        sector: CaoListQuerySchema.shape.sector,
        salaryKind: CaoListQuerySchema.shape.salaryKind,
        limit: z.number().int().min(1).max(100).default(20),
        offset: z.number().int().min(0).default(0),
      }),
      annotations: { readOnlyHint: true, openWorldHint: false },
    },
    async (args) => {
      try {
        const res = searchCaos(args);
        return toon({
          total: res.total,
          offset: res.offset,
          items: res.items.map((c) => ({
            id: c.id,
            name: c.name,
            sector: c.sector ?? '',
            salaryKind: c.salaryKind,
            periods: c.periods,
            status: c.status,
            draft: c.draft,
          })),
        });
      } catch (err) {
        return toolError(err);
      }
    },
  );

  server.registerTool(
    'cao_details',
    {
      title: 'CAO details',
      description:
        'Terms of one CAO: vakantiegeld, eindejaarsuitkering, pension fund, allowances, one-off payments, source ' +
        'and draft status, plus the salary timeline (each period with its table: schalen[schaal] = amounts per ' +
        'trede, 0-based). Set tables=false for terms only.',
      inputSchema: z.object({
        id: z.string().min(1).describe('CAO id from zoek_cao.'),
        tables: z.boolean().default(true).describe('Include the salary tables of every period.'),
      }),
      annotations: { readOnlyHint: true, openWorldHint: false },
    },
    async ({ id, tables }) => {
      const cao = findCao(id);
      if (!cao) return toolError(new InputError(`unknown CAO '${id}'; use zoek_cao`, 'id', 'not_found'));
      const detail = caoDetail(cao);
      return toon(
        tables
          ? detail
          : { ...detail, timeline: detail.timeline.map(({ salary, ...p }) => ({ ...p, salaryKind: salary.kind })) },
      );
    },
  );

  server.registerTool(
    'vergelijk_jaren',
    {
      title: 'Vergelijk 2026 en 2027',
      description:
        'Same input as bereken_netto (without year): computes 2026 and 2027 side by side and the difference. ' +
        '2027 uses the provisional Belastingplan 2027 figures (e.g. the expat ruling drops to 27%).',
      inputSchema: NettoRequestBaseSchema.omit({ year: true }),
      annotations: { readOnlyHint: true, openWorldHint: false },
    },
    async (args) => {
      try {
        const input = VergelijkSchema.parse(args);
        const [a, b] = ([2026, 2027] as const).map((year) => computeNetto({ ...input, year }, today()));
        const row = (r: NettoResponse): Record<string, unknown> => ({
          year: r.year,
          ...Object.fromEntries(KEY_OUTPUTS.map((k) => [k, r.result[k]])),
          status: r.provenance.status,
        });
        const round = (n: number): number => Math.round(n * 100) / 100;
        return toon({
          jaren: [row(a!), row(b!)],
          verschil: Object.fromEntries(KEY_OUTPUTS.map((k) => [k, round(b!.result[k] - a!.result[k])])),
          ...(a!.cao ? { cao: { id: a!.cao.id, peildatum2026: a!.cao.peildatum, peildatum2027: b!.cao!.peildatum } } : {}),
          note: '2027 is based on provisional figures; verschil = 2027 − 2026.',
        });
      } catch (err) {
        return toolError(err);
      }
    },
  );

  return server;
}
