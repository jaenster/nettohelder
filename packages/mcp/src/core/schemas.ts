import { z } from 'zod';

/**
 * One set of zod schemas drives request validation, the TypeScript types and
 * the OpenAPI document — so the spec cannot drift from what the server accepts.
 */

export const TAX_YEARS = [2026, 2027] as const;
export type TaxYear = (typeof TAX_YEARS)[number];

export const TaxYearSchema = z
  .union([z.literal(2026), z.literal(2027)])
  .describe('Belastingjaar. 2027 figures are provisional (Belastingplan 2027).');

const euroAmount = (max: number): z.ZodNumber => z.number().min(0).max(max);

export const PensioenSchema = z
  .object({
    franchise: euroAmount(100_000).describe('AOW-franchise per jaar in €; grondslag = bruto − franchise.'),
    premiePct: z.number().min(0).max(0.5).describe('Werknemersdeel als fractie van de grondslag, bv. 0.0813.'),
  })
  .strict();

export const CaoSelectionSchema = z
  .object({
    id: z.string().min(1).describe('CAO id, see GET /caos.'),
    schaal: z
      .union([z.string().min(1), z.number().int()])
      .optional()
      .describe('Salary scale / functiegroep key (table CAOs). See GET /caos/{id} periods[].salary.schalen.'),
    trede: z.number().int().min(0).optional().describe('Step index within the scale, 0-based. Default 0.'),
    niveau: z.string().min(1).optional().describe('Band level id (band CAOs).'),
    rsp: z
      .number()
      .min(0)
      .max(1.5)
      .optional()
      .describe('Relatieve salarispositie as a fraction of the band maximum (band CAOs). Default: the CAO default.'),
    peildatum: z.iso
      .date()
      .optional()
      .describe('Date whose salary table applies (YYYY-MM-DD). Default: today, clamped into the tax year.'),
    thuiswerkDagenPerWeek: z
      .number()
      .min(0)
      .max(7)
      .optional()
      .describe("Work-from-home days per week; adds the CAO's untaxed thuiswerkvergoeding when it has one."),
  })
  .strict();

export const NettoRequestBaseSchema = z
  .object({
    year: TaxYearSchema.default(2026),
    brutoPerMaand: z
      .number()
      .positive()
      .max(1_000_000)
      .optional()
      .describe(
        'Base gross monthly salary. Vakantiegeld (default 8%) and an optional 13e maand are added on top. ' +
          'With a CAO without a salary table this is your own current salary.',
      ),
    brutoPerJaar: z
      .number()
      .positive()
      .max(10_000_000)
      .optional()
      .describe('All-in gross annual wage (vakantiegeld etc. already included). Not combinable with brutoPerMaand or cao.'),
    vakantiegeldPct: z.number().min(0).max(0.5).optional().describe('Vakantiegeld as a fraction of 12× the monthly salary. Default 0.08.'),
    dertiendeMaand: z.boolean().optional().describe('Adds one extra month of salary (13e maand).'),
    eindejaarsuitkeringPct: z
      .number()
      .min(0)
      .max(1)
      .optional()
      .describe('Eindejaarsuitkering as a fraction of 12× the monthly salary; overrides dertiendeMaand.'),
    uurPerWeek: z
      .number()
      .positive()
      .max(80)
      .optional()
      .describe('Contract hours per week. Prorates CAO salaries and sets the hourly wage for overtime. Default 40 or the CAO full-time week.'),
    pensioenfondsId: z.string().min(1).optional().describe('Pension fund preset id (see GET /figures/{year} pensioenfondsen).'),
    pensioen: PensioenSchema.optional().describe('Explicit pension scheme; overrides pensioenfondsId and the CAO fund.'),
    pensioenpremieJaar: euroAmount(1_000_000).optional().describe('Fixed employee pension contribution per year.'),
    bonusJaar: euroAmount(10_000_000).optional().describe('One-off bonus per year, taxed at the bijzonder tarief.'),
    overwerkUrenPerMaand: z.number().min(0).max(400).optional().describe('Overtime / ORT hours per month.'),
    overwerkToeslagPct: z.number().min(0).max(3).optional().describe('Surcharge on the hourly wage for those hours, e.g. 0.25 for 125%.'),
    bijtellingJaar: euroAmount(1_000_000).optional().describe('Lease-car bijtelling per year (notional taxable wage).'),
    gerichteVrijstellingenJaar: euroAmount(1_000_000).optional().describe('Untaxed allowances per year (thuiswerk, reiskosten).'),
    loontijdvak: z.enum(['maand', '4weken', 'week']).default('maand').describe('Pay period for nettoPerTijdvak.'),
    dertigProcentRegeling: z
      .boolean()
      .default(false)
      .describe('Apply the expat ruling: 30% tax-free in 2026, 27% in 2027 (capped by the salary norm and WNT).'),
    dertigProcentNorm: z.enum(['algemeen', 'jongMaster']).default('algemeen').describe('Which salary norm the expat ruling tests against.'),
    aow: z.boolean().default(false).describe('AOW-age regime (born on or after 1 Jan 1946 and past AOW age).'),
    loonheffingskorting: z.boolean().default(true).describe('Whether this employer applies the loonheffingskorting.'),
    cao: CaoSelectionSchema.optional().describe('Derive salary, vakantiegeld, eindejaarsuitkering and pension from a CAO.'),
  })
  .strict();

type NettoRequestBase = z.output<typeof NettoRequestBaseSchema>;

/** Cross-field rules; kept separate so derived schemas (e.g. without `year`) can reuse them. */
export function refineNettoRequest(v: Omit<NettoRequestBase, 'year'>, ctx: z.RefinementCtx): void {
  if (v.brutoPerJaar !== undefined && (v.brutoPerMaand !== undefined || v.cao !== undefined)) {
    ctx.addIssue({
      code: 'custom',
      path: ['brutoPerJaar'],
      message: 'brutoPerJaar cannot be combined with brutoPerMaand or cao',
    });
  }
  if (v.cao === undefined && v.brutoPerJaar === undefined && v.brutoPerMaand === undefined) {
    ctx.addIssue({ code: 'custom', path: ['brutoPerMaand'], message: 'provide brutoPerMaand, brutoPerJaar or cao' });
  }
  const pensionOptions = [v.pensioenfondsId, v.pensioen, v.pensioenpremieJaar].filter((x) => x !== undefined);
  if (pensionOptions.length > 1) {
    ctx.addIssue({
      code: 'custom',
      path: ['pensioen'],
      message: 'use only one of pensioenfondsId, pensioen and pensioenpremieJaar',
    });
  }
}

export const NettoRequestSchema = NettoRequestBaseSchema.superRefine(refineNettoRequest);

export type NettoRequestInput = z.input<typeof NettoRequestSchema>;
export type NettoRequest = z.output<typeof NettoRequestSchema>;

export const ProvenanceSchema = z.object({
  url: z.string(),
  status: z.enum(['confirmed', 'provisional']),
  retrievedAt: z.string(),
  note: z.string().optional(),
});

export const StepSchema = z.object({
  key: z.string(),
  nl: z.string(),
  en: z.string(),
  amount: z.number(),
  source: z.string().optional().describe('Figure key in provenance.figures this step is computed from.'),
  status: z.enum(['confirmed', 'provisional']).optional(),
});

const LoontijdvakSchema = z.enum(['maand', '4weken', 'week']);

export const EngineSourceSchema = z
  .object({
    kind: z.literal('loondienst'),
    brutoJaarloon: z.number().optional(),
    maandloon: z.number().optional(),
    vakantiegeldPct: z.number().optional(),
    eindejaarsuitkeringPct: z.number().optional(),
    dertiendeMaand: z.boolean().optional(),
    pensioen: PensioenSchema.optional(),
    pensioenpremieJaar: z.number().optional(),
    bijtellingJaar: z.number().optional(),
    gerichteVrijstellingenJaar: z.number().optional(),
    dertigProcentRegeling: z.boolean().optional(),
    dertigProcentNorm: z.enum(['algemeen', 'jongMaster']).optional(),
    bonusJaar: z.number().optional(),
    overwerkUrenPerMaand: z.number().optional(),
    overwerkToeslagPct: z.number().optional(),
    uurPerWeek: z.number().optional(),
  })
  .describe('The exact LoondienstSource passed to computeCombined.');

export const EngineOptionsSchema = z.object({
  aow: z.boolean(),
  loonheffingskorting: z.boolean(),
  loontijdvak: LoontijdvakSchema,
});

export const NettoResultSchema = z.object({
  brutoJaarloon: z.number(),
  belastbaarTotaal: z.number(),
  arbeidsinkomenTotaal: z.number(),
  dertigProcentVrijstelling: z.number(),
  belastingVoorKorting: z.number(),
  algemeneHeffingskorting: z.number(),
  arbeidskorting: z.number(),
  ouderenkorting: z.number(),
  belastingNaKorting: z.number(),
  bijzonderTarief: z.number().describe('Extra tax on special payments as a fraction of them.'),
  nettoJaar: z.number(),
  nettoMaand: z.number().describe('nettoJaar / 12, special payments smoothed over the year.'),
  nettoPerTijdvak: z.number().describe('Net of regular pay per loontijdvak, without special payments.'),
  loontijdvak: LoontijdvakSchema,
  nettoBijzondereBeloningen: z.number().describe('Net of vakantiegeld + eindejaarsuitkering + bonus together.'),
  werkgeverZvw: z.number().describe('Employer-paid ZVW (informational, not part of net).'),
});

export const CaoUsedSchema = z.object({
  id: z.string(),
  name: z.string(),
  sector: z.string().optional(),
  sourceUrl: z.string(),
  draft: z.boolean(),
  confidence: z.enum(['high', 'medium', 'low']).optional(),
  peildatum: z.string(),
  period: z.object({ from: z.string(), status: z.enum(['confirmed', 'provisional']), note: z.string().optional() }),
  salaryKind: z.enum(['table', 'band', 'own']),
  schaal: z.string().optional(),
  trede: z.number().optional(),
  niveau: z.string().optional(),
  rsp: z.number().optional(),
  uurPerWeek: z.number(),
  deeltijd: z.number(),
  maandloon: z.number(),
  vakantiegeldPct: z.number(),
  eindejaarsuitkeringPct: z.number(),
  pensioenfonds: z.object({ id: z.string(), name: z.string(), franchise: z.number(), premiePct: z.number() }).optional(),
  eenmaligeUitkeringJaar: z.number(),
  thuiswerkvergoedingJaar: z.number(),
});

export const NettoResponseSchema = z.object({
  year: TaxYearSchema,
  result: NettoResultSchema,
  engineInput: z.object({ source: EngineSourceSchema, options: EngineOptionsSchema }),
  cao: CaoUsedSchema.optional(),
  steps: z.array(StepSchema),
  provenance: z.object({
    status: z.enum(['confirmed', 'provisional']).describe('provisional when any figure used is provisional.'),
    figures: z.record(z.string(), ProvenanceSchema),
  }),
  disclaimer: z.string(),
});

export type NettoResponse = z.infer<typeof NettoResponseSchema>;

const salaryUnit = z.enum(['maand', 'uur']);

export const CaoSalarySchema = z.discriminatedUnion('kind', [
  z.object({
    kind: z.literal('table'),
    stepLabel: z.enum(['trede', 'functiejaar']),
    unit: salaryUnit,
    hoursPerWeek: z.number().optional(),
    schalen: z.record(z.string(), z.array(z.number())).describe('schalen[schaal][trede] = gross amount.'),
  }),
  z.object({
    kind: z.literal('band'),
    levelLabel: z.string(),
    unit: z.literal('maand'),
    levels: z.array(z.object({ id: z.string(), min: z.number(), max: z.number() })),
    defaultRsp: z.number(),
    hoursPerWeek: z.number().optional(),
  }),
  z.object({
    kind: z.literal('own'),
    unit: z.literal('maand'),
    hoursPerWeek: z.number().optional(),
    raises: z.array(z.object({ pct: z.number().optional(), perMaand: z.number().optional() })).optional(),
  }),
]);

export const CaoSummarySchema = z.object({
  id: z.string(),
  name: z.string(),
  sector: z.string().optional(),
  year: z.number(),
  salaryKind: z.enum(['table', 'band', 'own']),
  hoursPerWeek: z.number().optional(),
  periods: z.number().describe('Number of salary periods (base + later revisions).'),
  status: z.enum(['confirmed', 'provisional']).describe('provisional when any period is announced but not yet published.'),
  draft: z.boolean().describe('Pipeline-extracted and not yet hand-reviewed.'),
  confidence: z.enum(['high', 'medium', 'low']).optional(),
  sourceUrl: z.string(),
});

export const CaoListQuerySchema = z
  .object({
    q: z.string().max(200).optional().describe('Free-text search in name, id and sector (accent-insensitive).'),
    sector: z.string().max(200).optional().describe('Sector filter, case-insensitive substring match.'),
    salaryKind: z.enum(['table', 'band', 'own']).optional().describe('Only CAOs with this salary mechanism.'),
    limit: z.coerce.number().int().min(1).max(600).default(50),
    offset: z.coerce.number().int().min(0).default(0),
    format: z.enum(['json', 'toon']).optional().describe('Response format; overrides the Accept header.'),
  })
  .strict();

export type CaoListQuery = z.output<typeof CaoListQuerySchema>;

export const CaoListResponseSchema = z.object({
  total: z.number(),
  limit: z.number(),
  offset: z.number(),
  items: z.array(CaoSummarySchema),
});

export const CaoDetailSchema = CaoSummarySchema.extend({
  effectiveNote: z.string(),
  catalogName: z.string().optional(),
  catalogUrl: z.string().optional(),
  vakantiegeldPct: z.number(),
  eindejaarsuitkeringPct: z.number(),
  pensioenfonds: z
    .object({
      id: z.string(),
      name: z.string(),
      franchise: z.number(),
      employeePremiePct: z.number(),
      confidence: z.enum(['high', 'medium', 'low']),
      sourceUrl: z.string(),
    })
    .optional(),
  vergoedingen: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      amount: z.number(),
      unit: z.enum(['perDag', 'perKm', 'perMaand', 'perJaar']),
      taxable: z.boolean(),
      note: z.string().optional(),
    }),
  ),
  eenmaligeUitkeringen: z.array(z.object({ date: z.string(), amount: z.number() })),
  timeline: z.array(
    z.object({
      from: z.string(),
      status: z.enum(['confirmed', 'provisional']),
      note: z.string().optional(),
      salary: CaoSalarySchema,
    }),
  ),
});

export type CaoSummary = z.infer<typeof CaoSummarySchema>;
export type CaoDetail = z.infer<typeof CaoDetailSchema>;

export const FiguresDocumentSchema = z.object({
  schemaVersion: z.literal(1),
  year: TaxYearSchema,
  dataVersion: z.string().describe('Content hash of figures + provenance; changes whenever any value changes.'),
  status: z.enum(['confirmed', 'provisional']),
  figures: z
    .record(z.string(), z.unknown())
    .describe('TaxYearFigures. Bracket upTo null means no upper bound.'),
  provenance: z.record(z.string(), ProvenanceSchema),
  pensioenfondsen: z.array(z.record(z.string(), z.unknown())),
});

export type FiguresDocument = z.infer<typeof FiguresDocumentSchema>;

export const ErrorSchema = z.object({
  error: z.string().describe('Machine-readable code, e.g. invalid_request, not_found, rate_limited.'),
  message: z.string(),
  issues: z
    .array(z.object({ path: z.string(), message: z.string(), code: z.string().optional() }))
    .optional(),
});

export type ApiError = z.infer<typeof ErrorSchema>;

export const FormatQuerySchema = z
  .object({ format: z.enum(['json', 'toon']).optional().describe('Response format; overrides the Accept header.') })
  .strict();
