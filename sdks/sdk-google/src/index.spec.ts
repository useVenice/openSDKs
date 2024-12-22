import {initGoogleSDK} from './index.js'

const accessToken = process.env['GOOGLE_ACCESS_TOKEN']!
const maybeTest = accessToken ? test : test.skip

maybeTest('get user info', async () => {
  const google = initGoogleSDK({auth: {bearer: accessToken}})
  void google.drive_v2.GET('/about').then((r) => {
    console.log(r.data)
  })
})
