/**
 * Every figure in a rekentool is wrong the moment it goes stale. So a figure is
 * never a bare number in the data layer — it carries where it came from and how
 * sure we are. The engine consumes the flat numeric view (TaxYearFigures); the
 * provenance map is what the UI renders as "waar komt dit vandaan?".
 */

export type FigureStatus = 'confirmed' | 'provisional';

export interface Provenance {
  /** Official source URL (Belastingdienst / Rijksoverheid / SVB / KvK / wetten.overheid.nl). */
  url: string;
  status: FigureStatus;
  /** ISO date the value was last verified against the source. */
  retrievedAt: string;
  note?: string;
}

/** A progressive tax bracket. `upTo` is the exclusive upper bound of taxable income; Infinity for the top bracket. */
export interface Bracket {
  upTo: number;
  rate: number;
}

/** Heffingskorting with a flat max and a linear afbouw above a threshold. */
export interface HeffingskortingParams {
  max: number;
  afbouwStart: number;
  afbouwRate: number;
}

/** One segment of the piecewise arbeidskorting: korting = base + rate * (arbeidsinkomen - from). */
export interface ArbeidskortingSegment {
  from: number;
  base: number;
  rate: number;
}

export interface ArbeidskortingParams {
  /** Segments ordered ascending by `from`; the first must have from = 0. */
  segments: ArbeidskortingSegment[];
  /** Arbeidsinkomen at/above which the arbeidskorting is 0. */
  zeroAbove: number;
}

export interface ZvwParams {
  /** Employer-paid werkgeversheffing (NOT deducted from employee net). */
  werkgeversheffing: number;
  /** Bijdrage paid via aanslag by ZZP'ers / DGA / pensioners. */
  aanslagBijdrage: number;
  /** Cap on the bijdrage-inkomen. */
  maxBijdrageInkomen: number;
}

/**
 * Expatregeling (30%-regeling) parameters. The employer may pay `pct` of the
 * grondslag (taxable salary, capped at `wntCap`) tax-free as a reimbursement
 * for extraterritoriale kosten. The post-exemption taxable salary must stay at
 * or above the applicable salarisnorm.
 */
export interface DertigProcentParams {
  /** Tax-free fraction of the grondslag (0.30 in 2026; drops to 0.27 from 2027). */
  pct: number;
  /** General salarisnorm: minimum taxable annual salary (excl. exemption) to qualify. */
  generalNorm: number;
  /** Lower norm for employees under 30 holding a (Dutch-equivalent) master's degree. */
  jongMasterNorm: number;
  /** WNT/Balkenende-norm ceiling: the grondslag is capped here before applying pct. */
  wntCap: number;
}

/** ZZP / winst-uit-onderneming parameters. */
export interface ZzpParams {
  zelfstandigenaftrek: number;
  startersaftrek: number;
  /** MKB-winstvrijstelling as a fraction of winst after ondernemersaftrek. */
  mkbWinstvrijstelling: number;
  /** Hours/year required to claim zelfstandigen-/startersaftrek. */
  urencriterium: number;
  /** AOW-age entrepreneurs get this fraction of the zelfstandigenaftrek. */
  zelfstandigenaftrekAowFactor: number;
}

/** Bracket + korting set for one age regime (below-AOW or AOW-age). */
export interface RegimeFigures {
  brackets: Bracket[];
  algemeneHeffingskorting: HeffingskortingParams;
  /** null = not yet implemented for this regime (AOW-age arbeidskorting % not yet verified). */
  arbeidskorting: ArbeidskortingParams | null;
  /** Ouderenkorting (AOW-age only): flat max with a linear afbouw on verzamelinkomen. */
  ouderenkorting?: HeffingskortingParams;
}

export interface TaxYearFigures {
  year: number;
  belowAow: RegimeFigures;
  aow: RegimeFigures;
  zvw: ZvwParams;
  zzp: ZzpParams;
  dertigProcent: DertigProcentParams;
}

/** Provenance keyed by a dotted figure path, e.g. "belowAow.brackets" or "zvw.werkgeversheffing". */
export type ProvenanceMap = Record<string, Provenance>;

export type Confidence = 'high' | 'medium' | 'low';

/**
 * A pension fund preset. The employee share is inherently approximate — a fund
 * sets the TOTAL premie on the grondslag, but the employer/CAO decides the
 * employee's part. `employeePremiePct` is a representative werknemersdeel as a
 * fraction of the pensioengrondslag (= pensioengevend loon − franchise); the
 * user can override it. `confidence` says how firm the split is.
 */
export interface Pensioenfonds {
  id: string;
  name: string;
  sector: string;
  /** AOW-franchise, annual €. Grondslag = max(0, brutoJaarloon − franchise). */
  franchise: number;
  /** Representative employee contribution as a fraction of the grondslag. */
  employeePremiePct: number;
  /** Total fund premie on the grondslag (informational). */
  totalPremiePct?: number;
  confidence: Confidence;
  note: string;
  sourceUrl: string;
}

/** A CAO-provided allowance, shown when a CAO is selected. */
export interface CaoVergoeding {
  id: string;
  label: string;
  amount: number;
  unit: 'perDag' | 'perKm' | 'perMaand' | 'perJaar';
  /** true = counts as taxable loon; false = gerichte vrijstelling (untaxed). */
  taxable: boolean;
  note?: string;
}

/**
 * Salary mechanism — CAOs differ structurally:
 *  - 'table': a fixed schaal × step grid; the cell is the exact bruto. The step
 *    is a trede/periodiek (e.g. CAO Rijk) or a functiejaar (experience year).
 *  - 'band': a functiegroep / Hay-level with a min–max band; the individual sits
 *    at a relatieve salarispositie (RSP) and salaris = RSP × max (floored at min).
 *    Insurers/banks (e.g. NN) work this way.
 */
export interface CaoTableSalary {
  kind: 'table';
  stepLabel: 'trede' | 'functiejaar';
  /** Whether the amounts are monthly or hourly. */
  unit: 'maand' | 'uur';
  /** Default full-time hours/week — used to convert hourly amounts to a month (uur only). */
  hoursPerWeek?: number;
  /** schalen[schaal] = bruto per step (array index = step 0..n). */
  schalen: Record<string, number[]>;
}

export interface CaoBandLevel {
  id: string;
  min: number;
  max: number;
}

export interface CaoBandSalary {
  kind: 'band';
  /** Label for the level dimension, e.g. 'Hay-niveau' or 'Functiegroep'. */
  levelLabel: string;
  unit: 'maand';
  levels: CaoBandLevel[];
  /** Default relatieve salarispositie (fraction of max), e.g. 0.9. */
  defaultRsp: number;
  /**
   * Full-time hours/week these monthly amounts are based on. Some CAOs publish
   * separate 36/38/40-uur tables that are NOT proportional, so the basis is part
   * of the data, not a derivation. Shown on the site as "o.b.v. X uur/week".
   */
  hoursPerWeek?: number;
}

/**
 * A collectieve loonsverhoging. `pct` alone is a plain percentage, `perMaand`
 * alone a fixed amount; both means "pct, with perMaand as the minimum".
 * Fixed amounts are per month at full-time and scale with part-time hours.
 */
export interface CaoRaise {
  /** Fraction, e.g. 0.03 for 3%. */
  pct?: number;
  /** Fixed € per month, full-time. */
  perMaand?: number;
}

/**
 * No salary table in our data: the user enters their own bruto maandsalaris and
 * only the CAO's terms (vakantiegeld, eindejaarsuitkering, pensioen, raises) are
 * applied. In the base salary `raises` is empty; in a later period it lists the
 * raises taking effect on that date, applied on top of the previous period.
 * A CAO keeps its id when it later gains a real table — only `salary` and the
 * periods change kind.
 */
export interface CaoOwnSalary {
  kind: 'own';
  unit: 'maand';
  /** Full-time hours/week of the CAO, for part-time fixed amounts. */
  hoursPerWeek?: number;
  raises?: CaoRaise[];
}

export type CaoSalary = CaoTableSalary | CaoBandSalary | CaoOwnSalary;

export type PeriodStatus = 'confirmed' | 'provisional';

/**
 * A time-phased salary table. CAOs raise wages on a date (a collectieve
 * loonsverhoging), so one CAO can hold several tables over time — e.g. NN runs
 * Jan–Apr 2026, then +3,25% from 1 May 2026, then +2,75% from 1 May 2027.
 * `Cao.salary` is the table effective from the START of `year`; each entry here
 * is a LATER revision taking effect on `from`. Revisions MAY run past `year`
 * (a known future raise) — those don't change the `year` annual figure but power
 * the "vanaf <date>: …" forward line. Omit `periods` when the table is stable.
 */
export interface CaoSalaryPeriod {
  /** ISO date (YYYY-MM-DD) this table takes effect. */
  from: string;
  /** Why it changed, e.g. '+3% collectieve verhoging'. */
  note?: string;
  /** 'provisional' = announced but not yet in a published table (default 'confirmed'). */
  status?: PeriodStatus;
  salary: CaoSalary;
}

/**
 * A CAO preset. Selecting a CAO + position distills the bruto maandsalaris plus
 * the vakantiegeld / eindejaarsuitkering %, the pension fund (→ franchise +
 * premie) and the vergoedingen — all into inputs the engine already accepts.
 * The data is the hard part; each CAO is its own sourced, versioned dataset.
 */
export interface Cao {
  id: string;
  name: string;
  year: number;
  /** Effective-date / indexation / completeness caveat. */
  effectiveNote: string;
  sourceUrl: string;
  /** Links to a Pensioenfonds id in pensioenfondsen2026. */
  pensioenfondsId: string;
  vakantiegeldPct: number;
  eindejaarsuitkeringPct: number;
  /** Base salary table, effective from the start of `year`. */
  salary: CaoSalary;
  /** Later salary revisions within `year`, ascending by `from`. */
  periods?: CaoSalaryPeriod[];
  vergoedingen: CaoVergoeding[];
  /** Eenmalige uitkeringen (gross, full-time); paid in the year of `date`. */
  eenmaligeUitkeringen?: CaoEenmaligeUitkering[];
}

/** A one-off payment agreed in the CAO, bruto € at full-time. */
export interface CaoEenmaligeUitkering {
  /** ISO date (YYYY-MM-DD) of payment. */
  date: string;
  amount: number;
}
