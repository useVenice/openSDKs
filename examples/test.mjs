import {initSDK} from '@opensdks/runtime'
import {openintSdkDef} from '@opensdks/sdk-openint'

const openint = initSDK(openintSdkDef)

const res = await openint.GET('/health')

console.log(res.data)
