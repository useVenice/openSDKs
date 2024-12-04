import type {ClientOptions, OpenIntProxyLinkOptions, SdkDefinition, SDKTypes} from '@opensdks/runtime'
import {initSDK} from '@opensdks/runtime'
import type openintTypes from '../openint.oas.types.js'
import {default as openintOasMeta} from './openint.oas.meta.js'

export type OpenIntSDKTypes = SDKTypes<
  openintTypes,
  Omit<ClientOptions, 'headers'> & {
    headers: {
      /** For passthrough and resource specific api */
      'x-resource-id'?: string
      /** Alternative ways to pass the resource id, works in case there is a single connector */
      'x-resource-connector-name'?: string
      'x-resource-connector-config-id'?: string
      /**
       * Implied (and thus noop) in end user authentication.
       * Typically used together with x-connector-name for admin level auth
       */
      'x-resource-end-user-id'?: string
      [k: string]: string | undefined
    }
  } & OpenIntProxyLinkOptions
>

export const openintSdkDef = {
  types: {} as OpenIntSDKTypes,
  oasMeta: openintOasMeta,
} satisfies SdkDefinition<OpenIntSDKTypes>

function generateHeaders(opts: OpenIntSDKTypes['options']) {
  const headers: Record<string, string> = {};

  if (opts.apiKey) {
    headers['x-apikey'] = opts.apiKey;
  }
  if (opts.token) {
    headers['authorization'] = `Bearer ${opts.token}`;
  }
  if (opts.resourceId) {
    headers['x-resource-id'] = opts.resourceId;
  }
  if (opts.endUserId) {
    headers['x-resource-end-user-id'] = opts.endUserId;
  }
  if (opts.connectorName) {
    headers['x-resource-connector-name'] = opts.connectorName;
  }

  return headers;
}

export function initOpenIntSDK(opts: OpenIntSDKTypes['options']) {
  // @ts-expect-error
  const headers = {...opts.headers, ...generateHeaders({...opts, ...opts?.auth?.openInt})}  
  // @ts-expect-error
  delete opts?.auth?.openInt;
  
  return initSDK(openintSdkDef, {
    ...opts,
    headers
  })
}

export type OpenIntSDK = ReturnType<typeof initOpenIntSDK>

export default initOpenIntSDK
