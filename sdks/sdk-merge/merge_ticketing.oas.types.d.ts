export interface paths {
  '/account-details': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get details for a linked account. */
    get: operations['account_details_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/account-token/{public_token}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns the account token for the end user with the provided public token. */
    get: operations['account_token_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/accounts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Account` objects. */
    get: operations['accounts_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/accounts/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Account` object with the given `id`. */
    get: operations['accounts_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/async-passthrough': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Asynchronously pull data from an endpoint not currently supported by Merge. */
    post: operations['async_passthrough_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/async-passthrough/{async_passthrough_receipt_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Retrieves data from earlier async-passthrough POST request */
    get: operations['async_passthrough_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/attachments': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Attachment` objects. */
    get: operations['attachments_list']
    put?: never
    /** @description Creates an `Attachment` object with the given values. */
    post: operations['attachments_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/attachments/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an `Attachment` object with the given `id`. */
    get: operations['attachments_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/attachments/{id}/download': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns the `File` content with the given `id` as a stream of bytes. */
    get: operations['attachments_download_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/attachments/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `TicketingAttachment` POSTs. */
    get: operations['attachments_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/audit-trail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets a list of audit trail events. */
    get: operations['audit_trail_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/available-actions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of models and actions available for an account. */
    get: operations['available_actions_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/collections': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Collection` objects. */
    get: operations['collections_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/collections/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Collection` object with the given `id`. */
    get: operations['collections_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/comments': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Comment` objects. */
    get: operations['comments_list']
    put?: never
    /** @description Creates a `Comment` object with the given values. */
    post: operations['comments_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/comments/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Comment` object with the given `id`. */
    get: operations['comments_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/comments/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Comment` POSTs. */
    get: operations['comments_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/contacts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Contact` objects. */
    get: operations['contacts_list']
    put?: never
    /** @description Creates a `Contact` object with the given values. */
    post: operations['contacts_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/contacts/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Contact` object with the given `id`. */
    get: operations['contacts_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/contacts/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `TicketingContact` POSTs. */
    get: operations['contacts_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/default-scopes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get the default permissions for Merge Common Models and fields across all Linked Accounts of a given category. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes). */
    get: operations['default_scopes_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/delete-account': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Delete a linked account. */
    post: operations['delete_account_delete']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/field-mappings': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get all Field Mappings for this Linked Account. Field Mappings are mappings between third-party Remote Fields and user defined Merge fields. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/). */
    get: operations['field_mappings_retrieve']
    put?: never
    /** @description Create new Field Mappings that will be available after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start. */
    post: operations['field_mappings_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/field-mappings/{field_mapping_id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** @description Deletes Field Mappings for a Linked Account. All data related to this Field Mapping will be deleted and these changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start. */
    delete: operations['field_mappings_destroy']
    options?: never
    head?: never
    /** @description Create or update existing Field Mappings for a Linked Account. Changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start. */
    patch: operations['field_mappings_partial_update']
    trace?: never
  }
  '/generate-key': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Create a remote key. */
    post: operations['generate_key_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/issues': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Gets all issues for Organization. */
    get: operations['issues_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/issues/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get a specific issue. */
    get: operations['issues_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/link-token': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Creates a link token to be used when linking a new end user. */
    post: operations['link_token_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/linked-account-scopes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get all available permissions for Merge Common Models and fields for a single Linked Account. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes). */
    get: operations['linked_account_scopes_retrieve']
    put?: never
    /** @description Update permissions for any Common Model or field for a single Linked Account. Any Scopes not set in this POST request will inherit the default Scopes. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes) */
    post: operations['linked_account_scopes_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/linked-accounts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description List linked accounts for your organization. */
    get: operations['linked_accounts_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/passthrough': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Pull data from an endpoint not currently supported by Merge. */
    post: operations['passthrough_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/projects': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Project` objects. */
    get: operations['projects_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/projects/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Project` object with the given `id`. */
    get: operations['projects_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/projects/{parent_id}/users': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `User` objects. */
    get: operations['projects_users_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/regenerate-key': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Exchange remote keys. */
    post: operations['regenerate_key_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/remote-fields': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get all remote fields for a Linked Account. Remote fields are third-party fields that are accessible after initial sync if remote_data is enabled. You can use remote fields to override existing Merge fields or map a new Merge field. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/). */
    get: operations['remote_fields_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/roles': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Role` objects. */
    get: operations['roles_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/roles/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Role` object with the given `id`. */
    get: operations['roles_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sync-status': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses). */
    get: operations['sync_status_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sync-status/resync': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account. */
    post: operations['sync_status_resync_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/tags': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Tag` objects. */
    get: operations['tags_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/tags/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Tag` object with the given `id`. */
    get: operations['tags_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/target-fields': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get all organization-wide Target Fields, this will not include any Linked Account specific Target Fields. Organization-wide Target Fields are additional fields appended to the Merge Common Model for all Linked Accounts in a category. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/target-fields/). */
    get: operations['target_fields_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/teams': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Team` objects. */
    get: operations['teams_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/teams/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Team` object with the given `id`. */
    get: operations['teams_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/tickets': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Ticket` objects. */
    get: operations['tickets_list']
    put?: never
    /** @description Creates a `Ticket` object with the given values. */
    post: operations['tickets_create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/tickets/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `Ticket` object with the given `id`. */
    get: operations['tickets_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description Updates a `Ticket` object with the given `id`. */
    patch: operations['tickets_partial_update']
    trace?: never
  }
  '/tickets/{ticket_id}/viewers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `Viewer` objects that point to a User id or Team id that is either an assignee or viewer on a `Ticket` with the given id. [Learn more.](https://help.merge.dev/en/articles/10333658-ticketing-access-control-list-acls) */
    get: operations['tickets_viewers_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/tickets/meta/patch/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Ticket` PATCHs. */
    get: operations['tickets_meta_patch_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/tickets/meta/post': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for `Ticket` POSTs. */
    get: operations['tickets_meta_post_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/tickets/remote-field-classes': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `RemoteFieldClass` objects. */
    get: operations['tickets_remote_field_classes_list']
    put?: never
    post?: never
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
    /** @description Returns a list of `User` objects. */
    get: operations['users_list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a `User` object with the given `id`. */
    get: operations['users_retrieve']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/webhook-receivers': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a list of `WebhookReceiver` objects. */
    get: operations['webhook_receivers_list']
    put?: never
    /** @description Creates a `WebhookReceiver` object with the given values. */
    post: operations['webhook_receivers_create']
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
    /**
     * @description * `PRIVATE` - PRIVATE
     *     * `COMPANY` - COMPANY
     *     * `PUBLIC` - PUBLIC
     * @enum {string}
     */
    AccessLevelEnum: 'PRIVATE' | 'COMPANY' | 'PUBLIC'
    /** @description # The Account Object
     *     ### Description
     *     The `Account` object is used to represent the account that a ticket is associated with.
     *
     *     The account is a company that may be a customer. This does not represent the company that is receiving the ticket.
     *
     *     ### Usage Example
     *     TODO */
    Account: {
      /**
       * Format: uuid
       * @example 17a54124-287f-494d-965e-3c5b330c9a68
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202938
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The account's name.
       * @example Waystar Royco
       */
      name?: string | null
      /**
       * @description The account's domain names.
       * @example [
       *       "waystar-royco.com",
       *       "royco.com"
       *     ]
       */
      domains?: (string | null)[] | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      /** @example [
       *       {
       *         "path": "/actions",
       *         "data": [
       *           "Varies by platform"
       *         ]
       *       }
       *     ] */
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    AccountDetails: {
      /**
       * Format: uuid
       * @example 0496d4c2-42e6-4072-80b3-7b69bfdc76fd
       */
      readonly id?: string
      /** @example BambooHR */
      readonly integration?: string
      /** @example bamboohr */
      readonly integration_slug?: string
      /** @example hris */
      category?: components['schemas']['CategoryEnum'] | null
      /** @example 3fa85f64-5717-4562-b3fc-2c963f66afa6 */
      readonly end_user_origin_id?: string
      /** @example Waystar Royco */
      readonly end_user_organization_name?: string
      /**
       * Format: email
       * @example kendall.roy@waystar-royco.com
       */
      readonly end_user_email_address?: string
      /** @example COMPLETE */
      readonly status?: string
      /**
       * Format: uri
       * @example https://api.merge.dev/api/integrations/webhook-listener/7fc3mee0UW8ecV4
       */
      readonly webhook_listener_url?: string
      /**
       * @description Whether a Production Linked Account's credentials match another existing Production Linked Account. This field is `null` for Test Linked Accounts, incomplete Production Linked Accounts, and ignored duplicate Production Linked Account sets.
       * @example true
       */
      readonly is_duplicate?: boolean | null
      /** @example PRODUCTION */
      readonly account_type?: string
      /**
       * Format: date-time
       * @description The time at which account completes the linking flow.
       * @example 2024-08-26T20:11:19.277118Z
       */
      completed_at?: string | null
    }
    /** @description # The LinkedAccount Object
     *     ### Description
     *     The `LinkedAccount` object is used to represent an end user's link with a specific integration.
     *
     *     ### Usage Example
     *     View a list of your organization's `LinkedAccount` objects. */
    AccountDetailsAndActions: {
      /** @example e59b1821-f85c-4e28-a6b3-1804156f3563 */
      id: string
      /** @example hris */
      category?: components['schemas']['CategoryEnum']
      /** @example INCOMPLETE */
      status: components['schemas']['AccountDetailsAndActionsStatusEnum']
      /** @example Invalid login credentials */
      status_detail?: string
      /** @example 3ac95cde-6c7f-4eef-afec-be710b42308d */
      end_user_origin_id?: string
      /** @example Foo Bar, LLC */
      end_user_organization_name: string
      /** @example hradmin@foobar.dev */
      end_user_email_address: string
      /**
       * @description The tenant or domain the customer has provided access to.
       * @example foobar
       */
      subdomain?: string
      /** @example https://api.merge.dev/api/integrations/webhook-listener/7fc3mee0UW8ecV4 */
      webhook_listener_url: string
      /**
       * @description Whether a Production Linked Account's credentials match another existing Production Linked Account. This field is `null` for Test Linked Accounts, incomplete Production Linked Accounts, and ignored duplicate Production Linked Account sets.
       * @example true
       */
      is_duplicate?: boolean | null
      /** @example {
       *       "name": "SAP SuccessFactors",
       *       "categories": [
       *         "hris",
       *         "ats"
       *       ],
       *       "image": "https://cdn.merge.dev/SuccessFactors_Logo.png",
       *       "square_image": "https://cdn.merge.dev/SuccessFactors_Square_Logo.jpg",
       *       "color": "#F6A704",
       *       "slug": "sap-successfactors",
       *       "passthrough_available": true,
       *       "available_model_operations": [
       *         {
       *           "model_name": "Candidate",
       *           "available_operations": [
       *             "FETCH",
       *             "CREATE"
       *           ],
       *           "required_post_parameters": [
       *             "remote_user_id"
       *           ],
       *           "supported_fields": [
       *             "first_name",
       *             "last_name",
       *             "company",
       *             "title"
       *           ]
       *         }
       *       ]
       *     } */
      integration?: components['schemas']['AccountDetailsAndActionsIntegration']
      /** @example PRODUCTION */
      account_type: string
      /**
       * Format: date-time
       * @example 2024-08-26T20:11:19.277118Z
       */
      completed_at: string
    }
    AccountDetailsAndActionsIntegration: {
      name: string
      categories: components['schemas']['CategoriesEnum'][]
      image?: string
      square_image?: string
      color: string
      slug: string
      passthrough_available: boolean
      available_model_operations?: components['schemas']['ModelOperation'][]
    }
    /**
     * @description * `COMPLETE` - COMPLETE
     *     * `INCOMPLETE` - INCOMPLETE
     *     * `RELINK_NEEDED` - RELINK_NEEDED
     *     * `IDLE` - IDLE
     * @enum {string}
     */
    AccountDetailsAndActionsStatusEnum:
      | 'COMPLETE'
      | 'INCOMPLETE'
      | 'RELINK_NEEDED'
      | 'IDLE'
    AccountIntegration: {
      /** @description Company name. */
      name: string
      /** @description Optional. This shortened name appears in places with limited space, usually in conjunction with the platform's logo (e.g., Merge Link menu).<br><br>Example: <i>Workforce Now (in lieu of ADP Workforce Now), SuccessFactors (in lieu of SAP SuccessFactors)</i> */
      abbreviated_name?: string | null
      /** @description Category or categories this integration belongs to. Multiple categories should be comma separated, i.e. [ats, hris]. */
      readonly categories?: components['schemas']['CategoriesEnum'][]
      /**
       * Format: uri
       * @description Company logo in rectangular shape.
       */
      image?: string | null
      /**
       * Format: uri
       * @description Company logo in square shape.
       */
      square_image?: string | null
      /** @description The color of this integration used for buttons and text throughout the app and landing pages. <b>Choose a darker, saturated color.</b> */
      color?: string
      readonly slug?: string
      /** @description Mapping of API endpoints to documentation urls for support. Example: {'GET': [['/common-model-scopes', 'https://docs.merge.dev/accounting/common-model-scopes/#common_model_scopes_retrieve'],['/common-model-actions', 'https://docs.merge.dev/accounting/common-model-actions/#common_model_actions_retrieve']], 'POST': []} */
      api_endpoints_to_documentation_urls?: {
        [key: string]: unknown
      }
      /** @description Setup guide URL for third party webhook creation. Exposed in Merge Docs. */
      webhook_setup_guide_url?: string | null
      /** @description Category or categories this integration is in beta status for. */
      readonly category_beta_status?: Record<string, never>
    }
    AccountToken: {
      /** @example T9klMDQrcHdm9jrtHuOS2Nf06BIHwMNjpPXPMB */
      account_token: string
      /** @example {
       *       "name": "SAP SuccessFactors",
       *       "categories": [
       *         "hris",
       *         "ats"
       *       ],
       *       "image": "https://cdn.merge.dev/SuccessFactors_Logo.png",
       *       "square_image": "https://cdn.merge.dev/SuccessFactors_Square_Logo.jpg",
       *       "color": "#F6A704",
       *       "slug": "sap-successfactors"
       *     } */
      integration: components['schemas']['AccountIntegration']
    }
    AdvancedMetadata: {
      /** Format: uuid */
      id: string
      display_name?: string
      description?: string
      is_required?: boolean
      is_custom?: boolean
      field_choices?: unknown[]
    }
    AsyncPassthroughReciept: {
      /**
       * Format: uuid
       * @example fd29020f-2695-445e-922e-dcd5e81903fd
       */
      async_passthrough_receipt_id: string
    }
    /** @description # The Attachment Object
     *     ### Description
     *     The `Attachment` object is used to represent an attachment for a ticket.
     *
     *     ### Usage Example
     *     TODO */
    Attachment: {
      /**
       * Format: uuid
       * @example 17a54124-287f-494d-965e-3c5b330c9a68
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202938
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The attachment's name. It is required to include the file extension in the attachment's name.
       * @example Screenshot.png
       */
      file_name?: string | null
      /**
       * Format: uuid
       * @description The ticket associated with the attachment.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      ticket?: string | null
      /**
       * @description The attachment's url. It is required to include the file extension in the file's URL.
       * @example http://alturl.com/p749b
       */
      file_url?: string | null
      /**
       * @description The attachment's file format.
       * @example jpeg
       */
      content_type?: string | null
      /**
       * Format: uuid
       * @description The user who uploaded the attachment.
       * @example 28b54125-287f-494d-965e-3c5b330c9a68
       */
      uploaded_by?: string | null
      /**
       * Format: date-time
       * @description When the third party's attachment was created.
       * @example 2022-11-10T00:00:00Z
       */
      remote_created_at?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Attachment Object
     *     ### Description
     *     The `Attachment` object is used to represent an attachment for a ticket.
     *
     *     ### Usage Example
     *     TODO */
    AttachmentRequest: {
      /**
       * @description The attachment's name. It is required to include the file extension in the attachment's name.
       * @example Screenshot.png
       */
      file_name?: string | null
      /**
       * Format: uuid
       * @description The ticket associated with the attachment.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      ticket?: string | null
      /**
       * @description The attachment's url. It is required to include the file extension in the file's URL.
       * @example http://alturl.com/p749b
       */
      file_url?: string | null
      /**
       * @description The attachment's file format.
       * @example jpeg
       */
      content_type?: string | null
      /**
       * Format: uuid
       * @description The user who uploaded the attachment.
       * @example 28b54125-287f-494d-965e-3c5b330c9a68
       */
      uploaded_by?: string | null
      /** @example {
       *       "unique_integration_field": "unique_integration_field_value"
       *     } */
      integration_params?: {
        [key: string]: unknown
      } | null
      /** @example {
       *       "unique_linked_account_field": "unique_linked_account_field_value"
       *     } */
      linked_account_params?: {
        [key: string]: unknown
      } | null
    }
    AuditLogEvent: {
      /**
       * Format: uuid
       * @example b5ceea2a-7171-47ce-8090-165cfce5572c
       */
      readonly id?: string
      /**
       * @description The User's full name at the time of this Event occurring.
       * @example Gil Feig
       */
      user_name?: string | null
      /**
       * Format: email
       * @description The User's email at the time of this Event occurring.
       * @example hello@merge.dev
       */
      user_email?: string | null
      /**
       * @description Designates the role of the user (or SYSTEM/API if action not taken by a user) at the time of this Event occurring.
       *
       *     * `ADMIN` - ADMIN
       *     * `DEVELOPER` - DEVELOPER
       *     * `MEMBER` - MEMBER
       *     * `API` - API
       *     * `SYSTEM` - SYSTEM
       *     * `MERGE_TEAM` - MERGE_TEAM
       * @example ADMIN
       */
      role: components['schemas']['RoleEnum']
      /** @example 192.0.2.123 */
      ip_address: string
      /**
       * @description Designates the type of event that occurred.
       *
       *     * `CREATED_REMOTE_PRODUCTION_API_KEY` - CREATED_REMOTE_PRODUCTION_API_KEY
       *     * `DELETED_REMOTE_PRODUCTION_API_KEY` - DELETED_REMOTE_PRODUCTION_API_KEY
       *     * `CREATED_TEST_API_KEY` - CREATED_TEST_API_KEY
       *     * `DELETED_TEST_API_KEY` - DELETED_TEST_API_KEY
       *     * `REGENERATED_PRODUCTION_API_KEY` - REGENERATED_PRODUCTION_API_KEY
       *     * `INVITED_USER` - INVITED_USER
       *     * `TWO_FACTOR_AUTH_ENABLED` - TWO_FACTOR_AUTH_ENABLED
       *     * `TWO_FACTOR_AUTH_DISABLED` - TWO_FACTOR_AUTH_DISABLED
       *     * `DELETED_LINKED_ACCOUNT` - DELETED_LINKED_ACCOUNT
       *     * `CREATED_DESTINATION` - CREATED_DESTINATION
       *     * `DELETED_DESTINATION` - DELETED_DESTINATION
       *     * `CHANGED_DESTINATION` - CHANGED_DESTINATION
       *     * `CHANGED_SCOPES` - CHANGED_SCOPES
       *     * `CHANGED_PERSONAL_INFORMATION` - CHANGED_PERSONAL_INFORMATION
       *     * `CHANGED_ORGANIZATION_SETTINGS` - CHANGED_ORGANIZATION_SETTINGS
       *     * `ENABLED_INTEGRATION` - ENABLED_INTEGRATION
       *     * `DISABLED_INTEGRATION` - DISABLED_INTEGRATION
       *     * `ENABLED_CATEGORY` - ENABLED_CATEGORY
       *     * `DISABLED_CATEGORY` - DISABLED_CATEGORY
       *     * `CHANGED_PASSWORD` - CHANGED_PASSWORD
       *     * `RESET_PASSWORD` - RESET_PASSWORD
       *     * `ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION` - ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION
       *     * `ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT` - ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT
       *     * `DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION` - DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION
       *     * `DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT` - DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT
       *     * `CREATED_INTEGRATION_WIDE_FIELD_MAPPING` - CREATED_INTEGRATION_WIDE_FIELD_MAPPING
       *     * `CREATED_LINKED_ACCOUNT_FIELD_MAPPING` - CREATED_LINKED_ACCOUNT_FIELD_MAPPING
       *     * `CHANGED_INTEGRATION_WIDE_FIELD_MAPPING` - CHANGED_INTEGRATION_WIDE_FIELD_MAPPING
       *     * `CHANGED_LINKED_ACCOUNT_FIELD_MAPPING` - CHANGED_LINKED_ACCOUNT_FIELD_MAPPING
       *     * `DELETED_INTEGRATION_WIDE_FIELD_MAPPING` - DELETED_INTEGRATION_WIDE_FIELD_MAPPING
       *     * `DELETED_LINKED_ACCOUNT_FIELD_MAPPING` - DELETED_LINKED_ACCOUNT_FIELD_MAPPING
       *     * `CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
       *     * `CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
       *     * `DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
       *     * `FORCED_LINKED_ACCOUNT_RESYNC` - FORCED_LINKED_ACCOUNT_RESYNC
       *     * `MUTED_ISSUE` - MUTED_ISSUE
       *     * `GENERATED_MAGIC_LINK` - GENERATED_MAGIC_LINK
       *     * `ENABLED_MERGE_WEBHOOK` - ENABLED_MERGE_WEBHOOK
       *     * `DISABLED_MERGE_WEBHOOK` - DISABLED_MERGE_WEBHOOK
       *     * `MERGE_WEBHOOK_TARGET_CHANGED` - MERGE_WEBHOOK_TARGET_CHANGED
       *     * `END_USER_CREDENTIALS_ACCESSED` - END_USER_CREDENTIALS_ACCESSED
       * @example CHANGED_SCOPES
       */
      event_type: components['schemas']['EventTypeEnum']
      /** @example Organization-wide Scopes for model hris.Employee updated from Read to Read+Write */
      event_description: string
      /** Format: date-time */
      readonly created_at?: string
    }
    /** @description # The AvailableActions Object
     *     ### Description
     *     The `Activity` object is used to see all available model/operation combinations for an integration.
     *
     *     ### Usage Example
     *     Fetch all the actions available for the `Zenefits` integration. */
    AvailableActions: {
      /** @example {
       *       "name": "Lever",
       *       "categories": [
       *         "ats"
       *       ],
       *       "image": "https://merge-api-production.s3.amazonaws.com/media/Lever_Logo.png",
       *       "square_image": "https://merge-api-production.s3.amazonaws.com/media/Lever_Square_Logo.png",
       *       "color": "#262A34",
       *       "is_in_beta": "true",
       *       "api_endpoints_to_documentation_urls": "{'GET': [('/common-model-scopes', 'https://docs.merge.dev/accounting/common-model-scopes/#common_model_scopes_retrieve')], 'POST': []}"
       *     } */
      integration: components['schemas']['AccountIntegration']
      /** @example true */
      passthrough_available: boolean
      /** @example [
       *       {
       *         "model_name": "Candidate",
       *         "available_operations": [
       *           "FETCH",
       *           "CREATE"
       *         ],
       *         "required_post_parameters": [
       *           "remote_user_id"
       *         ],
       *         "supported_fields": [
       *           "first_name",
       *           "last_name",
       *           "company",
       *           "title"
       *         ]
       *       }
       *     ] */
      available_model_operations?: components['schemas']['ModelOperation'][]
    }
    /**
     * @description * `hris` - hris
     *     * `ats` - ats
     *     * `accounting` - accounting
     *     * `ticketing` - ticketing
     *     * `crm` - crm
     *     * `mktg` - mktg
     *     * `filestorage` - filestorage
     * @enum {string}
     */
    CategoriesEnum:
      | 'hris'
      | 'ats'
      | 'accounting'
      | 'ticketing'
      | 'crm'
      | 'mktg'
      | 'filestorage'
    /**
     * @description * `hris` - hris
     *     * `ats` - ats
     *     * `accounting` - accounting
     *     * `ticketing` - ticketing
     *     * `crm` - crm
     *     * `mktg` - mktg
     *     * `filestorage` - filestorage
     * @enum {string}
     */
    CategoryEnum:
      | 'hris'
      | 'ats'
      | 'accounting'
      | 'ticketing'
      | 'crm'
      | 'mktg'
      | 'filestorage'
    /** @description # The Collection Object
     *     ### Description
     *     The `Collection` object is used to represent one or more `Tickets`. There can be a hierarchy of `Collections`, in which a sub-collection belongs to a parent-collection.
     *
     *     ### Usage Example
     *     TODO */
    Collection: {
      /**
       * Format: uuid
       * @example fb8c55b6-1cb8-4b4c-9fb6-17924231619d
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202938
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The collection's name.
       * @example Q1 Platform
       */
      name?: string | null
      /**
       * @description The collection's description.
       * @example For tracking all tasks related to Platform for Q1
       */
      description?: string | null
      /**
       * @description The collection's type.
       *
       *     * `LIST` - LIST
       *     * `PROJECT` - PROJECT
       * @example LIST
       */
      collection_type?: components['schemas']['CollectionTypeEnum'] | null
      /**
       * Format: uuid
       * @description The parent collection for this collection.
       * @example 25782302-5be1-4d78-8f46-2a5db72204ef
       */
      parent_collection?: string | null
      /** @example [
       *       "4857c306-c1f9-489e-a6b6-90902f736dfe"
       *     ] */
      teams?: (string | null)[]
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
      /**
       * @description The level of access a User has to the Collection and its sub-objects.
       *
       *     * `PRIVATE` - PRIVATE
       *     * `COMPANY` - COMPANY
       *     * `PUBLIC` - PUBLIC
       * @example PUBLIC
       */
      access_level?: components['schemas']['AccessLevelEnum'] | null
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `LIST` - LIST
     *     * `PROJECT` - PROJECT
     * @enum {string}
     */
    CollectionTypeEnum: 'LIST' | 'PROJECT'
    /** @description # The Comment Object
     *     ### Description
     *     The `Comment` object is used to represent a comment on a ticket.
     *
     *     ### Usage Example
     *     TODO */
    Comment: {
      /**
       * Format: uuid
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202938
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * Format: uuid
       * @description The author of the Comment, if the author is a User. If the third party does not support specifying an author, we will append "[Posted on behalf of {name}]" to the comment.
       * @example 17a54124-287f-494d-965e-3c5b330c9a68
       */
      user?: string | null
      /**
       * Format: uuid
       * @description The author of the Comment, if the author is a Contact.If the third party does not support specifying an author, we will append "[Posted on behalf of {name}]" to the comment.
       * @example dde3fb16-b8eb-483d-81c4-b78100816f15
       */
      contact?: string | null
      /**
       * @description The comment's text body.
       * @example When will these integrations be done? You all should use Merge.
       */
      body?: string | null
      /**
       * @description The comment's text body formatted as html.
       * @example When will these integrations be done? You all should use <b>Merge<b>.
       */
      html_body?: string | null
      /**
       * Format: uuid
       * @description The ticket associated with the comment.
       * @example fb8c55b6-1cb8-4b4c-9fb6-17924231619d
       */
      ticket?: string | null
      /** @description Whether or not the comment is internal. */
      is_private?: boolean | null
      /**
       * Format: date-time
       * @description When the third party's comment was created.
       * @example 1990-11-10T00:00:00Z
       */
      remote_created_at?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    CommentEndpointRequest: {
      model: components['schemas']['CommentRequest']
    }
    /** @description # The Comment Object
     *     ### Description
     *     The `Comment` object is used to represent a comment on a ticket.
     *
     *     ### Usage Example
     *     TODO */
    CommentRequest: {
      /**
       * Format: uuid
       * @description The author of the Comment, if the author is a User. If the third party does not support specifying an author, we will append "[Posted on behalf of {name}]" to the comment.
       * @example 17a54124-287f-494d-965e-3c5b330c9a68
       */
      user?: string | null
      /**
       * Format: uuid
       * @description The author of the Comment, if the author is a Contact.If the third party does not support specifying an author, we will append "[Posted on behalf of {name}]" to the comment.
       * @example dde3fb16-b8eb-483d-81c4-b78100816f15
       */
      contact?: string | null
      /**
       * @description The comment's text body.
       * @example When will these integrations be done? You all should use Merge.
       */
      body?: string | null
      /**
       * @description The comment's text body formatted as html.
       * @example When will these integrations be done? You all should use <b>Merge<b>.
       */
      html_body?: string | null
      /**
       * Format: uuid
       * @description The ticket associated with the comment.
       * @example fb8c55b6-1cb8-4b4c-9fb6-17924231619d
       */
      ticket?: string | null
      /** @description Whether or not the comment is internal. */
      is_private?: boolean | null
      /** @example {
       *       "unique_integration_field": "unique_integration_field_value"
       *     } */
      integration_params?: {
        [key: string]: unknown
      } | null
      /** @example {
       *       "unique_linked_account_field": "unique_linked_account_field_value"
       *     } */
      linked_account_params?: {
        [key: string]: unknown
      } | null
    }
    CommentResponse: {
      model: components['schemas']['Comment']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    CommonModelScopeAPI: {
      /**
       * @description The common models you want to update the scopes for
       * @example [
       *       {
       *         "model_name": "Employee",
       *         "model_permissions": {
       *           "READ": {
       *             "is_enabled": true
       *           },
       *           "WRITE": {
       *             "is_enabled": false
       *           }
       *         },
       *         "field_permissions": {
       *           "enabled_fields": [
       *             "avatar",
       *             "created_at",
       *             "custom_fields",
       *             "date_of_birth",
       *             "first_name",
       *             "gender",
       *             "remote_created_at",
       *             "remote_data"
       *           ],
       *           "disabled_fields": [
       *             "company",
       *             "employments",
       *             "groups",
       *             "home_location",
       *             "manager",
       *             "work_location"
       *           ]
       *         }
       *       }
       *     ]
       */
      common_models: components['schemas']['IndividualCommonModelScopeDeserializer'][]
    }
    CommonModelScopesBodyRequest: {
      /** @example hris.Employee */
      model_id: string
      /** @example [
       *       "READ",
       *       "WRITE"
       *     ] */
      enabled_actions: components['schemas']['EnabledActionsEnum'][]
      /** @example [
       *       "first_name"
       *     ] */
      disabled_fields: string[]
    }
    /** @description # The Contact Object
     *     ### Description
     *     The `Contact` object is used to represent the customer, lead, or external user that a ticket is associated with.
     *
     *     ### Usage Example
     *     TODO */
    Contact: {
      /**
       * Format: uuid
       * @example 17a54124-287f-494d-965e-3c5b330c9a68
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202938
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The contact's name.
       * @example Cousin Greg
       */
      name?: string | null
      /**
       * @description The contact's email address.
       * @example greg@waystar-royco.com
       */
      email_address?: string | null
      /**
       * @description The contact's phone number.
       * @example 5108890293
       */
      phone_number?: string | null
      /**
       * @description The contact's details.
       * @example Executive Assistant to Tom Wambsgans
       */
      details?: string | null
      /**
       * Format: uuid
       * @description The contact's account.
       * @example 28b54125-287f-494d-965e-3c5b330c9a68
       */
      account?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Contact Object
     *     ### Description
     *     The `Contact` object is used to represent the customer, lead, or external user that a ticket is associated with.
     *
     *     ### Usage Example
     *     TODO */
    ContactRequest: {
      /**
       * @description The contact's name.
       * @example Cousin Greg
       */
      name?: string | null
      /**
       * @description The contact's email address.
       * @example greg@waystar-royco.com
       */
      email_address?: string | null
      /**
       * @description The contact's phone number.
       * @example 5108890293
       */
      phone_number?: string | null
      /**
       * @description The contact's details.
       * @example Executive Assistant to Tom Wambsgans
       */
      details?: string | null
      /**
       * Format: uuid
       * @description The contact's account.
       * @example 28b54125-287f-494d-965e-3c5b330c9a68
       */
      account?: string | null
      /** @example {
       *       "unique_integration_field": "unique_integration_field_value"
       *     } */
      integration_params?: {
        [key: string]: unknown
      } | null
      /** @example {
       *       "unique_linked_account_field": "unique_linked_account_field_value"
       *     } */
      linked_account_params?: {
        [key: string]: unknown
      } | null
    }
    CreateFieldMappingRequest: {
      /**
       * @description The name of the target field you want this remote field to map to.
       * @example example_target_field_name
       */
      target_field_name: string
      /**
       * @description The description of the target field you want this remote field to map to.
       * @example this is a example description of the target field
       */
      target_field_description: string
      /**
       * @description The field traversal path of the remote field listed when you hit the GET /remote-fields endpoint.
       * @example [
       *       "example_remote_field"
       *     ]
       */
      remote_field_traversal_path: unknown[]
      /**
       * @description The method of the remote endpoint where the remote field is coming from.
       * @example GET
       */
      remote_method: string
      /**
       * @description The path of the remote endpoint where the remote field is coming from.
       * @example /example-url-path
       */
      remote_url_path: string
      /**
       * @description The name of the Common Model that the remote field corresponds to in a given category.
       * @example ExampleCommonModel
       */
      common_model_name: string
    }
    /** @description # The DataPassthrough Object
     *     ### Description
     *     The `DataPassthrough` object is used to send information to an otherwise-unsupported third-party endpoint.
     *
     *     ### Usage Example
     *     Create a `DataPassthrough` to get team hierarchies from your Rippling integration. */
    DataPassthroughRequest: {
      /** @example POST */
      method: components['schemas']['MethodEnum']
      /**
       * @description The path of the request in the third party's platform.
       * @example /scooters
       */
      path: string
      /**
       * @description An optional override of the third party's base url for the request.
       * @example https://api.example.com
       */
      base_url_override?: string | null
      /**
       * @description The data with the request. You must include a `request_format` parameter matching the data's format
       * @example {"company": "Lime", "model": "Gen 2.5"}
       */
      data?: string | null
      /** @description Pass an array of `MultipartFormField` objects in here instead of using the `data` param if `request_format` is set to `MULTIPART`. */
      multipart_form_data?:
        | components['schemas']['MultipartFormFieldRequest'][]
        | null
      /**
       * @description The headers to use for the request (Merge will handle the account's authorization headers). `Content-Type` header is required for passthrough. Choose content type corresponding to expected format of receiving server.
       * @example {
       *       "EXTRA-HEADER": "value"
       *     }
       */
      headers?: {
        [key: string]: unknown
      } | null
      /** @example JSON */
      request_format?: components['schemas']['RequestFormatEnum'] | null
      /** @description Optional. If true, the response will always be an object of the form `{"type": T, "value": ...}` where `T` will be one of `string, boolean, number, null, array, object`. */
      normalize_response?: boolean
    }
    DebugModeLog: {
      /** @example 99433219-8017-4acd-bb3c-ceb23d663832 */
      log_id: string
      /** @example https://app.merge.dev/logs/99433219-8017-4acd-bb3c-ceb23d663832 */
      dashboard_view: string
      /** @example {
       *       "url": "www.exampleintegration.com/api/v1/exampleapi",
       *       "method": "POST",
       *       "status_code": 200
       *     } */
      log_summary: components['schemas']['DebugModelLogSummary']
    }
    DebugModelLogSummary: {
      /** @example www.exampleintegration.com/api/v1/exampleapi */
      url: string
      /** @example POST */
      method: string
      /** @example 200 */
      status_code: number
    }
    /**
     * @description * `READ` - READ
     *     * `WRITE` - WRITE
     * @enum {string}
     */
    EnabledActionsEnum: 'READ' | 'WRITE'
    /**
     * @description * `RAW` - RAW
     *     * `BASE64` - BASE64
     *     * `GZIP_BASE64` - GZIP_BASE64
     * @enum {string}
     */
    EncodingEnum: 'RAW' | 'BASE64' | 'GZIP_BASE64'
    EndUserDetailsRequest: {
      /**
       * @description Your end user's email address. This is purely for identification purposes - setting this value will not cause any emails to be sent.
       * @example example@gmail.com
       */
      end_user_email_address: string
      /**
       * @description Your end user's organization.
       * @example Test Organization
       */
      end_user_organization_name: string
      /**
       * @description This unique identifier typically represents the ID for your end user in your product's database. This value must be distinct from other Linked Accounts' unique identifiers.
       * @example 12345
       */
      end_user_origin_id: string
      /**
       * @description The integration categories to show in Merge Link.
       * @example [
       *       "hris",
       *       "ats"
       *     ]
       */
      categories: components['schemas']['CategoriesEnum'][]
      /**
       * @description The slug of a specific pre-selected integration for this linking flow token. For examples of slugs, see https://docs.merge.dev/guides/merge-link/single-integration/.
       * @example bamboohr
       */
      integration?: string | null
      /**
       * @description An integer number of minutes between [30, 720 or 10080 if for a Magic Link URL] for how long this token is valid. Defaults to 30.
       * @default 30
       */
      link_expiry_mins: number
      /**
       * @description Whether to generate a Magic Link URL. Defaults to false. For more information on Magic Link, see https://merge.dev/blog/integrations-fast-say-hello-to-magic-link.
       * @default false
       */
      should_create_magic_link_url: boolean | null
      /**
       * @description Whether to generate a Magic Link URL on the Admin Needed screen during the linking flow. Defaults to false. For more information on Magic Link, see https://merge.dev/blog/integrations-fast-say-hello-to-magic-link.
       * @default false
       */
      hide_admin_magic_link: boolean | null
      /** @description An array of objects to specify the models and fields that will be disabled for a given Linked Account. Each object uses model_id, enabled_actions, and disabled_fields to specify the model, method, and fields that are scoped for a given Linked Account. */
      common_models?:
        | components['schemas']['CommonModelScopesBodyRequest'][]
        | null
      /**
       * @description When creating a Link Token, you can set permissions for Common Models that will apply to the account that is going to be linked. Any model or field not specified in link token payload will default to existing settings.
       * @example {
       *       "hris": [
       *         {
       *           "model_name": "Employee",
       *           "model_permissions": {
       *             "READ": {
       *               "is_enabled": true
       *             },
       *             "WRITE": {
       *               "is_enabled": true
       *             }
       *           },
       *           "field_permissions": {
       *             "enabled_fields": [
       *               "first_name",
       *               "last_name",
       *               "personal_email"
       *             ],
       *             "disabled_fields": [
       *               "preferred_name"
       *             ]
       *           }
       *         },
       *         {
       *           "model_name": "Employment",
       *           "model_permissions": {
       *             "READ": {
       *               "is_enabled": false
       *             },
       *             "WRITE": {
       *               "is_enabled": false
       *             }
       *           },
       *           "field_permissions": {
       *             "enabled_fields": [
       *               "effective_date"
       *             ]
       *           }
       *         }
       *       ],
       *       "ats": [
       *         {
       *           "model_name": "Job",
       *           "model_permissions": {
       *             "READ": {
       *               "is_enabled": true
       *             },
       *             "WRITE": {
       *               "is_enabled": true
       *             }
       *           },
       *           "field_permissions": {
       *             "enabled_fields": [
       *               "name"
       *             ],
       *             "disabled_fields": [
       *               "description"
       *             ]
       *           }
       *         },
       *         {
       *           "model_name": "Department",
       *           "model_permissions": {
       *             "READ": {
       *               "is_enabled": true
       *             },
       *             "WRITE": {
       *               "is_enabled": true
       *             }
       *           }
       *         }
       *       ]
       *     }
       */
      category_common_model_scopes?: {
        [
          key: string
        ]: components['schemas']['IndividualCommonModelScopeDeserializerRequest'][]
      } | null
      /**
       * @description The following subset of IETF language tags can be used to configure localization.
       *
       *     * `en` - en
       *     * `de` - de
       * @example en
       */
      language?: components['schemas']['LanguageEnum'] | null
      /**
       * @description The boolean that indicates whether initial, periodic, and force syncs will be disabled.
       * @default false
       */
      are_syncs_disabled: boolean | null
      /**
       * @description A JSON object containing integration-specific configuration options.
       * @example {
       *       "rippling": {
       *         "oauth_code": "3h1jj8ssdf31dfji3o1jjdfjasd"
       *       }
       *     }
       */
      integration_specific_config?: {
        [key: string]: unknown
      } | null
    }
    ErrorValidationProblem: {
      /** @example {
       *       "pointer": "/model/custom_fields"
       *     } */
      source?: components['schemas']['ValidationProblemSource']
      /** @example Missing Required Field */
      title: string
      /** @example custom_fields is a required field on model. */
      detail: string
      /** @example MISSING_REQUIRED_FIELD */
      problem_type: string
    }
    /**
     * @description * `CREATED_REMOTE_PRODUCTION_API_KEY` - CREATED_REMOTE_PRODUCTION_API_KEY
     *     * `DELETED_REMOTE_PRODUCTION_API_KEY` - DELETED_REMOTE_PRODUCTION_API_KEY
     *     * `CREATED_TEST_API_KEY` - CREATED_TEST_API_KEY
     *     * `DELETED_TEST_API_KEY` - DELETED_TEST_API_KEY
     *     * `REGENERATED_PRODUCTION_API_KEY` - REGENERATED_PRODUCTION_API_KEY
     *     * `INVITED_USER` - INVITED_USER
     *     * `TWO_FACTOR_AUTH_ENABLED` - TWO_FACTOR_AUTH_ENABLED
     *     * `TWO_FACTOR_AUTH_DISABLED` - TWO_FACTOR_AUTH_DISABLED
     *     * `DELETED_LINKED_ACCOUNT` - DELETED_LINKED_ACCOUNT
     *     * `CREATED_DESTINATION` - CREATED_DESTINATION
     *     * `DELETED_DESTINATION` - DELETED_DESTINATION
     *     * `CHANGED_DESTINATION` - CHANGED_DESTINATION
     *     * `CHANGED_SCOPES` - CHANGED_SCOPES
     *     * `CHANGED_PERSONAL_INFORMATION` - CHANGED_PERSONAL_INFORMATION
     *     * `CHANGED_ORGANIZATION_SETTINGS` - CHANGED_ORGANIZATION_SETTINGS
     *     * `ENABLED_INTEGRATION` - ENABLED_INTEGRATION
     *     * `DISABLED_INTEGRATION` - DISABLED_INTEGRATION
     *     * `ENABLED_CATEGORY` - ENABLED_CATEGORY
     *     * `DISABLED_CATEGORY` - DISABLED_CATEGORY
     *     * `CHANGED_PASSWORD` - CHANGED_PASSWORD
     *     * `RESET_PASSWORD` - RESET_PASSWORD
     *     * `ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION` - ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION
     *     * `ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT` - ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT
     *     * `DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION` - DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION
     *     * `DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT` - DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT
     *     * `CREATED_INTEGRATION_WIDE_FIELD_MAPPING` - CREATED_INTEGRATION_WIDE_FIELD_MAPPING
     *     * `CREATED_LINKED_ACCOUNT_FIELD_MAPPING` - CREATED_LINKED_ACCOUNT_FIELD_MAPPING
     *     * `CHANGED_INTEGRATION_WIDE_FIELD_MAPPING` - CHANGED_INTEGRATION_WIDE_FIELD_MAPPING
     *     * `CHANGED_LINKED_ACCOUNT_FIELD_MAPPING` - CHANGED_LINKED_ACCOUNT_FIELD_MAPPING
     *     * `DELETED_INTEGRATION_WIDE_FIELD_MAPPING` - DELETED_INTEGRATION_WIDE_FIELD_MAPPING
     *     * `DELETED_LINKED_ACCOUNT_FIELD_MAPPING` - DELETED_LINKED_ACCOUNT_FIELD_MAPPING
     *     * `CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
     *     * `CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
     *     * `DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE` - DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE
     *     * `FORCED_LINKED_ACCOUNT_RESYNC` - FORCED_LINKED_ACCOUNT_RESYNC
     *     * `MUTED_ISSUE` - MUTED_ISSUE
     *     * `GENERATED_MAGIC_LINK` - GENERATED_MAGIC_LINK
     *     * `ENABLED_MERGE_WEBHOOK` - ENABLED_MERGE_WEBHOOK
     *     * `DISABLED_MERGE_WEBHOOK` - DISABLED_MERGE_WEBHOOK
     *     * `MERGE_WEBHOOK_TARGET_CHANGED` - MERGE_WEBHOOK_TARGET_CHANGED
     *     * `END_USER_CREDENTIALS_ACCESSED` - END_USER_CREDENTIALS_ACCESSED
     * @enum {string}
     */
    EventTypeEnum:
      | 'CREATED_REMOTE_PRODUCTION_API_KEY'
      | 'DELETED_REMOTE_PRODUCTION_API_KEY'
      | 'CREATED_TEST_API_KEY'
      | 'DELETED_TEST_API_KEY'
      | 'REGENERATED_PRODUCTION_API_KEY'
      | 'INVITED_USER'
      | 'TWO_FACTOR_AUTH_ENABLED'
      | 'TWO_FACTOR_AUTH_DISABLED'
      | 'DELETED_LINKED_ACCOUNT'
      | 'CREATED_DESTINATION'
      | 'DELETED_DESTINATION'
      | 'CHANGED_DESTINATION'
      | 'CHANGED_SCOPES'
      | 'CHANGED_PERSONAL_INFORMATION'
      | 'CHANGED_ORGANIZATION_SETTINGS'
      | 'ENABLED_INTEGRATION'
      | 'DISABLED_INTEGRATION'
      | 'ENABLED_CATEGORY'
      | 'DISABLED_CATEGORY'
      | 'CHANGED_PASSWORD'
      | 'RESET_PASSWORD'
      | 'ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION'
      | 'ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT'
      | 'DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION'
      | 'DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT'
      | 'CREATED_INTEGRATION_WIDE_FIELD_MAPPING'
      | 'CREATED_LINKED_ACCOUNT_FIELD_MAPPING'
      | 'CHANGED_INTEGRATION_WIDE_FIELD_MAPPING'
      | 'CHANGED_LINKED_ACCOUNT_FIELD_MAPPING'
      | 'DELETED_INTEGRATION_WIDE_FIELD_MAPPING'
      | 'DELETED_LINKED_ACCOUNT_FIELD_MAPPING'
      | 'CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE'
      | 'CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE'
      | 'DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE'
      | 'FORCED_LINKED_ACCOUNT_RESYNC'
      | 'MUTED_ISSUE'
      | 'GENERATED_MAGIC_LINK'
      | 'ENABLED_MERGE_WEBHOOK'
      | 'DISABLED_MERGE_WEBHOOK'
      | 'MERGE_WEBHOOK_TARGET_CHANGED'
      | 'END_USER_CREDENTIALS_ACCESSED'
    ExternalTargetFieldAPI: {
      /** @example example_target_field_name */
      readonly name?: string | null
      /** @example this is a example description of a target field */
      readonly description?: string | null
      /** @example true */
      readonly is_mapped?: string | null
    }
    ExternalTargetFieldAPIResponse: {
      Ticket?: components['schemas']['ExternalTargetFieldAPI'][]
      Comment?: components['schemas']['ExternalTargetFieldAPI'][]
      Project?: components['schemas']['ExternalTargetFieldAPI'][]
      Collection?: components['schemas']['ExternalTargetFieldAPI'][]
      User?: components['schemas']['ExternalTargetFieldAPI'][]
      Role?: components['schemas']['ExternalTargetFieldAPI'][]
      Account?: components['schemas']['ExternalTargetFieldAPI'][]
      Team?: components['schemas']['ExternalTargetFieldAPI'][]
      Attachment?: components['schemas']['ExternalTargetFieldAPI'][]
      Tag?: components['schemas']['ExternalTargetFieldAPI'][]
      Contact?: components['schemas']['ExternalTargetFieldAPI'][]
    }
    /**
     * @description * `string` - string
     *     * `number` - number
     *     * `date` - date
     *     * `datetime` - datetime
     *     * `bool` - bool
     *     * `list` - list
     * @enum {string}
     */
    FieldFormatEnum: 'string' | 'number' | 'date' | 'datetime' | 'bool' | 'list'
    FieldMappingApiInstance: {
      /**
       * Format: uuid
       * @example 3fa85f64-5717-4562-b3fc-2c963f66afa6
       */
      readonly id?: string
      readonly is_integration_wide?: boolean
      /** @example {
       *       "name": "example_target_field_name",
       *       "description": "this is a example description of a target field",
       *       "is_organization_wide": true
       *     } */
      readonly target_field?: {
        name: string
        description: string
        is_organization_wide: boolean
      } | null
      /** @example {
       *       "remote_key_name": "example_remote_field_key",
       *       "schema": {
       *         "type": "string"
       *       },
       *       "remote_endpoint_info": {
       *         "method": "GET",
       *         "url_path": "/example-url-path",
       *         "field_traversal_path": [
       *           "example_remote_field_key"
       *         ]
       *       }
       *     } */
      readonly remote_field?: {
        remote_key_name: string | null
        schema: {
          [key: string]: unknown
        } | null
        remote_endpoint_info: {
          method: string | null
          url_path: string | null
          field_traversal_path: string[] | null
        }
      } | null
    }
    FieldMappingApiInstanceResponse: {
      Ticket?: components['schemas']['FieldMappingApiInstance'][]
      Comment?: components['schemas']['FieldMappingApiInstance'][]
      Project?: components['schemas']['FieldMappingApiInstance'][]
      Collection?: components['schemas']['FieldMappingApiInstance'][]
      User?: components['schemas']['FieldMappingApiInstance'][]
      Role?: components['schemas']['FieldMappingApiInstance'][]
      Account?: components['schemas']['FieldMappingApiInstance'][]
      Team?: components['schemas']['FieldMappingApiInstance'][]
      Attachment?: components['schemas']['FieldMappingApiInstance'][]
      Tag?: components['schemas']['FieldMappingApiInstance'][]
      Contact?: components['schemas']['FieldMappingApiInstance'][]
    }
    FieldMappingInstanceResponse: {
      model: components['schemas']['FieldMappingApiInstance']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    FieldPermissionDeserializer: {
      enabled_fields?: unknown[]
      disabled_fields?: unknown[]
    }
    FieldPermissionDeserializerRequest: {
      enabled_fields?: unknown[]
      disabled_fields?: unknown[]
    }
    /**
     * @description * `string` - string
     *     * `number` - number
     *     * `date` - date
     *     * `datetime` - datetime
     *     * `bool` - bool
     *     * `list` - list
     * @enum {string}
     */
    FieldTypeEnum: 'string' | 'number' | 'date' | 'datetime' | 'bool' | 'list'
    /** @description # The GenerateRemoteKey Object
     *     ### Description
     *     The `GenerateRemoteKey` object is used to represent a request for a new remote key.
     *
     *     ### Usage Example
     *     Post a `GenerateRemoteKey` to create a new remote key. */
    GenerateRemoteKeyRequest: {
      /**
       * @description The name of the remote key
       * @example Remote Deployment Key 1
       */
      name: string
    }
    IndividualCommonModelScopeDeserializer: {
      model_name: string
      model_permissions?: {
        [key: string]: components['schemas']['ModelPermissionDeserializer']
      }
      field_permissions?: components['schemas']['FieldPermissionDeserializer']
    }
    IndividualCommonModelScopeDeserializerRequest: {
      model_name: string
      model_permissions?: {
        [
          key: string
        ]: components['schemas']['ModelPermissionDeserializerRequest']
      }
      field_permissions?: components['schemas']['FieldPermissionDeserializerRequest']
    }
    Issue: {
      /**
       * Format: uuid
       * @example 3fa85f64-5717-4562-b3fc-2c963f66afa6
       */
      readonly id?: string
      /**
       * @description Status of the issue. Options: ('ONGOING', 'RESOLVED')
       *
       *     * `ONGOING` - ONGOING
       *     * `RESOLVED` - RESOLVED
       * @example ONGOING
       */
      status?: components['schemas']['IssueStatusEnum']
      /** @example Missing Permissions */
      error_description: string
      /** @example b82302de-852e-4e60-b050-edf9da3b7c02 */
      readonly end_user?: {
        [key: string]: unknown
      }
      /**
       * Format: date-time
       * @example 2022-12-05T16:19:15.161Z
       */
      first_incident_time?: string | null
      /**
       * Format: date-time
       * @example 2022-12-05T16:19:15.161Z
       */
      last_incident_time?: string | null
      /** @example true */
      readonly is_muted?: boolean
      /** @example [
       *       "Missing employee permissions.",
       *       "Missing time off permissions."
       *     ] */
      readonly error_details?: string[]
    }
    /**
     * @description * `ONGOING` - ONGOING
     *     * `RESOLVED` - RESOLVED
     * @enum {string}
     */
    IssueStatusEnum: 'ONGOING' | 'RESOLVED'
    /**
     * @description * `string` - uuid
     *     * `number` - url
     *     * `date` - email
     *     * `datetime` - phone
     *     * `bool` - currency
     *     * `list` - decimal
     * @enum {string}
     */
    ItemFormatEnum: 'string' | 'number' | 'date' | 'datetime' | 'bool' | 'list'
    ItemSchema: {
      item_type?: components['schemas']['ItemTypeEnum']
      item_format?: components['schemas']['ItemFormatEnum']
      item_choices?: string[]
    }
    /**
     * @description * `string` - string
     *     * `number` - number
     *     * `date` - date
     *     * `datetime` - datetime
     *     * `bool` - bool
     *     * `list` - list
     * @enum {string}
     */
    ItemTypeEnum: 'string' | 'number' | 'date' | 'datetime' | 'bool' | 'list'
    /**
     * @description * `en` - en
     *     * `de` - de
     * @enum {string}
     */
    LanguageEnum: 'en' | 'de'
    LinkToken: {
      /** @example necdP7FtdASl1fQwm62be2_dM4wBG8_GactqoUV0 */
      link_token: string
      /** @example Lever */
      integration_name?: string
      /** @example https://link.merge.dev/asdfjkl12345jsndfgi2i83n */
      magic_link_url?: string
    }
    LinkedAccountCommonModelScopeDeserializerRequest: {
      /**
       * @description The common models you want to update the scopes for
       * @example [
       *       {
       *         "model_name": "Employee",
       *         "model_permissions": {
       *           "READ": {
       *             "is_enabled": true
       *           },
       *           "WRITE": {
       *             "is_enabled": false
       *           }
       *         },
       *         "field_permissions": {
       *           "enabled_fields": [
       *             "avatar",
       *             "home_location"
       *           ],
       *           "disabled_fields": [
       *             "work_location"
       *           ]
       *         }
       *       },
       *       {
       *         "model_name": "Benefit",
       *         "model_permissions": {
       *           "WRITE": {
       *             "is_enabled": false
       *           }
       *         }
       *       }
       *     ]
       */
      common_models: components['schemas']['IndividualCommonModelScopeDeserializerRequest'][]
    }
    LinkedAccountStatus: {
      linked_account_status: string
      can_make_request: boolean
    }
    MetaResponse: {
      /** @example {
       *       "type": "object",
       *       "properties": {
       *         "model": {
       *           "type": "object",
       *           "required": [
       *             "last_name",
       *             "first_name",
       *             "merge_categories",
       *             "new_york_city_neighborhood",
       *             "favorite_tv_shows",
       *             "favorite_watch"
       *           ],
       *           "properties": {
       *             "email_addresses": {
       *               "type": "array",
       *               "items": {
       *                 "type": "object",
       *                 "properties": {
       *                   "value": {
       *                     "type": "string",
       *                     "title": "value"
       *                   },
       *                   "email_address_type": {
       *                     "type": "string",
       *                     "title": "email_address_type"
       *                   },
       *                   "integration_params": {
       *                     "type": "object",
       *                     "title": "integration_params",
       *                     "properties": {}
       *                   },
       *                   "linked_account_params": {
       *                     "type": "object",
       *                     "title": "linked_account_params",
       *                     "properties": {}
       *                   }
       *                 }
       *               },
       *               "title": "email_addresses",
       *               "description": "Array of email_addresses objects"
       *             },
       *             "urls": {
       *               "type": "array",
       *               "items": {
       *                 "type": "object",
       *                 "properties": {
       *                   "value": {
       *                     "type": "string",
       *                     "title": "value"
       *                   },
       *                   "url_type": {
       *                     "type": "string",
       *                     "title": "url_type"
       *                   },
       *                   "integration_params": {
       *                     "type": "object",
       *                     "title": "integration_params",
       *                     "properties": {}
       *                   },
       *                   "linked_account_params": {
       *                     "type": "object",
       *                     "title": "linked_account_params",
       *                     "properties": {}
       *                   }
       *                 }
       *               },
       *               "title": "urls",
       *               "description": "Array of urls objects"
       *             },
       *             "first_name": {
       *               "type": "string",
       *               "title": "first_name",
       *               "description": "The first name."
       *             },
       *             "last_name": {
       *               "type": "string",
       *               "title": "last_name",
       *               "description": "The last name."
       *             },
       *             "phone_numbers": {
       *               "type": "array",
       *               "items": {
       *                 "type": "object",
       *                 "properties": {
       *                   "value": {
       *                     "type": "string",
       *                     "title": "value"
       *                   },
       *                   "phone_number_type": {
       *                     "type": "string",
       *                     "title": "phone_number_type"
       *                   },
       *                   "integration_params": {
       *                     "type": "object",
       *                     "title": "integration_params",
       *                     "properties": {}
       *                   },
       *                   "linked_account_params": {
       *                     "type": "object",
       *                     "title": "linked_account_params",
       *                     "properties": {}
       *                   }
       *                 }
       *               },
       *               "title": "phone_numbers",
       *               "description": "Array of phone_numbers objects"
       *             },
       *             "tags": {
       *               "type": "array",
       *               "items": {
       *                 "type": "string",
       *                 "format": "uuid"
       *               },
       *               "title": "tags",
       *               "description": "Array of tags names"
       *             },
       *             "attachments": {
       *               "type": "array",
       *               "items": {
       *                 "type": "object",
       *                 "properties": {
       *                   "id": {
       *                     "type": "string",
       *                     "title": "id"
       *                   },
       *                   "file_url": {
       *                     "type": "string",
       *                     "title": "file_url"
       *                   },
       *                   "file_name": {
       *                     "type": "string",
       *                     "title": "file_name"
       *                   },
       *                   "attachment_type": {
       *                     "type": "string",
       *                     "title": "attachment_type"
       *                   },
       *                   "integration_params": {
       *                     "type": "object",
       *                     "title": "integration_params",
       *                     "properties": {}
       *                   },
       *                   "linked_account_params": {
       *                     "type": "object",
       *                     "title": "linked_account_params",
       *                     "properties": {}
       *                   }
       *                 }
       *               },
       *               "title": "attachments",
       *               "description": "Array of attachments objects "
       *             },
       *             "merge_categories": {
       *               "type": "array",
       *               "categories": {
       *                 "type": "string",
       *                 "enum": [
       *                   "HRIS",
       *                   "ATS",
       *                   "Accounting",
       *                   "Ticketing",
       *                   "File Storage",
       *                   "CRM",
       *                   "Marketing Automation"
       *                 ],
       *                 "enum_information": [
       *                   {
       *                     "value": "HRIS",
       *                     "description": "Merge HRIS Category"
       *                   },
       *                   {
       *                     "value": "ATS",
       *                     "description": "Merge ATS Category"
       *                   },
       *                   {
       *                     "value": "Accounting",
       *                     "description": "Merge Accounting Category"
       *                   },
       *                   {
       *                     "value": "Ticketing",
       *                     "description": "Merge Ticketing Category"
       *                   },
       *                   {
       *                     "value": "File Storage",
       *                     "description": "Merge File Storage Category"
       *                   },
       *                   {
       *                     "value": "CRM",
       *                     "description": "Merge CRM Category"
       *                   },
       *                   {
       *                     "value": "Marketing Automation",
       *                     "description": "Merge Marketing Automation Category"
       *                   }
       *                 ]
       *               },
       *               "title": "Merge Categories",
       *               "description": "Array of Merge's Unified API Categories"
       *             },
       *             "new_york_city_neighborhood": {
       *               "type": "string",
       *               "title": "Borough",
       *               "description": "One of the 5 Boroughs of New York City"
       *             },
       *             "favorite_tv_shows": {
       *               "type": "array",
       *               "items": {
       *                 "type": "string",
       *                 "format": "uuid"
       *               },
       *               "title": "Favorite TV Shows",
       *               "description": "Array of TV Show objects on merge.tv_shows"
       *             },
       *             "favorite_watch": {
       *               "type": "string",
       *               "title": "Favorite Watch",
       *               "description": "Favorite watch of all time"
       *             }
       *           }
       *         }
       *       }
       *     } */
      request_schema: {
        [key: string]: unknown
      }
      remote_field_classes?: {
        [key: string]: unknown
      }
      /** @example {
       *       "linked_account_status": "COMPLETE",
       *       "can_make_request": true
       *     } */
      status?: components['schemas']['LinkedAccountStatus']
      has_conditional_params: boolean
      has_required_linked_account_params: boolean
    }
    /**
     * @description * `GET` - GET
     *     * `OPTIONS` - OPTIONS
     *     * `HEAD` - HEAD
     *     * `POST` - POST
     *     * `PUT` - PUT
     *     * `PATCH` - PATCH
     *     * `DELETE` - DELETE
     * @enum {string}
     */
    MethodEnum: 'GET' | 'OPTIONS' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    /** @description # The ModelOperation Object
     *     ### Description
     *     The `ModelOperation` object is used to represent the operations that are currently supported for a given model.
     *
     *     ### Usage Example
     *     View what operations are supported for the `Candidate` endpoint. */
    ModelOperation: {
      /** @example Candidate */
      model_name: string
      /** @example [
       *       "FETCH",
       *       "CREATE"
       *     ] */
      available_operations: string[]
      /** @example [
       *       "remote_user_id"
       *     ] */
      required_post_parameters: string[]
      /** @example [
       *       "first_name",
       *       "last_name",
       *       "company",
       *       "title"
       *     ] */
      supported_fields: string[]
    }
    ModelPermissionDeserializer: {
      is_enabled?: boolean
    }
    ModelPermissionDeserializerRequest: {
      is_enabled?: boolean
    }
    /** @description # The MultipartFormField Object
     *     ### Description
     *     The `MultipartFormField` object is used to represent fields in an HTTP request using `multipart/form-data`.
     *
     *     ### Usage Example
     *     Create a `MultipartFormField` to define a multipart form entry. */
    MultipartFormFieldRequest: {
      /**
       * @description The name of the form field
       * @example resume
       */
      name: string
      /**
       * @description The data for the form field.
       * @example SW50ZWdyYXRlIGZhc3QKSW50ZWdyYXRlIG9uY2U=
       */
      data: string
      /**
       * @description The encoding of the value of `data`. Defaults to `RAW` if not defined.
       *
       *     * `RAW` - RAW
       *     * `BASE64` - BASE64
       *     * `GZIP_BASE64` - GZIP_BASE64
       * @default RAW
       * @example BASE64
       */
      encoding: components['schemas']['EncodingEnum']
      /**
       * @description The file name of the form field, if the field is for a file.
       * @example resume.pdf
       */
      file_name?: string | null
      /**
       * @description The MIME type of the file, if the field is for a file.
       * @example application/pdf
       */
      content_type?: string | null
    }
    PaginatedAccountDetailsAndActionsList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['AccountDetailsAndActions'][]
    }
    PaginatedAccountList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Account'][]
    }
    PaginatedAttachmentList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Attachment'][]
    }
    PaginatedAuditLogEventList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['AuditLogEvent'][]
    }
    PaginatedCollectionList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Collection'][]
    }
    PaginatedCommentList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Comment'][]
    }
    PaginatedContactList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Contact'][]
    }
    PaginatedIssueList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Issue'][]
    }
    PaginatedProjectList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Project'][]
    }
    PaginatedRemoteFieldClassList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['RemoteFieldClass'][]
    }
    PaginatedRoleList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Role'][]
    }
    PaginatedSyncStatusList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['SyncStatus'][]
    }
    PaginatedTagList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Tag'][]
    }
    PaginatedTeamList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Team'][]
    }
    PaginatedTicketList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Ticket'][]
    }
    PaginatedUserList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['User'][]
    }
    PaginatedViewerList: {
      /** @example cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw */
      next?: string | null
      /** @example cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ */
      previous?: string | null
      results?: components['schemas']['Viewer'][]
    }
    PatchedEditFieldMappingRequest: {
      /**
       * @description The field traversal path of the remote field listed when you hit the GET /remote-fields endpoint.
       * @example [
       *       "example_remote_field_name"
       *     ]
       */
      remote_field_traversal_path?: unknown[]
      /**
       * @description The method of the remote endpoint where the remote field is coming from.
       * @example GET
       */
      remote_method?: string
      /**
       * @description The path of the remote endpoint where the remote field is coming from.
       * @example /example-url-path
       */
      remote_url_path?: string
    }
    PatchedTicketEndpointRequest: {
      model: components['schemas']['PatchedTicketRequest']
    }
    /** @description # The Ticket Object
     *     ### Description
     *     The `Ticket` object is used to represent a ticket, issue, task or case.
     *     ### Usage Example
     *     TODO */
    PatchedTicketRequest: {
      /**
       * @description The ticket's name.
       * @example Please add more integrations
       */
      name?: string | null
      /**
       * @description The individual `Users` who are assigned to this ticket. This does not include `Users` who just have view access to this ticket. To fetch all `Users` and `Teams` that can access the ticket, use the `GET /tickets/{ticket_id}/viewers` [endpoint](https://docs.merge.dev/ticketing/tickets/#tickets_viewers_list).
       * @example [
       *       "17a54124-287f-494d-965e-3c5b330c9a68"
       *     ]
       */
      assignees?: (string | null)[]
      /**
       * @description The `Teams` that are assigned to this ticket. This does not include `Teams` who just have view access to this ticket. To fetch all `Users` and `Teams` that can access this ticket, use the `GET /tickets/{ticket_id}/viewers` [endpoint](https://docs.merge.dev/ticketing/tickets/#tickets_viewers_list).
       * @example [
       *       "4857c306-c1f9-489e-a6b6-90902f736dfe"
       *     ]
       */
      assigned_teams?: (string | null)[]
      /**
       * Format: uuid
       * @description The user who created this ticket.
       */
      creator?: string | null
      /**
       * Format: date-time
       * @description The ticket's due date.
       * @example 2022-10-11T00:00:00Z
       */
      due_date?: string | null
      /**
       * @description The current status of the ticket.
       *
       *     * `OPEN` - OPEN
       *     * `CLOSED` - CLOSED
       *     * `IN_PROGRESS` - IN_PROGRESS
       *     * `ON_HOLD` - ON_HOLD
       * @example OPEN
       */
      status?: components['schemas']['TicketStatusEnum'] | null
      /**
       * @description The ticket’s description. HTML version of description is mapped if supported by the third-party platform.
       * @example Can you please add more integrations? It'll make syncing data much easier!
       */
      description?: string | null
      /**
       * @description The `Collections` that this `Ticket` is included in.
       * @example [
       *       "fb8c55b6-1cb8-4b4c-9fb6-17924231619d"
       *     ]
       */
      collections?: (string | null)[]
      /**
       * @description The sub category of the ticket within the 3rd party system. Examples include incident, task, subtask or to-do.
       * @example incident
       */
      ticket_type?: string | null
      /**
       * Format: uuid
       * @description The account associated with the ticket.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The contact associated with the ticket.
       * @example 65c345ba-6870-4974-87ba-dd31509c367a
       */
      contact?: string | null
      /**
       * Format: uuid
       * @description The ticket's parent ticket.
       * @example 75b33d04-30d2-4f3e-be45-27838bc94342
       */
      parent_ticket?: string | null
      /** @example [
       *       "enterprise",
       *       "other-tag"
       *     ] */
      tags?: (string | null)[]
      /** @example [
       *       "21a54124-397f-494d-985e-3c5b330b8a68",
       *       "17a54124-287f-494d-965e-3c5b330c9a68"
       *     ] */
      roles?: (string | null)[]
      /**
       * Format: date-time
       * @description When the ticket was completed.
       * @example 2021-12-09T00:00:00Z
       */
      completed_at?: string | null
      /**
       * Format: uri
       * @description The 3rd party url of the Ticket.
       * @example https://thirdpartysoftware.com/project/3/issue/1
       */
      ticket_url?: string | null
      /**
       * @description The priority or urgency of the Ticket.
       *
       *     * `URGENT` - URGENT
       *     * `HIGH` - HIGH
       *     * `NORMAL` - NORMAL
       *     * `LOW` - LOW
       * @example HIGH
       */
      priority?: components['schemas']['PriorityEnum'] | null
      /** @example {
       *       "unique_integration_field": "unique_integration_field_value"
       *     } */
      integration_params?: {
        [key: string]: unknown
      } | null
      /** @example {
       *       "unique_linked_account_field": "unique_linked_account_field_value"
       *     } */
      linked_account_params?: {
        [key: string]: unknown
      } | null
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
    }
    /**
     * @description * `URGENT` - URGENT
     *     * `HIGH` - HIGH
     *     * `NORMAL` - NORMAL
     *     * `LOW` - LOW
     * @enum {string}
     */
    PriorityEnum: 'URGENT' | 'HIGH' | 'NORMAL' | 'LOW'
    /** @description # The Project Object
     *     ### Description
     *     Please use the `Collection` model. This model will be fully deprecated on 3/30/2024.
     *
     *     ### Usage Example
     *     TODO */
    Project: {
      /**
       * Format: uuid
       * @example fb8c55b6-1cb8-4b4c-9fb6-17924231619d
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202938
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The project's name.
       * @example Q1 Platform
       */
      name?: string | null
      /**
       * @description The project's description.
       * @example For tracking all tasks related to Platform for Q1
       */
      description?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The RemoteData Object
     *     ### Description
     *     The `RemoteData` object is used to represent the full data pulled from the third-party API for an object.
     *
     *     ### Usage Example
     *     TODO */
    RemoteData: {
      /**
       * @description The third-party API path that is being called.
       * @example /platform-endpoint
       */
      path: string
      /**
       * @description The data returned from the third-party for this object in its original, unnormalized format.
       * @example [
       *       "Varies by platform"
       *     ]
       */
      readonly data?: unknown
    }
    RemoteEndpointInfo: {
      /** @example GET */
      method: string
      /** @example /example-url-path */
      url_path: string
      /** @example [
       *       "example_key_name"
       *     ] */
      field_traversal_path: unknown[]
    }
    RemoteField: {
      remote_field_class: components['schemas']['RemoteFieldClass']
      /** @example string */
      value?: {
        [key: string]: unknown
      }
    }
    RemoteFieldAPI: {
      /** @example {
       *       "type": "string"
       *     } */
      schema: {
        [key: string]: unknown
      }
      /** @example example_remote_key_name */
      remote_key_name: string
      /** @example {
       *       "method": "GET",
       *       "url_path": "/example-url-path",
       *       "field_traversal_path": [
       *         "example_key_name"
       *       ]
       *     } */
      remote_endpoint_info: components['schemas']['RemoteEndpointInfo']
      /** @example [
       *       "example"
       *     ] */
      example_values?: unknown[] | null
      advanced_metadata: components['schemas']['AdvancedMetadata'] | null
      /** @example 0.33 */
      readonly coverage?: number | null
    }
    RemoteFieldAPIResponse: {
      Ticket?: components['schemas']['RemoteFieldAPI'][]
      Comment?: components['schemas']['RemoteFieldAPI'][]
      Project?: components['schemas']['RemoteFieldAPI'][]
      Collection?: components['schemas']['RemoteFieldAPI'][]
      User?: components['schemas']['RemoteFieldAPI'][]
      Role?: components['schemas']['RemoteFieldAPI'][]
      Account?: components['schemas']['RemoteFieldAPI'][]
      Team?: components['schemas']['RemoteFieldAPI'][]
      Attachment?: components['schemas']['RemoteFieldAPI'][]
      Tag?: components['schemas']['RemoteFieldAPI'][]
      Contact?: components['schemas']['RemoteFieldAPI'][]
    }
    RemoteFieldClass: {
      id?: string
      display_name?: string
      remote_key_name?: string
      description?: string
      is_custom?: boolean
      is_required?: boolean
      field_type?: components['schemas']['FieldTypeEnum']
      field_format?: components['schemas']['FieldFormatEnum']
      field_choices?: string[]
      item_schema?: components['schemas']['ItemSchema']
    }
    RemoteFieldRequest: {
      /**
       * Format: uuid
       * @example b057d1d2-c204-4da8-a74c-c91d1a260614
       */
      remote_field_class: string
      /** @example string */
      value?: {
        [key: string]: unknown
      }
    }
    /** @description # The RemoteKey Object
     *     ### Description
     *     The `RemoteKey` object is used to represent a request for a new remote key.
     *
     *     ### Usage Example
     *     Post a `GenerateRemoteKey` to receive a new `RemoteKey`. */
    RemoteKey: {
      /** @example Remote Deployment Key 1 */
      name: string
      /** @example hXY57W0g0WkdRHjCaPvwijK63fwfN-o_Wh7f30SLTq_uPCOLo-WFcA */
      key: string
    }
    /** @description # The RemoteKeyForRegeneration Object
     *     ### Description
     *     The `RemoteKeyForRegeneration` object is used to exchange an old remote key for a new one
     *
     *     ### Usage Example
     *     Post a `RemoteKeyForRegeneration` to swap out an old remote key for a new one */
    RemoteKeyForRegenerationRequest: {
      /**
       * @description The name of the remote key
       * @example Remote Deployment Key 1
       */
      name: string
    }
    /** @description # The RemoteResponse Object
     *     ### Description
     *     The `RemoteResponse` object is used to represent information returned from a third-party endpoint.
     *
     *     ### Usage Example
     *     View the `RemoteResponse` returned from your `DataPassthrough`. */
    RemoteResponse: {
      /** @example GET */
      method: string
      /** @example /scooters */
      path: string
      /** @example 200 */
      status: number
      /** @example {
       *       "scooters": [
       *         {
       *           "company": "Lime",
       *           "model": "Gen 2.5"
       *         },
       *         {
       *           "company": "Bird",
       *           "model": "Bird Zero"
       *         }
       *       ]
       *     } */
      response: unknown
      /** @example {
       *       "X-Page-Token": "value"
       *     } */
      response_headers?: {
        [key: string]: unknown
      }
      /** @example JSON */
      response_type?: components['schemas']['ResponseTypeEnum']
      /** @example {
       *       "EXTRA-HEADER": "value",
       *       "Authorization": "<redacted>"
       *     } */
      headers?: {
        [key: string]: unknown
      }
    }
    /**
     * @description * `JSON` - JSON
     *     * `XML` - XML
     *     * `MULTIPART` - MULTIPART
     * @enum {string}
     */
    RequestFormatEnum: 'JSON' | 'XML' | 'MULTIPART'
    /**
     * @description * `JSON` - JSON
     *     * `BASE64_GZIP` - BASE64_GZIP
     * @enum {string}
     */
    ResponseTypeEnum: 'JSON' | 'BASE64_GZIP'
    /** @description # The Role Object
     *     ### Description
     *     The `Role` object is used to represent the set of actions & access that a user with this role is allowed to perform.
     *
     *     ### Usage Example
     *     TODO */
    Role: {
      /**
       * Format: uuid
       * @example 23454124-387f-494d-265e-345b330c9123
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 123
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The name of the Role.
       * @example Member
       */
      name?: string | null
      /**
       * @description The set of actions that a User with this Role can perform. Possible enum values include: `VIEW`, `CREATE`, `EDIT`, `DELETE`, `CLOSE`, and `ASSIGN`.
       * @example [
       *       "VIEW",
       *       "EDIT",
       *       "CREATE"
       *     ]
       */
      ticket_actions?:
        | (components['schemas']['TicketActionsEnum'] | null)[]
        | null
      /**
       * @description The level of Ticket access that a User with this Role can perform.
       *
       *     * `ALL` - ALL
       *     * `ASSIGNED_ONLY` - ASSIGNED_ONLY
       *     * `TEAM_ONLY` - TEAM_ONLY
       * @example ASSIGNED_ONLY
       */
      ticket_access?: components['schemas']['TicketAccessEnum'] | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /**
     * @description * `ADMIN` - ADMIN
     *     * `DEVELOPER` - DEVELOPER
     *     * `MEMBER` - MEMBER
     *     * `API` - API
     *     * `SYSTEM` - SYSTEM
     *     * `MERGE_TEAM` - MERGE_TEAM
     * @enum {string}
     */
    RoleEnum: 'ADMIN' | 'DEVELOPER' | 'MEMBER' | 'API' | 'SYSTEM' | 'MERGE_TEAM'
    /**
     * @description * `IN_NEXT_SYNC` - IN_NEXT_SYNC
     *     * `IN_LAST_SYNC` - IN_LAST_SYNC
     * @enum {string}
     */
    SelectiveSyncConfigurationsUsageEnum: 'IN_NEXT_SYNC' | 'IN_LAST_SYNC'
    /** @description # The SyncStatus Object
     *     ### Description
     *     The `SyncStatus` object is used to represent the syncing state of an account
     *
     *     ### Usage Example
     *     View the `SyncStatus` for an account to see how recently its models were synced. */
    SyncStatus: {
      /** @example Ticket */
      model_name: string
      /** @example ticketing.Ticket */
      model_id: string
      /**
       * Format: date-time
       * @example 2021-03-30T19:44:18.695973Z
       */
      last_sync_start?: string
      /**
       * Format: date-time
       * @example 2021-03-30T20:44:18.662942Z
       */
      next_sync_start?: string
      /** @example SYNCING */
      status: components['schemas']['SyncStatusStatusEnum']
      /** @example true */
      is_initial_sync: boolean
      selective_sync_configurations_usage?: components['schemas']['SelectiveSyncConfigurationsUsageEnum']
    }
    /**
     * @description * `SYNCING` - SYNCING
     *     * `DONE` - DONE
     *     * `FAILED` - FAILED
     *     * `DISABLED` - DISABLED
     *     * `PAUSED` - PAUSED
     *     * `PARTIALLY_SYNCED` - PARTIALLY_SYNCED
     * @enum {string}
     */
    SyncStatusStatusEnum:
      | 'SYNCING'
      | 'DONE'
      | 'FAILED'
      | 'DISABLED'
      | 'PAUSED'
      | 'PARTIALLY_SYNCED'
    /** @description # The Tag Object
     *     ### Description
     *     The `Tag` object is used to represent a tag or label for a ticket.
     *
     *     ### Usage Example
     *     TODO */
    Tag: {
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202938
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * Format: uuid
       * @example 17a54124-287f-494d-965e-3c5b330c9a68
       */
      readonly id?: string
      /**
       * @description The tag's name.
       * @example Ticketing API
       */
      name?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Team Object
     *     ### Description
     *     The `Team` object is used to represent one or more `Users` within the company receiving the ticket.
     *
     *     ### Usage Example
     *     TODO */
    Team: {
      /**
       * Format: uuid
       * @example 17a54124-287f-494d-965e-3c5b330c9a68
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202938
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The team's name.
       * @example Platform
       */
      name?: string | null
      /**
       * @description The team's description.
       * @example Platform and Integrations Team
       */
      description?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    /** @description # The Ticket Object
     *     ### Description
     *     The `Ticket` object is used to represent a ticket, issue, task or case.
     *     ### Usage Example
     *     TODO */
    Ticket: {
      /**
       * Format: uuid
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202938
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The ticket's name.
       * @example Please add more integrations
       */
      name?: string | null
      /**
       * @description The individual `Users` who are assigned to this ticket. This does not include `Users` who just have view access to this ticket. To fetch all `Users` and `Teams` that can access the ticket, use the `GET /tickets/{ticket_id}/viewers` [endpoint](https://docs.merge.dev/ticketing/tickets/#tickets_viewers_list).
       * @example [
       *       "17a54124-287f-494d-965e-3c5b330c9a68"
       *     ]
       */
      assignees?: (string | null)[]
      /**
       * @description The `Teams` that are assigned to this ticket. This does not include `Teams` who just have view access to this ticket. To fetch all `Users` and `Teams` that can access this ticket, use the `GET /tickets/{ticket_id}/viewers` [endpoint](https://docs.merge.dev/ticketing/tickets/#tickets_viewers_list).
       * @example [
       *       "4857c306-c1f9-489e-a6b6-90902f736dfe"
       *     ]
       */
      assigned_teams?: (string | null)[]
      /**
       * Format: uuid
       * @description The user who created this ticket.
       */
      creator?: string | null
      /**
       * Format: date-time
       * @description The ticket's due date.
       * @example 2022-10-11T00:00:00Z
       */
      due_date?: string | null
      /**
       * @description The current status of the ticket.
       *
       *     * `OPEN` - OPEN
       *     * `CLOSED` - CLOSED
       *     * `IN_PROGRESS` - IN_PROGRESS
       *     * `ON_HOLD` - ON_HOLD
       * @example OPEN
       */
      status?: components['schemas']['TicketStatusEnum'] | null
      /**
       * @description The ticket’s description. HTML version of description is mapped if supported by the third-party platform.
       * @example Can you please add more integrations? It'll make syncing data much easier!
       */
      description?: string | null
      /**
       * @description The `Collections` that this `Ticket` is included in.
       * @example [
       *       "fb8c55b6-1cb8-4b4c-9fb6-17924231619d"
       *     ]
       */
      collections?: (string | null)[]
      /**
       * @description The sub category of the ticket within the 3rd party system. Examples include incident, task, subtask or to-do.
       * @example incident
       */
      ticket_type?: string | null
      /**
       * Format: uuid
       * @description The account associated with the ticket.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The contact associated with the ticket.
       * @example 65c345ba-6870-4974-87ba-dd31509c367a
       */
      contact?: string | null
      /**
       * Format: uuid
       * @description The ticket's parent ticket.
       * @example 75b33d04-30d2-4f3e-be45-27838bc94342
       */
      parent_ticket?: string | null
      /** @example [
       *       "42747df1-95e7-46e2-93cc-66f1191edca5",
       *       "92f972d0-2526-434b-9409-4c3b468e08f0"
       *     ] */
      attachments?: (string | null)[]
      /** @example [
       *       "enterprise",
       *       "other-tag"
       *     ] */
      tags?: (string | null)[]
      /** @example [
       *       "21a54124-397f-494d-985e-3c5b330b8a68",
       *       "17a54124-287f-494d-965e-3c5b330c9a68"
       *     ] */
      roles?: (string | null)[]
      /**
       * Format: date-time
       * @description When the third party's ticket was created.
       * @example 2021-11-10T00:00:00Z
       */
      remote_created_at?: string | null
      /**
       * Format: date-time
       * @description When the third party's ticket was updated.
       * @example 2021-12-09T00:00:00Z
       */
      remote_updated_at?: string | null
      /**
       * Format: date-time
       * @description When the ticket was completed.
       * @example 2021-12-09T00:00:00Z
       */
      completed_at?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
      /**
       * Format: uri
       * @description The 3rd party url of the Ticket.
       * @example https://thirdpartysoftware.com/project/3/issue/1
       */
      ticket_url?: string | null
      /**
       * @description The priority or urgency of the Ticket.
       *
       *     * `URGENT` - URGENT
       *     * `HIGH` - HIGH
       *     * `NORMAL` - NORMAL
       *     * `LOW` - LOW
       * @example HIGH
       */
      priority?: components['schemas']['PriorityEnum'] | null
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      readonly remote_data?: components['schemas']['RemoteData'][] | null
      readonly remote_fields?: components['schemas']['RemoteField'][]
    }
    /**
     * @description * `ALL` - ALL
     *     * `ASSIGNED_ONLY` - ASSIGNED_ONLY
     *     * `TEAM_ONLY` - TEAM_ONLY
     * @enum {string}
     */
    TicketAccessEnum: 'ALL' | 'ASSIGNED_ONLY' | 'TEAM_ONLY'
    /**
     * @description * `VIEW` - VIEW
     *     * `CREATE` - CREATE
     *     * `EDIT` - EDIT
     *     * `DELETE` - DELETE
     *     * `CLOSE` - CLOSE
     *     * `ASSIGN` - ASSIGN
     * @enum {string}
     */
    TicketActionsEnum:
      | 'VIEW'
      | 'CREATE'
      | 'EDIT'
      | 'DELETE'
      | 'CLOSE'
      | 'ASSIGN'
    TicketEndpointRequest: {
      model: components['schemas']['TicketRequest']
    }
    /** @description # The Ticket Object
     *     ### Description
     *     The `Ticket` object is used to represent a ticket, issue, task or case.
     *     ### Usage Example
     *     TODO */
    TicketRequest: {
      /**
       * @description The ticket's name.
       * @example Please add more integrations
       */
      name?: string | null
      /**
       * @description The individual `Users` who are assigned to this ticket. This does not include `Users` who just have view access to this ticket. To fetch all `Users` and `Teams` that can access the ticket, use the `GET /tickets/{ticket_id}/viewers` [endpoint](https://docs.merge.dev/ticketing/tickets/#tickets_viewers_list).
       * @example [
       *       "17a54124-287f-494d-965e-3c5b330c9a68"
       *     ]
       */
      assignees?: (string | null)[]
      /**
       * @description The `Teams` that are assigned to this ticket. This does not include `Teams` who just have view access to this ticket. To fetch all `Users` and `Teams` that can access this ticket, use the `GET /tickets/{ticket_id}/viewers` [endpoint](https://docs.merge.dev/ticketing/tickets/#tickets_viewers_list).
       * @example [
       *       "4857c306-c1f9-489e-a6b6-90902f736dfe"
       *     ]
       */
      assigned_teams?: (string | null)[]
      /**
       * Format: uuid
       * @description The user who created this ticket.
       */
      creator?: string | null
      /**
       * Format: date-time
       * @description The ticket's due date.
       * @example 2022-10-11T00:00:00Z
       */
      due_date?: string | null
      /**
       * @description The current status of the ticket.
       *
       *     * `OPEN` - OPEN
       *     * `CLOSED` - CLOSED
       *     * `IN_PROGRESS` - IN_PROGRESS
       *     * `ON_HOLD` - ON_HOLD
       * @example OPEN
       */
      status?: components['schemas']['TicketStatusEnum'] | null
      /**
       * @description The ticket’s description. HTML version of description is mapped if supported by the third-party platform.
       * @example Can you please add more integrations? It'll make syncing data much easier!
       */
      description?: string | null
      /**
       * @description The `Collections` that this `Ticket` is included in.
       * @example [
       *       "fb8c55b6-1cb8-4b4c-9fb6-17924231619d"
       *     ]
       */
      collections?: (string | null)[]
      /**
       * @description The sub category of the ticket within the 3rd party system. Examples include incident, task, subtask or to-do.
       * @example incident
       */
      ticket_type?: string | null
      /**
       * Format: uuid
       * @description The account associated with the ticket.
       * @example 0958cbc6-6040-430a-848e-aafacbadf4ae
       */
      account?: string | null
      /**
       * Format: uuid
       * @description The contact associated with the ticket.
       * @example 65c345ba-6870-4974-87ba-dd31509c367a
       */
      contact?: string | null
      /**
       * Format: uuid
       * @description The ticket's parent ticket.
       * @example 75b33d04-30d2-4f3e-be45-27838bc94342
       */
      parent_ticket?: string | null
      /** @example [
       *       "42747df1-95e7-46e2-93cc-66f1191edca5",
       *       "92f972d0-2526-434b-9409-4c3b468e08f0"
       *     ] */
      attachments?: (string | null)[]
      /** @example [
       *       "enterprise",
       *       "other-tag"
       *     ] */
      tags?: (string | null)[]
      /** @example [
       *       "21a54124-397f-494d-985e-3c5b330b8a68",
       *       "17a54124-287f-494d-965e-3c5b330c9a68"
       *     ] */
      roles?: (string | null)[]
      /**
       * Format: date-time
       * @description When the ticket was completed.
       * @example 2021-12-09T00:00:00Z
       */
      completed_at?: string | null
      /**
       * Format: uri
       * @description The 3rd party url of the Ticket.
       * @example https://thirdpartysoftware.com/project/3/issue/1
       */
      ticket_url?: string | null
      /**
       * @description The priority or urgency of the Ticket.
       *
       *     * `URGENT` - URGENT
       *     * `HIGH` - HIGH
       *     * `NORMAL` - NORMAL
       *     * `LOW` - LOW
       * @example HIGH
       */
      priority?: components['schemas']['PriorityEnum'] | null
      /** @example {
       *       "unique_integration_field": "unique_integration_field_value"
       *     } */
      integration_params?: {
        [key: string]: unknown
      } | null
      /** @example {
       *       "unique_linked_account_field": "unique_linked_account_field_value"
       *     } */
      linked_account_params?: {
        [key: string]: unknown
      } | null
      remote_fields?: components['schemas']['RemoteFieldRequest'][]
    }
    TicketResponse: {
      model: components['schemas']['Ticket']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /**
     * @description * `OPEN` - OPEN
     *     * `CLOSED` - CLOSED
     *     * `IN_PROGRESS` - IN_PROGRESS
     *     * `ON_HOLD` - ON_HOLD
     * @enum {string}
     */
    TicketStatusEnum: 'OPEN' | 'CLOSED' | 'IN_PROGRESS' | 'ON_HOLD'
    TicketingAttachmentEndpointRequest: {
      model: components['schemas']['AttachmentRequest']
    }
    TicketingAttachmentResponse: {
      model: components['schemas']['Attachment']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    TicketingContactEndpointRequest: {
      model: components['schemas']['ContactRequest']
    }
    TicketingContactResponse: {
      model: components['schemas']['Contact']
      warnings: components['schemas']['WarningValidationProblem'][]
      errors: components['schemas']['ErrorValidationProblem'][]
      logs?: components['schemas']['DebugModeLog'][]
    }
    /** @description # The User Object
     *     ### Description
     *     The `User` object is used to represent a user with a login to the ticketing system.
     *     Users are either assignees who are directly responsible or a viewer on a `Ticket`/ `Collection`.
     *
     *     ### Usage Example
     *     TODO */
    User: {
      /**
       * Format: uuid
       * @example 17a54124-287f-494d-965e-3c5b330c9a68
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 19202938
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * @description The user's name.
       * @example Gil Feig
       */
      name?: string | null
      /**
       * @description The user's email address.
       * @example help@merge.dev
       */
      email_address?: string | null
      /**
       * @description Whether or not the user is active.
       * @example true
       */
      is_active?: boolean | null
      /** @example [
       *       "28b54125-287f-494d-965e-3c5b330c9a68",
       *       "17a54124-287f-494d-965e-3c5b330c9a68"
       *     ] */
      teams?: (string | null)[]
      /** @example [
       *       "23454124-387f-494d-265e-345b330c9123"
       *     ] */
      roles?: (string | null)[]
      /**
       * @description The user's avatar picture.
       * @example https://merge.dev/user_profile_pic.png
       */
      avatar?: string | null
      /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
      readonly remote_was_deleted?: boolean
      /** @example {
       *       "organization_defined_targets": {
       *         "custom_key": "custom_value"
       *       },
       *       "linked_account_defined_targets": {
       *         "custom_key": "custom_value"
       *       }
       *     } */
      readonly field_mappings?: Record<string, never>
      readonly remote_data?: components['schemas']['RemoteData'][] | null
    }
    ValidationProblemSource: {
      pointer: string
    }
    /** @description # The Viewer Object
     *     ### Description
     *     The `Viewer` object is used to represent a User or Team within a company.
     *
     *     ### Usage Example
     *     TODO */
    Viewer: {
      /**
       * Format: uuid
       * @example 17a54124-287f-494d-965e-3c5b330c9a68
       */
      readonly id?: string
      /**
       * @description The third-party API ID of the matching object.
       * @example 088899
       */
      remote_id?: string | null
      /**
       * Format: date-time
       * @description The datetime that this object was created by Merge.
       * @example 2021-09-15T00:00:00Z
       */
      readonly created_at?: string
      /**
       * Format: date-time
       * @description The datetime that this object was modified by Merge.
       * @example 2021-10-16T00:00:00Z
       */
      readonly modified_at?: string
      /**
       * Format: uuid
       * @description The Team this Viewer belongs to.
       * @example 28b54125-287f-494d-965e-3c5b330c9a68
       */
      team?: string | null
      /**
       * Format: uuid
       * @description The User this Viewer belongs to.
       * @example 23454124-387f-494d-265e-345b330c9123
       */
      user?: string | null
    }
    WarningValidationProblem: {
      /** @example {
       *       "pointer": "/age"
       *     } */
      source?: components['schemas']['ValidationProblemSource']
      /** @example Unrecognized Field */
      title: string
      /** @example An unrecognized field, age, was passed in with request data. */
      detail: string
      /** @example UNRECOGNIZED_FIELD */
      problem_type: string
    }
    WebhookReceiver: {
      event: string
      is_active: boolean
      key?: string
    }
    WebhookReceiverRequest: {
      event: string
      is_active: boolean
      key?: string
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  account_details_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AccountDetails']
        }
      }
    }
  }
  account_token_retrieve: {
    parameters: {
      query?: never
      header?: never
      path: {
        public_token: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AccountToken']
        }
      }
    }
  }
  accounts_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedAccountList']
        }
      }
    }
  }
  accounts_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Account']
        }
      }
    }
  }
  async_passthrough_create: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['DataPassthroughRequest']
        'application/x-www-form-urlencoded': components['schemas']['DataPassthroughRequest']
        'multipart/form-data': components['schemas']['DataPassthroughRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AsyncPassthroughReciept']
        }
      }
    }
  }
  async_passthrough_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        async_passthrough_receipt_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RemoteResponse']
        }
      }
    }
  }
  attachments_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'ticket'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If provided, will only return attachments created in the third party platform after this datetime. */
        remote_created_after?: string | null
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description If provided, will only return comments for this ticket. */
        ticket_id?: string
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedAttachmentList']
        }
      }
    }
  }
  attachments_create: {
    parameters: {
      query?: {
        /** @description Whether to include debug fields (such as log file links) in the response. */
        is_debug_mode?: boolean
        /** @description Whether or not third-party updates should be run asynchronously. */
        run_async?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['TicketingAttachmentEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['TicketingAttachmentEndpointRequest']
        'multipart/form-data': components['schemas']['TicketingAttachmentEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TicketingAttachmentResponse']
        }
      }
    }
  }
  attachments_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'ticket'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Attachment']
        }
      }
    }
  }
  attachments_download_retrieve: {
    parameters: {
      query?: {
        /** @description If provided, specifies the export format of the file to be downloaded. For information on supported export formats, please refer to our <a href='https://help.merge.dev/en/articles/8615316-file-export-and-download-specification' target='_blank'>export format help center article</a>. */
        mime_type?: string
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': string
        }
      }
    }
  }
  attachments_meta_post_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MetaResponse']
        }
      }
    }
  }
  audit_trail_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If included, will only include audit trail events that occurred before this time */
        end_date?: string
        /** @description If included, will only include events with the given event type. Possible values include: `CREATED_REMOTE_PRODUCTION_API_KEY`, `DELETED_REMOTE_PRODUCTION_API_KEY`, `CREATED_TEST_API_KEY`, `DELETED_TEST_API_KEY`, `REGENERATED_PRODUCTION_API_KEY`, `INVITED_USER`, `TWO_FACTOR_AUTH_ENABLED`, `TWO_FACTOR_AUTH_DISABLED`, `DELETED_LINKED_ACCOUNT`, `CREATED_DESTINATION`, `DELETED_DESTINATION`, `CHANGED_DESTINATION`, `CHANGED_SCOPES`, `CHANGED_PERSONAL_INFORMATION`, `CHANGED_ORGANIZATION_SETTINGS`, `ENABLED_INTEGRATION`, `DISABLED_INTEGRATION`, `ENABLED_CATEGORY`, `DISABLED_CATEGORY`, `CHANGED_PASSWORD`, `RESET_PASSWORD`, `ENABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION`, `ENABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT`, `DISABLED_REDACT_UNMAPPED_DATA_FOR_ORGANIZATION`, `DISABLED_REDACT_UNMAPPED_DATA_FOR_LINKED_ACCOUNT`, `CREATED_INTEGRATION_WIDE_FIELD_MAPPING`, `CREATED_LINKED_ACCOUNT_FIELD_MAPPING`, `CHANGED_INTEGRATION_WIDE_FIELD_MAPPING`, `CHANGED_LINKED_ACCOUNT_FIELD_MAPPING`, `DELETED_INTEGRATION_WIDE_FIELD_MAPPING`, `DELETED_LINKED_ACCOUNT_FIELD_MAPPING`, `CREATED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE`, `CHANGED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE`, `DELETED_LINKED_ACCOUNT_COMMON_MODEL_OVERRIDE`, `FORCED_LINKED_ACCOUNT_RESYNC`, `MUTED_ISSUE`, `GENERATED_MAGIC_LINK`, `ENABLED_MERGE_WEBHOOK`, `DISABLED_MERGE_WEBHOOK`, `MERGE_WEBHOOK_TARGET_CHANGED`, `END_USER_CREDENTIALS_ACCESSED` */
        event_type?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If included, will only include audit trail events that occurred after this time */
        start_date?: string
        /** @description If provided, this will return events associated with the specified user email. Please note that the email address reflects the user's email at the time of the event, and may not be their current email. */
        user_email?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedAuditLogEventList']
        }
      }
    }
  }
  available_actions_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AvailableActions']
        }
      }
    }
  }
  collections_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return collections of the given type. */
        collection_type?: '' | 'LIST' | null | 'PROJECT'
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'parent_collection' | 'teams' | 'teams,parent_collection'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If provided, will only return collections whose parent collection matches the given id. */
        parent_collection_id?: string
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'collection_type'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'collection_type'
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedCollectionList']
        }
      }
    }
  }
  collections_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'parent_collection' | 'teams' | 'teams,parent_collection'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?: 'collection_type'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?: 'collection_type'
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Collection']
        }
      }
    }
  }
  comments_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'contact'
          | 'contact,ticket'
          | 'ticket'
          | 'user'
          | 'user,contact'
          | 'user,contact,ticket'
          | 'user,ticket'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If provided, will only return Comments created in the third party platform after this datetime. */
        remote_created_after?: string | null
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description If provided, will only return comments for this ticket. */
        ticket_id?: string
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedCommentList']
        }
      }
    }
  }
  comments_create: {
    parameters: {
      query?: {
        /** @description Whether to include debug fields (such as log file links) in the response. */
        is_debug_mode?: boolean
        /** @description Whether or not third-party updates should be run asynchronously. */
        run_async?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CommentEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['CommentEndpointRequest']
        'multipart/form-data': components['schemas']['CommentEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommentResponse']
        }
      }
    }
  }
  comments_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'contact'
          | 'contact,ticket'
          | 'ticket'
          | 'user'
          | 'user,contact'
          | 'user,contact,ticket'
          | 'user,ticket'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Comment']
        }
      }
    }
  }
  comments_meta_post_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MetaResponse']
        }
      }
    }
  }
  contacts_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'account'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedContactList']
        }
      }
    }
  }
  contacts_create: {
    parameters: {
      query?: {
        /** @description Whether to include debug fields (such as log file links) in the response. */
        is_debug_mode?: boolean
        /** @description Whether or not third-party updates should be run asynchronously. */
        run_async?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['TicketingContactEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['TicketingContactEndpointRequest']
        'multipart/form-data': components['schemas']['TicketingContactEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TicketingContactResponse']
        }
      }
    }
  }
  contacts_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'account'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Contact']
        }
      }
    }
  }
  contacts_meta_post_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MetaResponse']
        }
      }
    }
  }
  default_scopes_retrieve: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonModelScopeAPI']
        }
      }
    }
  }
  delete_account_delete: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description No response body */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  field_mappings_retrieve: {
    parameters: {
      query?: {
        /** @description If `true`, remote fields metadata is excluded from each field mapping instance (i.e. `remote_fields.remote_key_name` and `remote_fields.schema` will be null). This will increase the speed of the request since these fields require some calculations. */
        exclude_remote_field_metadata?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldMappingApiInstanceResponse']
        }
      }
    }
  }
  field_mappings_create: {
    parameters: {
      query?: {
        /** @description If `true`, remote fields metadata is excluded from each field mapping instance (i.e. `remote_fields.remote_key_name` and `remote_fields.schema` will be null). This will increase the speed of the request since these fields require some calculations. */
        exclude_remote_field_metadata?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateFieldMappingRequest']
        'application/x-www-form-urlencoded': components['schemas']['CreateFieldMappingRequest']
        'multipart/form-data': components['schemas']['CreateFieldMappingRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldMappingInstanceResponse']
        }
      }
    }
  }
  field_mappings_destroy: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        field_mapping_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      204: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldMappingInstanceResponse']
        }
      }
    }
  }
  field_mappings_partial_update: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        field_mapping_id: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['PatchedEditFieldMappingRequest']
        'application/x-www-form-urlencoded': components['schemas']['PatchedEditFieldMappingRequest']
        'multipart/form-data': components['schemas']['PatchedEditFieldMappingRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FieldMappingInstanceResponse']
        }
      }
    }
  }
  generate_key_create: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['GenerateRemoteKeyRequest']
        'application/x-www-form-urlencoded': components['schemas']['GenerateRemoteKeyRequest']
        'multipart/form-data': components['schemas']['GenerateRemoteKeyRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RemoteKey']
        }
      }
    }
  }
  issues_list: {
    parameters: {
      query?: {
        account_token?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If included, will only include issues whose most recent action occurred before this time */
        end_date?: string
        end_user_organization_name?: string
        /** @description If provided, will only return issues whose first incident time was after this datetime. */
        first_incident_time_after?: string | null
        /** @description If provided, will only return issues whose first incident time was before this datetime. */
        first_incident_time_before?: string | null
        /** @description If true, will include muted issues */
        include_muted?: string
        integration_name?: string
        /** @description If provided, will only return issues whose last incident time was after this datetime. */
        last_incident_time_after?: string | null
        /** @description If provided, will only return issues whose last incident time was before this datetime. */
        last_incident_time_before?: string | null
        /** @description If provided, will only include issues pertaining to the linked account passed in. */
        linked_account_id?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If included, will only include issues whose most recent action occurred after this time */
        start_date?: string
        /** @description Status of the issue. Options: ('ONGOING', 'RESOLVED')
         *
         *     * `ONGOING` - ONGOING
         *     * `RESOLVED` - RESOLVED */
        status?: 'ONGOING' | 'RESOLVED'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedIssueList']
        }
      }
    }
  }
  issues_retrieve: {
    parameters: {
      query?: never
      header?: never
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Issue']
        }
      }
    }
  }
  link_token_create: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['EndUserDetailsRequest']
        'application/x-www-form-urlencoded': components['schemas']['EndUserDetailsRequest']
        'multipart/form-data': components['schemas']['EndUserDetailsRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['LinkToken']
        }
      }
    }
  }
  linked_account_scopes_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonModelScopeAPI']
        }
      }
    }
  }
  linked_account_scopes_create: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['LinkedAccountCommonModelScopeDeserializerRequest']
        'application/x-www-form-urlencoded': components['schemas']['LinkedAccountCommonModelScopeDeserializerRequest']
        'multipart/form-data': components['schemas']['LinkedAccountCommonModelScopeDeserializerRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CommonModelScopeAPI']
        }
      }
    }
  }
  linked_accounts_list: {
    parameters: {
      query?: {
        /** @description Options: `accounting`, `ats`, `crm`, `filestorage`, `hris`, `mktg`, `ticketing`
         *
         *     * `hris` - hris
         *     * `ats` - ats
         *     * `accounting` - accounting
         *     * `ticketing` - ticketing
         *     * `crm` - crm
         *     * `mktg` - mktg
         *     * `filestorage` - filestorage
         *     * `datawarehouse` - datawarehouse */
        category?:
          | 'accounting'
          | 'ats'
          | 'crm'
          | 'datawarehouse'
          | 'filestorage'
          | 'hris'
          | 'mktg'
          | 'ticketing'
          | null
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return linked accounts associated with the given email address. */
        end_user_email_address?: string
        /** @description If provided, will only return linked accounts associated with the given organization name. */
        end_user_organization_name?: string
        /** @description If provided, will only return linked accounts associated with the given origin ID. */
        end_user_origin_id?: string
        /** @description Comma-separated list of EndUser origin IDs, making it possible to specify multiple EndUsers at once. */
        end_user_origin_ids?: string
        id?: string
        /** @description Comma-separated list of LinkedAccount IDs, making it possible to specify multiple LinkedAccounts at once. */
        ids?: string
        /** @description If `true`, will include complete production duplicates of the account specified by the `id` query parameter in the response. `id` must be for a complete production linked account. */
        include_duplicates?: boolean
        /** @description If provided, will only return linked accounts associated with the given integration name. */
        integration_name?: string
        /** @description If included, will only include test linked accounts. If not included, will only include non-test linked accounts. */
        is_test_account?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description Filter by status. Options: `COMPLETE`, `IDLE`, `INCOMPLETE`, `RELINK_NEEDED` */
        status?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedAccountDetailsAndActionsList']
        }
      }
    }
  }
  passthrough_create: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['DataPassthroughRequest']
        'application/x-www-form-urlencoded': components['schemas']['DataPassthroughRequest']
        'multipart/form-data': components['schemas']['DataPassthroughRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RemoteResponse']
        }
      }
    }
  }
  projects_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedProjectList']
        }
      }
    }
  }
  projects_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Project']
        }
      }
    }
  }
  projects_users_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'roles' | 'teams' | 'teams,roles'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description Number of results to return per page. */
        page_size?: number
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        parent_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedUserList']
        }
      }
    }
  }
  regenerate_key_create: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['RemoteKeyForRegenerationRequest']
        'application/x-www-form-urlencoded': components['schemas']['RemoteKeyForRegenerationRequest']
        'multipart/form-data': components['schemas']['RemoteKeyForRegenerationRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RemoteKey']
        }
      }
    }
  }
  remote_fields_retrieve: {
    parameters: {
      query?: {
        /** @description A comma seperated list of Common Model names. If included, will only return Remote Fields for those Common Models. */
        common_models?: string
        /** @description If true, will include example values, where available, for remote fields in the 3rd party platform. These examples come from active data from your customers. */
        include_example_values?: string
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['RemoteFieldAPIResponse']
        }
      }
    }
  }
  roles_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedRoleList']
        }
      }
    }
  }
  roles_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Role']
        }
      }
    }
  }
  sync_status_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Number of results to return per page. */
        page_size?: number
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedSyncStatusList']
        }
      }
    }
  }
  sync_status_resync_create: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SyncStatus'][]
        }
      }
    }
  }
  tags_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedTagList']
        }
      }
    }
  }
  tags_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Tag']
        }
      }
    }
  }
  target_fields_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ExternalTargetFieldAPIResponse']
        }
      }
    }
  }
  teams_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedTeamList']
        }
      }
    }
  }
  teams_retrieve: {
    parameters: {
      query?: {
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Team']
        }
      }
    }
  }
  tickets_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return tickets for this account. */
        account_id?: string
        /** @description If provided, will only return tickets assigned to the assignee_ids; multiple assignee_ids can be separated by commas. */
        assignee_ids?: string
        /** @description If provided, will only return tickets assigned to the collection_ids; multiple collection_ids can be separated by commas. */
        collection_ids?: string
        /** @description If provided, will only return tickets completed after this datetime. */
        completed_after?: string | null
        /** @description If provided, will only return tickets completed before this datetime. */
        completed_before?: string | null
        /** @description If provided, will only return tickets for this contact. */
        contact_id?: string
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return tickets due after this datetime. */
        due_after?: string | null
        /** @description If provided, will only return tickets due before this datetime. */
        due_before?: string | null
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'account'
          | 'account,contact'
          | 'account,contact,creator'
          | 'account,contact,creator,parent_ticket'
          | 'account,contact,parent_ticket'
          | 'account,creator'
          | 'account,creator,parent_ticket'
          | 'account,parent_ticket'
          | 'assigned_teams'
          | 'assigned_teams,account'
          | 'assigned_teams,account,contact'
          | 'assigned_teams,account,contact,creator'
          | 'assigned_teams,account,contact,creator,parent_ticket'
          | 'assigned_teams,account,contact,parent_ticket'
          | 'assigned_teams,account,creator'
          | 'assigned_teams,account,creator,parent_ticket'
          | 'assigned_teams,account,parent_ticket'
          | 'assigned_teams,contact'
          | 'assigned_teams,contact,creator'
          | 'assigned_teams,contact,creator,parent_ticket'
          | 'assigned_teams,contact,parent_ticket'
          | 'assigned_teams,creator'
          | 'assigned_teams,creator,parent_ticket'
          | 'assigned_teams,parent_ticket'
          | 'assignees'
          | 'assignees,account'
          | 'assignees,account,contact'
          | 'assignees,account,contact,creator'
          | 'assignees,account,contact,creator,parent_ticket'
          | 'assignees,account,contact,parent_ticket'
          | 'assignees,account,creator'
          | 'assignees,account,creator,parent_ticket'
          | 'assignees,account,parent_ticket'
          | 'assignees,assigned_teams'
          | 'assignees,assigned_teams,account'
          | 'assignees,assigned_teams,account,contact'
          | 'assignees,assigned_teams,account,contact,creator'
          | 'assignees,assigned_teams,account,contact,creator,parent_ticket'
          | 'assignees,assigned_teams,account,contact,parent_ticket'
          | 'assignees,assigned_teams,account,creator'
          | 'assignees,assigned_teams,account,creator,parent_ticket'
          | 'assignees,assigned_teams,account,parent_ticket'
          | 'assignees,assigned_teams,contact'
          | 'assignees,assigned_teams,contact,creator'
          | 'assignees,assigned_teams,contact,creator,parent_ticket'
          | 'assignees,assigned_teams,contact,parent_ticket'
          | 'assignees,assigned_teams,creator'
          | 'assignees,assigned_teams,creator,parent_ticket'
          | 'assignees,assigned_teams,parent_ticket'
          | 'assignees,collections'
          | 'assignees,collections,account'
          | 'assignees,collections,account,contact'
          | 'assignees,collections,account,contact,creator'
          | 'assignees,collections,account,contact,creator,parent_ticket'
          | 'assignees,collections,account,contact,parent_ticket'
          | 'assignees,collections,account,creator'
          | 'assignees,collections,account,creator,parent_ticket'
          | 'assignees,collections,account,parent_ticket'
          | 'assignees,collections,assigned_teams'
          | 'assignees,collections,assigned_teams,account'
          | 'assignees,collections,assigned_teams,account,contact'
          | 'assignees,collections,assigned_teams,account,contact,creator'
          | 'assignees,collections,assigned_teams,account,contact,creator,parent_ticket'
          | 'assignees,collections,assigned_teams,account,contact,parent_ticket'
          | 'assignees,collections,assigned_teams,account,creator'
          | 'assignees,collections,assigned_teams,account,creator,parent_ticket'
          | 'assignees,collections,assigned_teams,account,parent_ticket'
          | 'assignees,collections,assigned_teams,contact'
          | 'assignees,collections,assigned_teams,contact,creator'
          | 'assignees,collections,assigned_teams,contact,creator,parent_ticket'
          | 'assignees,collections,assigned_teams,contact,parent_ticket'
          | 'assignees,collections,assigned_teams,creator'
          | 'assignees,collections,assigned_teams,creator,parent_ticket'
          | 'assignees,collections,assigned_teams,parent_ticket'
          | 'assignees,collections,contact'
          | 'assignees,collections,contact,creator'
          | 'assignees,collections,contact,creator,parent_ticket'
          | 'assignees,collections,contact,parent_ticket'
          | 'assignees,collections,creator'
          | 'assignees,collections,creator,parent_ticket'
          | 'assignees,collections,parent_ticket'
          | 'assignees,contact'
          | 'assignees,contact,creator'
          | 'assignees,contact,creator,parent_ticket'
          | 'assignees,contact,parent_ticket'
          | 'assignees,creator'
          | 'assignees,creator,parent_ticket'
          | 'assignees,parent_ticket'
          | 'attachments'
          | 'attachments,account'
          | 'attachments,account,contact'
          | 'attachments,account,contact,creator'
          | 'attachments,account,contact,creator,parent_ticket'
          | 'attachments,account,contact,parent_ticket'
          | 'attachments,account,creator'
          | 'attachments,account,creator,parent_ticket'
          | 'attachments,account,parent_ticket'
          | 'attachments,assigned_teams'
          | 'attachments,assigned_teams,account'
          | 'attachments,assigned_teams,account,contact'
          | 'attachments,assigned_teams,account,contact,creator'
          | 'attachments,assigned_teams,account,contact,creator,parent_ticket'
          | 'attachments,assigned_teams,account,contact,parent_ticket'
          | 'attachments,assigned_teams,account,creator'
          | 'attachments,assigned_teams,account,creator,parent_ticket'
          | 'attachments,assigned_teams,account,parent_ticket'
          | 'attachments,assigned_teams,contact'
          | 'attachments,assigned_teams,contact,creator'
          | 'attachments,assigned_teams,contact,creator,parent_ticket'
          | 'attachments,assigned_teams,contact,parent_ticket'
          | 'attachments,assigned_teams,creator'
          | 'attachments,assigned_teams,creator,parent_ticket'
          | 'attachments,assigned_teams,parent_ticket'
          | 'attachments,assignees'
          | 'attachments,assignees,account'
          | 'attachments,assignees,account,contact'
          | 'attachments,assignees,account,contact,creator'
          | 'attachments,assignees,account,contact,creator,parent_ticket'
          | 'attachments,assignees,account,contact,parent_ticket'
          | 'attachments,assignees,account,creator'
          | 'attachments,assignees,account,creator,parent_ticket'
          | 'attachments,assignees,account,parent_ticket'
          | 'attachments,assignees,assigned_teams'
          | 'attachments,assignees,assigned_teams,account'
          | 'attachments,assignees,assigned_teams,account,contact'
          | 'attachments,assignees,assigned_teams,account,contact,creator'
          | 'attachments,assignees,assigned_teams,account,contact,creator,parent_ticket'
          | 'attachments,assignees,assigned_teams,account,contact,parent_ticket'
          | 'attachments,assignees,assigned_teams,account,creator'
          | 'attachments,assignees,assigned_teams,account,creator,parent_ticket'
          | 'attachments,assignees,assigned_teams,account,parent_ticket'
          | 'attachments,assignees,assigned_teams,contact'
          | 'attachments,assignees,assigned_teams,contact,creator'
          | 'attachments,assignees,assigned_teams,contact,creator,parent_ticket'
          | 'attachments,assignees,assigned_teams,contact,parent_ticket'
          | 'attachments,assignees,assigned_teams,creator'
          | 'attachments,assignees,assigned_teams,creator,parent_ticket'
          | 'attachments,assignees,assigned_teams,parent_ticket'
          | 'attachments,assignees,collections'
          | 'attachments,assignees,collections,account'
          | 'attachments,assignees,collections,account,contact'
          | 'attachments,assignees,collections,account,contact,creator'
          | 'attachments,assignees,collections,account,contact,creator,parent_ticket'
          | 'attachments,assignees,collections,account,contact,parent_ticket'
          | 'attachments,assignees,collections,account,creator'
          | 'attachments,assignees,collections,account,creator,parent_ticket'
          | 'attachments,assignees,collections,account,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams'
          | 'attachments,assignees,collections,assigned_teams,account'
          | 'attachments,assignees,collections,assigned_teams,account,contact'
          | 'attachments,assignees,collections,assigned_teams,account,contact,creator'
          | 'attachments,assignees,collections,assigned_teams,account,contact,creator,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,account,contact,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,account,creator'
          | 'attachments,assignees,collections,assigned_teams,account,creator,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,account,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,contact'
          | 'attachments,assignees,collections,assigned_teams,contact,creator'
          | 'attachments,assignees,collections,assigned_teams,contact,creator,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,contact,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,creator'
          | 'attachments,assignees,collections,assigned_teams,creator,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,parent_ticket'
          | 'attachments,assignees,collections,contact'
          | 'attachments,assignees,collections,contact,creator'
          | 'attachments,assignees,collections,contact,creator,parent_ticket'
          | 'attachments,assignees,collections,contact,parent_ticket'
          | 'attachments,assignees,collections,creator'
          | 'attachments,assignees,collections,creator,parent_ticket'
          | 'attachments,assignees,collections,parent_ticket'
          | 'attachments,assignees,contact'
          | 'attachments,assignees,contact,creator'
          | 'attachments,assignees,contact,creator,parent_ticket'
          | 'attachments,assignees,contact,parent_ticket'
          | 'attachments,assignees,creator'
          | 'attachments,assignees,creator,parent_ticket'
          | 'attachments,assignees,parent_ticket'
          | 'attachments,collections'
          | 'attachments,collections,account'
          | 'attachments,collections,account,contact'
          | 'attachments,collections,account,contact,creator'
          | 'attachments,collections,account,contact,creator,parent_ticket'
          | 'attachments,collections,account,contact,parent_ticket'
          | 'attachments,collections,account,creator'
          | 'attachments,collections,account,creator,parent_ticket'
          | 'attachments,collections,account,parent_ticket'
          | 'attachments,collections,assigned_teams'
          | 'attachments,collections,assigned_teams,account'
          | 'attachments,collections,assigned_teams,account,contact'
          | 'attachments,collections,assigned_teams,account,contact,creator'
          | 'attachments,collections,assigned_teams,account,contact,creator,parent_ticket'
          | 'attachments,collections,assigned_teams,account,contact,parent_ticket'
          | 'attachments,collections,assigned_teams,account,creator'
          | 'attachments,collections,assigned_teams,account,creator,parent_ticket'
          | 'attachments,collections,assigned_teams,account,parent_ticket'
          | 'attachments,collections,assigned_teams,contact'
          | 'attachments,collections,assigned_teams,contact,creator'
          | 'attachments,collections,assigned_teams,contact,creator,parent_ticket'
          | 'attachments,collections,assigned_teams,contact,parent_ticket'
          | 'attachments,collections,assigned_teams,creator'
          | 'attachments,collections,assigned_teams,creator,parent_ticket'
          | 'attachments,collections,assigned_teams,parent_ticket'
          | 'attachments,collections,contact'
          | 'attachments,collections,contact,creator'
          | 'attachments,collections,contact,creator,parent_ticket'
          | 'attachments,collections,contact,parent_ticket'
          | 'attachments,collections,creator'
          | 'attachments,collections,creator,parent_ticket'
          | 'attachments,collections,parent_ticket'
          | 'attachments,contact'
          | 'attachments,contact,creator'
          | 'attachments,contact,creator,parent_ticket'
          | 'attachments,contact,parent_ticket'
          | 'attachments,creator'
          | 'attachments,creator,parent_ticket'
          | 'attachments,parent_ticket'
          | 'collections'
          | 'collections,account'
          | 'collections,account,contact'
          | 'collections,account,contact,creator'
          | 'collections,account,contact,creator,parent_ticket'
          | 'collections,account,contact,parent_ticket'
          | 'collections,account,creator'
          | 'collections,account,creator,parent_ticket'
          | 'collections,account,parent_ticket'
          | 'collections,assigned_teams'
          | 'collections,assigned_teams,account'
          | 'collections,assigned_teams,account,contact'
          | 'collections,assigned_teams,account,contact,creator'
          | 'collections,assigned_teams,account,contact,creator,parent_ticket'
          | 'collections,assigned_teams,account,contact,parent_ticket'
          | 'collections,assigned_teams,account,creator'
          | 'collections,assigned_teams,account,creator,parent_ticket'
          | 'collections,assigned_teams,account,parent_ticket'
          | 'collections,assigned_teams,contact'
          | 'collections,assigned_teams,contact,creator'
          | 'collections,assigned_teams,contact,creator,parent_ticket'
          | 'collections,assigned_teams,contact,parent_ticket'
          | 'collections,assigned_teams,creator'
          | 'collections,assigned_teams,creator,parent_ticket'
          | 'collections,assigned_teams,parent_ticket'
          | 'collections,contact'
          | 'collections,contact,creator'
          | 'collections,contact,creator,parent_ticket'
          | 'collections,contact,parent_ticket'
          | 'collections,creator'
          | 'collections,creator,parent_ticket'
          | 'collections,parent_ticket'
          | 'contact'
          | 'contact,creator'
          | 'contact,creator,parent_ticket'
          | 'contact,parent_ticket'
          | 'creator'
          | 'creator,parent_ticket'
          | 'parent_ticket'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description If provided, will only return sub tickets of the parent_ticket_id. */
        parent_ticket_id?: string
        /** @description If provided, will only return tickets of this priority.
         *
         *     * `URGENT` - URGENT
         *     * `HIGH` - HIGH
         *     * `NORMAL` - NORMAL
         *     * `LOW` - LOW */
        priority?: 'HIGH' | 'LOW' | 'NORMAL' | 'URGENT' | null
        /** @description If provided, will only return tickets created in the third party platform after this datetime. */
        remote_created_after?: string | null
        /** @description If provided, will only return tickets created in the third party platform before this datetime. */
        remote_created_before?: string | null
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?:
          | 'priority'
          | 'priority,status'
          | 'priority,status,ticket_type'
          | 'priority,ticket_type'
          | 'status'
          | 'status,ticket_type'
          | 'ticket_type'
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description If provided, will only return tickets updated in the third party platform after this datetime. */
        remote_updated_after?: string | null
        /** @description If provided, will only return tickets updated in the third party platform before this datetime. */
        remote_updated_before?: string | null
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'priority'
          | 'priority,status'
          | 'priority,status,ticket_type'
          | 'priority,ticket_type'
          | 'status'
          | 'status,ticket_type'
          | 'ticket_type'
        /** @description If provided, will only return tickets of this status. */
        status?: '' | 'CLOSED' | 'IN_PROGRESS' | null | 'ON_HOLD' | 'OPEN'
        /** @description If provided, will only return tickets matching the tags; multiple tags can be separated by commas. */
        tags?: string
        /** @description If provided, will only return tickets of this type. */
        ticket_type?: string | null
        /** @description If provided, will only return tickets where the URL matches or contains the substring */
        ticket_url?: string | null
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedTicketList']
        }
      }
    }
  }
  tickets_create: {
    parameters: {
      query?: {
        /** @description Whether to include debug fields (such as log file links) in the response. */
        is_debug_mode?: boolean
        /** @description Whether or not third-party updates should be run asynchronously. */
        run_async?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['TicketEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['TicketEndpointRequest']
        'multipart/form-data': components['schemas']['TicketEndpointRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TicketResponse']
        }
      }
    }
  }
  tickets_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?:
          | 'account'
          | 'account,contact'
          | 'account,contact,creator'
          | 'account,contact,creator,parent_ticket'
          | 'account,contact,parent_ticket'
          | 'account,creator'
          | 'account,creator,parent_ticket'
          | 'account,parent_ticket'
          | 'assigned_teams'
          | 'assigned_teams,account'
          | 'assigned_teams,account,contact'
          | 'assigned_teams,account,contact,creator'
          | 'assigned_teams,account,contact,creator,parent_ticket'
          | 'assigned_teams,account,contact,parent_ticket'
          | 'assigned_teams,account,creator'
          | 'assigned_teams,account,creator,parent_ticket'
          | 'assigned_teams,account,parent_ticket'
          | 'assigned_teams,contact'
          | 'assigned_teams,contact,creator'
          | 'assigned_teams,contact,creator,parent_ticket'
          | 'assigned_teams,contact,parent_ticket'
          | 'assigned_teams,creator'
          | 'assigned_teams,creator,parent_ticket'
          | 'assigned_teams,parent_ticket'
          | 'assignees'
          | 'assignees,account'
          | 'assignees,account,contact'
          | 'assignees,account,contact,creator'
          | 'assignees,account,contact,creator,parent_ticket'
          | 'assignees,account,contact,parent_ticket'
          | 'assignees,account,creator'
          | 'assignees,account,creator,parent_ticket'
          | 'assignees,account,parent_ticket'
          | 'assignees,assigned_teams'
          | 'assignees,assigned_teams,account'
          | 'assignees,assigned_teams,account,contact'
          | 'assignees,assigned_teams,account,contact,creator'
          | 'assignees,assigned_teams,account,contact,creator,parent_ticket'
          | 'assignees,assigned_teams,account,contact,parent_ticket'
          | 'assignees,assigned_teams,account,creator'
          | 'assignees,assigned_teams,account,creator,parent_ticket'
          | 'assignees,assigned_teams,account,parent_ticket'
          | 'assignees,assigned_teams,contact'
          | 'assignees,assigned_teams,contact,creator'
          | 'assignees,assigned_teams,contact,creator,parent_ticket'
          | 'assignees,assigned_teams,contact,parent_ticket'
          | 'assignees,assigned_teams,creator'
          | 'assignees,assigned_teams,creator,parent_ticket'
          | 'assignees,assigned_teams,parent_ticket'
          | 'assignees,collections'
          | 'assignees,collections,account'
          | 'assignees,collections,account,contact'
          | 'assignees,collections,account,contact,creator'
          | 'assignees,collections,account,contact,creator,parent_ticket'
          | 'assignees,collections,account,contact,parent_ticket'
          | 'assignees,collections,account,creator'
          | 'assignees,collections,account,creator,parent_ticket'
          | 'assignees,collections,account,parent_ticket'
          | 'assignees,collections,assigned_teams'
          | 'assignees,collections,assigned_teams,account'
          | 'assignees,collections,assigned_teams,account,contact'
          | 'assignees,collections,assigned_teams,account,contact,creator'
          | 'assignees,collections,assigned_teams,account,contact,creator,parent_ticket'
          | 'assignees,collections,assigned_teams,account,contact,parent_ticket'
          | 'assignees,collections,assigned_teams,account,creator'
          | 'assignees,collections,assigned_teams,account,creator,parent_ticket'
          | 'assignees,collections,assigned_teams,account,parent_ticket'
          | 'assignees,collections,assigned_teams,contact'
          | 'assignees,collections,assigned_teams,contact,creator'
          | 'assignees,collections,assigned_teams,contact,creator,parent_ticket'
          | 'assignees,collections,assigned_teams,contact,parent_ticket'
          | 'assignees,collections,assigned_teams,creator'
          | 'assignees,collections,assigned_teams,creator,parent_ticket'
          | 'assignees,collections,assigned_teams,parent_ticket'
          | 'assignees,collections,contact'
          | 'assignees,collections,contact,creator'
          | 'assignees,collections,contact,creator,parent_ticket'
          | 'assignees,collections,contact,parent_ticket'
          | 'assignees,collections,creator'
          | 'assignees,collections,creator,parent_ticket'
          | 'assignees,collections,parent_ticket'
          | 'assignees,contact'
          | 'assignees,contact,creator'
          | 'assignees,contact,creator,parent_ticket'
          | 'assignees,contact,parent_ticket'
          | 'assignees,creator'
          | 'assignees,creator,parent_ticket'
          | 'assignees,parent_ticket'
          | 'attachments'
          | 'attachments,account'
          | 'attachments,account,contact'
          | 'attachments,account,contact,creator'
          | 'attachments,account,contact,creator,parent_ticket'
          | 'attachments,account,contact,parent_ticket'
          | 'attachments,account,creator'
          | 'attachments,account,creator,parent_ticket'
          | 'attachments,account,parent_ticket'
          | 'attachments,assigned_teams'
          | 'attachments,assigned_teams,account'
          | 'attachments,assigned_teams,account,contact'
          | 'attachments,assigned_teams,account,contact,creator'
          | 'attachments,assigned_teams,account,contact,creator,parent_ticket'
          | 'attachments,assigned_teams,account,contact,parent_ticket'
          | 'attachments,assigned_teams,account,creator'
          | 'attachments,assigned_teams,account,creator,parent_ticket'
          | 'attachments,assigned_teams,account,parent_ticket'
          | 'attachments,assigned_teams,contact'
          | 'attachments,assigned_teams,contact,creator'
          | 'attachments,assigned_teams,contact,creator,parent_ticket'
          | 'attachments,assigned_teams,contact,parent_ticket'
          | 'attachments,assigned_teams,creator'
          | 'attachments,assigned_teams,creator,parent_ticket'
          | 'attachments,assigned_teams,parent_ticket'
          | 'attachments,assignees'
          | 'attachments,assignees,account'
          | 'attachments,assignees,account,contact'
          | 'attachments,assignees,account,contact,creator'
          | 'attachments,assignees,account,contact,creator,parent_ticket'
          | 'attachments,assignees,account,contact,parent_ticket'
          | 'attachments,assignees,account,creator'
          | 'attachments,assignees,account,creator,parent_ticket'
          | 'attachments,assignees,account,parent_ticket'
          | 'attachments,assignees,assigned_teams'
          | 'attachments,assignees,assigned_teams,account'
          | 'attachments,assignees,assigned_teams,account,contact'
          | 'attachments,assignees,assigned_teams,account,contact,creator'
          | 'attachments,assignees,assigned_teams,account,contact,creator,parent_ticket'
          | 'attachments,assignees,assigned_teams,account,contact,parent_ticket'
          | 'attachments,assignees,assigned_teams,account,creator'
          | 'attachments,assignees,assigned_teams,account,creator,parent_ticket'
          | 'attachments,assignees,assigned_teams,account,parent_ticket'
          | 'attachments,assignees,assigned_teams,contact'
          | 'attachments,assignees,assigned_teams,contact,creator'
          | 'attachments,assignees,assigned_teams,contact,creator,parent_ticket'
          | 'attachments,assignees,assigned_teams,contact,parent_ticket'
          | 'attachments,assignees,assigned_teams,creator'
          | 'attachments,assignees,assigned_teams,creator,parent_ticket'
          | 'attachments,assignees,assigned_teams,parent_ticket'
          | 'attachments,assignees,collections'
          | 'attachments,assignees,collections,account'
          | 'attachments,assignees,collections,account,contact'
          | 'attachments,assignees,collections,account,contact,creator'
          | 'attachments,assignees,collections,account,contact,creator,parent_ticket'
          | 'attachments,assignees,collections,account,contact,parent_ticket'
          | 'attachments,assignees,collections,account,creator'
          | 'attachments,assignees,collections,account,creator,parent_ticket'
          | 'attachments,assignees,collections,account,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams'
          | 'attachments,assignees,collections,assigned_teams,account'
          | 'attachments,assignees,collections,assigned_teams,account,contact'
          | 'attachments,assignees,collections,assigned_teams,account,contact,creator'
          | 'attachments,assignees,collections,assigned_teams,account,contact,creator,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,account,contact,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,account,creator'
          | 'attachments,assignees,collections,assigned_teams,account,creator,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,account,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,contact'
          | 'attachments,assignees,collections,assigned_teams,contact,creator'
          | 'attachments,assignees,collections,assigned_teams,contact,creator,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,contact,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,creator'
          | 'attachments,assignees,collections,assigned_teams,creator,parent_ticket'
          | 'attachments,assignees,collections,assigned_teams,parent_ticket'
          | 'attachments,assignees,collections,contact'
          | 'attachments,assignees,collections,contact,creator'
          | 'attachments,assignees,collections,contact,creator,parent_ticket'
          | 'attachments,assignees,collections,contact,parent_ticket'
          | 'attachments,assignees,collections,creator'
          | 'attachments,assignees,collections,creator,parent_ticket'
          | 'attachments,assignees,collections,parent_ticket'
          | 'attachments,assignees,contact'
          | 'attachments,assignees,contact,creator'
          | 'attachments,assignees,contact,creator,parent_ticket'
          | 'attachments,assignees,contact,parent_ticket'
          | 'attachments,assignees,creator'
          | 'attachments,assignees,creator,parent_ticket'
          | 'attachments,assignees,parent_ticket'
          | 'attachments,collections'
          | 'attachments,collections,account'
          | 'attachments,collections,account,contact'
          | 'attachments,collections,account,contact,creator'
          | 'attachments,collections,account,contact,creator,parent_ticket'
          | 'attachments,collections,account,contact,parent_ticket'
          | 'attachments,collections,account,creator'
          | 'attachments,collections,account,creator,parent_ticket'
          | 'attachments,collections,account,parent_ticket'
          | 'attachments,collections,assigned_teams'
          | 'attachments,collections,assigned_teams,account'
          | 'attachments,collections,assigned_teams,account,contact'
          | 'attachments,collections,assigned_teams,account,contact,creator'
          | 'attachments,collections,assigned_teams,account,contact,creator,parent_ticket'
          | 'attachments,collections,assigned_teams,account,contact,parent_ticket'
          | 'attachments,collections,assigned_teams,account,creator'
          | 'attachments,collections,assigned_teams,account,creator,parent_ticket'
          | 'attachments,collections,assigned_teams,account,parent_ticket'
          | 'attachments,collections,assigned_teams,contact'
          | 'attachments,collections,assigned_teams,contact,creator'
          | 'attachments,collections,assigned_teams,contact,creator,parent_ticket'
          | 'attachments,collections,assigned_teams,contact,parent_ticket'
          | 'attachments,collections,assigned_teams,creator'
          | 'attachments,collections,assigned_teams,creator,parent_ticket'
          | 'attachments,collections,assigned_teams,parent_ticket'
          | 'attachments,collections,contact'
          | 'attachments,collections,contact,creator'
          | 'attachments,collections,contact,creator,parent_ticket'
          | 'attachments,collections,contact,parent_ticket'
          | 'attachments,collections,creator'
          | 'attachments,collections,creator,parent_ticket'
          | 'attachments,collections,parent_ticket'
          | 'attachments,contact'
          | 'attachments,contact,creator'
          | 'attachments,contact,creator,parent_ticket'
          | 'attachments,contact,parent_ticket'
          | 'attachments,creator'
          | 'attachments,creator,parent_ticket'
          | 'attachments,parent_ticket'
          | 'collections'
          | 'collections,account'
          | 'collections,account,contact'
          | 'collections,account,contact,creator'
          | 'collections,account,contact,creator,parent_ticket'
          | 'collections,account,contact,parent_ticket'
          | 'collections,account,creator'
          | 'collections,account,creator,parent_ticket'
          | 'collections,account,parent_ticket'
          | 'collections,assigned_teams'
          | 'collections,assigned_teams,account'
          | 'collections,assigned_teams,account,contact'
          | 'collections,assigned_teams,account,contact,creator'
          | 'collections,assigned_teams,account,contact,creator,parent_ticket'
          | 'collections,assigned_teams,account,contact,parent_ticket'
          | 'collections,assigned_teams,account,creator'
          | 'collections,assigned_teams,account,creator,parent_ticket'
          | 'collections,assigned_teams,account,parent_ticket'
          | 'collections,assigned_teams,contact'
          | 'collections,assigned_teams,contact,creator'
          | 'collections,assigned_teams,contact,creator,parent_ticket'
          | 'collections,assigned_teams,contact,parent_ticket'
          | 'collections,assigned_teams,creator'
          | 'collections,assigned_teams,creator,parent_ticket'
          | 'collections,assigned_teams,parent_ticket'
          | 'collections,contact'
          | 'collections,contact,creator'
          | 'collections,contact,creator,parent_ticket'
          | 'collections,contact,parent_ticket'
          | 'collections,creator'
          | 'collections,creator,parent_ticket'
          | 'collections,parent_ticket'
          | 'contact'
          | 'contact,creator'
          | 'contact,creator,parent_ticket'
          | 'contact,parent_ticket'
          | 'creator'
          | 'creator,parent_ticket'
          | 'parent_ticket'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format. */
        include_remote_fields?: boolean
        /** @description Deprecated. Use show_enum_origins. */
        remote_fields?:
          | 'priority'
          | 'priority,status'
          | 'priority,status,ticket_type'
          | 'priority,ticket_type'
          | 'status'
          | 'status,ticket_type'
          | 'ticket_type'
        /** @description A comma separated list of enum field names for which you'd like the original values to be returned, instead of Merge's normalized enum values. [Learn more](https://help.merge.dev/en/articles/8950958-show_enum_origins-query-parameter) */
        show_enum_origins?:
          | 'priority'
          | 'priority,status'
          | 'priority,status,ticket_type'
          | 'priority,ticket_type'
          | 'status'
          | 'status,ticket_type'
          | 'ticket_type'
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Ticket']
        }
      }
    }
  }
  tickets_partial_update: {
    parameters: {
      query?: {
        /** @description Whether to include debug fields (such as log file links) in the response. */
        is_debug_mode?: boolean
        /** @description Whether or not third-party updates should be run asynchronously. */
        run_async?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['PatchedTicketEndpointRequest']
        'application/x-www-form-urlencoded': components['schemas']['PatchedTicketEndpointRequest']
        'multipart/form-data': components['schemas']['PatchedTicketEndpointRequest']
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['TicketResponse']
        }
      }
    }
  }
  tickets_viewers_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'team' | 'user' | 'user,team'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description Number of results to return per page. */
        page_size?: number
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        ticket_id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedViewerList']
        }
      }
    }
  }
  tickets_meta_patch_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MetaResponse']
        }
      }
    }
  }
  tickets_meta_post_retrieve: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['MetaResponse']
        }
      }
    }
  }
  tickets_remote_field_classes_list: {
    parameters: {
      query?: {
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, will only return remote field classes with this is_common_model_field value */
        is_common_model_field?: boolean | null
        /** @description Number of results to return per page. */
        page_size?: number
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedRemoteFieldClassList']
        }
      }
    }
  }
  users_list: {
    parameters: {
      query?: {
        /** @description If provided, will only return objects created after this datetime. */
        created_after?: string
        /** @description If provided, will only return objects created before this datetime. */
        created_before?: string
        /** @description The pagination cursor value. */
        cursor?: string
        /** @description If provided, will only return users with emails equal to this value (case insensitive). */
        email_address?: string | null
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'roles' | 'teams' | 'teams,roles'
        /** @description Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
        include_deleted_data?: boolean
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
        /** @description Whether to include shell records. Shell records are empty records (they may contain some metadata but all other fields are null). */
        include_shell_data?: boolean
        /** @description If provided, only objects synced by Merge after this date time will be returned. */
        modified_after?: string
        /** @description If provided, only objects synced by Merge before this date time will be returned. */
        modified_before?: string
        /** @description Number of results to return per page. */
        page_size?: number
        /** @description The API provider's ID for the given object. */
        remote_id?: string | null
        /** @description If provided, will only return users matching in this team. */
        team?: string
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PaginatedUserList']
        }
      }
    }
  }
  users_retrieve: {
    parameters: {
      query?: {
        /** @description Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. */
        expand?: 'roles' | 'teams' | 'teams,roles'
        /** @description Whether to include the original data Merge fetched from the third-party to produce these models. */
        include_remote_data?: boolean
      }
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['User']
        }
      }
    }
  }
  webhook_receivers_list: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['WebhookReceiver'][]
        }
      }
    }
  }
  webhook_receivers_create: {
    parameters: {
      query?: never
      header: {
        /** @description Token identifying the end user. */
        'X-Account-Token': string
      }
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['WebhookReceiverRequest']
        'application/x-www-form-urlencoded': components['schemas']['WebhookReceiverRequest']
        'multipart/form-data': components['schemas']['WebhookReceiverRequest']
      }
    }
    responses: {
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['WebhookReceiver']
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
