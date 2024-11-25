import {
  AuthClientOptions,
  mergeHeaders,
  modifyRequest,
  openIntProxyLink,
} from '@opensdks/runtime'
import {Link} from '../link.js'

export function authLink(auth: AuthClientOptions, baseUrl: string): Link {
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
