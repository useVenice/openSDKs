import {mergeHeaders, modifyRequest} from '../index.js'
import {Link} from '../link.js'

export type OpenIntProxyLinkOptions = {
  token?: string
  apiKey?: string
  resourceId?: string
  endUserId?: string
  connectorName?: string
}

export function validateOpenIntProxyLinkOptions(
  options: OpenIntProxyLinkOptions,
): boolean {
  const {token, apiKey, resourceId, endUserId, connectorName} = options ?? {}

  const hasToken = !!token
  const hasApiKey = !!apiKey
  const hasResourceId = !!resourceId
  const hasEndUserId = !!endUserId
  const hasConnectorName = !!connectorName

  const expectsAuthProxy =
    hasToken || hasApiKey || hasResourceId || hasEndUserId || hasConnectorName
  if (
    expectsAuthProxy &&
    !(
      (hasToken && hasResourceId) ||
      (hasToken && hasConnectorName) ||
      (hasApiKey && hasResourceId) ||
      (hasApiKey && hasEndUserId && hasConnectorName)
    )
  ) {
    throw new Error(
      'Invalid configuration for proxy authentication. You must provide one of the following combinations: ' +
        '1) token AND resourceId, ' +
        '2) token AND connectorName, ' +
        '3) apiKey AND resourceId, ' +
        '4) apiKey AND endUserId AND connectorName, ' +
        'or none of these options and instead authenticate directly.',
    )
  }
  return expectsAuthProxy
}

interface OpenIntProxyHeaders {
  authorization?: `Bearer ${string}`
  'x-apikey'?: string
  'x-resource-id'?: string
  'x-resource-end-user-id'?: string
  'x-resource-connector-name'?: string
}

function removeEmptyHeaders(headers: OpenIntProxyHeaders): HeadersInit {
  return Object.fromEntries(
    Object.entries(headers).filter(([_, value]) => value && value !== ''),
  ) satisfies HeadersInit
}

export function openIntProxyLink(
  opts: OpenIntProxyLinkOptions,
  baseUrl: string,
): Link {
  validateOpenIntProxyLinkOptions(opts)
  const {apiKey, token, resourceId, endUserId, connectorName} = opts

  let headers = removeEmptyHeaders({
    ['x-apikey']: apiKey || '',
    ['authorization']: token ? `Bearer ${token}` : undefined,
    ['x-resource-id']: resourceId || '',
    ['x-resource-end-user-id']: endUserId || '',
    ['x-resource-connector-name']: connectorName || '',
  }) satisfies HeadersInit

  return async (req, next) => {
    // if (req.url.includes(proxyUrl)) {
    //   // Was previously necessary as link called twice leading to /api/proxy/api/proxy/?
    //   return next(req)
    // }
    const proxyUrl = 'https://api.openint.dev/proxy'

    req.headers.delete('authorization')
    const res = await next(
      modifyRequest(req, {
        url: req.url.replace(baseUrl, proxyUrl),
        headers: mergeHeaders(req.headers, headers, {}),
        body: req.body,
      }),
    )
    return res
  }
}
