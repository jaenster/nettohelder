// Everything except the full CAO records and the catalogue, so a browser bundle
// stays small: CAO lists come from caoIndex2026, a record from loadCao(id).
export * from './types.js';
export { figures2026, provenance2026 } from './2026.js';
export { figures2027, provenance2027 } from './2027.js';
export { aowFactor, aowArbeidskorting } from './aow.js';
export { pensioenfondsen2026 } from './pensioen-2026.js';
export { caoIndex2026, loadCao } from './cao-index.js';
export type { CaoIndexEntry } from './cao-index.js';
export type { CatalogCao, CatalogSector } from './cao-catalog.js';
export {
  caoTimeline,
  caoPeriodAt,
  caoNextPeriod,
  caoHasMultiplePeriods,
  caoIsOwnSalary,
  applyCaoRaise,
  caoOwnSalaryAt,
  caoEenmaligInJaar,
  caoPeriodsInYear,
} from './cao-periods.js';
export type { ResolvedPeriod } from './cao-periods.js';
