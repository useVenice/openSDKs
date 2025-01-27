import type {
  ClientOptions,
  OpenIntProxyLinkOptions,
  SdkDefinition,
  SDKTypes,
} from '@opensdks/runtime'
import {initSDK} from '@opensdks/runtime'
import type openintTypes from '../openint.oas.types.js'
import {default as openintOasMeta} from './openint.oas.meta.js'

export type OpenIntSDKTypes = SDKTypes<
  openintTypes,
  Omit<ClientOptions, 'headers'> & {
    headers: {
      /** organization auth */
      'x-apikey'?: string
      /** Bearer token, for end user auth */
      authorization?: `Bearer ${string}`
      /** For passthrough and connection specific api */
      'x-connection-id'?: string
      /** Alternative ways to pass the connection id, works in case there is a single connector */
      'x-connection-connector-name'?: string
      'x-connection-connector-config-id'?: string
      /**
       * Implied (and thus noop) in end user authentication.
       * Typically used together with x-connector-name for admin level auth
       */
      'x-connection-customer-id'?: string
      [k: string]: string | undefined
    }
  } & OpenIntProxyLinkOptions
>

export const openintSdkDef = {
  types: {} as OpenIntSDKTypes,
  oasMeta: openintOasMeta,
} satisfies SdkDefinition<OpenIntSDKTypes>

function generateHeaders(opts: OpenIntSDKTypes['options']) {
  const headers: Record<string, string> = {}

  if (opts.apiKey) {
    headers['x-apikey'] = opts.apiKey
  }
  if (opts.token) {
    headers['authorization'] = `Bearer ${opts.token}`
  }
  if (opts.connectionId) {
    headers['x-connection-id'] = opts.connectionId
  }
  if (opts.customerId) {
    headers['x-connection-customer-id'] = opts.customerId
  }
  if (opts.connectorName) {
    headers['x-connection-connector-name'] = opts.connectorName
  }

  return headers
}

export function initOpenIntSDK(opts: OpenIntSDKTypes['options']) {
  const headers = {
    ...opts.headers,
    ...generateHeaders({...opts, ...opts.auth?.openInt}),
  }

  // Remove openInt auth proxy from options when initializing openInt
  if (opts.auth?.openInt) {
    opts.auth = undefined
  }

  return initSDK(openintSdkDef, {
    ...opts,
    headers,
  })
}

export type OpenIntSDK = ReturnType<typeof initOpenIntSDK>

export default initOpenIntSDK
