import {AuthClientOptions, mergeHeaders, modifyRequest} from '@opensdks/runtime'
import {Link} from '../link.js'

export function authHeadersLink(auth: AuthClientOptions): Link {
  if (auth.oauth && auth.authorizationHeader) {
    throw new Error('Cannot use both oauth and authorizationHeader')
  }

  const headers = {
    ['authorization']: auth.oauth?.accessToken
      ? `Bearer ${auth.oauth.accessToken}`
      : auth.authorizationHeader?.bearer
        ? `Bearer ${auth.authorizationHeader.bearer}`
        : auth.authorizationHeader?.basic
          ? `Basic ${btoa(
              `${auth.authorizationHeader.basic.username}:${auth.authorizationHeader.basic.password}`,
            )}`
          : '',
  } satisfies HeadersInit

  if (!headers['authorization']) {
    throw new Error('No authorization paramater found')
  }

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
