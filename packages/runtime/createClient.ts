import type {
  BodySerializer,
  FetchOptions,
  FetchResponse,
  InitParam,
  MaybeOptionalInit,
} from 'openapi-fetch'
import _createClient from 'openapi-fetch'
import type {
  HttpMethod,
  MediaType,
  PathsWithMethod,
} from 'openapi-typescript-helpers'
import type {ClientAuthOptions} from '@opensdks/fetch-links'
import {
  applyLinks,
  authLink,
  fetchLink,
  HTTP_METHODS,
  // type HTTPMethod,
  type Link,
} from '@opensdks/fetch-links'
import {HTTPError} from './HTTPError.js'
import type {FlattenOptions} from './utils.js'
import {flattenNestedObject} from './utils.js'

type _ClientOptions = NonNullable<Parameters<typeof _createClient>[0]>

export interface ClientOptions extends _ClientOptions {
  links?: Link[] | ((defaultLinks: Link[]) => Link[])
  auth?: ClientAuthOptions
}

export type OpenAPIClient<Paths extends {}> = ReturnType<
  typeof createClient<Paths>
>

// Should this be combined with createSDK?
// and for example do things such as parsing jsonschema
// to get a list of servers and all that?
// Really do feel that they should be generated as well..

export function createClient<
  Paths extends {},
  Media extends MediaType = MediaType,
>({links: _links, ...clientOptions}: ClientOptions = {}) {
  const defaultLinks = [
    ...(clientOptions.auth
      ? [authLink(clientOptions.auth, clientOptions.baseUrl ?? '')]
      : []),
    fetchLink(),
  ]
  const links =
    typeof _links === 'function' ? _links(defaultLinks) : _links ?? defaultLinks

  const customFetch: typeof fetch = (url, init) =>
    applyLinks(new Request(url, init), links)
  const client = _createClient<Paths, Media>({
    ...clientOptions,
    fetch: customFetch,
  })

  const clientThatThrows = Object.fromEntries(
    HTTP_METHODS.map((method) => [
      method,
      /* eslint-disable */
      (...args: unknown[]) =>
        (client as any)[method](...args).then(throwIfNotOk(method)),
      /* eslint-enable */
    ]),
  ) as {
    [K in Uppercase<HttpMethod>]: ClientMethodThatThrows<
      Paths,
      Lowercase<K>,
      Media
    >
  }

  return {
    clientOptions,
    links,
    client,
    /** Untyped request */
    request: <T>(
      method: Uppercase<HttpMethod>,
      url: string,
      options?: Omit<FetchOptions<unknown>, 'body'> & {body?: unknown},
    ) =>
      client[method as 'GET'](url as never, options as never).then(
        throwIfNotOk(method),
      ) as Promise<{
        data: T
        response: FetchResponse<{}, {}, MediaType>['response']
      }>,
    ...clientThatThrows,
  }
}

export function throwIfNotOk<T extends Record<string | number, any>>(
  method: Uppercase<HttpMethod>,
) {
  return (res: FetchResponse<T, {}, MediaType>) => {
    if (res.error) {
      throw new HTTPError<T>({method, error: res.error, response: res.response})
    }
    // error is not set, so safely casting..
    return res as Extract<typeof res, {data: unknown}>
  }
}

/**
 * Would be nice if we got this automatically, but openapi ts is types only...
 * https://openapi-ts.pages.dev/openapi-fetch/api#bodyserializer */
export const formDataBodySerializer: BodySerializer<unknown> = (body) => {
  const fd = new FormData()
  for (const [k, v] of Object.entries(body ?? {})) {
    fd.append(k, `${v}`)
  }
  return fd
}

export const createFormUrlEncodedBodySerializer =
  (options?: FlattenOptions): BodySerializer<unknown> =>
  (body) => {
    const flattened = flattenNestedObject(body ?? {}, options)
    return (
      Object.entries(flattened)
        // We leave the key as is so we don't need to encode accessors like []
        .map(([key, value]) => `${key}=${encodeURIComponent(`${value}`)}`)
        .join('&')
    )
    // Cannot use URLSearchParams because it encodes [] to %5B%5D in the key name which is unexpected
    // const data = new URLSearchParams(flattened)
    // return data.toString()
  }

export type ClientMethodThatThrows<
  Paths extends Record<string, Record<HttpMethod, {}>>,
  Method extends HttpMethod,
  Media extends MediaType,
> = <
  Path extends PathsWithMethod<Paths, Method>,
  Init extends MaybeOptionalInit<Paths[Path], Method>,
>(
  url: Path,
  ...init: InitParam<Init>
) => Promise<
  Extract<FetchResponse<Paths[Path][Method], Init, Media>, {data: unknown}>
>
