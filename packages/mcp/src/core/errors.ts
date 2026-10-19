/** A request that is well-formed but cannot be resolved (unknown CAO, missing schaal, ...). */
export class InputError extends Error {
  constructor(
    message: string,
    readonly path: string,
    readonly code: 'invalid_request' | 'not_found' = 'invalid_request',
  ) {
    super(message);
    this.name = 'InputError';
  }
}
