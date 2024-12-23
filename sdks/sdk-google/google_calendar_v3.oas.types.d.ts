export interface paths {
  '/calendars': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Creates a secondary calendar. */
    post: operations['calendar.calendars.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/calendars/{calendarId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns metadata for a calendar. */
    get: operations['calendar.calendars.get']
    /** @description Updates metadata for a calendar. */
    put: operations['calendar.calendars.update']
    post?: never
    /** @description Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars. */
    delete: operations['calendar.calendars.delete']
    options?: never
    head?: never
    /** @description Updates metadata for a calendar. This method supports patch semantics. */
    patch: operations['calendar.calendars.patch']
    trace?: never
  }
  '/calendars/{calendarId}/acl': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns the rules in the access control list for the calendar. */
    get: operations['calendar.acl.list']
    put?: never
    /** @description Creates an access control rule. */
    post: operations['calendar.acl.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/calendars/{calendarId}/acl/watch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Watch for changes to ACL resources. */
    post: operations['calendar.acl.watch']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/calendars/{calendarId}/acl/{ruleId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an access control rule. */
    get: operations['calendar.acl.get']
    /** @description Updates an access control rule. */
    put: operations['calendar.acl.update']
    post?: never
    /** @description Deletes an access control rule. */
    delete: operations['calendar.acl.delete']
    options?: never
    head?: never
    /** @description Updates an access control rule. This method supports patch semantics. */
    patch: operations['calendar.acl.patch']
    trace?: never
  }
  '/calendars/{calendarId}/clear': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account. */
    post: operations['calendar.calendars.clear']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/calendars/{calendarId}/events': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns events on the specified calendar. */
    get: operations['calendar.events.list']
    put?: never
    /** @description Creates an event. */
    post: operations['calendar.events.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/calendars/{calendarId}/events/import': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Imports an event. This operation is used to add a private copy of an existing event to a calendar. */
    post: operations['calendar.events.import']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/calendars/{calendarId}/events/quickAdd': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Creates an event based on a simple text string. */
    post: operations['calendar.events.quickAdd']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/calendars/{calendarId}/events/watch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Watch for changes to Events resources. */
    post: operations['calendar.events.watch']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/calendars/{calendarId}/events/{eventId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter. */
    get: operations['calendar.events.get']
    /** @description Updates an event. */
    put: operations['calendar.events.update']
    post?: never
    /** @description Deletes an event. */
    delete: operations['calendar.events.delete']
    options?: never
    head?: never
    /** @description Updates an event. This method supports patch semantics. */
    patch: operations['calendar.events.patch']
    trace?: never
  }
  '/calendars/{calendarId}/events/{eventId}/instances': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns instances of the specified recurring event. */
    get: operations['calendar.events.instances']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/calendars/{calendarId}/events/{eventId}/move': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Moves an event to another calendar, i.e. changes an event's organizer. */
    post: operations['calendar.events.move']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/channels/stop': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Stop watching resources through this channel */
    post: operations['calendar.channels.stop']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/colors': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns the color definitions for calendars and events. */
    get: operations['calendar.colors.get']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/freeBusy': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Returns free/busy information for a set of calendars. */
    post: operations['calendar.freebusy.query']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/me/calendarList': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns the calendars on the user's calendar list. */
    get: operations['calendar.calendarList.list']
    put?: never
    /** @description Inserts an existing calendar into the user's calendar list. */
    post: operations['calendar.calendarList.insert']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/me/calendarList/watch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Watch for changes to CalendarList resources. */
    post: operations['calendar.calendarList.watch']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/me/calendarList/{calendarId}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a calendar from the user's calendar list. */
    get: operations['calendar.calendarList.get']
    /** @description Updates an existing calendar on the user's calendar list. */
    put: operations['calendar.calendarList.update']
    post?: never
    /** @description Removes a calendar from the user's calendar list. */
    delete: operations['calendar.calendarList.delete']
    options?: never
    head?: never
    /** @description Updates an existing calendar on the user's calendar list. This method supports patch semantics. */
    patch: operations['calendar.calendarList.patch']
    trace?: never
  }
  '/users/me/settings': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns all user settings for the authenticated user. */
    get: operations['calendar.settings.list']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/me/settings/watch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Watch for changes to Settings resources. */
    post: operations['calendar.settings.watch']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/users/me/settings/{setting}': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Returns a single user setting. */
    get: operations['calendar.settings.get']
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
    Acl: {
      /** @description ETag of the collection. */
      etag?: string
      /** @description List of rules on the access control list. */
      items?: components['schemas']['AclRule'][]
      /**
       * @description Type of the collection ("calendar#acl").
       * @default calendar#acl
       */
      kind: string
      /** @description Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
      nextPageToken?: string
      /** @description Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
      nextSyncToken?: string
    }
    AclRule: {
      /** @description ETag of the resource. */
      etag?: string
      /** @description Identifier of the Access Control List (ACL) rule. See Sharing calendars. */
      id?: string
      /**
       * @description Type of the resource ("calendar#aclRule").
       * @default calendar#aclRule
       */
      kind: string
      /** @description The role assigned to the scope. Possible values are:
       *     - "none" - Provides no access.
       *     - "freeBusyReader" - Provides read access to free/busy information.
       *     - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
       *     - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
       *     - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs. */
      role?: string
      /** @description The extent to which calendar access is granted by this ACL rule. */
      scope?: {
        /** @description The type of the scope. Possible values are:
         *     - "default" - The public scope. This is the default value.
         *     - "user" - Limits the scope to a single user.
         *     - "group" - Limits the scope to a group.
         *     - "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not. */
        type?: string
        /** @description The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default". */
        value?: string
      }
    }
    Calendar: {
      /** @description Conferencing properties for this calendar, for example what types of conferences are allowed. */
      conferenceProperties?: components['schemas']['ConferenceProperties']
      /** @description Description of the calendar. Optional. */
      description?: string
      /** @description ETag of the resource. */
      etag?: string
      /** @description Identifier of the calendar. To retrieve IDs call the calendarList.list() method. */
      id?: string
      /**
       * @description Type of the resource ("calendar#calendar").
       * @default calendar#calendar
       */
      kind: string
      /** @description Geographic location of the calendar as free-form text. Optional. */
      location?: string
      /** @description Title of the calendar. */
      summary?: string
      /** @description The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional. */
      timeZone?: string
    }
    CalendarList: {
      /** @description ETag of the collection. */
      etag?: string
      /** @description Calendars that are present on the user's calendar list. */
      items?: components['schemas']['CalendarListEntry'][]
      /**
       * @description Type of the collection ("calendar#calendarList").
       * @default calendar#calendarList
       */
      kind: string
      /** @description Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
      nextPageToken?: string
      /** @description Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
      nextSyncToken?: string
    }
    CalendarListEntry: {
      /** @description The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
       *     - "freeBusyReader" - Provides read access to free/busy information.
       *     - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
       *     - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
       *     - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs. */
      accessRole?: string
      /** @description The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional. */
      backgroundColor?: string
      /** @description The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional. */
      colorId?: string
      /** @description Conferencing properties for this calendar, for example what types of conferences are allowed. */
      conferenceProperties?: components['schemas']['ConferenceProperties']
      /** @description The default reminders that the authenticated user has for this calendar. */
      defaultReminders?: components['schemas']['EventReminder'][]
      /**
       * @description Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.
       * @default false
       */
      deleted: boolean
      /** @description Description of the calendar. Optional. Read-only. */
      description?: string
      /** @description ETag of the resource. */
      etag?: string
      /** @description The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional. */
      foregroundColor?: string
      /**
       * @description Whether the calendar has been hidden from the list. Optional. The attribute is only returned when the calendar is hidden, in which case the value is true.
       * @default false
       */
      hidden: boolean
      /** @description Identifier of the calendar. */
      id?: string
      /**
       * @description Type of the resource ("calendar#calendarListEntry").
       * @default calendar#calendarListEntry
       */
      kind: string
      /** @description Geographic location of the calendar as free-form text. Optional. Read-only. */
      location?: string
      /** @description The notifications that the authenticated user is receiving for this calendar. */
      notificationSettings?: {
        /** @description The list of notifications set for this calendar. */
        notifications?: components['schemas']['CalendarNotification'][]
      }
      /**
       * @description Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.
       * @default false
       */
      primary: boolean
      /**
       * @description Whether the calendar content shows up in the calendar UI. Optional. The default is False.
       * @default false
       */
      selected: boolean
      /** @description Title of the calendar. Read-only. */
      summary?: string
      /** @description The summary that the authenticated user has set for this calendar. Optional. */
      summaryOverride?: string
      /** @description The time zone of the calendar. Optional. Read-only. */
      timeZone?: string
    }
    CalendarNotification: {
      /** @description The method used to deliver the notification. The possible value is:
       *     - "email" - Notifications are sent via email.
       *     Required when adding a notification. */
      method?: string
      /** @description The type of notification. Possible values are:
       *     - "eventCreation" - Notification sent when a new event is put on the calendar.
       *     - "eventChange" - Notification sent when an event is changed.
       *     - "eventCancellation" - Notification sent when an event is cancelled.
       *     - "eventResponse" - Notification sent when an attendee responds to the event invitation.
       *     - "agenda" - An agenda with the events of the day (sent out in the morning).
       *     Required when adding a notification. */
      type?: string
    }
    Channel: {
      /** @description The address where notifications are delivered for this channel. */
      address?: string
      /**
       * Format: int64
       * @description Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
       */
      expiration?: string
      /** @description A UUID or similar unique string that identifies this channel. */
      id?: string
      /**
       * @description Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".
       * @default api#channel
       */
      kind: string
      /** @description Additional parameters controlling delivery channel behavior. Optional. */
      params?: {
        [key: string]: string
      }
      /** @description A Boolean value to indicate whether payload is wanted. Optional. */
      payload?: boolean
      /** @description An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
      resourceId?: string
      /** @description A version-specific identifier for the watched resource. */
      resourceUri?: string
      /** @description An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
      token?: string
      /** @description The type of delivery mechanism used for this channel. Valid values are "web_hook" (or "webhook"). Both values refer to a channel where Http requests are used to deliver messages. */
      type?: string
    }
    ColorDefinition: {
      /** @description The background color associated with this color definition. */
      background?: string
      /** @description The foreground color that can be used to write on top of a background with 'background' color. */
      foreground?: string
    }
    Colors: {
      /** @description A global palette of calendar colors, mapping from the color ID to its definition. A calendarListEntry resource refers to one of these color IDs in its colorId field. Read-only. */
      calendar?: {
        [key: string]: components['schemas']['ColorDefinition']
      }
      /** @description A global palette of event colors, mapping from the color ID to its definition. An event resource may refer to one of these color IDs in its colorId field. Read-only. */
      event?: {
        [key: string]: components['schemas']['ColorDefinition']
      }
      /**
       * @description Type of the resource ("calendar#colors").
       * @default calendar#colors
       */
      kind: string
      /**
       * Format: date-time
       * @description Last modification time of the color palette (as a RFC3339 timestamp). Read-only.
       */
      updated?: string
    }
    ConferenceData: {
      /** @description The ID of the conference.
       *     Can be used by developers to keep track of conferences, should not be displayed to users.
       *     The ID value is formed differently for each conference solution type:
       *     - eventHangout: ID is not set. (This conference type is deprecated.)
       *     - eventNamedHangout: ID is the name of the Hangout. (This conference type is deprecated.)
       *     - hangoutsMeet: ID is the 10-letter meeting code, for example aaa-bbbb-ccc.
       *     - addOn: ID is defined by the third-party provider.  Optional. */
      conferenceId?: string
      /** @description The conference solution, such as Google Meet.
       *     Unset for a conference with a failed create request.
       *     Either conferenceSolution and at least one entryPoint, or createRequest is required. */
      conferenceSolution?: components['schemas']['ConferenceSolution']
      /** @description A request to generate a new conference and attach it to the event. The data is generated asynchronously. To see whether the data is present check the status field.
       *     Either conferenceSolution and at least one entryPoint, or createRequest is required. */
      createRequest?: components['schemas']['CreateConferenceRequest']
      /** @description Information about individual conference entry points, such as URLs or phone numbers.
       *     All of them must belong to the same conference.
       *     Either conferenceSolution and at least one entryPoint, or createRequest is required. */
      entryPoints?: components['schemas']['EntryPoint'][]
      /** @description Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain HTML. The maximum length is 2048 characters. Optional. */
      notes?: string
      /** @description Additional properties related to a conference. An example would be a solution-specific setting for enabling video streaming. */
      parameters?: components['schemas']['ConferenceParameters']
      /** @description The signature of the conference data.
       *     Generated on server side.
       *     Unset for a conference with a failed create request.
       *     Optional for a conference with a pending create request. */
      signature?: string
    }
    ConferenceParameters: {
      /** @description Additional add-on specific data. */
      addOnParameters?: components['schemas']['ConferenceParametersAddOnParameters']
    }
    ConferenceParametersAddOnParameters: {
      parameters?: {
        [key: string]: string
      }
    }
    ConferenceProperties: {
      /** @description The types of conference solutions that are supported for this calendar.
       *     The possible values are:
       *     - "eventHangout"
       *     - "eventNamedHangout"
       *     - "hangoutsMeet"  Optional. */
      allowedConferenceSolutionTypes?: string[]
    }
    ConferenceRequestStatus: {
      /** @description The current status of the conference create request. Read-only.
       *     The possible values are:
       *     - "pending": the conference create request is still being processed.
       *     - "success": the conference create request succeeded, the entry points are populated.
       *     - "failure": the conference create request failed, there are no entry points. */
      statusCode?: string
    }
    ConferenceSolution: {
      /** @description The user-visible icon for this solution. */
      iconUri?: string
      /** @description The key which can uniquely identify the conference solution for this event. */
      key?: components['schemas']['ConferenceSolutionKey']
      /** @description The user-visible name of this solution. Not localized. */
      name?: string
    }
    ConferenceSolutionKey: {
      /** @description The conference solution type.
       *     If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it should disallow modifications.
       *     The possible values are:
       *     - "eventHangout" for Hangouts for consumers (deprecated; existing events may show this conference solution type but new conferences cannot be created)
       *     - "eventNamedHangout" for classic Hangouts for Google Workspace users (deprecated; existing events may show this conference solution type but new conferences cannot be created)
       *     - "hangoutsMeet" for Google Meet (http://meet.google.com)
       *     - "addOn" for 3P conference providers */
      type?: string
    }
    CreateConferenceRequest: {
      /** @description The conference solution, such as Hangouts or Google Meet. */
      conferenceSolutionKey?: components['schemas']['ConferenceSolutionKey']
      /** @description The client-generated unique ID for this request.
       *     Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the request is ignored. */
      requestId?: string
      /** @description The status of the conference create request. */
      status?: components['schemas']['ConferenceRequestStatus']
    }
    EntryPoint: {
      /** @description The access code to access the conference. The maximum length is 128 characters.
       *     When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
       *     Optional. */
      accessCode?: string
      /** @description Features of the entry point, such as being toll or toll-free. One entry point can have multiple features. However, toll and toll-free cannot be both set on the same entry point. */
      entryPointFeatures?: string[]
      /** @description The type of the conference entry point.
       *     Possible values are:
       *     - "video" - joining a conference over HTTP. A conference can have zero or one video entry point.
       *     - "phone" - joining a conference by dialing a phone number. A conference can have zero or more phone entry points.
       *     - "sip" - joining a conference over SIP. A conference can have zero or one sip entry point.
       *     - "more" - further conference joining instructions, for example additional phone numbers. A conference can have zero or one more entry point. A conference with only a more entry point is not a valid conference. */
      entryPointType?: string
      /** @description The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.
       *     Examples:
       *     - for video: meet.google.com/aaa-bbbb-ccc
       *     - for phone: +1 123 268 2601
       *     - for sip: 12345678@altostrat.com
       *     - for more: should not be filled
       *     Optional. */
      label?: string
      /** @description The meeting code to access the conference. The maximum length is 128 characters.
       *     When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
       *     Optional. */
      meetingCode?: string
      /** @description The passcode to access the conference. The maximum length is 128 characters.
       *     When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed. */
      passcode?: string
      /** @description The password to access the conference. The maximum length is 128 characters.
       *     When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
       *     Optional. */
      password?: string
      /** @description The PIN to access the conference. The maximum length is 128 characters.
       *     When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
       *     Optional. */
      pin?: string
      /** @description The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.
       *     Calendar backend will populate this field only for EntryPointType.PHONE. */
      regionCode?: string
      /** @description The URI of the entry point. The maximum length is 1300 characters.
       *     Format:
       *     - for video, http: or https: schema is required.
       *     - for phone, tel: schema is required. The URI should include the entire dial sequence (e.g., tel:+12345678900,,,123456789;1234).
       *     - for sip, sip: schema is required, e.g., sip:12345678@myprovider.com.
       *     - for more, http: or https: schema is required. */
      uri?: string
    }
    Error: {
      /** @description Domain, or broad category, of the error. */
      domain?: string
      /** @description Specific reason for the error. Some of the possible values are:
       *     - "groupTooBig" - The group of users requested is too large for a single query.
       *     - "tooManyCalendarsRequested" - The number of calendars requested is too large for a single query.
       *     - "notFound" - The requested resource was not found.
       *     - "internalError" - The API service has encountered an internal error.  Additional error types may be added in the future, so clients should gracefully handle additional error statuses not included in this list. */
      reason?: string
    }
    Event: {
      /**
       * @description Whether anyone can invite themselves to the event (deprecated). Optional. The default is False.
       * @default false
       */
      anyoneCanAddSelf: boolean
      /** @description File attachments for the event.
       *     In order to modify attachments the supportsAttachments request parameter should be set to true.
       *     There can be at most 25 attachments per event, */
      attachments?: components['schemas']['EventAttachment'][]
      /** @description The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users. Service accounts need to use domain-wide delegation of authority to populate the attendee list. */
      attendees?: components['schemas']['EventAttendee'][]
      /**
       * @description Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.
       * @default false
       */
      attendeesOmitted: boolean
      /** @description The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional. */
      colorId?: string
      /** @description The conference-related information, such as details of a Google Meet conference. To create new conference details use the createRequest field. To persist your changes, remember to set the conferenceDataVersion request parameter to 1 for all event modification requests. */
      conferenceData?: components['schemas']['ConferenceData']
      /**
       * Format: date-time
       * @description Creation time of the event (as a RFC3339 timestamp). Read-only.
       */
      created?: string
      /** @description The creator of the event. Read-only. */
      creator?: {
        /** @description The creator's name, if available. */
        displayName?: string
        /** @description The creator's email address, if available. */
        email?: string
        /** @description The creator's Profile ID, if available. */
        id?: string
        /**
         * @description Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
         * @default false
         */
        self: boolean
      }
      /** @description Description of the event. Can contain HTML. Optional. */
      description?: string
      /** @description The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance. */
      end?: components['schemas']['EventDateTime']
      /**
       * @description Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.
       * @default false
       */
      endTimeUnspecified: boolean
      /** @description ETag of the resource. */
      etag?: string
      /**
       * @description Specific type of the event. Read-only. Possible values are:
       *     - "default" - A regular event or not further specified.
       *     - "outOfOffice" - An out-of-office event.
       *     - "focusTime" - A focus-time event.
       *     - "workingLocation" - A working location event. Developer Preview.
       * @default default
       */
      eventType: string
      /** @description Extended properties of the event. */
      extendedProperties?: {
        /** @description Properties that are private to the copy of the event that appears on this calendar. */
        private?: {
          [key: string]: string
        }
        /** @description Properties that are shared between copies of the event on other attendees' calendars. */
        shared?: {
          [key: string]: string
        }
      }
      /** @description A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata. */
      gadget?: {
        /** @description The gadget's display mode. Deprecated. Possible values are:
         *     - "icon" - The gadget displays next to the event's title in the calendar view.
         *     - "chip" - The gadget displays when the event is clicked. */
        display?: string
        /**
         * Format: int32
         * @description The gadget's height in pixels. The height must be an integer greater than 0. Optional. Deprecated.
         */
        height?: number
        /** @description The gadget's icon URL. The URL scheme must be HTTPS. Deprecated. */
        iconLink?: string
        /** @description The gadget's URL. The URL scheme must be HTTPS. Deprecated. */
        link?: string
        /** @description Preferences. */
        preferences?: {
          [key: string]: string
        }
        /** @description The gadget's title. Deprecated. */
        title?: string
        /** @description The gadget's type. Deprecated. */
        type?: string
        /**
         * Format: int32
         * @description The gadget's width in pixels. The width must be an integer greater than 0. Optional. Deprecated.
         */
        width?: number
      }
      /**
       * @description Whether attendees other than the organizer can invite others to the event. Optional. The default is True.
       * @default true
       */
      guestsCanInviteOthers: boolean
      /**
       * @description Whether attendees other than the organizer can modify the event. Optional. The default is False.
       * @default false
       */
      guestsCanModify: boolean
      /**
       * @description Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.
       * @default true
       */
      guestsCanSeeOtherGuests: boolean
      /** @description An absolute link to the Google Hangout associated with this event. Read-only. */
      hangoutLink?: string
      /** @description An absolute link to this event in the Google Calendar Web UI. Read-only. */
      htmlLink?: string
      /** @description Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
       *     Note that the iCalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same iCalUIDs. To retrieve an event using its iCalUID, call the events.list method using the iCalUID parameter. To retrieve an event using its id, call the events.get method. */
      iCalUID?: string
      /** @description Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
       *     - characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
       *     - the length of the ID must be between 5 and 1024 characters
       *     - the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
       *     If you do not specify an ID, it will be automatically generated by the server.
       *     Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs. */
      id?: string
      /**
       * @description Type of the resource ("calendar#event").
       * @default calendar#event
       */
      kind: string
      /** @description Geographic location of the event as free-form text. Optional. */
      location?: string
      /**
       * @description Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.
       * @default false
       */
      locked: boolean
      /** @description The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event. */
      organizer?: {
        /** @description The organizer's name, if available. */
        displayName?: string
        /** @description The organizer's email address, if available. It must be a valid email address as per RFC5322. */
        email?: string
        /** @description The organizer's Profile ID, if available. */
        id?: string
        /**
         * @description Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
         * @default false
         */
        self: boolean
      }
      /** @description For an instance of a recurring event, this is the time at which this event would start according to the recurrence data in the recurring event identified by recurringEventId. It uniquely identifies the instance within the recurring event series even if the instance was moved to a different time. Immutable. */
      originalStartTime?: components['schemas']['EventDateTime']
      /**
       * @description If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.
       * @default false
       */
      privateCopy: boolean
      /** @description List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events. */
      recurrence?: string[]
      /** @description For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable. */
      recurringEventId?: string
      /** @description Information about the event's reminders for the authenticated user. */
      reminders?: {
        /** @description If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5. */
        overrides?: components['schemas']['EventReminder'][]
        /** @description Whether the default reminders of the calendar apply to the event. */
        useDefault?: boolean
      }
      /**
       * Format: int32
       * @description Sequence number as per iCalendar.
       */
      sequence?: number
      /** @description Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event. */
      source?: {
        /** @description Title of the source; for example a title of a web page or an email subject. */
        title?: string
        /** @description URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS. */
        url?: string
      }
      /** @description The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance. */
      start?: components['schemas']['EventDateTime']
      /** @description Status of the event. Optional. Possible values are:
       *     - "confirmed" - The event is confirmed. This is the default status.
       *     - "tentative" - The event is tentatively confirmed.
       *     - "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
       *     A cancelled status represents two different states depending on the event type:
       *     - Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
       *     Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
       *     - All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
       *     Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
       *     If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated. */
      status?: string
      /** @description Title of the event. */
      summary?: string
      /**
       * @description Whether the event blocks time on the calendar. Optional. Possible values are:
       *     - "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.
       *     - "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.
       * @default opaque
       */
      transparency: string
      /**
       * Format: date-time
       * @description Last modification time of the event (as a RFC3339 timestamp). Read-only.
       */
      updated?: string
      /**
       * @description Visibility of the event. Optional. Possible values are:
       *     - "default" - Uses the default visibility for events on the calendar. This is the default value.
       *     - "public" - The event is public and event details are visible to all readers of the calendar.
       *     - "private" - The event is private and only event attendees may view event details.
       *     - "confidential" - The event is private. This value is provided for compatibility reasons.
       * @default default
       */
      visibility: string
      /** @description Developer Preview: Working Location event data. Read-only. */
      workingLocationProperties?: components['schemas']['EventWorkingLocationProperties']
    }
    EventAttachment: {
      /** @description ID of the attached file. Read-only.
       *     For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API. */
      fileId?: string
      /** @description URL link to the attachment.
       *     For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API.
       *     Required when adding an attachment. */
      fileUrl?: string
      /** @description URL link to the attachment's icon. This field can only be modified for custom third-party attachments. */
      iconLink?: string
      /** @description Internet media type (MIME type) of the attachment. */
      mimeType?: string
      /** @description Attachment title. */
      title?: string
    }
    EventAttendee: {
      /**
       * Format: int32
       * @description Number of additional guests. Optional. The default is 0.
       * @default 0
       */
      additionalGuests: number
      /** @description The attendee's response comment. Optional. */
      comment?: string
      /** @description The attendee's name, if available. Optional. */
      displayName?: string
      /** @description The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.
       *     Required when adding an attendee. */
      email?: string
      /** @description The attendee's Profile ID, if available. */
      id?: string
      /**
       * @description Whether this is an optional attendee. Optional. The default is False.
       * @default false
       */
      optional: boolean
      /** @description Whether the attendee is the organizer of the event. Read-only. The default is False. */
      organizer?: boolean
      /**
       * @description Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False.
       * @default false
       */
      resource: boolean
      /** @description The attendee's response status. Possible values are:
       *     - "needsAction" - The attendee has not responded to the invitation (recommended for new events).
       *     - "declined" - The attendee has declined the invitation.
       *     - "tentative" - The attendee has tentatively accepted the invitation.
       *     - "accepted" - The attendee has accepted the invitation.  Warning: If you add an event using the values declined, tentative, or accepted, attendees with the "Add invitations to my calendar" setting set to "When I respond to invitation in email" won't see an event on their calendar unless they choose to change their invitation response in the event invitation email. */
      responseStatus?: string
      /**
       * @description Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.
       * @default false
       */
      self: boolean
    }
    EventDateTime: {
      /**
       * Format: date
       * @description The date, in the format "yyyy-mm-dd", if this is an all-day event.
       */
      date?: string
      /**
       * Format: date-time
       * @description The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.
       */
      dateTime?: string
      /** @description The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end. */
      timeZone?: string
    }
    EventReminder: {
      /** @description The method used by this reminder. Possible values are:
       *     - "email" - Reminders are sent via email.
       *     - "popup" - Reminders are sent via a UI popup.
       *     Required when adding a reminder. */
      method?: string
      /**
       * Format: int32
       * @description Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
       *     Required when adding a reminder.
       */
      minutes?: number
    }
    EventWorkingLocationProperties: {
      /** @description If present, specifies that the user is working from a custom location. */
      customLocation?: {
        /** @description An optional extra label for additional information. */
        label?: string
      }
      /** @description If present, specifies that the user is working at home. */
      homeOffice?: unknown
      /** @description If present, specifies that the user is working from an office. */
      officeLocation?: {
        /** @description An optional building identifier. This should reference a building ID in the organization's Resources database. */
        buildingId?: string
        /** @description An optional arbitrary desk identifier. */
        deskId?: string
        /** @description An optional arbitrary floor identifier. */
        floorId?: string
        /** @description An optional arbitrary floor section identifier. */
        floorSectionId?: string
        /** @description An optional extra label for additional information. */
        label?: string
      }
    }
    Events: {
      /** @description The user's access role for this calendar. Read-only. Possible values are:
       *     - "none" - The user has no access.
       *     - "freeBusyReader" - The user has read access to free/busy information.
       *     - "reader" - The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
       *     - "writer" - The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
       *     - "owner" - The user has ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs. */
      accessRole?: string
      /** @description The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have reminders.useDefault set to True). */
      defaultReminders?: components['schemas']['EventReminder'][]
      /** @description Description of the calendar. Read-only. */
      description?: string
      /** @description ETag of the collection. */
      etag?: string
      /** @description List of events on the calendar. */
      items?: components['schemas']['Event'][]
      /**
       * @description Type of the collection ("calendar#events").
       * @default calendar#events
       */
      kind: string
      /** @description Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
      nextPageToken?: string
      /** @description Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
      nextSyncToken?: string
      /** @description Title of the calendar. Read-only. */
      summary?: string
      /** @description The time zone of the calendar. Read-only. */
      timeZone?: string
      /**
       * Format: date-time
       * @description Last modification time of the calendar (as a RFC3339 timestamp). Read-only.
       */
      updated?: string
    }
    FreeBusyCalendar: {
      /** @description List of time ranges during which this calendar should be regarded as busy. */
      busy?: components['schemas']['TimePeriod'][]
      /** @description Optional error(s) (if computation for the calendar failed). */
      errors?: components['schemas']['Error'][]
    }
    FreeBusyGroup: {
      /** @description List of calendars' identifiers within a group. */
      calendars?: string[]
      /** @description Optional error(s) (if computation for the group failed). */
      errors?: components['schemas']['Error'][]
    }
    FreeBusyRequest: {
      /**
       * Format: int32
       * @description Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50.
       */
      calendarExpansionMax?: number
      /**
       * Format: int32
       * @description Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100.
       */
      groupExpansionMax?: number
      /** @description List of calendars and/or groups to query. */
      items?: components['schemas']['FreeBusyRequestItem'][]
      /**
       * Format: date-time
       * @description The end of the interval for the query formatted as per RFC3339.
       */
      timeMax?: string
      /**
       * Format: date-time
       * @description The start of the interval for the query formatted as per RFC3339.
       */
      timeMin?: string
      /**
       * @description Time zone used in the response. Optional. The default is UTC.
       * @default UTC
       */
      timeZone: string
    }
    FreeBusyRequestItem: {
      /** @description The identifier of a calendar or a group. */
      id?: string
    }
    FreeBusyResponse: {
      /** @description List of free/busy information for calendars. */
      calendars?: {
        [key: string]: components['schemas']['FreeBusyCalendar']
      }
      /** @description Expansion of groups. */
      groups?: {
        [key: string]: components['schemas']['FreeBusyGroup']
      }
      /**
       * @description Type of the resource ("calendar#freeBusy").
       * @default calendar#freeBusy
       */
      kind: string
      /**
       * Format: date-time
       * @description The end of the interval.
       */
      timeMax?: string
      /**
       * Format: date-time
       * @description The start of the interval.
       */
      timeMin?: string
    }
    Setting: {
      /** @description ETag of the resource. */
      etag?: string
      /** @description The id of the user setting. */
      id?: string
      /**
       * @description Type of the resource ("calendar#setting").
       * @default calendar#setting
       */
      kind: string
      /** @description Value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters. */
      value?: string
    }
    Settings: {
      /** @description Etag of the collection. */
      etag?: string
      /** @description List of user settings. */
      items?: components['schemas']['Setting'][]
      /**
       * @description Type of the collection ("calendar#settings").
       * @default calendar#settings
       */
      kind: string
      /** @description Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. */
      nextPageToken?: string
      /** @description Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. */
      nextSyncToken?: string
    }
    TimePeriod: {
      /**
       * Format: date-time
       * @description The (exclusive) end of the time period.
       */
      end?: string
      /**
       * Format: date-time
       * @description The (inclusive) start of the time period.
       */
      start?: string
    }
  }
  responses: never
  parameters: {
    /** @description Data format for the response. */
    alt: 'json'
    /** @description Selector specifying which fields to include in a partial response. */
    fields: string
    /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
    key: string
    /** @description OAuth 2.0 token for the current user. */
    oauth_token: string
    /** @description Returns response with indentations and line breaks. */
    prettyPrint: boolean
    /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
    quotaUser: string
    /** @description Deprecated. Please use quotaUser instead. */
    userIp: string
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  'calendar.calendars.insert': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Calendar']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Calendar']
        }
      }
    }
  }
  'calendar.calendars.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
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
          'application/json': components['schemas']['Calendar']
        }
      }
    }
  }
  'calendar.calendars.update': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Calendar']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Calendar']
        }
      }
    }
  }
  'calendar.calendars.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
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
  'calendar.calendars.patch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Calendar']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Calendar']
        }
      }
    }
  }
  'calendar.acl.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional. */
        maxResults?: number
        /** @description Token specifying which result page to return. Optional. */
        pageToken?: string
        /** @description Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False. */
        showDeleted?: boolean
        /** @description Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
         *     If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
         *     Learn more about incremental synchronization.
         *     Optional. The default is to return all entries. */
        syncToken?: string
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
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
          'application/json': components['schemas']['Acl']
        }
      }
    }
  }
  'calendar.acl.insert': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether to send notifications about the calendar sharing change. Optional. The default is True. */
        sendNotifications?: boolean
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['AclRule']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AclRule']
        }
      }
    }
  }
  'calendar.acl.watch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional. */
        maxResults?: number
        /** @description Token specifying which result page to return. Optional. */
        pageToken?: string
        /** @description Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False. */
        showDeleted?: boolean
        /** @description Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
         *     If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
         *     Learn more about incremental synchronization.
         *     Optional. The default is to return all entries. */
        syncToken?: string
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Channel']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Channel']
        }
      }
    }
  }
  'calendar.acl.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
        /** @description ACL rule identifier. */
        ruleId: string
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
          'application/json': components['schemas']['AclRule']
        }
      }
    }
  }
  'calendar.acl.update': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True. */
        sendNotifications?: boolean
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
        /** @description ACL rule identifier. */
        ruleId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['AclRule']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AclRule']
        }
      }
    }
  }
  'calendar.acl.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
        /** @description ACL rule identifier. */
        ruleId: string
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
  'calendar.acl.patch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True. */
        sendNotifications?: boolean
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
        /** @description ACL rule identifier. */
        ruleId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['AclRule']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AclRule']
        }
      }
    }
  }
  'calendar.calendars.clear': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
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
  'calendar.events.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). */
        alwaysIncludeEmail?: boolean
        /** @description Event types to return. Optional. Possible values are:
         *     - "default"
         *     - "focusTime"
         *     - "outOfOffice"This parameter can be repeated multiple times to return events of different types. Currently, this is the only allowed value for this field:
         *     - ["default", "focusTime", "outOfOffice"] This value will be the default.
         *
         *     If you're enrolled in the Working Location developer preview program, in addition to the default value above you can also set the "workingLocation" event type:
         *     - ["default", "focusTime", "outOfOffice", "workingLocation"]
         *     - ["workingLocation"] Additional combinations of these 4 event types will be made available in later releases. Developer Preview. */
        eventTypes?: string[]
        /** @description Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID. */
        iCalUID?: string
        /** @description The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. */
        maxAttendees?: number
        /** @description Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional. */
        maxResults?: number
        /** @description The order of the events returned in the result. Optional. The default is an unspecified, stable order. */
        orderBy?: 'startTime' | 'updated'
        /** @description Token specifying which result page to return. Optional. */
        pageToken?: string
        /** @description Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints. */
        privateExtendedProperty?: string[]
        /** @description Free text search terms to find events that match these terms in the following fields: summary, description, location, attendee's displayName, attendee's email. Optional. */
        q?: string
        /** @description Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints. */
        sharedExtendedProperty?: string[]
        /** @description Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False. */
        showDeleted?: boolean
        /** @description Whether to include hidden invitations in the result. Optional. The default is False. */
        showHiddenInvitations?: boolean
        /** @description Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False. */
        singleEvents?: boolean
        /** @description Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
         *     There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
         *
         *     These are:
         *     - iCalUID
         *     - orderBy
         *     - privateExtendedProperty
         *     - q
         *     - sharedExtendedProperty
         *     - timeMin
         *     - timeMax
         *     - updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
         *     Learn more about incremental synchronization.
         *     Optional. The default is to return all entries. */
        syncToken?: string
        /** @description Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin. */
        timeMax?: string
        /** @description Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax. */
        timeMin?: string
        /** @description Time zone used in the response. Optional. The default is the time zone of the calendar. */
        timeZone?: string
        /** @description Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time. */
        updatedMin?: string
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
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
          'application/json': components['schemas']['Events']
        }
      }
    }
  }
  'calendar.events.insert': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. */
        conferenceDataVersion?: number
        /** @description The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. */
        maxAttendees?: number
        /** @description Deprecated. Please use sendUpdates instead.
         *
         *     Whether to send notifications about the creation of the new event. Note that some emails might still be sent even if you set the value to false. The default is false. */
        sendNotifications?: boolean
        /** @description Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false. */
        sendUpdates?: 'all' | 'externalOnly' | 'none'
        /** @description Whether API client performing operation supports event attachments. Optional. The default is False. */
        supportsAttachments?: boolean
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Event']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Event']
        }
      }
    }
  }
  'calendar.events.import': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. */
        conferenceDataVersion?: number
        /** @description Whether API client performing operation supports event attachments. Optional. The default is False. */
        supportsAttachments?: boolean
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Event']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Event']
        }
      }
    }
  }
  'calendar.events.quickAdd': {
    parameters: {
      query: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description The text describing the event to be created. */
        text: string
        /** @description Deprecated. Please use sendUpdates instead.
         *
         *     Whether to send notifications about the creation of the event. Note that some emails might still be sent even if you set the value to false. The default is false. */
        sendNotifications?: boolean
        /** @description Guests who should receive notifications about the creation of the new event. */
        sendUpdates?: 'all' | 'externalOnly' | 'none'
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
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
          'application/json': components['schemas']['Event']
        }
      }
    }
  }
  'calendar.events.watch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). */
        alwaysIncludeEmail?: boolean
        /** @description Event types to return. Optional. Possible values are:
         *     - "default"
         *     - "focusTime"
         *     - "outOfOffice"This parameter can be repeated multiple times to return events of different types. Currently, this is the only allowed value for this field:
         *     - ["default", "focusTime", "outOfOffice"] This value will be the default.
         *
         *     If you're enrolled in the Working Location developer preview program, in addition to the default value above you can also set the "workingLocation" event type:
         *     - ["default", "focusTime", "outOfOffice", "workingLocation"]
         *     - ["workingLocation"] Additional combinations of these 4 event types will be made available in later releases. Developer Preview. */
        eventTypes?: string[]
        /** @description Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID. */
        iCalUID?: string
        /** @description The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. */
        maxAttendees?: number
        /** @description Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional. */
        maxResults?: number
        /** @description The order of the events returned in the result. Optional. The default is an unspecified, stable order. */
        orderBy?: 'startTime' | 'updated'
        /** @description Token specifying which result page to return. Optional. */
        pageToken?: string
        /** @description Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints. */
        privateExtendedProperty?: string[]
        /** @description Free text search terms to find events that match these terms in the following fields: summary, description, location, attendee's displayName, attendee's email. Optional. */
        q?: string
        /** @description Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints. */
        sharedExtendedProperty?: string[]
        /** @description Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False. */
        showDeleted?: boolean
        /** @description Whether to include hidden invitations in the result. Optional. The default is False. */
        showHiddenInvitations?: boolean
        /** @description Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False. */
        singleEvents?: boolean
        /** @description Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
         *     There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
         *
         *     These are:
         *     - iCalUID
         *     - orderBy
         *     - privateExtendedProperty
         *     - q
         *     - sharedExtendedProperty
         *     - timeMin
         *     - timeMax
         *     - updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
         *     Learn more about incremental synchronization.
         *     Optional. The default is to return all entries. */
        syncToken?: string
        /** @description Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin. */
        timeMax?: string
        /** @description Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax. */
        timeMin?: string
        /** @description Time zone used in the response. Optional. The default is the time zone of the calendar. */
        timeZone?: string
        /** @description Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time. */
        updatedMin?: string
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Channel']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Channel']
        }
      }
    }
  }
  'calendar.events.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). */
        alwaysIncludeEmail?: boolean
        /** @description The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. */
        maxAttendees?: number
        /** @description Time zone used in the response. Optional. The default is the time zone of the calendar. */
        timeZone?: string
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
        /** @description Event identifier. */
        eventId: string
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
          'application/json': components['schemas']['Event']
        }
      }
    }
  }
  'calendar.events.update': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). */
        alwaysIncludeEmail?: boolean
        /** @description Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. */
        conferenceDataVersion?: number
        /** @description The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. */
        maxAttendees?: number
        /** @description Deprecated. Please use sendUpdates instead.
         *
         *     Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false. */
        sendNotifications?: boolean
        /** @description Guests who should receive notifications about the event update (for example, title changes, etc.). */
        sendUpdates?: 'all' | 'externalOnly' | 'none'
        /** @description Whether API client performing operation supports event attachments. Optional. The default is False. */
        supportsAttachments?: boolean
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
        /** @description Event identifier. */
        eventId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Event']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Event']
        }
      }
    }
  }
  'calendar.events.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Deprecated. Please use sendUpdates instead.
         *
         *     Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to false. The default is false. */
        sendNotifications?: boolean
        /** @description Guests who should receive notifications about the deletion of the event. */
        sendUpdates?: 'all' | 'externalOnly' | 'none'
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
        /** @description Event identifier. */
        eventId: string
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
  'calendar.events.patch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). */
        alwaysIncludeEmail?: boolean
        /** @description Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. */
        conferenceDataVersion?: number
        /** @description The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. */
        maxAttendees?: number
        /** @description Deprecated. Please use sendUpdates instead.
         *
         *     Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false. */
        sendNotifications?: boolean
        /** @description Guests who should receive notifications about the event update (for example, title changes, etc.). */
        sendUpdates?: 'all' | 'externalOnly' | 'none'
        /** @description Whether API client performing operation supports event attachments. Optional. The default is False. */
        supportsAttachments?: boolean
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
        /** @description Event identifier. */
        eventId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Event']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Event']
        }
      }
    }
  }
  'calendar.events.instances': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). */
        alwaysIncludeEmail?: boolean
        /** @description The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. */
        maxAttendees?: number
        /** @description Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional. */
        maxResults?: number
        /** @description The original start time of the instance in the result. Optional. */
        originalStart?: string
        /** @description Token specifying which result page to return. Optional. */
        pageToken?: string
        /** @description Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False. */
        showDeleted?: boolean
        /** @description Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset. */
        timeMax?: string
        /** @description Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset. */
        timeMin?: string
        /** @description Time zone used in the response. Optional. The default is the time zone of the calendar. */
        timeZone?: string
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
        /** @description Recurring event identifier. */
        eventId: string
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
          'application/json': components['schemas']['Events']
        }
      }
    }
  }
  'calendar.events.move': {
    parameters: {
      query: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Calendar identifier of the target calendar where the event is to be moved to. */
        destination: string
        /** @description Deprecated. Please use sendUpdates instead.
         *
         *     Whether to send notifications about the change of the event's organizer. Note that some emails might still be sent even if you set the value to false. The default is false. */
        sendNotifications?: boolean
        /** @description Guests who should receive notifications about the change of the event's organizer. */
        sendUpdates?: 'all' | 'externalOnly' | 'none'
      }
      header?: never
      path: {
        /** @description Calendar identifier of the source calendar where the event currently is on. */
        calendarId: string
        /** @description Event identifier. */
        eventId: string
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
          'application/json': components['schemas']['Event']
        }
      }
    }
  }
  'calendar.channels.stop': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Channel']
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
  'calendar.colors.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
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
          'application/json': components['schemas']['Colors']
        }
      }
    }
  }
  'calendar.freebusy.query': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['FreeBusyRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['FreeBusyResponse']
        }
      }
    }
  }
  'calendar.calendarList.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional. */
        maxResults?: number
        /** @description The minimum access role for the user in the returned entries. Optional. The default is no restriction. */
        minAccessRole?: 'freeBusyReader' | 'owner' | 'reader' | 'writer'
        /** @description Token specifying which result page to return. Optional. */
        pageToken?: string
        /** @description Whether to include deleted calendar list entries in the result. Optional. The default is False. */
        showDeleted?: boolean
        /** @description Whether to show hidden entries. Optional. The default is False. */
        showHidden?: boolean
        /** @description Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
         *     To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
         *     If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
         *     Learn more about incremental synchronization.
         *     Optional. The default is to return all entries. */
        syncToken?: string
      }
      header?: never
      path?: never
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
          'application/json': components['schemas']['CalendarList']
        }
      }
    }
  }
  'calendar.calendarList.insert': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False. */
        colorRgbFormat?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CalendarListEntry']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CalendarListEntry']
        }
      }
    }
  }
  'calendar.calendarList.watch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional. */
        maxResults?: number
        /** @description The minimum access role for the user in the returned entries. Optional. The default is no restriction. */
        minAccessRole?: 'freeBusyReader' | 'owner' | 'reader' | 'writer'
        /** @description Token specifying which result page to return. Optional. */
        pageToken?: string
        /** @description Whether to include deleted calendar list entries in the result. Optional. The default is False. */
        showDeleted?: boolean
        /** @description Whether to show hidden entries. Optional. The default is False. */
        showHidden?: boolean
        /** @description Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
         *     To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
         *     If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
         *     Learn more about incremental synchronization.
         *     Optional. The default is to return all entries. */
        syncToken?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Channel']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Channel']
        }
      }
    }
  }
  'calendar.calendarList.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
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
          'application/json': components['schemas']['CalendarListEntry']
        }
      }
    }
  }
  'calendar.calendarList.update': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False. */
        colorRgbFormat?: boolean
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CalendarListEntry']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CalendarListEntry']
        }
      }
    }
  }
  'calendar.calendarList.delete': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
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
  'calendar.calendarList.patch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False. */
        colorRgbFormat?: boolean
      }
      header?: never
      path: {
        /** @description Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. */
        calendarId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CalendarListEntry']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CalendarListEntry']
        }
      }
    }
  }
  'calendar.settings.list': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional. */
        maxResults?: number
        /** @description Token specifying which result page to return. Optional. */
        pageToken?: string
        /** @description Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
         *     If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
         *     Learn more about incremental synchronization.
         *     Optional. The default is to return all entries. */
        syncToken?: string
      }
      header?: never
      path?: never
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
          'application/json': components['schemas']['Settings']
        }
      }
    }
  }
  'calendar.settings.watch': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
        /** @description Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional. */
        maxResults?: number
        /** @description Token specifying which result page to return. Optional. */
        pageToken?: string
        /** @description Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
         *     If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
         *     Learn more about incremental synchronization.
         *     Optional. The default is to return all entries. */
        syncToken?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['Channel']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Channel']
        }
      }
    }
  }
  'calendar.settings.get': {
    parameters: {
      query?: {
        /** @description Data format for the response. */
        alt?: components['parameters']['alt']
        /** @description Selector specifying which fields to include in a partial response. */
        fields?: components['parameters']['fields']
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key?: components['parameters']['key']
        /** @description OAuth 2.0 token for the current user. */
        oauth_token?: components['parameters']['oauth_token']
        /** @description Returns response with indentations and line breaks. */
        prettyPrint?: components['parameters']['prettyPrint']
        /** @description An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
        quotaUser?: components['parameters']['quotaUser']
        /** @description Deprecated. Please use quotaUser instead. */
        userIp?: components['parameters']['userIp']
      }
      header?: never
      path: {
        /** @description The id of the user setting. */
        setting: string
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
          'application/json': components['schemas']['Setting']
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
