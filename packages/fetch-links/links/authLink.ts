import type {Link} from '../link.js'
import {mergeHeaders, modifyRequest} from '../modifyRequestResponse.js'
import type {OpenIntProxyLinkOptions} from './openIntProxyLink.js'
import {openIntProxyLink} from './openIntProxyLink.js'
import type {StrictUnion} from './type-utils.js'

export type ClientAuthOptions = StrictUnion<
  | {openInt: OpenIntProxyLinkOptions}
  /** to be passed as Authorization header as a bearer token, Should handle automatic refreshing */
  | {oauth: {accessToken: string; refreshToken?: string; expiresAt?: number}}
  | {basic: {username: string; password: string}}
  /** non oauth / directly specifying bearer token */
  | {bearer: string}
>

export function authLink(auth: ClientAuthOptions, baseUrl: string): Link {
  if (!auth) {
    // No Op
    return (req, next) => next(req)
  }

  if (auth.openInt) {
    return openIntProxyLink(auth.openInt, baseUrl)
  }

  const headers = {
    ...(auth.basic && {
      ['authorization']: `Basic ${btoa(
        `${auth.basic.username}:${auth.basic.password}`,
      )}`,
    }),
    ...(auth.oauth?.accessToken && {
      ['authorization']: `Bearer ${auth.oauth.accessToken}`,
    }),
    ...(auth.bearer && {['authorization']: `Bearer ${auth.bearer}`}),
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
