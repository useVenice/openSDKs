export interface paths {
  '/gmail/v1/users/{userId}/drafts': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the drafts in the user's mailbox. */
    get: operations['gmail.users.drafts.list']
    put?: never
    /** @description Creates a new draft with the `DRAFT` label. */
    post: operations['gmail.users.drafts.create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/drafts/send': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers. */
    post: operations['gmail.users.drafts.send']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/drafts/{id}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the specified draft. */
    get: operations['gmail.users.drafts.get']
    /** @description Replaces a draft's content. */
    put: operations['gmail.users.drafts.update']
    post?: never
    /** @description Immediately and permanently deletes the specified draft. Does not simply trash it. */
    delete: operations['gmail.users.drafts.delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/history': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`). */
    get: operations['gmail.users.history.list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/labels': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists all labels in the user's mailbox. */
    get: operations['gmail.users.labels.list']
    put?: never
    /** @description Creates a new label. */
    post: operations['gmail.users.labels.create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/labels/{id}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the specified label. */
    get: operations['gmail.users.labels.get']
    /** @description Updates the specified label. */
    put: operations['gmail.users.labels.update']
    post?: never
    /** @description Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to. */
    delete: operations['gmail.users.labels.delete']
    options?: never
    head?: never
    /** @description Patch the specified label. */
    patch: operations['gmail.users.labels.patch']
    trace?: never
  }
  '/gmail/v1/users/{userId}/messages': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the messages in the user's mailbox. */
    get: operations['gmail.users.messages.list']
    put?: never
    /** @description Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message. */
    post: operations['gmail.users.messages.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/messages/batchDelete': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all. */
    post: operations['gmail.users.messages.batchDelete']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/messages/batchModify': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Modifies the labels on the specified messages. */
    post: operations['gmail.users.messages.batchModify']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/messages/import': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message. Note: This function doesn't trigger forwarding rules or filters set up by the user. */
    post: operations['gmail.users.messages.import']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/messages/send': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers. For example usage, see [Sending email](https://developers.google.com/gmail/api/guides/sending). */
    post: operations['gmail.users.messages.send']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/messages/{id}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the specified message. */
    get: operations['gmail.users.messages.get']
    put?: never
    post?: never
    /** @description Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead. */
    delete: operations['gmail.users.messages.delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/messages/{id}/modify': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Modifies the labels on the specified message. */
    post: operations['gmail.users.messages.modify']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/messages/{id}/trash': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Moves the specified message to the trash. */
    post: operations['gmail.users.messages.trash']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/messages/{id}/untrash': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Removes the specified message from the trash. */
    post: operations['gmail.users.messages.untrash']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the specified message attachment. */
    get: operations['gmail.users.messages.attachments.get']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/profile': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the current user's Gmail profile. */
    get: operations['gmail.users.getProfile']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/autoForwarding': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the auto-forwarding setting for the specified account. */
    get: operations['gmail.users.settings.getAutoForwarding']
    /** @description Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority. */
    put: operations['gmail.users.settings.updateAutoForwarding']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/cse/identities': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the client-side encrypted identities for an authenticated user. */
    get: operations['gmail.users.settings.cse.identities.list']
    put?: never
    /** @description Creates and configures a client-side encryption identity that's authorized to send mail from the user account. Google publishes the S/MIME certificate to a shared domain-wide directory so that people within a Google Workspace organization can encrypt and send mail to the identity. */
    post: operations['gmail.users.settings.cse.identities.create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Retrieves a client-side encryption identity configuration. */
    get: operations['gmail.users.settings.cse.identities.get']
    put?: never
    post?: never
    /** @description Deletes a client-side encryption identity. The authenticated user can no longer use the identity to send encrypted messages. You cannot restore the identity after you delete it. Instead, use the CreateCseIdentity method to create another identity with the same configuration. */
    delete: operations['gmail.users.settings.cse.identities.delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/cse/identities/{emailAddress}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
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
    /** @description Associates a different key pair with an existing client-side encryption identity. The updated key pair must validate against Google's [S/MIME certificate profiles](https://support.google.com/a/answer/7300887). */
    patch: operations['gmail.users.settings.cse.identities.patch']
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/cse/keypairs': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists client-side encryption key pairs for an authenticated user. */
    get: operations['gmail.users.settings.cse.keypairs.list']
    put?: never
    /** @description Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user. */
    post: operations['gmail.users.settings.cse.keypairs.create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Retrieves an existing client-side encryption key pair. */
    get: operations['gmail.users.settings.cse.keypairs.get']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Turns off a client-side encryption key pair. The authenticated user can no longer use the key pair to decrypt incoming CSE message texts or sign outgoing CSE mail. To regain access, use the EnableCseKeyPair to turn on the key pair. After 30 days, you can permanently delete the key pair by using the ObliterateCseKeyPair method. */
    post: operations['gmail.users.settings.cse.keypairs.disable']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Turns on a client-side encryption key pair that was turned off. The key pair becomes active again for any associated client-side encryption identities. */
    post: operations['gmail.users.settings.cse.keypairs.enable']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Deletes a client-side encryption key pair permanently and immediately. You can only permanently delete key pairs that have been turned off for more than 30 days. To turn off a key pair, use the DisableCseKeyPair method. Gmail can't restore or decrypt any messages that were encrypted by an obliterated key. Authenticated users and Google Workspace administrators lose access to reading the encrypted messages. */
    post: operations['gmail.users.settings.cse.keypairs.obliterate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/delegates': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority. */
    get: operations['gmail.users.settings.delegates.list']
    put?: never
    /** @description Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same Google Workspace organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a Google Workspace organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority. */
    post: operations['gmail.users.settings.delegates.create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/delegates/{delegateEmail}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority. */
    get: operations['gmail.users.settings.delegates.get']
    put?: never
    post?: never
    /** @description Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority. */
    delete: operations['gmail.users.settings.delegates.delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/filters': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the message filters of a Gmail user. */
    get: operations['gmail.users.settings.filters.list']
    put?: never
    /** @description Creates a filter. Note: you can only create a maximum of 1,000 filters. */
    post: operations['gmail.users.settings.filters.create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/filters/{id}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a filter. */
    get: operations['gmail.users.settings.filters.get']
    put?: never
    post?: never
    /** @description Immediately and permanently deletes the specified filter. */
    delete: operations['gmail.users.settings.filters.delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/forwardingAddresses': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the forwarding addresses for the specified account. */
    get: operations['gmail.users.settings.forwardingAddresses.list']
    put?: never
    /** @description Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority. */
    post: operations['gmail.users.settings.forwardingAddresses.create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the specified forwarding address. */
    get: operations['gmail.users.settings.forwardingAddresses.get']
    put?: never
    post?: never
    /** @description Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority. */
    delete: operations['gmail.users.settings.forwardingAddresses.delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/imap': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets IMAP settings. */
    get: operations['gmail.users.settings.getImap']
    /** @description Updates IMAP settings. */
    put: operations['gmail.users.settings.updateImap']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/language': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets language settings. */
    get: operations['gmail.users.settings.getLanguage']
    /** @description Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead. */
    put: operations['gmail.users.settings.updateLanguage']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/pop': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets POP settings. */
    get: operations['gmail.users.settings.getPop']
    /** @description Updates POP settings. */
    put: operations['gmail.users.settings.updatePop']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/sendAs': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases. */
    get: operations['gmail.users.settings.sendAs.list']
    put?: never
    /** @description Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority. */
    post: operations['gmail.users.settings.sendAs.create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection. */
    get: operations['gmail.users.settings.sendAs.get']
    /** @description Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority. */
    put: operations['gmail.users.settings.sendAs.update']
    post?: never
    /** @description Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority. */
    delete: operations['gmail.users.settings.sendAs.delete']
    options?: never
    head?: never
    /** @description Patch the specified send-as alias. */
    patch: operations['gmail.users.settings.sendAs.patch']
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists S/MIME configs for the specified send-as alias. */
    get: operations['gmail.users.settings.sendAs.smimeInfo.list']
    put?: never
    /** @description Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key. */
    post: operations['gmail.users.settings.sendAs.smimeInfo.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the specified S/MIME config for the specified send-as alias. */
    get: operations['gmail.users.settings.sendAs.smimeInfo.get']
    put?: never
    post?: never
    /** @description Deletes the specified S/MIME config for the specified send-as alias. */
    delete: operations['gmail.users.settings.sendAs.smimeInfo.delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Sets the default S/MIME config for the specified send-as alias. */
    post: operations['gmail.users.settings.sendAs.smimeInfo.setDefault']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority. */
    post: operations['gmail.users.settings.sendAs.verify']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/settings/vacation': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets vacation responder settings. */
    get: operations['gmail.users.settings.getVacation']
    /** @description Updates vacation responder settings. */
    put: operations['gmail.users.settings.updateVacation']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/stop': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Stop receiving push notifications for the given user mailbox. */
    post: operations['gmail.users.stop']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/threads': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Lists the threads in the user's mailbox. */
    get: operations['gmail.users.threads.list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/threads/{id}': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets the specified thread. */
    get: operations['gmail.users.threads.get']
    put?: never
    post?: never
    /** @description Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead. */
    delete: operations['gmail.users.threads.delete']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/threads/{id}/modify': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Modifies the labels applied to the thread. This applies to all messages in the thread. */
    post: operations['gmail.users.threads.modify']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/threads/{id}/trash': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash. */
    post: operations['gmail.users.threads.trash']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/threads/{id}/untrash': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash. */
    post: operations['gmail.users.threads.untrash']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gmail/v1/users/{userId}/watch': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Set up or update a push notification watch on the given user mailbox. */
    post: operations['gmail.users.watch']
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
    /** @description Auto-forwarding settings for an account. */
    AutoForwarding: {
      /**
       * @description The state that a message should be left in after it has been forwarded.
       * @enum {string}
       */
      disposition?:
        | 'dispositionUnspecified'
        | 'leaveInInbox'
        | 'archive'
        | 'trash'
        | 'markRead'
      /** @description Email address to which all incoming messages are forwarded. This email address must be a verified member of the forwarding addresses. */
      emailAddress?: string
      /** @description Whether all incoming mail is automatically forwarded to another address. */
      enabled?: boolean
    }
    BatchDeleteMessagesRequest: {
      /** @description The IDs of the messages to delete. */
      ids?: string[]
    }
    BatchModifyMessagesRequest: {
      /** @description A list of label IDs to add to messages. */
      addLabelIds?: string[]
      /** @description The IDs of the messages to modify. There is a limit of 1000 ids per request. */
      ids?: string[]
      /** @description A list of label IDs to remove from messages. */
      removeLabelIds?: string[]
    }
    /** @description The client-side encryption (CSE) configuration for the email address of an authenticated user. Gmail uses CSE configurations to save drafts of client-side encrypted email messages, and to sign and send encrypted email messages. */
    CseIdentity: {
      /** @description The email address for the sending identity. The email address must be the primary email address of the authenticated user. */
      emailAddress?: string
      /** @description If a key pair is associated, the identifier of the key pair, CseKeyPair. */
      primaryKeyPairId?: string
    }
    /** @description A client-side encryption S/MIME key pair, which is comprised of a public key, its certificate chain, and metadata for its paired private key. Gmail uses the key pair to complete the following tasks: - Sign outgoing client-side encrypted messages. - Save and reopen drafts of client-side encrypted messages. - Save and reopen sent messages. - Decrypt incoming or archived S/MIME messages. */
    CseKeyPair: {
      /**
       * Format: google-datetime
       * @description Output only. If a key pair is set to `DISABLED`, the time that the key pair's state changed from `ENABLED` to `DISABLED`. This field is present only when the key pair is in state `DISABLED`.
       */
      readonly disableTime?: string
      /**
       * @description Output only. The current state of the key pair.
       * @enum {string}
       */
      readonly enablementState?: 'stateUnspecified' | 'enabled' | 'disabled'
      /** @description Output only. The immutable ID for the client-side encryption S/MIME key pair. */
      readonly keyPairId?: string
      /** @description Output only. The public key and its certificate chain, in [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) format. */
      readonly pem?: string
      /** @description Input only. The public key and its certificate chain. The chain must be in [PKCS#7](https://en.wikipedia.org/wiki/PKCS_7) format and use PEM encoding and ASCII armor. */
      pkcs7?: string
      /** @description Metadata for instances of this key pair's private key. */
      privateKeyMetadata?: components['schemas']['CsePrivateKeyMetadata'][]
      /** @description Output only. The email address identities that are specified on the leaf certificate. */
      readonly subjectEmailAddresses?: string[]
    }
    /** @description Metadata for a private key instance. */
    CsePrivateKeyMetadata: {
      /** @description Metadata for a private key instance managed by an external key access control list service. */
      kaclsKeyMetadata?: components['schemas']['KaclsKeyMetadata']
      /** @description Output only. The immutable ID for the private key metadata instance. */
      readonly privateKeyMetadataId?: string
    }
    /** @description Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator's account. See "Set up mail delegation" for more information about delegates. */
    Delegate: {
      /** @description The email address of the delegate. */
      delegateEmail?: string
      /**
       * @description Indicates whether this address has been verified and can act as a delegate for the account. Read-only.
       * @enum {string}
       */
      verificationStatus?:
        | 'verificationStatusUnspecified'
        | 'accepted'
        | 'pending'
        | 'rejected'
        | 'expired'
    }
    /** @description Requests to turn off a client-side encryption key pair. */
    DisableCseKeyPairRequest: Record<string, never>
    /** @description A draft email in the user's mailbox. */
    Draft: {
      /** @description The immutable ID of the draft. */
      id?: string
      /** @description The message content of the draft. */
      message?: components['schemas']['Message']
    }
    /** @description Requests to turn on a client-side encryption key pair. */
    EnableCseKeyPairRequest: Record<string, never>
    /** @description Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread. */
    Filter: {
      /** @description Action that the filter performs. */
      action?: components['schemas']['FilterAction']
      /** @description Matching criteria for the filter. */
      criteria?: components['schemas']['FilterCriteria']
      /** @description The server assigned ID of the filter. */
      id?: string
    }
    /** @description A set of actions to perform on a message. */
    FilterAction: {
      /** @description List of labels to add to the message. */
      addLabelIds?: string[]
      /** @description Email address that the message should be forwarded to. */
      forward?: string
      /** @description List of labels to remove from the message. */
      removeLabelIds?: string[]
    }
    /** @description Message matching criteria. */
    FilterCriteria: {
      /** @description Whether the response should exclude chats. */
      excludeChats?: boolean
      /** @description The sender's display name or email address. */
      from?: string
      /** @description Whether the message has any attachment. */
      hasAttachment?: boolean
      /** @description Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. */
      negatedQuery?: string
      /** @description Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. */
      query?: string
      /**
       * Format: int32
       * @description The size of the entire RFC822 message in bytes, including all headers and attachments.
       */
      size?: number
      /**
       * @description How the message size in bytes should be in relation to the size field.
       * @enum {string}
       */
      sizeComparison?: 'unspecified' | 'smaller' | 'larger'
      /** @description Case-insensitive phrase found in the message's subject. Trailing and leading whitespace are be trimmed and adjacent spaces are collapsed. */
      subject?: string
      /** @description The recipient's display name or email address. Includes recipients in the "to", "cc", and "bcc" header fields. You can use simply the local part of the email address. For example, "example" and "example@" both match "example@gmail.com". This field is case-insensitive. */
      to?: string
    }
    /** @description Settings for a forwarding address. */
    ForwardingAddress: {
      /** @description An email address to which messages can be forwarded. */
      forwardingEmail?: string
      /**
       * @description Indicates whether this address has been verified and is usable for forwarding. Read-only.
       * @enum {string}
       */
      verificationStatus?:
        | 'verificationStatusUnspecified'
        | 'accepted'
        | 'pending'
    }
    /** @description A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways. */
    History: {
      /**
       * Format: uint64
       * @description The mailbox sequence ID.
       */
      id?: string
      /** @description Labels added to messages in this history record. */
      labelsAdded?: components['schemas']['HistoryLabelAdded'][]
      /** @description Labels removed from messages in this history record. */
      labelsRemoved?: components['schemas']['HistoryLabelRemoved'][]
      /** @description List of messages changed in this history record. The fields for specific change types, such as `messagesAdded` may duplicate messages in this field. We recommend using the specific change-type fields instead of this. */
      messages?: components['schemas']['Message'][]
      /** @description Messages added to the mailbox in this history record. */
      messagesAdded?: components['schemas']['HistoryMessageAdded'][]
      /** @description Messages deleted (not Trashed) from the mailbox in this history record. */
      messagesDeleted?: components['schemas']['HistoryMessageDeleted'][]
    }
    HistoryLabelAdded: {
      /** @description Label IDs added to the message. */
      labelIds?: string[]
      message?: components['schemas']['Message']
    }
    HistoryLabelRemoved: {
      /** @description Label IDs removed from the message. */
      labelIds?: string[]
      message?: components['schemas']['Message']
    }
    HistoryMessageAdded: {
      message?: components['schemas']['Message']
    }
    HistoryMessageDeleted: {
      message?: components['schemas']['Message']
    }
    /** @description IMAP settings for an account. */
    ImapSettings: {
      /** @description If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail will wait for an update from the client before expunging messages marked as deleted. */
      autoExpunge?: boolean
      /** @description Whether IMAP is enabled for the account. */
      enabled?: boolean
      /**
       * @description The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder.
       * @enum {string}
       */
      expungeBehavior?:
        | 'expungeBehaviorUnspecified'
        | 'archive'
        | 'trash'
        | 'deleteForever'
      /**
       * Format: int32
       * @description An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is interpreted to mean that there is no limit.
       */
      maxFolderSize?: number
    }
    /** @description Metadata for private keys managed by an external key access control list service. For details about managing key access, see [Google Workspace CSE API Reference](https://developers.google.com/workspace/cse/reference). */
    KaclsKeyMetadata: {
      /** @description Opaque data generated and used by the key access control list service. Maximum size: 8 KiB. */
      kaclsData?: string
      /** @description The URI of the key access control list service that manages the private key. */
      kaclsUri?: string
    }
    /** @description Labels are used to categorize messages and threads within the user's mailbox. The maximum number of labels supported for a user's mailbox is 10,000. */
    Label: {
      /** @description The color to assign to the label. Color is only available for labels that have their `type` set to `user`. */
      color?: components['schemas']['LabelColor']
      /** @description The immutable ID of the label. */
      id?: string
      /**
       * @description The visibility of the label in the label list in the Gmail web interface.
       * @enum {string}
       */
      labelListVisibility?: 'labelShow' | 'labelShowIfUnread' | 'labelHide'
      /**
       * @description The visibility of messages with this label in the message list in the Gmail web interface.
       * @enum {string}
       */
      messageListVisibility?: 'show' | 'hide'
      /**
       * Format: int32
       * @description The total number of messages with the label.
       */
      messagesTotal?: number
      /**
       * Format: int32
       * @description The number of unread messages with the label.
       */
      messagesUnread?: number
      /** @description The display name of the label. */
      name?: string
      /**
       * Format: int32
       * @description The total number of threads with the label.
       */
      threadsTotal?: number
      /**
       * Format: int32
       * @description The number of unread threads with the label.
       */
      threadsUnread?: number
      /**
       * @description The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the `INBOX` and `UNREAD` labels from messages and threads, but cannot apply or remove the `DRAFTS` or `SENT` labels from messages or threads.
       * @enum {string}
       */
      type?: 'system' | 'user'
    }
    LabelColor: {
      /** @description The background color represented as hex string #RRGGBB (ex #000000). This field is required in order to set the color of a label. Only the following predefined set of color values are allowed: \#000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, \#fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, \#f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, \#efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, \#e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, \#cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, \#ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, \#822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c \#464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, \#711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, \#594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, \#c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, \#662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765 */
      backgroundColor?: string
      /** @description The text color of the label, represented as hex string. This field is required in order to set the color of a label. Only the following predefined set of color values are allowed: \#000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, \#fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, \#f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, \#efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, \#e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, \#cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, \#ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, \#822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c \#464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, \#711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, \#594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, \#c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, \#662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765 */
      textColor?: string
    }
    /** @description Language settings for an account. These settings correspond to the "Language settings" feature in the web interface. */
    LanguageSettings: {
      /** @description The language to display Gmail in, formatted as an RFC 3066 Language Tag (for example `en-GB`, `fr` or `ja` for British English, French, or Japanese respectively). The set of languages supported by Gmail evolves over time, so please refer to the "Language" dropdown in the Gmail settings for all available options, as described in the language settings help article. A table of sample values is also provided in the Managing Language Settings guide Not all Gmail clients can display the same set of languages. In the case that a user's display language is not available for use on a particular client, said client automatically chooses to display in the closest supported variant (or a reasonable default). */
      displayLanguage?: string
    }
    ListCseIdentitiesResponse: {
      /** @description One page of the list of CSE identities configured for the user. */
      cseIdentities?: components['schemas']['CseIdentity'][]
      /** @description Pagination token to be passed to a subsequent ListCseIdentities call in order to retrieve the next page of identities. If this value is not returned or is the empty string, then no further pages remain. */
      nextPageToken?: string
    }
    ListCseKeyPairsResponse: {
      /** @description One page of the list of CSE key pairs installed for the user. */
      cseKeyPairs?: components['schemas']['CseKeyPair'][]
      /** @description Pagination token to be passed to a subsequent ListCseKeyPairs call in order to retrieve the next page of key pairs. If this value is not returned, then no further pages remain. */
      nextPageToken?: string
    }
    /** @description Response for the ListDelegates method. */
    ListDelegatesResponse: {
      /** @description List of the user's delegates (with any verification status). If an account doesn't have delegates, this field doesn't appear. */
      delegates?: components['schemas']['Delegate'][]
    }
    ListDraftsResponse: {
      /** @description List of drafts. Note that the `Message` property in each `Draft` resource only contains an `id` and a `threadId`. The messages.get method can fetch additional message details. */
      drafts?: components['schemas']['Draft'][]
      /** @description Token to retrieve the next page of results in the list. */
      nextPageToken?: string
      /**
       * Format: uint32
       * @description Estimated total number of results.
       */
      resultSizeEstimate?: number
    }
    /** @description Response for the ListFilters method. */
    ListFiltersResponse: {
      /** @description List of a user's filters. */
      filter?: components['schemas']['Filter'][]
    }
    /** @description Response for the ListForwardingAddresses method. */
    ListForwardingAddressesResponse: {
      /** @description List of addresses that may be used for forwarding. */
      forwardingAddresses?: components['schemas']['ForwardingAddress'][]
    }
    ListHistoryResponse: {
      /** @description List of history records. Any `messages` contained in the response will typically only have `id` and `threadId` fields populated. */
      history?: components['schemas']['History'][]
      /**
       * Format: uint64
       * @description The ID of the mailbox's current history record.
       */
      historyId?: string
      /** @description Page token to retrieve the next page of results in the list. */
      nextPageToken?: string
    }
    ListLabelsResponse: {
      /** @description List of labels. Note that each label resource only contains an `id`, `name`, `messageListVisibility`, `labelListVisibility`, and `type`. The labels.get method can fetch additional label details. */
      labels?: components['schemas']['Label'][]
    }
    ListMessagesResponse: {
      /** @description List of messages. Note that each message resource contains only an `id` and a `threadId`. Additional message details can be fetched using the messages.get method. */
      messages?: components['schemas']['Message'][]
      /** @description Token to retrieve the next page of results in the list. */
      nextPageToken?: string
      /**
       * Format: uint32
       * @description Estimated total number of results.
       */
      resultSizeEstimate?: number
    }
    /** @description Response for the ListSendAs method. */
    ListSendAsResponse: {
      /** @description List of send-as aliases. */
      sendAs?: components['schemas']['SendAs'][]
    }
    ListSmimeInfoResponse: {
      /** @description List of SmimeInfo. */
      smimeInfo?: components['schemas']['SmimeInfo'][]
    }
    ListThreadsResponse: {
      /** @description Page token to retrieve the next page of results in the list. */
      nextPageToken?: string
      /**
       * Format: uint32
       * @description Estimated total number of results.
       */
      resultSizeEstimate?: number
      /** @description List of threads. Note that each thread resource does not contain a list of `messages`. The list of `messages` for a given thread can be fetched using the threads.get method. */
      threads?: components['schemas']['Thread'][]
    }
    /** @description An email message. */
    Message: {
      /**
       * Format: uint64
       * @description The ID of the last history record that modified this message.
       */
      historyId?: string
      /** @description The immutable ID of the message. */
      id?: string
      /**
       * Format: int64
       * @description The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the `Date` header. However, for API-migrated mail, it can be configured by client to be based on the `Date` header.
       */
      internalDate?: string
      /** @description List of IDs of labels applied to this message. */
      labelIds?: string[]
      /** @description The parsed email structure in the message parts. */
      payload?: components['schemas']['MessagePart']
      /**
       * Format: byte
       * @description The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in `messages.get` and `drafts.get` responses when the `format=RAW` parameter is supplied.
       */
      raw?: string
      /**
       * Format: int32
       * @description Estimated size in bytes of the message.
       */
      sizeEstimate?: number
      /** @description A short part of the message text. */
      snippet?: string
      /** @description The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: 1. The requested `threadId` must be specified on the `Message` or `Draft.Message` you supply with your request. 2. The `References` and `In-Reply-To` headers must be set in compliance with the [RFC 2822](https://tools.ietf.org/html/rfc2822) standard. 3. The `Subject` headers must match.  */
      threadId?: string
    }
    /** @description A single MIME message part. */
    MessagePart: {
      /** @description The message part body for this part, which may be empty for container MIME message parts. */
      body?: components['schemas']['MessagePartBody']
      /** @description The filename of the attachment. Only present if this message part represents an attachment. */
      filename?: string
      /** @description List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822 email headers such as `To`, `From`, and `Subject`. */
      headers?: components['schemas']['MessagePartHeader'][]
      /** @description The MIME type of the message part. */
      mimeType?: string
      /** @description The immutable ID of the message part. */
      partId?: string
      /** @description The child MIME message parts of this part. This only applies to container MIME message parts, for example `multipart/*`. For non- container MIME message part types, such as `text/plain`, this field is empty. For more information, see RFC 1521. */
      parts?: components['schemas']['MessagePart'][]
    }
    /** @description The body of a single MIME message part. */
    MessagePartBody: {
      /** @description When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request. When not present, the entire content of the message part body is contained in the data field. */
      attachmentId?: string
      /**
       * Format: byte
       * @description The body data of a MIME message part as a base64url encoded string. May be empty for MIME container types that have no message body or when the body data is sent as a separate attachment. An attachment ID is present if the body data is contained in a separate attachment.
       */
      data?: string
      /**
       * Format: int32
       * @description Number of bytes for the message part data (encoding notwithstanding).
       */
      size?: number
    }
    MessagePartHeader: {
      /** @description The name of the header before the `:` separator. For example, `To`. */
      name?: string
      /** @description The value of the header after the `:` separator. For example, `someuser@example.com`. */
      value?: string
    }
    ModifyMessageRequest: {
      /** @description A list of IDs of labels to add to this message. You can add up to 100 labels with each update. */
      addLabelIds?: string[]
      /** @description A list IDs of labels to remove from this message. You can remove up to 100 labels with each update. */
      removeLabelIds?: string[]
    }
    ModifyThreadRequest: {
      /** @description A list of IDs of labels to add to this thread. You can add up to 100 labels with each update. */
      addLabelIds?: string[]
      /** @description A list of IDs of labels to remove from this thread. You can remove up to 100 labels with each update. */
      removeLabelIds?: string[]
    }
    /** @description Request to obliterate a CSE key pair. */
    ObliterateCseKeyPairRequest: Record<string, never>
    /** @description POP settings for an account. */
    PopSettings: {
      /**
       * @description The range of messages which are accessible via POP.
       * @enum {string}
       */
      accessWindow?:
        | 'accessWindowUnspecified'
        | 'disabled'
        | 'fromNowOn'
        | 'allMail'
      /**
       * @description The action that will be executed on a message after it has been fetched via POP.
       * @enum {string}
       */
      disposition?:
        | 'dispositionUnspecified'
        | 'leaveInInbox'
        | 'archive'
        | 'trash'
        | 'markRead'
    }
    /** @description Profile for a Gmail user. */
    Profile: {
      /** @description The user's email address. */
      emailAddress?: string
      /**
       * Format: uint64
       * @description The ID of the mailbox's current history record.
       */
      historyId?: string
      /**
       * Format: int32
       * @description The total number of messages in the mailbox.
       */
      messagesTotal?: number
      /**
       * Format: int32
       * @description The total number of threads in the mailbox.
       */
      threadsTotal?: number
    }
    /** @description Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface. */
    SendAs: {
      /** @description A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is empty, Gmail will populate the "From:" header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail. */
      displayName?: string
      /** @description Whether this address is selected as the default "From:" address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is `true`. Changing this from `false` to `true` for an address will result in this field becoming `false` for the other previous default address. */
      isDefault?: boolean
      /** @description Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only. */
      isPrimary?: boolean
      /** @description An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty, Gmail will not generate a "Reply-To:" header. */
      replyToAddress?: string
      /** @description The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all operations except create. */
      sendAsEmail?: string
      /** @description An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. This signature is added to new emails only. */
      signature?: string
      /** @description An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail's servers to the destination SMTP service. This setting only applies to custom "from" aliases. */
      smtpMsa?: components['schemas']['SmtpMsa']
      /** @description Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom "from" aliases. */
      treatAsAlias?: boolean
      /**
       * @description Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom "from" aliases.
       * @enum {string}
       */
      verificationStatus?:
        | 'verificationStatusUnspecified'
        | 'accepted'
        | 'pending'
    }
    /** @description An S/MIME email config. */
    SmimeInfo: {
      /** @description Encrypted key password, when key is encrypted. */
      encryptedKeyPassword?: string
      /**
       * Format: int64
       * @description When the certificate expires (in milliseconds since epoch).
       */
      expiration?: string
      /** @description The immutable ID for the SmimeInfo. */
      id?: string
      /** @description Whether this SmimeInfo is the default one for this user's send-as address. */
      isDefault?: boolean
      /** @description The S/MIME certificate issuer's common name. */
      issuerCn?: string
      /** @description PEM formatted X509 concatenated certificate string (standard base64 encoding). Format used for returning key, which includes public key as well as certificate chain (not private key). */
      pem?: string
      /**
       * Format: byte
       * @description PKCS#12 format containing a single private/public key pair and certificate chain. This format is only accepted from client for creating a new SmimeInfo and is never returned, because the private key is not intended to be exported. PKCS#12 may be encrypted, in which case encryptedKeyPassword should be set appropriately.
       */
      pkcs12?: string
    }
    /** @description Configuration for communication with an SMTP service. */
    SmtpMsa: {
      /** @description The hostname of the SMTP service. Required. */
      host?: string
      /** @description The password that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses. */
      password?: string
      /**
       * Format: int32
       * @description The port of the SMTP service. Required.
       */
      port?: number
      /**
       * @description The protocol that will be used to secure communication with the SMTP service. Required.
       * @enum {string}
       */
      securityMode?: 'securityModeUnspecified' | 'none' | 'ssl' | 'starttls'
      /** @description The username that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses. */
      username?: string
    }
    /** @description A collection of messages representing a conversation. */
    Thread: {
      /**
       * Format: uint64
       * @description The ID of the last history record that modified this thread.
       */
      historyId?: string
      /** @description The unique ID of the thread. */
      id?: string
      /** @description The list of messages in the thread. */
      messages?: components['schemas']['Message'][]
      /** @description A short part of the message text. */
      snippet?: string
    }
    /** @description Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web interface. */
    VacationSettings: {
      /** @description Flag that controls whether Gmail automatically replies to messages. */
      enableAutoReply?: boolean
      /**
       * Format: int64
       * @description An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.
       */
      endTime?: string
      /** @description Response body in HTML format. Gmail will sanitize the HTML before storing it. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used. */
      responseBodyHtml?: string
      /** @description Response body in plain text format. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used. */
      responseBodyPlainText?: string
      /** @description Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty. */
      responseSubject?: string
      /** @description Flag that determines whether responses are sent to recipients who are not in the user's list of contacts. */
      restrictToContacts?: boolean
      /** @description Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only available for Google Workspace users. */
      restrictToDomain?: boolean
      /**
       * Format: int64
       * @description An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.
       */
      startTime?: string
    }
    /** @description Set up or update a new push notification watch on this user's mailbox. */
    WatchRequest: {
      /**
       * @description Filtering behavior of labelIds list specified.
       * @enum {string}
       */
      labelFilterAction?: 'include' | 'exclude'
      /** @description List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are required for a push notification to be generated. */
      labelIds?: string[]
      /** @description A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name **must** already exist in Cloud Pub/Sub and you **must** have already granted gmail "publish" permission on it. For example, "projects/my-project-identifier/topics/my-topic-name" (using the Cloud Pub/Sub "v1" topic naming format). Note that the "my-project-identifier" portion must exactly match your Google developer project id (the one executing this watch request). */
      topicName?: string
    }
    /** @description Push notification watch response. */
    WatchResponse: {
      /**
       * Format: int64
       * @description When Gmail will stop sending notifications for mailbox updates (epoch millis). Call `watch` again before this time to renew the watch.
       */
      expiration?: string
      /**
       * Format: uint64
       * @description The ID of the mailbox's current history record.
       */
      historyId?: string
    }
  }
  responses: never
  parameters: {
    /** @description V1 error format. */
    '_.xgafv': '1' | '2'
    /** @description OAuth access token. */
    access_token: string
    /** @description Data format for response. */
    alt: 'json' | 'media' | 'proto'
    /** @description JSONP */
    callback: string
    /** @description Selector specifying which fields to include in a partial response. */
    fields: string
    /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
    key: string
    /** @description OAuth 2.0 token for the current user. */
    oauth_token: string
    /** @description Returns response with indentations and line breaks. */
    prettyPrint: boolean
    /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
    quotaUser: string
    /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
    uploadType: string
    /** @description Upload protocol for media (e.g. "raw", "multipart"). */
    upload_protocol: string
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  'gmail.users.drafts.list': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
        /** @description Include drafts from `SPAM` and `TRASH` in the results. */
        includeSpamTrash?: boolean
        /** @description Maximum number of drafts to return. This field defaults to 100. The maximum allowed value for this field is 500. */
        maxResults?: number
        /** @description Page token to retrieve a specific page of results in the list. */
        pageToken?: string
        /** @description Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. */
        q?: string
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListDraftsResponse']
        }
      }
    }
  }
  'gmail.users.drafts.create': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'message/cpim': components['schemas']['Draft']
        'message/delivery-status': components['schemas']['Draft']
        'message/disposition-notification': components['schemas']['Draft']
        'message/external-body': components['schemas']['Draft']
        'message/feedback-report': components['schemas']['Draft']
        'message/global': components['schemas']['Draft']
        'message/global-delivery-status': components['schemas']['Draft']
        'message/global-disposition-notification': components['schemas']['Draft']
        'message/global-headers': components['schemas']['Draft']
        'message/http': components['schemas']['Draft']
        'message/imdn+xml': components['schemas']['Draft']
        'message/news': components['schemas']['Draft']
        'message/partial': components['schemas']['Draft']
        'message/rfc822': components['schemas']['Draft']
        'message/s-http': components['schemas']['Draft']
        'message/sip': components['schemas']['Draft']
        'message/sipfrag': components['schemas']['Draft']
        'message/tracking-status': components['schemas']['Draft']
        'message/vnd.si.simp': components['schemas']['Draft']
        'message/vnd.wfa.wsc': components['schemas']['Draft']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Draft']
        }
      }
    }
  }
  'gmail.users.drafts.send': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'message/cpim': components['schemas']['Draft']
        'message/delivery-status': components['schemas']['Draft']
        'message/disposition-notification': components['schemas']['Draft']
        'message/external-body': components['schemas']['Draft']
        'message/feedback-report': components['schemas']['Draft']
        'message/global': components['schemas']['Draft']
        'message/global-delivery-status': components['schemas']['Draft']
        'message/global-disposition-notification': components['schemas']['Draft']
        'message/global-headers': components['schemas']['Draft']
        'message/http': components['schemas']['Draft']
        'message/imdn+xml': components['schemas']['Draft']
        'message/news': components['schemas']['Draft']
        'message/partial': components['schemas']['Draft']
        'message/rfc822': components['schemas']['Draft']
        'message/s-http': components['schemas']['Draft']
        'message/sip': components['schemas']['Draft']
        'message/sipfrag': components['schemas']['Draft']
        'message/tracking-status': components['schemas']['Draft']
        'message/vnd.si.simp': components['schemas']['Draft']
        'message/vnd.wfa.wsc': components['schemas']['Draft']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Message']
        }
      }
    }
  }
  'gmail.users.drafts.get': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
        /** @description The format to return the draft in. */
        format?: 'minimal' | 'full' | 'raw' | 'metadata'
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the draft to retrieve. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Draft']
        }
      }
    }
  }
  'gmail.users.drafts.update': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the draft to update. */
        id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'message/cpim': components['schemas']['Draft']
        'message/delivery-status': components['schemas']['Draft']
        'message/disposition-notification': components['schemas']['Draft']
        'message/external-body': components['schemas']['Draft']
        'message/feedback-report': components['schemas']['Draft']
        'message/global': components['schemas']['Draft']
        'message/global-delivery-status': components['schemas']['Draft']
        'message/global-disposition-notification': components['schemas']['Draft']
        'message/global-headers': components['schemas']['Draft']
        'message/http': components['schemas']['Draft']
        'message/imdn+xml': components['schemas']['Draft']
        'message/news': components['schemas']['Draft']
        'message/partial': components['schemas']['Draft']
        'message/rfc822': components['schemas']['Draft']
        'message/s-http': components['schemas']['Draft']
        'message/sip': components['schemas']['Draft']
        'message/sipfrag': components['schemas']['Draft']
        'message/tracking-status': components['schemas']['Draft']
        'message/vnd.si.simp': components['schemas']['Draft']
        'message/vnd.wfa.wsc': components['schemas']['Draft']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Draft']
        }
      }
    }
  }
  'gmail.users.drafts.delete': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the draft to delete. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.history.list': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
        /** @description History types to be returned by the function */
        historyTypes?: (
          | 'messageAdded'
          | 'messageDeleted'
          | 'labelAdded'
          | 'labelRemoved'
        )[]
        /** @description Only return messages with a label matching the ID. */
        labelId?: string
        /** @description Maximum number of history records to return. This field defaults to 100. The maximum allowed value for this field is 500. */
        maxResults?: number
        /** @description Page token to retrieve a specific page of results in the list. */
        pageToken?: string
        /** @description Required. Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous `list` response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date `startHistoryId` typically returns an `HTTP 404` error code. A `historyId` is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an `HTTP 404` error response, your application should perform a full sync. If you receive no `nextPageToken` in the response, there are no updates to retrieve and you can store the returned `historyId` for a future request. */
        startHistoryId?: string
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListHistoryResponse']
        }
      }
    }
  }
  'gmail.users.labels.list': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListLabelsResponse']
        }
      }
    }
  }
  'gmail.users.labels.create': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Label']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Label']
        }
      }
    }
  }
  'gmail.users.labels.get': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the label to retrieve. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Label']
        }
      }
    }
  }
  'gmail.users.labels.update': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the label to update. */
        id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Label']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Label']
        }
      }
    }
  }
  'gmail.users.labels.delete': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the label to delete. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.labels.patch': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the label to update. */
        id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Label']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Label']
        }
      }
    }
  }
  'gmail.users.messages.list': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
        /** @description Include messages from `SPAM` and `TRASH` in the results. */
        includeSpamTrash?: boolean
        /** @description Only return messages with labels that match all of the specified label IDs. Messages in a thread might have labels that other messages in the same thread don't have. To learn more, see [Manage labels on messages and threads](https://developers.google.com/gmail/api/guides/labels#manage_labels_on_messages_threads). */
        labelIds?: string[]
        /** @description Maximum number of messages to return. This field defaults to 100. The maximum allowed value for this field is 500. */
        maxResults?: number
        /** @description Page token to retrieve a specific page of results in the list. */
        pageToken?: string
        /** @description Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope. */
        q?: string
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListMessagesResponse']
        }
      }
    }
  }
  'gmail.users.messages.insert': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
        /** @description Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts. */
        deleted?: boolean
        /** @description Source for Gmail's internal date of the message. */
        internalDateSource?: 'receivedTime' | 'dateHeader'
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'message/cpim': components['schemas']['Message']
        'message/delivery-status': components['schemas']['Message']
        'message/disposition-notification': components['schemas']['Message']
        'message/external-body': components['schemas']['Message']
        'message/feedback-report': components['schemas']['Message']
        'message/global': components['schemas']['Message']
        'message/global-delivery-status': components['schemas']['Message']
        'message/global-disposition-notification': components['schemas']['Message']
        'message/global-headers': components['schemas']['Message']
        'message/http': components['schemas']['Message']
        'message/imdn+xml': components['schemas']['Message']
        'message/news': components['schemas']['Message']
        'message/partial': components['schemas']['Message']
        'message/rfc822': components['schemas']['Message']
        'message/s-http': components['schemas']['Message']
        'message/sip': components['schemas']['Message']
        'message/sipfrag': components['schemas']['Message']
        'message/tracking-status': components['schemas']['Message']
        'message/vnd.si.simp': components['schemas']['Message']
        'message/vnd.wfa.wsc': components['schemas']['Message']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Message']
        }
      }
    }
  }
  'gmail.users.messages.batchDelete': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['BatchDeleteMessagesRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.messages.batchModify': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['BatchModifyMessagesRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.messages.import': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
        /** @description Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts. */
        deleted?: boolean
        /** @description Source for Gmail's internal date of the message. */
        internalDateSource?: 'receivedTime' | 'dateHeader'
        /** @description Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox. */
        neverMarkSpam?: boolean
        /** @description Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user. */
        processForCalendar?: boolean
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'message/cpim': components['schemas']['Message']
        'message/delivery-status': components['schemas']['Message']
        'message/disposition-notification': components['schemas']['Message']
        'message/external-body': components['schemas']['Message']
        'message/feedback-report': components['schemas']['Message']
        'message/global': components['schemas']['Message']
        'message/global-delivery-status': components['schemas']['Message']
        'message/global-disposition-notification': components['schemas']['Message']
        'message/global-headers': components['schemas']['Message']
        'message/http': components['schemas']['Message']
        'message/imdn+xml': components['schemas']['Message']
        'message/news': components['schemas']['Message']
        'message/partial': components['schemas']['Message']
        'message/rfc822': components['schemas']['Message']
        'message/s-http': components['schemas']['Message']
        'message/sip': components['schemas']['Message']
        'message/sipfrag': components['schemas']['Message']
        'message/tracking-status': components['schemas']['Message']
        'message/vnd.si.simp': components['schemas']['Message']
        'message/vnd.wfa.wsc': components['schemas']['Message']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Message']
        }
      }
    }
  }
  'gmail.users.messages.send': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'message/cpim': components['schemas']['Message']
        'message/delivery-status': components['schemas']['Message']
        'message/disposition-notification': components['schemas']['Message']
        'message/external-body': components['schemas']['Message']
        'message/feedback-report': components['schemas']['Message']
        'message/global': components['schemas']['Message']
        'message/global-delivery-status': components['schemas']['Message']
        'message/global-disposition-notification': components['schemas']['Message']
        'message/global-headers': components['schemas']['Message']
        'message/http': components['schemas']['Message']
        'message/imdn+xml': components['schemas']['Message']
        'message/news': components['schemas']['Message']
        'message/partial': components['schemas']['Message']
        'message/rfc822': components['schemas']['Message']
        'message/s-http': components['schemas']['Message']
        'message/sip': components['schemas']['Message']
        'message/sipfrag': components['schemas']['Message']
        'message/tracking-status': components['schemas']['Message']
        'message/vnd.si.simp': components['schemas']['Message']
        'message/vnd.wfa.wsc': components['schemas']['Message']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Message']
        }
      }
    }
  }
  'gmail.users.messages.get': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
        /** @description The format to return the message in. */
        format?: 'minimal' | 'full' | 'raw' | 'metadata'
        /** @description When given and format is `METADATA`, only include headers specified. */
        metadataHeaders?: string[]
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the message to retrieve. This ID is usually retrieved using `messages.list`. The ID is also contained in the result when a message is inserted (`messages.insert`) or imported (`messages.import`). */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Message']
        }
      }
    }
  }
  'gmail.users.messages.delete': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the message to delete. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.messages.modify': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the message to modify. */
        id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ModifyMessageRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Message']
        }
      }
    }
  }
  'gmail.users.messages.trash': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the message to Trash. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Message']
        }
      }
    }
  }
  'gmail.users.messages.untrash': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the message to remove from Trash. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Message']
        }
      }
    }
  }
  'gmail.users.messages.attachments.get': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the message containing the attachment. */
        messageId: string
        /** @description The ID of the attachment. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MessagePartBody']
        }
      }
    }
  }
  'gmail.users.getProfile': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Profile']
        }
      }
    }
  }
  'gmail.users.settings.getAutoForwarding': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AutoForwarding']
        }
      }
    }
  }
  'gmail.users.settings.updateAutoForwarding': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['AutoForwarding']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AutoForwarding']
        }
      }
    }
  }
  'gmail.users.settings.cse.identities.list': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
        /** @description The number of identities to return. If not provided, the page size will default to 20 entries. */
        pageSize?: number
        /** @description Pagination token indicating which page of identities to return. If the token is not supplied, then the API will return the first page of results. */
        pageToken?: string
      }
      header?: never
      path: {
        /** @description The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListCseIdentitiesResponse']
        }
      }
    }
  }
  'gmail.users.settings.cse.identities.create': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CseIdentity']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CseIdentity']
        }
      }
    }
  }
  'gmail.users.settings.cse.identities.get': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. */
        userId: string
        /** @description The primary email address associated with the client-side encryption identity configuration that's retrieved. */
        cseEmailAddress: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CseIdentity']
        }
      }
    }
  }
  'gmail.users.settings.cse.identities.delete': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. */
        userId: string
        /** @description The primary email address associated with the client-side encryption identity configuration that's removed. */
        cseEmailAddress: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.settings.cse.identities.patch': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. */
        userId: string
        /** @description The email address of the client-side encryption identity to update. */
        emailAddress: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CseIdentity']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CseIdentity']
        }
      }
    }
  }
  'gmail.users.settings.cse.keypairs.list': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
        /** @description The number of key pairs to return. If not provided, the page size will default to 20 entries. */
        pageSize?: number
        /** @description Pagination token indicating which page of key pairs to return. If the token is not supplied, then the API will return the first page of results. */
        pageToken?: string
      }
      header?: never
      path: {
        /** @description The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListCseKeyPairsResponse']
        }
      }
    }
  }
  'gmail.users.settings.cse.keypairs.create': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CseKeyPair']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CseKeyPair']
        }
      }
    }
  }
  'gmail.users.settings.cse.keypairs.get': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. */
        userId: string
        /** @description The identifier of the key pair to retrieve. */
        keyPairId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CseKeyPair']
        }
      }
    }
  }
  'gmail.users.settings.cse.keypairs.disable': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. */
        userId: string
        /** @description The identifier of the key pair to turn off. */
        keyPairId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['DisableCseKeyPairRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CseKeyPair']
        }
      }
    }
  }
  'gmail.users.settings.cse.keypairs.enable': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. */
        userId: string
        /** @description The identifier of the key pair to turn on. */
        keyPairId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['EnableCseKeyPairRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CseKeyPair']
        }
      }
    }
  }
  'gmail.users.settings.cse.keypairs.obliterate': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The requester's primary email address. To indicate the authenticated user, you can use the special value `me`. */
        userId: string
        /** @description The identifier of the key pair to obliterate. */
        keyPairId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ObliterateCseKeyPairRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.settings.delegates.list': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListDelegatesResponse']
        }
      }
    }
  }
  'gmail.users.settings.delegates.create': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Delegate']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Delegate']
        }
      }
    }
  }
  'gmail.users.settings.delegates.get': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
        /** @description The email address of the user whose delegate relationship is to be retrieved. */
        delegateEmail: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Delegate']
        }
      }
    }
  }
  'gmail.users.settings.delegates.delete': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
        /** @description The email address of the user to be removed as a delegate. */
        delegateEmail: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.settings.filters.list': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListFiltersResponse']
        }
      }
    }
  }
  'gmail.users.settings.filters.create': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Filter']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Filter']
        }
      }
    }
  }
  'gmail.users.settings.filters.get': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the filter to be fetched. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Filter']
        }
      }
    }
  }
  'gmail.users.settings.filters.delete': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the filter to be deleted. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.settings.forwardingAddresses.list': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListForwardingAddressesResponse']
        }
      }
    }
  }
  'gmail.users.settings.forwardingAddresses.create': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ForwardingAddress']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ForwardingAddress']
        }
      }
    }
  }
  'gmail.users.settings.forwardingAddresses.get': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
        /** @description The forwarding address to be retrieved. */
        forwardingEmail: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ForwardingAddress']
        }
      }
    }
  }
  'gmail.users.settings.forwardingAddresses.delete': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
        /** @description The forwarding address to be deleted. */
        forwardingEmail: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.settings.getImap': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ImapSettings']
        }
      }
    }
  }
  'gmail.users.settings.updateImap': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ImapSettings']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ImapSettings']
        }
      }
    }
  }
  'gmail.users.settings.getLanguage': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['LanguageSettings']
        }
      }
    }
  }
  'gmail.users.settings.updateLanguage': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['LanguageSettings']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['LanguageSettings']
        }
      }
    }
  }
  'gmail.users.settings.getPop': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PopSettings']
        }
      }
    }
  }
  'gmail.users.settings.updatePop': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['PopSettings']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PopSettings']
        }
      }
    }
  }
  'gmail.users.settings.sendAs.list': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListSendAsResponse']
        }
      }
    }
  }
  'gmail.users.settings.sendAs.create': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['SendAs']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SendAs']
        }
      }
    }
  }
  'gmail.users.settings.sendAs.get': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
        /** @description The send-as alias to be retrieved. */
        sendAsEmail: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SendAs']
        }
      }
    }
  }
  'gmail.users.settings.sendAs.update': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
        /** @description The send-as alias to be updated. */
        sendAsEmail: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['SendAs']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SendAs']
        }
      }
    }
  }
  'gmail.users.settings.sendAs.delete': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
        /** @description The send-as alias to be deleted. */
        sendAsEmail: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.settings.sendAs.patch': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
        /** @description The send-as alias to be updated. */
        sendAsEmail: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['SendAs']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SendAs']
        }
      }
    }
  }
  'gmail.users.settings.sendAs.smimeInfo.list': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The email address that appears in the "From:" header for mail sent using this alias. */
        sendAsEmail: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListSmimeInfoResponse']
        }
      }
    }
  }
  'gmail.users.settings.sendAs.smimeInfo.insert': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The email address that appears in the "From:" header for mail sent using this alias. */
        sendAsEmail: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['SmimeInfo']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SmimeInfo']
        }
      }
    }
  }
  'gmail.users.settings.sendAs.smimeInfo.get': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The email address that appears in the "From:" header for mail sent using this alias. */
        sendAsEmail: string
        /** @description The immutable ID for the SmimeInfo. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SmimeInfo']
        }
      }
    }
  }
  'gmail.users.settings.sendAs.smimeInfo.delete': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The email address that appears in the "From:" header for mail sent using this alias. */
        sendAsEmail: string
        /** @description The immutable ID for the SmimeInfo. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.settings.sendAs.smimeInfo.setDefault': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The email address that appears in the "From:" header for mail sent using this alias. */
        sendAsEmail: string
        /** @description The immutable ID for the SmimeInfo. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.settings.sendAs.verify': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
        /** @description The send-as alias to be verified. */
        sendAsEmail: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.settings.getVacation': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VacationSettings']
        }
      }
    }
  }
  'gmail.users.settings.updateVacation': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description User's email address. The special value "me" can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['VacationSettings']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['VacationSettings']
        }
      }
    }
  }
  'gmail.users.stop': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.threads.list': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
        /** @description Include threads from `SPAM` and `TRASH` in the results. */
        includeSpamTrash?: boolean
        /** @description Only return threads with labels that match all of the specified label IDs. */
        labelIds?: string[]
        /** @description Maximum number of threads to return. This field defaults to 100. The maximum allowed value for this field is 500. */
        maxResults?: number
        /** @description Page token to retrieve a specific page of results in the list. */
        pageToken?: string
        /** @description Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope. */
        q?: string
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ListThreadsResponse']
        }
      }
    }
  }
  'gmail.users.threads.get': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
        /** @description The format to return the messages in. */
        format?: 'full' | 'metadata' | 'minimal'
        /** @description When given and format is METADATA, only include headers specified. */
        metadataHeaders?: string[]
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the thread to retrieve. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Thread']
        }
      }
    }
  }
  'gmail.users.threads.delete': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description ID of the Thread to delete. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  'gmail.users.threads.modify': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the thread to modify. */
        id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ModifyThreadRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Thread']
        }
      }
    }
  }
  'gmail.users.threads.trash': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the thread to Trash. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Thread']
        }
      }
    }
  }
  'gmail.users.threads.untrash': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
        /** @description The ID of the thread to remove from Trash. */
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Thread']
        }
      }
    }
  }
  'gmail.users.watch': {
    parameters: {
      query?: {
        /** @description V1 error format. */
        '$.xgafv'?: components['parameters']['_.xgafv']
        /** @description OAuth access token. */
        access_token?: components['parameters']['access_token']
        /** @description Data format for response. */
        alt?: components['parameters']['alt']
        /** @description JSONP */
        callback?: components['parameters']['callback']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol?: components['parameters']['upload_protocol']
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType?: components['parameters']['uploadType']
      }
      header?: never
      path: {
        /** @description The user's email address. The special value `me` can be used to indicate the authenticated user. */
        userId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['WatchRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['WatchResponse']
        }
      }
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
