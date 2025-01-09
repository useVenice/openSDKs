import {initGoogleSDK} from './index.js'

const accessToken = process.env['GOOGLE_ACCESS_TOKEN']!
const maybeTest = accessToken ? test : test.skip

const connectionId = process.env['OPENINT_GOOGLE_CONNECTION_ID']!
const apiKey = process.env['OPENINT_API_KEY_FOR_GOOGLE']!

maybeTest('get user info', async () => {
  const google = initGoogleSDK({auth: {bearer: accessToken}})
  await google.drive_v2.GET('/about').then((r) => {
    console.log(r.data)
  })
  // await google.sheets_v4['/v4/spreadsheets'].POST().then((r) => r.data)
})

maybeTest('get user info via connectionId', async () => {
  const google = initGoogleSDK({auth: {openInt: {apiKey, connectionId}}})
  await google.drive_v2.GET('/about').then((r) => {
    console.log(r.data)
  })
})
