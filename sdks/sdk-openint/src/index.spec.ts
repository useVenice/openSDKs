import {jest} from '@jest/globals'
import initOpenIntSDK from './index.js'

jest.setTimeout(70 * 15 * 1000) // In case of cold start

const openint = initOpenIntSDK({headers: {}})

test('healthcheck with default init', async () => {
  expect(await openint['/health'].GET().then((r) => r.data)).toBeTruthy()
  expect(await openint.GET('/health').then((r) => r.data)).toBeTruthy()
})
