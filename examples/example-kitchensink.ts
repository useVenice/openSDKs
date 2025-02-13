import {Octokit} from '@octokit/rest'
import Twilio from 'twilio'
import {initSDK} from '@opensdks/runtime'
import {apolloSdkDef} from '@opensdks/sdk-apollo'
import {discordSdkDef} from '@opensdks/sdk-discord'
import {githubSdkDef} from '@opensdks/sdk-github'
import {openaiSdkDef} from '@opensdks/sdk-openai'
import {outreachSdkDef} from '@opensdks/sdk-outreach'
import {plaidSdkDef} from '@opensdks/sdk-plaid'
import {salesloftSdkDef} from '@opensdks/sdk-salesloft'
import {slackSdkDef} from '@opensdks/sdk-slack'
import {twilioSdkDef} from '@opensdks/sdk-twilio'

// Comparison between GitHub vanilla octokit client and openSDKs client
const github = initSDK(githubSdkDef, {
  headers: {authorization: `Bearer ${process.env['GITHUB_TOKEN']}`},
})

await github
  .GET('/repos/{owner}/{repo}/commits', {
    params: {path: {owner: 'tonyxiao', repo: 'openSDKs'}},
  })
  .then((r) => {
    r.data.forEach((data) => {
      console.log(data.commit)
    })
  })

const octokit = new Octokit()

await octokit.rest.repos
  .listCommits({
    owner: 'tonyxiao',
    repo: 'openSDKs',
  })
  .then((r) => {
    r.data.forEach((data) => {
      console.log(data.commit)
    })
  })

// MARK: - Twilio example

// Comparison between Twilio vanilla API and openSDKs client
// highlighting type safety

const accountSid = process.env['TWILIO_ACCOUNT_SID']!
const authToken = process.env['TWILIO_AUTH_TOKEN']!

const twilio = initSDK(twilioSdkDef, {accountSid, authToken})

await twilio.api_v2010
  .POST('/2010-04-01/Accounts/{AccountSid}/Messages.json', {
    params: {path: {AccountSid: accountSid}},
    body: {
      Body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      From: '+15017122661',
      To: '+15558675310',
    },
  })
  .then((r) => console.log(r.data))
  //     ^? (parameter) r: {
  //            data: {
  //                body?: string | null;
  //                num_segments?: string | null;
  //                direction?: components["schemas"]["message_enum_direction"];
  //                from?: string | null;
  //                to?: string | null;
  //                ... 14 more ...;
  //                subresource_uris?: unknown;
  //            };
  //            error?: undefined;
  //            response: Response;
  //        }
  .catch(console.log)

const client = Twilio(accountSid, authToken)

client.messages
  .create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+15017122661',
    to: '+15558675310',
  })
  .then((message) => console.log(message.sid))
  //       ^? (parameter) message: MessageInstance
  .catch(console.log)

// Other examples
export const plaid = initSDK(plaidSdkDef, {
  headers: {
    'PLAID-CLIENT-ID': process.env['PLAID_CLIENT_ID']!,
    'PLAID-SECRET': process.env['PLAID_SECRET']!,
  },
})

export const discord = initSDK(discordSdkDef, {
  headers: {authorization: `Bearer ${process.env['DISCORD_API_KEY']}`},
})
export const openai = initSDK(openaiSdkDef, {
  headers: {authorization: `Bearer ${process.env['OPENAI_API_KEY']}`},
})
export const slack = initSDK(slackSdkDef, {
  headers: {token: process.env['SLACK_TOKEN']!},
})

await github
  .GET('/orgs/{org}/actions/secrets', {params: {path: {org: 'tonyxiao'}}})
  .then((r) => {
    console.log(r.data.secrets[0]?.selected_repositories_url)
  })

await slack.POST('/chat.postMessage', {
  body: {channel: 'C01U6P7LZ9M', text: 'Hello world!'},
})

const apollo = initSDK(apolloSdkDef, {
  api_key: process.env['APOLLO_API_KEY']!,
})
await apollo.GET('/v1/email_accounts').then((r) => console.log(r.data))

export const outreach = initSDK(outreachSdkDef, {
  headers: {authorization: `Bearer ${process.env['OUTREACH_ACCESS_TOKEN']}`},
})

await outreach.GET('/prospects').then((r) => {
  console.log(r.data.data?.map((p) => p.id))
})

export const salesloft = initSDK(salesloftSdkDef, {
  headers: {authorization: `Bearer ${process.env['SALESLOFT_ACCESS_TOKEN']}`},
})

await salesloft.GET('/v2/people.json', {}).then((r) => {
  console.log(r.data.data.map((p) => p.id))
})
