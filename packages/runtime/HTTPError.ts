import type {FetchResponse} from 'openapi-fetch'
import type {HttpMethod, MediaType} from 'openapi-typescript-helpers'

export class HTTPError<T extends Record<string | number, any>> extends Error {
  override name = 'HTTPError'
  readonly method: Uppercase<HttpMethod>
  readonly error: Extract<
    FetchResponse<T, {}, MediaType>,
    {error: unknown}
  >['error']
  readonly response: FetchResponse<T, {}, MediaType>['response']

  get code() {
    return this.response?.status
  }

  constructor({
    method,
    error,
    response: r,
  }: Extract<FetchResponse<T, {}, MediaType>, {error: unknown}> & {
    method: Uppercase<HttpMethod>
  }) {
    super(
      [
        `[${r.status} ${r.statusText}] ${method.toUpperCase()} ${r.url}`,
        safeJsonStringify(error),
      ]
        .filter((l) => !!l)
        .join('\n'),
    )
    this.method = method
    this.error = error
    this.response = r
    Object.setPrototypeOf(this, HTTPError.prototype)
  }
}

function safeJsonStringify(value: unknown) {
  try {
    if (value == null) {
      return null
    }
    return JSON.stringify(value, null, 2)
  } catch {
    return `Not JSON: ${value}`
  }
}
