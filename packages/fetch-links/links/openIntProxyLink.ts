import {Link} from '../link.js'
import {mergeHeaders, modifyRequest} from '../modifyRequestResponse.js'

interface OpenIntProxyHeaders {
  authorization?: `Bearer ${string}`
  'x-apikey'?: string
  'x-resource-id': string
}

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
  'x-resource-id': string
  'x-resource-end-user-id'?: string
  'x-resource-connector-name'?: string
}

// TODO: Test that I'm actally working!
export function openIntProxyLink(opts: OpenIntProxyLinkOptions): Link {
  validateOpenIntProxyLinkOptions(opts)
  const {apiKey, token, resourceId, endUserId, connectorName} = opts

  const headers = {
    ['x-apikey']: apiKey || token || '',
    ['x-resource-id']: resourceId || '',
    ['x-resource-end-user-id']: endUserId || '',
    ['x-resource-connector-name']: connectorName || '',
  } satisfies OpenIntProxyHeaders

  return async (req, next) => {
    const baseUrl = getBaseUrl(req.url)
    const res = await next(
      modifyRequest(req, {
        url: req.url.replace(baseUrl, 'https://app.openint.dev/proxy/'),
        headers: mergeHeaders(req.headers, headers, {}),
        body: req.body,
      }),
    )
    return res
  }
}

function getBaseUrl(urlStr: string) {
  const url = new URL(urlStr)
  return `${url.protocol}//${url.host}/`
}
