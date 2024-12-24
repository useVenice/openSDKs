export interface paths {
  '/.well-known/assetlinks.json': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Android Asset Links
     * @description Get Android asset links for universal/deep linking
     */
    get: operations['getAndroidAssetLinks']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/.well-known/jwks.json': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * JWKS
     * @description Retrieve the JSON Web Key Set of the instance
     */
    get: operations['getJWKS']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/.well-known/apple-app-site-association': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Apple App Site Association
     * @description Retrieve the Apple App Site Association file of the instance
     */
    get: operations['getAppleAppSiteAssociation']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/.well-known/openid-configuration': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Basic OpenID Configuration Payload
     * @description Get a basic openid configuration payload
     */
    get: operations['getOpenIDConfiguration']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/oauth/authorize': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Request OAuth2 authorization
     * @description Request OAuth2 authorization. If successful, receive authorization grant via redirect.
     */
    get: operations['requestOAuthAuthorize']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/oauth/token': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Get OAuth2 token
     * @description Get OAuth2 token in exchange for a valid authorization grant.
     */
    post: operations['getOAuthToken']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/oauth/userinfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get user info after OAuth2 flow
     * @description Get user info in exchange for a valid OAuth2 access token.
     */
    get: operations['getOAuthUserInfo']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/account_portal': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get account portal
     * @description Get users account portal
     */
    get: operations['getAccountPortal']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/environment': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get environment
     * @description Get the current environment. The environment contains information about the settings and features enabled for the current instance.
     */
    get: operations['getEnvironment']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /**
     * Update environment
     * @description Update environment using request origin
     */
    patch: operations['updateEnvironment']
    trace?: never
  }
  '/v1/saml/metadata/{saml_connection_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * SAML Metadata
     * @description The Service Provider's SAML metadata
     */
    get: operations['samlMetadata']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/saml/acs/{saml_connection_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * SAML ACS
     * @description The SAML Assertion Consumer Service (ACS) endpoint, which processes SAML Responses by the IdP.
     *
     */
    post: operations['acs']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/health': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Health
     * @description Get Health
     */
    get: operations['getHealth']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/proxy-health': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Proxy Health
     * @description Use this endpoint to check the validity of a proxy configuration for a domain.
     *     Pass the instance ID and domain ID as query parameters.
     */
    get: operations['getProxyHealth']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Current Client
     * @description Returns the current client that is present either in the browser cookies or authorization header.
     */
    get: operations['getClient']
    /**
     * Create New Client
     * @description Creates a new Client and sets it either in the response cookies or the response authorization header.
     */
    put: operations['putClient']
    /**
     * Create New Client
     * @description Creates a new Client and sets it either in the response cookies or the response authorization header.
     */
    post: operations['postClient']
    /**
     * Delete Client's Sessions
     * @description Ends all Sessions of the Current Client
     */
    delete: operations['deleteClientSessions']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sign_ins': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create a new Sign In or replace the current one.
     * @description Creates or replaces the current Sign in object.
     *     In order to authenticate a Sign in in as few requests as possible,
     *     you can pass in parameters to this request that can identify and verify the Sign in.
     *
     *     Parameter rules:
     *
     *     If the strategy equals `phone_code`, `email_code`, `web3_[provider]_signature`, `reset_password_code` or `reset_password_phone_code` then an identifier is required.
     *
     *     If the strategy equals `email_link` then an identifier is required and optionally redirect_url can be supplied.
     *
     *     If the strategy equals `password` then both an identifier and a password is required.
     *
     *     If the strategy equals `oauth_[provider]` or `saml` then a redirect_url is required, and an action_complete_redirect_url is optional.
     *
     *     If the strategy equals `oauth_token_[provider]` then at least one of code (grant code) or token (openID token) is required. Passing only the token will probably retrieve minimal information about the user from the OAuth provider. You can pass both code and token for the best results.
     *
     *     If the strategy equals `ticket` then ticket is required.
     *
     *     If the strategy equals `passkey` then no identifier is provided.
     *
     *     If the strategy equals `google_one_tap` then token is required.
     */
    post: operations['createSignIn']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sign_ins/{sign_in_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve sign-in
     * @description Returns the sign-in with the given id.
     *     The sign in is returned only if it belongs to the requesting client and is not abandoned.
     */
    get: operations['getSignIn']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sign_ins/{sign_in_id}/reset_password': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Reset password on sign-in
     * @description Reset password on sign-in.
     */
    post: operations['resetPassword']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sign_ins/{sign_in_id}/prepare_first_factor': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Prepare First Factor Verification
     * @description Prepares the verification object for the identified Sign in.
     *     This step authenticates that the user is who they say they are.
     *     Depending on the strategy, this request request will do something different.
     *
     *     Parameter actions:
     *     If the strategy equals email_code then this request will send an email with an OTP code.
     *     If the strategy equals phone_code then this request will send an SMS with an OTP code.
     *     If the strategy equals oauth_[provider] then this request generate a URL that the User needs to visit in order to authenticate.
     *     If the strategy equals passkey then this request will begin the passkey registration flow.
     *
     *     Parameter rules:
     *     If the strategy equals `oauth_[provider]` then a redirect_url is required, and an action_complete_redirect_url is optional.
     */
    post: operations['prepareSignInFactorOne']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sign_ins/{sign_in_id}/attempt_first_factor': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attempt First Factor Verification
     * @description Attempt the first verification.
     *     Requires the sign in attempt to be identified, and the first factor verification to be prepared, unless you're using a password.
     *
     *     Parameter rules:
     *     If the strategy equals `email_code` or `phone_code` then a code is required.
     *     If the strategy equals `password` then a password is required.
     */
    post: operations['attemptSignInFactorOne']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sign_ins/{sign_in_id}/prepare_second_factor': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Prepare Second Factor Verification
     * @description Prepare the second verification.
     *     Requires the sign in attempt `status` to be equal to `needs_second_factor`.
     */
    post: operations['prepareSignInFactorTwo']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sign_ins/{sign_in_id}/attempt_second_factor': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attempt Second Factor Verification
     * @description Attempt the second verification.
     *     Requires the sign in attempt `status` to be equal to `needs_second_factor`, and for the preparation step to have been called.
     */
    post: operations['attemptSignInFactorTwo']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sign_ups': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create Sign-up
     * @description Creates or replaces the sign-up on the current Client object.
     */
    post: operations['createSignUps']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sign_ups/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Sign-up
     * @description Returns the sign-up by ID. Must be associated with the current Client object.
     */
    get: operations['getSignUps']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /**
     * Update Sign-up
     * @description Updates the sign-up object specified by id, with the supplied parameters.
     */
    patch: operations['updateSignUps']
    trace?: never
  }
  '/v1/client/sign_ups/{id}/prepare_verification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Prepare Sign-up Identification Verification
     * @description Prepares verification for the sign-up specified by `{id}`.
     *
     *     Depending on the given strategy, the API will prepare the verification for the current sign-up.
     *     In particular,
     *     * for `email_code`, the API will send a verification email to the email address currently load up in the sign-up
     *     * for `phone_code`, the API will send a verification SMS to the phone number currently load up in the sign-up
     *
     */
    post: operations['prepareSignUpsVerification']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sign_ups/{id}/attempt_verification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attempt Sign-up Identification Verification
     * @description Attempts to verify the identification that corresponds to the given strategy using the given verification code.
     */
    post: operations['attemptSignUpsVerification']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sync': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Sync clients across multiple domains
     * @description Start the syncing process between a satellite and primary domain.
     */
    get: operations['syncClient']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/link': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Link clients across multiple domains
     * @description Complete a syncing process between a satellite and primary domains by linking their clients.
     */
    get: operations['linkClient']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/handshake': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Generate and returns a new session token for a given client.
     * @description When the authentication status cannot be determined from the current session token, we initiate a handshake to refresh the token and send it back to the application. Called in server environments.
     */
    get: operations['handshakeClient']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/dev_browser': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create a Dev Browser token
     * @description Generate an Dev Browser API token.
     *
     *     This is used to authenticate Development Instances with the `DevBrowser` scheme.
     *     It must be set before making any request to a dev instance, even for endpoints that are public.
     */
    post: operations['createDevBrowser']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/dev_browser/set_first_party_cookie': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Post Dev Broswer init set cookie
     * @description post dev_browser/set_first_party_cookie
     */
    post: operations['postDevBrowserInitSetCookie']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/dev_browser/init': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Initialize dev browser for development and staging instances
     * @description get dev_browser/init
     */
    get: operations['getDevBrowserInit']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/oauth_callback': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * OAuth Callback
     * @description The endpoint where the oauth providers redirect to after a successful authentication attempt.
     */
    get: operations['getOauthCallback']
    put?: never
    /**
     * OAuth Post Callback
     * @description Converts a POST to a GET, because if it's a POST coming from an external account. This is necessary because some providers (e.g. Apple) issue a POST instead of a GET request.
     */
    post: operations['postOauthCallback']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/clear-site-data': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Set the Clear-Site-Data header
     * @description Clear browsing data (cookies, storage, cache) associated with the requesting website
     */
    get: operations['clearSiteData']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sessions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /**
     * Remove client's sessions
     * @description Removes all the sessions of the current client without removing the __client cookie
     */
    delete: operations['removeClientSessionsAndRetainCookie']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sessions/{session_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Session
     * @description Returns the session with the given id
     */
    get: operations['getSession']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sessions/{session_id}/touch': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Touch session
     * @description Specify the active session for the client.
     */
    post: operations['touchSession']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sessions/{session_id}/end': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * End Session
     * @description Marks the given session as ended.
     */
    post: operations['endSession']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sessions/{session_id}/remove': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Remove Session
     * @description Delete the the given session.
     */
    post: operations['removeSession']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/sessions/active': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Active Sessions
     * @description Returns all active session for user, including activity information.
     */
    get: operations['getSessions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/sessions/{session_id}/revoke': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Revoke given session
     * @description Revokes given session.
     */
    post: operations['revokeSession']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sessions/{session_id}/tokens': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create Session Token
     * @description Create a session jwt for the authenticated requested user.
     */
    post: operations['createSessionToken']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/client/sessions/{session_id}/tokens/{template_name}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create Session Token With JWT Template
     * @description Create a session jwt for the authenticated requested user.
     */
    post: operations['createSessionTokenWithTemplate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/sessions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Sessions
     * @description Get all the sessions of the current user.
     */
    get: operations['getUsersSessions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/email_addresses': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Email Addresses
     * @description Retrieve all the email addresses associated with the current user.
     */
    get: operations['getEmailAddresses']
    put?: never
    /**
     * Create Email Address
     * @description Add an email address to the current user. The address then needs to be verified using the `prepare_verification` and `attempt_verification` endpoints.
     */
    post: operations['createEmailAddresses']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/email_addresses/{email_id}/attempt_verification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attempt Email Address Verification
     * @description Attempt to verify an email address that was previously created.
     */
    post: operations['verifyEmailAddress']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/email_addresses/{email_id}/prepare_verification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Prepare Email Address Verification
     * @description Depending on the given strategy, the API will prepare the verification for the email address.
     *     In particular, * for `email_code`, the API will send a verification email to the address containing a code. * for `email_link`, the API will send a verification email to the address containg a link to the verification attempt endpoint.
     */
    post: operations['sendVerificationEmail']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/email_addresses/{email_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Email Address
     * @description Retrieve an email address by id.
     */
    get: operations['getEmailAddress']
    put?: never
    post?: never
    /**
     * Delete email address
     * @description Delete an email address by id.
     */
    delete: operations['DeleteEmailAddress']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/phone_numbers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Phone Numbers
     * @description Retrieve all phone numbers associated with the current user.
     */
    get: operations['getPhoneNumbers']
    put?: never
    /**
     * Create Phone Number
     * @description Add a phone number to the current user. The phone number then needs to be verified using the sms `prepare_verification` and `attempt_verification` endpoints.
     */
    post: operations['postPhoneNumbers']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/phone_numbers/{phone_number_id}/attempt_verification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attempt Phone Number Verification
     * @description Attempt to verify the given phone number using the code sent during the `prepare_verification` step.
     */
    post: operations['verifyPhoneNumber']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/phone_numbers/{phone_number_id}/prepare_verification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Prepare Phone Number Verification
     * @description Sends an sms to the phone number with the code needed to verify it.
     */
    post: operations['sendVerificationSMS']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/phone_numbers/{phone_number_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve Phone Number
     * @description Retrieve all properties for the given phone number.
     */
    get: operations['ReadPhoneNumber']
    put?: never
    post?: never
    /**
     * Delete Phone Number
     * @description Deletes the phone number with the given id.
     */
    delete: operations['DeletePhoneNumber']
    options?: never
    head?: never
    /**
     * Update Phone Number
     * @description Update the properties of the given phone number.
     */
    patch: operations['UpdatePhoneNumber']
    trace?: never
  }
  '/v1/me/web3_wallets': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get All Web3 Wallets
     * @description Retrieve all web3 wallets associated with the current user.
     */
    get: operations['getWeb3Wallets']
    put?: never
    /**
     * Create Web3 Wallet
     * @description Create a new web3 wallet.
     */
    post: operations['postWeb3Wallets']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/web3_wallets/{web3_wallet_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Web3 Wallet
     * @description Retrieve all properties associated a specific web3 wallet.
     */
    get: operations['readWeb3Wallet']
    put?: never
    post?: never
    /**
     * Delete Web3 Wallet
     * @description Delete a web3 wallet by id.
     */
    delete: operations['deleteWeb3Wallet']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/web3_wallets/{web3_wallet_id}/prepare_verification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Prepare Web3 Wallet Verification
     * @description Prepares verification for the provided web3 wallet.
     */
    post: operations['prepareWeb3WalletVerification']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/web3_wallets/{web3_wallet_id}/attempt_verification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attempt Web3 Wallet Verification
     * @description Attempts to verify the provided web3 wallet.
     */
    post: operations['attemptWeb3WalletVerification']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/passkeys': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create Passkey
     * @description Create a new passkey.
     */
    post: operations['postPasskey']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/passkeys/{passkey_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Passkey
     * @description Retrieve all properties associated a specific passkey.
     */
    get: operations['readPasskey']
    put?: never
    post?: never
    /**
     * Delete Passkey
     * @description Delete a passkey by id.
     */
    delete: operations['deletePasskey']
    options?: never
    head?: never
    /**
     * Update Passkey
     * @description Update properties of a specific passkey.
     */
    patch: operations['patchPasskey']
    trace?: never
  }
  '/v1/me/passkeys/{passkey_id}/attempt_verification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attempt Passkey Verification
     * @description Attempts to verify the provided passkey.
     */
    post: operations['attemptPasskeyVerification']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/external_accounts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Connect OAuth Accounts
     * @description Connect a new External Account from the OAuth providers enabled.
     */
    post: operations['postOAuthAccounts']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/external_accounts/{external_account_id}/reauthorize': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /**
     * Reauthorize External Account
     * @description Reauthorize an external account by ID.
     */
    patch: operations['reauthorizeExternalAccount']
    trace?: never
  }
  '/v1/me/external_accounts/{external_account_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /**
     * Delete External Account
     * @description Delete an external account by ID.
     */
    delete: operations['deleteExternalAccount']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/external_accounts/{external_account_id}/tokens': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /**
     * Revoke OAuth tokens
     * @description Revoke the OAuth access and refresh token of an external account by ID, if supported by the provider.
     */
    delete: operations['revokeExternalAccountTokens']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/totp': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create TOTP
     * @description Initializes TOTP by generating a new secret. This then needs to be added to an authenticator app and verified. A user can have only one TOTP secret and this endpoint will return an error if it is already present.
     */
    post: operations['postTOTP']
    /**
     * Delete TOTP
     * @description Deletes the current TOTP secret. This will invalidate all authenticators that where previously added.
     */
    delete: operations['deleteTOTP']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/totp/attempt_verification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attempt TOTP Verification
     * @description Attempts to verify the TOTP secret previously created using a code from an authenticator.
     */
    post: operations['verifyTOTP']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/backup_codes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create Backup Codes
     * @description Create two factor authentication backup codes for the current user.
     *     A two factor authenitcation method must be enabled for the environment. Otherwise the endpoint will return an error.
     */
    post: operations['createBackupCodes']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get User
     * @description Returns all attributes of the current user.
     */
    get: operations['getUser']
    put?: never
    post?: never
    /**
     * Delete User
     * @description Delete the current user.
     */
    delete: operations['deleteUser']
    options?: never
    head?: never
    /**
     * Update User
     * @description Update the current user with the given attributes.
     */
    patch: operations['patchUser']
    trace?: never
  }
  '/v1/me/tokens': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description create a jwt for the requested user. */
    post: operations['createServiceToken']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/profile_image': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Update Profile Image
     * @description Update the current user's profile image.
     */
    post: operations['updateProfileImage']
    /**
     * Delete Profile Image
     * @description Remove the current user's profile image.
     */
    delete: operations['deleteProfileImage']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/change_password': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Update Password
     * @description Update the current user's password.
     */
    post: operations['changePassword']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/remove_password': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Delete Password
     * @description Removes the current user's password.
     */
    post: operations['removePassword']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/organization_memberships': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Organization Memberships
     * @description Get a list of the organization memberships of the current user.
     */
    get: operations['getOrganizationMemberships']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/organization_memberships/{organization_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /**
     * Delete Organization Membership
     * @description Delete the membership of the given organization.
     */
    delete: operations['deleteOrganizationMemberships']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/organization_invitations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Current User's Organization Invitations
     * @description Get a list of the organization invitations of the current user.
     */
    get: operations['getUsersOrganizationInvitations']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/organization_invitations/{invitation_id}/accept': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Accept Organization invitation
     * @description Accept an organization invitation for the current user.
     */
    post: operations['acceptOrganizationInvitation']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/organization_suggestions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Organization Suggestions
     * @description Get a list of the organization suggestions of the current user.
     */
    get: operations['getOrganizationSuggestions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/me/organization_suggestions/{suggestion_id}/accept': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Accept Organization Suggestion
     * @description Accept an organization suggestion for the current user.
     */
    post: operations['acceptOrganizationSuggestion']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create Organization
     * @description Create an organization and add the current user as admin.
     */
    post: operations['createOrganization']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Organization
     * @description Retrieve all properties of an organization that the current user is member of.
     */
    get: operations['getOrganization']
    put?: never
    post?: never
    /**
     * Delete Organization
     * @description Delete the given organization.
     *
     *     The current user must be an admin in the organization.
     */
    delete: operations['deleteOrganization']
    options?: never
    head?: never
    /**
     * Update Organization
     * @description Update the given properties of an organization.
     *
     *     The current user must be an admin in the organization.
     */
    patch: operations['updateOrganization']
    trace?: never
  }
  '/v1/organizations/{organization_id}/logo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Update Organization Logo
     * @description Update the organization logo.
     *
     *     The current user must be an admin in the organization.
     */
    put: operations['updateOrganizationLogo']
    post?: never
    /**
     * Delete Organization Logo
     * @description Delete the organization logo.
     *
     *     The current user must be an admin in the organization.
     */
    delete: operations['deleteOrganizationLogo']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/invitations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get All Organization Invitations
     * @description Retrieve all invitations for an organization.
     *
     *     The current user must have permissions to manage the members of the organization.
     */
    get: operations['getOrganizationInvitations']
    put?: never
    /**
     * Create Organization Invitation
     * @description Create an invitation for a user to join an organization.
     *
     *     The current user must have permissions to manage the members of the organization.
     */
    post: operations['createOrganizationInvitations']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/invitations/bulk': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Bulk Create Organization Invitations
     * @description Create an invitation for a user to join an organization.
     *
     *     The current user must have permissions to manage the members of the organization.
     */
    post: operations['bulkCreateOrganizationInvitations']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/invitations/pending': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get All Pending Organization Invitations
     * @deprecated
     * @description Get a list of pending invitations for an organization.
     *
     *     This endpoint is deprecated. Instead use the `/v1/organizations/{organization_id}/invitations`
     *     with a query parameter of `status=pending`.
     */
    get: operations['getAllPendingOrganizationInvitations']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/invitations/{invitation_id}/revoke': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Revoke Pending Organization Invitation
     * @description Revoke a pending organization invitation.
     *
     *     The current user must have permissions to manage the members of the organization.
     */
    post: operations['revokePendingOrganizationInvitation']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/memberships': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get All Organization Members
     * @description Retrieve all members of an organization.
     *
     *     The current user must have permissions to manage the members of the organization.
     */
    get: operations['ListOrganizationMemberships']
    put?: never
    /**
     * Create Organization Membership
     * @description Create a new organization membership.
     *
     *     The current user must have permissions to manage the members of the organization.
     */
    post: operations['CreateOrganizationMembership']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/memberships/{user_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /**
     * Remove Organization Member
     * @description Remove a member from an organization.
     *
     *     The current user must have permissions to manage the members of the organization.
     */
    delete: operations['removeOrganizationMember']
    options?: never
    head?: never
    /**
     * Update Organization Membership
     * @description Update the attributes of a organization membership for a specific user.
     *     The current user must have permissions to manage the members of the organization.
     */
    patch: operations['UpdateOrganizationMembership']
    trace?: never
  }
  '/v1/organizations/{organization_id}/domains': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get All Organization Domains
     * @description Retrieves a list of all the domains in an organization
     *
     *     The current user must have permissions to manage the domains of the organization.
     */
    get: operations['ListOrganizationDomains']
    put?: never
    /**
     * Create Organization Domain
     * @description Create a new organization domain.
     *
     *     The current user must have permissions to manage the domains of the organization.
     */
    post: operations['CreateOrganizationDomain']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/domains/{domain_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Organization Domain
     * @description Retrieve all properties for a domain of an organization.
     *
     *     The current user must have permissions to manage the domains of the organization.
     */
    get: operations['GetOrganizationDomain']
    put?: never
    post?: never
    /**
     * Delete Organization Domain
     * @description Remove a domain from an organization.
     *
     *     The current user must have permissions to manage the domains of the organization.
     */
    delete: operations['deleteOrganizationDomain']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/domains/{domain_id}/update_enrollment_mode': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Update Organization Enrollment Mode
     * @description Update the enrollment mode for an organization domain.
     *
     *     This can be either `automatic_invitation` or `automatic_suggestion`.
     *
     *     The current user must have permissions to manage the domains of the organization.
     */
    post: operations['UpdateOrganizationDomainEnrollmentMode']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/domains/{domain_id}/prepare_affiliation_verification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Prepare Organization Domain Affiliation Verification
     * @description Prepares affiliation verification for an organization domain.
     *
     *     The current user must have permissions to manage the domains of the organization.
     */
    post: operations['prepareOrganizationDomainVerification']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/domains/{domain_id}/attempt_affiliation_verification': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Attempt Organization Domain Affiliation Verification
     * @description Attempts affiliation verification for organization domain
     *
     *     The current user must have permissions to manage the domains of the organization.
     */
    post: operations['attemptOrganizationDomainVerification']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/membership_requests': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Organization Membership Requests
     * @description Retrieve a list of all membership requests of an organization.
     *
     *     The current user must have permissions to manage the members of the organization.
     */
    get: operations['listOrganizationMembershipRequests']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/membership_requests/{request_id}/accept': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Accept Organization Membership Request
     * @description Accepts an organization membership request.
     *
     *     The current user must have permissions to manage the members of the organization.
     */
    post: operations['acceptOrganizationMembershipRequest']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/membership_requests/{request_id}/reject': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Reject Organization Membership Request
     * @description Rejects an organization membership request
     *
     *     The current user must have permissions to manage the members of the organization.
     */
    post: operations['rejectOrganizationMembershipRequest']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/organizations/{organization_id}/roles': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get Organization Roles
     * @description Retrieve a list of all roles of an organization.
     */
    get: operations['ListOrganizationRoles']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/tickets/accept': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Accept ticket
     * @description Parses a ticket JWT and performs the necessary actions depending on the ticket's source type.
     *     Depending on the ticket source type, a successful response can either redirect to a new location
     *     with the ticket in the query string, or respond directly with a text/html content type for the response body.
     */
    get: operations['acceptTicket']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v1/verify': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Attempt Email Link Verification
     * @description Attempt to verify a verification with email_link strategy.
     */
    get: operations['verify']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    'WellKnown.Assetlinks': {
      relation?: 'delegate_permission/common.handle_all_urls'[]
      target?: {
        namespace?: string
        package_name?: string
        sha256_cert_fingerprints?: string[]
      }
    }[]
    'WellKnown.JWKS': {
      keys?: {
        use?: string
        kty?: string
        kid?: string
        alg?: string
        n?: string
        e?: string
      }[]
    }
    'WellKnown.OpenIDConfiguration': {
      issuer?: string
      jwks_uri?: string
      authorization_endpoint?: string
      backchannel_logout_supported?: boolean
      frontchannel_logout_supported?: boolean
      grant_types_supported?: string[]
      response_modes_supported?: string[]
      response_types_supported?: string[]
      token_endpoint?: string
      token_endpoint_auth_methods_supported?: string[]
      userinfo_endpoint?: string
    }
    ClerkError: {
      message: string
      long_message: string
      code: string
      meta?: Record<string, never>
      clerk_trace_id?: string
    }
    ClerkErrors: {
      errors: components['schemas']['ClerkError'][]
      meta?: Record<string, never>
    }
    'OAuth.Token': {
      access_token?: string
      expires_in?: number
      refresh_token?: string
      scope?: string
      token_type?: string
    }
    'OAuth.UserInfo': {
      object: string
      instance_id: string
      email: string
      email_verified: boolean
      family_name: string
      given_name: string
      name: string
      username: string
      picture: string
      user_id: string
      public_metadata: Record<string, never>
      private_metadata?: Record<string, never>
      unsafe_metadata?: Record<string, never>
    }
    'Client.AccountPortal': {
      /** @enum {string} */
      object: 'account_portal'
      allowed?: boolean
      enabled: boolean
      internal_linking: boolean
      after_sign_in_url: string
      after_sign_up_url: string
      after_create_organization_url: string
      after_leave_organization_url: string
      logo_link_url: string
    }
    'Client.AuthConfig': {
      /** @enum {string} */
      object: 'auth_config'
      id: string
      /** @enum {string} */
      first_name: 'on' | 'off' | 'required'
      /** @enum {string} */
      last_name: 'on' | 'off' | 'required'
      /** @enum {string} */
      email_address: 'on' | 'off' | 'required'
      /** @enum {string} */
      phone_number: 'on' | 'off' | 'required'
      /** @enum {string} */
      username: 'on' | 'off' | 'required'
      /** @enum {string} */
      password: 'on' | 'off' | 'required'
      identification_requirements: string[][]
      identification_strategies: string[]
      first_factors: string[]
      second_factors: string[]
      email_address_verification_strategies: string[]
      single_session_mode: boolean
      enhanced_email_deliverability: boolean
      test_mode: boolean
      demo?: boolean
      /** @deprecated */
      cookieless_dev?: boolean
      url_based_session_syncing?: boolean
    }
    Image: {
      /** @description The object type. Always "image". */
      object?: string
      /** @description Unique identifier for the image. */
      id?: string
      /** @description The file name of the uploaded image. */
      name?: string
      /** @description The publicly accessible URL for the image. */
      public_url?: string
    }
    'Client.DisplayConfig': {
      /** @enum {string} */
      object: 'display_config'
      id: string
      instance_environment_type: string
      application_name: string
      theme: Record<string, never>
      /** @enum {string} */
      preferred_sign_in_strategy: 'password' | 'otp'
      /** @deprecated */
      logo_image?: components['schemas']['Image'] | null
      /** @deprecated */
      logo_url?: string | null
      logo_image_url: string | null
      /** @deprecated */
      favicon_image?: components['schemas']['Image'] | null
      /** @deprecated */
      favicon_url: string | null
      favicon_image_url?: string | null
      home_url: string
      sign_in_url: string
      sign_up_url: string
      user_profile_url: string
      after_sign_in_url: string
      after_sign_up_url: string
      after_sign_out_one_url: string
      after_sign_out_all_url?: string
      after_switch_session_url: string
      organization_profile_url?: string
      create_organization_url?: string
      after_create_organization_url?: string
      after_leave_organization_url?: string
      logo_link_url?: string
      help_url?: string | null
      privacy_policy_url?: string | null
      terms_url?: string | null
      support_email: string | null
      clerk_js_version?: string | null
      branded?: boolean
      experimental_force_oauth_first: boolean
      captcha_public_key: string | null
      captcha_public_key_invisible: string | null
      /** @enum {string|null} */
      captcha_widget_type: 'smart' | 'invisible' | null
      /** @enum {string|null} */
      captcha_provider?: 'turnstile' | 'hcaptcha' | null
      captcha_oauth_bypass: string[]
      google_one_tap_client_id?: string | null
      show_devmode_warning?: boolean
    }
    'UserSettings.Attribute': {
      enabled?: boolean
      required?: boolean
      used_for_first_factor?: boolean
      first_factors?: string[]
      used_for_second_factor?: boolean
      second_factors?: string[]
      verifications?: string[]
      verify_at_sign_up?: boolean
    }
    'UserSettings.Attributes': {
      email_address: components['schemas']['UserSettings.Attribute']
      phone_number: components['schemas']['UserSettings.Attribute']
      username: components['schemas']['UserSettings.Attribute']
      password: components['schemas']['UserSettings.Attribute']
      first_name: components['schemas']['UserSettings.Attribute']
      last_name: components['schemas']['UserSettings.Attribute']
      ticket: components['schemas']['UserSettings.Attribute']
      web3_wallet: components['schemas']['UserSettings.Attribute']
      authenticator_app: components['schemas']['UserSettings.Attribute']
      backup_code: components['schemas']['UserSettings.Attribute']
      passkey: components['schemas']['UserSettings.Attribute']
    }
    'UserSettings.Social': {
      enabled: boolean
      required: boolean
      authenticatable: boolean
      block_email_subaddresses?: boolean
      strategy: string
      not_selectable?: boolean
      deprecated?: boolean
    }
    'UserSettings.Socials': {
      oauth_atlassian?: components['schemas']['UserSettings.Social']
      oauth_bitbucket?: components['schemas']['UserSettings.Social']
      oauth_discord?: components['schemas']['UserSettings.Social']
      oauth_dropbox?: components['schemas']['UserSettings.Social']
      oauth_facebook?: components['schemas']['UserSettings.Social']
      oauth_github?: components['schemas']['UserSettings.Social']
      oauth_gitlab?: components['schemas']['UserSettings.Social']
      oauth_google?: components['schemas']['UserSettings.Social']
      oauth_hubspot?: components['schemas']['UserSettings.Social']
      oauth_microsoft?: components['schemas']['UserSettings.Social']
      oauth_tiktok?: components['schemas']['UserSettings.Social']
      oauth_twitch?: components['schemas']['UserSettings.Social']
      oauth_twitter?: components['schemas']['UserSettings.Social']
      oauth_linkedin?: components['schemas']['UserSettings.Social']
      oauth_linkedin_oidc?: components['schemas']['UserSettings.Social']
      oauth_notion?: components['schemas']['UserSettings.Social']
      oauth_apple?: components['schemas']['UserSettings.Social']
      oauth_line?: components['schemas']['UserSettings.Social']
      oauth_coinbase?: components['schemas']['UserSettings.Social']
      oauth_box?: components['schemas']['UserSettings.Social']
      oauth_xero?: components['schemas']['UserSettings.Social']
      oauth_spotify?: components['schemas']['UserSettings.Social']
      oauth_slack?: components['schemas']['UserSettings.Social']
      oauth_linear?: components['schemas']['UserSettings.Social']
      oauth_x?: components['schemas']['UserSettings.Social']
      oauth_mock?: components['schemas']['UserSettings.Social']
      oauth_custom_mock?: components['schemas']['UserSettings.Social']
    }
    'UserSettings.Saml': {
      enabled?: boolean
    }
    'UserSettings.SecondFactor': {
      required: boolean
    }
    'UserSettings.SignIn': {
      second_factor: components['schemas']['UserSettings.SecondFactor']
    }
    'UserSettings.SignUp': {
      captcha_enabled: boolean
      captcha_widget_type?: string
      custom_action_required: boolean
      progressive: boolean
      /** @enum {string} */
      mode?: 'public' | 'restricted'
    }
    'UserSettings.Restrictions.Allowlist': {
      enabled: boolean
    }
    'UserSettings.Restrictions.Blocklist': {
      enabled: boolean
    }
    'UserSettings.Restrictions': {
      allowlist: components['schemas']['UserSettings.Restrictions.Allowlist']
      blocklist: components['schemas']['UserSettings.Restrictions.Blocklist']
      block_email_subaddresses: {
        enabled: boolean
      }
      block_disposable_email_domains: {
        enabled: boolean
      }
      ignore_dots_for_gmail_addresses: {
        enabled: boolean
      }
    }
    'UserSettings.UsernameSettings': {
      min_length: number
      max_length: number
    }
    'UserSettings.PasswordSettings': {
      disable_hibp: boolean
      min_length: number
      max_length: number
      /** @description Denotes whether given passwords should contain at least one of the following special characters: #%$&_!
       *      */
      require_special_char: boolean
      require_numbers: boolean
      require_uppercase: boolean
      require_lowercase: boolean
      show_zxcvbn: boolean
      min_zxcvbn_strength: number
      enforce_hibp_on_sign_in: boolean
      allowed_special_characters: string
    }
    'UserSettings.ActionsSettings': {
      delete_self: boolean
      create_organization: boolean
      create_organizations_limit?: boolean | null
    }
    'UserSettings.AttackProtectionSettings.UserLockout': {
      enabled: boolean
      duration_in_minutes: number | null
      max_attempts: number | null
    }
    'UserSettings.AttackProtectionSettings.PII': {
      enabled: boolean
    }
    'UserSettings.AttackProtectionSettings.EmailLink': {
      require_same_client: boolean
    }
    'UserSettings.AttackProtectionSettings': {
      user_lockout?: components['schemas']['UserSettings.AttackProtectionSettings.UserLockout']
      pii?: components['schemas']['UserSettings.AttackProtectionSettings.PII']
      email_link?: components['schemas']['UserSettings.AttackProtectionSettings.EmailLink']
    }
    'UserSettings.PasskeySettings': {
      /** @description Passkey UI will be shown when user interacts with the text input. Defaults to true.
       *      */
      allow_autofill: boolean
      /** @description Passkey UI will be shown when user clicks on a button. Defaults to true.
       *      */
      show_sign_in_button: boolean
    }
    'Client.UserSettings': {
      attributes: components['schemas']['UserSettings.Attributes']
      social: components['schemas']['UserSettings.Socials']
      saml?: components['schemas']['UserSettings.Saml']
      sign_in: components['schemas']['UserSettings.SignIn']
      sign_up: components['schemas']['UserSettings.SignUp']
      restrictions: components['schemas']['UserSettings.Restrictions']
      username_settings?: components['schemas']['UserSettings.UsernameSettings']
      password_settings: components['schemas']['UserSettings.PasswordSettings']
      actions?: components['schemas']['UserSettings.ActionsSettings']
      attack_protection: components['schemas']['UserSettings.AttackProtectionSettings']
      passkey_settings: components['schemas']['UserSettings.PasskeySettings']
    }
    'OrganizationSettings.ActionsSettings': {
      admin_delete: boolean
    }
    'OrganizationSettings.DomainsSettings': {
      enabled: boolean
      enrollment_modes: (
        | 'manual_invitation'
        | 'automatic_invitation'
        | 'automatic_suggestion'
      )[]
      /** @description The role key that it will be used in order to create an organization invitation or suggestion. */
      default_role: string
    }
    'Client.OrganizationSettings': {
      enabled: boolean
      max_allowed_memberships: number
      actions?: components['schemas']['OrganizationSettings.ActionsSettings']
      domains?: components['schemas']['OrganizationSettings.DomainsSettings']
      /** @description The role key that a user will be assigned after creating an organization. */
      creator_role?: string
    }
    'Client.Environment': {
      auth_config?: components['schemas']['Client.AuthConfig']
      display_config?: components['schemas']['Client.DisplayConfig']
      user_settings?: components['schemas']['Client.UserSettings']
      organization_settings?: components['schemas']['Client.OrganizationSettings']
      maintenance_mode?: boolean
    }
    'Stubs.SignInFactor': {
      /** @enum {string} */
      strategy:
        | 'ticket'
        | 'password'
        | 'email_code'
        | 'email_link'
        | 'phone_code'
        | 'web3_metamask_signature'
        | 'web3_coinbase_wallet_signature'
        | 'totp'
        | 'backup_code'
        | 'oauth_apple'
        | 'oauth_google'
        | 'oauth_facebook'
        | 'oauth_hubspot'
        | 'oauth_github'
        | 'oauth_mock'
        | 'oauth_custom_mock'
        | 'oauth_token_mock'
        | 'saml'
        | 'reset_password_email_code'
        | 'reset_password_phone_code'
        | 'passkey'
        | 'google_one_tap'
      safe_identifier?: string
      email_address_id?: string
      phone_number_id?: string
      web3_wallet_id?: string
      passkey_id?: string
      primary?: boolean | null
      default?: boolean
    }
    'Stubs.Verification.Password': {
      /** @enum {string} */
      status: 'unverified' | 'verified'
      /** @enum {string} */
      strategy: 'password'
      attempts?: number | null
      expire_at?: number | null
    }
    'Stubs.Verification.Oauth': {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'failed' | 'expired' | 'transferable'
      /** @enum {string} */
      strategy:
        | 'oauth_apple'
        | 'oauth_google'
        | 'oauth_mock'
        | 'oauth_custom_mock'
      external_verification_redirect_url?: string | null
      error?: components['schemas']['ClerkError'] | null
      expire_at: number
      attempts?: number | null
    }
    'Stubs.Verification.OTP': {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'failed' | 'expired'
      /** @enum {string} */
      strategy:
        | 'phone_code'
        | 'email_code'
        | 'reset_password_email_code'
        | 'reset_password_phone_code'
      attempts?: number | null
      expire_at: number
    }
    'Stubs.Verification.Link': {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'failed' | 'expired'
      /** @enum {string} */
      strategy: 'email_link'
      attempts?: number | null
      expire_at: number
      verified_at_client?: string
    }
    'Stubs.Verification.Web3Signature': {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'failed' | 'expired'
      /** @enum {string} */
      strategy: 'web3_metamask_signature' | 'web3_coinbase_wallet_signature'
      attempts?: number | null
      expire_at?: number | null
      nonce?: string | null
      message?: string | null
    }
    'Stubs.Verification.Ticket': {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'expired'
      /** @enum {string} */
      strategy: 'ticket'
      attempts?: number | null
      expire_at?: number | null
    }
    'Stubs.Verification.SAML': {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'failed' | 'expired' | 'transferable'
      /** @enum {string} */
      strategy: 'saml'
      external_verification_redirect_url?: string | null
      error?: components['schemas']['ClerkError'] & Record<string, never>
      expire_at?: number | null
      attempts?: number | null
    }
    'Stubs.Verification.Passkey': {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'failed' | 'expired'
      /** @enum {string} */
      strategy: 'passkey'
      attempts?: number | null
      expire_at: number
      nonce?: string
    }
    'Stubs.Verification.GoogleOneTap': {
      /** @enum {string} */
      status: 'unverified' | 'verified'
      /** @enum {string} */
      strategy: 'google_one_tap'
      expire_at?: number | null
      attempts?: number | null
    }
    'Stubs.Verification.TOTP': {
      /** @enum {string} */
      status: 'unverified' | 'verified'
      /** @enum {string} */
      strategy: 'totp'
      attempts?: number | null
      expire_at?: number | null
    }
    'Stubs.Verification.BackupCode': {
      /** @enum {string} */
      status: 'unverified' | 'verified'
      /** @enum {string} */
      strategy: 'backup_code'
      attempts?: number | null
      expire_at?: number | null
    }
    'Client.SignIn': {
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object: 'sign_in_attempt'
      id: string
      /** @enum {string} */
      status:
        | 'abandoned'
        | 'needs_identifier'
        | 'needs_first_factor'
        | 'needs_second_factor'
        | 'needs_new_password'
        | 'complete'
      /** @description List of supported identifiers that can be used to sign in.
       *      */
      supported_identifiers: (
        | 'email_address'
        | 'phone_number'
        | 'username'
        | 'web3_wallet'
        | 'passkey'
      )[]
      identifier: string | null
      user_data?: {
        first_name?: string | null
        last_name?: string | null
        /** @deprecated */
        profile_image_url?: string | null
        image_url?: string
        has_image?: boolean
      } | null
      supported_first_factors:
        | components['schemas']['Stubs.SignInFactor'][]
        | null
      first_factor_verification:
        | (
            | components['schemas']['Stubs.Verification.Password']
            | components['schemas']['Stubs.Verification.Oauth']
            | components['schemas']['Stubs.Verification.OTP']
            | components['schemas']['Stubs.Verification.Link']
            | components['schemas']['Stubs.Verification.Web3Signature']
            | components['schemas']['Stubs.Verification.Ticket']
            | components['schemas']['Stubs.Verification.SAML']
            | components['schemas']['Stubs.Verification.Passkey']
            | components['schemas']['Stubs.Verification.GoogleOneTap']
          )
        | null
      supported_second_factors:
        | components['schemas']['Stubs.SignInFactor'][]
        | null
      second_factor_verification?:
        | (
            | components['schemas']['Stubs.Verification.OTP']
            | components['schemas']['Stubs.Verification.TOTP']
            | components['schemas']['Stubs.Verification.Ticket']
            | components['schemas']['Stubs.Verification.BackupCode']
          )
        | null
      created_session_id: string | null
      abandon_at: number
    }
    'Stubs.SignUpVerification': {
      /** @enum {string} */
      next_action?: 'needs_prepare' | 'needs_attempt' | ''
      supported_strategies?: string[]
    }
    'Client.SignUp.Verifications': {
      email_address?: components['schemas']['Stubs.SignUpVerification'] | null
      phone_number?: components['schemas']['Stubs.SignUpVerification'] | null
      external_account?:
        | (
            | components['schemas']['Stubs.Verification.Oauth']
            | components['schemas']['Stubs.Verification.SAML']
            | components['schemas']['Stubs.Verification.Ticket']
            | components['schemas']['Stubs.Verification.GoogleOneTap']
          )
        | null
    }
    'Client.SignUp': {
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object?: 'sign_up_attempt'
      /** @description Unique identifier for this sign up. */
      id?: string
      /** @enum {string} */
      status?: 'abandoned' | 'missing_requirements' | 'complete'
      /** @description List of required fields which need to be supplied to the current sign-up. These fields are mandatory in order for the sign-up to satisfy the attached registration policy and be marked as complete.
       *      */
      required_fields?: string[]
      /** @description List of optional fields which can be supplied to the current sign-up. These fields are not required and their absence does not prevent the sign-up to be marked as complete.
       *      */
      optional_fields?: string[]
      /** @description List of the missing fields which still need to be supplied to the current sign-up. These fields are mandatory in order for the sign-up to satisfy the attached registration policy and be marked as complete.
       *      */
      missing_fields?: string[]
      /** @description List of fields which are already supplied to the current sign-up but they need to be verified. Example of such fields are email addresses and phone numbers.
       *      */
      unverified_fields?: string[]
      /** @description Group for all available verifications.
       *      */
      verifications?: components['schemas']['Client.SignUp.Verifications']
      username?: string | null
      email_address?: string | null
      phone_number?: string | null
      web3_wallet?: string | null
      password_enabled?: boolean | null
      first_name?: string | null
      last_name?: string | null
      /** @description Custom JSON that callers can use to store arbitrary values that make sense in the context of the current sign up.
       *      */
      unsafe_metadata?: Record<string, never>
      /** @description Custom JSON that can be used to store arbitrary values which will end up in the user's public metadata. This field can only be populated from the application's BE. At this point, this can be done via invitations.
       *      */
      public_metadata?: Record<string, never>
      external_id?: string | null
      created_session_id?: string | null
      created_user_id?: string | null
      abandon_at?: number | null
    }
    'Client.SessionBase': {
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object?: 'session'
      actor?: Record<string, never>
      /** @enum {string} */
      status?:
        | 'active'
        | 'revoked'
        | 'ended'
        | 'expired'
        | 'removed'
        | 'abandoned'
      last_active_at?: number
      expire_at?: number
      abandon_at?: number
    }
    'Stubs.Verification.Invitation': {
      /** @enum {string} */
      status: 'verified'
      /** @enum {string} */
      strategy: 'invitation'
      attempts?: number | null
      expire_at?: number | null
    }
    'Stubs.Verification.Admin': {
      /** @enum {string} */
      status: 'verified'
      /** @enum {string} */
      strategy: 'admin'
      attempts?: number | null
      expire_at?: number | null
    }
    'Stubs.Verification.FromOauth': {
      /** @enum {string} */
      status: 'verified' | 'unverified'
      /** @enum {string} */
      strategy:
        | 'from_oauth_apple'
        | 'from_oauth_google'
        | 'from_oauth_mock'
        | 'from_oauth_custom_mock'
      attempts?: number | null
      expire_at?: number | null
    }
    'Stubs.Identification.Link': {
      /** @enum {string} */
      type:
        | 'oauth_apple'
        | 'oauth_google'
        | 'oauth_mock'
        | 'oauth_custom_mock'
        | 'saml'
      id: string
    }
    'Client.EmailAddress': {
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object: 'email_address'
      email_address: string
      reserved: boolean
      verification:
        | (
            | components['schemas']['Stubs.Verification.OTP']
            | components['schemas']['Stubs.Verification.Invitation']
            | components['schemas']['Stubs.Verification.Link']
            | components['schemas']['Stubs.Verification.Ticket']
            | components['schemas']['Stubs.Verification.Admin']
            | components['schemas']['Stubs.Verification.FromOauth']
            | components['schemas']['Stubs.Verification.SAML']
          )
        | null
      linked_to: components['schemas']['Stubs.Identification.Link'][]
      /**
       * Format: int64
       * @description Unix timestamp of creation
       *
       */
      created_at: number
      /**
       * Format: int64
       * @description Unix timestamp of creation
       *
       */
      updated_at: number
    }
    'Client.PhoneNumber': {
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object: 'phone_number'
      phone_number: string
      reserved_for_second_factor?: boolean
      default_second_factor?: boolean
      reserved: boolean
      verification:
        | (
            | components['schemas']['Stubs.Verification.OTP']
            | components['schemas']['Stubs.Verification.Admin']
          )
        | null
      linked_to: components['schemas']['Stubs.Identification.Link'][]
      backup_codes?: string[] | null
      /**
       * Format: int64
       * @description Unix timestamp of creation
       *
       */
      created_at: number
      /**
       * Format: int64
       * @description Unix timestamp of creation
       *
       */
      updated_at: number
    }
    'Client.Web3Wallet': {
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object: 'web3_wallet'
      web3_wallet: string
      verification:
        | (
            | components['schemas']['Stubs.Verification.Web3Signature']
            | components['schemas']['Stubs.Verification.Admin']
          )
        | null
      /**
       * Format: int64
       * @description Unix timestamp of creation
       *
       */
      created_at: number
      /**
       * Format: int64
       * @description Unix timestamp of creation
       *
       */
      updated_at: number
    }
    'Client.Passkey': {
      id: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object: 'passkey'
      name: string
      /**
       * Format: int64
       * @description Unix timestamp of when the passkey was last used.
       *
       */
      last_used_at?: number
      verification: components['schemas']['Stubs.Verification.Passkey'] | null
      /**
       * Format: int64
       * @description Unix timestamp of creation
       *
       */
      created_at?: number
      /**
       * Format: int64
       * @description Unix timestamp of update
       *
       */
      updated_at?: number
    }
    'Client.Organization': {
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object?: 'organization'
      name?: string
      max_allowed_memberships?: number
      admin_delete_enabled?: boolean
      slug?: string
      /** @deprecated */
      logo_url?: string | null
      image_url?: string
      has_image?: boolean
      members_count?: number
      pending_invitations_count?: number
      public_metadata?: Record<string, never>
      /**
       * Format: int64
       * @description Unix timestamp of creation.
       *
       */
      created_at?: number
      /**
       * Format: int64
       * @description Unix timestamp of last update.
       *
       */
      updated_at?: number
    }
    'Client.OrganizationMembership': {
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object?: 'organization_membership'
      role?: string
      /**
       * Format: int64
       * @description Unix timestamp of creation.
       */
      created_at?: number
      /**
       * Format: int64
       * @description Unix timestamp of last update.
       */
      updated_at?: number
      organization?: components['schemas']['Client.Organization']
      public_user_data?: {
        user_id?: string
        first_name?: string | null
        last_name?: string | null
        /** @deprecated */
        profile_image_url?: string | null
        image_url?: string
        has_image?: boolean
        identifier?: string | null
      }
    }
    Oauth: {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'failed' | 'expired' | 'transferable'
      /** @enum {string} */
      strategy: 'oauth_google' | 'oauth_mock' | 'oauth_custom_mock'
      external_verification_redirect_url?: string
      error?: components['schemas']['ClerkError'] | null
      expire_at: number
      attempts?: number | null
    }
    GoogleOneTap: {
      /** @enum {string} */
      status: 'unverified' | 'verified'
      /** @enum {string} */
      strategy: 'google_one_tap'
      expire_at?: number | null
      attempts?: number | null
    }
    ExternalAccountWithVerification: {
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       * @enum {string}
       */
      object: 'external_account' | 'facebook_account' | 'google_account'
      id: string
      provider?: string
      /** @description The unique ID of the user in the external provider's system */
      provider_user_id?: string
      approved_scopes: string
      email_address: string
      first_name?: string
      last_name?: string
      /** @deprecated */
      avatar_url?: string
      image_url?: string | null
      username?: string | null
      public_metadata: Record<string, never>
      label?: string | null
      verification?:
        | (
            | components['schemas']['Oauth']
            | components['schemas']['GoogleOneTap']
          )
        | null
      /**
       * Format: int64
       * @description Unix timestamp of creation
       *
       */
      created_at: number
      /**
       * Format: int64
       * @description Unix timestamp of creation
       *
       */
      updated_at: number
    } & {
      [key: string]: unknown
    }
    'Stubs.SAMLConnection.SAMLAccount': {
      id: string
      name: string
      domain: string
      active: boolean
      provider: string
      sync_user_attributes: boolean
      allow_subdomains?: boolean
      allow_idp_initiated?: boolean
      disable_additional_identifications?: boolean
      /**
       * Format: int64
       * @description Unix timestamp of creation.
       *
       */
      created_at: number
      /**
       * Format: int64
       * @description Unix timestamp of last update.
       *
       */
      updated_at: number
    }
    'Client.SAMLAccount': {
      id: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object: 'saml_account'
      provider: string
      active: boolean
      email_address: string
      first_name?: string | null
      last_name?: string | null
      /** @description The unique ID of the user in the external provider's system */
      provider_user_id?: string | null
      public_metadata?: Record<string, never>
      verification:
        | (
            | components['schemas']['Stubs.Verification.SAML']
            | components['schemas']['Stubs.Verification.Ticket']
          )
        | null
      saml_connection?:
        | components['schemas']['Stubs.SAMLConnection.SAMLAccount']
        | null
    }
    'Client.User': {
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object?: 'user'
      external_id?: string | null
      primary_email_address_id?: string | null
      primary_phone_number_id?: string | null
      primary_web3_wallet_id?: string | null
      username?: string | null
      first_name?: string | null
      last_name?: string | null
      /** @deprecated */
      profile_image_url?: string
      image_url?: string
      has_image?: boolean
      public_metadata?: Record<string, never>
      private_metadata?: Record<string, never>
      unsafe_metadata?: Record<string, never>
      email_addresses?: components['schemas']['Client.EmailAddress'][]
      phone_numbers?: components['schemas']['Client.PhoneNumber'][]
      web3_wallets?: components['schemas']['Client.Web3Wallet'][]
      passkeys?: components['schemas']['Client.Passkey'][]
      organization_memberships?: components['schemas']['Client.OrganizationMembership'][]
      password_enabled?: boolean
      two_factor_enabled?: boolean
      totp_enabled?: boolean
      backup_code_enabled?: boolean
      external_accounts?: components['schemas']['ExternalAccountWithVerification'][]
      saml_accounts?: components['schemas']['Client.SAMLAccount'][]
      /**
       * Format: int64
       * @description Unix timestamp of last sign-in.
       *
       */
      last_sign_in_at?: number | null
      /** @description Flag to denote whether user is banned or not.
       *      */
      banned?: boolean
      /** @description Flag to denote whether user is currently locked, i.e. restricted from signing in or not.
       *      */
      locked?: boolean
      /**
       * Format: int64
       * @description The number of seconds remaining until the lockout period expires for a locked user. A null value for a locked user indicates that lockout never expires.
       *
       */
      lockout_expires_in_seconds?: number | null
      /**
       * Format: int64
       * @description The number of verification attempts remaining until the user is locked. Null if account lockout is not enabled. Note: if a user is locked explicitly via the Backend API, they may still have verification attempts remaining.
       *
       */
      verification_attempts_remaining?: number | null
      /**
       * Format: int64
       * @description Unix timestamp of last update.
       *
       */
      updated_at?: number
      /**
       * Format: int64
       * @description Unix timestamp of creation.
       *
       */
      created_at?: number
      /** @description If enabled, user can delete themselves via FAPI.
       *      */
      delete_self_enabled?: boolean
      /** @description If enabled, user can create organizations via FAPI.
       *      */
      create_organization_enabled?: boolean
      /** @description The maximum number of organizations the user can create. 0 means unlimited.
       *      */
      create_organizations_limit?: number | null
      /**
       * Format: int64
       * @description Unix timestamp of the latest session activity, with day precision.
       *
       */
      last_active_at?: number | null
    }
    'Client.Session': components['schemas']['Client.SessionBase'] & {
      user?: components['schemas']['Client.User'] | null
      public_user_data?: {
        first_name?: string | null
        last_name?: string | null
        /** @deprecated */
        profile_image_url?: string | null
        image_url?: string
        has_image?: boolean
        identifier?: string | null
      } | null
    }
    'Client.Client': {
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object: 'client'
      /** @description String representing the identifier of the session.
       *      */
      id?: string
      sign_in: components['schemas']['Client.SignIn'] | null
      sign_up: components['schemas']['Client.SignUp'] | null
      sessions: components['schemas']['Client.Session'][]
      /** @description Last active session_id.
       *      */
      last_active_session_id: string | null
      /**
       * Format: int64
       * @description Unix timestamp of last update.
       *
       */
      updated_at: number
      /**
       * Format: int64
       * @description Unix timestamp of creation.
       *
       */
      created_at: number
    } | null
    'Client.DeleteSession': {
      response: components['schemas']['Client.Client'] | null
      client: Record<string, never>
    }
    'Responses.Client.SignIn': {
      response: components['schemas']['Client.SignIn']
      client: components['schemas']['Client.Client']
    }
    'Responses.Client.SignUp': {
      response: components['schemas']['Client.SignUp']
      client: components['schemas']['Client.Client']
    }
    'Responses.Client.Session': {
      response: components['schemas']['Client.Session']
      client: components['schemas']['Client.Client']
    }
    'Client.Activity': {
      object: string
      id: string
      device_type?: string
      is_mobile?: boolean
      browser_name?: string
      browser_version?: string
      ip_address?: string
      city?: string
      country?: string
    }
    'Client.ActiveSession': components['schemas']['Client.Session'] & {
      latest_activity?: components['schemas']['Client.Activity']
    }
    'Client.ActiveSessions': components['schemas']['Client.ActiveSession'][]
    'Server.Sessions': components['schemas']['Client.Session'][]
    'Server.UserEmailAddresses': components['schemas']['Client.EmailAddress'][]
    'Client.ClientWrappedEmailAddress': {
      response: components['schemas']['Client.EmailAddress']
      client: components['schemas']['Client.Client']
    }
    'Client.DeletedObject': {
      id?: string
      object?: string
      deleted?: boolean
    }
    'Client.ClientWrappedDeletedObject': {
      response: components['schemas']['Client.DeletedObject']
      client: components['schemas']['Client.Client'] | null
    }
    'Server.UserPhoneNumbers': components['schemas']['Client.PhoneNumber'][]
    'Client.ClientWrappedPhoneNumber': {
      response: components['schemas']['Client.PhoneNumber']
      client: components['schemas']['Client.Client']
    }
    'Server.UserWeb3Wallets': components['schemas']['Client.Web3Wallet'][]
    'Client.ClientWrappedWeb3Wallet': {
      response: components['schemas']['Client.Web3Wallet']
      client: components['schemas']['Client.Client']
    }
    'Client.ClientWrappedPasskey': {
      response: components['schemas']['Client.Passkey']
      client: components['schemas']['Client.Client']
    }
    'Client.ClientWrappedExternalAccount': {
      response: components['schemas']['ExternalAccountWithVerification']
      client: components['schemas']['Client.Client']
    }
    'Client.ClientWrappedUser': {
      response: components['schemas']['Client.User']
      client: components['schemas']['Client.Client']
    }
    TOTP: {
      object: string
      id: string
      secret: string | null
      uri: string | null
      verified: boolean
      backup_codes?: string[] | null
    } & {
      [key: string]: unknown
    }
    'Client.ClientWrappedTOTP': {
      response: components['schemas']['TOTP']
      client: components['schemas']['Client.Client']
    }
    BackupCodes: {
      object: string
      id: string
      codes: string[]
    }
    'Client.ClientWrappedBackupCodes': {
      response: components['schemas']['BackupCodes']
      client: components['schemas']['Client.Client']
    }
    Token: {
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object: 'token'
      /** @description String representing the encoded jwt value.
       *      */
      jwt: string
    }
    'Responses.Client.ClientWrappedImage': {
      response: components['schemas']['Image']
      client: components['schemas']['Client.Client']
    }
    'Client.ClientWrappedOrganizationMemberships': {
      response:
        | {
            data?: components['schemas']['Client.OrganizationMembership'][]
            /** Format: int64 */
            total_count?: number
          }
        | components['schemas']['Client.OrganizationMembership'][]
      client: components['schemas']['Client.Client']
    }
    'Client.OrganizationInvitation': {
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object?: 'organization_invitation'
      email_address?: string
      role?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      status?: 'pending' | 'revoked' | 'accepted' | 'completed'
      /**
       * Format: int64
       * @description Unix timestamp of creation.
       *
       */
      created_at?: number
      /**
       * Format: int64
       * @description Unix timestamp of last update.
       *
       */
      updated_at?: number
    }
    'Client.PublicOrganizationData': {
      id?: string
      name?: string
      slug?: string
      image_url?: string
      has_image?: boolean
    }
    'Client.OrganizationInvitationUserContext': {
      public_organization_data?: components['schemas']['Client.PublicOrganizationData']
    } & components['schemas']['Client.OrganizationInvitation']
    'Client.ClientWrappedOrganizationInvitationsUserContext': {
      response: {
        data?: components['schemas']['Client.OrganizationInvitationUserContext'][]
        /** Format: int64 */
        total_count?: number
      }
      client: components['schemas']['Client.Client']
    }
    'Client.ClientWrappedOrganizationInvitationUserContext': {
      response: components['schemas']['Client.OrganizationInvitationUserContext']
      client: components['schemas']['Client.Client']
    }
    'Client.OrganizationSuggestion': {
      /** @enum {string} */
      object?: 'organization_suggestion'
      id?: string
      status?: string
      /**
       * Format: int64
       * @description Unix timestamp of creation.
       */
      created_at?: number
      /**
       * Format: int64
       * @description Unix timestamp of last update.
       */
      updated_at?: number
      public_organization_data?: components['schemas']['Client.PublicOrganizationData']
    }
    'Client.ClientWrappedOrganizationSuggestions': {
      response: {
        data?: components['schemas']['Client.OrganizationSuggestion'][]
        /** Format: int64 */
        total_count?: number
      }
      client: components['schemas']['Client.Client']
    }
    'Client.ClientWrappedOrganizationSuggestion': {
      response: components['schemas']['Client.OrganizationSuggestion']
      client: components['schemas']['Client.Client']
    }
    'Client.ClientWrappedOrganization': {
      response: components['schemas']['Client.Organization']
      client: components['schemas']['Client.Client']
    }
    'Client.ClientWrappedOrganizationInvitations': {
      response:
        | components['schemas']['Client.OrganizationInvitation'][]
        | {
            data?: components['schemas']['Client.OrganizationInvitation'][]
            /** Format: int64 */
            total?: number
          }
      client: components['schemas']['Client.Client']
    }
    'Client.ClientWrappedOrganizationInvitation': {
      response: components['schemas']['Client.OrganizationInvitation']
      client: components['schemas']['Client.Client']
    }
    'Client.ClientWrappedOrganizationMembership': {
      response: components['schemas']['Client.OrganizationMembership']
      client: components['schemas']['Client.Client']
    }
    'Client.OrganizationDomainVerification': {
      status?: string
      strategy?: string
      attempts?: number
      /** Format: int64 */
      expire_at?: number | null
    }
    'Client.OrganizationDomain': {
      /** @enum {string} */
      object?: 'organization_domain'
      id?: string
      organization_id?: string
      name?: string
      enrollment_mode?: string
      affiliation_email_address?: string | null
      total_pending_invitations?: number
      total_pending_suggestions?: number
      /**
       * Format: int64
       * @description Unix timestamp of creation.
       */
      created_at?: number
      /**
       * Format: int64
       * @description Unix timestamp of last update.
       */
      updated_at?: number
      verification?:
        | components['schemas']['Client.OrganizationDomainVerification']
        | null
    }
    'Client.ClientWrappedOrganizationDomains': {
      response: {
        data?: components['schemas']['Client.OrganizationDomain'][]
        /** Format: int64 */
        total_count?: number
      }
      client: components['schemas']['Client.Client']
    }
    'Client.ClientWrappedOrganizationDomain': {
      response: components['schemas']['Client.OrganizationDomain']
      client: components['schemas']['Client.Client']
    }
    'Client.PublicUserData': {
      first_name?: string
      last_name?: string
      image_url?: string
      has_image?: boolean
      identifier?: string
      profile_image_url?: string | null
    }
    'Client.OrganizationMembershipRequest': {
      /** @enum {string} */
      object?: 'organization_membership_request'
      id?: string
      organization_id?: string
      status?: string
      /**
       * Format: int64
       * @description Unix timestamp of creation.
       */
      created_at?: number
      /**
       * Format: int64
       * @description Unix timestamp of last update.
       */
      updated_at?: number
      public_user_data?: components['schemas']['Client.PublicUserData'] | null
    }
    'Client.ClientWrappedOrganizationMembershipRequests': {
      response: {
        data?: components['schemas']['Client.OrganizationMembershipRequest'][]
        /** Format: int64 */
        total_count?: number
      }
      client: components['schemas']['Client.Client']
    }
    'Client.ClientWrappedOrganizationMembershipRequest': {
      response: components['schemas']['Client.OrganizationMembershipRequest']
      client: components['schemas']['Client.Client']
    }
    'Client.Permission': {
      /** @enum {string} */
      object?: 'permission'
      id?: string
      name?: string
      key?: string
      description?: string
      /** @enum {string} */
      type?: 'system' | 'user'
      /**
       * Format: int64
       * @description Unix timestamp of creation.
       */
      created_at?: number
      /**
       * Format: int64
       * @description Unix timestamp of last update.
       */
      updated_at?: number
    }
    'Client.Role': {
      /** @enum {string} */
      object?: 'role'
      id?: string
      name?: string
      key?: string
      description?: string
      is_creator_eligible?: boolean
      permissions?: components['schemas']['Client.Permission'][]
      /**
       * Format: int64
       * @description Unix timestamp of creation.
       */
      created_at?: number
      /**
       * Format: int64
       * @description Unix timestamp of last update.
       */
      updated_at?: number
    }
    'Client.ClientWrappedRoles': {
      response: {
        data?: components['schemas']['Client.Role'][]
        /** Format: int64 */
        total_count?: number
      }
      client: components['schemas']['Client.Client']
    }
  }
  responses: {
    /** @description Get Android asset links for universal/deep linking */
    'WellKnown.Assetlinks': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['WellKnown.Assetlinks']
      }
    }
    /** @description Get the JSON Web Key Set */
    'WellKnown.JWKS': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['WellKnown.JWKS']
      }
    }
    /** @description Get a basic openid configuration payload */
    'WellKnown.OpenIDConfiguration': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['WellKnown.OpenIDConfiguration']
      }
    }
    /** @description Request was not successful */
    ClerkErrors: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['ClerkErrors']
      }
    }
    /** @description Fetch token for OAuth2 flow */
    'OAuth.Token': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OAuth.Token']
      }
    }
    /** @description Get user info after successful OAuth2 flow */
    'OAuth.UserInfo': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OAuth.UserInfo']
      }
    }
    /** @description Returns the account portal. */
    'Client.AccountPortal': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.AccountPortal']
      }
    }
    /** @description Returns the environment. */
    'Client.Environment': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.Environment']
      }
    }
    /** @description Returns the current session object. */
    'Client.Client': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          client?: Record<string, never>
          response?: components['schemas']['Client.Client'] | null
        } & {
          [key: string]: unknown
        }
      }
    }
    /** @description Returns the response for DELETE session object. */
    'Client.DeleteSession': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.DeleteSession']
      }
    }
    /** @description Returns the sign in object, as well as the updated session object. */
    'Client.SignIn': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Responses.Client.SignIn']
      }
    }
    /** @description Returns the sign up object, as well as the updated session object. */
    'Client.SignUp': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Responses.Client.SignUp']
      }
    }
    /** @description Returns a Session object. */
    'Client.Session': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Responses.Client.Session']
      }
    }
    /** @description Returns an Active Sessions array. */
    'Client.ActiveSessions': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ActiveSessions']
      }
    }
    /** @description Returns Sessions array. */
    'Server.Sessions': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Server.Sessions']
      }
    }
    /** @description Returns UserEmailAddresses array. */
    'Server.UserEmailAddresses': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Server.UserEmailAddresses']
      }
    }
    /** @description Returns the response for Session wrapped Email object. */
    'Client.ClientWrappedEmailAddress': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedEmailAddress']
      }
    }
    /** @description Returns a Deleted User object. */
    'Client.ClientWrappedDeletedObject': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedDeletedObject']
      }
    }
    /** @description Returns UserPhoneNumbers array. */
    'Server.UserPhoneNumbers': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Server.UserPhoneNumbers']
      }
    }
    /** @description Returns the response for Session wrapped Email object. */
    'Client.ClientWrappedPhoneNumber': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedPhoneNumber']
      }
    }
    /** @description Returns single DeletedPhoneNumber. */
    'Client.DeletedPhoneNumber': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedDeletedObject']
      }
    }
    /** @description Returns UserWeb3Wallets array. */
    'Server.UserWeb3Wallets': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Server.UserWeb3Wallets']
      }
    }
    /** @description Returns the response for Session wrapped Web3 wallet object. */
    'Client.ClientWrappedWeb3Wallet': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedWeb3Wallet']
      }
    }
    /** @description Returns the response for Session wrapped Passkey object. */
    'Client.ClientWrappedPasskey': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedPasskey']
      }
    }
    /** @description Returns a Deleted Passkey object. */
    'Client.DeletedPasskey': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedDeletedObject']
      }
    }
    /** @description Returns the response for Session wrapped Verification object. */
    'Client.ClientWrappedExternalAccount': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedExternalAccount']
      }
    }
    /** @description Returns a deleted external account. */
    'Client.DeletedExternalAccount': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedDeletedObject']
      }
    }
    /** @description Returns the response for Session wrapped User object. */
    'Client.ClientWrappedUser': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedUser']
      }
    }
    /** @description Returns the response for Session wrapped TOTP object. */
    'Client.ClientWrappedTOTP': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedTOTP']
      }
    }
    /** @description Returns a deleted TOTP. */
    'Client.DeletedTOTP': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedDeletedObject']
      }
    }
    /** @description Returns the response for Session wrapped Backup code object. */
    'Client.ClientWrappedBackupCodes': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedBackupCodes']
      }
    }
    /** @description Success */
    Token: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Token']
      }
    }
    /** @description Returns an Image object. */
    'Client.ClientWrappedImage': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Responses.Client.ClientWrappedImage']
      }
    }
    /** @description Returns the response for Client wrapped array of OrganizationMembership objects. */
    'Client.ClientWrappedOrganizationMemberships': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganizationMemberships']
      }
    }
    /** @description Returns the response for Client wrapped array of OrganizationInvitation objects with user context. */
    'Client.ClientWrappedOrganizationInvitationsUserContext': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganizationInvitationsUserContext']
      }
    }
    /** @description Returns the response for Client wrapped OrganizationInvitation object with user context. */
    'Client.ClientWrappedOrganizationInvitationUserContext': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganizationInvitationUserContext']
      }
    }
    /** @description Returns the response for Client wrapped array of OrganizationSuggestion objects with user context. */
    'Client.ClientWrappedOrganizationSuggestions': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganizationSuggestions']
      }
    }
    /** @description Returns the response for Client wrapped OrganizationSuggestion object with user context. */
    'Client.ClientWrappedOrganizationSuggestion': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganizationSuggestion']
      }
    }
    /** @description Returns the response for Client wrapped Organization object. */
    'Client.ClientWrappedOrganization': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganization']
      }
    }
    /** @description Returns the response for Client wrapped array of OrganizationInvitation objects. */
    'Client.ClientWrappedOrganizationInvitations': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganizationInvitations']
      }
    }
    /** @description Returns the response for Client wrapped OrganizationInvitation object. */
    'Client.ClientWrappedOrganizationInvitation': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganizationInvitation']
      }
    }
    /** @description Returns the response for Client wrapped OrganizationMembership object. */
    'Client.ClientWrappedOrganizationMembership': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganizationMembership']
      }
    }
    /** @description Returns the response for Client wrapped array of OrganizationDomain objects. */
    'Client.ClientWrappedOrganizationDomains': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganizationDomains']
      }
    }
    /** @description Returns the response for Client wrapped OrganizationDomain object. */
    'Client.ClientWrappedOrganizationDomain': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganizationDomain']
      }
    }
    /** @description Returns a deleted organization domain. */
    'Client.DeletedOrganizationDomain': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedDeletedObject']
      }
    }
    /** @description Returns the response for Client wrapped OrganizationMembershipRequest objects. */
    'Client.ClientWrappedOrganizationMembershipRequests': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganizationMembershipRequests']
      }
    }
    /** @description Returns the response for Client wrapped OrganizationMembershipRequest object. */
    'Client.ClientWrappedOrganizationMembershipRequest': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedOrganizationMembershipRequest']
      }
    }
    /** @description Returns the response for Client wrapped Roles objects. */
    'Client.ClientWrappedRoles': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client.ClientWrappedRoles']
      }
    }
  }
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getAndroidAssetLinks: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['WellKnown.Assetlinks']
    }
  }
  getJWKS: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['WellKnown.JWKS']
    }
  }
  getAppleAppSiteAssociation: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description The Apple App Site Association file */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  getOpenIDConfiguration: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['WellKnown.OpenIDConfiguration']
    }
  }
  requestOAuthAuthorize: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Redirect, no body. */
      302: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
    }
  }
  getOAuthToken: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['OAuth.Token']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
    }
  }
  getOAuthUserInfo: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['OAuth.UserInfo']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
    }
  }
  getAccountPortal: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.AccountPortal']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  getEnvironment: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.Environment']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
    }
  }
  updateEnvironment: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.Environment']
      400: components['responses']['ClerkErrors']
    }
  }
  samlMetadata: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the SAML Connection */
        saml_connection_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  acs: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the SAML Connection */
        saml_connection_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      302: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description OK */
      303: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  getHealth: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': Record<string, never>
        }
      }
    }
  }
  getProxyHealth: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Configuration is valid */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            status?: string
          }
        }
      }
      /** @description Bad request */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Configuration is invalid or service is unavailable */
      503: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            status?: string
            message?: string
          }
        }
      }
    }
  }
  getClient: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.Client']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
    }
  }
  putClient: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.Client']
      /** @description Redirect, no body. */
      307: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  postClient: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.Client']
      /** @description Redirect, no body. */
      307: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteClientSessions: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.DeleteSession']
      /** @description Redirect, no body. */
      307: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      404: components['responses']['ClerkErrors']
    }
  }
  createSignIn: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description Strategy used to sign in.
           *     Can be one of `phone_code`, `email_code`, `ticket`, `web3_[provider]_signature` `reset_password_code`, `reset_password_phone_code`, `email_link`, `oauth_[provider]`, `oauth_token_[provider]`, `saml`, `password`, `passkey`, `google_one_tap` */
          strategy?: string | null
          /** @description The unique identifier of the user. This changes depending on the strategy. */
          identifier?: string | null
          /** @description The password of the user. Only used with password strategy. */
          password?: string | null
          /** @description Ticket to be used for signing in. */
          ticket?: string | null
          redirect_url?: string | null
          action_complete_redirect_url?: string | null
          transfer?: boolean | null
          /** @description The authorization or grant code for an OAuth exchange. Only used with `oauth_token_[provider]` strategies. */
          code?: string | null
          /** @description The ID token for an OpenID Connect flow. Only used with `oauth_token_[provider]` strategies. */
          token?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.SignIn']
      /** @description Redirect, no body. */
      307: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      409: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  getSignIn: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the sign in to be retrieved. */
        sign_in_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.SignIn']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  resetPassword: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the sign in to be retrieved. */
        sign_in_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          password?: string
          sign_out_of_other_sessions?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.SignIn']
      400: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  prepareSignInFactorOne: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the sign in to be retrieved. */
        sign_in_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The strategy to be prepared for first factor authentication.
           *
           *     Can be one of the following `email_code`, `email_link`,
           *     `phone_code`, `web3_metamask_signature`, `web3_coinbase_wallet_signature`,
           *     `reset_password_phone_code`, `reset_password_email_code`, `oauth_[provider]`,
           *     `saml`, `passkey` */
          strategy?: string
          /** @description Used with the `email_code`, `reset_password_email_code` and `email_link` strategies. */
          email_address_id?: string | null
          /** @description Used with the `phone_code` and `reset_password_phone_code` strategies. */
          phone_number_id?: string | null
          /** @description Used with the `web3_metamask_signature` and `web3_coinbase_wallet_signature` strategies. */
          web3_wallet_id?: string | null
          /** @description Used with the `passkey` strategy. */
          passkey_id?: string | null
          /** @description Used with `email_link`, `oauth_[provider]`, and `saml` strategies. */
          redirect_url?: string | null
          /** @description Used with `oauth_[provider]` and `saml` strategies. */
          action_complete_redirect_url?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.SignIn']
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
      429: components['responses']['ClerkErrors']
    }
  }
  attemptSignInFactorOne: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the sign in. */
        sign_in_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The strategy to be used for first factor authentication.
           *
           *     Can be one of the following `email_code`, `email_link`,
           *     `password`, `phone_code`, `web3_metamask_signature`,
           *     `web3_coinbase_wallet_signature`, `reset_password_phone_code`,
           *     `reset_password_email_code`, `passkey`, `google_one_tap` */
          strategy?: string
          /** @description The code the was sent to the email. Used with the `email_code`, `phone_code` and `email_link` strategies. */
          code?: string | null
          /** @description Used with the `password` and `reset_password_phone_code` strategies. */
          password?: string | null
          /** @description Used with the `web3_metamask_signature` and `web3_coinbase_wallet_signature` strategies. */
          signature?: string | null
          /** @description Used with `oauth_[provider]` and `saml` strategies. */
          redirect_url?: string | null
          /** @description Used with `oauth_[provider]` and `saml` strategies. */
          action_complete_redirect_url?: string | null
          /** @deprecated */
          ticket?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.SignIn']
      /** @description Redirect, no body. */
      307: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
      429: components['responses']['ClerkErrors']
    }
  }
  prepareSignInFactorTwo: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the sign in. */
        sign_in_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /**
           * @description The strategy to be prepared for second factor authentication.
           * @enum {string|null}
           */
          strategy?: 'phone_code' | null
          /** @description Used with the `phone_code` strategy. */
          phone_number_id?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.SignIn']
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  attemptSignInFactorTwo: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the sign in. */
        sign_in_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /**
           * @description The strategy to be attempted for first factor authentication.
           * @enum {string}
           */
          strategy?: 'phone_code' | 'totp' | 'backup_code'
          /** @description Used with the `phone_code`, `totp` and `backup_code` strategies. */
          code?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.SignIn']
      /** @description Redirect, no body. */
      307: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  createSignUps: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          transfer?: boolean | null
          password?: string | null
          first_name?: string | null
          last_name?: string | null
          username?: string | null
          email_address?: string | null
          phone_number?: string | null
          email_address_or_phone_number?: string | null
          unsafe_metadata?: string | null
          /** @description Strategy used to sign up.
           *     Can be one of `phone_code`, `email_code`, `ticket`, `web3_[provider]_signature` `reset_password_code`, `reset_password_phone_code`, `email_link`, `oauth_[provider]`, `oauth_token_[provider]`, `saml`, `password`, `passkey`, `google_one_tap` */
          strategy?: string | null
          action_complete_redirect_url?: string | null
          redirect_url?: string | null
          ticket?: string | null
          web3_wallet?: string | null
          captcha_token?: string | null
          captcha_error?: string | null
          /** @description The authorization or grant code for an OAuth exchange. Only used with `oauth_token_[provider]` strategies. */
          code?: string | null
          /** @description The ID token for an OpenID Connect flow. Only used with `oauth_token_[provider]` strategies. */
          token?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.SignUp']
      /** @description Redirect, no body. */
      307: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      409: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  getSignUps: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The sign up unique identifier. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.SignUp']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  updateSignUps: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The sign up unique identifier. */
        id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          password?: string | null
          first_name?: string | null
          last_name?: string | null
          username?: string | null
          email_address?: string | null
          phone_number?: string | null
          email_address_or_phone_number?: string | null
          unsafe_metadata?: string | null
          /** @description Strategy used to sign up.
           *     Can be one of `phone_code`, `email_code`, `ticket`, `web3_[provider]_signature` `reset_password_code`, `reset_password_phone_code`, `email_link`, `oauth_[provider]`, `oauth_token_[provider]`, `saml`, `password`, `passkey`, `google_one_tap` */
          strategy?: string | null
          redirect_url?: string | null
          action_complete_redirect_url?: string | null
          ticket?: string | null
          web3_wallet?: string | null
          /** @description The authorization or grant code for an OAuth exchange. Only used with `oauth_token_[provider]` strategies. */
          code?: string | null
          /** @description The ID token for an OpenID Connect flow. Only used with `oauth_token_[provider]` strategies. */
          token?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.SignUp']
      /** @description Redirect, no body. */
      307: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  prepareSignUpsVerification: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The sign up unique identifier. */
        id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The verification strategy
           *
           *     - email_code
           *     - email_link
           *     - phone_code
           *     - web3_metamask_signature
           *     - web3_coinbase_wallet_signature
           *     - saml
           *     - oauth */
          strategy?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.SignUp']
      400: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
      429: components['responses']['ClerkErrors']
    }
  }
  attemptSignUpsVerification: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The sign up unique identifier. */
        id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /**
           * @description The verification strategy
           * @enum {string}
           */
          strategy?:
            | 'email_code'
            | 'email_link'
            | 'phone_code'
            | 'web3_metamask_signature'
            | 'web3_coinbase_wallet_signature'
            | 'google_one_tap'
          /** @description The verification code */
          code?: string | null
          /** @description The verification web3 signature */
          signature?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.SignUp']
      /** @description Redirect, no body. */
      307: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      409: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
      429: components['responses']['ClerkErrors']
    }
  }
  syncClient: {
    parameters: {
      query?: {
        /** @description The satellite domain which should be synced with its primary. */
        link_domain?: string
        /** @description The URL to redirect to after the syncing process has been completed. */
        redirect_url?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Redirect */
      307: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      403: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  linkClient: {
    parameters: {
      query?: {
        /** @description The token generated from a sync request. */
        __clerk_token?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Redirect */
      307: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  handshakeClient: {
    parameters: {
      query?: {
        /** @description The URL to redirect back to after the handshake */
        redirect_url?: string
        /** @description The organization ID or slug to attempt to set as active for the session. If this param is present but has no value,
         *     the personal workspace will be set as active. If the organization cannot be set as active (because it does not
         *     exist, or the user is not a member), the active organization for the session will not change.
         *      */
        organization_id?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Redirect */
      307: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
      500: components['responses']['ClerkErrors']
    }
  }
  createDevBrowser: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description A DevBrowser was created. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description The hostname is invalid. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  postDevBrowserInitSetCookie: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description A cookie for the dev browser was set. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  getDevBrowserInit: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successfully initialized the dev browser. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      500: components['responses']['ClerkErrors']
    }
  }
  getOauthCallback: {
    parameters: {
      query?: {
        /** @description returned scopes from oauth provider. */
        scope?: string
        /** @description returned exchange code from oauth provider. */
        code?: string
        /** @description returned state from oauth provider. */
        state?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description [AuthV2] HTML-based redirection in dev instances */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description FAKE SUCCESS */
      299: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Redirect */
      301: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Redirect */
      303: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
    }
  }
  postOauthCallback: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description returned exchange code from oauth provider. */
          code?: string
          /** @description returned state from oauth provider. */
          state?: string
        } & {
          [key: string]: unknown
        }
      }
    }
    responses: {
      /** @description Redirect to GET /v1/oauth_callback with same parameters */
      303: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  clearSiteData: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description The Clear-Site-Data header was set with wildcard value. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  removeClientSessionsAndRetainCookie: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.DeleteSession']
      401: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  getSession: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description the user session id. */
        session_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.Session']
      404: components['responses']['ClerkErrors']
    }
  }
  touchSession: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description the user session id. */
        session_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The ID or slug of the organization to activate. */
          active_organization_id?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.Session']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  endSession: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description the user session id. */
        session_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.Session']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  removeSession: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description the user session id. */
        session_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.Session']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  getSessions: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ActiveSessions']
      401: components['responses']['ClerkErrors']
    }
  }
  revokeSession: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path: {
        /** @description The session id to be revoked. */
        session_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.Session']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  createSessionToken: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The user session id. */
        session_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The organization id to associate with the token. The user must be a member of the organization. If present but empty, the personal workspace will be set as active. If absent, the previous active organization for the session will be used. */
          organization_id?: string | null
        }
      }
    }
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            jwt?: string
          }
        }
      }
      401: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  createSessionTokenWithTemplate: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description the user session id. */
        session_id: string
        /** @description the template name */
        template_name: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            jwt?: string
          }
        }
      }
    }
  }
  getUsersSessions: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Server.Sessions']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  getEmailAddresses: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Server.UserEmailAddresses']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  createEmailAddresses: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The email address to be added to the user. */
          email_address?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedEmailAddress']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  verifyEmailAddress: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path: {
        /** @description The email_id. */
        email_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The code that was previously sent to the email address. */
          code?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedEmailAddress']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  sendVerificationEmail: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path: {
        /** @description The email_id. */
        email_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /**
           * @description The strategy to be prepared for email verification.
           * @enum {string}
           */
          strategy?: 'email_code' | 'email_link'
          /** @description Used with the `email_link` strategy. */
          redirect_url?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedEmailAddress']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  getEmailAddress: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path: {
        /** @description The email_id. */
        email_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedEmailAddress']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  DeleteEmailAddress: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path: {
        /** @description The email_id. */
        email_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedDeletedObject']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  getPhoneNumbers: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Server.UserPhoneNumbers']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  postPhoneNumbers: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The phone number to be added to the user. */
          phone_number?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedPhoneNumber']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  verifyPhoneNumber: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path: {
        /** @description The phone_number_id. */
        phone_number_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description Strategy used to verify the phone number. */
          code?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedPhoneNumber']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
      429: components['responses']['ClerkErrors']
    }
  }
  sendVerificationSMS: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path: {
        /** @description The phone_number_id. */
        phone_number_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /**
           * @description Strategy used to verify the phone number.
           * @enum {string}
           */
          strategy?: 'phone_code'
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedPhoneNumber']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      429: components['responses']['ClerkErrors']
    }
  }
  ReadPhoneNumber: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path: {
        /** @description The phone_number_id. */
        phone_number_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedPhoneNumber']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  DeletePhoneNumber: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path: {
        /** @description The phone_number_id. */
        phone_number_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.DeletedPhoneNumber']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  UpdatePhoneNumber: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path: {
        /** @description The phone_number_id. */
        phone_number_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description Whether the phone number is reserved for multi-factor authentication. */
          reserved_for_second_factor?: boolean | null
          /** @description Marks the phone number as the default that will be used in multi-factor authentication. */
          default_second_factor?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedPhoneNumber']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  getWeb3Wallets: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Server.UserWeb3Wallets']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  postWeb3Wallets: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The strategy used to connect the external account. */
          strategy?: string | null
          redirect_url?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedWeb3Wallet']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  readWeb3Wallet: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The web3 wallet ID. */
        web3_wallet_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedWeb3Wallet']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  deleteWeb3Wallet: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The web3 wallet ID. */
        web3_wallet_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.DeletedPhoneNumber']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  prepareWeb3WalletVerification: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The web3 wallet ID */
        web3_wallet_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedWeb3Wallet']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  attemptWeb3WalletVerification: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The web3 wallet ID. */
        web3_wallet_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedWeb3Wallet']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  postPasskey: {
    parameters: {
      query?: {
        /** @description The session_id associated with the requesting user. */
        _clerk_session_id?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedPasskey']
      403: components['responses']['ClerkErrors']
    }
  }
  readPasskey: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The passkey identification ID. */
        passkey_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedPasskey']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  deletePasskey: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The passkey identification ID. */
        passkey_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.DeletedPasskey']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  patchPasskey: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The passkey identification ID. */
        passkey_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          name?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedPasskey']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  attemptPasskeyVerification: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The passkey identification ID. */
        passkey_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedPasskey']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  postOAuthAccounts: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The OAuth strategy that the external account provider supports.
           *     Can be one of `oauth_[provider]` or `oauth_token_[provider]`.
           *     The `oauth_[provider]` strategy can be used for regular OAuth flows with redirects and a `redirect_url` parameter is also required.
           *     The `oauth_token_[provider]` strategy can be used for native flows, along with a `token` or `code` parameter. */
          strategy?: string
          redirect_url?: string | null
          action_complete_redirect_url?: string | null
          /** @description The authorization or grant code that an OAuth provider returns during authentication. Can be used with `oauth_token_[provider]` strategies. */
          code?: string | null
          /** @description The ID token that an OpenID Connect provider returns during authentication. Can be used with `oauth_token_[provider]` strategies. */
          token?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedExternalAccount']
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
      500: components['responses']['ClerkErrors']
    }
  }
  reauthorizeExternalAccount: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description External account ID */
        external_account_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          additional_scope?: string[]
          redirect_url?: string
          action_complete_redirect_url?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedExternalAccount']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  deleteExternalAccount: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description External account ID */
        external_account_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.DeletedExternalAccount']
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  revokeExternalAccountTokens: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description External account ID */
        external_account_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedUser']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  postTOTP: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedTOTP']
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      500: components['responses']['ClerkErrors']
    }
  }
  deleteTOTP: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.DeletedTOTP']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      500: components['responses']['ClerkErrors']
    }
  }
  verifyTOTP: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          code?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedTOTP']
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
      500: components['responses']['ClerkErrors']
    }
  }
  createBackupCodes: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedBackupCodes']
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      500: components['responses']['ClerkErrors']
    }
  }
  getUser: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedUser']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  deleteUser: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedDeletedObject']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      500: components['responses']['ClerkErrors']
    }
  }
  patchUser: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          username?: string | null
          first_name?: string | null
          last_name?: string | null
          primary_email_address_id?: string | null
          primary_phone_number_id?: string | null
          primary_web3_wallet_id?: string | null
          /** @description A stringified JSON containing the unsafe medata of the current user. */
          unsafe_metadata?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedUser']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  createServiceToken: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Token']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  updateProfileImage: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'multipart/form-data': {
          /** Format: binary */
          file?: string
        }
        'application/octet-stream': unknown
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedImage']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  deleteProfileImage: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedDeletedObject']
      401: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  changePassword: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          current_password?: string | null
          new_password?: string
          sign_out_of_other_sessions?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedUser']
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  removePassword: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/x-www-form-urlencoded': {
          current_password?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedUser']
      400: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  getOrganizationMemberships: {
    parameters: {
      query?: {
        limit?: number
        offset?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationMemberships']
      401: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  deleteOrganizationMemberships: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the organization for which the membership will be deleted */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedDeletedObject']
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  getUsersOrganizationInvitations: {
    parameters: {
      query?: {
        limit?: number
        offset?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationInvitationsUserContext']
      401: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  acceptOrganizationInvitation: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the organization invitation to accept */
        invitation_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationInvitationUserContext']
      401: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  getOrganizationSuggestions: {
    parameters: {
      query?: {
        limit?: number
        offset?: number
        status?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationSuggestions']
      401: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  acceptOrganizationSuggestion: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the organization suggestion to accept */
        suggestion_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationSuggestion']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  createOrganization: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The organization name.
           *     May not contain URLs or HTML. */
          name?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedOrganization']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  getOrganization: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganization']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  deleteOrganization: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the organization to delete */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedDeletedObject']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  updateOrganization: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the organization to update */
        organization_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The organization name.
           *     May not contain URLs or HTML. */
          name?: string | null
          /** @description The organization slug */
          slug?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedOrganization']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  updateOrganizationLogo: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the organization. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'multipart/form-data': {
          /** Format: binary */
          file?: string
        }
        'application/octet-stream': unknown
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedOrganization']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      413: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  deleteOrganizationLogo: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the organization. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedDeletedObject']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  getOrganizationInvitations: {
    parameters: {
      query?: {
        limit?: number
        offset?: number
        status?: 'pending' | 'accepted' | 'revoked' | 'invalid' | 'completed'
      }
      header?: never
      path: {
        /** @description The id of the organization for which the invitation will be retrieved. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationInvitations']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  createOrganizationInvitations: {
    parameters: {
      query?: {
        user_id?: string | null
        role?: string | null
      }
      header?: never
      path: {
        /** @description The id of the organization for which the invitation will be created. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The email address the invitation will be sent to. */
          email_address?: string
          /** @description The role that will be assigned to the user after joining.
           *     This can be one of the predefined roles (`admin`, `basic_member`) or a custom role. */
          role?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationInvitation']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  bulkCreateOrganizationInvitations: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the organization for which the invitations will be created. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description An array of email addresses the invitations will be sent to. */
          email_addresses?: string[]
          /** @description The role that will be assigned to the user after joining.
           *     This can be one of the predefined roles (`admin`, `basic_member`) or a custom role. */
          role?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationInvitations']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  getAllPendingOrganizationInvitations: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the organization for which the invitations will be retrieved. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationInvitations']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  revokePendingOrganizationInvitation: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The id of the organization for which the invitations will be retrieved. */
        organization_id: string
        /** @description The id of the invitation to revoke. */
        invitation_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationInvitation']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  ListOrganizationMemberships: {
    parameters: {
      query?: {
        limit?: number
        offset?: number
      }
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationMemberships']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  CreateOrganizationMembership: {
    parameters: {
      query?: {
        /** @description The user id to be added as a member. */
        user_id?: string | null
        role?: string | null
      }
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The email address the invitation will be sent to. */
          email_address?: string | null
          /** @description The role that will be assigned to the user after joining.
           *     This can be one of the predefined roles (`admin`, `basic_member`) or a custom role defined. */
          role?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationMembership']
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  removeOrganizationMember: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
        /** @description The member ID. */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationMembership']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  UpdateOrganizationMembership: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
        /** @description The member ID. */
        user_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The role that new role that will be assigned to the member.
           *     This can be one of the predefined roles (`admin`, `basic_member`) or a custom role defined. */
          role?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationMembership']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  ListOrganizationDomains: {
    parameters: {
      query?: {
        limit?: number
        offset?: number
      }
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationDomains']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  CreateOrganizationDomain: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The name of the new domain */
          name?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationDomain']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  GetOrganizationDomain: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
        /** @description The domains ID. */
        domain_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          name?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationDomain']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  deleteOrganizationDomain: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
        /** @description The domain ID. */
        domain_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.DeletedOrganizationDomain']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  UpdateOrganizationDomainEnrollmentMode: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
        /** @description The domain ID. */
        domain_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          enrollment_mode?: string
          delete_pending?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationDomain']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  prepareOrganizationDomainVerification: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
        /** @description The domain ID. */
        domain_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          affiliation_email_address?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationDomain']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  attemptOrganizationDomainVerification: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
        /** @description The domain ID. */
        domain_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/x-www-form-urlencoded': {
          /** @description The code that was sent to the email address. */
          code?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationDomain']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  listOrganizationMembershipRequests: {
    parameters: {
      query?: {
        limit?: number
        offset?: number
        status?: string
      }
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationMembershipRequests']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  acceptOrganizationMembershipRequest: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
        /** @description The request ID. */
        request_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationMembershipRequest']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  rejectOrganizationMembershipRequest: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
        /** @description The request ID. */
        request_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedOrganizationMembershipRequest']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  ListOrganizationRoles: {
    parameters: {
      query?: {
        limit?: number
        offset?: number
      }
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.ClientWrappedRoles']
      401: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
    }
  }
  acceptTicket: {
    parameters: {
      query: {
        /** @description The JWT with verification information */
        ticket: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response with a plain text or HTML body. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Redirect */
      302: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Redirect */
      303: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  verify: {
    parameters: {
      query: {
        /** @description The JWT with verification information */
        token: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Redirect */
      303: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
    }
  }
}

export interface oasTypes {
  components: components
  external: external
  operations: operations
  paths: paths
  webhooks: webhooks
}

export default oasTypes
