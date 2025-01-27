import type {UnionToIntersection} from 'type-fest'
import {openIntProxyLink, OpenIntProxyLinkOptions} from './openIntProxyLink.js'
import {mergeHeaders, modifyRequest} from '../modifyRequestResponse.js'
import type {Link} from '../link.js'

export type ClientAuthOptions = Partial<NonDiscriminatedUnion<
  | {openInt: OpenIntProxyLinkOptions}
  /** to be passed as Authorization header as a bearer token, Should handle automatic refreshing */
  | {oauth: {accessToken: string; refreshToken?: string; expiresAt?: number}}
  | {basic: {username: string; password: string}}
  /** non oauth / directly specifying bearer token */
  | {bearer: string}>>
  
type Indexify<T> = T & Record<string, undefined>
type AllUnionKeys<T> = keyof UnionToIntersection<{[K in keyof T]: undefined}>
type NonDiscriminatedUnion<T> = {
  [K in AllUnionKeys<T> & string]: Indexify<T>[K]
}

export function authLink(auth: ClientAuthOptions, baseUrl: string): Link {
  if (!auth) {
    // No Op
    return (req, next) => next(req)
  }

  if (auth.openInt) {
    return openIntProxyLink(auth.openInt, baseUrl)
  }

  const headers = {
    ['authorization']: auth.oauth?.accessToken
      ? `Bearer ${auth.oauth.accessToken}`
      : auth?.bearer
        ? `Bearer ${auth.bearer}`
        : auth?.basic
          ? `Basic ${btoa(`${auth.basic?.username}:${auth.basic?.password}`)}`
          : '',
  } satisfies HeadersInit

  return async (req, next) => {
    req.headers.delete('authorization')
    const res = await next(
      modifyRequest(req, {
        headers: mergeHeaders(req.headers, headers, {}),
        body: req.body,
      }),
    )
    return res
  }
}
