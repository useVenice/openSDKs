import type {UnionToIntersection} from 'type-fest'
import type {ClientAuthOptions} from '@opensdks/runtime'
import {mergeHeaders, modifyRequest, openIntProxyLink} from '@opensdks/runtime'
import type {Link} from '../link.js'

type Indexify<T> = T & Record<string, undefined>
type AllUnionKeys<T> = keyof UnionToIntersection<{[K in keyof T]: undefined}>
type NonDiscriminatedUnion<T> = {
  [K in AllUnionKeys<T> & string]: Indexify<T>[K]
}

export function authLink(_auth: ClientAuthOptions, baseUrl: string): Link {
  if (!_auth) {
    // No Op
    return (req, next) => next(req)
  }
  const auth = _auth as NonDiscriminatedUnion<ClientAuthOptions>

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
