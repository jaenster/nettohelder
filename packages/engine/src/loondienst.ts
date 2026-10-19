import type { TaxYearFigures } from '@nettohelder/figures';
import {
  incomeTaxBox1,
  algemeneHeffingskorting,
  arbeidskorting,
  euro,
} from './primitives.js';

/**
 * Gross can be given two ways:
 *  - `brutoJaarloon`: an all-in annual figure (incl. vakantiegeld/13e), OR
 *  - `maandloon`: a base monthly salary, from which vakantiegeld and an
 *    optional 13e maand are composed. This matches how people actually think
 *    about their salary ("€3000 per maand + 8% vakantiegeld").
 * Provide exactly one of the two.
 */
export interface LoondienstInput {
  brutoJaarloon?: number;
  maandloon?: number;
  /** Vakantiegeld as a fraction of the 12-month base salary. Default 0.08 when maandloon is used. */
  vakantiegeldPct?: number;
  /** A 13e maand / eindejaarsuitkering of one extra month's salary. */
  dertiendeMaand?: boolean;
  /**
   * Eindejaarsuitkering as a fraction of the 12-month base salary (e.g. 0.0837).
   * CAOs express it this way; takes precedence over dertiendeMaand when given.
   */
  eindejaarsuitkeringPct?: number;
  /** Employee pension contribution — deducted pre-tax, lowers belastbaar loon. */
  pensioenpremieJaar?: number;
  /**
   * Pension via a fund preset: employee premie = premiePct × max(0, brutoJaarloon − franchise).
   * Takes precedence over pensioenpremieJaar when given.
   */
  pensioen?: { franchise: number; premiePct: number };
  /** Leaseauto bijtelling — FICTIONAL taxable income (raises tax, no cash). */
  bijtellingJaar?: number;
  /** Gerichte vrijstellingen (thuiswerk/reiskosten): untaxed, raise net directly. */
  gerichteVrijstellingenJaar?: number;
  /** AOW-age regime (born >= 1 Jan 1946). Default false. */
  aow?: boolean;
  /**
   * Whether this employer applies the loonheffingskorting. Default true. Without
   * it no heffingskortingen are withheld on; the difference comes back via the
   * aangifte inkomstenbelasting.
   */
  loonheffingskorting?: boolean;
  /** One-off bonus / eenmalige uitkering per year, taxed at the bijzonder tarief. */
  bonusJaar?: number;
  /** Overtime or irregular-hours (ORT) hours per month, paid on top of maandloon. */
  overwerkUrenPerMaand?: number;
  /** Surcharge on the hourly wage for those hours, e.g. 0.25 for 125%. Default 0. */
  overwerkToeslagPct?: number;
  /** Contract hours/week, to derive the hourly wage from maandloon. Default 40. */
  uurPerWeek?: number;
  /** Pay period for the per-period net. Default 'maand'. */
  loontijdvak?: Loontijdvak;
}

export type Loontijdvak = 'maand' | '4weken' | 'week';

export const tijdvakkenPerJaar: Record<Loontijdvak, number> = { maand: 12, '4weken': 13, week: 52 };

export interface Step {
  key: string;
  nl: string;
  en: string;
  amount: number;
  source?: string;
}

export interface LoondienstResult {
  brutoJaarloon: number;
  /** Vakantiegeld included in the annual gross (0 if entered all-in or none). */
  vakantiegeld: number;
  belastbaarLoon: number;
  arbeidsinkomen: number;
  verzamelinkomen: number;
  belastingVoorKorting: number;
  algemeneHeffingskorting: number;
  arbeidskorting: number;
  ouderenkorting: number;
  belastingNaKorting: number;
  nettoJaar: number;
  /** Average net per month (annual / 12 — vakantiegeld smoothed across the year). */
  nettoMaand: number;
  /** Employer-side ZVW (informational; not part of employee net). */
  werkgeverZvw: number;
  /**
   * Bijzonder tarief: the extra tax on vakantiegeld, eindejaarsuitkering and bonus
   * over the tax on regular pay, as a fraction of those payments. This is the
   * jaarloon approach the Belastingdienst tables approximate.
   */
  bijzonderTarief: number;
  /** Net of the regular pay (salary + overtime) per loontijdvak, without special payments. */
  nettoPerTijdvak: number;
  loontijdvak: Loontijdvak;
  /** Net of vakantiegeld + eindejaarsuitkering + bonus together. */
  nettoBijzondereBeloningen: number;
  steps: Step[];
}

interface ComposedGross {
  brutoJaarloon: number;
  maandComponent: number;
  vakantiegeld: number;
  eindejaarsuitkering: number;
  overwerk: number;
  bonus: number;
}

function composeGross(input: LoondienstInput): ComposedGross {
  if (input.maandloon !== undefined) {
    const maandComponent = input.maandloon * 12;
    const vakantiegeld = maandComponent * (input.vakantiegeldPct ?? 0.08);
    const eindejaarsuitkering =
      input.eindejaarsuitkeringPct !== undefined
        ? maandComponent * input.eindejaarsuitkeringPct
        : input.dertiendeMaand
          ? input.maandloon
          : 0;
    const uurloon = input.maandloon * 12 / 52 / (input.uurPerWeek ?? 40);
    const overwerk = (input.overwerkUrenPerMaand ?? 0) * 12 * uurloon * (1 + (input.overwerkToeslagPct ?? 0));
    const bonus = input.bonusJaar ?? 0;
    return {
      brutoJaarloon: maandComponent + overwerk + vakantiegeld + eindejaarsuitkering + bonus,
      maandComponent,
      vakantiegeld,
      eindejaarsuitkering,
      overwerk,
      bonus,
    };
  }
  if (input.brutoJaarloon !== undefined) {
    const bonus = input.bonusJaar ?? 0;
    return {
      brutoJaarloon: input.brutoJaarloon + bonus,
      maandComponent: input.brutoJaarloon,
      vakantiegeld: 0,
      eindejaarsuitkering: 0,
      overwerk: 0,
      bonus,
    };
  }
  throw new Error('LoondienstInput requires either brutoJaarloon or maandloon');
}

/**
 * Net/gross for a single loondienst income, 2026 rules. Below-AOW by default.
 *
 * ZVW handling: for employees the inkomensafhankelijke bijdrage is the
 * werkgeversheffing — paid BY the employer, NOT withheld from the employee.
 * It does not reduce net; it surfaces only as employer cost.
 */
export function computeLoondienst(
  input: LoondienstInput,
  figures: TaxYearFigures,
): LoondienstResult {
  const regime = input.aow ? figures.aow : figures.belowAow;
  if (regime.arbeidskorting === null) {
    throw new Error(
      `arbeidskorting for the ${input.aow ? 'AOW-age' : 'below-AOW'} regime is not yet implemented in figures ${figures.year}`,
    );
  }

  const gross = composeGross(input);
  const pensioen = input.pensioen
    ? Math.max(0, gross.brutoJaarloon - input.pensioen.franchise) * input.pensioen.premiePct
    : (input.pensioenpremieJaar ?? 0);
  const bijtelling = input.bijtellingJaar ?? 0;
  const vrijstellingen = input.gerichteVrijstellingenJaar ?? 0;

  const belastbaarLoon = Math.max(0, gross.brutoJaarloon - pensioen + bijtelling);
  const arbeidsinkomen = belastbaarLoon;
  const verzamelinkomen = belastbaarLoon;
  const credits = input.loonheffingskorting ?? true;

  // Tax for a given taxable wage; reused to split off the bijzonder tarief.
  const taxFor = (loon: number) => {
    const voorKorting = incomeTaxBox1(loon, regime.brackets);
    const ahk = credits ? algemeneHeffingskorting(loon, regime.algemeneHeffingskorting) : 0;
    const ak = credits ? arbeidskorting(loon, regime.arbeidskorting!) : 0;
    const ok = credits && regime.ouderenkorting ? algemeneHeffingskorting(loon, regime.ouderenkorting) : 0;
    return { voorKorting, ahk, ak, ok, naKorting: Math.max(0, voorKorting - ahk - ak - ok) };
  };
  const tax = taxFor(belastbaarLoon);
  const belastingVoorKorting = tax.voorKorting;
  // Credits are capped at the tax due, in order.
  const ahk = Math.min(tax.ahk, belastingVoorKorting);
  const ak = Math.min(tax.ak, belastingVoorKorting - ahk);
  const ouderen = Math.min(tax.ok, belastingVoorKorting - ahk - ak);
  const belastingNaKorting = tax.naKorting;

  // Pension and bijtelling are spread pro rata over regular and special pay.
  const bijzonder = gross.vakantiegeld + gross.eindejaarsuitkering + gross.bonus;
  const regulier = gross.brutoJaarloon - bijzonder;
  const shareRegulier = gross.brutoJaarloon > 0 ? regulier / gross.brutoJaarloon : 1;
  const belastbaarRegulier = Math.max(0, (gross.brutoJaarloon - pensioen + bijtelling) * shareRegulier);
  const belastingRegulier = taxFor(belastbaarRegulier).naKorting;
  const belastbaarBijzonder = belastbaarLoon - belastbaarRegulier;
  // Rate as the Belastingdienst prints it (51,020%), without float noise.
  const bijzonderTarief = belastbaarBijzonder > 0
    ? Math.round(((belastingNaKorting - belastingRegulier) / belastbaarBijzonder) * 1e5) / 1e5
    : 0;
  const loontijdvak = input.loontijdvak ?? 'maand';
  const nettoRegulier = regulier - pensioen * shareRegulier - belastingRegulier;
  const nettoBijzonder = bijzonder - pensioen * (1 - shareRegulier) - (belastingNaKorting - belastingRegulier);

  const nettoJaar = gross.brutoJaarloon - pensioen - belastingNaKorting + vrijstellingen;

  const werkgeverZvw =
    Math.min(belastbaarLoon, figures.zvw.maxBijdrageInkomen) * figures.zvw.werkgeversheffing;

  const steps: Step[] = [];
  const composed = input.maandloon !== undefined;
  if (composed) {
    steps.push({ key: 'maandloon', nl: 'Bruto maandsalaris × 12', en: 'Gross monthly salary × 12', amount: euro(gross.maandComponent) });
    if (gross.vakantiegeld > 0) {
      steps.push({ key: 'vakantiegeld', nl: 'Bij: vakantiegeld', en: 'Plus: holiday allowance', amount: euro(gross.vakantiegeld) });
    }
    if (gross.eindejaarsuitkering > 0) {
      steps.push({ key: 'eindejaarsuitkering', nl: 'Bij: eindejaarsuitkering / 13e maand', en: 'Plus: year-end bonus / 13th month', amount: euro(gross.eindejaarsuitkering) });
    }
    if (gross.overwerk > 0) {
      steps.push({ key: 'overwerk', nl: 'Bij: overwerk / onregelmatigheidstoeslag', en: 'Plus: overtime / irregular hours', amount: euro(gross.overwerk) });
    }
  }
  if (gross.bonus > 0) {
    steps.push({ key: 'bonus', nl: 'Bij: bonus / eenmalige uitkering', en: 'Plus: bonus / one-off payment', amount: euro(gross.bonus) });
  }
  steps.push({ key: 'brutoJaarloon', nl: 'Bruto jaarloon', en: 'Gross annual wage', amount: euro(gross.brutoJaarloon) });
  if (pensioen > 0) {
    steps.push({ key: 'pensioenpremie', nl: 'Af: pensioenpremie (voor belasting)', en: 'Less: pension contribution (pre-tax)', amount: -euro(pensioen) });
  }
  if (bijtelling > 0) {
    steps.push({ key: 'bijtelling', nl: 'Bij: bijtelling leaseauto (fictief loon)', en: 'Plus: lease-car bijtelling (notional wage)', amount: euro(bijtelling) });
  }
  if (pensioen > 0 || bijtelling > 0) {
    steps.push({ key: 'belastbaarLoon', nl: 'Belastbaar loon', en: 'Taxable wage', amount: euro(belastbaarLoon) });
  }
  steps.push(
    { key: 'belastingVoorKorting', nl: 'Inkomstenbelasting (box 1)', en: 'Income tax (box 1)', amount: -euro(belastingVoorKorting), source: input.aow ? 'aow.brackets' : 'belowAow.brackets' },
    { key: 'algemeneHeffingskorting', nl: 'Bij: algemene heffingskorting', en: 'Plus: general tax credit', amount: euro(ahk), source: input.aow ? 'aow.algemeneHeffingskorting' : 'belowAow.algemeneHeffingskorting' },
    { key: 'arbeidskorting', nl: 'Bij: arbeidskorting', en: 'Plus: labour tax credit', amount: euro(ak), source: input.aow ? 'aow.arbeidskorting' : 'belowAow.arbeidskorting' },
    ...(ouderen > 0
      ? [{ key: 'ouderenkorting', nl: 'Bij: ouderenkorting', en: 'Plus: elderly tax credit', amount: euro(ouderen), source: 'aow.ouderenkorting' }]
      : []),
    { key: 'belastingNaKorting', nl: 'Te betalen belasting na kortingen', en: 'Tax after credits', amount: -euro(belastingNaKorting) },
  );
  if (vrijstellingen > 0) {
    steps.push({ key: 'gerichteVrijstellingen', nl: 'Bij: onbelaste vergoedingen', en: 'Plus: untaxed allowances', amount: euro(vrijstellingen) });
  }
  steps.push({ key: 'nettoJaar', nl: 'Netto per jaar', en: 'Net per year', amount: euro(nettoJaar) });

  return {
    brutoJaarloon: euro(gross.brutoJaarloon),
    vakantiegeld: euro(gross.vakantiegeld),
    belastbaarLoon: euro(belastbaarLoon),
    arbeidsinkomen: euro(arbeidsinkomen),
    verzamelinkomen: euro(verzamelinkomen),
    belastingVoorKorting: euro(belastingVoorKorting),
    algemeneHeffingskorting: euro(ahk),
    arbeidskorting: euro(ak),
    ouderenkorting: euro(ouderen),
    belastingNaKorting: euro(belastingNaKorting),
    nettoJaar: euro(nettoJaar),
    nettoMaand: euro(nettoJaar / 12),
    werkgeverZvw: euro(werkgeverZvw),
    bijzonderTarief,
    nettoPerTijdvak: euro(nettoRegulier / tijdvakkenPerJaar[loontijdvak]),
    loontijdvak,
    nettoBijzondereBeloningen: euro(nettoBijzonder),
    steps,
  };
}
