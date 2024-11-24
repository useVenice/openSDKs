/* eslint-disable jest/no-standalone-expect */
import {initSDK} from '@opensdks/runtime'
import qboSdkDef from './index.js'

const realmId = process.env['QBO_REALM_ID']!
const accessToken = process.env['QBO_ACCESS_TOKEN']!
const maybeTest = realmId ? test : test.skip

maybeTest('get QBO company directly with access token', async () => {
  const qbo = initSDK(qboSdkDef, {
    realmId,
    envName: 'sandbox',
    auth: {
      oauth: {accessToken},
    },
  })

  const res = await qbo.GET('/companyinfo/{id}', {
    params: {path: {id: realmId}},
  })

  expect(res.response.status).toEqual(200)
  expect(res.data.CompanyInfo.CompanyName).toEqual('Sandbox Company_US_1')
})

const resourceId = process.env['QBO_RESOURCE_ID']!
const apiKey = process.env['QBO_API_KEY']!
maybeTest(
  'get QBO company via proxy with api key and resource id',
  async () => {
    const qbo = initSDK(qboSdkDef, {
      realmId,
      envName: 'sandbox',
      auth: {
        openInt: {apiKey, resourceId},
      },
    })

    const res = await qbo.GET('/companyinfo/{id}', {
      params: {path: {id: realmId}},
    })

    expect(res.response.status).toEqual(200)
    expect(res.data.CompanyInfo.CompanyName).toEqual('Sandbox Company_US_1')
  },
)

const connectorName = 'qbo'
const token = process.env['QBO_TOKEN']!
maybeTest(
  'get QBO company via proxy with token and connector name',
  async () => {
    const qbo = initSDK(qboSdkDef, {
      realmId,
      envName: 'sandbox',
      auth: {
        openInt: {token, connectorName},
      },
    })

    const res = await qbo.GET('/companyinfo/{id}', {
      params: {path: {id: realmId}},
    })

    expect(res.response.status).toEqual(200)
    expect(res.data.CompanyInfo.CompanyName).toEqual('Sandbox Company_US_1')
  },
)
