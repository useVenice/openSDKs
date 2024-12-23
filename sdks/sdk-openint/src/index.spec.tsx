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

test('swr-openapi integration does not work yet', () => {
  const useQuery = createQueryHook(openint.fetchClient, 'openint-api')

  const MyComponent = () => {
    const {data, error, isLoading} = useQuery('/core/connection/{id}')

    if (isLoading || !data) return 'Loading...'

    if (error) return `An error occured: ${error}`

    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data.displayName
  }

  expect(MyComponent).toBeTruthy()
})
