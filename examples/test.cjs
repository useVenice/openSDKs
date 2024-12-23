const {initSDK} = require('@opensdks/runtime')
const {openintSdkDef} = require('@opensdks/sdk-openint')

const openint = initSDK(openintSdkDef)

void openint.GET('/health').then((r) => {
  console.log(r.data)
})
