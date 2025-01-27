import {jest} from '@jest/globals'
import createReactQuery from 'openapi-react-query'
import {createQueryHook} from 'swr-openapi'
import initOpenIntSDK from './index.js'

jest.setTimeout(70 * 15 * 1000) // In case of cold start

const openint = initOpenIntSDK({headers: {}})

test('healthcheck with default init', async () => {
  expect(await openint['/health'].GET().then((r) => r.data)).toBeTruthy()
  expect(await openint.GET('/health').then((r) => r.data)).toBeTruthy()
})

test('openapi-react-query integration works', () => {
  const $api = createReactQuery(openint.fetchClient)

  const MyComponent = () => {
    const {data, error, isLoading} = $api.useQuery(
      'get',
      '/core/connection/{id}',
      {params: {path: {id: 'my-connection-id'}}},
    )

    if (isLoading || !data) return 'Loading...'

    if (error) return `An error occured: ${error.message}`

    return data.displayName
  }

  expect(MyComponent).toBeTruthy()
})

test('swr-openapi integration', () => {
  const useQuery = createQueryHook(openint.fetchClient, 'openint-api')

  const MyComponent = () => {
    const {data, error, isLoading} = useQuery('/core/connection/{id}', {
      params: {path: {id: 'my-connection-id'}},
    })

    if (isLoading || !data) return 'Loading...'

    if (error) return `An error occured: ${error}`

    return data.displayName
  }

  expect(MyComponent).toBeTruthy()
})

describe('OpenInt SDK Authentication', () => {
  test('client initialization with direct headers', () => {
    const client = initOpenIntSDK({
      headers: {
        'x-apikey': 'test-api-key',
        'x-connection-id': 'test-connection',
        authorization: 'Bearer test-token',
        'x-connection-customer-id': 'test-customer',
        'x-connection-connector-name': 'test-connector',
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-apikey': 'test-api-key',
      'x-connection-id': 'test-connection',
      authorization: 'Bearer test-token',
      'x-connection-customer-id': 'test-customer',
      'x-connection-connector-name': 'test-connector',
    })
  })

  test('initialization with empty headers should work', () => {
    const client = initOpenIntSDK({headers: {}})
    expect(client.clientOptions.headers).toEqual({})
  })

  test('initialization with undefined headers should work', () => {
    const client = initOpenIntSDK({headers: undefined as any})
    expect(client.clientOptions.headers).toEqual({})
  })

  test('initialization with partial headers should work', () => {
    const client = initOpenIntSDK({
      headers: {
        'x-apikey': 'test-api-key',
        // only providing some headers
      },
    })
    expect(client.clientOptions.headers).toEqual({
      'x-apikey': 'test-api-key',
    })
  })

  test('client initialization with auth.openInt', () => {
    const client = initOpenIntSDK({
      headers: {},
      auth: {
        openInt: {
          apiKey: 'test-api-key',
          connectionId: 'test-connection',
          token: 'test-token',
          customerId: 'test-customer',
          connectorName: 'test-connector',
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-apikey': 'test-api-key',
      'x-connection-id': 'test-connection',
      authorization: 'Bearer test-token',
      'x-connection-customer-id': 'test-customer',
      'x-connection-connector-name': 'test-connector',
    })
  })

  test('initialization with empty auth.openInt should work', () => {
    const client = initOpenIntSDK({
      headers: {},
      auth: {
        openInt: {},
      },
    })
    expect(client.clientOptions.headers).toEqual({})
  })

  test('initialization with partial auth.openInt should work', () => {
    const client = initOpenIntSDK({
      headers: {},
      auth: {
        openInt: {
          apiKey: 'test-api-key',
          // only providing some auth options
        },
      },
    })
    expect(client.clientOptions.headers).toEqual({
      'x-apikey': 'test-api-key',
    })
  })

  test('client initialization with mixed headers and auth.openInt', () => {
    const client = initOpenIntSDK({
      headers: {
        'x-apikey': 'direct-api-key',
        'x-connection-id': 'direct-connection',
      },
      auth: {
        openInt: {
          token: 'auth-token',
          customerId: 'auth-customer',
          connectorName: 'auth-connector',
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-apikey': 'direct-api-key',
      'x-connection-id': 'direct-connection',
      authorization: 'Bearer auth-token',
      'x-connection-customer-id': 'auth-customer',
      'x-connection-connector-name': 'auth-connector',
    })
  })

  test('auth.openInt is removed after initialization', () => {
    const client = initOpenIntSDK({
      headers: {},
      auth: {
        openInt: {
          apiKey: 'test-api-key',
        },
      },
    })

    expect(client.clientOptions.auth?.openInt).toBeUndefined()
  })

  test('auth options should handle malformed input', () => {
    const client = initOpenIntSDK({
      headers: {},
      auth: {
        openInt: null as any,
        bearer: undefined,
        basic: {} as any,
      },
    })

    expect(client.clientOptions.headers).toEqual({})
  })
})

describe('OpenInt SDK Header Precedence', () => {
  test('auth.openInt should override direct headers', () => {
    const client = initOpenIntSDK({
      headers: {
        'x-apikey': 'header-api-key',
        'x-connection-id': 'header-connection',
        authorization: 'Bearer header-token',
        'x-connection-customer-id': 'header-customer',
        'x-connection-connector-name': 'header-connector',
      },
      auth: {
        openInt: {
          apiKey: 'auth-api-key',
          connectionId: 'auth-connection',
          token: 'auth-token',
          customerId: 'auth-customer',
          connectorName: 'auth-connector',
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-apikey': 'auth-api-key',
      'x-connection-id': 'auth-connection',
      authorization: 'Bearer auth-token',
      'x-connection-customer-id': 'auth-customer',
      'x-connection-connector-name': 'auth-connector',
    })
  })

  test('partial auth.openInt should override only corresponding headers', () => {
    const client = initOpenIntSDK({
      headers: {
        'x-apikey': 'header-api-key',
        'x-connection-id': 'header-connection',
        authorization: 'Bearer header-token',
        'x-connection-customer-id': 'header-customer',
        'x-connection-connector-name': 'header-connector',
      },
      auth: {
        openInt: {
          apiKey: 'auth-api-key',
          token: 'auth-token',
          // Only override apiKey and token
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-apikey': 'auth-api-key',
      'x-connection-id': 'header-connection',
      authorization: 'Bearer auth-token',
      'x-connection-customer-id': 'header-customer',
      'x-connection-connector-name': 'header-connector',
    })
  })

  test('auth.openInt empty values should not override existing headers', () => {
    const client = initOpenIntSDK({
      headers: {
        'x-apikey': 'header-api-key',
        'x-connection-id': 'header-connection',
      },
      auth: {
        openInt: {
          apiKey: '',
          connectionId: undefined,
          token: null as any,
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-apikey': 'header-api-key',
      'x-connection-id': 'header-connection',
    })
  })

  test('custom headers should be preserved when using auth.openInt', () => {
    const client = initOpenIntSDK({
      headers: {
        'x-apikey': 'header-api-key',
        'x-custom-header': 'custom-value',
        'x-another-custom': 'another-value',
      },
      auth: {
        openInt: {
          apiKey: 'auth-api-key',
          token: 'auth-token',
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-apikey': 'auth-api-key',
      authorization: 'Bearer auth-token',
      'x-custom-header': 'custom-value',
      'x-another-custom': 'another-value',
    })
  })

  test('auth.openInt should handle falsy values correctly', () => {
    const client = initOpenIntSDK({
      headers: {
        'x-apikey': 'header-api-key',
        'x-connection-id': 'header-connection',
      },
      auth: {
        openInt: {
          apiKey: '',
          connectionId: '0', // Should be set even though it's falsy
          token: false as any,
          customerId: 0 as any,
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-apikey': 'header-api-key',
      'x-connection-id': '0',
    })
  })
})

// TODO: these tests are not working as expected, investigate
describe('Bearer and Basic Auth Precedence', () => {
  // test('bearer auth should override authorization header', () => {
  //   const client = initOpenIntSDK({
  //     headers: {
  //       'x-custom-header': 'custom-value'
  //     },
  //     auth: {
  //       bearer: 'bearer-token'
  //     }
  //   })
  //   expect(client.clientOptions.headers).toEqual({
  //     'authorization': 'Bearer bearer-token',
  //     'x-custom-header': 'custom-value'
  //   })
  // })
  // test('bearer auth should take precedence over basic auth', () => {
  //   const client = initOpenIntSDK({
  //     headers: {
  //       'x-custom-header': 'custom-value'
  //     },
  //     auth: {
  //       bearer: 'bearer-token'
  //     }
  //   })
  //   expect(client.clientOptions.headers).toEqual({
  //     'authorization': 'Bearer bearer-token',
  //     'x-custom-header': 'custom-value'
  //   })
  // })
})

describe('OpenInt Individual Parameters', () => {
  test('apiKey parameter should set x-apikey header', () => {
    const client = initOpenIntSDK({
      headers: {},
      auth: {
        openInt: {
          apiKey: 'test-api-key',
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-apikey': 'test-api-key',
    })
  })

  test('token parameter should set authorization header', () => {
    const client = initOpenIntSDK({
      headers: {},
      auth: {
        openInt: {
          token: 'test-token',
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      authorization: 'Bearer test-token',
    })
  })

  test('connectionId parameter should set x-connection-id header', () => {
    const client = initOpenIntSDK({
      headers: {},
      auth: {
        openInt: {
          connectionId: 'test-connection',
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-connection-id': 'test-connection',
    })
  })

  test('customerId parameter should set x-connection-customer-id header', () => {
    const client = initOpenIntSDK({
      headers: {},
      auth: {
        openInt: {
          customerId: 'test-customer',
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-connection-customer-id': 'test-customer',
    })
  })

  test('connectorName parameter should set x-connection-connector-name header', () => {
    const client = initOpenIntSDK({
      headers: {},
      auth: {
        openInt: {
          connectorName: 'test-connector',
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-connection-connector-name': 'test-connector',
    })
  })

  test('all parameters should set corresponding headers', () => {
    const client = initOpenIntSDK({
      headers: {},
      auth: {
        openInt: {
          apiKey: 'test-api-key',
          token: 'test-token',
          connectionId: 'test-connection',
          customerId: 'test-customer',
          connectorName: 'test-connector',
        },
      },
    })

    expect(client.clientOptions.headers).toEqual({
      'x-apikey': 'test-api-key',
      authorization: 'Bearer test-token',
      'x-connection-id': 'test-connection',
      'x-connection-customer-id': 'test-customer',
      'x-connection-connector-name': 'test-connector',
    })
  })
})
