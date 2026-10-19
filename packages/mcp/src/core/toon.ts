import { encode } from '@toon-format/toon';

/** One line for tool/server instructions so a model can read TOON without prior knowledge. */
export const TOON_EXPLAINER =
  'Results are TOON (Token-Oriented Object Notation): indentation-based like YAML, and uniform ' +
  'arrays are tables written `name[N]{col,col}:` followed by one comma-separated row per item.';

export function toToon(value: unknown): string {
  return encode(value);
}
