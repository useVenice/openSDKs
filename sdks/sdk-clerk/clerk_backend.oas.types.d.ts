export interface paths {
  '/public/interstitial': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Returns the markup for the interstitial page
     * @description The Clerk interstitial endpoint serves an html page that loads clerk.js in order to check the user's authentication state.
     *     It is used by Clerk SDKs when the user's authentication state cannot be immediately determined.
     */
    get: operations['GetPublicInterstitial']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/jwks': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve the JSON Web Key Set of the instance
     * @description Retrieve the JSON Web Key Set of the instance
     */
    get: operations['GetJWKS']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/clients': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List all clients
     * @deprecated
     * @description Returns a list of all clients. The clients are returned sorted by creation date,
     *     with the newest clients appearing first.
     *     Warning: the endpoint is being deprecated and will be removed in future versions.
     */
    get: operations['GetClientList']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/clients/verify': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Verify a client
     * @description Verifies the client in the provided token
     */
    post: operations['VerifyClient']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/clients/{client_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get a client
     * @description Returns the details of a client.
     */
    get: operations['GetClient']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/email_addresses': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create an email address
     * @description Create a new email address
     */
    post: operations['CreateEmailAddress']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/email_addresses/{email_address_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve an email address
     * @description Returns the details of an email address.
     */
    get: operations['GetEmailAddress']
    put?: never
    post?: never
    /**
     * Delete an email address
     * @description Delete the email address with the given ID
     */
    delete: operations['DeleteEmailAddress']
    options?: never
    head?: never
    /**
     * Update an email address
     * @description Updates an email address.
     */
    patch: operations['UpdateEmailAddress']
    trace?: never
  }
  '/phone_numbers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create a phone number
     * @description Create a new phone number
     */
    post: operations['CreatePhoneNumber']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/phone_numbers/{phone_number_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve a phone number
     * @description Returns the details of a phone number
     */
    get: operations['GetPhoneNumber']
    put?: never
    post?: never
    /**
     * Delete a phone number
     * @description Delete the phone number with the given ID
     */
    delete: operations['DeletePhoneNumber']
    options?: never
    head?: never
    /**
     * Update a phone number
     * @description Updates a phone number
     */
    patch: operations['UpdatePhoneNumber']
    trace?: never
  }
  '/sessions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List all sessions
     * @description Returns a list of all sessions.
     *     The sessions are returned sorted by creation date, with the newest sessions appearing first.
     *     **Deprecation Notice (2024-01-01):** All parameters were initially considered optional, however
     *     moving forward at least one of `client_id` or `user_id` parameters should be provided.
     */
    get: operations['GetSessionList']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sessions/{session_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve a session
     * @description Retrieve the details of a session
     */
    get: operations['GetSession']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sessions/{session_id}/revoke': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Revoke a session
     * @description Sets the status of a session as "revoked", which is an unauthenticated state.
     *     In multi-session mode, a revoked session will still be returned along with its client object, however the user will need to sign in again.
     */
    post: operations['RevokeSession']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sessions/{session_id}/verify': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Verify a session
     * @deprecated
     * @description Returns the session if it is authenticated, otherwise returns an error.
     *     WARNING: This endpoint is deprecated and will be removed in future versions. We strongly recommend switching to networkless verification using short-lived session tokens,
     *              which is implemented transparently in all recent SDK versions (e.g. [NodeJS SDK](https://clerk.com/docs/backend-requests/handling/nodejs#clerk-express-require-auth)).
     *              For more details on how networkless verification works, refer to our [Session Tokens documentation](https://clerk.com/docs/backend-requests/resources/session-tokens).
     */
    post: operations['VerifySession']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sessions/{session_id}/tokens/{template_name}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create a session token from a jwt template
     * @description Creates a JSON Web Token(JWT) based on a session and a JWT Template name defined for your instance
     */
    post: operations['CreateSessionTokenFromTemplate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/templates/{template_type}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List all templates
     * @deprecated
     * @description Returns a list of all templates.
     *     The templates are returned sorted by position.
     */
    get: operations['GetTemplateList']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/templates/{template_type}/{slug}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve a template
     * @deprecated
     * @description Returns the details of a template
     */
    get: operations['GetTemplate']
    /**
     * Update a template for a given type and slug
     * @deprecated
     * @description Updates the existing template of the given type and slug
     */
    put: operations['UpsertTemplate']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/templates/{template_type}/{slug}/revert': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Revert a template
     * @deprecated
     * @description Reverts an updated template to its default state
     */
    post: operations['RevertTemplate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/templates/{template_type}/{slug}/preview': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Preview changes to a template
     * @deprecated
     * @description Returns a preview of a template for a given template_type, slug and body
     */
    post: operations['PreviewTemplate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/templates/{template_type}/{slug}/toggle_delivery': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Toggle the delivery by Clerk for a template of a given type and slug
     * @deprecated
     * @description Toggles the delivery by Clerk for a template of a given type and slug.
     *     If disabled, Clerk will not deliver the resulting email or SMS.
     *     The app developer will need to listen to the `email.created` or `sms.created` webhooks in order to handle delivery themselves.
     */
    post: operations['ToggleTemplateDelivery']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List all users
     * @description Returns a list of all users.
     *     The users are returned sorted by creation date, with the newest users appearing first.
     */
    get: operations['GetUserList']
    put?: never
    /**
     * Create a new user
     * @description Creates a new user. Your user management settings determine how you should setup your user model.
     *
     *     Any email address and phone number created using this method will be marked as verified.
     *
     *     Note: If you are performing a migration, check out our guide on [zero downtime migrations](https://clerk.com/docs/deployments/migrate-overview).
     *
     *     A rate limit rule of 20 requests per 10 seconds is applied to this endpoint.
     */
    post: operations['CreateUser']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/count': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Count users
     * @description Returns a total count of all users that match the given filtering criteria.
     */
    get: operations['GetUsersCount']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve a user
     * @description Retrieve the details of a user
     */
    get: operations['GetUser']
    put?: never
    post?: never
    /**
     * Delete a user
     * @description Delete the specified user
     */
    delete: operations['DeleteUser']
    options?: never
    head?: never
    /**
     * Update a user
     * @description Update a user's attributes.
     *
     *     You can set the user's primary contact identifiers (email address and phone numbers) by updating the `primary_email_address_id` and `primary_phone_number_id` attributes respectively.
     *     Both IDs should correspond to verified identifications that belong to the user.
     *
     *     You can remove a user's username by setting the username attribute to null or the blank string "".
     *     This is a destructive action; the identification will be deleted forever.
     *     Usernames can be removed only if they are optional in your instance settings and there's at least one other identifier which can be used for authentication.
     *
     *     This endpoint allows changing a user's password. When passing the `password` parameter directly you have two further options.
     *     You can ignore the password policy checks for your instance by setting the `skip_password_checks` parameter to `true`.
     *     You can also choose to sign the user out of all their active sessions on any device once the password is updated. Just set `sign_out_of_other_sessions` to `true`.
     */
    patch: operations['UpdateUser']
    trace?: never
  }
  '/users/{user_id}/ban': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Ban a user
     * @description Marks the given user as banned, which means that all their sessions are revoked and they are not allowed to sign in again.
     */
    post: operations['BanUser']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/unban': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Unban a user
     * @description Removes the ban mark from the given user.
     */
    post: operations['UnbanUser']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/lock': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Lock a user
     * @description Marks the given user as locked, which means they are not allowed to sign in again until the lock expires.
     *     Lock duration can be configured in the instance's restrictions settings.
     */
    post: operations['LockUser']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/unlock': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Unlock a user
     * @description Removes the lock from the given user.
     */
    post: operations['UnlockUser']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/profile_image': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Set user profile image
     * @description Update a user's profile image
     */
    post: operations['SetUserProfileImage']
    /**
     * Delete user profile image
     * @description Delete a user's profile image
     */
    delete: operations['DeleteUserProfileImage']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/metadata': {
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
     * Merge and update a user's metadata
     * @description Update a user's metadata attributes by merging existing values with the provided parameters.
     *
     *     This endpoint behaves differently than the *Update a user* endpoint.
     *     Metadata values will not be replaced entirely.
     *     Instead, a deep merge will be performed.
     *     Deep means that any nested JSON objects will be merged as well.
     *
     *     You can remove metadata keys at any level by setting their value to `null`.
     */
    patch: operations['UpdateUserMetadata']
    trace?: never
  }
  '/users/{user_id}/oauth_access_tokens/{provider}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve the OAuth access token of a user
     * @description Fetch the corresponding OAuth access token for a user that has previously authenticated with a particular OAuth provider.
     *     For OAuth 2.0, if the access token has expired and we have a corresponding refresh token, the access token will be refreshed transparently the new one will be returned.
     */
    get: operations['GetOAuthAccessToken']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/organization_memberships': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve all memberships for a user
     * @description Retrieve a paginated list of the user's organization memberships
     */
    get: operations['UsersGetOrganizationMemberships']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/organization_invitations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve all invitations for a user
     * @description Retrieve a paginated list of the user's organization invitations
     */
    get: operations['UsersGetOrganizationInvitations']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/verify_password': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Verify the password of a user
     * @description Check that the user's password matches the supplied input.
     *     Useful for custom auth flows and re-verification.
     */
    post: operations['VerifyPassword']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/verify_totp': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Verify a TOTP or backup code for a user
     * @description Verify that the provided TOTP or backup code is valid for the user.
     *     Verifying a backup code will result it in being consumed (i.e. it will
     *     become invalid).
     *     Useful for custom auth flows and re-verification.
     */
    post: operations['VerifyTOTP']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/mfa': {
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
     * Disable a user's MFA methods
     * @description Disable all of a user's MFA methods (e.g. OTP sent via SMS, TOTP on their authenticator app) at once.
     */
    delete: operations['DisableMFA']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/backup_code': {
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
     * Disable all user's Backup codes
     * @description Disable all of a user's backup codes.
     */
    delete: operations['DeleteBackupCode']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/passkeys/{passkey_identification_id}': {
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
     * Delete a user passkey
     * @description Delete the passkey identification for a given user and notify them through email.
     */
    delete: operations['UserPasskeyDelete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/web3_wallets/{web3_wallet_identification_id}': {
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
     * Delete a user web3 wallet
     * @description Delete the web3 wallet identification for a given user.
     */
    delete: operations['UserWeb3WalletDelete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/totp': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create a TOTP for a user
     * @description Creates a TOTP (Time-based One-Time Password) for a given user, returning both the TOTP secret and the URI.
     *
     */
    post: operations['CreateUserTOTP']
    /**
     * Delete all the user's TOTPs
     * @description Deletes all of the user's TOTPs.
     */
    delete: operations['DeleteTOTP']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{user_id}/external_accounts/{external_account_id}': {
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
    delete: operations['DeleteExternalAccount']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/invitations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List all invitations
     * @description Returns all non-revoked invitations for your application, sorted by creation date
     */
    get: operations['ListInvitations']
    put?: never
    /**
     * Create an invitation
     * @description Creates a new invitation for the given email address and sends the invitation email.
     *     Keep in mind that you cannot create an invitation if there is already one for the given email address.
     *     Also, trying to create an invitation for an email address that already exists in your application will result to an error.
     */
    post: operations['CreateInvitation']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/invitations/{invitation_id}/revoke': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Revokes an invitation
     * @description Revokes the given invitation.
     *     Revoking an invitation will prevent the user from using the invitation link that was sent to them.
     *     However, it doesn't prevent the user from signing up if they follow the sign up flow.
     *     Only active (i.e. non-revoked) invitations can be revoked.
     */
    post: operations['RevokeInvitation']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization_invitations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get a list of organization invitations for the current instance
     * @description This request returns the list of organization invitations for the instance.
     *     Results can be paginated using the optional `limit` and `offset` query parameters.
     *     You can filter them by providing the 'status' query parameter, that accepts multiple values.
     *     You can change the order by providing the 'order' query parameter, that accepts multiple values.
     *     You can filter by the invited user email address providing the `query` query parameter.
     *     The organization invitations are ordered by descending creation date by default.
     */
    get: operations['ListInstanceOrganizationInvitations']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/allowlist_identifiers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List all identifiers on the allow-list
     * @description Get a list of all identifiers allowed to sign up to an instance
     */
    get: operations['ListAllowlistIdentifiers']
    put?: never
    /**
     * Add identifier to the allow-list
     * @description Create an identifier allowed to sign up to an instance
     */
    post: operations['CreateAllowlistIdentifier']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/allowlist_identifiers/{identifier_id}': {
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
     * Delete identifier from allow-list
     * @description Delete an identifier from the instance allow-list
     */
    delete: operations['DeleteAllowlistIdentifier']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/blocklist_identifiers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List all identifiers on the block-list
     * @description Get a list of all identifiers which are not allowed to access an instance
     */
    get: operations['ListBlocklistIdentifiers']
    put?: never
    /**
     * Add identifier to the block-list
     * @description Create an identifier that is blocked from accessing an instance
     */
    post: operations['CreateBlocklistIdentifier']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/blocklist_identifiers/{identifier_id}': {
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
     * Delete identifier from block-list
     * @description Delete an identifier from the instance block-list
     */
    delete: operations['DeleteBlocklistIdentifier']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/beta_features/instance_settings': {
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
     * Update instance settings
     * @description Updates the settings of an instance
     */
    patch: operations['UpdateInstanceAuthConfig']
    trace?: never
  }
  '/beta_features/domain': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Update production instance domain
     * @deprecated
     * @description Change the domain of a production instance.
     *
     *     Changing the domain requires updating the [DNS records](https://clerk.com/docs/deployments/overview#dns-records) accordingly, deploying new [SSL certificates](https://clerk.com/docs/deployments/overview#deploy), updating your Social Connection's redirect URLs and setting the new keys in your code.
     *
     *     WARNING: Changing your domain will invalidate all current user sessions (i.e. users will be logged out). Also, while your application is being deployed, a small downtime is expected to occur.
     */
    put: operations['UpdateProductionInstanceDomain']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/actor_tokens': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create actor token
     * @description Create an actor token that can be used to impersonate the given user.
     *     The `actor` parameter needs to include at least a "sub" key whose value is the ID of the actor (impersonating) user.
     */
    post: operations['CreateActorToken']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/actor_tokens/{actor_token_id}/revoke': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Revoke actor token
     * @description Revokes a pending actor token.
     */
    post: operations['RevokeActorToken']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/domains': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List all instance domains
     * @description Use this endpoint to get a list of all domains for an instance.
     *     The response will contain the primary domain for the instance and any satellite domains. Each domain in the response contains information about the URLs where Clerk operates and the required CNAME targets.
     */
    get: operations['ListDomains']
    put?: never
    /**
     * Add a domain
     * @description Add a new domain for your instance.
     *     Useful in the case of multi-domain instances, allows adding satellite domains to an instance.
     *     The new domain must have a `name`. The domain name can contain the port for development instances, like `localhost:3000`.
     *     At the moment, instances can have only one primary domain, so the `is_satellite` parameter must be set to `true`.
     *     If you're planning to configure the new satellite domain to run behind a proxy, pass the `proxy_url` parameter accordingly.
     */
    post: operations['AddDomain']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/domains/{domain_id}': {
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
     * Delete a satellite domain
     * @description Deletes a satellite domain for the instance.
     *     It is currently not possible to delete the instance's primary domain.
     */
    delete: operations['DeleteDomain']
    options?: never
    head?: never
    /**
     * Update a domain
     * @description The `proxy_url` can be updated only for production instances.
     *     Update one of the instance's domains. Both primary and satellite domains can be updated.
     *     If you choose to use Clerk via proxy, use this endpoint to specify the `proxy_url`.
     *     Whenever you decide you'd rather switch to DNS setup for Clerk, simply set `proxy_url`
     *     to `null` for the domain. When you update a production instance's primary domain name,
     *     you have to make sure that you've completed all the necessary setup steps for DNS and
     *     emails to work. Expect downtime otherwise. Updating a primary domain's name will also
     *     update the instance's home origin, affecting the default application paths.
     */
    patch: operations['UpdateDomain']
    trace?: never
  }
  '/instance': {
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
     * Update instance settings
     * @description Updates the settings of an instance
     */
    patch: operations['UpdateInstance']
    trace?: never
  }
  '/instance/restrictions': {
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
     * Update instance restrictions
     * @description Updates the restriction settings of an instance
     */
    patch: operations['UpdateInstanceRestrictions']
    trace?: never
  }
  '/instance/change_domain': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Update production instance domain
     * @description Change the domain of a production instance.
     *
     *     Changing the domain requires updating the [DNS records](https://clerk.com/docs/deployments/overview#dns-records) accordingly, deploying new [SSL certificates](https://clerk.com/docs/deployments/overview#deploy), updating your Social Connection's redirect URLs and setting the new keys in your code.
     *
     *     WARNING: Changing your domain will invalidate all current user sessions (i.e. users will be logged out). Also, while your application is being deployed, a small downtime is expected to occur.
     */
    post: operations['ChangeProductionInstanceDomain']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/instance/organization_settings': {
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
     * Update instance organization settings
     * @description Updates the organization settings of the instance
     */
    patch: operations['UpdateInstanceOrganizationSettings']
    trace?: never
  }
  '/webhooks/svix': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create a Svix app
     * @description Create a Svix app and associate it with the current instance
     */
    post: operations['CreateSvixApp']
    /**
     * Delete a Svix app
     * @description Delete a Svix app and disassociate it from the current instance
     */
    delete: operations['DeleteSvixApp']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/webhooks/svix_url': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create a Svix Dashboard URL
     * @description Generate a new url for accessing the Svix's management dashboard for that particular instance
     */
    post: operations['GenerateSvixAuthURL']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/jwt_templates': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List all templates */
    get: operations['ListJWTTemplates']
    put?: never
    /**
     * Create a JWT template
     * @description Create a new JWT template
     */
    post: operations['CreateJWTTemplate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/jwt_templates/{template_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve a template
     * @description Retrieve the details of a given JWT template
     */
    get: operations['GetJWTTemplate']
    put?: never
    post?: never
    /** Delete a Template */
    delete: operations['DeleteJWTTemplate']
    options?: never
    head?: never
    /**
     * Update a JWT template
     * @description Updates an existing JWT template
     */
    patch: operations['UpdateJWTTemplate']
    trace?: never
  }
  '/organizations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get a list of organizations for an instance
     * @description This request returns the list of organizations for an instance.
     *     Results can be paginated using the optional `limit` and `offset` query parameters.
     *     The organizations are ordered by descending creation date.
     *     Most recent organizations will be returned first.
     */
    get: operations['ListOrganizations']
    put?: never
    /**
     * Create an organization
     * @description Creates a new organization with the given name for an instance.
     *     In order to successfully create an organization you need to provide the ID of the User who will become the organization administrator.
     *     You can specify an optional slug for the new organization.
     *     If provided, the organization slug can contain only lowercase alphanumeric characters (letters and digits) and the dash "-".
     *     Organization slugs must be unique for the instance.
     *     You can provide additional metadata for the organization and set any custom attribute you want.
     *     Organizations support private and public metadata.
     *     Private metadata can only be accessed from the Backend API.
     *     Public metadata can be accessed from the Backend API, and are read-only from the Frontend API.
     *     The `created_by` user will see this as their [active organization] (https://clerk.com/docs/organizations/overview#active-organization)
     *     the next time they create a session, presuming they don't explicitly set a different organization as active before then.
     */
    post: operations['CreateOrganization']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organizations/{organization_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve an organization by ID or slug
     * @description Fetches the organization whose ID or slug matches the provided `id_or_slug` URL query parameter.
     */
    get: operations['GetOrganization']
    put?: never
    post?: never
    /**
     * Delete an organization
     * @description Deletes the given organization.
     *     Please note that deleting an organization will also delete all memberships and invitations.
     *     This is not reversible.
     */
    delete: operations['DeleteOrganization']
    options?: never
    head?: never
    /**
     * Update an organization
     * @description Updates an existing organization
     */
    patch: operations['UpdateOrganization']
    trace?: never
  }
  '/organizations/{organization_id}/metadata': {
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
     * Merge and update metadata for an organization
     * @description Update organization metadata attributes by merging existing values with the provided parameters.
     *     Metadata values will be updated via a deep merge.
     *     Deep meaning that any nested JSON objects will be merged as well.
     *     You can remove metadata keys at any level by setting their value to `null`.
     */
    patch: operations['MergeOrganizationMetadata']
    trace?: never
  }
  '/organizations/{organization_id}/logo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Upload a logo for the organization
     * @description Set or replace an organization's logo, by uploading an image file.
     *     This endpoint uses the `multipart/form-data` request content type and accepts a file of image type.
     *     The file size cannot exceed 10MB.
     *     Only the following file content types are supported: `image/jpeg`, `image/png`, `image/gif`, `image/webp`, `image/x-icon`, `image/vnd.microsoft.icon`.
     */
    put: operations['UploadOrganizationLogo']
    post?: never
    /** @description Delete the organization's logo. */
    delete: operations['DeleteOrganizationLogo']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organizations/{organization_id}/invitations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get a list of organization invitations
     * @description This request returns the list of organization invitations.
     *     Results can be paginated using the optional `limit` and `offset` query parameters.
     *     You can filter them by providing the 'status' query parameter, that accepts multiple values.
     *     The organization invitations are ordered by descending creation date.
     *     Most recent invitations will be returned first.
     *     Any invitations created as a result of an Organization Domain are not included in the results.
     */
    get: operations['ListOrganizationInvitations']
    put?: never
    /**
     * Create and send an organization invitation
     * @description Creates a new organization invitation and sends an email to the provided `email_address` with a link to accept the invitation and join the organization.
     *     You can specify the `role` for the invited organization member.
     *
     *     New organization invitations get a "pending" status until they are revoked by an organization administrator or accepted by the invitee.
     *
     *     The request body supports passing an optional `redirect_url` parameter.
     *     When the invited user clicks the link to accept the invitation, they will be redirected to the URL provided.
     *     Use this parameter to implement a custom invitation acceptance flow.
     *
     *     You can specify the ID of the user that will send the invitation with the `inviter_user_id` parameter.
     *     That user must be a member with administrator privileges in the organization.
     *     Only "admin" members can create organization invitations.
     *
     *     You can optionally provide public and private metadata for the organization invitation.
     *     The public metadata are visible by both the Frontend and the Backend whereas the private ones only by the Backend.
     *     When the organization invitation is accepted, the metadata will be transferred to the newly created organization membership.
     */
    post: operations['CreateOrganizationInvitation']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organizations/{organization_id}/invitations/bulk': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Bulk create and send organization invitations
     * @description Creates new organization invitations in bulk and sends out emails to the provided email addresses with a link to accept the invitation and join the organization.
     *     You can specify a different `role` for each invited organization member.
     *     New organization invitations get a "pending" status until they are revoked by an organization administrator or accepted by the invitee.
     *     The request body supports passing an optional `redirect_url` parameter for each invitation.
     *     When the invited user clicks the link to accept the invitation, they will be redirected to the provided URL.
     *     Use this parameter to implement a custom invitation acceptance flow.
     *     You can specify the ID of the user that will send the invitation with the `inviter_user_id` parameter. Each invitation
     *     can have a different inviter user.
     *     Inviter users must be members with administrator privileges in the organization.
     *     Only "admin" members can create organization invitations.
     *     You can optionally provide public and private metadata for each organization invitation. The public metadata are visible
     *     by both the Frontend and the Backend, whereas the private metadata are only visible by the Backend.
     *     When the organization invitation is accepted, the metadata will be transferred to the newly created organization membership.
     */
    post: operations['CreateOrganizationInvitationBulk']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organizations/{organization_id}/invitations/pending': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get a list of pending organization invitations
     * @deprecated
     * @description This request returns the list of organization invitations with "pending" status.
     *     These are the organization invitations that can still be used to join the organization, but have not been accepted by the invited user yet.
     *     Results can be paginated using the optional `limit` and `offset` query parameters.
     *     The organization invitations are ordered by descending creation date.
     *     Most recent invitations will be returned first.
     *     Any invitations created as a result of an Organization Domain are not included in the results.
     */
    get: operations['ListPendingOrganizationInvitations']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organizations/{organization_id}/invitations/{invitation_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve an organization invitation by ID
     * @description Use this request to get an existing organization invitation by ID.
     */
    get: operations['GetOrganizationInvitation']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organizations/{organization_id}/invitations/{invitation_id}/revoke': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Revoke a pending organization invitation
     * @description Use this request to revoke a previously issued organization invitation.
     *     Revoking an organization invitation makes it invalid; the invited user will no longer be able to join the organization with the revoked invitation.
     *     Only organization invitations with "pending" status can be revoked.
     *     The request accepts the `requesting_user_id` parameter to specify the user which revokes the invitation.
     *     Only users with "admin" role can revoke invitations.
     */
    post: operations['RevokeOrganizationInvitation']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organizations/{organization_id}/memberships': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get a list of all members of an organization
     * @description Retrieves all user memberships for the given organization
     */
    get: operations['ListOrganizationMemberships']
    put?: never
    /**
     * Create a new organization membership
     * @description Adds a user as a member to the given organization.
     *     Only users in the same instance as the organization can be added as members.
     *
     *     This organization will be the user's [active organization] (https://clerk.com/docs/organizations/overview#active-organization)
     *     the next time they create a session, presuming they don't explicitly set a
     *     different organization as active before then.
     */
    post: operations['CreateOrganizationMembership']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organizations/{organization_id}/memberships/{user_id}': {
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
     * Remove a member from an organization
     * @description Removes the given membership from the organization
     */
    delete: operations['DeleteOrganizationMembership']
    options?: never
    head?: never
    /**
     * Update an organization membership
     * @description Updates the properties of an existing organization membership
     */
    patch: operations['UpdateOrganizationMembership']
    trace?: never
  }
  '/organizations/{organization_id}/memberships/{user_id}/metadata': {
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
     * Merge and update organization membership metadata
     * @description Update an organization membership's metadata attributes by merging existing values with the provided parameters.
     *     Metadata values will be updated via a deep merge. Deep means that any nested JSON objects will be merged as well.
     *     You can remove metadata keys at any level by setting their value to `null`.
     */
    patch: operations['UpdateOrganizationMembershipMetadata']
    trace?: never
  }
  '/organizations/{organization_id}/domains': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get a list of all domains of an organization.
     * @description Get a list of all domains of an organization.
     */
    get: operations['ListOrganizationDomains']
    put?: never
    /**
     * Create a new organization domain.
     * @description Creates a new organization domain. By default the domain is verified, but can be optionally set to unverified.
     */
    post: operations['CreateOrganizationDomain']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organizations/{organization_id}/domains/{domain_id}': {
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
     * Remove a domain from an organization.
     * @description Removes the given domain from the organization.
     */
    delete: operations['DeleteOrganizationDomain']
    options?: never
    head?: never
    /**
     * Update an organization domain.
     * @description Updates the properties of an existing organization domain.
     */
    patch: operations['UpdateOrganizationDomain']
    trace?: never
  }
  '/proxy_checks': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Verify the proxy configuration for your domain
     * @description This endpoint can be used to validate that a proxy-enabled domain is operational.
     *     It tries to verify that the proxy URL provided in the parameters maps to a functional proxy that can reach the Clerk Frontend API.
     *
     *     You can use this endpoint before you set a proxy URL for a domain. This way you can ensure that switching to proxy-based
     *     configuration will not lead to downtime for your instance.
     *
     *     The `proxy_url` parameter allows for testing proxy configurations for domains that don't have a proxy URL yet, or operate on
     *     a different proxy URL than the one provided. It can also be used to re-validate a domain that is already configured to work with a proxy.
     */
    post: operations['VerifyDomainProxy']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/redirect_urls': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List all redirect URLs
     * @description Lists all whitelisted redirect_urls for the instance
     */
    get: operations['ListRedirectURLs']
    put?: never
    /**
     * Create a redirect URL
     * @description Create a redirect URL
     */
    post: operations['CreateRedirectURL']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/redirect_urls/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve a redirect URL
     * @description Retrieve the details of the redirect URL with the given ID
     */
    get: operations['GetRedirectURL']
    put?: never
    post?: never
    /**
     * Delete a redirect URL
     * @description Remove the selected redirect URL from the whitelist of the instance
     */
    delete: operations['DeleteRedirectURL']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sign_in_tokens': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Create sign-in token
     * @description Creates a new sign-in token and associates it with the given user.
     *     By default, sign-in tokens expire in 30 days.
     *     You can optionally supply a different duration in seconds using the `expires_in_seconds` property.
     */
    post: operations['CreateSignInToken']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sign_in_tokens/{sign_in_token_id}/revoke': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Revoke the given sign-in token
     * @description Revokes a pending sign-in token
     */
    post: operations['RevokeSignInToken']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sign_ups/{id}': {
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
     * Update a sign-up
     * @description Update the sign-up with the given ID
     */
    patch: operations['UpdateSignUp']
    trace?: never
  }
  '/oauth_applications': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get a list of OAuth applications for an instance
     * @description This request returns the list of OAuth applications for an instance.
     *     Results can be paginated using the optional `limit` and `offset` query parameters.
     *     The OAuth applications are ordered by descending creation date.
     *     Most recent OAuth applications will be returned first.
     */
    get: operations['ListOAuthApplications']
    put?: never
    /**
     * Create an OAuth application
     * @description Creates a new OAuth application with the given name and callback URL for an instance.
     *     The callback URL must be a valid url.
     *     All URL schemes are allowed such as `http://`, `https://`, `myapp://`, etc...
     */
    post: operations['CreateOAuthApplication']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/oauth_applications/{oauth_application_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve an OAuth application by ID
     * @description Fetches the OAuth application whose ID matches the provided `id` in the path.
     */
    get: operations['GetOAuthApplication']
    put?: never
    post?: never
    /**
     * Delete an OAuth application
     * @description Deletes the given OAuth application.
     *     This is not reversible.
     */
    delete: operations['DeleteOAuthApplication']
    options?: never
    head?: never
    /**
     * Update an OAuth application
     * @description Updates an existing OAuth application
     */
    patch: operations['UpdateOAuthApplication']
    trace?: never
  }
  '/oauth_applications/{oauth_application_id}/rotate_secret': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Rotate the client secret of the given OAuth application
     * @description Rotates the OAuth application's client secret.
     *     When the client secret is rotated, make sure to update it in authorized OAuth clients.
     */
    post: operations['RotateOAuthApplicationSecret']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/saml_connections': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get a list of SAML Connections for an instance
     * @description Returns the list of SAML Connections for an instance.
     *     Results can be paginated using the optional `limit` and `offset` query parameters.
     *     The SAML Connections are ordered by descending creation date and the most recent will be returned first.
     */
    get: operations['ListSAMLConnections']
    put?: never
    /**
     * Create a SAML Connection
     * @description Create a new SAML Connection.
     */
    post: operations['CreateSAMLConnection']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/saml_connections/{saml_connection_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Retrieve a SAML Connection by ID
     * @description Fetches the SAML Connection whose ID matches the provided `saml_connection_id` in the path.
     */
    get: operations['GetSAMLConnection']
    put?: never
    post?: never
    /**
     * Delete a SAML Connection
     * @description Deletes the SAML Connection whose ID matches the provided `id` in the path.
     */
    delete: operations['DeleteSAMLConnection']
    options?: never
    head?: never
    /**
     * Update a SAML Connection
     * @description Updates the SAML Connection whose ID matches the provided `id` in the path.
     */
    patch: operations['UpdateSAMLConnection']
    trace?: never
  }
  '/testing_tokens': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Retrieve a new testing token
     * @description Retrieve a new testing token. Only available for development instances.
     */
    post: operations['CreateTestingToken']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organization_memberships': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get a list of all organization memberships within an instance.
     * @description Retrieves all organization user memberships for the given instance.
     */
    get: operations['InstanceGetOrganizationMemberships']
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
    Session: {
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object: 'session'
      id: string
      user_id: string
      client_id: string
      actor?: Record<string, never>
      /** @enum {string} */
      status:
        | 'active'
        | 'revoked'
        | 'ended'
        | 'expired'
        | 'removed'
        | 'abandoned'
        | 'replaced'
      last_active_organization_id?: string | null
      last_active_at: number
      latest_activity?: {
        object: string
        id: string
        device_type?: string
        is_mobile?: boolean
        browser_name?: string
        browser_version?: string
        ip_address?: string
        city?: string
        country?: string
      } | null
      expire_at: number
      abandon_at: number
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
    }
    Client: {
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object: 'client'
      /** @description String representing the identifier of the session.
       *      */
      id: string
      session_ids: string[]
      sessions: components['schemas']['Session'][]
      sign_in_id: string | null
      sign_up_id: string | null
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
    OTP: {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'failed' | 'expired'
      /** @enum {string} */
      strategy: 'phone_code' | 'email_code' | 'reset_password_email_code'
      attempts: number
      expire_at: number
    }
    Admin: {
      /** @enum {string} */
      status: 'verified'
      /** @enum {string} */
      strategy: 'admin'
      attempts?: number | null
      expire_at?: number | null
    }
    Oauth: {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'failed' | 'expired' | 'transferable'
      /** @enum {string} */
      strategy:
        | 'oauth_google'
        | 'oauth_mock'
        | 'oauth_custom_mock'
        | 'oauth_microsoft'
        | 'email_link'
      external_verification_redirect_url?: string
      error?: components['schemas']['ClerkError'] | null
      expire_at: number
      attempts?: number | null
    }
    IdentificationLink: {
      /** @enum {string} */
      type:
        | 'oauth_google'
        | 'oauth_mock'
        | 'saml'
        | 'oauth_microsoft'
        | 'email_link'
      id: string
    }
    EmailAddress: {
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
            | components['schemas']['OTP']
            | components['schemas']['Admin']
            | components['schemas']['Oauth']
          )
        | null
      linked_to: components['schemas']['IdentificationLink'][]
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
    DeletedObject: {
      object: string
      id?: string
      slug?: string
      deleted: boolean
    }
    PhoneNumber: {
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
        | (components['schemas']['OTP'] | components['schemas']['Admin'])
        | null
      linked_to: components['schemas']['IdentificationLink'][]
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
    Template: {
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object?: 'template'
      /** @description the id of the instance the template belongs to */
      instance_id?: string | null
      /** @description whether this is a system (default) or user overridden) template */
      resource_type?: string
      /** @description whether this is an email or SMS template */
      template_type?: string
      /** @description user-friendly name of the template */
      name?: string
      /** @description machine-friendly name of the template */
      slug?: string
      /** @description position with the listing of templates */
      position?: number
      /** @description whether this template can be reverted to the corresponding system default */
      can_revert?: boolean
      /** @description whether this template can be deleted */
      can_delete?: boolean
      /** @description whether this template can be enabled or disabled, true only for notification SMS templates */
      can_toggle?: boolean
      /** @description email subject */
      subject?: string | null
      /** @description the editor markup used to generate the body of the template */
      markup?: string
      /** @description the template body before variable interpolation */
      body?: string
      /** @description list of variables that are available for use in the template body */
      available_variables?: string[]
      /** @description list of variables that must be contained in the template body */
      required_variables?: string[]
      from_email_name?: string
      reply_to_email_name?: string
      delivered_by_clerk?: boolean
      enabled?: boolean
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
    }
    Web3Signature: {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'failed' | 'expired'
      /** @enum {string} */
      strategy: 'web3_metamask_signature' | 'web3_coinbase_wallet_signature'
      nonce?: string | null
      message?: string | null
      attempts?: number | null
      expire_at?: number | null
    }
    Web3Wallet: {
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
            | components['schemas']['Web3Signature']
            | components['schemas']['Admin']
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
    Passkey: {
      /** @enum {string} */
      status: 'verified'
      /** @enum {string} */
      strategy: 'passkey'
      /** @enum {string} */
      nonce?: 'nonce'
      attempts?: number | null
      expire_at?: number | null
    }
    'schemas-Passkey': {
      id?: string
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
      last_used_at: number
      verification: components['schemas']['Passkey'] | null
    }
    SAML: {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'failed' | 'expired' | 'transferable'
      /** @enum {string} */
      strategy: 'saml'
      external_verification_redirect_url: string | null
      error?: components['schemas']['ClerkError'] | null
      expire_at: number
      attempts?: number | null
    }
    Ticket: {
      /** @enum {string} */
      status: 'unverified' | 'verified' | 'expired'
      /** @enum {string} */
      strategy: 'ticket'
      attempts?: number | null
      expire_at?: number | null
    }
    SAMLConnection: {
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
    SAMLAccount: {
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
      provider_user_id?: string | null
      public_metadata?: Record<string, never>
      verification:
        | (components['schemas']['SAML'] | components['schemas']['Ticket'])
        | null
      saml_connection?: components['schemas']['SAMLConnection'] | null
    }
    User: {
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
      email_addresses?: components['schemas']['EmailAddress'][]
      phone_numbers?: components['schemas']['PhoneNumber'][]
      web3_wallets?: components['schemas']['Web3Wallet'][]
      passkeys?: components['schemas']['schemas-Passkey'][]
      password_enabled?: boolean
      two_factor_enabled?: boolean
      totp_enabled?: boolean
      backup_code_enabled?: boolean
      /**
       * Format: int64
       * @description Unix timestamp of when MFA was last enabled for this user. It should be noted that this field is not nullified if MFA is disabled.
       *
       */
      mfa_enabled_at?: number | null
      /**
       * Format: int64
       * @description Unix timestamp of when MFA was last disabled for this user. It should be noted that this field is not nullified if MFA is enabled again.
       *
       */
      mfa_disabled_at?: number | null
      external_accounts?: Record<string, never>[]
      saml_accounts?: components['schemas']['SAMLAccount'][]
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
       * @example 1700690400000
       */
      last_active_at?: number | null
      /**
       * Format: int64
       * @description Unix timestamp of when the user accepted the legal requirements.
       *
       * @example 1700690400000
       */
      legal_accepted_at?: number | null
    }
    /** @description The hashing algorithm that was used to generate the password digest.
     *
     *     The algorithms we support at the moment are [`bcrypt`](https://en.wikipedia.org/wiki/Bcrypt), [`bcrypt_sha256_django`](https://docs.djangoproject.com/en/4.0/topics/auth/passwords/), [`md5`](https://en.wikipedia.org/wiki/MD5), `pbkdf2_sha1`, `pbkdf2_sha256`, [`pbkdf2_sha256_django`](https://docs.djangoproject.com/en/4.0/topics/auth/passwords/),
     *     [`phpass`](https://www.openwall.com/phpass/), [`scrypt_firebase`](https://firebaseopensource.com/projects/firebase/scrypt/),
     *     [`scrypt_werkzeug`](https://werkzeug.palletsprojects.com/en/3.0.x/utils/#werkzeug.security.generate_password_hash), [`sha256`](https://en.wikipedia.org/wiki/SHA-2),
     *     and the [`argon2`](https://argon2.online/) variants: `argon2i` and `argon2id`.
     *
     *     Each of the supported hashers expects the incoming digest to be in a particular format. See the [Clerk docs](https://clerk.com/docs/references/backend/user/create-user) for more information. */
    PasswordHasher: string
    TotalCount: {
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object: 'total_count'
      /** Format: int64 */
      total_count: number
    }
    Organization: {
      /** @enum {string} */
      object: 'organization'
      id: string
      name: string
      slug: string
      members_count?: number | null
      max_allowed_memberships: number
      admin_delete_enabled?: boolean
      public_metadata: Record<string, never>
      private_metadata: Record<string, never>
      created_by?: string
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
    /** @description Hello world */
    OrganizationMembership: {
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object?: 'organization_membership'
      role?: string
      role_name?: string
      permissions?: string[]
      /** @description Metadata saved on the organization membership, accessible from both Frontend and Backend APIs */
      public_metadata?: Record<string, never>
      /** @description Metadata saved on the organization membership, accessible only from the Backend API */
      private_metadata?: Record<string, never>
      organization?: components['schemas']['Organization']
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
    OrganizationMemberships: {
      data: components['schemas']['OrganizationMembership'][]
      /**
       * Format: int64
       * @description Total number of organization memberships
       *
       */
      total_count: number
    }
    /** @description An organization invitation with public organization data populated */
    OrganizationInvitationWithPublicOrganizationData: {
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object?: 'organization_invitation'
      email_address?: string
      role?: string
      role_name?: string
      organization_id?: string
      status?: string
      public_metadata?: Record<string, never>
      private_metadata?: Record<string, never>
      public_organization_data?: {
        id?: string
        name?: string
        slug?: string
        image_url?: string
        has_image?: boolean
      }
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
    OrganizationInvitationsWithPublicOrganizationData: {
      data: components['schemas']['OrganizationInvitationWithPublicOrganizationData'][]
      /**
       * Format: int64
       * @description Total number of organization invitations
       *
       */
      total_count: number
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
    Invitation: {
      /** @enum {string} */
      object: 'invitation'
      id: string
      /** Format: email */
      email_address: string
      public_metadata?: Record<string, never>
      /** @example false */
      revoked?: boolean
      /**
       * @example pending
       * @enum {string}
       */
      status: 'pending' | 'accepted' | 'revoked' | 'expired'
      url?: string | null
      /**
       * Format: int64
       * @description Unix timestamp of expiration.
       *
       */
      expires_at?: number | null
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
    AllowlistIdentifier: {
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object?: 'allowlist_identifier'
      id?: string
      invitation_id?: string
      /** @description An email address or a phone number.
       *      */
      identifier?: string
      /** @enum {string} */
      identifier_type?: 'email_address' | 'phone_number' | 'web3_wallet'
      instance_id?: string
      /**
       * Format: int64
       * @description Unix timestamp of creation
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
    BlocklistIdentifier: {
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object?: 'blocklist_identifier'
      id?: string
      /** @description An email address, email domain, phone number or web3 wallet.
       *      */
      identifier?: string
      /** @enum {string} */
      identifier_type?: 'email_address' | 'phone_number' | 'web3_wallet'
      instance_id?: string
      /**
       * Format: int64
       * @description Unix timestamp of creation
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
    BlocklistIdentifiers: {
      data: components['schemas']['BlocklistIdentifier'][]
      /**
       * Format: int64
       * @description Total number of blocklist identifiers
       *
       */
      total_count: number
    }
    ActorToken: {
      /** @enum {string} */
      object: 'actor_token'
      id: string
      /** @enum {string} */
      status: 'pending' | 'accepted' | 'revoked'
      user_id: string
      actor: Record<string, never>
      token?: string | null
      url?: string | null
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
    CNameTarget: {
      host: string
      value: string
      /** @description Denotes whether this CNAME target is required to be set in order for the domain to be considered deployed.
       *      */
      required: boolean
    }
    Domain: {
      /** @enum {string} */
      object: 'domain'
      id: string
      name: string
      is_satellite: boolean
      frontend_api_url: string
      /** @description Null for satellite domains.
       *      */
      accounts_portal_url?: string | null
      proxy_url?: string | null
      development_origin: string
      cname_targets?: components['schemas']['CNameTarget'][] | null
    }
    Domains: {
      data: components['schemas']['Domain'][]
      /**
       * Format: int64
       * @description Total number of domains
       *
       */
      total_count: number
    }
    InstanceRestrictions: {
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       * @enum {string}
       */
      object?: 'instance_restrictions'
      allowlist?: boolean
      blocklist?: boolean
      block_email_subaddresses?: boolean
      ignore_dots_for_gmail_addresses?: boolean
    }
    OrganizationSettings: {
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       * @enum {string}
       */
      object: 'organization_settings'
      enabled: boolean
      max_allowed_memberships: number
      max_allowed_roles?: number
      max_allowed_permissions?: number
      /** @description The role key that a user will be assigned after creating an organization. */
      creator_role: string
      /** @description The default for whether an admin can delete an organization with the Frontend API. */
      admin_delete_enabled: boolean
      domains_enabled: boolean
      domains_enrollment_modes: (
        | 'manual_invitation'
        | 'automatic_invitation'
        | 'automatic_suggestion'
      )[]
      /** @description The role key that it will be used in order to create an organization invitation or suggestion. */
      domains_default_role: string
    }
    SvixURL: {
      svix_url: string
    }
    JWTTemplate: {
      /** @enum {string} */
      object: 'jwt_template'
      id: string
      name: string
      claims: Record<string, never>
      lifetime: number
      allowed_clock_skew: number
      custom_signing_key?: boolean
      signing_algorithm?: string
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
    Organizations: {
      data: components['schemas']['Organization'][]
      /**
       * Format: int64
       * @description Total number of organizations
       *
       */
      total_count: number
    }
    OrganizationWithLogo: components['schemas']['Organization'] & {
      /** @deprecated */
      logo_url?: string
      image_url: string
      has_image?: boolean
    }
    /** @description An organization invitation */
    OrganizationInvitation: {
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value.
       *
       * @enum {string}
       */
      object?: 'organization_invitation'
      email_address?: string
      role?: string
      role_name?: string
      organization_id?: string
      status?: string
      public_metadata?: Record<string, never>
      private_metadata?: Record<string, never>
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
    OrganizationInvitations: {
      data: components['schemas']['OrganizationInvitation'][]
      /**
       * Format: int64
       * @description Total number of organization invitations
       *
       */
      total_count: number
    }
    /** @description The verification object from an organization domain */
    OrganizationDomainVerification: {
      /**
       * @description Status of the verification. It can be `unverified` or `verified`
       * @enum {string}
       */
      status?: 'unverified' | 'verified'
      /** @description Name of the strategy used to verify the domain */
      strategy?: string
      /** @description How many attempts have been made to verify the domain */
      attempts?: number
      /**
       * Format: int64
       * @description Unix timestamp of when the verification will expire
       */
      expire_at?: number | null
    }
    /** @description An organization domain */
    OrganizationDomain: {
      /** @description Unique identifier for the organization domain */
      id?: string
      /**
       * @description String representing the object's type. Objects of the same type share the same value. Always `organization_domain`
       *
       * @enum {string}
       */
      object?: 'organization_domain'
      /** @description Unique identifier for the organization */
      organization_id?: string
      /** @description Name of the organization domain */
      name?: string
      /**
       * @description Mode of enrollment for the domain
       * @enum {string}
       */
      enrollment_mode?:
        | 'manual_invitation'
        | 'automatic_invitation'
        | 'automatic_suggestion'
      /** @description Affiliation email address for the domain, if available. */
      affiliation_email_address?: string | null
      /** @description Verification details for the domain */
      verification?:
        | components['schemas']['OrganizationDomainVerification']
        | null
      /**
       * Format: int32
       * @description Total number of pending invitations associated with this domain
       */
      total_pending_invitations?: number
      /**
       * Format: int32
       * @description Total number of pending suggestions associated with this domain
       */
      total_pending_suggestions?: number
      /**
       * Format: int64
       * @description Unix timestamp when the domain was created
       */
      created_at?: number
      /**
       * Format: int64
       * @description Unix timestamp of the last update to the domain
       */
      updated_at?: number
    }
    OrganizationDomains: {
      data: components['schemas']['OrganizationDomain'][]
      /**
       * Format: int64
       * @description Total number of organization domains
       *
       */
      total_count: number
    }
    ProxyCheck: {
      /** @enum {string} */
      object: 'proxy_check'
      id: string
      domain_id: string
      last_run_at: number
      proxy_url: string
      successful: boolean
      created_at: number
      updated_at: number
    }
    RedirectURL: {
      /** @enum {string} */
      object: 'redirect_url'
      id: string
      url: string
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
    SignInToken: {
      /** @enum {string} */
      object: 'sign_in_token'
      id: string
      /** @enum {string} */
      status: 'pending' | 'accepted' | 'revoked'
      user_id: string
      token?: string
      url?: string | null
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
    SignUp: {
      /** @enum {string} */
      object: 'sign_up_attempt'
      id: string
      /** @enum {string} */
      status: 'missing_requirements' | 'complete' | 'abandoned'
      required_fields?: string[]
      optional_fields?: string[]
      missing_fields?: string[]
      unverified_fields?: string[]
      verifications?: Record<string, never>
      username?: string | null
      email_address?: string | null
      phone_number?: string | null
      web3_wallet?: string | null
      password_enabled: boolean
      first_name?: string | null
      last_name?: string | null
      unsafe_metadata?: Record<string, never>
      public_metadata?: Record<string, never>
      custom_action: boolean
      external_id?: string | null
      created_session_id?: string | null
      created_user_id?: string | null
      abandon_at: number
      external_account?: Record<string, never>
    }
    OAuthApplication: {
      /** @enum {string} */
      object: 'oauth_application'
      id: string
      instance_id: string
      name: string
      client_id: string
      public: boolean
      scopes: string
      callback_url: string
      authorize_url: string
      token_fetch_url: string
      user_info_url: string
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
    OAuthApplications: {
      data: components['schemas']['OAuthApplication'][]
      /**
       * Format: int64
       * @description Total number of OAuth applications
       *
       */
      total_count: number
    }
    OAuthApplicationWithSecret: components['schemas']['OAuthApplication'] & {
      /** @description Empty if public client.
       *      */
      client_secret?: string
    }
    'schemas-SAMLConnection': {
      /** @enum {string} */
      object: 'saml_connection'
      id: string
      name: string
      domain: string
      idp_entity_id: string | null
      idp_sso_url: string | null
      idp_certificate: string | null
      idp_metadata_url?: string | null
      idp_metadata?: string | null
      acs_url: string
      sp_entity_id: string
      sp_metadata_url: string
      attribute_mapping?: {
        user_id?: string
        email_address?: string
        first_name?: string
        last_name?: string
      }
      active: boolean
      provider: string
      user_count: number
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
    SAMLConnections: {
      data: components['schemas']['schemas-SAMLConnection'][]
      /**
       * Format: int64
       * @description Total number of SAML Connections
       *
       */
      total_count: number
    }
    TestingToken: {
      /** @enum {string} */
      object: 'testing_token'
      /**
       * @description The actual token. This value is meant to be passed in the `__clerk_testing_token` query parameter with requests to the Frontend API.
       * @example 1713877200-c_2J2MvPu9PnXcuhbPZNao0LOXqK9A7YrnBn0HmIWxy
       */
      token: string
      /**
       * Format: int64
       * @description Unix timestamp of the token's expiration time.
       *
       * @example 1713880800
       */
      expires_at: number
    }
  }
  responses: {
    /** @description Get the JSON Web Key Set */
    'WellKnown.JWKS': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['WellKnown.JWKS']
      }
    }
    /** @description Success */
    'Client.List': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client'][]
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
    /** @description Authentication invalid */
    AuthenticationInvalid: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['ClerkErrors']
      }
    }
    /** @description The endpoint is considered deprecated and is pending removal. */
    DeprecatedEndpoint: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['ClerkErrors']
      }
    }
    /** @description Invalid request parameters */
    UnprocessableEntity: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['ClerkErrors']
      }
    }
    /** @description Success */
    Client: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Client']
      }
    }
    /** @description Resource not found */
    ResourceNotFound: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['ClerkErrors']
      }
    }
    /** @description Success */
    EmailAddress: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['EmailAddress']
      }
    }
    /** @description Authorization invalid */
    AuthorizationInvalid: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['ClerkErrors']
      }
    }
    /** @description Deleted Object */
    DeletedObject: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['DeletedObject']
      }
    }
    /** @description Success */
    PhoneNumber: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['PhoneNumber']
      }
    }
    /** @description Success */
    'Session.List': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Session'][]
      }
    }
    /** @description Success */
    Session: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Session']
      }
    }
    /** @description Success */
    'Template.List': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Template'][]
      }
    }
    /** @description Success */
    Template: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Template']
      }
    }
    /** @description Payment required */
    PaymentRequired: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['ClerkErrors']
      }
    }
    /** @description Success */
    'User.List': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['User'][]
      }
    }
    /** @description Success */
    User: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['User']
      }
    }
    /** @description Success */
    'User.Count': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['TotalCount']
      }
    }
    /** @description A list of organization memberships */
    OrganizationMemberships: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OrganizationMemberships']
      }
    }
    /** @description A list of organization invitations with public organization data */
    OrganizationInvitationsWithPublicOrganizationData: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OrganizationInvitationsWithPublicOrganizationData']
      }
    }
    /** @description A TOTP (Time-based One-Time Password) */
    TOTP: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['TOTP']
      }
    }
    /** @description List of invitations */
    'Invitation.List': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Invitation'][]
      }
    }
    /** @description Success */
    Invitation: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Invitation']
      }
    }
    /** @description Success */
    'Invitation.Revoked': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Invitation'] & {
          /**
           * @example true
           * @enum {boolean}
           */
          revoked?: true
          /**
           * @example revoked
           * @enum {string}
           */
          status?: 'revoked'
        }
      }
    }
    /** @description Success */
    'AllowlistIdentifier.List': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['AllowlistIdentifier'][]
      }
    }
    /** @description Success */
    AllowlistIdentifier: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['AllowlistIdentifier']
      }
    }
    /** @description Success */
    'BlocklistIdentifier.List': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['BlocklistIdentifiers']
      }
    }
    /** @description Success */
    BlocklistIdentifier: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['BlocklistIdentifier']
      }
    }
    /** @description InstanceSettings Server API */
    InstanceSettings: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': {
          /**
           * @description String representing the object's type. Objects of the same type share the same value.
           * @enum {string}
           */
          object?: 'instance_settings'
          id?: string
          restricted_to_allowlist?: boolean
          from_email_address?: string
          progressive_sign_up?: boolean
          enhanced_email_deliverability?: boolean
        }
      }
    }
    /** @description Success */
    ActorToken: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['ActorToken']
      }
    }
    /** @description A list of domains */
    Domains: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Domains']
      }
    }
    /** @description A domain */
    Domain: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Domain']
      }
    }
    /** @description Success */
    InstanceRestrictions: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['InstanceRestrictions']
      }
    }
    /** @description Success */
    OrganizationSettings: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OrganizationSettings']
      }
    }
    /** @description Response that contains a temporary Svix URL to access management dashboard */
    SvixURL: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['SvixURL']
      }
    }
    /** @description List of JWT templates */
    'JWTTemplate.List': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['JWTTemplate'][]
      }
    }
    /** @description Success */
    JWTTemplate: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['JWTTemplate']
      }
    }
    /** @description A list of organizations */
    Organizations: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Organizations']
      }
    }
    /** @description An organization */
    Organization: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['Organization']
      }
    }
    /** @description An organization with a logo URL. */
    OrganizationWithLogo: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OrganizationWithLogo']
      }
    }
    /** @description A list of organization invitations */
    OrganizationInvitations: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OrganizationInvitations']
      }
    }
    /** @description An organization invitation */
    OrganizationInvitation: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OrganizationInvitation']
      }
    }
    /** @description Success */
    OrganizationMembership: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OrganizationMembership']
      }
    }
    /** @description A list of organization domains */
    OrganizationDomains: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OrganizationDomains']
      }
    }
    /** @description An organization domain */
    OrganizationDomain: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OrganizationDomain']
      }
    }
    /** @description Health check information about a domain's proxy configuration validation attempt. */
    ProxyCheck: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['ProxyCheck']
      }
    }
    /** @description List of Redirect URLs */
    'RedirectURL.List': {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['RedirectURL'][]
      }
    }
    /** @description Success */
    RedirectURL: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['RedirectURL']
      }
    }
    /** @description Success */
    SignInToken: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['SignInToken']
      }
    }
    /** @description Success */
    SignUp: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['SignUp']
      }
    }
    /** @description A list of OAuth applications */
    OAuthApplications: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OAuthApplications']
      }
    }
    /** @description An OAuth application with client secret */
    OAuthApplicationWithSecret: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OAuthApplicationWithSecret']
      }
    }
    /** @description An OAuth application */
    OAuthApplication: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['OAuthApplication']
      }
    }
    /** @description A list of SAML Connections */
    SAMLConnections: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['SAMLConnections']
      }
    }
    /** @description A SAML Connection */
    SAMLConnection: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['schemas-SAMLConnection']
      }
    }
    /** @description A Testing Token */
    TestingToken: {
      headers: {
        [name: string]: unknown
      }
      content: {
        'application/json': components['schemas']['TestingToken']
      }
    }
  }
  parameters: {
    /** @description Applies a limit to the number of results returned.
     *     Can be used for paginating the results together with `offset`. */
    LimitParameter: number
    /** @description Skip the first `offset` results when paginating.
     *     Needs to be an integer greater or equal to zero.
     *     To be used in conjunction with `limit`. */
    OffsetParameter: number
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  GetPublicInterstitial: {
    parameters: {
      query?: {
        /** @description The Frontend API key of your instance */
        frontendApi?: string
        /** @description The publishable key of your instance */
        publishable_key?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description The interstitial page markup */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description A required query parameter is missing */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description An infinite redirect loop was detected */
      500: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  GetJWKS: {
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
  GetClientList: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client.List']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      410: components['responses']['DeprecatedEndpoint']
      422: components['responses']['UnprocessableEntity']
    }
  }
  VerifyClient: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description A JWT that represents the active client. */
          token?: string
        }
      }
    }
    responses: {
      200: components['responses']['Client']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  GetClient: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description Client ID. */
        client_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Client']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  CreateEmailAddress: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The ID representing the user */
          user_id?: string
          /** @description The new email address. Must adhere to the RFC 5322 specification for email address format. */
          email_address?: string
          /** @description When created, the email address will be marked as verified. */
          verified?: boolean | null
          /** @description Create this email address as the primary email address for the user.
           *     Default: false, unless it is the first email address. */
          primary?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['EmailAddress']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  GetEmailAddress: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the email address to retrieve */
        email_address_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['EmailAddress']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  DeleteEmailAddress: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the email address to delete */
        email_address_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpdateEmailAddress: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the email address to update */
        email_address_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The email address will be marked as verified. */
          verified?: boolean | null
          /** @description Set this email address as the primary email address for the user. */
          primary?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['EmailAddress']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  CreatePhoneNumber: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The ID representing the user */
          user_id?: string
          /** @description The new phone number. Must adhere to the E.164 standard for phone number format. */
          phone_number?: string
          /** @description When created, the phone number will be marked as verified. */
          verified?: boolean | null
          /** @description Create this phone number as the primary phone number for the user.
           *     Default: false, unless it is the first phone number. */
          primary?: boolean | null
          /** @description Create this phone number as reserved for multi-factor authentication.
           *     The phone number must also be verified.
           *     If there are no other reserved second factors, the phone number will be set as the default second factor. */
          reserved_for_second_factor?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['PhoneNumber']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  GetPhoneNumber: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the phone number to retrieve */
        phone_number_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['PhoneNumber']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  DeletePhoneNumber: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the phone number to delete */
        phone_number_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpdatePhoneNumber: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the phone number to update */
        phone_number_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The phone number will be marked as verified. */
          verified?: boolean | null
          /** @description Set this phone number as the primary phone number for the user. */
          primary?: boolean | null
          /** @description Set this phone number as reserved for multi-factor authentication.
           *     The phone number must also be verified.
           *     If there are no other reserved second factors, the phone number will be set as the default second factor. */
          reserved_for_second_factor?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['PhoneNumber']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  GetSessionList: {
    parameters: {
      query?: {
        /** @description List sessions for the given client */
        client_id?: string
        /** @description List sessions for the given user */
        user_id?: string
        /** @description Filter sessions by the provided status */
        status?:
          | 'abandoned'
          | 'active'
          | 'ended'
          | 'expired'
          | 'removed'
          | 'replaced'
          | 'revoked'
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Session.List']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      422: components['responses']['UnprocessableEntity']
    }
  }
  GetSession: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the session */
        session_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Session']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  RevokeSession: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the session */
        session_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Session']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  VerifySession: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the session */
        session_id: string
      }
      cookie?: never
    }
    /** @description Parameters. */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The JWT that is sent via the `__session` cookie from your frontend.
           *     Note: this JWT must be associated with the supplied session ID. */
          token?: string
        }
      }
    }
    responses: {
      200: components['responses']['Session']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
      410: components['responses']['DeprecatedEndpoint']
    }
  }
  CreateSessionTokenFromTemplate: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the session */
        session_id: string
        /** @description The name of the JWT Template defined in your instance (e.g. `custom_hasura`). */
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
            /** @enum {string} */
            object?: 'token'
            jwt?: string
          }
        }
      }
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  GetTemplateList: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The type of templates to list (email or SMS) */
        template_type: 'email' | 'sms'
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Template.List']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      422: components['responses']['UnprocessableEntity']
    }
  }
  GetTemplate: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The type of templates to retrieve (email or SMS) */
        template_type: 'email' | 'sms'
        /** @description The slug (i.e. machine-friendly name) of the template to retrieve */
        slug: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Template']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpsertTemplate: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The type of template to update */
        template_type: 'email' | 'sms'
        /** @description The slug of the template to update */
        slug: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @description The user-friendly name of the template */
          name?: string
          /** @description The email subject.
           *     Applicable only to email templates. */
          subject?: string | null
          /** @description The editor markup used to generate the body of the template */
          markup?: string | null
          /** @description The template body before variable interpolation */
          body?: string
          /** @description Whether Clerk should deliver emails or SMS messages based on the current template */
          delivered_by_clerk?: boolean | null
          /** @description The local part of the From email address that will be used for emails.
           *     For example, in the address 'hello@example.com', the local part is 'hello'.
           *     Applicable only to email templates. */
          from_email_name?: string
          /** @description The local part of the Reply To email address that will be used for emails.
           *     For example, in the address 'hello@example.com', the local part is 'hello'.
           *     Applicable only to email templates. */
          reply_to_email_name?: string
        }
      }
    }
    responses: {
      200: components['responses']['Template']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      402: components['responses']['PaymentRequired']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  RevertTemplate: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The type of template to revert */
        template_type: 'email' | 'sms'
        /** @description The slug of the template to revert */
        slug: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Template']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      402: components['responses']['PaymentRequired']
      404: components['responses']['ResourceNotFound']
    }
  }
  PreviewTemplate: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The type of template to preview */
        template_type: string
        /** @description The slug of the template to preview */
        slug: string
      }
      cookie?: never
    }
    /** @description Required parameters */
    requestBody?: {
      content: {
        'application/json': {
          /** @description The email subject.
           *     Applicable only to email templates. */
          subject?: string | null
          /** @description The template body before variable interpolation */
          body?: string
          /** @description The local part of the From email address that will be used for emails.
           *     For example, in the address 'hello@example.com', the local part is 'hello'.
           *     Applicable only to email templates. */
          from_email_name?: string
          /** @description The local part of the Reply To email address that will be used for emails.
           *     For example, in the address 'hello@example.com', the local part is 'hello'.
           *     Applicable only to email templates. */
          reply_to_email_name?: string
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
          'application/json': Record<string, never>
        }
      }
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  ToggleTemplateDelivery: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The type of template to toggle delivery for */
        template_type: 'email' | 'sms'
        /** @description The slug of the template for which to toggle delivery */
        slug: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @description Whether Clerk should deliver emails or SMS messages based on the current template */
          delivered_by_clerk?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['Template']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  GetUserList: {
    parameters: {
      query?: {
        /** @description Returns users with the specified email addresses.
         *     Accepts up to 100 email addresses.
         *     Any email addresses not found are ignored. */
        email_address?: string[]
        /** @description Returns users with the specified phone numbers.
         *     Accepts up to 100 phone numbers.
         *     Any phone numbers not found are ignored. */
        phone_number?: string[]
        /** @description Returns users with the specified external ids.
         *     For each external id, the `+` and `-` can be
         *     prepended to the id, which denote whether the
         *     respective external id should be included or
         *     excluded from the result set.
         *     Accepts up to 100 external ids.
         *     Any external ids not found are ignored. */
        external_id?: string[]
        /** @description Returns users with the specified usernames.
         *     Accepts up to 100 usernames.
         *     Any usernames not found are ignored. */
        username?: string[]
        /** @description Returns users with the specified web3 wallet addresses.
         *     Accepts up to 100 web3 wallet addresses.
         *     Any web3 wallet addressed not found are ignored. */
        web3_wallet?: string[]
        /** @description Returns users with the user ids specified.
         *     For each user id, the `+` and `-` can be
         *     prepended to the id, which denote whether the
         *     respective user id should be included or
         *     excluded from the result set.
         *     Accepts up to 100 user ids.
         *     Any user ids not found are ignored. */
        user_id?: string[]
        /** @description Returns users that have memberships to the
         *     given organizations.
         *     For each organization id, the `+` and `-` can be
         *     prepended to the id, which denote whether the
         *     respective organization should be included or
         *     excluded from the result set.
         *     Accepts up to 100 organization ids. */
        organization_id?: string[]
        /** @description Returns users that match the given query.
         *     For possible matches, we check the email addresses, phone numbers, usernames, web3 wallets, user ids, first and last names.
         *     The query value doesn't need to match the exact value you are looking for, it is capable of partial matches as well. */
        query?: string
        /**
         * @description Returns users that had session activity since the given date, with day precision.
         *     Providing a value with higher precision than day will result in an error.
         *     Example: use 1700690400000 to retrieve users that had session activity from 2023-11-23 until the current day.
         * @example 1700690400000
         */
        last_active_at_since?: number
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
        /** @description Allows to return users in a particular order.
         *     At the moment, you can order the returned users by their `created_at`,`updated_at`,`email_address`,`web3wallet`,`first_name`,`last_name`,`phone_number`,`username`,`last_active_at`,`last_sign_in_at`.
         *     In order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.
         *     For example, if you want users to be returned in descending order according to their `created_at` property, you can use `-created_at`.
         *     If you don't use `+` or `-`, then `+` is implied. We only support one `order_by` parameter, and if multiple `order_by` parameters are provided, we will only keep the first one. For example,
         *     if you pass `order_by=username&order_by=created_at`, we will consider only the first `order_by` parameter, which is `username`. The `created_at` parameter will be ignored in this case. */
        order_by?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['User.List']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      422: components['responses']['UnprocessableEntity']
    }
  }
  CreateUser: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The ID of the user as used in your external systems or your previous authentication solution.
           *     Must be unique across your instance. */
          external_id?: string | null
          /** @description The first name to assign to the user */
          first_name?: string | null
          /** @description The last name to assign to the user */
          last_name?: string | null
          /** @description Email addresses to add to the user.
           *     Must be unique across your instance.
           *     The first email address will be set as the user's primary email address. */
          email_address?: string[]
          /** @description Phone numbers to add to the user.
           *     Must be unique across your instance.
           *     The first phone number will be set as the user's primary phone number. */
          phone_number?: string[]
          /** @description Web3 wallets to add to the user.
           *     Must be unique across your instance.
           *     The first wallet will be set as the user's primary wallet. */
          web3_wallet?: string[]
          /** @description The username to give to the user.
           *     It must be unique across your instance. */
          username?: string | null
          /** @description The plaintext password to give the user.
           *     Must be at least 8 characters long, and can not be in any list of hacked passwords. */
          password?: string | null
          /** @description In case you already have the password digests and not the passwords, you can use them for the newly created user via this property.
           *     The digests should be generated with one of the supported algorithms.
           *     The hashing algorithm can be specified using the `password_hasher` property. */
          password_digest?: string
          password_hasher?: components['schemas']['PasswordHasher']
          /** @description When set to `true` all password checks are skipped.
           *     It is recommended to use this method only when migrating plaintext passwords to Clerk.
           *     Upon migration the user base should be prompted to pick stronger password. */
          skip_password_checks?: boolean
          /** @description When set to `true`, `password` is not required anymore when creating the user and can be omitted.
           *     This is useful when you are trying to create a user that doesn't have a password, in an instance that is using passwords.
           *     Please note that you cannot use this flag if password is the only way for a user to sign into your instance. */
          skip_password_requirement?: boolean
          /** @description In case TOTP is configured on the instance, you can provide the secret to enable it on the newly created user without the need to reset it.
           *     Please note that currently the supported options are:
           *     * Period: 30 seconds
           *     * Code length: 6 digits
           *     * Algorithm: SHA1 */
          totp_secret?: string
          /** @description If Backup Codes are configured on the instance, you can provide them to enable it on the newly created user without the need to reset them.
           *     You must provide the backup codes in plain format or the corresponding bcrypt digest. */
          backup_codes?: string[]
          /** @description Metadata saved on the user, that is visible to both your Frontend and Backend APIs */
          public_metadata?: Record<string, never>
          /** @description Metadata saved on the user, that is only visible to your Backend API */
          private_metadata?: Record<string, never>
          /** @description Metadata saved on the user, that can be updated from both the Frontend and Backend APIs.
           *     Note: Since this data can be modified from the frontend, it is not guaranteed to be safe. */
          unsafe_metadata?: Record<string, never>
          /** @description If enabled, user can delete themselves via FAPI.
           *      */
          delete_self_enabled?: boolean | null
          /** @description A custom timestamp denoting _when_ the user accepted legal requirements, specified in RFC3339 format (e.g. `2012-10-20T07:15:20.902Z`). */
          legal_accepted_at?: string | null
          /** @description When set to `true` all legal checks are skipped.
           *     It is not recommended to skip legal checks unless you are migrating a user to Clerk. */
          skip_legal_checks?: boolean | null
          /** @description If enabled, user can create organizations via FAPI.
           *      */
          create_organization_enabled?: boolean | null
          /** @description The maximum number of organizations the user can create. 0 means unlimited.
           *      */
          create_organizations_limit?: number | null
          /** @description A custom date/time denoting _when_ the user signed up to the application, specified in RFC3339 format (e.g. `2012-10-20T07:15:20.902Z`). */
          created_at?: string
        }
      }
    }
    responses: {
      200: components['responses']['User']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      403: components['responses']['AuthenticationInvalid']
      422: components['responses']['UnprocessableEntity']
    }
  }
  GetUsersCount: {
    parameters: {
      query?: {
        /** @description Counts users with the specified email addresses.
         *     Accepts up to 100 email addresses.
         *     Any email addresses not found are ignored. */
        email_address?: string[]
        /** @description Counts users with the specified phone numbers.
         *     Accepts up to 100 phone numbers.
         *     Any phone numbers not found are ignored. */
        phone_number?: string[]
        /** @description Counts users with the specified external ids.
         *     Accepts up to 100 external ids.
         *     Any external ids not found are ignored. */
        external_id?: string[]
        /** @description Counts users with the specified usernames.
         *     Accepts up to 100 usernames.
         *     Any usernames not found are ignored. */
        username?: string[]
        /** @description Counts users with the specified web3 wallet addresses.
         *     Accepts up to 100 web3 wallet addresses.
         *     Any web3 wallet addressed not found are ignored. */
        web3_wallet?: string[]
        /** @description Counts users with the user ids specified.
         *     Accepts up to 100 user ids.
         *     Any user ids not found are ignored. */
        user_id?: string[]
        /** @description Counts users that match the given query.
         *     For possible matches, we check the email addresses, phone numbers, usernames, web3 wallets, user ids, first and last names.
         *     The query value doesn't need to match the exact value you are looking for, it is capable of partial matches as well. */
        query?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['User.Count']
      422: components['responses']['UnprocessableEntity']
    }
  }
  GetUser: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user to retrieve */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['User']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  DeleteUser: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user to delete */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpdateUser: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user to update */
        user_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The ID of the user as used in your external systems or your previous authentication solution.
           *     Must be unique across your instance. */
          external_id?: string | null
          /** @description The first name to assign to the user */
          first_name?: string | null
          /** @description The last name to assign to the user */
          last_name?: string | null
          /** @description The ID of the email address to set as primary.
           *     It must be verified, and present on the current user. */
          primary_email_address_id?: string
          /**
           * @description If set to `true`, the user will be notified that their primary email address has changed.
           *     By default, no notification is sent.
           * @default false
           */
          notify_primary_email_address_changed?: boolean
          /** @description The ID of the phone number to set as primary.
           *     It must be verified, and present on the current user. */
          primary_phone_number_id?: string
          /** @description The ID of the web3 wallets to set as primary.
           *     It must be verified, and present on the current user. */
          primary_web3_wallet_id?: string
          /** @description The username to give to the user.
           *     It must be unique across your instance. */
          username?: string | null
          /** @description The ID of the image to set as the user's profile image */
          profile_image_id?: string | null
          /** @description The plaintext password to give the user.
           *     Must be at least 8 characters long, and can not be in any list of hacked passwords. */
          password?: string | null
          /** @description In case you already have the password digests and not the passwords, you can use them for the newly created user via this property.
           *     The digests should be generated with one of the supported algorithms.
           *     The hashing algorithm can be specified using the `password_hasher` property. */
          password_digest?: string
          password_hasher?: components['schemas']['PasswordHasher']
          /** @description Set it to `true` if you're updating the user's password and want to skip any password policy settings check. This parameter can only be used when providing a `password`. */
          skip_password_checks?: boolean | null
          /** @description Set to `true` to sign out the user from all their active sessions once their password is updated. This parameter can only be used when providing a `password`. */
          sign_out_of_other_sessions?: boolean | null
          /** @description In case TOTP is configured on the instance, you can provide the secret to enable it on the specific user without the need to reset it.
           *     Please note that currently the supported options are:
           *     * Period: 30 seconds
           *     * Code length: 6 digits
           *     * Algorithm: SHA1 */
          totp_secret?: string
          /** @description If Backup Codes are configured on the instance, you can provide them to enable it on the specific user without the need to reset them.
           *     You must provide the backup codes in plain format or the corresponding bcrypt digest. */
          backup_codes?: string[]
          /** @description Metadata saved on the user, that is visible to both your Frontend and Backend APIs */
          public_metadata?: Record<string, never>
          /** @description Metadata saved on the user, that is only visible to your Backend API */
          private_metadata?: Record<string, never>
          /** @description Metadata saved on the user, that can be updated from both the Frontend and Backend APIs.
           *     Note: Since this data can be modified from the frontend, it is not guaranteed to be safe. */
          unsafe_metadata?: Record<string, never>
          /** @description If true, the user can delete themselves with the Frontend API. */
          delete_self_enabled?: boolean | null
          /** @description If true, the user can create organizations with the Frontend API. */
          create_organization_enabled?: boolean | null
          /** @description A custom timestamps denoting _when_ the user accepted legal requirements, specified in RFC3339 format (e.g. `2012-10-20T07:15:20.902Z`). */
          legal_accepted_at?: string | null
          /** @description When set to `true` all legal checks are skipped.
           *     It is not recommended to skip legal checks unless you are migrating a user to Clerk. */
          skip_legal_checks?: boolean | null
          /** @description The maximum number of organizations the user can create. 0 means unlimited. */
          create_organizations_limit?: number | null
          /** @description A custom date/time denoting _when_ the user signed up to the application, specified in RFC3339 format (e.g. `2012-10-20T07:15:20.902Z`). */
          created_at?: string
        }
      }
    }
    responses: {
      200: components['responses']['User']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  BanUser: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user to ban */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['User']
      402: components['responses']['PaymentRequired']
    }
  }
  UnbanUser: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user to unban */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['User']
      402: components['responses']['PaymentRequired']
    }
  }
  LockUser: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user to lock */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['User']
      403: components['responses']['AuthorizationInvalid']
    }
  }
  UnlockUser: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user to unlock */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['User']
      403: components['responses']['AuthorizationInvalid']
    }
  }
  SetUserProfileImage: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user to update the profile image for */
        user_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'multipart/form-data': {
          /** Format: binary */
          file?: string
        }
      }
    }
    responses: {
      200: components['responses']['User']
      400: components['responses']['ClerkErrors']
      401: components['responses']['ClerkErrors']
      404: components['responses']['ClerkErrors']
    }
  }
  DeleteUserProfileImage: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user to delete the profile image for */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['User']
      404: components['responses']['ClerkErrors']
    }
  }
  UpdateUserMetadata: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user whose metadata will be updated and merged */
        user_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Metadata saved on the user, that is visible to both your frontend and backend.
           *     The new object will be merged with the existing value. */
          public_metadata?: {
            [key: string]: unknown
          }
          /** @description Metadata saved on the user that is only visible to your backend.
           *     The new object will be merged with the existing value. */
          private_metadata?: {
            [key: string]: unknown
          }
          /** @description Metadata saved on the user, that can be updated from both the Frontend and Backend APIs.
           *     The new object will be merged with the existing value.
           *
           *     Note: Since this data can be modified from the frontend, it is not guaranteed to be safe. */
          unsafe_metadata?: {
            [key: string]: unknown
          }
        }
      }
    }
    responses: {
      200: components['responses']['User']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  GetOAuthAccessToken: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user for which to retrieve the OAuth access token */
        user_id: string
        /** @description The ID of the OAuth provider (e.g. `oauth_google`) */
        provider: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description The OAuth access token of the user, if any. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            object?: string
            /** @description External account ID */
            external_account_id?: string
            /** @description The unique ID of the user in the external provider's system */
            provider_user_id?: string
            /** @description The access token */
            token?: string
            /** @description The ID of the provider */
            provider?: string
            public_metadata?: Record<string, never>
            label?: string | null
            /** @description The list of scopes that the token is valid for.
             *     Only present for OAuth 2.0 tokens. */
            scopes?: string[]
            /** @description The token secret. Only present for OAuth 1.0 tokens. */
            token_secret?: string
          }[]
        }
      }
      400: components['responses']['ClerkErrors']
      422: components['responses']['UnprocessableEntity']
    }
  }
  UsersGetOrganizationMemberships: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
      }
      header?: never
      path: {
        /** @description The ID of the user whose organization memberships we want to retrieve */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['OrganizationMemberships']
      403: components['responses']['ClerkErrors']
    }
  }
  UsersGetOrganizationInvitations: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
        /** @description Filter organization invitations based on their status */
        status?: 'pending' | 'accepted' | 'revoked'
      }
      header?: never
      path: {
        /** @description The ID of the user whose organization invitations we want to retrieve */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['OrganizationInvitationsWithPublicOrganizationData']
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
    }
  }
  VerifyPassword: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user for whom to verify the password */
        user_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The user password to verify */
          password: string
        }
      }
    }
    responses: {
      /** @description The provided password was correct. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            verified?: boolean
          }
        }
      }
      /** @description The user does not have a password set. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description The user does not exist. */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description The provided password was incorrect. */
      422: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      500: components['responses']['ClerkErrors']
    }
  }
  VerifyTOTP: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user for whom to verify the TOTP */
        user_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The TOTP or backup code to verify */
          code: string
        }
      }
    }
    responses: {
      /** @description The provided TOTP or backup code was correct. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            verified?: boolean
            /** @enum {string} */
            code_type?: 'totp' | 'backup_code'
          }
        }
      }
      /** @description The user does not have TOTP configured for their account. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description The user does not exist. */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description The provided TOTP or backup code was incorrect. */
      422: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      500: components['responses']['ClerkErrors']
    }
  }
  DisableMFA: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user whose MFA methods are to be disabled */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful operation. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            user_id?: string
          }
        }
      }
      404: components['responses']['ResourceNotFound']
      500: components['responses']['ClerkErrors']
    }
  }
  DeleteBackupCode: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user whose backup codes are to be deleted. */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful operation. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            user_id?: string
          }
        }
      }
      404: components['responses']['ResourceNotFound']
      500: components['responses']['ClerkErrors']
    }
  }
  UserPasskeyDelete: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user that owns the passkey identity */
        user_id: string
        /** @description The ID of the passkey identity to be deleted */
        passkey_identification_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
      500: components['responses']['ClerkErrors']
    }
  }
  UserWeb3WalletDelete: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user that owns the web3 wallet */
        user_id: string
        /** @description The ID of the web3 wallet identity to be deleted */
        web3_wallet_identification_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      400: components['responses']['ClerkErrors']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
      500: components['responses']['ClerkErrors']
    }
  }
  CreateUserTOTP: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user for whom the TOTP is being created. */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['TOTP']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
      500: components['responses']['ClerkErrors']
    }
  }
  DeleteTOTP: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user whose TOTPs are to be deleted */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful operation. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            user_id?: string
          }
        }
      }
      404: components['responses']['ResourceNotFound']
      500: components['responses']['ClerkErrors']
    }
  }
  DeleteExternalAccount: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the user's external account */
        user_id: string
        /** @description The ID of the external account to delete */
        external_account_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      400: components['responses']['ClerkErrors']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
      500: components['responses']['ClerkErrors']
    }
  }
  ListInvitations: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
        /** @description Filter invitations based on their status */
        status?: 'pending' | 'accepted' | 'revoked' | 'expired'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Invitation.List']
    }
  }
  CreateInvitation: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Required parameters */
    requestBody: {
      content: {
        'application/json': {
          /** @description The email address the invitation will be sent to */
          email_address: string
          /** @description Metadata that will be attached to the newly created invitation.
           *     The value of this property should be a well-formed JSON object.
           *     Once the user accepts the invitation and signs up, these metadata will end up in the user's public metadata. */
          public_metadata?: Record<string, never>
          /** @description Optional URL which specifies where to redirect the user once they click the invitation link.
           *     This is only required if you have implemented a [custom flow](https://clerk.com/docs/authentication/invitations#custom-flow) and you're not using Clerk Hosted Pages or Clerk Components. */
          redirect_url?: string
          /**
           * @description Optional flag which denotes whether an email invitation should be sent to the given email address.
           *     Defaults to true.
           * @default true
           */
          notify?: boolean
          /**
           * @description Whether an invitation should be created if there is already an existing invitation for this email address, or it's claimed by another user.
           * @default false
           */
          ignore_existing?: boolean | null
          /** @description The number of days the invitation will be valid for. By default, the invitation does not expire. */
          expires_in_days?: number | null
        }
      }
    }
    responses: {
      200: components['responses']['Invitation']
      400: components['responses']['ClerkErrors']
      422: components['responses']['UnprocessableEntity']
    }
  }
  RevokeInvitation: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the invitation to be revoked */
        invitation_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Invitation.Revoked']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
    }
  }
  ListInstanceOrganizationInvitations: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
        /** @description Allows to return organization invitations in a particular order.
         *     At the moment, you can order the returned organization invitations either by their `created_at` or `email_address`.
         *     In order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.
         *     For example, if you want organization invitations to be returned in descending order according to their `created_at` property, you can use `-created_at`.
         *     If you don't use `+` or `-`, then `+` is implied.
         *     Defaults to `-created_at`. */
        order_by?: string
        /** @description Filter organization invitations based on their status */
        status?: 'pending' | 'accepted' | 'revoked'
        /** @description Filter organization invitations based on their `email_address` */
        query?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['OrganizationInvitationsWithPublicOrganizationData']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['ClerkErrors']
      500: components['responses']['ClerkErrors']
    }
  }
  ListAllowlistIdentifiers: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['AllowlistIdentifier.List']
      401: components['responses']['AuthenticationInvalid']
      402: components['responses']['PaymentRequired']
    }
  }
  CreateAllowlistIdentifier: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The identifier to be added in the allow-list.
           *     This can be an email address, a phone number or a web3 wallet. */
          identifier: string
          /**
           * @description This flag denotes whether the given identifier will receive an invitation to join the application.
           *     Note that this only works for email address and phone number identifiers.
           * @default false
           */
          notify?: boolean
        }
      }
    }
    responses: {
      200: components['responses']['AllowlistIdentifier']
      400: components['responses']['ClerkErrors']
      402: components['responses']['PaymentRequired']
      422: components['responses']['UnprocessableEntity']
    }
  }
  DeleteAllowlistIdentifier: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the identifier to delete from the allow-list */
        identifier_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      402: components['responses']['PaymentRequired']
      404: components['responses']['ResourceNotFound']
    }
  }
  ListBlocklistIdentifiers: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['BlocklistIdentifier.List']
      401: components['responses']['AuthenticationInvalid']
      402: components['responses']['PaymentRequired']
    }
  }
  CreateBlocklistIdentifier: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The identifier to be added in the block-list.
           *     This can be an email address, a phone number or a web3 wallet. */
          identifier: string
        }
      }
    }
    responses: {
      200: components['responses']['BlocklistIdentifier']
      400: components['responses']['ClerkErrors']
      402: components['responses']['PaymentRequired']
      422: components['responses']['UnprocessableEntity']
    }
  }
  DeleteBlocklistIdentifier: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the identifier to delete from the block-list */
        identifier_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      402: components['responses']['PaymentRequired']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpdateInstanceAuthConfig: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description Whether sign up is restricted to email addresses, phone numbers and usernames that are on the allowlist.
           * @default false
           */
          restricted_to_allowlist?: boolean | null
          /** @description The local part of the email address from which authentication-related emails (e.g. OTP code, magic links) will be sent.
           *     Only alphanumeric values are allowed.
           *     Note that this value should contain only the local part of the address (e.g. `foo` for `foo@example.com`). */
          from_email_address?: string | null
          /** @description Enable the Progressive Sign Up algorithm. Refer to the [docs](https://clerk.com/docs/upgrade-guides/progressive-sign-up) for more info. */
          progressive_sign_up?: boolean | null
          /** @description The name of the JWT Template used to augment your session tokens. To disable this, pass an empty string. */
          session_token_template?: string | null
          /** @description The "enhanced_email_deliverability" feature will send emails from "verifications@clerk.dev" instead of your domain.
           *     This can be helpful if you do not have a high domain reputation. */
          enhanced_email_deliverability?: boolean | null
          /** @description Toggles test mode for this instance, allowing the use of test email addresses and phone numbers.
           *     Defaults to true for development instances. */
          test_mode?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['InstanceSettings']
      402: components['responses']['PaymentRequired']
      422: components['responses']['UnprocessableEntity']
    }
  }
  UpdateProductionInstanceDomain: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @description The new home URL of the production instance e.g. https://www.example.com */
          home_url?: string
        }
      }
    }
    responses: {
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  CreateActorToken: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The ID of the user being impersonated. */
          user_id: string
          /**
           * @description The actor payload. It needs to include a sub property which should contain the ID of the actor.
           *     This whole payload will be also included in the JWT session token.
           * @example {
           *       "sub": "user_2OEpKhcCN1Lat9NQ0G6puh7q5Rb"
           *     }
           */
          actor: Record<string, never>
          /**
           * @description Optional parameter to specify the life duration of the actor token in seconds.
           *     By default, the duration is 1 hour.
           * @default 3600
           */
          expires_in_seconds?: number
          /**
           * @description The maximum duration that the session which will be created by the generated actor token should last.
           *     By default, the duration of a session created via an actor token, lasts 30 minutes.
           * @default 1800
           */
          session_max_duration_in_seconds?: number
        }
      }
    }
    responses: {
      200: components['responses']['ActorToken']
      400: components['responses']['ClerkErrors']
      402: components['responses']['PaymentRequired']
      422: components['responses']['UnprocessableEntity']
    }
  }
  RevokeActorToken: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the actor token to be revoked. */
        actor_token_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['ActorToken']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
    }
  }
  ListDomains: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Domains']
    }
  }
  AddDomain: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The new domain name. Can contain the port for development instances. */
          name: string
          /**
           * @description Marks the new domain as satellite. Only `true` is accepted at the moment.
           * @enum {boolean}
           */
          is_satellite: true
          /** @description The full URL of the proxy which will forward requests to the Clerk Frontend API for this domain. Applicable only to production instances. */
          proxy_url?: string
        }
      }
    }
    responses: {
      200: components['responses']['Domain']
      400: components['responses']['ClerkErrors']
      402: components['responses']['ClerkErrors']
      422: components['responses']['UnprocessableEntity']
    }
  }
  DeleteDomain: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the domain that will be deleted. Must be a satellite domain. */
        domain_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      403: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpdateDomain: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the domain that will be updated. */
        domain_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The new domain name. For development instances, can contain the port,
           *     i.e `myhostname:3000`. For production instances, must be a valid FQDN,
           *     i.e `mysite.com`. Cannot contain protocol scheme. */
          name?: string | null
          /** @description The full URL of the proxy that will forward requests to Clerk's Frontend API.
           *     Can only be updated for production instances. */
          proxy_url?: string | null
          /** @description Whether this is a domain for a secondary app, meaning that any subdomain provided is significant and
           *     will be stored as part of the domain. This is useful for supporting multiple apps (one primary and
           *     multiple secondaries) on the same root domain (eTLD+1). */
          is_secondary?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['Domain']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  UpdateInstance: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Toggles test mode for this instance, allowing the use of test email addresses and phone numbers.
           *     Defaults to true for development instances. */
          test_mode?: boolean | null
          /** @description Whether the instance should be using the HIBP service to check passwords for breaches */
          hibp?: boolean | null
          /** @description The "enhanced_email_deliverability" feature will send emails from "verifications@clerk.dev" instead of your domain.
           *     This can be helpful if you do not have a high domain reputation. */
          enhanced_email_deliverability?: boolean | null
          support_email?: string | null
          clerk_js_version?: string | null
          development_origin?: string | null
          /** @description For browser-like stacks such as browser extensions, Electron, or Capacitor.js the instance allowed origins need to be updated with the request origin value.
           *     For Chrome extensions popup, background, or service worker pages the origin is chrome-extension://extension_uiid. For Electron apps the default origin is http://localhost:3000. For Capacitor, the origin is capacitor://localhost. */
          allowed_origins?: string[]
          /**
           * @deprecated
           * @description Whether the instance should operate in cookieless development mode (i.e. without third-party cookies).
           *     Deprecated: Please use `url_based_session_syncing` instead.
           */
          cookieless_dev?: boolean
          /** @description Whether the instance should use URL-based session syncing in development mode (i.e. without third-party cookies). */
          url_based_session_syncing?: boolean
        }
      }
    }
    responses: {
      /** @description Accepted */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      422: components['responses']['UnprocessableEntity']
    }
  }
  UpdateInstanceRestrictions: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          allowlist?: boolean | null
          blocklist?: boolean | null
          block_email_subaddresses?: boolean | null
          block_disposable_email_domains?: boolean | null
          ignore_dots_for_gmail_addresses?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['InstanceRestrictions']
      402: components['responses']['PaymentRequired']
      422: components['responses']['UnprocessableEntity']
    }
  }
  ChangeProductionInstanceDomain: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The new home URL of the production instance e.g. https://www.example.com */
          home_url?: string
          /** @description Whether this is a domain for a secondary app, meaning that any subdomain provided is significant and
           *     will be stored as part of the domain. This is useful for supporting multiple apps (one primary and
           *     multiple secondaries) on the same root domain (eTLD+1). */
          is_secondary?: boolean
        }
      }
    }
    responses: {
      /** @description Accepted */
      202: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
      422: components['responses']['ClerkErrors']
    }
  }
  UpdateInstanceOrganizationSettings: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          enabled?: boolean | null
          max_allowed_memberships?: number | null
          admin_delete_enabled?: boolean | null
          domains_enabled?: boolean | null
          /** @description Specify which enrollment modes to enable for your Organization Domains.
           *     Supported modes are 'automatic_invitation' & 'automatic_suggestion'. */
          domains_enrollment_modes?: string[]
          /** @description Specify what the default organization role is for an organization creator. */
          creator_role_id?: string
          /** @description Specify what the default organization role is for the organization domains. */
          domains_default_role_id?: string
        }
      }
    }
    responses: {
      200: components['responses']['OrganizationSettings']
      402: components['responses']['PaymentRequired']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  CreateSvixApp: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['SvixURL']
      400: components['responses']['ClerkErrors']
    }
  }
  DeleteSvixApp: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Svix app was successfully deleted */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      400: components['responses']['ClerkErrors']
    }
  }
  GenerateSvixAuthURL: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['SvixURL']
      400: components['responses']['ClerkErrors']
    }
  }
  ListJWTTemplates: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['JWTTemplate.List']
    }
  }
  CreateJWTTemplate: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description JWT template name */
          name?: string
          /** @description JWT template claims in JSON format */
          claims?: Record<string, never>
          /** @description JWT token lifetime */
          lifetime?: number | null
          /** @description JWT token allowed clock skew */
          allowed_clock_skew?: number | null
          /** @description Whether a custom signing key/algorithm is also provided for this template */
          custom_signing_key?: boolean
          /** @description The custom signing algorithm to use when minting JWTs */
          signing_algorithm?: string | null
          /** @description The custom signing private key to use when minting JWTs */
          signing_key?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['JWTTemplate']
      400: components['responses']['ClerkErrors']
      402: components['responses']['PaymentRequired']
      422: components['responses']['UnprocessableEntity']
    }
  }
  GetJWTTemplate: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description JWT Template ID */
        template_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['JWTTemplate']
      404: components['responses']['ResourceNotFound']
    }
  }
  DeleteJWTTemplate: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description JWT Template ID */
        template_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpdateJWTTemplate: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the JWT template to update */
        template_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description JWT template name */
          name?: string
          /** @description JWT template claims in JSON format */
          claims?: Record<string, never>
          /** @description JWT token lifetime */
          lifetime?: number | null
          /** @description JWT token allowed clock skew */
          allowed_clock_skew?: number | null
          /** @description Whether a custom signing key/algorithm is also provided for this template */
          custom_signing_key?: boolean
          /** @description The custom signing algorithm to use when minting JWTs */
          signing_algorithm?: string | null
          /** @description The custom signing private key to use when minting JWTs */
          signing_key?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['JWTTemplate']
      400: components['responses']['ClerkErrors']
      402: components['responses']['PaymentRequired']
      422: components['responses']['UnprocessableEntity']
    }
  }
  ListOrganizations: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
        /** @description Flag to denote whether the member counts of each organization should be included in the response or not. */
        include_members_count?: boolean
        /** @description Returns organizations with ID, name, or slug that match the given query.
         *     Uses exact match for organization ID and partial match for name and slug. */
        query?: string
        /** @description Allows to return organizations in a particular order.
         *     At the moment, you can order the returned organizations either by their `name`, `created_at` or `members_count`.
         *     In order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.
         *     For example, if you want organizations to be returned in descending order according to their `created_at` property, you can use `-created_at`.
         *     If you don't use `+` or `-`, then `+` is implied.
         *     Defaults to `-created_at`. */
        order_by?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Organizations']
      400: components['responses']['ClerkErrors']
      403: components['responses']['AuthorizationInvalid']
      422: components['responses']['UnprocessableEntity']
    }
  }
  CreateOrganization: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The name of the new organization.
           *     May not contain URLs or HTML. */
          name: string
          /** @description The ID of the User who will become the administrator for the new organization */
          created_by: string
          /** @description Metadata saved on the organization, accessible only from the Backend API */
          private_metadata?: Record<string, never>
          /** @description Metadata saved on the organization, read-only from the Frontend API and fully accessible (read/write) from the Backend API */
          public_metadata?: Record<string, never>
          /** @description A slug for the new organization.
           *     Can contain only lowercase alphanumeric characters and the dash "-".
           *     Must be unique for the instance. */
          slug?: string
          /** @description The maximum number of memberships allowed for this organization */
          max_allowed_memberships?: number
          /** @description A custom date/time denoting _when_ the organization was created, specified in RFC3339 format (e.g. `2012-10-20T07:15:20.902Z`). */
          created_at?: string
        }
      }
    }
    responses: {
      200: components['responses']['Organization']
      400: components['responses']['ClerkErrors']
      403: components['responses']['AuthorizationInvalid']
      422: components['responses']['UnprocessableEntity']
    }
  }
  GetOrganization: {
    parameters: {
      query?: {
        /** @description Flag to denote whether or not the organization's members count should be included in the response. */
        include_members_count?: boolean
      }
      header?: never
      path: {
        /** @description The ID or slug of the organization */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Organization']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  DeleteOrganization: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization to delete */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpdateOrganization: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization to update */
        organization_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Metadata saved on the organization, that is visible to both your frontend and backend. */
          public_metadata?: Record<string, never>
          /** @description Metadata saved on the organization that is only visible to your backend. */
          private_metadata?: Record<string, never>
          /** @description The new name of the organization.
           *     May not contain URLs or HTML. */
          name?: string | null
          /** @description The new slug of the organization, which needs to be unique in the instance */
          slug?: string | null
          /** @description The maximum number of memberships allowed for this organization */
          max_allowed_memberships?: number | null
          /** @description If true, an admin can delete this organization with the Frontend API. */
          admin_delete_enabled?: boolean | null
          /** @description A custom date/time denoting _when_ the organization was created, specified in RFC3339 format (e.g. `2012-10-20T07:15:20.902Z`). */
          created_at?: string
        }
      }
    }
    responses: {
      200: components['responses']['Organization']
      402: components['responses']['ResourceNotFound']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  MergeOrganizationMetadata: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization for which metadata will be merged or updated */
        organization_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Metadata saved on the organization, that is visible to both your frontend and backend.
           *     The new object will be merged with the existing value. */
          public_metadata?: Record<string, never>
          /** @description Metadata saved on the organization that is only visible to your backend.
           *     The new object will be merged with the existing value. */
          private_metadata?: Record<string, never>
        }
      }
    }
    responses: {
      200: components['responses']['Organization']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  UploadOrganizationLogo: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization for which to upload a logo */
        organization_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'multipart/form-data': {
          /** @description The ID of the user that will be credited with the image upload. */
          uploader_user_id?: string
          /** Format: binary */
          file: string
        }
      }
    }
    responses: {
      200: components['responses']['OrganizationWithLogo']
      400: components['responses']['ClerkErrors']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
      413: components['responses']['ClerkErrors']
    }
  }
  DeleteOrganizationLogo: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization for which the logo will be deleted. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['Organization']
      404: components['responses']['ResourceNotFound']
    }
  }
  ListOrganizationInvitations: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
        /** @description Filter organization invitations based on their status */
        status?: 'pending' | 'accepted' | 'revoked'
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
      200: components['responses']['OrganizationInvitations']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
    }
  }
  CreateOrganizationInvitation: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization for which to send the invitation */
        organization_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The email address of the new member that is going to be invited to the organization */
          email_address: string
          /** @description The ID of the user that invites the new member to the organization.
           *     Must be an administrator in the organization. */
          inviter_user_id?: string | null
          /** @description The role of the new member in the organization */
          role: string
          /** @description Metadata saved on the organization invitation, read-only from the Frontend API and fully accessible (read/write) from the Backend API. */
          public_metadata?: Record<string, never>
          /** @description Metadata saved on the organization invitation, fully accessible (read/write) from the Backend API but not visible from the Frontend API. */
          private_metadata?: Record<string, never>
          /** @description Optional URL that the invitee will be redirected to once they accept the invitation by clicking the join link in the invitation email. */
          redirect_url?: string
        }
      }
    }
    responses: {
      200: components['responses']['OrganizationInvitation']
      400: components['responses']['ClerkErrors']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  CreateOrganizationInvitationBulk: {
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
        'application/json': {
          /** @description The email address of the new member that is going to be invited to the organization */
          email_address: string
          /** @description The ID of the user that invites the new member to the organization.
           *     Must be an administrator in the organization. */
          inviter_user_id?: string | null
          /** @description The role of the new member in the organization. */
          role: string
          /** @description Metadata saved on the organization invitation, read-only from the Frontend API and fully accessible (read/write) from the Backend API. */
          public_metadata?: Record<string, never>
          /** @description Metadata saved on the organization invitation, fully accessible (read/write) from the Backend API but not visible from the Frontend API. */
          private_metadata?: Record<string, never>
          /** @description Optional URL that the invitee will be redirected to once they accept the invitation by clicking the join link in the invitation email. */
          redirect_url?: string
        }[]
      }
    }
    responses: {
      200: components['responses']['OrganizationInvitations']
      400: components['responses']['ClerkErrors']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  ListPendingOrganizationInvitations: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
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
      200: components['responses']['OrganizationInvitations']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
    }
  }
  GetOrganizationInvitation: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
        /** @description The organization invitation ID. */
        invitation_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['OrganizationInvitation']
      400: components['responses']['ClerkErrors']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  RevokeOrganizationInvitation: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The organization ID. */
        organization_id: string
        /** @description The organization invitation ID. */
        invitation_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @description The ID of the user that revokes the invitation.
           *     Must be an administrator in the organization. */
          requesting_user_id?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['OrganizationInvitation']
      400: components['responses']['ClerkErrors']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  ListOrganizationMemberships: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
        /** @description Sorts organizations memberships by phone_number, email_address, created_at, first_name, last_name or username.
         *     By prepending one of those values with + or -,
         *     we can choose to sort in ascending (ASC) or descending (DESC) order." */
        order_by?: string
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
      200: components['responses']['OrganizationMemberships']
      401: components['responses']['AuthenticationInvalid']
      422: components['responses']['UnprocessableEntity']
    }
  }
  CreateOrganizationMembership: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization where the new membership will be created */
        organization_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The ID of the user that will be added as a member in the organization.
           *     The user needs to exist in the same instance as the organization and must not be a member of the given organization already. */
          user_id: string
          /** @description The role that the new member will have in the organization. */
          role: string
        }
      }
    }
    responses: {
      200: components['responses']['OrganizationMembership']
      400: components['responses']['ClerkErrors']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  DeleteOrganizationMembership: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization the membership belongs to */
        organization_id: string
        /** @description The ID of the user that this membership belongs to */
        user_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['OrganizationMembership']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpdateOrganizationMembership: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization the membership belongs to */
        organization_id: string
        /** @description The ID of the user that this membership belongs to */
        user_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The new role of the given membership. */
          role: string
        }
      }
    }
    responses: {
      200: components['responses']['OrganizationMembership']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  UpdateOrganizationMembershipMetadata: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization the membership belongs to */
        organization_id: string
        /** @description The ID of the user that this membership belongs to */
        user_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Metadata saved on the organization membership, that is visible to both your frontend and backend.
           *     The new object will be merged with the existing value. */
          public_metadata?: Record<string, never>
          /** @description Metadata saved on the organization membership that is only visible to your backend.
           *     The new object will be merged with the existing value. */
          private_metadata?: Record<string, never>
        }
      }
    }
    responses: {
      200: components['responses']['OrganizationMembership']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  ListOrganizationDomains: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
        /** @description Filter domains by their verification status. `true` or `false` */
        verified?: string
        /** @description Filter domains by their enrollment mode */
        enrollment_mode?: string
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
      200: components['responses']['OrganizationDomains']
      401: components['responses']['AuthenticationInvalid']
      422: components['responses']['UnprocessableEntity']
    }
  }
  CreateOrganizationDomain: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization where the new domain will be created. */
        organization_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The name of the new domain */
          name?: string
          /** @description The enrollment_mode for the new domain. This can be `automatic_invitation`, `automatic_suggestion` or `manual_invitation` */
          enrollment_mode?: string
          /** @description The status of domain's verification. Defaults to true */
          verified?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['OrganizationDomain']
      400: components['responses']['ClerkErrors']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  DeleteOrganizationDomain: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization the domain belongs to */
        organization_id: string
        /** @description The ID of the domain */
        domain_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpdateOrganizationDomain: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the organization the domain belongs to */
        organization_id: string
        /** @description The ID of the domain */
        domain_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The enrollment_mode for the new domain. This can be `automatic_invitation`, `automatic_suggestion` or `manual_invitation` */
          enrollment_mode?: string | null
          /** @description The status of the domain's verification */
          verified?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['OrganizationDomain']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  VerifyDomainProxy: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The ID of the domain that will be updated. */
          domain_id?: string
          /** @description The full URL of the proxy which will forward requests to the Clerk Frontend API for this domain. e.g. https://example.com/__clerk */
          proxy_url?: string
        }
      }
    }
    responses: {
      200: components['responses']['ProxyCheck']
      400: components['responses']['ClerkErrors']
      422: components['responses']['UnprocessableEntity']
    }
  }
  ListRedirectURLs: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['RedirectURL.List']
    }
  }
  CreateRedirectURL: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The full url value prefixed with `https://` or a custom scheme e.g. `"https://my-app.com/oauth-callback"` or `"my-app://oauth-callback"` */
          url?: string
        }
      }
    }
    responses: {
      200: components['responses']['RedirectURL']
      400: components['responses']['ClerkErrors']
      422: components['responses']['UnprocessableEntity']
    }
  }
  GetRedirectURL: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the redirect URL */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['RedirectURL']
      404: components['responses']['ResourceNotFound']
    }
  }
  DeleteRedirectURL: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the redirect URL */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      404: components['responses']['ResourceNotFound']
    }
  }
  CreateSignInToken: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The ID of the user that can use the newly created sign in token */
          user_id?: string
          /**
           * @description Optional parameter to specify the life duration of the sign in token in seconds.
           *     By default, the duration is 30 days.
           * @default 2592000
           */
          expires_in_seconds?: number
        }
      }
    }
    responses: {
      200: components['responses']['SignInToken']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  RevokeSignInToken: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the sign-in token to be revoked */
        sign_in_token_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['SignInToken']
      400: components['responses']['ClerkErrors']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpdateSignUp: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the sign-up to update */
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The ID of the guest attempting to sign up as used in your external systems or your previous authentication solution.
           *     This will be copied to the resulting user when the sign-up is completed. */
          external_id?: string | null
        }
      }
    }
    responses: {
      200: components['responses']['SignUp']
      403: components['responses']['AuthorizationInvalid']
    }
  }
  ListOAuthApplications: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['OAuthApplications']
      400: components['responses']['ClerkErrors']
      403: components['responses']['AuthorizationInvalid']
      422: components['responses']['UnprocessableEntity']
    }
  }
  CreateOAuthApplication: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The name of the new OAuth application */
          name: string
          /** @description The callback URL of the new OAuth application */
          callback_url: string
          /**
           * @description Define the allowed scopes for the new OAuth applications that dictate the user payload of the OAuth user info endpoint. Available scopes are `profile`, `email`, `public_metadata`, `private_metadata`. Provide the requested scopes as a string, separated by spaces.
           * @default profile email
           * @example profile email public_metadata
           */
          scopes?: string
          /** @description If true, this client is public and cannot securely store a client secret.
           *     Only the authorization code flow with proof key for code exchange (PKCE) may be used.
           *     Public clients cannot be updated to be confidential clients, and vice versa. */
          public?: boolean
        }
      }
    }
    responses: {
      200: components['responses']['OAuthApplicationWithSecret']
      400: components['responses']['ClerkErrors']
      403: components['responses']['AuthorizationInvalid']
      422: components['responses']['UnprocessableEntity']
    }
  }
  GetOAuthApplication: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the OAuth application */
        oauth_application_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['OAuthApplication']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  DeleteOAuthApplication: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the OAuth application to delete */
        oauth_application_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpdateOAuthApplication: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the OAuth application to update */
        oauth_application_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The new name of the OAuth application */
          name?: string
          /** @description The new callback URL of the OAuth application */
          callback_url?: string
          /**
           * @description Define the allowed scopes for the new OAuth applications that dictate the user payload of the OAuth user info endpoint. Available scopes are `profile`, `email`, `public_metadata`, `private_metadata`. Provide the requested scopes as a string, separated by spaces.
           * @default profile email
           * @example profile email public_metadata private_metadata
           */
          scopes?: string
        }
      }
    }
    responses: {
      200: components['responses']['OAuthApplication']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  RotateOAuthApplicationSecret: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the OAuth application for which to rotate the client secret */
        oauth_application_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['OAuthApplicationWithSecret']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  ListSAMLConnections: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['SAMLConnections']
      402: components['responses']['PaymentRequired']
      403: components['responses']['AuthorizationInvalid']
      422: components['responses']['UnprocessableEntity']
    }
  }
  CreateSAMLConnection: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The name to use as a label for this SAML Connection */
          name: string
          /** @description The domain of your organization. Sign in flows using an email with this domain, will use this SAML Connection. */
          domain: string
          /**
           * @description The IdP provider of the connection.
           * @enum {string}
           */
          provider:
            | 'saml_custom'
            | 'saml_okta'
            | 'saml_google'
            | 'saml_microsoft'
          /** @description The Entity ID as provided by the IdP */
          idp_entity_id?: string | null
          /** @description The Single-Sign On URL as provided by the IdP */
          idp_sso_url?: string | null
          /** @description The X.509 certificate as provided by the IdP */
          idp_certificate?: string | null
          /** @description The URL which serves the IdP metadata. If present, it takes priority over the corresponding individual properties */
          idp_metadata_url?: string | null
          /** @description The XML content of the IdP metadata file. If present, it takes priority over the corresponding individual properties */
          idp_metadata?: string | null
          /** @description Define the attribute name mapping between Identity Provider and Clerk's user properties */
          attribute_mapping?: {
            user_id?: string
            email_address?: string
            first_name?: string
            last_name?: string
          } | null
        }
      }
    }
    responses: {
      200: components['responses']['SAMLConnection']
      402: components['responses']['PaymentRequired']
      403: components['responses']['AuthorizationInvalid']
      422: components['responses']['UnprocessableEntity']
    }
  }
  GetSAMLConnection: {
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
      200: components['responses']['SAMLConnection']
      402: components['responses']['PaymentRequired']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  DeleteSAMLConnection: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the SAML Connection to delete */
        saml_connection_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['DeletedObject']
      402: components['responses']['PaymentRequired']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
    }
  }
  UpdateSAMLConnection: {
    parameters: {
      query?: never
      header?: never
      path: {
        /** @description The ID of the SAML Connection to update */
        saml_connection_id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description The name of the new SAML Connection */
          name?: string | null
          /** @description The domain to use for the new SAML Connection */
          domain?: string | null
          /** @description The entity id as provided by the IdP */
          idp_entity_id?: string | null
          /** @description The SSO url as provided by the IdP */
          idp_sso_url?: string | null
          /** @description The x509 certificated as provided by the IdP */
          idp_certificate?: string | null
          /** @description The URL which serves the IdP metadata. If present, it takes priority over the corresponding individual properties and replaces them */
          idp_metadata_url?: string | null
          /** @description The XML content of the IdP metadata file. If present, it takes priority over the corresponding individual properties */
          idp_metadata?: string | null
          /** @description Define the atrtibute name mapping between Identity Provider and Clerk's user properties */
          attribute_mapping?: {
            user_id?: string
            email_address?: string
            first_name?: string
            last_name?: string
          } | null
          /** @description Activate or de-activate the SAML Connection */
          active?: boolean | null
          /** @description Controls whether to update the user's attributes in each sign-in */
          sync_user_attributes?: boolean | null
          /** @description Allow users with an email address subdomain to use this connection in order to authenticate */
          allow_subdomains?: boolean | null
          /** @description Enable or deactivate IdP-initiated flows */
          allow_idp_initiated?: boolean | null
          /** @description Enable or deactivate additional identifications */
          disable_additional_identifications?: boolean | null
        }
      }
    }
    responses: {
      200: components['responses']['SAMLConnection']
      402: components['responses']['PaymentRequired']
      403: components['responses']['AuthorizationInvalid']
      404: components['responses']['ResourceNotFound']
      422: components['responses']['UnprocessableEntity']
    }
  }
  CreateTestingToken: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['TestingToken']
      /** @description The instance is a production instance, but this endpoint is only available in development instances. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  InstanceGetOrganizationMemberships: {
    parameters: {
      query?: {
        /** @description Applies a limit to the number of results returned.
         *     Can be used for paginating the results together with `offset`. */
        limit?: components['parameters']['LimitParameter']
        /** @description Skip the first `offset` results when paginating.
         *     Needs to be an integer greater or equal to zero.
         *     To be used in conjunction with `limit`. */
        offset?: components['parameters']['OffsetParameter']
        /** @description Sorts organizations memberships by phone_number, email_address, created_at, first_name, last_name or username.
         *     By prepending one of those values with + or -,
         *     we can choose to sort in ascending (ASC) or descending (DESC) order. */
        order_by?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: components['responses']['OrganizationMemberships']
      400: components['responses']['ClerkErrors']
      401: components['responses']['AuthenticationInvalid']
      422: components['responses']['UnprocessableEntity']
      500: components['responses']['ClerkErrors']
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
