export interface paths {
  '/v4/spreadsheets': {
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
    /** @description Creates a spreadsheet, returning the newly created spreadsheet. */
    post: operations['sheets.spreadsheets.create']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}': {
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
    /** @description Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a [field mask](https://developers.google.com/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges. */
    get: operations['sheets.spreadsheets.get']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}': {
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
    /** @description Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId. */
    get: operations['sheets.spreadsheets.developerMetadata.get']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}/developerMetadata:search': {
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
    /** @description Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region. */
    post: operations['sheets.spreadsheets.developerMetadata.search']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo': {
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
    /** @description Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet. */
    post: operations['sheets.spreadsheets.sheets.copyTo']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}/values/{range}': {
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
    /** @description Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range. */
    get: operations['sheets.spreadsheets.values.get']
    /** @description Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption. */
    put: operations['sheets.spreadsheets.values.update']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}/values/{range}:append': {
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
    /** @description Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to. */
    post: operations['sheets.spreadsheets.values.append']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}/values/{range}:clear': {
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
    /** @description Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept. */
    post: operations['sheets.spreadsheets.values.clear']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}/values:batchClear': {
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
    /** @description Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept. */
    post: operations['sheets.spreadsheets.values.batchClear']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter': {
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
    /** @description Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept. */
    post: operations['sheets.spreadsheets.values.batchClearByDataFilter']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}/values:batchGet': {
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
    /** @description Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. */
    get: operations['sheets.spreadsheets.values.batchGet']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter': {
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
    /** @description Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned. */
    post: operations['sheets.spreadsheets.values.batchGetByDataFilter']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}/values:batchUpdate': {
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
    /** @description Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges. */
    post: operations['sheets.spreadsheets.values.batchUpdate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter': {
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
    /** @description Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges. */
    post: operations['sheets.spreadsheets.values.batchUpdateByDataFilter']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}:batchUpdate': {
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
    /** @description Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes. */
    post: operations['sheets.spreadsheets.batchUpdate']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v4/spreadsheets/{spreadsheetId}:getByDataFilter': {
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
    /** @description Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways: * Specify a [field mask](https://developers.google.com/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. */
    post: operations['sheets.spreadsheets.getByDataFilter']
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
    /** @description Adds a new banded range to the spreadsheet. */
    AddBandingRequest: {
      /** @description The banded range to add. The bandedRangeId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.) */
      bandedRange?: components['schemas']['BandedRange']
    }
    /** @description The result of adding a banded range. */
    AddBandingResponse: {
      /** @description The banded range that was added. */
      bandedRange?: components['schemas']['BandedRange']
    }
    /** @description Adds a chart to a sheet in the spreadsheet. */
    AddChartRequest: {
      /** @description The chart that should be added to the spreadsheet, including the position where it should be placed. The chartId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of an embedded object that already exists.) */
      chart?: components['schemas']['EmbeddedChart']
    }
    /** @description The result of adding a chart to a spreadsheet. */
    AddChartResponse: {
      /** @description The newly added chart. */
      chart?: components['schemas']['EmbeddedChart']
    }
    /** @description Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented. */
    AddConditionalFormatRuleRequest: {
      /**
       * Format: int32
       * @description The zero-based index where the rule should be inserted.
       */
      index?: number
      /** @description The rule to add. */
      rule?: components['schemas']['ConditionalFormatRule']
    }
    /** @description Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an execution is triggered to refresh the sheet to read data from the data source. The request requires an additional `bigquery.readonly` OAuth scope. */
    AddDataSourceRequest: {
      /** @description The data source to add. */
      dataSource?: components['schemas']['DataSource']
    }
    /** @description The result of adding a data source. */
    AddDataSourceResponse: {
      /** @description The data execution status. */
      dataExecutionStatus?: components['schemas']['DataExecutionStatus']
      /** @description The data source that was created. */
      dataSource?: components['schemas']['DataSource']
    }
    /** @description Creates a group over the specified range. If the requested range is a superset of the range of an existing group G, then the depth of G is incremented and this new group G' has the depth of that group. For example, a group [C:D, depth 1] + [B:E] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range is a subset of the range of an existing group G, then the depth of the new group G' becomes one greater than the depth of G. For example, a group [B:E, depth 1] + [C:D] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range starts before and ends within, or starts within and ends after, the range of an existing group G, then the range of the existing group G becomes the union of the ranges, and the new group G' has depth one greater than the depth of G and range as the intersection of the ranges. For example, a group [B:D, depth 1] + [C:E] results in groups [B:E, depth 1] and [C:D, depth 2]. */
    AddDimensionGroupRequest: {
      /** @description The range over which to create a group. */
      range?: components['schemas']['DimensionRange']
    }
    /** @description The result of adding a group. */
    AddDimensionGroupResponse: {
      /** @description All groups of a dimension after adding a group to that dimension. */
      dimensionGroups?: components['schemas']['DimensionGroup'][]
    }
    /** @description Adds a filter view. */
    AddFilterViewRequest: {
      /** @description The filter to add. The filterViewId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a filter that already exists.) */
      filter?: components['schemas']['FilterView']
    }
    /** @description The result of adding a filter view. */
    AddFilterViewResponse: {
      /** @description The newly added filter view. */
      filter?: components['schemas']['FilterView']
    }
    /** @description Adds a named range to the spreadsheet. */
    AddNamedRangeRequest: {
      /** @description The named range to add. The namedRangeId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.) */
      namedRange?: components['schemas']['NamedRange']
    }
    /** @description The result of adding a named range. */
    AddNamedRangeResponse: {
      /** @description The named range to add. */
      namedRange?: components['schemas']['NamedRange']
    }
    /** @description Adds a new protected range. */
    AddProtectedRangeRequest: {
      /** @description The protected range to be added. The protectedRangeId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.) */
      protectedRange?: components['schemas']['ProtectedRange']
    }
    /** @description The result of adding a new protected range. */
    AddProtectedRangeResponse: {
      /** @description The newly added protected range. */
      protectedRange?: components['schemas']['ProtectedRange']
    }
    /** @description Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet. */
    AddSheetRequest: {
      /** @description The properties the new sheet should have. All properties are optional. The sheetId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a sheet that already exists.) */
      properties?: components['schemas']['SheetProperties']
    }
    /** @description The result of adding a sheet. */
    AddSheetResponse: {
      /** @description The properties of the newly added sheet. */
      properties?: components['schemas']['SheetProperties']
    }
    /** @description Adds a slicer to a sheet in the spreadsheet. */
    AddSlicerRequest: {
      /** @description The slicer that should be added to the spreadsheet, including the position where it should be placed. The slicerId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a slicer that already exists.) */
      slicer?: components['schemas']['Slicer']
    }
    /** @description The result of adding a slicer to a spreadsheet. */
    AddSlicerResponse: {
      /** @description The newly added slicer. */
      slicer?: components['schemas']['Slicer']
    }
    /** @description Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary. */
    AppendCellsRequest: {
      /**
       * Format: google-fieldmask
       * @description The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
      /** @description The data to append. */
      rows?: components['schemas']['RowData'][]
      /**
       * Format: int32
       * @description The sheet ID to append the data to.
       */
      sheetId?: number
    }
    /** @description Appends rows or columns to the end of a sheet. */
    AppendDimensionRequest: {
      /**
       * @description Whether rows or columns should be appended.
       * @enum {string}
       */
      dimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS'
      /**
       * Format: int32
       * @description The number of rows or columns to append.
       */
      length?: number
      /**
       * Format: int32
       * @description The sheet to append rows or columns to.
       */
      sheetId?: number
    }
    /** @description The response when updating a range of values in a spreadsheet. */
    AppendValuesResponse: {
      /** @description The spreadsheet the updates were applied to. */
      spreadsheetId?: string
      /** @description The range (in A1 notation) of the table that values are being appended to (before the values were appended). Empty if no table was found. */
      tableRange?: string
      /** @description Information about the updates that were applied. */
      updates?: components['schemas']['UpdateValuesResponse']
    }
    /** @description Fills in more data based on existing data. */
    AutoFillRequest: {
      /** @description The range to autofill. This will examine the range and detect the location that has data and automatically fill that data in to the rest of the range. */
      range?: components['schemas']['GridRange']
      /** @description The source and destination areas to autofill. This explicitly lists the source of the autofill and where to extend that data. */
      sourceAndDestination?: components['schemas']['SourceAndDestination']
      /** @description True if we should generate data with the "alternate" series. This differs based on the type and amount of source data. */
      useAlternateSeries?: boolean
    }
    /** @description Automatically resizes one or more dimensions based on the contents of the cells in that dimension. */
    AutoResizeDimensionsRequest: {
      /** @description The dimensions on a data source sheet to automatically resize. */
      dataSourceSheetDimensions?: components['schemas']['DataSourceSheetDimensionRange']
      /** @description The dimensions to automatically resize. */
      dimensions?: components['schemas']['DimensionRange']
    }
    /** @description A banded (alternating colors) range in a sheet. */
    BandedRange: {
      /**
       * Format: int32
       * @description The id of the banded range.
       */
      bandedRangeId?: number
      /** @description Properties for column bands. These properties are applied on a column- by-column basis throughout all the columns in the range. At least one of row_properties or column_properties must be specified. */
      columnProperties?: components['schemas']['BandingProperties']
      /** @description The range over which these properties are applied. */
      range?: components['schemas']['GridRange']
      /** @description Properties for row bands. These properties are applied on a row-by-row basis throughout all the rows in the range. At least one of row_properties or column_properties must be specified. */
      rowProperties?: components['schemas']['BandingProperties']
    }
    /** @description Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set. */
    BandingProperties: {
      /** @description The first color that is alternating. (Required) Deprecated: Use first_band_color_style. */
      firstBandColor?: components['schemas']['Color']
      /** @description The first color that is alternating. (Required) If first_band_color is also set, this field takes precedence. */
      firstBandColorStyle?: components['schemas']['ColorStyle']
      /** @description The color of the last row or column. If this field is not set, the last row or column is filled with either first_band_color or second_band_color, depending on the color of the previous row or column. Deprecated: Use footer_color_style. */
      footerColor?: components['schemas']['Color']
      /** @description The color of the last row or column. If this field is not set, the last row or column is filled with either first_band_color or second_band_color, depending on the color of the previous row or column. If footer_color is also set, this field takes precedence. */
      footerColorStyle?: components['schemas']['ColorStyle']
      /** @description The color of the first row or column. If this field is set, the first row or column is filled with this color and the colors alternate between first_band_color and second_band_color starting from the second row or column. Otherwise, the first row or column is filled with first_band_color and the colors proceed to alternate as they normally would. Deprecated: Use header_color_style. */
      headerColor?: components['schemas']['Color']
      /** @description The color of the first row or column. If this field is set, the first row or column is filled with this color and the colors alternate between first_band_color and second_band_color starting from the second row or column. Otherwise, the first row or column is filled with first_band_color and the colors proceed to alternate as they normally would. If header_color is also set, this field takes precedence. */
      headerColorStyle?: components['schemas']['ColorStyle']
      /** @description The second color that is alternating. (Required) Deprecated: Use second_band_color_style. */
      secondBandColor?: components['schemas']['Color']
      /** @description The second color that is alternating. (Required) If second_band_color is also set, this field takes precedence. */
      secondBandColorStyle?: components['schemas']['ColorStyle']
    }
    /** @description Formatting options for baseline value. */
    BaselineValueFormat: {
      /**
       * @description The comparison type of key value with baseline value.
       * @enum {string}
       */
      comparisonType?:
        | 'COMPARISON_TYPE_UNDEFINED'
        | 'ABSOLUTE_DIFFERENCE'
        | 'PERCENTAGE_DIFFERENCE'
      /** @description Description which is appended after the baseline value. This field is optional. */
      description?: string
      /** @description Color to be used, in case baseline value represents a negative change for key value. This field is optional. Deprecated: Use negative_color_style. */
      negativeColor?: components['schemas']['Color']
      /** @description Color to be used, in case baseline value represents a negative change for key value. This field is optional. If negative_color is also set, this field takes precedence. */
      negativeColorStyle?: components['schemas']['ColorStyle']
      /** @description Specifies the horizontal text positioning of baseline value. This field is optional. If not specified, default positioning is used. */
      position?: components['schemas']['TextPosition']
      /** @description Color to be used, in case baseline value represents a positive change for key value. This field is optional. Deprecated: Use positive_color_style. */
      positiveColor?: components['schemas']['Color']
      /** @description Color to be used, in case baseline value represents a positive change for key value. This field is optional. If positive_color is also set, this field takes precedence. */
      positiveColorStyle?: components['schemas']['ColorStyle']
      /** @description Text formatting options for baseline value. The link field is not supported. */
      textFormat?: components['schemas']['TextFormat']
    }
    /** @description An axis of the chart. A chart may not have more than one axis per axis position. */
    BasicChartAxis: {
      /** @description The format of the title. Only valid if the axis is not associated with the domain. The link field is not supported. */
      format?: components['schemas']['TextFormat']
      /**
       * @description The position of this axis.
       * @enum {string}
       */
      position?:
        | 'BASIC_CHART_AXIS_POSITION_UNSPECIFIED'
        | 'BOTTOM_AXIS'
        | 'LEFT_AXIS'
        | 'RIGHT_AXIS'
      /** @description The title of this axis. If set, this overrides any title inferred from headers of the data. */
      title?: string
      /** @description The axis title text position. */
      titleTextPosition?: components['schemas']['TextPosition']
      /** @description The view window options for this axis. */
      viewWindowOptions?: components['schemas']['ChartAxisViewWindowOptions']
    }
    /** @description The domain of a chart. For example, if charting stock prices over time, this would be the date. */
    BasicChartDomain: {
      /** @description The data of the domain. For example, if charting stock prices over time, this is the data representing the dates. */
      domain?: components['schemas']['ChartData']
      /** @description True to reverse the order of the domain values (horizontal axis). */
      reversed?: boolean
    }
    /** @description A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the "Open Price", "High Price", "Low Price" and "Close Price". */
    BasicChartSeries: {
      /** @description The color for elements (such as bars, lines, and points) associated with this series. If empty, a default color is used. Deprecated: Use color_style. */
      color?: components['schemas']['Color']
      /** @description The color for elements (such as bars, lines, and points) associated with this series. If empty, a default color is used. If color is also set, this field takes precedence. */
      colorStyle?: components['schemas']['ColorStyle']
      /** @description Information about the data labels for this series. */
      dataLabel?: components['schemas']['DataLabel']
      /** @description The line style of this series. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if the series chart type is AREA or LINE. */
      lineStyle?: components['schemas']['LineStyle']
      /** @description The style for points associated with this series. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if the series chart type is AREA, LINE, or SCATTER. If empty, a default point style is used. */
      pointStyle?: components['schemas']['PointStyle']
      /** @description The data being visualized in this chart series. */
      series?: components['schemas']['ChartData']
      /** @description Style override settings for series data points. */
      styleOverrides?: components['schemas']['BasicSeriesDataPointStyleOverride'][]
      /**
       * @description The minor axis that will specify the range of values for this series. For example, if charting stocks over time, the "Volume" series may want to be pinned to the right with the prices pinned to the left, because the scale of trading volume is different than the scale of prices. It is an error to specify an axis that isn't a valid minor axis for the chart's type.
       * @enum {string}
       */
      targetAxis?:
        | 'BASIC_CHART_AXIS_POSITION_UNSPECIFIED'
        | 'BOTTOM_AXIS'
        | 'LEFT_AXIS'
        | 'RIGHT_AXIS'
      /**
       * @description The type of this series. Valid only if the chartType is COMBO. Different types will change the way the series is visualized. Only LINE, AREA, and COLUMN are supported.
       * @enum {string}
       */
      type?:
        | 'BASIC_CHART_TYPE_UNSPECIFIED'
        | 'BAR'
        | 'LINE'
        | 'AREA'
        | 'COLUMN'
        | 'SCATTER'
        | 'COMBO'
        | 'STEPPED_AREA'
    }
    /** @description The specification for a basic chart. See BasicChartType for the list of charts this supports. */
    BasicChartSpec: {
      /** @description The axis on the chart. */
      axis?: components['schemas']['BasicChartAxis'][]
      /**
       * @description The type of the chart.
       * @enum {string}
       */
      chartType?:
        | 'BASIC_CHART_TYPE_UNSPECIFIED'
        | 'BAR'
        | 'LINE'
        | 'AREA'
        | 'COLUMN'
        | 'SCATTER'
        | 'COMBO'
        | 'STEPPED_AREA'
      /**
       * @description The behavior of tooltips and data highlighting when hovering on data and chart area.
       * @enum {string}
       */
      compareMode?:
        | 'BASIC_CHART_COMPARE_MODE_UNSPECIFIED'
        | 'DATUM'
        | 'CATEGORY'
      /** @description The domain of data this is charting. Only a single domain is supported. */
      domains?: components['schemas']['BasicChartDomain'][]
      /**
       * Format: int32
       * @description The number of rows or columns in the data that are "headers". If not set, Google Sheets will guess how many rows are headers based on the data. (Note that BasicChartAxis.title may override the axis title inferred from the header values.)
       */
      headerCount?: number
      /** @description If some values in a series are missing, gaps may appear in the chart (e.g, segments of lines in a line chart will be missing). To eliminate these gaps set this to true. Applies to Line, Area, and Combo charts. */
      interpolateNulls?: boolean
      /**
       * @description The position of the chart legend.
       * @enum {string}
       */
      legendPosition?:
        | 'BASIC_CHART_LEGEND_POSITION_UNSPECIFIED'
        | 'BOTTOM_LEGEND'
        | 'LEFT_LEGEND'
        | 'RIGHT_LEGEND'
        | 'TOP_LEGEND'
        | 'NO_LEGEND'
      /** @description Gets whether all lines should be rendered smooth or straight by default. Applies to Line charts. */
      lineSmoothing?: boolean
      /** @description The data this chart is visualizing. */
      series?: components['schemas']['BasicChartSeries'][]
      /**
       * @description The stacked type for charts that support vertical stacking. Applies to Area, Bar, Column, Combo, and Stepped Area charts.
       * @enum {string}
       */
      stackedType?:
        | 'BASIC_CHART_STACKED_TYPE_UNSPECIFIED'
        | 'NOT_STACKED'
        | 'STACKED'
        | 'PERCENT_STACKED'
      /** @description True to make the chart 3D. Applies to Bar and Column charts. */
      threeDimensional?: boolean
      /** @description Controls whether to display additional data labels on stacked charts which sum the total value of all stacked values at each value along the domain axis. These data labels can only be set when chart_type is one of AREA, BAR, COLUMN, COMBO or STEPPED_AREA and stacked_type is either STACKED or PERCENT_STACKED. In addition, for COMBO, this will only be supported if there is only one type of stackable series type or one type has more series than the others and each of the other types have no more than one series. For example, if a chart has two stacked bar series and one area series, the total data labels will be supported. If it has three bar series and two area series, total data labels are not allowed. Neither CUSTOM nor placement can be set on the total_data_label. */
      totalDataLabel?: components['schemas']['DataLabel']
    }
    /** @description The default filter associated with a sheet. */
    BasicFilter: {
      /** @description The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs. */
      criteria?: {
        [key: string]: components['schemas']['FilterCriteria']
      }
      /** @description The filter criteria per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. */
      filterSpecs?: components['schemas']['FilterSpec'][]
      /** @description The range the filter covers. */
      range?: components['schemas']['GridRange']
      /** @description The sort order per column. Later specifications are used when values are equal in the earlier specifications. */
      sortSpecs?: components['schemas']['SortSpec'][]
    }
    /** @description Style override settings for a single series data point. */
    BasicSeriesDataPointStyleOverride: {
      /** @description Color of the series data point. If empty, the series default is used. Deprecated: Use color_style. */
      color?: components['schemas']['Color']
      /** @description Color of the series data point. If empty, the series default is used. If color is also set, this field takes precedence. */
      colorStyle?: components['schemas']['ColorStyle']
      /**
       * Format: int32
       * @description Zero based index of the series data point.
       */
      index?: number
      /** @description Point style of the series data point. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if the series chart type is AREA, LINE, or SCATTER. If empty, the series default is used. */
      pointStyle?: components['schemas']['PointStyle']
    }
    /** @description The request for clearing more than one range selected by a DataFilter in a spreadsheet. */
    BatchClearValuesByDataFilterRequest: {
      /** @description The DataFilters used to determine which ranges to clear. */
      dataFilters?: components['schemas']['DataFilter'][]
    }
    /** @description The response when clearing a range of values selected with DataFilters in a spreadsheet. */
    BatchClearValuesByDataFilterResponse: {
      /** @description The ranges that were cleared, in [A1 notation](/sheets/api/guides/concepts#cell). If the requests are for an unbounded range or a ranger larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits. */
      clearedRanges?: string[]
      /** @description The spreadsheet the updates were applied to. */
      spreadsheetId?: string
    }
    /** @description The request for clearing more than one range of values in a spreadsheet. */
    BatchClearValuesRequest: {
      /** @description The ranges to clear, in [A1 notation or R1C1 notation](/sheets/api/guides/concepts#cell). */
      ranges?: string[]
    }
    /** @description The response when clearing a range of values in a spreadsheet. */
    BatchClearValuesResponse: {
      /** @description The ranges that were cleared, in A1 notation. If the requests are for an unbounded range or a ranger larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits. */
      clearedRanges?: string[]
      /** @description The spreadsheet the updates were applied to. */
      spreadsheetId?: string
    }
    /** @description The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters. */
    BatchGetValuesByDataFilterRequest: {
      /** @description The data filters used to match the ranges of values to retrieve. Ranges that match any of the specified data filters are included in the response. */
      dataFilters?: components['schemas']['DataFilter'][]
      /**
       * @description How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
       * @enum {string}
       */
      dateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING'
      /**
       * @description The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then a request that selects that range and sets `majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas a request that sets `majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
       * @enum {string}
       */
      majorDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS'
      /**
       * @description How values should be represented in the output. The default render option is FORMATTED_VALUE.
       * @enum {string}
       */
      valueRenderOption?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA'
    }
    /** @description The response when retrieving more than one range of values in a spreadsheet selected by DataFilters. */
    BatchGetValuesByDataFilterResponse: {
      /** @description The ID of the spreadsheet the data was retrieved from. */
      spreadsheetId?: string
      /** @description The requested values with the list of data filters that matched them. */
      valueRanges?: components['schemas']['MatchedValueRange'][]
    }
    /** @description The response when retrieving more than one range of values in a spreadsheet. */
    BatchGetValuesResponse: {
      /** @description The ID of the spreadsheet the data was retrieved from. */
      spreadsheetId?: string
      /** @description The requested values. The order of the ValueRanges is the same as the order of the requested ranges. */
      valueRanges?: components['schemas']['ValueRange'][]
    }
    /** @description The request for updating any aspect of a spreadsheet. */
    BatchUpdateSpreadsheetRequest: {
      /** @description Determines if the update response should include the spreadsheet resource. */
      includeSpreadsheetInResponse?: boolean
      /** @description A list of updates to apply to the spreadsheet. Requests will be applied in the order they are specified. If any request is not valid, no requests will be applied. */
      requests?: components['schemas']['Request'][]
      /** @description True if grid data should be returned. Meaningful only if include_spreadsheet_in_response is 'true'. This parameter is ignored if a field mask was set in the request. */
      responseIncludeGridData?: boolean
      /** @description Limits the ranges included in the response spreadsheet. Meaningful only if include_spreadsheet_in_response is 'true'. */
      responseRanges?: string[]
    }
    /** @description The reply for batch updating a spreadsheet. */
    BatchUpdateSpreadsheetResponse: {
      /** @description The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty. */
      replies?: components['schemas']['Response'][]
      /** @description The spreadsheet the updates were applied to. */
      spreadsheetId?: string
      /** @description The spreadsheet after updates were applied. This is only set if BatchUpdateSpreadsheetRequest.include_spreadsheet_in_response is `true`. */
      updatedSpreadsheet?: components['schemas']['Spreadsheet']
    }
    /** @description The request for updating more than one range of values in a spreadsheet. */
    BatchUpdateValuesByDataFilterRequest: {
      /** @description The new values to apply to the spreadsheet. If more than one range is matched by the specified DataFilter the specified values are applied to all of those ranges. */
      data?: components['schemas']['DataFilterValueRange'][]
      /** @description Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns). */
      includeValuesInResponse?: boolean
      /**
       * @description Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
       * @enum {string}
       */
      responseDateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING'
      /**
       * @description Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
       * @enum {string}
       */
      responseValueRenderOption?:
        | 'FORMATTED_VALUE'
        | 'UNFORMATTED_VALUE'
        | 'FORMULA'
      /**
       * @description How the input data should be interpreted.
       * @enum {string}
       */
      valueInputOption?:
        | 'INPUT_VALUE_OPTION_UNSPECIFIED'
        | 'RAW'
        | 'USER_ENTERED'
    }
    /** @description The response when updating a range of values in a spreadsheet. */
    BatchUpdateValuesByDataFilterResponse: {
      /** @description The response for each range updated. */
      responses?: components['schemas']['UpdateValuesByDataFilterResponse'][]
      /** @description The spreadsheet the updates were applied to. */
      spreadsheetId?: string
      /**
       * Format: int32
       * @description The total number of cells updated.
       */
      totalUpdatedCells?: number
      /**
       * Format: int32
       * @description The total number of columns where at least one cell in the column was updated.
       */
      totalUpdatedColumns?: number
      /**
       * Format: int32
       * @description The total number of rows where at least one cell in the row was updated.
       */
      totalUpdatedRows?: number
      /**
       * Format: int32
       * @description The total number of sheets where at least one cell in the sheet was updated.
       */
      totalUpdatedSheets?: number
    }
    /** @description The request for updating more than one range of values in a spreadsheet. */
    BatchUpdateValuesRequest: {
      /** @description The new values to apply to the spreadsheet. */
      data?: components['schemas']['ValueRange'][]
      /** @description Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns). */
      includeValuesInResponse?: boolean
      /**
       * @description Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
       * @enum {string}
       */
      responseDateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING'
      /**
       * @description Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
       * @enum {string}
       */
      responseValueRenderOption?:
        | 'FORMATTED_VALUE'
        | 'UNFORMATTED_VALUE'
        | 'FORMULA'
      /**
       * @description How the input data should be interpreted.
       * @enum {string}
       */
      valueInputOption?:
        | 'INPUT_VALUE_OPTION_UNSPECIFIED'
        | 'RAW'
        | 'USER_ENTERED'
    }
    /** @description The response when updating a range of values in a spreadsheet. */
    BatchUpdateValuesResponse: {
      /** @description One UpdateValuesResponse per requested range, in the same order as the requests appeared. */
      responses?: components['schemas']['UpdateValuesResponse'][]
      /** @description The spreadsheet the updates were applied to. */
      spreadsheetId?: string
      /**
       * Format: int32
       * @description The total number of cells updated.
       */
      totalUpdatedCells?: number
      /**
       * Format: int32
       * @description The total number of columns where at least one cell in the column was updated.
       */
      totalUpdatedColumns?: number
      /**
       * Format: int32
       * @description The total number of rows where at least one cell in the row was updated.
       */
      totalUpdatedRows?: number
      /**
       * Format: int32
       * @description The total number of sheets where at least one cell in the sheet was updated.
       */
      totalUpdatedSheets?: number
    }
    /** @description The specification of a BigQuery data source that's connected to a sheet. */
    BigQueryDataSourceSpec: {
      /** @description The ID of a BigQuery enabled GCP project with a billing account attached. For any queries executed against the data source, the project is charged. */
      projectId?: string
      /** @description A BigQueryQuerySpec. */
      querySpec?: components['schemas']['BigQueryQuerySpec']
      /** @description A BigQueryTableSpec. */
      tableSpec?: components['schemas']['BigQueryTableSpec']
    }
    /** @description Specifies a custom BigQuery query. */
    BigQueryQuerySpec: {
      /** @description The raw query string. */
      rawQuery?: string
    }
    /** @description Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) is allowed. */
    BigQueryTableSpec: {
      /** @description The BigQuery dataset id. */
      datasetId?: string
      /** @description The BigQuery table id. */
      tableId?: string
      /** @description The ID of a BigQuery project the table belongs to. If not specified, the project_id is assumed. */
      tableProjectId?: string
    }
    /** @description A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters. */
    BooleanCondition: {
      /**
       * @description The type of condition.
       * @enum {string}
       */
      type?:
        | 'CONDITION_TYPE_UNSPECIFIED'
        | 'NUMBER_GREATER'
        | 'NUMBER_GREATER_THAN_EQ'
        | 'NUMBER_LESS'
        | 'NUMBER_LESS_THAN_EQ'
        | 'NUMBER_EQ'
        | 'NUMBER_NOT_EQ'
        | 'NUMBER_BETWEEN'
        | 'NUMBER_NOT_BETWEEN'
        | 'TEXT_CONTAINS'
        | 'TEXT_NOT_CONTAINS'
        | 'TEXT_STARTS_WITH'
        | 'TEXT_ENDS_WITH'
        | 'TEXT_EQ'
        | 'TEXT_IS_EMAIL'
        | 'TEXT_IS_URL'
        | 'DATE_EQ'
        | 'DATE_BEFORE'
        | 'DATE_AFTER'
        | 'DATE_ON_OR_BEFORE'
        | 'DATE_ON_OR_AFTER'
        | 'DATE_BETWEEN'
        | 'DATE_NOT_BETWEEN'
        | 'DATE_IS_VALID'
        | 'ONE_OF_RANGE'
        | 'ONE_OF_LIST'
        | 'BLANK'
        | 'NOT_BLANK'
        | 'CUSTOM_FORMULA'
        | 'BOOLEAN'
        | 'TEXT_NOT_EQ'
        | 'DATE_NOT_EQ'
      /** @description The values of the condition. The number of supported values depends on the condition type. Some support zero values, others one or two values, and ConditionType.ONE_OF_LIST supports an arbitrary number of values. */
      values?: components['schemas']['ConditionValue'][]
    }
    /** @description A rule that may or may not match, depending on the condition. */
    BooleanRule: {
      /** @description The condition of the rule. If the condition evaluates to true, the format is applied. */
      condition?: components['schemas']['BooleanCondition']
      /** @description The format to apply. Conditional formatting can only apply a subset of formatting: bold, italic, strikethrough, foreground color & background color. */
      format?: components['schemas']['CellFormat']
    }
    /** @description A border along a cell. */
    Border: {
      /** @description The color of the border. Deprecated: Use color_style. */
      color?: components['schemas']['Color']
      /** @description The color of the border. If color is also set, this field takes precedence. */
      colorStyle?: components['schemas']['ColorStyle']
      /**
       * @description The style of the border.
       * @enum {string}
       */
      style?:
        | 'STYLE_UNSPECIFIED'
        | 'DOTTED'
        | 'DASHED'
        | 'SOLID'
        | 'SOLID_MEDIUM'
        | 'SOLID_THICK'
        | 'NONE'
        | 'DOUBLE'
      /**
       * Format: int32
       * @description The width of the border, in pixels. Deprecated; the width is determined by the "style" field.
       */
      width?: number
    }
    /** @description The borders of the cell. */
    Borders: {
      /** @description The bottom border of the cell. */
      bottom?: components['schemas']['Border']
      /** @description The left border of the cell. */
      left?: components['schemas']['Border']
      /** @description The right border of the cell. */
      right?: components['schemas']['Border']
      /** @description The top border of the cell. */
      top?: components['schemas']['Border']
    }
    /** @description A bubble chart. */
    BubbleChartSpec: {
      /** @description The bubble border color. Deprecated: Use bubble_border_color_style. */
      bubbleBorderColor?: components['schemas']['Color']
      /** @description The bubble border color. If bubble_border_color is also set, this field takes precedence. */
      bubbleBorderColorStyle?: components['schemas']['ColorStyle']
      /** @description The data containing the bubble labels. These do not need to be unique. */
      bubbleLabels?: components['schemas']['ChartData']
      /**
       * Format: int32
       * @description The max radius size of the bubbles, in pixels. If specified, the field must be a positive value.
       */
      bubbleMaxRadiusSize?: number
      /**
       * Format: int32
       * @description The minimum radius size of the bubbles, in pixels. If specific, the field must be a positive value.
       */
      bubbleMinRadiusSize?: number
      /**
       * Format: float
       * @description The opacity of the bubbles between 0 and 1.0. 0 is fully transparent and 1 is fully opaque.
       */
      bubbleOpacity?: number
      /** @description The data containing the bubble sizes. Bubble sizes are used to draw the bubbles at different sizes relative to each other. If specified, group_ids must also be specified. This field is optional. */
      bubbleSizes?: components['schemas']['ChartData']
      /** @description The format of the text inside the bubbles. Strikethrough, underline, and link are not supported. */
      bubbleTextStyle?: components['schemas']['TextFormat']
      /** @description The data containing the bubble x-values. These values locate the bubbles in the chart horizontally. */
      domain?: components['schemas']['ChartData']
      /** @description The data containing the bubble group IDs. All bubbles with the same group ID are drawn in the same color. If bubble_sizes is specified then this field must also be specified but may contain blank values. This field is optional. */
      groupIds?: components['schemas']['ChartData']
      /**
       * @description Where the legend of the chart should be drawn.
       * @enum {string}
       */
      legendPosition?:
        | 'BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED'
        | 'BOTTOM_LEGEND'
        | 'LEFT_LEGEND'
        | 'RIGHT_LEGEND'
        | 'TOP_LEGEND'
        | 'NO_LEGEND'
        | 'INSIDE_LEGEND'
      /** @description The data containing the bubble y-values. These values locate the bubbles in the chart vertically. */
      series?: components['schemas']['ChartData']
    }
    /** @description A candlestick chart. */
    CandlestickChartSpec: {
      /** @description The Candlestick chart data. Only one CandlestickData is supported. */
      data?: components['schemas']['CandlestickData'][]
      /** @description The domain data (horizontal axis) for the candlestick chart. String data will be treated as discrete labels, other data will be treated as continuous values. */
      domain?: components['schemas']['CandlestickDomain']
    }
    /** @description The Candlestick chart data, each containing the low, open, close, and high values for a series. */
    CandlestickData: {
      /** @description The range data (vertical axis) for the close/final value for each candle. This is the top of the candle body. If greater than the open value the candle will be filled. Otherwise the candle will be hollow. */
      closeSeries?: components['schemas']['CandlestickSeries']
      /** @description The range data (vertical axis) for the high/maximum value for each candle. This is the top of the candle's center line. */
      highSeries?: components['schemas']['CandlestickSeries']
      /** @description The range data (vertical axis) for the low/minimum value for each candle. This is the bottom of the candle's center line. */
      lowSeries?: components['schemas']['CandlestickSeries']
      /** @description The range data (vertical axis) for the open/initial value for each candle. This is the bottom of the candle body. If less than the close value the candle will be filled. Otherwise the candle will be hollow. */
      openSeries?: components['schemas']['CandlestickSeries']
    }
    /** @description The domain of a CandlestickChart. */
    CandlestickDomain: {
      /** @description The data of the CandlestickDomain. */
      data?: components['schemas']['ChartData']
      /** @description True to reverse the order of the domain values (horizontal axis). */
      reversed?: boolean
    }
    /** @description The series of a CandlestickData. */
    CandlestickSeries: {
      /** @description The data of the CandlestickSeries. */
      data?: components['schemas']['ChartData']
    }
    /** @description Data about a specific cell. */
    CellData: {
      /** @description Output only. Information about a data source formula on the cell. The field is set if user_entered_value is a formula referencing some DATA_SOURCE sheet, e.g. `=SUM(DataSheet!Column)`. */
      readonly dataSourceFormula?: components['schemas']['DataSourceFormula']
      /** @description A data source table anchored at this cell. The size of data source table itself is computed dynamically based on its configuration. Only the first cell of the data source table contains the data source table definition. The other cells will contain the display values of the data source table result in their effective_value fields. */
      dataSourceTable?: components['schemas']['DataSourceTable']
      /** @description A data validation rule on the cell, if any. When writing, the new data validation rule will overwrite any prior rule. */
      dataValidation?: components['schemas']['DataValidationRule']
      /** @description The effective format being used by the cell. This includes the results of applying any conditional formatting and, if the cell contains a formula, the computed number format. If the effective format is the default format, effective format will not be written. This field is read-only. */
      effectiveFormat?: components['schemas']['CellFormat']
      /** @description The effective value of the cell. For cells with formulas, this is the calculated value. For cells with literals, this is the same as the user_entered_value. This field is read-only. */
      effectiveValue?: components['schemas']['ExtendedValue']
      /** @description The formatted value of the cell. This is the value as it's shown to the user. This field is read-only. */
      formattedValue?: string
      /** @description A hyperlink this cell points to, if any. If the cell contains multiple hyperlinks, this field will be empty. This field is read-only. To set it, use a `=HYPERLINK` formula in the userEnteredValue.formulaValue field. A cell-level link can also be set from the userEnteredFormat.textFormat field. Alternatively, set a hyperlink in the textFormatRun.format.link field that spans the entire cell. */
      hyperlink?: string
      /** @description Any note on the cell. */
      note?: string
      /** @description A pivot table anchored at this cell. The size of pivot table itself is computed dynamically based on its data, grouping, filters, values, etc. Only the top-left cell of the pivot table contains the pivot table definition. The other cells will contain the calculated values of the results of the pivot in their effective_value fields. */
      pivotTable?: components['schemas']['PivotTable']
      /** @description Runs of rich text applied to subsections of the cell. Runs are only valid on user entered strings, not formulas, bools, or numbers. Properties of a run start at a specific index in the text and continue until the next run. Runs will inherit the properties of the cell unless explicitly changed. When writing, the new runs will overwrite any prior runs. When writing a new user_entered_value, previous runs are erased. */
      textFormatRuns?: components['schemas']['TextFormatRun'][]
      /** @description The format the user entered for the cell. When writing, the new format will be merged with the existing format. */
      userEnteredFormat?: components['schemas']['CellFormat']
      /** @description The value the user entered in the cell. e.g., `1234`, `'Hello'`, or `=NOW()` Note: Dates, Times and DateTimes are represented as doubles in serial number format. */
      userEnteredValue?: components['schemas']['ExtendedValue']
    }
    /** @description The format of a cell. */
    CellFormat: {
      /** @description The background color of the cell. Deprecated: Use background_color_style. */
      backgroundColor?: components['schemas']['Color']
      /** @description The background color of the cell. If background_color is also set, this field takes precedence. */
      backgroundColorStyle?: components['schemas']['ColorStyle']
      /** @description The borders of the cell. */
      borders?: components['schemas']['Borders']
      /**
       * @description The horizontal alignment of the value in the cell.
       * @enum {string}
       */
      horizontalAlignment?:
        | 'HORIZONTAL_ALIGN_UNSPECIFIED'
        | 'LEFT'
        | 'CENTER'
        | 'RIGHT'
      /**
       * @description If one exists, how a hyperlink should be displayed in the cell.
       * @enum {string}
       */
      hyperlinkDisplayType?:
        | 'HYPERLINK_DISPLAY_TYPE_UNSPECIFIED'
        | 'LINKED'
        | 'PLAIN_TEXT'
      /** @description A format describing how number values should be represented to the user. */
      numberFormat?: components['schemas']['NumberFormat']
      /** @description The padding of the cell. */
      padding?: components['schemas']['Padding']
      /**
       * @description The direction of the text in the cell.
       * @enum {string}
       */
      textDirection?:
        | 'TEXT_DIRECTION_UNSPECIFIED'
        | 'LEFT_TO_RIGHT'
        | 'RIGHT_TO_LEFT'
      /** @description The format of the text in the cell (unless overridden by a format run). Setting a cell-level link here clears the cell's existing links. Setting the link field in a TextFormatRun takes precedence over the cell-level link. */
      textFormat?: components['schemas']['TextFormat']
      /** @description The rotation applied to text in the cell. */
      textRotation?: components['schemas']['TextRotation']
      /**
       * @description The vertical alignment of the value in the cell.
       * @enum {string}
       */
      verticalAlignment?:
        | 'VERTICAL_ALIGN_UNSPECIFIED'
        | 'TOP'
        | 'MIDDLE'
        | 'BOTTOM'
      /**
       * @description The wrap strategy for the value in the cell.
       * @enum {string}
       */
      wrapStrategy?:
        | 'WRAP_STRATEGY_UNSPECIFIED'
        | 'OVERFLOW_CELL'
        | 'LEGACY_WRAP'
        | 'CLIP'
        | 'WRAP'
    }
    /** @description The options that define a "view window" for a chart (such as the visible values in an axis). */
    ChartAxisViewWindowOptions: {
      /**
       * Format: double
       * @description The maximum numeric value to be shown in this view window. If unset, will automatically determine a maximum value that looks good for the data.
       */
      viewWindowMax?: number
      /**
       * Format: double
       * @description The minimum numeric value to be shown in this view window. If unset, will automatically determine a minimum value that looks good for the data.
       */
      viewWindowMin?: number
      /**
       * @description The view window's mode.
       * @enum {string}
       */
      viewWindowMode?:
        | 'DEFAULT_VIEW_WINDOW_MODE'
        | 'VIEW_WINDOW_MODE_UNSUPPORTED'
        | 'EXPLICIT'
        | 'PRETTY'
    }
    /** @description Custom number formatting options for chart attributes. */
    ChartCustomNumberFormatOptions: {
      /** @description Custom prefix to be prepended to the chart attribute. This field is optional. */
      prefix?: string
      /** @description Custom suffix to be appended to the chart attribute. This field is optional. */
      suffix?: string
    }
    /** @description The data included in a domain or series. */
    ChartData: {
      /**
       * @description The aggregation type for the series of a data source chart. Only supported for data source charts.
       * @enum {string}
       */
      aggregateType?:
        | 'CHART_AGGREGATE_TYPE_UNSPECIFIED'
        | 'AVERAGE'
        | 'COUNT'
        | 'MAX'
        | 'MEDIAN'
        | 'MIN'
        | 'SUM'
      /** @description The reference to the data source column that the data reads from. */
      columnReference?: components['schemas']['DataSourceColumnReference']
      /** @description The rule to group the data by if the ChartData backs the domain of a data source chart. Only supported for data source charts. */
      groupRule?: components['schemas']['ChartGroupRule']
      /** @description The source ranges of the data. */
      sourceRange?: components['schemas']['ChartSourceRange']
    }
    /** @description Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. */
    ChartDateTimeRule: {
      /**
       * @description The type of date-time grouping to apply.
       * @enum {string}
       */
      type?:
        | 'CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED'
        | 'SECOND'
        | 'MINUTE'
        | 'HOUR'
        | 'HOUR_MINUTE'
        | 'HOUR_MINUTE_AMPM'
        | 'DAY_OF_WEEK'
        | 'DAY_OF_YEAR'
        | 'DAY_OF_MONTH'
        | 'DAY_MONTH'
        | 'MONTH'
        | 'QUARTER'
        | 'YEAR'
        | 'YEAR_MONTH'
        | 'YEAR_QUARTER'
        | 'YEAR_MONTH_DAY'
    }
    /** @description An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type. */
    ChartGroupRule: {
      /** @description A ChartDateTimeRule. */
      dateTimeRule?: components['schemas']['ChartDateTimeRule']
      /** @description A ChartHistogramRule */
      histogramRule?: components['schemas']['ChartHistogramRule']
    }
    /** @description Allows you to organize numeric values in a source data column into buckets of constant size. */
    ChartHistogramRule: {
      /**
       * Format: double
       * @description The size of the buckets that are created. Must be positive.
       */
      intervalSize?: number
      /**
       * Format: double
       * @description The maximum value at which items are placed into buckets. Values greater than the maximum are grouped into a single bucket. If omitted, it is determined by the maximum item value.
       */
      maxValue?: number
      /**
       * Format: double
       * @description The minimum value at which items are placed into buckets. Values that are less than the minimum are grouped into a single bucket. If omitted, it is determined by the minimum item value.
       */
      minValue?: number
    }
    /** @description Source ranges for a chart. */
    ChartSourceRange: {
      /** @description The ranges of data for a series or domain. Exactly one dimension must have a length of 1, and all sources in the list must have the same dimension with length 1. The domain (if it exists) & all series must have the same number of source ranges. If using more than one source range, then the source range at a given offset must be in order and contiguous across the domain and series. For example, these are valid configurations: domain sources: A1:A5 series1 sources: B1:B5 series2 sources: D6:D10 domain sources: A1:A5, C10:C12 series1 sources: B1:B5, D10:D12 series2 sources: C1:C5, E10:E12 */
      sources?: components['schemas']['GridRange'][]
    }
    /** @description The specifications of a chart. */
    ChartSpec: {
      /** @description The alternative text that describes the chart. This is often used for accessibility. */
      altText?: string
      /** @description The background color of the entire chart. Not applicable to Org charts. Deprecated: Use background_color_style. */
      backgroundColor?: components['schemas']['Color']
      /** @description The background color of the entire chart. Not applicable to Org charts. If background_color is also set, this field takes precedence. */
      backgroundColorStyle?: components['schemas']['ColorStyle']
      /** @description A basic chart specification, can be one of many kinds of charts. See BasicChartType for the list of all charts this supports. */
      basicChart?: components['schemas']['BasicChartSpec']
      /** @description A bubble chart specification. */
      bubbleChart?: components['schemas']['BubbleChartSpec']
      /** @description A candlestick chart specification. */
      candlestickChart?: components['schemas']['CandlestickChartSpec']
      /** @description If present, the field contains data source chart specific properties. */
      dataSourceChartProperties?: components['schemas']['DataSourceChartProperties']
      /** @description The filters applied to the source data of the chart. Only supported for data source charts. */
      filterSpecs?: components['schemas']['FilterSpec'][]
      /** @description The name of the font to use by default for all chart text (e.g. title, axis labels, legend). If a font is specified for a specific part of the chart it will override this font name. */
      fontName?: string
      /**
       * @description Determines how the charts will use hidden rows or columns.
       * @enum {string}
       */
      hiddenDimensionStrategy?:
        | 'CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED'
        | 'SKIP_HIDDEN_ROWS_AND_COLUMNS'
        | 'SKIP_HIDDEN_ROWS'
        | 'SKIP_HIDDEN_COLUMNS'
        | 'SHOW_ALL'
      /** @description A histogram chart specification. */
      histogramChart?: components['schemas']['HistogramChartSpec']
      /** @description True to make a chart fill the entire space in which it's rendered with minimum padding. False to use the default padding. (Not applicable to Geo and Org charts.) */
      maximized?: boolean
      /** @description An org chart specification. */
      orgChart?: components['schemas']['OrgChartSpec']
      /** @description A pie chart specification. */
      pieChart?: components['schemas']['PieChartSpec']
      /** @description A scorecard chart specification. */
      scorecardChart?: components['schemas']['ScorecardChartSpec']
      /** @description The order to sort the chart data by. Only a single sort spec is supported. Only supported for data source charts. */
      sortSpecs?: components['schemas']['SortSpec'][]
      /** @description The subtitle of the chart. */
      subtitle?: string
      /** @description The subtitle text format. Strikethrough, underline, and link are not supported. */
      subtitleTextFormat?: components['schemas']['TextFormat']
      /** @description The subtitle text position. This field is optional. */
      subtitleTextPosition?: components['schemas']['TextPosition']
      /** @description The title of the chart. */
      title?: string
      /** @description The title text format. Strikethrough, underline, and link are not supported. */
      titleTextFormat?: components['schemas']['TextFormat']
      /** @description The title text position. This field is optional. */
      titleTextPosition?: components['schemas']['TextPosition']
      /** @description A treemap chart specification. */
      treemapChart?: components['schemas']['TreemapChartSpec']
      /** @description A waterfall chart specification. */
      waterfallChart?: components['schemas']['WaterfallChartSpec']
    }
    /** @description Clears the basic filter, if any exists on the sheet. */
    ClearBasicFilterRequest: {
      /**
       * Format: int32
       * @description The sheet ID on which the basic filter should be cleared.
       */
      sheetId?: number
    }
    /** @description The request for clearing a range of values in a spreadsheet. */
    ClearValuesRequest: Record<string, never>
    /** @description The response when clearing a range of values in a spreadsheet. */
    ClearValuesResponse: {
      /** @description The range (in A1 notation) that was cleared. (If the request was for an unbounded range or a ranger larger than the bounds of the sheet, this will be the actual range that was cleared, bounded to the sheet's limits.) */
      clearedRange?: string
      /** @description The spreadsheet the updates were applied to. */
      spreadsheetId?: string
    }
    /** @description Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
    Color: {
      /**
       * Format: float
       * @description The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
       */
      alpha?: number
      /**
       * Format: float
       * @description The amount of blue in the color as a value in the interval [0, 1].
       */
      blue?: number
      /**
       * Format: float
       * @description The amount of green in the color as a value in the interval [0, 1].
       */
      green?: number
      /**
       * Format: float
       * @description The amount of red in the color as a value in the interval [0, 1].
       */
      red?: number
    }
    /** @description A color value. */
    ColorStyle: {
      /** @description RGB color. The [`alpha`](/sheets/api/reference/rest/v4/spreadsheets/other#Color.FIELDS.alpha) value in the [`Color`](/sheets/api/reference/rest/v4/spreadsheets/other#color) object isn't generally supported. */
      rgbColor?: components['schemas']['Color']
      /**
       * @description Theme color.
       * @enum {string}
       */
      themeColor?:
        | 'THEME_COLOR_TYPE_UNSPECIFIED'
        | 'TEXT'
        | 'BACKGROUND'
        | 'ACCENT1'
        | 'ACCENT2'
        | 'ACCENT3'
        | 'ACCENT4'
        | 'ACCENT5'
        | 'ACCENT6'
        | 'LINK'
    }
    /** @description The value of the condition. */
    ConditionValue: {
      /**
       * @description A relative date (based on the current date). Valid only if the type is DATE_BEFORE, DATE_AFTER, DATE_ON_OR_BEFORE or DATE_ON_OR_AFTER. Relative dates are not supported in data validation. They are supported only in conditional formatting and conditional filters.
       * @enum {string}
       */
      relativeDate?:
        | 'RELATIVE_DATE_UNSPECIFIED'
        | 'PAST_YEAR'
        | 'PAST_MONTH'
        | 'PAST_WEEK'
        | 'YESTERDAY'
        | 'TODAY'
        | 'TOMORROW'
      /** @description A value the condition is based on. The value is parsed as if the user typed into a cell. Formulas are supported (and must begin with an `=` or a '+'). */
      userEnteredValue?: string
    }
    /** @description A rule describing a conditional format. */
    ConditionalFormatRule: {
      /** @description The formatting is either "on" or "off" according to the rule. */
      booleanRule?: components['schemas']['BooleanRule']
      /** @description The formatting will vary based on the gradients in the rule. */
      gradientRule?: components['schemas']['GradientRule']
      /** @description The ranges that are formatted if the condition is true. All the ranges must be on the same grid. */
      ranges?: components['schemas']['GridRange'][]
    }
    /** @description Copies data from the source to the destination. */
    CopyPasteRequest: {
      /** @description The location to paste to. If the range covers a span that's a multiple of the source's height or width, then the data will be repeated to fill in the destination range. If the range is smaller than the source range, the entire source data will still be copied (beyond the end of the destination range). */
      destination?: components['schemas']['GridRange']
      /**
       * @description How that data should be oriented when pasting.
       * @enum {string}
       */
      pasteOrientation?: 'NORMAL' | 'TRANSPOSE'
      /**
       * @description What kind of data to paste.
       * @enum {string}
       */
      pasteType?:
        | 'PASTE_NORMAL'
        | 'PASTE_VALUES'
        | 'PASTE_FORMAT'
        | 'PASTE_NO_BORDERS'
        | 'PASTE_FORMULA'
        | 'PASTE_DATA_VALIDATION'
        | 'PASTE_CONDITIONAL_FORMATTING'
      /** @description The source range to copy. */
      source?: components['schemas']['GridRange']
    }
    /** @description The request to copy a sheet across spreadsheets. */
    CopySheetToAnotherSpreadsheetRequest: {
      /** @description The ID of the spreadsheet to copy the sheet to. */
      destinationSpreadsheetId?: string
    }
    /** @description A request to create developer metadata. */
    CreateDeveloperMetadataRequest: {
      /** @description The developer metadata to create. */
      developerMetadata?: components['schemas']['DeveloperMetadata']
    }
    /** @description The response from creating developer metadata. */
    CreateDeveloperMetadataResponse: {
      /** @description The developer metadata that was created. */
      developerMetadata?: components['schemas']['DeveloperMetadata']
    }
    /** @description Moves data from the source to the destination. */
    CutPasteRequest: {
      /** @description The top-left coordinate where the data should be pasted. */
      destination?: components['schemas']['GridCoordinate']
      /**
       * @description What kind of data to paste. All the source data will be cut, regardless of what is pasted.
       * @enum {string}
       */
      pasteType?:
        | 'PASTE_NORMAL'
        | 'PASTE_VALUES'
        | 'PASTE_FORMAT'
        | 'PASTE_NO_BORDERS'
        | 'PASTE_FORMULA'
        | 'PASTE_DATA_VALIDATION'
        | 'PASTE_CONDITIONAL_FORMATTING'
      /** @description The source data to cut. */
      source?: components['schemas']['GridRange']
    }
    /** @description The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects. */
    DataExecutionStatus: {
      /**
       * @description The error code.
       * @enum {string}
       */
      errorCode?:
        | 'DATA_EXECUTION_ERROR_CODE_UNSPECIFIED'
        | 'TIMED_OUT'
        | 'TOO_MANY_ROWS'
        | 'TOO_MANY_COLUMNS'
        | 'TOO_MANY_CELLS'
        | 'ENGINE'
        | 'PARAMETER_INVALID'
        | 'UNSUPPORTED_DATA_TYPE'
        | 'DUPLICATE_COLUMN_NAMES'
        | 'INTERRUPTED'
        | 'CONCURRENT_QUERY'
        | 'OTHER'
        | 'TOO_MANY_CHARS_PER_CELL'
        | 'DATA_NOT_FOUND'
        | 'PERMISSION_DENIED'
        | 'MISSING_COLUMN_ALIAS'
        | 'OBJECT_NOT_FOUND'
        | 'OBJECT_IN_ERROR_STATE'
        | 'OBJECT_SPEC_INVALID'
      /** @description The error message, which may be empty. */
      errorMessage?: string
      /**
       * Format: google-datetime
       * @description Gets the time the data last successfully refreshed.
       */
      lastRefreshTime?: string
      /**
       * @description The state of the data execution.
       * @enum {string}
       */
      state?:
        | 'DATA_EXECUTION_STATE_UNSPECIFIED'
        | 'NOT_STARTED'
        | 'RUNNING'
        | 'SUCCEEDED'
        | 'FAILED'
    }
    /** @description Filter that describes what data should be selected or returned from a request. */
    DataFilter: {
      /** @description Selects data that matches the specified A1 range. */
      a1Range?: string
      /** @description Selects data associated with the developer metadata matching the criteria described by this DeveloperMetadataLookup. */
      developerMetadataLookup?: components['schemas']['DeveloperMetadataLookup']
      /** @description Selects data that matches the range described by the GridRange. */
      gridRange?: components['schemas']['GridRange']
    }
    /** @description A range of values whose location is specified by a DataFilter. */
    DataFilterValueRange: {
      /** @description The data filter describing the location of the values in the spreadsheet. */
      dataFilter?: components['schemas']['DataFilter']
      /**
       * @description The major dimension of the values.
       * @enum {string}
       */
      majorDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS'
      /** @description The data to be written. If the provided values exceed any of the ranges matched by the data filter then the request fails. If the provided values are less than the matched ranges only the specified values are written, existing values in the matched ranges remain unaffected. */
      values?: unknown[][]
    }
    /** @description Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph. */
    DataLabel: {
      /** @description Data to use for custom labels. Only used if type is set to CUSTOM. This data must be the same length as the series or other element this data label is applied to. In addition, if the series is split into multiple source ranges, this source data must come from the next column in the source data. For example, if the series is B2:B4,E6:E8 then this data must come from C2:C4,F6:F8. */
      customLabelData?: components['schemas']['ChartData']
      /**
       * @description The placement of the data label relative to the labeled data.
       * @enum {string}
       */
      placement?:
        | 'DATA_LABEL_PLACEMENT_UNSPECIFIED'
        | 'CENTER'
        | 'LEFT'
        | 'RIGHT'
        | 'ABOVE'
        | 'BELOW'
        | 'INSIDE_END'
        | 'INSIDE_BASE'
        | 'OUTSIDE_END'
      /** @description The text format used for the data label. The link field is not supported. */
      textFormat?: components['schemas']['TextFormat']
      /**
       * @description The type of the data label.
       * @enum {string}
       */
      type?: 'DATA_LABEL_TYPE_UNSPECIFIED' | 'NONE' | 'DATA' | 'CUSTOM'
    }
    /** @description Information about an external data source in the spreadsheet. */
    DataSource: {
      /** @description All calculated columns in the data source. */
      calculatedColumns?: components['schemas']['DataSourceColumn'][]
      /** @description The spreadsheet-scoped unique ID that identifies the data source. Example: 1080547365. */
      dataSourceId?: string
      /**
       * Format: int32
       * @description The ID of the Sheet connected with the data source. The field cannot be changed once set. When creating a data source, an associated DATA_SOURCE sheet is also created, if the field is not specified, the ID of the created sheet will be randomly generated.
       */
      sheetId?: number
      /** @description The DataSourceSpec for the data source connected with this spreadsheet. */
      spec?: components['schemas']['DataSourceSpec']
    }
    /** @description Properties of a data source chart. */
    DataSourceChartProperties: {
      /** @description Output only. The data execution status. */
      readonly dataExecutionStatus?: components['schemas']['DataExecutionStatus']
      /** @description ID of the data source that the chart is associated with. */
      dataSourceId?: string
    }
    /** @description A column in a data source. */
    DataSourceColumn: {
      /** @description The formula of the calculated column. */
      formula?: string
      /** @description The column reference. */
      reference?: components['schemas']['DataSourceColumnReference']
    }
    /** @description An unique identifier that references a data source column. */
    DataSourceColumnReference: {
      /** @description The display name of the column. It should be unique within a data source. */
      name?: string
    }
    /** @description A data source formula. */
    DataSourceFormula: {
      /** @description Output only. The data execution status. */
      readonly dataExecutionStatus?: components['schemas']['DataExecutionStatus']
      /** @description The ID of the data source the formula is associated with. */
      dataSourceId?: string
    }
    /** @description Reference to a data source object. */
    DataSourceObjectReference: {
      /**
       * Format: int32
       * @description References to a data source chart.
       */
      chartId?: number
      /** @description References to a cell containing DataSourceFormula. */
      dataSourceFormulaCell?: components['schemas']['GridCoordinate']
      /** @description References to a data source PivotTable anchored at the cell. */
      dataSourcePivotTableAnchorCell?: components['schemas']['GridCoordinate']
      /** @description References to a DataSourceTable anchored at the cell. */
      dataSourceTableAnchorCell?: components['schemas']['GridCoordinate']
      /** @description References to a DATA_SOURCE sheet. */
      sheetId?: string
    }
    /** @description A list of references to data source objects. */
    DataSourceObjectReferences: {
      /** @description The references. */
      references?: components['schemas']['DataSourceObjectReference'][]
    }
    /** @description A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query. */
    DataSourceParameter: {
      /** @description Named parameter. Must be a legitimate identifier for the DataSource that supports it. For example, [BigQuery identifier](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#identifiers). */
      name?: string
      /** @description ID of a NamedRange. Its size must be 1x1. */
      namedRangeId?: string
      /** @description A range that contains the value of the parameter. Its size must be 1x1. */
      range?: components['schemas']['GridRange']
    }
    /** @description A schedule for data to refresh every day in a given time interval. */
    DataSourceRefreshDailySchedule: {
      /** @description The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time interval size defaults to that in the Sheets editor. */
      startTime?: components['schemas']['TimeOfDay']
    }
    /** @description A monthly schedule for data to refresh on specific days in the month in a given time interval. */
    DataSourceRefreshMonthlySchedule: {
      /** @description Days of the month to refresh. Only 1-28 are supported, mapping to the 1st to the 28th day. At lesat one day must be specified. */
      daysOfMonth?: number[]
      /** @description The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time interval size defaults to that in the Sheets editor. */
      startTime?: components['schemas']['TimeOfDay']
    }
    /** @description Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8am , the refresh will take place between 8am and 12pm every day. */
    DataSourceRefreshSchedule: {
      /** @description Daily refresh schedule. */
      dailySchedule?: components['schemas']['DataSourceRefreshDailySchedule']
      /** @description True if the refresh schedule is enabled, or false otherwise. */
      enabled?: boolean
      /** @description Monthly refresh schedule. */
      monthlySchedule?: components['schemas']['DataSourceRefreshMonthlySchedule']
      /** @description Output only. The time interval of the next run. */
      readonly nextRun?: components['schemas']['Interval']
      /**
       * @description The scope of the refresh. Must be ALL_DATA_SOURCES.
       * @enum {string}
       */
      refreshScope?:
        | 'DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED'
        | 'ALL_DATA_SOURCES'
      /** @description Weekly refresh schedule. */
      weeklySchedule?: components['schemas']['DataSourceRefreshWeeklySchedule']
    }
    /** @description A weekly schedule for data to refresh on specific days in a given time interval. */
    DataSourceRefreshWeeklySchedule: {
      /** @description Days of the week to refresh. At least one day must be specified. */
      daysOfWeek?: (
        | 'DAY_OF_WEEK_UNSPECIFIED'
        | 'MONDAY'
        | 'TUESDAY'
        | 'WEDNESDAY'
        | 'THURSDAY'
        | 'FRIDAY'
        | 'SATURDAY'
        | 'SUNDAY'
      )[]
      /** @description The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time interval size defaults to that in the Sheets editor. */
      startTime?: components['schemas']['TimeOfDay']
    }
    /** @description A range along a single dimension on a DATA_SOURCE sheet. */
    DataSourceSheetDimensionRange: {
      /** @description The columns on the data source sheet. */
      columnReferences?: components['schemas']['DataSourceColumnReference'][]
      /**
       * Format: int32
       * @description The ID of the data source sheet the range is on.
       */
      sheetId?: number
    }
    /** @description Additional properties of a DATA_SOURCE sheet. */
    DataSourceSheetProperties: {
      /** @description The columns displayed on the sheet, corresponding to the values in RowData. */
      columns?: components['schemas']['DataSourceColumn'][]
      /** @description The data execution status. */
      dataExecutionStatus?: components['schemas']['DataExecutionStatus']
      /** @description ID of the DataSource the sheet is connected to. */
      dataSourceId?: string
    }
    /** @description This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source. */
    DataSourceSpec: {
      /** @description A BigQueryDataSourceSpec. */
      bigQuery?: components['schemas']['BigQueryDataSourceSpec']
      /** @description The parameters of the data source, used when querying the data source. */
      parameters?: components['schemas']['DataSourceParameter'][]
    }
    /** @description A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor. */
    DataSourceTable: {
      /**
       * @description The type to select columns for the data source table. Defaults to SELECTED.
       * @enum {string}
       */
      columnSelectionType?:
        | 'DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED'
        | 'SELECTED'
        | 'SYNC_ALL'
      /** @description Columns selected for the data source table. The column_selection_type must be SELECTED. */
      columns?: components['schemas']['DataSourceColumnReference'][]
      /** @description Output only. The data execution status. */
      readonly dataExecutionStatus?: components['schemas']['DataExecutionStatus']
      /** @description The ID of the data source the data source table is associated with. */
      dataSourceId?: string
      /** @description Filter specifications in the data source table. */
      filterSpecs?: components['schemas']['FilterSpec'][]
      /**
       * Format: int32
       * @description The limit of rows to return. If not set, a default limit is applied. Please refer to the Sheets editor for the default and max limit.
       */
      rowLimit?: number
      /** @description Sort specifications in the data source table. The result of the data source table is sorted based on the sort specifications in order. */
      sortSpecs?: components['schemas']['SortSpec'][]
    }
    /** @description A data validation rule. */
    DataValidationRule: {
      /** @description The condition that data in the cell must match. */
      condition?: components['schemas']['BooleanCondition']
      /** @description A message to show the user when adding data to the cell. */
      inputMessage?: string
      /** @description True if the UI should be customized based on the kind of condition. If true, "List" conditions will show a dropdown. */
      showCustomUi?: boolean
      /** @description True if invalid data should be rejected. */
      strict?: boolean
    }
    /** @description Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ | Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 | ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ | 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+ */
    DateTimeRule: {
      /**
       * @description The type of date-time grouping to apply.
       * @enum {string}
       */
      type?:
        | 'DATE_TIME_RULE_TYPE_UNSPECIFIED'
        | 'SECOND'
        | 'MINUTE'
        | 'HOUR'
        | 'HOUR_MINUTE'
        | 'HOUR_MINUTE_AMPM'
        | 'DAY_OF_WEEK'
        | 'DAY_OF_YEAR'
        | 'DAY_OF_MONTH'
        | 'DAY_MONTH'
        | 'MONTH'
        | 'QUARTER'
        | 'YEAR'
        | 'YEAR_MONTH'
        | 'YEAR_QUARTER'
        | 'YEAR_MONTH_DAY'
    }
    /** @description Removes the banded range with the given ID from the spreadsheet. */
    DeleteBandingRequest: {
      /**
       * Format: int32
       * @description The ID of the banded range to delete.
       */
      bandedRangeId?: number
    }
    /** @description Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented. */
    DeleteConditionalFormatRuleRequest: {
      /**
       * Format: int32
       * @description The zero-based index of the rule to be deleted.
       */
      index?: number
      /**
       * Format: int32
       * @description The sheet the rule is being deleted from.
       */
      sheetId?: number
    }
    /** @description The result of deleting a conditional format rule. */
    DeleteConditionalFormatRuleResponse: {
      /** @description The rule that was deleted. */
      rule?: components['schemas']['ConditionalFormatRule']
    }
    /** @description Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects. */
    DeleteDataSourceRequest: {
      /** @description The ID of the data source to delete. */
      dataSourceId?: string
    }
    /** @description A request to delete developer metadata. */
    DeleteDeveloperMetadataRequest: {
      /** @description The data filter describing the criteria used to select which developer metadata entry to delete. */
      dataFilter?: components['schemas']['DataFilter']
    }
    /** @description The response from deleting developer metadata. */
    DeleteDeveloperMetadataResponse: {
      /** @description The metadata that was deleted. */
      deletedDeveloperMetadata?: components['schemas']['DeveloperMetadata'][]
    }
    /** @description Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C. */
    DeleteDimensionGroupRequest: {
      /** @description The range of the group to be deleted. */
      range?: components['schemas']['DimensionRange']
    }
    /** @description The result of deleting a group. */
    DeleteDimensionGroupResponse: {
      /** @description All groups of a dimension after deleting a group from that dimension. */
      dimensionGroups?: components['schemas']['DimensionGroup'][]
    }
    /** @description Deletes the dimensions from the sheet. */
    DeleteDimensionRequest: {
      /** @description The dimensions to delete from the sheet. */
      range?: components['schemas']['DimensionRange']
    }
    /** @description Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This request also removes duplicate rows hidden from view (for example, due to a filter). When removing duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range. Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each other in the range. */
    DeleteDuplicatesRequest: {
      /** @description The columns in the range to analyze for duplicate values. If no columns are selected then all columns are analyzed for duplicates. */
      comparisonColumns?: components['schemas']['DimensionRange'][]
      /** @description The range to remove duplicates rows from. */
      range?: components['schemas']['GridRange']
    }
    /** @description The result of removing duplicates in a range. */
    DeleteDuplicatesResponse: {
      /**
       * Format: int32
       * @description The number of duplicate rows removed.
       */
      duplicatesRemovedCount?: number
    }
    /** @description Deletes the embedded object with the given ID. */
    DeleteEmbeddedObjectRequest: {
      /**
       * Format: int32
       * @description The ID of the embedded object to delete.
       */
      objectId?: number
    }
    /** @description Deletes a particular filter view. */
    DeleteFilterViewRequest: {
      /**
       * Format: int32
       * @description The ID of the filter to delete.
       */
      filterId?: number
    }
    /** @description Removes the named range with the given ID from the spreadsheet. */
    DeleteNamedRangeRequest: {
      /** @description The ID of the named range to delete. */
      namedRangeId?: string
    }
    /** @description Deletes the protected range with the given ID. */
    DeleteProtectedRangeRequest: {
      /**
       * Format: int32
       * @description The ID of the protected range to delete.
       */
      protectedRangeId?: number
    }
    /** @description Deletes a range of cells, shifting other cells into the deleted area. */
    DeleteRangeRequest: {
      /** @description The range of cells to delete. */
      range?: components['schemas']['GridRange']
      /**
       * @description The dimension from which deleted cells will be replaced with. If ROWS, existing cells will be shifted upward to replace the deleted cells. If COLUMNS, existing cells will be shifted left to replace the deleted cells.
       * @enum {string}
       */
      shiftDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS'
    }
    /** @description Deletes the requested sheet. */
    DeleteSheetRequest: {
      /**
       * Format: int32
       * @description The ID of the sheet to delete. If the sheet is of DATA_SOURCE type, the associated DataSource is also deleted.
       */
      sheetId?: number
    }
    /** @description Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too. */
    DeveloperMetadata: {
      /** @description The location where the metadata is associated. */
      location?: components['schemas']['DeveloperMetadataLocation']
      /**
       * Format: int32
       * @description The spreadsheet-scoped unique ID that identifies the metadata. IDs may be specified when metadata is created, otherwise one will be randomly generated and assigned. Must be positive.
       */
      metadataId?: number
      /** @description The metadata key. There may be multiple metadata in a spreadsheet with the same key. Developer metadata must always have a key specified. */
      metadataKey?: string
      /** @description Data associated with the metadata's key. */
      metadataValue?: string
      /**
       * @description The metadata visibility. Developer metadata must always have a visibility specified.
       * @enum {string}
       */
      visibility?:
        | 'DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED'
        | 'DOCUMENT'
        | 'PROJECT'
    }
    /** @description A location where metadata may be associated in a spreadsheet. */
    DeveloperMetadataLocation: {
      /** @description Represents the row or column when metadata is associated with a dimension. The specified DimensionRange must represent a single row or column; it cannot be unbounded or span multiple rows or columns. */
      dimensionRange?: components['schemas']['DimensionRange']
      /**
       * @description The type of location this object represents. This field is read-only.
       * @enum {string}
       */
      locationType?:
        | 'DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED'
        | 'ROW'
        | 'COLUMN'
        | 'SHEET'
        | 'SPREADSHEET'
      /**
       * Format: int32
       * @description The ID of the sheet when metadata is associated with an entire sheet.
       */
      sheetId?: number
      /** @description True when metadata is associated with an entire spreadsheet. */
      spreadsheet?: boolean
    }
    /** @description Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified. */
    DeveloperMetadataLookup: {
      /**
       * @description Determines how this lookup matches the location. If this field is specified as EXACT, only developer metadata associated on the exact location specified is matched. If this field is specified to INTERSECTING, developer metadata associated on intersecting locations is also matched. If left unspecified, this field assumes a default value of INTERSECTING. If this field is specified, a metadataLocation must also be specified.
       * @enum {string}
       */
      locationMatchingStrategy?:
        | 'DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED'
        | 'EXACT_LOCATION'
        | 'INTERSECTING_LOCATION'
      /**
       * @description Limits the selected developer metadata to those entries which are associated with locations of the specified type. For example, when this field is specified as ROW this lookup only considers developer metadata associated on rows. If the field is left unspecified, all location types are considered. This field cannot be specified as SPREADSHEET when the locationMatchingStrategy is specified as INTERSECTING or when the metadataLocation is specified as a non-spreadsheet location: spreadsheet metadata cannot intersect any other developer metadata location. This field also must be left unspecified when the locationMatchingStrategy is specified as EXACT.
       * @enum {string}
       */
      locationType?:
        | 'DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED'
        | 'ROW'
        | 'COLUMN'
        | 'SHEET'
        | 'SPREADSHEET'
      /**
       * Format: int32
       * @description Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_id.
       */
      metadataId?: number
      /** @description Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_key. */
      metadataKey?: string
      /** @description Limits the selected developer metadata to those entries associated with the specified location. This field either matches exact locations or all intersecting locations according the specified locationMatchingStrategy. */
      metadataLocation?: components['schemas']['DeveloperMetadataLocation']
      /** @description Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_value. */
      metadataValue?: string
      /**
       * @description Limits the selected developer metadata to that which has a matching DeveloperMetadata.visibility. If left unspecified, all developer metadata visibile to the requesting project is considered.
       * @enum {string}
       */
      visibility?:
        | 'DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED'
        | 'DOCUMENT'
        | 'PROJECT'
    }
    /** @description A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet. */
    DimensionGroup: {
      /** @description This field is true if this group is collapsed. A collapsed group remains collapsed if an overlapping group at a shallower depth is expanded. A true value does not imply that all dimensions within the group are hidden, since a dimension's visibility can change independently from this group property. However, when this property is updated, all dimensions within it are set to hidden if this field is true, or set to visible if this field is false. */
      collapsed?: boolean
      /**
       * Format: int32
       * @description The depth of the group, representing how many groups have a range that wholly contains the range of this group.
       */
      depth?: number
      /** @description The range over which this group exists. */
      range?: components['schemas']['DimensionRange']
    }
    /** @description Properties about a dimension. */
    DimensionProperties: {
      /** @description Output only. If set, this is a column in a data source sheet. */
      readonly dataSourceColumnReference?: components['schemas']['DataSourceColumnReference']
      /** @description The developer metadata associated with a single row or column. */
      developerMetadata?: components['schemas']['DeveloperMetadata'][]
      /** @description True if this dimension is being filtered. This field is read-only. */
      hiddenByFilter?: boolean
      /** @description True if this dimension is explicitly hidden. */
      hiddenByUser?: boolean
      /**
       * Format: int32
       * @description The height (if a row) or width (if a column) of the dimension in pixels.
       */
      pixelSize?: number
    }
    /** @description A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side. */
    DimensionRange: {
      /**
       * @description The dimension of the span.
       * @enum {string}
       */
      dimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS'
      /**
       * Format: int32
       * @description The end (exclusive) of the span, or not set if unbounded.
       */
      endIndex?: number
      /**
       * Format: int32
       * @description The sheet this span is on.
       */
      sheetId?: number
      /**
       * Format: int32
       * @description The start (inclusive) of the span, or not set if unbounded.
       */
      startIndex?: number
    }
    /** @description Duplicates a particular filter view. */
    DuplicateFilterViewRequest: {
      /**
       * Format: int32
       * @description The ID of the filter being duplicated.
       */
      filterId?: number
    }
    /** @description The result of a filter view being duplicated. */
    DuplicateFilterViewResponse: {
      /** @description The newly created filter. */
      filter?: components['schemas']['FilterView']
    }
    /** @description Duplicates the contents of a sheet. */
    DuplicateSheetRequest: {
      /**
       * Format: int32
       * @description The zero-based index where the new sheet should be inserted. The index of all sheets after this are incremented.
       */
      insertSheetIndex?: number
      /**
       * Format: int32
       * @description If set, the ID of the new sheet. If not set, an ID is chosen. If set, the ID must not conflict with any existing sheet ID. If set, it must be non-negative.
       */
      newSheetId?: number
      /** @description The name of the new sheet. If empty, a new name is chosen for you. */
      newSheetName?: string
      /**
       * Format: int32
       * @description The sheet to duplicate. If the source sheet is of DATA_SOURCE type, its backing DataSource is also duplicated and associated with the new copy of the sheet. No data execution is triggered, the grid data of this sheet is also copied over but only available after the batch request completes.
       */
      sourceSheetId?: number
    }
    /** @description The result of duplicating a sheet. */
    DuplicateSheetResponse: {
      /** @description The properties of the duplicate sheet. */
      properties?: components['schemas']['SheetProperties']
    }
    /** @description The editors of a protected range. */
    Editors: {
      /** @description True if anyone in the document's domain has edit access to the protected range. Domain protection is only supported on documents within a domain. */
      domainUsersCanEdit?: boolean
      /** @description The email addresses of groups with edit access to the protected range. */
      groups?: string[]
      /** @description The email addresses of users with edit access to the protected range. */
      users?: string[]
    }
    /** @description A chart embedded in a sheet. */
    EmbeddedChart: {
      /** @description The border of the chart. */
      border?: components['schemas']['EmbeddedObjectBorder']
      /**
       * Format: int32
       * @description The ID of the chart.
       */
      chartId?: number
      /** @description The position of the chart. */
      position?: components['schemas']['EmbeddedObjectPosition']
      /** @description The specification of the chart. */
      spec?: components['schemas']['ChartSpec']
    }
    /** @description A border along an embedded object. */
    EmbeddedObjectBorder: {
      /** @description The color of the border. Deprecated: Use color_style. */
      color?: components['schemas']['Color']
      /** @description The color of the border. If color is also set, this field takes precedence. */
      colorStyle?: components['schemas']['ColorStyle']
    }
    /** @description The position of an embedded object such as a chart. */
    EmbeddedObjectPosition: {
      /** @description If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing. */
      newSheet?: boolean
      /** @description The position at which the object is overlaid on top of a grid. */
      overlayPosition?: components['schemas']['OverlayPosition']
      /**
       * Format: int32
       * @description The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative.
       */
      sheetId?: number
    }
    /** @description An error in a cell. */
    ErrorValue: {
      /** @description A message with more information about the error (in the spreadsheet's locale). */
      message?: string
      /**
       * @description The type of error.
       * @enum {string}
       */
      type?:
        | 'ERROR_TYPE_UNSPECIFIED'
        | 'ERROR'
        | 'NULL_VALUE'
        | 'DIVIDE_BY_ZERO'
        | 'VALUE'
        | 'REF'
        | 'NAME'
        | 'NUM'
        | 'N_A'
        | 'LOADING'
    }
    /** @description The kinds of value that a cell in a spreadsheet can have. */
    ExtendedValue: {
      /** @description Represents a boolean value. */
      boolValue?: boolean
      /** @description Represents an error. This field is read-only. */
      errorValue?: components['schemas']['ErrorValue']
      /** @description Represents a formula. */
      formulaValue?: string
      /**
       * Format: double
       * @description Represents a double value. Note: Dates, Times and DateTimes are represented as doubles in SERIAL_NUMBER format.
       */
      numberValue?: number
      /** @description Represents a string value. Leading single quotes are not included. For example, if the user typed `'123` into the UI, this would be represented as a `stringValue` of `"123"`. */
      stringValue?: string
    }
    /** @description Criteria for showing/hiding rows in a filter or filter view. */
    FilterCriteria: {
      /** @description A condition that must be true for values to be shown. (This does not override hidden_values -- if a value is listed there, it will still be hidden.) */
      condition?: components['schemas']['BooleanCondition']
      /** @description Values that should be hidden. */
      hiddenValues?: string[]
      /** @description The background fill color to filter by; only cells with this fill color are shown. Mutually exclusive with visible_foreground_color. Deprecated: Use visible_background_color_style. */
      visibleBackgroundColor?: components['schemas']['Color']
      /** @description The background fill color to filter by; only cells with this fill color are shown. This field is mutually exclusive with visible_foreground_color, and must be set to an RGB-type color. If visible_background_color is also set, this field takes precedence. */
      visibleBackgroundColorStyle?: components['schemas']['ColorStyle']
      /** @description The foreground color to filter by; only cells with this foreground color are shown. Mutually exclusive with visible_background_color. Deprecated: Use visible_foreground_color_style. */
      visibleForegroundColor?: components['schemas']['Color']
      /** @description The foreground color to filter by; only cells with this foreground color are shown. This field is mutually exclusive with visible_background_color, and must be set to an RGB-type color. If visible_foreground_color is also set, this field takes precedence. */
      visibleForegroundColorStyle?: components['schemas']['ColorStyle']
    }
    /** @description The filter criteria associated with a specific column. */
    FilterSpec: {
      /**
       * Format: int32
       * @description The column index.
       */
      columnIndex?: number
      /** @description Reference to a data source column. */
      dataSourceColumnReference?: components['schemas']['DataSourceColumnReference']
      /** @description The criteria for the column. */
      filterCriteria?: components['schemas']['FilterCriteria']
    }
    /** @description A filter view. */
    FilterView: {
      /** @description The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs. */
      criteria?: {
        [key: string]: components['schemas']['FilterCriteria']
      }
      /** @description The filter criteria for showing/hiding values per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. */
      filterSpecs?: components['schemas']['FilterSpec'][]
      /**
       * Format: int32
       * @description The ID of the filter view.
       */
      filterViewId?: number
      /** @description The named range this filter view is backed by, if any. When writing, only one of range or named_range_id may be set. */
      namedRangeId?: string
      /** @description The range this filter view covers. When writing, only one of range or named_range_id may be set. */
      range?: components['schemas']['GridRange']
      /** @description The sort order per column. Later specifications are used when values are equal in the earlier specifications. */
      sortSpecs?: components['schemas']['SortSpec'][]
      /** @description The name of the filter view. */
      title?: string
    }
    /** @description Finds and replaces data in cells over a range, sheet, or all sheets. */
    FindReplaceRequest: {
      /** @description True to find/replace over all sheets. */
      allSheets?: boolean
      /** @description The value to search. */
      find?: string
      /** @description True if the search should include cells with formulas. False to skip cells with formulas. */
      includeFormulas?: boolean
      /** @description True if the search is case sensitive. */
      matchCase?: boolean
      /** @description True if the find value should match the entire cell. */
      matchEntireCell?: boolean
      /** @description The range to find/replace over. */
      range?: components['schemas']['GridRange']
      /** @description The value to use as the replacement. */
      replacement?: string
      /** @description True if the find value is a regex. The regular expression and replacement should follow Java regex rules at https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html. The replacement string is allowed to refer to capturing groups. For example, if one cell has the contents `"Google Sheets"` and another has `"Google Docs"`, then searching for `"o.* (.*)"` with a replacement of `"$1 Rocks"` would change the contents of the cells to `"GSheets Rocks"` and `"GDocs Rocks"` respectively. */
      searchByRegex?: boolean
      /**
       * Format: int32
       * @description The sheet to find/replace over.
       */
      sheetId?: number
    }
    /** @description The result of the find/replace. */
    FindReplaceResponse: {
      /**
       * Format: int32
       * @description The number of formula cells changed.
       */
      formulasChanged?: number
      /**
       * Format: int32
       * @description The number of occurrences (possibly multiple within a cell) changed. For example, if replacing `"e"` with `"o"` in `"Google Sheets"`, this would be `"3"` because `"Google Sheets"` -> `"Googlo Shoots"`.
       */
      occurrencesChanged?: number
      /**
       * Format: int32
       * @description The number of rows changed.
       */
      rowsChanged?: number
      /**
       * Format: int32
       * @description The number of sheets changed.
       */
      sheetsChanged?: number
      /**
       * Format: int32
       * @description The number of non-formula cells changed.
       */
      valuesChanged?: number
    }
    /** @description The request for retrieving a Spreadsheet. */
    GetSpreadsheetByDataFilterRequest: {
      /** @description The DataFilters used to select which ranges to retrieve from the spreadsheet. */
      dataFilters?: components['schemas']['DataFilter'][]
      /** @description True if grid data should be returned. This parameter is ignored if a field mask was set in the request. */
      includeGridData?: boolean
    }
    /** @description A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points. */
    GradientRule: {
      /** @description The final interpolation point. */
      maxpoint?: components['schemas']['InterpolationPoint']
      /** @description An optional midway interpolation point. */
      midpoint?: components['schemas']['InterpolationPoint']
      /** @description The starting interpolation point. */
      minpoint?: components['schemas']['InterpolationPoint']
    }
    /** @description A coordinate in a sheet. All indexes are zero-based. */
    GridCoordinate: {
      /**
       * Format: int32
       * @description The column index of the coordinate.
       */
      columnIndex?: number
      /**
       * Format: int32
       * @description The row index of the coordinate.
       */
      rowIndex?: number
      /**
       * Format: int32
       * @description The sheet this coordinate is on.
       */
      sheetId?: number
    }
    /** @description Data in the grid, as well as metadata about the dimensions. */
    GridData: {
      /** @description Metadata about the requested columns in the grid, starting with the column in start_column. */
      columnMetadata?: components['schemas']['DimensionProperties'][]
      /** @description The data in the grid, one entry per row, starting with the row in startRow. The values in RowData will correspond to columns starting at start_column. */
      rowData?: components['schemas']['RowData'][]
      /** @description Metadata about the requested rows in the grid, starting with the row in start_row. */
      rowMetadata?: components['schemas']['DimensionProperties'][]
      /**
       * Format: int32
       * @description The first column this GridData refers to, zero-based.
       */
      startColumn?: number
      /**
       * Format: int32
       * @description The first row this GridData refers to, zero-based.
       */
      startRow?: number
    }
    /** @description Properties of a grid. */
    GridProperties: {
      /**
       * Format: int32
       * @description The number of columns in the grid.
       */
      columnCount?: number
      /** @description True if the column grouping control toggle is shown after the group. */
      columnGroupControlAfter?: boolean
      /**
       * Format: int32
       * @description The number of columns that are frozen in the grid.
       */
      frozenColumnCount?: number
      /**
       * Format: int32
       * @description The number of rows that are frozen in the grid.
       */
      frozenRowCount?: number
      /** @description True if the grid isn't showing gridlines in the UI. */
      hideGridlines?: boolean
      /**
       * Format: int32
       * @description The number of rows in the grid.
       */
      rowCount?: number
      /** @description True if the row grouping control toggle is shown after the group. */
      rowGroupControlAfter?: boolean
    }
    /** @description A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
    GridRange: {
      /**
       * Format: int32
       * @description The end column (exclusive) of the range, or not set if unbounded.
       */
      endColumnIndex?: number
      /**
       * Format: int32
       * @description The end row (exclusive) of the range, or not set if unbounded.
       */
      endRowIndex?: number
      /**
       * Format: int32
       * @description The sheet this range is on.
       */
      sheetId?: number
      /**
       * Format: int32
       * @description The start column (inclusive) of the range, or not set if unbounded.
       */
      startColumnIndex?: number
      /**
       * Format: int32
       * @description The start row (inclusive) of the range, or not set if unbounded.
       */
      startRowIndex?: number
    }
    /** @description A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly. */
    HistogramChartSpec: {
      /**
       * Format: double
       * @description By default the bucket size (the range of values stacked in a single column) is chosen automatically, but it may be overridden here. E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc. Cannot be negative. This field is optional.
       */
      bucketSize?: number
      /**
       * @description The position of the chart legend.
       * @enum {string}
       */
      legendPosition?:
        | 'HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED'
        | 'BOTTOM_LEGEND'
        | 'LEFT_LEGEND'
        | 'RIGHT_LEGEND'
        | 'TOP_LEGEND'
        | 'NO_LEGEND'
        | 'INSIDE_LEGEND'
      /**
       * Format: double
       * @description The outlier percentile is used to ensure that outliers do not adversely affect the calculation of bucket sizes. For example, setting an outlier percentile of 0.05 indicates that the top and bottom 5% of values when calculating buckets. The values are still included in the chart, they will be added to the first or last buckets instead of their own buckets. Must be between 0.0 and 0.5.
       */
      outlierPercentile?: number
      /** @description The series for a histogram may be either a single series of values to be bucketed or multiple series, each of the same length, containing the name of the series followed by the values to be bucketed for that series. */
      series?: components['schemas']['HistogramSeries'][]
      /** @description Whether horizontal divider lines should be displayed between items in each column. */
      showItemDividers?: boolean
    }
    /** @description Allows you to organize the numeric values in a source data column into buckets of a constant size. All values from HistogramRule.start to HistogramRule.end are placed into groups of size HistogramRule.interval. In addition, all values below HistogramRule.start are placed in one group, and all values above HistogramRule.end are placed in another. Only HistogramRule.interval is required, though if HistogramRule.start and HistogramRule.end are both provided, HistogramRule.start must be less than HistogramRule.end. For example, a pivot table showing average purchase amount by age that has 50+ rows: +-----+-------------------+ | Age | AVERAGE of Amount | +-----+-------------------+ | 16 | $27.13 | | 17 | $5.24 | | 18 | $20.15 | ... +-----+-------------------+ could be turned into a pivot table that looks like the one below by applying a histogram group rule with a HistogramRule.start of 25, an HistogramRule.interval of 20, and an HistogramRule.end of 65. +-------------+-------------------+ | Grouped Age | AVERAGE of Amount | +-------------+-------------------+ | < 25 | $19.34 | | 25-45 | $31.43 | | 45-65 | $35.87 | | > 65 | $27.55 | +-------------+-------------------+ | Grand Total | $29.12 | +-------------+-------------------+ */
    HistogramRule: {
      /**
       * Format: double
       * @description The maximum value at which items are placed into buckets of constant size. Values above end are lumped into a single bucket. This field is optional.
       */
      end?: number
      /**
       * Format: double
       * @description The size of the buckets that are created. Must be positive.
       */
      interval?: number
      /**
       * Format: double
       * @description The minimum value at which items are placed into buckets of constant size. Values below start are lumped into a single bucket. This field is optional.
       */
      start?: number
    }
    /** @description A histogram series containing the series color and data. */
    HistogramSeries: {
      /** @description The color of the column representing this series in each bucket. This field is optional. Deprecated: Use bar_color_style. */
      barColor?: components['schemas']['Color']
      /** @description The color of the column representing this series in each bucket. This field is optional. If bar_color is also set, this field takes precedence. */
      barColorStyle?: components['schemas']['ColorStyle']
      /** @description The data for this histogram series. */
      data?: components['schemas']['ChartData']
    }
    /** @description Inserts rows or columns in a sheet at a particular index. */
    InsertDimensionRequest: {
      /** @description Whether dimension properties should be extended from the dimensions before or after the newly inserted dimensions. True to inherit from the dimensions before (in which case the start index must be greater than 0), and false to inherit from the dimensions after. For example, if row index 0 has red background and row index 1 has a green background, then inserting 2 rows at index 1 can inherit either the green or red background. If `inheritFromBefore` is true, the two new rows will be red (because the row before the insertion point was red), whereas if `inheritFromBefore` is false, the two new rows will be green (because the row after the insertion point was green). */
      inheritFromBefore?: boolean
      /** @description The dimensions to insert. Both the start and end indexes must be bounded. */
      range?: components['schemas']['DimensionRange']
    }
    /** @description Inserts cells into a range, shifting the existing cells over or down. */
    InsertRangeRequest: {
      /** @description The range to insert new cells into. */
      range?: components['schemas']['GridRange']
      /**
       * @description The dimension which will be shifted when inserting cells. If ROWS, existing cells will be shifted down. If COLUMNS, existing cells will be shifted right.
       * @enum {string}
       */
      shiftDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS'
    }
    /** @description A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen. */
    InterpolationPoint: {
      /** @description The color this interpolation point should use. Deprecated: Use color_style. */
      color?: components['schemas']['Color']
      /** @description The color this interpolation point should use. If color is also set, this field takes precedence. */
      colorStyle?: components['schemas']['ColorStyle']
      /**
       * @description How the value should be interpreted.
       * @enum {string}
       */
      type?:
        | 'INTERPOLATION_POINT_TYPE_UNSPECIFIED'
        | 'MIN'
        | 'MAX'
        | 'NUMBER'
        | 'PERCENT'
        | 'PERCENTILE'
      /** @description The value this interpolation point uses. May be a formula. Unused if type is MIN or MAX. */
      value?: string
    }
    /** @description Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
    Interval: {
      /**
       * Format: google-datetime
       * @description Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
       */
      endTime?: string
      /**
       * Format: google-datetime
       * @description Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
       */
      startTime?: string
    }
    /** @description Settings to control how circular dependencies are resolved with iterative calculation. */
    IterativeCalculationSettings: {
      /**
       * Format: double
       * @description When iterative calculation is enabled and successive results differ by less than this threshold value, the calculation rounds stop.
       */
      convergenceThreshold?: number
      /**
       * Format: int32
       * @description When iterative calculation is enabled, the maximum number of calculation rounds to perform.
       */
      maxIterations?: number
    }
    /** @description Formatting options for key value. */
    KeyValueFormat: {
      /** @description Specifies the horizontal text positioning of key value. This field is optional. If not specified, default positioning is used. */
      position?: components['schemas']['TextPosition']
      /** @description Text formatting options for key value. The link field is not supported. */
      textFormat?: components['schemas']['TextFormat']
    }
    /** @description Properties that describe the style of a line. */
    LineStyle: {
      /**
       * @description The dash type of the line.
       * @enum {string}
       */
      type?:
        | 'LINE_DASH_TYPE_UNSPECIFIED'
        | 'INVISIBLE'
        | 'CUSTOM'
        | 'SOLID'
        | 'DOTTED'
        | 'MEDIUM_DASHED'
        | 'MEDIUM_DASHED_DOTTED'
        | 'LONG_DASHED'
        | 'LONG_DASHED_DOTTED'
      /**
       * Format: int32
       * @description The thickness of the line, in px.
       */
      width?: number
    }
    /** @description An external or local reference. */
    Link: {
      /** @description The link identifier. */
      uri?: string
    }
    /** @description Allows you to manually organize the values in a source data column into buckets with names of your choosing. For example, a pivot table that aggregates population by state: +-------+-------------------+ | State | SUM of Population | +-------+-------------------+ | AK | 0.7 | | AL | 4.8 | | AR | 2.9 | ... +-------+-------------------+ could be turned into a pivot table that aggregates population by time zone by providing a list of groups (for example, groupName = 'Central', items = ['AL', 'AR', 'IA', ...]) to a manual group rule. Note that a similar effect could be achieved by adding a time zone column to the source data and adjusting the pivot table. +-----------+-------------------+ | Time Zone | SUM of Population | +-----------+-------------------+ | Central | 106.3 | | Eastern | 151.9 | | Mountain | 17.4 | ... +-----------+-------------------+ */
    ManualRule: {
      /** @description The list of group names and the corresponding items from the source data that map to each group name. */
      groups?: components['schemas']['ManualRuleGroup'][]
    }
    /** @description A group name and a list of items from the source data that should be placed in the group with this name. */
    ManualRuleGroup: {
      /** @description The group name, which must be a string. Each group in a given ManualRule must have a unique group name. */
      groupName?: components['schemas']['ExtendedValue']
      /** @description The items in the source data that should be placed into this group. Each item may be a string, number, or boolean. Items may appear in at most one group within a given ManualRule. Items that do not appear in any group will appear on their own. */
      items?: components['schemas']['ExtendedValue'][]
    }
    /** @description A developer metadata entry and the data filters specified in the original request that matched it. */
    MatchedDeveloperMetadata: {
      /** @description All filters matching the returned developer metadata. */
      dataFilters?: components['schemas']['DataFilter'][]
      /** @description The developer metadata matching the specified filters. */
      developerMetadata?: components['schemas']['DeveloperMetadata']
    }
    /** @description A value range that was matched by one or more data filers. */
    MatchedValueRange: {
      /** @description The DataFilters from the request that matched the range of values. */
      dataFilters?: components['schemas']['DataFilter'][]
      /** @description The values matched by the DataFilter. */
      valueRange?: components['schemas']['ValueRange']
    }
    /** @description Merges all cells in the range. */
    MergeCellsRequest: {
      /**
       * @description How the cells should be merged.
       * @enum {string}
       */
      mergeType?: 'MERGE_ALL' | 'MERGE_COLUMNS' | 'MERGE_ROWS'
      /** @description The range of cells to merge. */
      range?: components['schemas']['GridRange']
    }
    /** @description Moves one or more rows or columns. */
    MoveDimensionRequest: {
      /**
       * Format: int32
       * @description The zero-based start index of where to move the source data to, based on the coordinates *before* the source data is removed from the grid. Existing data will be shifted down or right (depending on the dimension) to make room for the moved dimensions. The source dimensions are removed from the grid, so the the data may end up in a different index than specified. For example, given `A1..A5` of `0, 1, 2, 3, 4` and wanting to move `"1"` and `"2"` to between `"3"` and `"4"`, the source would be `ROWS [1..3)`,and the destination index would be `"4"` (the zero-based index of row 5). The end result would be `A1..A5` of `0, 3, 1, 2, 4`.
       */
      destinationIndex?: number
      /** @description The source dimensions to move. */
      source?: components['schemas']['DimensionRange']
    }
    /** @description A named range. */
    NamedRange: {
      /** @description The name of the named range. */
      name?: string
      /** @description The ID of the named range. */
      namedRangeId?: string
      /** @description The range this represents. */
      range?: components['schemas']['GridRange']
    }
    /** @description The number format of a cell. */
    NumberFormat: {
      /** @description Pattern string used for formatting. If not set, a default pattern based on the user's locale will be used if necessary for the given type. See the [Date and Number Formats guide](/sheets/api/guides/formats) for more information about the supported patterns. */
      pattern?: string
      /**
       * @description The type of the number format. When writing, this field must be set.
       * @enum {string}
       */
      type?:
        | 'NUMBER_FORMAT_TYPE_UNSPECIFIED'
        | 'TEXT'
        | 'NUMBER'
        | 'PERCENT'
        | 'CURRENCY'
        | 'DATE'
        | 'TIME'
        | 'DATE_TIME'
        | 'SCIENTIFIC'
    }
    /** @description An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales". */
    OrgChartSpec: {
      /** @description The data containing the labels for all the nodes in the chart. Labels must be unique. */
      labels?: components['schemas']['ChartData']
      /** @description The color of the org chart nodes. Deprecated: Use node_color_style. */
      nodeColor?: components['schemas']['Color']
      /** @description The color of the org chart nodes. If node_color is also set, this field takes precedence. */
      nodeColorStyle?: components['schemas']['ColorStyle']
      /**
       * @description The size of the org chart nodes.
       * @enum {string}
       */
      nodeSize?:
        | 'ORG_CHART_LABEL_SIZE_UNSPECIFIED'
        | 'SMALL'
        | 'MEDIUM'
        | 'LARGE'
      /** @description The data containing the label of the parent for the corresponding node. A blank value indicates that the node has no parent and is a top-level node. This field is optional. */
      parentLabels?: components['schemas']['ChartData']
      /** @description The color of the selected org chart nodes. Deprecated: Use selected_node_color_style. */
      selectedNodeColor?: components['schemas']['Color']
      /** @description The color of the selected org chart nodes. If selected_node_color is also set, this field takes precedence. */
      selectedNodeColorStyle?: components['schemas']['ColorStyle']
      /** @description The data containing the tooltip for the corresponding node. A blank value results in no tooltip being displayed for the node. This field is optional. */
      tooltips?: components['schemas']['ChartData']
    }
    /** @description The location an object is overlaid on top of a grid. */
    OverlayPosition: {
      /** @description The cell the object is anchored to. */
      anchorCell?: components['schemas']['GridCoordinate']
      /**
       * Format: int32
       * @description The height of the object, in pixels. Defaults to 371.
       */
      heightPixels?: number
      /**
       * Format: int32
       * @description The horizontal offset, in pixels, that the object is offset from the anchor cell.
       */
      offsetXPixels?: number
      /**
       * Format: int32
       * @description The vertical offset, in pixels, that the object is offset from the anchor cell.
       */
      offsetYPixels?: number
      /**
       * Format: int32
       * @description The width of the object, in pixels. Defaults to 600.
       */
      widthPixels?: number
    }
    /** @description The amount of padding around the cell, in pixels. When updating padding, every field must be specified. */
    Padding: {
      /**
       * Format: int32
       * @description The bottom padding of the cell.
       */
      bottom?: number
      /**
       * Format: int32
       * @description The left padding of the cell.
       */
      left?: number
      /**
       * Format: int32
       * @description The right padding of the cell.
       */
      right?: number
      /**
       * Format: int32
       * @description The top padding of the cell.
       */
      top?: number
    }
    /** @description Inserts data into the spreadsheet starting at the specified coordinate. */
    PasteDataRequest: {
      /** @description The coordinate at which the data should start being inserted. */
      coordinate?: components['schemas']['GridCoordinate']
      /** @description The data to insert. */
      data?: string
      /** @description The delimiter in the data. */
      delimiter?: string
      /** @description True if the data is HTML. */
      html?: boolean
      /**
       * @description How the data should be pasted.
       * @enum {string}
       */
      type?:
        | 'PASTE_NORMAL'
        | 'PASTE_VALUES'
        | 'PASTE_FORMAT'
        | 'PASTE_NO_BORDERS'
        | 'PASTE_FORMULA'
        | 'PASTE_DATA_VALIDATION'
        | 'PASTE_CONDITIONAL_FORMATTING'
    }
    /** @description A pie chart. */
    PieChartSpec: {
      /** @description The data that covers the domain of the pie chart. */
      domain?: components['schemas']['ChartData']
      /**
       * @description Where the legend of the pie chart should be drawn.
       * @enum {string}
       */
      legendPosition?:
        | 'PIE_CHART_LEGEND_POSITION_UNSPECIFIED'
        | 'BOTTOM_LEGEND'
        | 'LEFT_LEGEND'
        | 'RIGHT_LEGEND'
        | 'TOP_LEGEND'
        | 'NO_LEGEND'
        | 'LABELED_LEGEND'
      /**
       * Format: double
       * @description The size of the hole in the pie chart.
       */
      pieHole?: number
      /** @description The data that covers the one and only series of the pie chart. */
      series?: components['schemas']['ChartData']
      /** @description True if the pie is three dimensional. */
      threeDimensional?: boolean
    }
    /** @description Criteria for showing/hiding rows in a pivot table. */
    PivotFilterCriteria: {
      /** @description A condition that must be true for values to be shown. (`visibleValues` does not override this -- even if a value is listed there, it is still hidden if it does not meet the condition.) Condition values that refer to ranges in A1-notation are evaluated relative to the pivot table sheet. References are treated absolutely, so are not filled down the pivot table. For example, a condition value of `=A1` on "Pivot Table 1" is treated as `'Pivot Table 1'!$A$1`. The source data of the pivot table can be referenced by column header name. For example, if the source data has columns named "Revenue" and "Cost" and a condition is applied to the "Revenue" column with type `NUMBER_GREATER` and value `=Cost`, then only columns where "Revenue" > "Cost" are included. */
      condition?: components['schemas']['BooleanCondition']
      /** @description Whether values are visible by default. If true, the visible_values are ignored, all values that meet condition (if specified) are shown. If false, values that are both in visible_values and meet condition are shown. */
      visibleByDefault?: boolean
      /** @description Values that should be included. Values not listed here are excluded. */
      visibleValues?: string[]
    }
    /** @description The pivot table filter criteria associated with a specific source column offset. */
    PivotFilterSpec: {
      /**
       * Format: int32
       * @description The column offset of the source range.
       */
      columnOffsetIndex?: number
      /** @description The reference to the data source column. */
      dataSourceColumnReference?: components['schemas']['DataSourceColumnReference']
      /** @description The criteria for the column. */
      filterCriteria?: components['schemas']['PivotFilterCriteria']
    }
    /** @description A single grouping (either row or column) in a pivot table. */
    PivotGroup: {
      /** @description The reference to the data source column this grouping is based on. */
      dataSourceColumnReference?: components['schemas']['DataSourceColumnReference']
      /** @description The count limit on rows or columns to apply to this pivot group. */
      groupLimit?: components['schemas']['PivotGroupLimit']
      /** @description The group rule to apply to this row/column group. */
      groupRule?: components['schemas']['PivotGroupRule']
      /** @description The labels to use for the row/column groups which can be customized. For example, in the following pivot table, the row label is `Region` (which could be renamed to `State`) and the column label is `Product` (which could be renamed `Item`). Pivot tables created before December 2017 do not have header labels. If you'd like to add header labels to an existing pivot table, please delete the existing pivot table and then create a new pivot table with same parameters. +--------------+---------+-------+ | SUM of Units | Product | | | Region | Pen | Paper | +--------------+---------+-------+ | New York | 345 | 98 | | Oregon | 234 | 123 | | Tennessee | 531 | 415 | +--------------+---------+-------+ | Grand Total | 1110 | 636 | +--------------+---------+-------+ */
      label?: string
      /** @description True if the headings in this pivot group should be repeated. This is only valid for row groupings and is ignored by columns. By default, we minimize repetition of headings by not showing higher level headings where they are the same. For example, even though the third row below corresponds to "Q1 Mar", "Q1" is not shown because it is redundant with previous rows. Setting repeat_headings to true would cause "Q1" to be repeated for "Feb" and "Mar". +--------------+ | Q1 | Jan | | | Feb | | | Mar | +--------+-----+ | Q1 Total | +--------------+ */
      repeatHeadings?: boolean
      /** @description True if the pivot table should include the totals for this grouping. */
      showTotals?: boolean
      /**
       * @description The order the values in this group should be sorted.
       * @enum {string}
       */
      sortOrder?: 'SORT_ORDER_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING'
      /**
       * Format: int32
       * @description The column offset of the source range that this grouping is based on. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this group refers to column `C`, whereas the offset `1` would refer to column `D`.
       */
      sourceColumnOffset?: number
      /** @description The bucket of the opposite pivot group to sort by. If not specified, sorting is alphabetical by this group's values. */
      valueBucket?: components['schemas']['PivotGroupSortValueBucket']
      /** @description Metadata about values in the grouping. */
      valueMetadata?: components['schemas']['PivotGroupValueMetadata'][]
    }
    /** @description The count limit on rows or columns in the pivot group. */
    PivotGroupLimit: {
      /**
       * Format: int32
       * @description The order in which the group limit is applied to the pivot table. Pivot group limits are applied from lower to higher order number. Order numbers are normalized to consecutive integers from 0. For write request, to fully customize the applying orders, all pivot group limits should have this field set with an unique number. Otherwise, the order is determined by the index in the PivotTable.rows list and then the PivotTable.columns list.
       */
      applyOrder?: number
      /**
       * Format: int32
       * @description The count limit.
       */
      countLimit?: number
    }
    /** @description An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not. */
    PivotGroupRule: {
      /** @description A DateTimeRule. */
      dateTimeRule?: components['schemas']['DateTimeRule']
      /** @description A HistogramRule. */
      histogramRule?: components['schemas']['HistogramRule']
      /** @description A ManualRule. */
      manualRule?: components['schemas']['ManualRule']
    }
    /** @description Information about which values in a pivot group should be used for sorting. */
    PivotGroupSortValueBucket: {
      /** @description Determines the bucket from which values are chosen to sort. For example, in a pivot table with one row group & two column groups, the row group can list up to two values. The first value corresponds to a value within the first column group, and the second value corresponds to a value in the second column group. If no values are listed, this would indicate that the row should be sorted according to the "Grand Total" over the column groups. If a single value is listed, this would correspond to using the "Total" of that bucket. */
      buckets?: components['schemas']['ExtendedValue'][]
      /**
       * Format: int32
       * @description The offset in the PivotTable.values list which the values in this grouping should be sorted by.
       */
      valuesIndex?: number
    }
    /** @description Metadata about a value in a pivot grouping. */
    PivotGroupValueMetadata: {
      /** @description True if the data corresponding to the value is collapsed. */
      collapsed?: boolean
      /** @description The calculated value the metadata corresponds to. (Note that formulaValue is not valid, because the values will be calculated.) */
      value?: components['schemas']['ExtendedValue']
    }
    /** @description A pivot table. */
    PivotTable: {
      /** @description Each column grouping in the pivot table. */
      columns?: components['schemas']['PivotGroup'][]
      /** @description An optional mapping of filters per source column offset. The filters are applied before aggregating data into the pivot table. The map's key is the column offset of the source range that you want to filter, and the value is the criteria for that column. For example, if the source was `C10:E15`, a key of `0` will have the filter for column `C`, whereas the key `1` is for column `D`. This field is deprecated in favor of filter_specs. */
      criteria?: {
        [key: string]: components['schemas']['PivotFilterCriteria']
      }
      /** @description Output only. The data execution status for data source pivot tables. */
      readonly dataExecutionStatus?: components['schemas']['DataExecutionStatus']
      /** @description The ID of the data source the pivot table is reading data from. */
      dataSourceId?: string
      /** @description The filters applied to the source columns before aggregating data for the pivot table. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. */
      filterSpecs?: components['schemas']['PivotFilterSpec'][]
      /** @description Each row grouping in the pivot table. */
      rows?: components['schemas']['PivotGroup'][]
      /** @description The range the pivot table is reading data from. */
      source?: components['schemas']['GridRange']
      /**
       * @description Whether values should be listed horizontally (as columns) or vertically (as rows).
       * @enum {string}
       */
      valueLayout?: 'HORIZONTAL' | 'VERTICAL'
      /** @description A list of values to include in the pivot table. */
      values?: components['schemas']['PivotValue'][]
    }
    /** @description The definition of how a value in a pivot table should be calculated. */
    PivotValue: {
      /**
       * @description If specified, indicates that pivot values should be displayed as the result of a calculation with another pivot value. For example, if calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the pivot values are displayed as the percentage of the grand total. In the Sheets editor, this is referred to as "Show As" in the value section of a pivot table.
       * @enum {string}
       */
      calculatedDisplayType?:
        | 'PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED'
        | 'PERCENT_OF_ROW_TOTAL'
        | 'PERCENT_OF_COLUMN_TOTAL'
        | 'PERCENT_OF_GRAND_TOTAL'
      /** @description The reference to the data source column that this value reads from. */
      dataSourceColumnReference?: components['schemas']['DataSourceColumnReference']
      /** @description A custom formula to calculate the value. The formula must start with an `=` character. */
      formula?: string
      /** @description A name to use for the value. */
      name?: string
      /**
       * Format: int32
       * @description The column offset of the source range that this value reads from. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this value refers to column `C`, whereas the offset `1` would refer to column `D`.
       */
      sourceColumnOffset?: number
      /**
       * @description A function to summarize the value. If formula is set, the only supported values are SUM and CUSTOM. If sourceColumnOffset is set, then `CUSTOM` is not supported.
       * @enum {string}
       */
      summarizeFunction?:
        | 'PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED'
        | 'SUM'
        | 'COUNTA'
        | 'COUNT'
        | 'COUNTUNIQUE'
        | 'AVERAGE'
        | 'MAX'
        | 'MIN'
        | 'MEDIAN'
        | 'PRODUCT'
        | 'STDEV'
        | 'STDEVP'
        | 'VAR'
        | 'VARP'
        | 'CUSTOM'
    }
    /** @description The style of a point on the chart. */
    PointStyle: {
      /**
       * @description The point shape. If empty or unspecified, a default shape is used.
       * @enum {string}
       */
      shape?:
        | 'POINT_SHAPE_UNSPECIFIED'
        | 'CIRCLE'
        | 'DIAMOND'
        | 'HEXAGON'
        | 'PENTAGON'
        | 'SQUARE'
        | 'STAR'
        | 'TRIANGLE'
        | 'X_MARK'
      /**
       * Format: double
       * @description The point size. If empty, a default size is used.
       */
      size?: number
    }
    /** @description A protected range. */
    ProtectedRange: {
      /** @description The description of this protected range. */
      description?: string
      /** @description The users and groups with edit access to the protected range. This field is only visible to users with edit access to the protected range and the document. Editors are not supported with warning_only protection. */
      editors?: components['schemas']['Editors']
      /** @description The named range this protected range is backed by, if any. When writing, only one of range or named_range_id may be set. */
      namedRangeId?: string
      /**
       * Format: int32
       * @description The ID of the protected range. This field is read-only.
       */
      protectedRangeId?: number
      /** @description The range that is being protected. The range may be fully unbounded, in which case this is considered a protected sheet. When writing, only one of range or named_range_id may be set. */
      range?: components['schemas']['GridRange']
      /** @description True if the user who requested this protected range can edit the protected area. This field is read-only. */
      requestingUserCanEdit?: boolean
      /** @description The list of unprotected ranges within a protected sheet. Unprotected ranges are only supported on protected sheets. */
      unprotectedRanges?: components['schemas']['GridRange'][]
      /** @description True if this protected range will show a warning when editing. Warning-based protection means that every user can edit data in the protected range, except editing will prompt a warning asking the user to confirm the edit. When writing: if this field is true, then editors is ignored. Additionally, if this field is changed from true to false and the `editors` field is not set (nor included in the field mask), then the editors will be set to all the editors in the document. */
      warningOnly?: boolean
    }
    /** @description Randomizes the order of the rows in a range. */
    RandomizeRangeRequest: {
      /** @description The range to randomize. */
      range?: components['schemas']['GridRange']
    }
    /** @description The execution status of refreshing one data source object. */
    RefreshDataSourceObjectExecutionStatus: {
      /** @description The data execution status. */
      dataExecutionStatus?: components['schemas']['DataExecutionStatus']
      /** @description Reference to a data source object being refreshed. */
      reference?: components['schemas']['DataSourceObjectReference']
    }
    /** @description Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly. */
    RefreshDataSourceRequest: {
      /** @description Reference to a DataSource. If specified, refreshes all associated data source objects for the data source. */
      dataSourceId?: string
      /** @description Refreshes the data source objects regardless of the current state. If not set and a referenced data source object was in error state, the refresh will fail immediately. */
      force?: boolean
      /** @description Refreshes all existing data source objects in the spreadsheet. */
      isAll?: boolean
      /** @description References to data source objects to refresh. */
      references?: components['schemas']['DataSourceObjectReferences']
    }
    /** @description The response from refreshing one or multiple data source objects. */
    RefreshDataSourceResponse: {
      /** @description All the refresh status for the data source object references specified in the request. If is_all is specified, the field contains only those in failure status. */
      statuses?: components['schemas']['RefreshDataSourceObjectExecutionStatus'][]
    }
    /** @description Updates all cells in the range to the values in the given Cell object. Only the fields listed in the fields field are updated; others are unchanged. If writing a cell with a formula, the formula's ranges will automatically increment for each field in the range. For example, if writing a cell with formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`. To keep the formula's ranges static, use the `$` indicator. For example, use the formula `=$A$1` to prevent both the row and the column from incrementing. */
    RepeatCellRequest: {
      /** @description The data to write. */
      cell?: components['schemas']['CellData']
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root `cell` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
      /** @description The range to repeat the cell in. */
      range?: components['schemas']['GridRange']
    }
    /** @description A single kind of update to apply to a spreadsheet. */
    Request: {
      /** @description Adds a new banded range */
      addBanding?: components['schemas']['AddBandingRequest']
      /** @description Adds a chart. */
      addChart?: components['schemas']['AddChartRequest']
      /** @description Adds a new conditional format rule. */
      addConditionalFormatRule?: components['schemas']['AddConditionalFormatRuleRequest']
      /** @description Adds a data source. */
      addDataSource?: components['schemas']['AddDataSourceRequest']
      /** @description Creates a group over the specified range. */
      addDimensionGroup?: components['schemas']['AddDimensionGroupRequest']
      /** @description Adds a filter view. */
      addFilterView?: components['schemas']['AddFilterViewRequest']
      /** @description Adds a named range. */
      addNamedRange?: components['schemas']['AddNamedRangeRequest']
      /** @description Adds a protected range. */
      addProtectedRange?: components['schemas']['AddProtectedRangeRequest']
      /** @description Adds a sheet. */
      addSheet?: components['schemas']['AddSheetRequest']
      /** @description Adds a slicer. */
      addSlicer?: components['schemas']['AddSlicerRequest']
      /** @description Appends cells after the last row with data in a sheet. */
      appendCells?: components['schemas']['AppendCellsRequest']
      /** @description Appends dimensions to the end of a sheet. */
      appendDimension?: components['schemas']['AppendDimensionRequest']
      /** @description Automatically fills in more data based on existing data. */
      autoFill?: components['schemas']['AutoFillRequest']
      /** @description Automatically resizes one or more dimensions based on the contents of the cells in that dimension. */
      autoResizeDimensions?: components['schemas']['AutoResizeDimensionsRequest']
      /** @description Clears the basic filter on a sheet. */
      clearBasicFilter?: components['schemas']['ClearBasicFilterRequest']
      /** @description Copies data from one area and pastes it to another. */
      copyPaste?: components['schemas']['CopyPasteRequest']
      /** @description Creates new developer metadata */
      createDeveloperMetadata?: components['schemas']['CreateDeveloperMetadataRequest']
      /** @description Cuts data from one area and pastes it to another. */
      cutPaste?: components['schemas']['CutPasteRequest']
      /** @description Removes a banded range */
      deleteBanding?: components['schemas']['DeleteBandingRequest']
      /** @description Deletes an existing conditional format rule. */
      deleteConditionalFormatRule?: components['schemas']['DeleteConditionalFormatRuleRequest']
      /** @description Deletes a data source. */
      deleteDataSource?: components['schemas']['DeleteDataSourceRequest']
      /** @description Deletes developer metadata */
      deleteDeveloperMetadata?: components['schemas']['DeleteDeveloperMetadataRequest']
      /** @description Deletes rows or columns in a sheet. */
      deleteDimension?: components['schemas']['DeleteDimensionRequest']
      /** @description Deletes a group over the specified range. */
      deleteDimensionGroup?: components['schemas']['DeleteDimensionGroupRequest']
      /** @description Removes rows containing duplicate values in specified columns of a cell range. */
      deleteDuplicates?: components['schemas']['DeleteDuplicatesRequest']
      /** @description Deletes an embedded object (e.g, chart, image) in a sheet. */
      deleteEmbeddedObject?: components['schemas']['DeleteEmbeddedObjectRequest']
      /** @description Deletes a filter view from a sheet. */
      deleteFilterView?: components['schemas']['DeleteFilterViewRequest']
      /** @description Deletes a named range. */
      deleteNamedRange?: components['schemas']['DeleteNamedRangeRequest']
      /** @description Deletes a protected range. */
      deleteProtectedRange?: components['schemas']['DeleteProtectedRangeRequest']
      /** @description Deletes a range of cells from a sheet, shifting the remaining cells. */
      deleteRange?: components['schemas']['DeleteRangeRequest']
      /** @description Deletes a sheet. */
      deleteSheet?: components['schemas']['DeleteSheetRequest']
      /** @description Duplicates a filter view. */
      duplicateFilterView?: components['schemas']['DuplicateFilterViewRequest']
      /** @description Duplicates a sheet. */
      duplicateSheet?: components['schemas']['DuplicateSheetRequest']
      /** @description Finds and replaces occurrences of some text with other text. */
      findReplace?: components['schemas']['FindReplaceRequest']
      /** @description Inserts new rows or columns in a sheet. */
      insertDimension?: components['schemas']['InsertDimensionRequest']
      /** @description Inserts new cells in a sheet, shifting the existing cells. */
      insertRange?: components['schemas']['InsertRangeRequest']
      /** @description Merges cells together. */
      mergeCells?: components['schemas']['MergeCellsRequest']
      /** @description Moves rows or columns to another location in a sheet. */
      moveDimension?: components['schemas']['MoveDimensionRequest']
      /** @description Pastes data (HTML or delimited) into a sheet. */
      pasteData?: components['schemas']['PasteDataRequest']
      /** @description Randomizes the order of the rows in a range. */
      randomizeRange?: components['schemas']['RandomizeRangeRequest']
      /** @description Refreshs one or multiple data sources and associated dbobjects. */
      refreshDataSource?: components['schemas']['RefreshDataSourceRequest']
      /** @description Repeats a single cell across a range. */
      repeatCell?: components['schemas']['RepeatCellRequest']
      /** @description Sets the basic filter on a sheet. */
      setBasicFilter?: components['schemas']['SetBasicFilterRequest']
      /** @description Sets data validation for one or more cells. */
      setDataValidation?: components['schemas']['SetDataValidationRequest']
      /** @description Sorts data in a range. */
      sortRange?: components['schemas']['SortRangeRequest']
      /** @description Converts a column of text into many columns of text. */
      textToColumns?: components['schemas']['TextToColumnsRequest']
      /** @description Trims cells of whitespace (such as spaces, tabs, or new lines). */
      trimWhitespace?: components['schemas']['TrimWhitespaceRequest']
      /** @description Unmerges merged cells. */
      unmergeCells?: components['schemas']['UnmergeCellsRequest']
      /** @description Updates a banded range */
      updateBanding?: components['schemas']['UpdateBandingRequest']
      /** @description Updates the borders in a range of cells. */
      updateBorders?: components['schemas']['UpdateBordersRequest']
      /** @description Updates many cells at once. */
      updateCells?: components['schemas']['UpdateCellsRequest']
      /** @description Updates a chart's specifications. */
      updateChartSpec?: components['schemas']['UpdateChartSpecRequest']
      /** @description Updates an existing conditional format rule. */
      updateConditionalFormatRule?: components['schemas']['UpdateConditionalFormatRuleRequest']
      /** @description Updates a data source. */
      updateDataSource?: components['schemas']['UpdateDataSourceRequest']
      /** @description Updates an existing developer metadata entry */
      updateDeveloperMetadata?: components['schemas']['UpdateDeveloperMetadataRequest']
      /** @description Updates the state of the specified group. */
      updateDimensionGroup?: components['schemas']['UpdateDimensionGroupRequest']
      /** @description Updates dimensions' properties. */
      updateDimensionProperties?: components['schemas']['UpdateDimensionPropertiesRequest']
      /** @description Updates an embedded object's border. */
      updateEmbeddedObjectBorder?: components['schemas']['UpdateEmbeddedObjectBorderRequest']
      /** @description Updates an embedded object's (e.g. chart, image) position. */
      updateEmbeddedObjectPosition?: components['schemas']['UpdateEmbeddedObjectPositionRequest']
      /** @description Updates the properties of a filter view. */
      updateFilterView?: components['schemas']['UpdateFilterViewRequest']
      /** @description Updates a named range. */
      updateNamedRange?: components['schemas']['UpdateNamedRangeRequest']
      /** @description Updates a protected range. */
      updateProtectedRange?: components['schemas']['UpdateProtectedRangeRequest']
      /** @description Updates a sheet's properties. */
      updateSheetProperties?: components['schemas']['UpdateSheetPropertiesRequest']
      /** @description Updates a slicer's specifications. */
      updateSlicerSpec?: components['schemas']['UpdateSlicerSpecRequest']
      /** @description Updates the spreadsheet's properties. */
      updateSpreadsheetProperties?: components['schemas']['UpdateSpreadsheetPropertiesRequest']
    }
    /** @description A single response from an update. */
    Response: {
      /** @description A reply from adding a banded range. */
      addBanding?: components['schemas']['AddBandingResponse']
      /** @description A reply from adding a chart. */
      addChart?: components['schemas']['AddChartResponse']
      /** @description A reply from adding a data source. */
      addDataSource?: components['schemas']['AddDataSourceResponse']
      /** @description A reply from adding a dimension group. */
      addDimensionGroup?: components['schemas']['AddDimensionGroupResponse']
      /** @description A reply from adding a filter view. */
      addFilterView?: components['schemas']['AddFilterViewResponse']
      /** @description A reply from adding a named range. */
      addNamedRange?: components['schemas']['AddNamedRangeResponse']
      /** @description A reply from adding a protected range. */
      addProtectedRange?: components['schemas']['AddProtectedRangeResponse']
      /** @description A reply from adding a sheet. */
      addSheet?: components['schemas']['AddSheetResponse']
      /** @description A reply from adding a slicer. */
      addSlicer?: components['schemas']['AddSlicerResponse']
      /** @description A reply from creating a developer metadata entry. */
      createDeveloperMetadata?: components['schemas']['CreateDeveloperMetadataResponse']
      /** @description A reply from deleting a conditional format rule. */
      deleteConditionalFormatRule?: components['schemas']['DeleteConditionalFormatRuleResponse']
      /** @description A reply from deleting a developer metadata entry. */
      deleteDeveloperMetadata?: components['schemas']['DeleteDeveloperMetadataResponse']
      /** @description A reply from deleting a dimension group. */
      deleteDimensionGroup?: components['schemas']['DeleteDimensionGroupResponse']
      /** @description A reply from removing rows containing duplicate values. */
      deleteDuplicates?: components['schemas']['DeleteDuplicatesResponse']
      /** @description A reply from duplicating a filter view. */
      duplicateFilterView?: components['schemas']['DuplicateFilterViewResponse']
      /** @description A reply from duplicating a sheet. */
      duplicateSheet?: components['schemas']['DuplicateSheetResponse']
      /** @description A reply from doing a find/replace. */
      findReplace?: components['schemas']['FindReplaceResponse']
      /** @description A reply from refreshing data source objects. */
      refreshDataSource?: components['schemas']['RefreshDataSourceResponse']
      /** @description A reply from trimming whitespace. */
      trimWhitespace?: components['schemas']['TrimWhitespaceResponse']
      /** @description A reply from updating a conditional format rule. */
      updateConditionalFormatRule?: components['schemas']['UpdateConditionalFormatRuleResponse']
      /** @description A reply from updating a data source. */
      updateDataSource?: components['schemas']['UpdateDataSourceResponse']
      /** @description A reply from updating a developer metadata entry. */
      updateDeveloperMetadata?: components['schemas']['UpdateDeveloperMetadataResponse']
      /** @description A reply from updating an embedded object's position. */
      updateEmbeddedObjectPosition?: components['schemas']['UpdateEmbeddedObjectPositionResponse']
    }
    /** @description Data about each cell in a row. */
    RowData: {
      /** @description The values in the row, one per column. */
      values?: components['schemas']['CellData'][]
    }
    /** @description A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time. */
    ScorecardChartSpec: {
      /**
       * @description The aggregation type for key and baseline chart data in scorecard chart. This field is not supported for data source charts. Use the ChartData.aggregateType field of the key_value_data or baseline_value_data instead for data source charts. This field is optional.
       * @enum {string}
       */
      aggregateType?:
        | 'CHART_AGGREGATE_TYPE_UNSPECIFIED'
        | 'AVERAGE'
        | 'COUNT'
        | 'MAX'
        | 'MEDIAN'
        | 'MIN'
        | 'SUM'
      /** @description The data for scorecard baseline value. This field is optional. */
      baselineValueData?: components['schemas']['ChartData']
      /** @description Formatting options for baseline value. This field is needed only if baseline_value_data is specified. */
      baselineValueFormat?: components['schemas']['BaselineValueFormat']
      /** @description Custom formatting options for numeric key/baseline values in scorecard chart. This field is used only when number_format_source is set to CUSTOM. This field is optional. */
      customFormatOptions?: components['schemas']['ChartCustomNumberFormatOptions']
      /** @description The data for scorecard key value. */
      keyValueData?: components['schemas']['ChartData']
      /** @description Formatting options for key value. */
      keyValueFormat?: components['schemas']['KeyValueFormat']
      /**
       * @description The number format source used in the scorecard chart. This field is optional.
       * @enum {string}
       */
      numberFormatSource?:
        | 'CHART_NUMBER_FORMAT_SOURCE_UNDEFINED'
        | 'FROM_DATA'
        | 'CUSTOM'
      /**
       * Format: double
       * @description Value to scale scorecard key and baseline value. For example, a factor of 10 can be used to divide all values in the chart by 10. This field is optional.
       */
      scaleFactor?: number
    }
    /** @description A request to retrieve all developer metadata matching the set of specified criteria. */
    SearchDeveloperMetadataRequest: {
      /** @description The data filters describing the criteria used to determine which DeveloperMetadata entries to return. DeveloperMetadata matching any of the specified filters are included in the response. */
      dataFilters?: components['schemas']['DataFilter'][]
    }
    /** @description A reply to a developer metadata search request. */
    SearchDeveloperMetadataResponse: {
      /** @description The metadata matching the criteria of the search request. */
      matchedDeveloperMetadata?: components['schemas']['MatchedDeveloperMetadata'][]
    }
    /** @description Sets the basic filter associated with a sheet. */
    SetBasicFilterRequest: {
      /** @description The filter to set. */
      filter?: components['schemas']['BasicFilter']
    }
    /** @description Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified. */
    SetDataValidationRequest: {
      /** @description The range the data validation rule should apply to. */
      range?: components['schemas']['GridRange']
      /** @description The data validation rule to set on each cell in the range, or empty to clear the data validation in the range. */
      rule?: components['schemas']['DataValidationRule']
    }
    /** @description A sheet in a spreadsheet. */
    Sheet: {
      /** @description The banded (alternating colors) ranges on this sheet. */
      bandedRanges?: components['schemas']['BandedRange'][]
      /** @description The filter on this sheet, if any. */
      basicFilter?: components['schemas']['BasicFilter']
      /** @description The specifications of every chart on this sheet. */
      charts?: components['schemas']['EmbeddedChart'][]
      /** @description All column groups on this sheet, ordered by increasing range start index, then by group depth. */
      columnGroups?: components['schemas']['DimensionGroup'][]
      /** @description The conditional format rules in this sheet. */
      conditionalFormats?: components['schemas']['ConditionalFormatRule'][]
      /** @description Data in the grid, if this is a grid sheet. The number of GridData objects returned is dependent on the number of ranges requested on this sheet. For example, if this is representing `Sheet1`, and the spreadsheet was requested with ranges `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the first GridData will have a startRow/startColumn of `0`, while the second one will have `startRow 14` (zero-based row 15), and `startColumn 3` (zero-based column D). For a DATA_SOURCE sheet, you can not request a specific range, the GridData contains all the values. */
      data?: components['schemas']['GridData'][]
      /** @description The developer metadata associated with a sheet. */
      developerMetadata?: components['schemas']['DeveloperMetadata'][]
      /** @description The filter views in this sheet. */
      filterViews?: components['schemas']['FilterView'][]
      /** @description The ranges that are merged together. */
      merges?: components['schemas']['GridRange'][]
      /** @description The properties of the sheet. */
      properties?: components['schemas']['SheetProperties']
      /** @description The protected ranges in this sheet. */
      protectedRanges?: components['schemas']['ProtectedRange'][]
      /** @description All row groups on this sheet, ordered by increasing range start index, then by group depth. */
      rowGroups?: components['schemas']['DimensionGroup'][]
      /** @description The slicers on this sheet. */
      slicers?: components['schemas']['Slicer'][]
    }
    /** @description Properties of a sheet. */
    SheetProperties: {
      /** @description Output only. If present, the field contains DATA_SOURCE sheet specific properties. */
      readonly dataSourceSheetProperties?: components['schemas']['DataSourceSheetProperties']
      /** @description Additional properties of the sheet if this sheet is a grid. (If the sheet is an object sheet, containing a chart or image, then this field will be absent.) When writing it is an error to set any grid properties on non-grid sheets. If this sheet is a DATA_SOURCE sheet, this field is output only but contains the properties that reflect how a data source sheet is rendered in the UI, e.g. row_count. */
      gridProperties?: components['schemas']['GridProperties']
      /** @description True if the sheet is hidden in the UI, false if it's visible. */
      hidden?: boolean
      /**
       * Format: int32
       * @description The index of the sheet within the spreadsheet. When adding or updating sheet properties, if this field is excluded then the sheet is added or moved to the end of the sheet list. When updating sheet indices or inserting sheets, movement is considered in "before the move" indexes. For example, if there were 3 sheets (S1, S2, S3) in order to move S1 ahead of S2 the index would have to be set to 2. A sheet index update request is ignored if the requested index is identical to the sheets current index or if the requested new index is equal to the current sheet index + 1.
       */
      index?: number
      /** @description True if the sheet is an RTL sheet instead of an LTR sheet. */
      rightToLeft?: boolean
      /**
       * Format: int32
       * @description The ID of the sheet. Must be non-negative. This field cannot be changed once set.
       */
      sheetId?: number
      /**
       * @description The type of sheet. Defaults to GRID. This field cannot be changed once set.
       * @enum {string}
       */
      sheetType?: 'SHEET_TYPE_UNSPECIFIED' | 'GRID' | 'OBJECT' | 'DATA_SOURCE'
      /** @description The color of the tab in the UI. Deprecated: Use tab_color_style. */
      tabColor?: components['schemas']['Color']
      /** @description The color of the tab in the UI. If tab_color is also set, this field takes precedence. */
      tabColorStyle?: components['schemas']['ColorStyle']
      /** @description The name of the sheet. */
      title?: string
    }
    /** @description A slicer in a sheet. */
    Slicer: {
      /** @description The position of the slicer. Note that slicer can be positioned only on existing sheet. Also, width and height of slicer can be automatically adjusted to keep it within permitted limits. */
      position?: components['schemas']['EmbeddedObjectPosition']
      /**
       * Format: int32
       * @description The ID of the slicer.
       */
      slicerId?: number
      /** @description The specification of the slicer. */
      spec?: components['schemas']['SlicerSpec']
    }
    /** @description The specifications of a slicer. */
    SlicerSpec: {
      /** @description True if the filter should apply to pivot tables. If not set, default to `True`. */
      applyToPivotTables?: boolean
      /** @description The background color of the slicer. Deprecated: Use background_color_style. */
      backgroundColor?: components['schemas']['Color']
      /** @description The background color of the slicer. If background_color is also set, this field takes precedence. */
      backgroundColorStyle?: components['schemas']['ColorStyle']
      /**
       * Format: int32
       * @description The column index in the data table on which the filter is applied to.
       */
      columnIndex?: number
      /** @description The data range of the slicer. */
      dataRange?: components['schemas']['GridRange']
      /** @description The filtering criteria of the slicer. */
      filterCriteria?: components['schemas']['FilterCriteria']
      /**
       * @description The horizontal alignment of title in the slicer. If unspecified, defaults to `LEFT`
       * @enum {string}
       */
      horizontalAlignment?:
        | 'HORIZONTAL_ALIGN_UNSPECIFIED'
        | 'LEFT'
        | 'CENTER'
        | 'RIGHT'
      /** @description The text format of title in the slicer. The link field is not supported. */
      textFormat?: components['schemas']['TextFormat']
      /** @description The title of the slicer. */
      title?: string
    }
    /** @description Sorts data in rows based on a sort order per column. */
    SortRangeRequest: {
      /** @description The range to sort. */
      range?: components['schemas']['GridRange']
      /** @description The sort order per column. Later specifications are used when values are equal in the earlier specifications. */
      sortSpecs?: components['schemas']['SortSpec'][]
    }
    /** @description A sort order associated with a specific column or row. */
    SortSpec: {
      /** @description The background fill color to sort by; cells with this fill color are sorted to the top. Mutually exclusive with foreground_color. Deprecated: Use background_color_style. */
      backgroundColor?: components['schemas']['Color']
      /** @description The background fill color to sort by; cells with this fill color are sorted to the top. Mutually exclusive with foreground_color, and must be an RGB-type color. If background_color is also set, this field takes precedence. */
      backgroundColorStyle?: components['schemas']['ColorStyle']
      /** @description Reference to a data source column. */
      dataSourceColumnReference?: components['schemas']['DataSourceColumnReference']
      /**
       * Format: int32
       * @description The dimension the sort should be applied to.
       */
      dimensionIndex?: number
      /** @description The foreground color to sort by; cells with this foreground color are sorted to the top. Mutually exclusive with background_color. Deprecated: Use foreground_color_style. */
      foregroundColor?: components['schemas']['Color']
      /** @description The foreground color to sort by; cells with this foreground color are sorted to the top. Mutually exclusive with background_color, and must be an RGB-type color. If foreground_color is also set, this field takes precedence. */
      foregroundColorStyle?: components['schemas']['ColorStyle']
      /**
       * @description The order data should be sorted.
       * @enum {string}
       */
      sortOrder?: 'SORT_ORDER_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING'
    }
    /** @description A combination of a source range and how to extend that source. */
    SourceAndDestination: {
      /**
       * @description The dimension that data should be filled into.
       * @enum {string}
       */
      dimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS'
      /**
       * Format: int32
       * @description The number of rows or columns that data should be filled into. Positive numbers expand beyond the last row or last column of the source. Negative numbers expand before the first row or first column of the source.
       */
      fillLength?: number
      /** @description The location of the data to use as the source of the autofill. */
      source?: components['schemas']['GridRange']
    }
    /** @description Resource that represents a spreadsheet. */
    Spreadsheet: {
      /** @description Output only. A list of data source refresh schedules. */
      readonly dataSourceSchedules?: components['schemas']['DataSourceRefreshSchedule'][]
      /** @description A list of external data sources connected with the spreadsheet. */
      dataSources?: components['schemas']['DataSource'][]
      /** @description The developer metadata associated with a spreadsheet. */
      developerMetadata?: components['schemas']['DeveloperMetadata'][]
      /** @description The named ranges defined in a spreadsheet. */
      namedRanges?: components['schemas']['NamedRange'][]
      /** @description Overall properties of a spreadsheet. */
      properties?: components['schemas']['SpreadsheetProperties']
      /** @description The sheets that are part of a spreadsheet. */
      sheets?: components['schemas']['Sheet'][]
      /** @description The ID of the spreadsheet. This field is read-only. */
      spreadsheetId?: string
      /** @description The url of the spreadsheet. This field is read-only. */
      spreadsheetUrl?: string
    }
    /** @description Properties of a spreadsheet. */
    SpreadsheetProperties: {
      /**
       * @description The amount of time to wait before volatile functions are recalculated.
       * @enum {string}
       */
      autoRecalc?:
        | 'RECALCULATION_INTERVAL_UNSPECIFIED'
        | 'ON_CHANGE'
        | 'MINUTE'
        | 'HOUR'
      /** @description The default format of all cells in the spreadsheet. CellData.effectiveFormat will not be set if the cell's format is equal to this default format. This field is read-only. */
      defaultFormat?: components['schemas']['CellFormat']
      /** @description Determines whether and how circular references are resolved with iterative calculation. Absence of this field means that circular references result in calculation errors. */
      iterativeCalculationSettings?: components['schemas']['IterativeCalculationSettings']
      /** @description The locale of the spreadsheet in one of the following formats: * an ISO 639-1 language code such as `en` * an ISO 639-2 language code such as `fil`, if no 639-1 code exists * a combination of the ISO language code and country code, such as `en_US` Note: when updating this field, not all locales/languages are supported. */
      locale?: string
      /** @description Theme applied to the spreadsheet. */
      spreadsheetTheme?: components['schemas']['SpreadsheetTheme']
      /** @description The time zone of the spreadsheet, in CLDR format such as `America/New_York`. If the time zone isn't recognized, this may be a custom time zone such as `GMT-07:00`. */
      timeZone?: string
      /** @description The title of the spreadsheet. */
      title?: string
    }
    /** @description Represents spreadsheet theme */
    SpreadsheetTheme: {
      /** @description Name of the primary font family. */
      primaryFontFamily?: string
      /** @description The spreadsheet theme color pairs. To update you must provide all theme color pairs. */
      themeColors?: components['schemas']['ThemeColorPair'][]
    }
    /** @description The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
    TextFormat: {
      /** @description True if the text is bold. */
      bold?: boolean
      /** @description The font family. */
      fontFamily?: string
      /**
       * Format: int32
       * @description The size of the font.
       */
      fontSize?: number
      /** @description The foreground color of the text. Deprecated: Use foreground_color_style. */
      foregroundColor?: components['schemas']['Color']
      /** @description The foreground color of the text. If foreground_color is also set, this field takes precedence. */
      foregroundColorStyle?: components['schemas']['ColorStyle']
      /** @description True if the text is italicized. */
      italic?: boolean
      /** @description The link destination of the text, if any. Setting the link field in a TextFormatRun will clear the cell's existing links or a cell-level link set in the same request. When a link is set, the text foreground color will be set to the default link color and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. */
      link?: components['schemas']['Link']
      /** @description True if the text has a strikethrough. */
      strikethrough?: boolean
      /** @description True if the text is underlined. */
      underline?: boolean
    }
    /** @description A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set. */
    TextFormatRun: {
      /** @description The format of this run. Absent values inherit the cell's format. */
      format?: components['schemas']['TextFormat']
      /**
       * Format: int32
       * @description The character index where this run starts.
       */
      startIndex?: number
    }
    /** @description Position settings for text. */
    TextPosition: {
      /**
       * @description Horizontal alignment setting for the piece of text.
       * @enum {string}
       */
      horizontalAlignment?:
        | 'HORIZONTAL_ALIGN_UNSPECIFIED'
        | 'LEFT'
        | 'CENTER'
        | 'RIGHT'
    }
    /** @description The rotation applied to text in a cell. */
    TextRotation: {
      /**
       * Format: int32
       * @description The angle between the standard orientation and the desired orientation. Measured in degrees. Valid values are between -90 and 90. Positive angles are angled upwards, negative are angled downwards. Note: For LTR text direction positive angles are in the counterclockwise direction, whereas for RTL they are in the clockwise direction
       */
      angle?: number
      /** @description If true, text reads top to bottom, but the orientation of individual characters is unchanged. For example: | V | | e | | r | | t | | i | | c | | a | | l | */
      vertical?: boolean
    }
    /** @description Splits a column of text into multiple columns, based on a delimiter in each cell. */
    TextToColumnsRequest: {
      /** @description The delimiter to use. Used only if delimiterType is CUSTOM. */
      delimiter?: string
      /**
       * @description The delimiter type to use.
       * @enum {string}
       */
      delimiterType?:
        | 'DELIMITER_TYPE_UNSPECIFIED'
        | 'COMMA'
        | 'SEMICOLON'
        | 'PERIOD'
        | 'SPACE'
        | 'CUSTOM'
        | 'AUTODETECT'
      /** @description The source data range. This must span exactly one column. */
      source?: components['schemas']['GridRange']
    }
    /** @description A pair mapping a spreadsheet theme color type to the concrete color it represents. */
    ThemeColorPair: {
      /** @description The concrete color corresponding to the theme color type. */
      color?: components['schemas']['ColorStyle']
      /**
       * @description The type of the spreadsheet theme color.
       * @enum {string}
       */
      colorType?:
        | 'THEME_COLOR_TYPE_UNSPECIFIED'
        | 'TEXT'
        | 'BACKGROUND'
        | 'ACCENT1'
        | 'ACCENT2'
        | 'ACCENT3'
        | 'ACCENT4'
        | 'ACCENT5'
        | 'ACCENT6'
        | 'LINK'
    }
    /** @description Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
    TimeOfDay: {
      /**
       * Format: int32
       * @description Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
       */
      hours?: number
      /**
       * Format: int32
       * @description Minutes of hour of day. Must be from 0 to 59.
       */
      minutes?: number
      /**
       * Format: int32
       * @description Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
       */
      nanos?: number
      /**
       * Format: int32
       * @description Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
       */
      seconds?: number
    }
    /** @description A color scale for a treemap chart. */
    TreemapChartColorScale: {
      /** @description The background color for cells with a color value greater than or equal to maxValue. Defaults to #109618 if not specified. Deprecated: Use max_value_color_style. */
      maxValueColor?: components['schemas']['Color']
      /** @description The background color for cells with a color value greater than or equal to maxValue. Defaults to #109618 if not specified. If max_value_color is also set, this field takes precedence. */
      maxValueColorStyle?: components['schemas']['ColorStyle']
      /** @description The background color for cells with a color value at the midpoint between minValue and maxValue. Defaults to #efe6dc if not specified. Deprecated: Use mid_value_color_style. */
      midValueColor?: components['schemas']['Color']
      /** @description The background color for cells with a color value at the midpoint between minValue and maxValue. Defaults to #efe6dc if not specified. If mid_value_color is also set, this field takes precedence. */
      midValueColorStyle?: components['schemas']['ColorStyle']
      /** @description The background color for cells with a color value less than or equal to minValue. Defaults to #dc3912 if not specified. Deprecated: Use min_value_color_style. */
      minValueColor?: components['schemas']['Color']
      /** @description The background color for cells with a color value less than or equal to minValue. Defaults to #dc3912 if not specified. If min_value_color is also set, this field takes precedence. */
      minValueColorStyle?: components['schemas']['ColorStyle']
      /** @description The background color for cells that have no color data associated with them. Defaults to #000000 if not specified. Deprecated: Use no_data_color_style. */
      noDataColor?: components['schemas']['Color']
      /** @description The background color for cells that have no color data associated with them. Defaults to #000000 if not specified. If no_data_color is also set, this field takes precedence. */
      noDataColorStyle?: components['schemas']['ColorStyle']
    }
    /** @description A Treemap chart. */
    TreemapChartSpec: {
      /** @description The data that determines the background color of each treemap data cell. This field is optional. If not specified, size_data is used to determine background colors. If specified, the data is expected to be numeric. color_scale will determine how the values in this data map to data cell background colors. */
      colorData?: components['schemas']['ChartData']
      /** @description The color scale for data cells in the treemap chart. Data cells are assigned colors based on their color values. These color values come from color_data, or from size_data if color_data is not specified. Cells with color values less than or equal to min_value will have minValueColor as their background color. Cells with color values greater than or equal to max_value will have maxValueColor as their background color. Cells with color values between min_value and max_value will have background colors on a gradient between minValueColor and maxValueColor, the midpoint of the gradient being midValueColor. Cells with missing or non-numeric color values will have noDataColor as their background color. */
      colorScale?: components['schemas']['TreemapChartColorScale']
      /** @description The background color for header cells. Deprecated: Use header_color_style. */
      headerColor?: components['schemas']['Color']
      /** @description The background color for header cells. If header_color is also set, this field takes precedence. */
      headerColorStyle?: components['schemas']['ColorStyle']
      /** @description True to hide tooltips. */
      hideTooltips?: boolean
      /**
       * Format: int32
       * @description The number of additional data levels beyond the labeled levels to be shown on the treemap chart. These levels are not interactive and are shown without their labels. Defaults to 0 if not specified.
       */
      hintedLevels?: number
      /** @description The data that contains the treemap cell labels. */
      labels?: components['schemas']['ChartData']
      /**
       * Format: int32
       * @description The number of data levels to show on the treemap chart. These levels are interactive and are shown with their labels. Defaults to 2 if not specified.
       */
      levels?: number
      /**
       * Format: double
       * @description The maximum possible data value. Cells with values greater than this will have the same color as cells with this value. If not specified, defaults to the actual maximum value from color_data, or the maximum value from size_data if color_data is not specified.
       */
      maxValue?: number
      /**
       * Format: double
       * @description The minimum possible data value. Cells with values less than this will have the same color as cells with this value. If not specified, defaults to the actual minimum value from color_data, or the minimum value from size_data if color_data is not specified.
       */
      minValue?: number
      /** @description The data the contains the treemap cells' parent labels. */
      parentLabels?: components['schemas']['ChartData']
      /** @description The data that determines the size of each treemap data cell. This data is expected to be numeric. The cells corresponding to non-numeric or missing data will not be rendered. If color_data is not specified, this data is used to determine data cell background colors as well. */
      sizeData?: components['schemas']['ChartData']
      /** @description The text format for all labels on the chart. The link field is not supported. */
      textFormat?: components['schemas']['TextFormat']
    }
    /** @description Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and isn't interpreted as a formula. */
    TrimWhitespaceRequest: {
      /** @description The range whose cells to trim. */
      range?: components['schemas']['GridRange']
    }
    /** @description The result of trimming whitespace in cells. */
    TrimWhitespaceResponse: {
      /**
       * Format: int32
       * @description The number of cells that were trimmed of whitespace.
       */
      cellsChangedCount?: number
    }
    /** @description Unmerges cells in the given range. */
    UnmergeCellsRequest: {
      /** @description The range within which all cells should be unmerged. If the range spans multiple merges, all will be unmerged. The range must not partially span any merge. */
      range?: components['schemas']['GridRange']
    }
    /** @description Updates properties of the supplied banded range. */
    UpdateBandingRequest: {
      /** @description The banded range to update with the new properties. */
      bandedRange?: components['schemas']['BandedRange']
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root `bandedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
    }
    /** @description Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE. */
    UpdateBordersRequest: {
      /** @description The border to put at the bottom of the range. */
      bottom?: components['schemas']['Border']
      /** @description The horizontal border to put within the range. */
      innerHorizontal?: components['schemas']['Border']
      /** @description The vertical border to put within the range. */
      innerVertical?: components['schemas']['Border']
      /** @description The border to put at the left of the range. */
      left?: components['schemas']['Border']
      /** @description The range whose borders should be updated. */
      range?: components['schemas']['GridRange']
      /** @description The border to put at the right of the range. */
      right?: components['schemas']['Border']
      /** @description The border to put at the top of the range. */
      top?: components['schemas']['Border']
    }
    /** @description Updates all cells in a range with new data. */
    UpdateCellsRequest: {
      /**
       * Format: google-fieldmask
       * @description The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
      /** @description The range to write data to. If the data in rows does not cover the entire requested range, the fields matching those set in fields will be cleared. */
      range?: components['schemas']['GridRange']
      /** @description The data to write. */
      rows?: components['schemas']['RowData'][]
      /** @description The coordinate to start writing data at. Any number of rows and columns (including a different number of columns per row) may be written. */
      start?: components['schemas']['GridCoordinate']
    }
    /** @description Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.) */
    UpdateChartSpecRequest: {
      /**
       * Format: int32
       * @description The ID of the chart to update.
       */
      chartId?: number
      /** @description The specification to apply to the chart. */
      spec?: components['schemas']['ChartSpec']
    }
    /** @description Updates a conditional format rule at the given index, or moves a conditional format rule to another index. */
    UpdateConditionalFormatRuleRequest: {
      /**
       * Format: int32
       * @description The zero-based index of the rule that should be replaced or moved.
       */
      index?: number
      /**
       * Format: int32
       * @description The zero-based new index the rule should end up at.
       */
      newIndex?: number
      /** @description The rule that should replace the rule at the given index. */
      rule?: components['schemas']['ConditionalFormatRule']
      /**
       * Format: int32
       * @description The sheet of the rule to move. Required if new_index is set, unused otherwise.
       */
      sheetId?: number
    }
    /** @description The result of updating a conditional format rule. */
    UpdateConditionalFormatRuleResponse: {
      /**
       * Format: int32
       * @description The index of the new rule.
       */
      newIndex?: number
      /** @description The new rule that replaced the old rule (if replacing), or the rule that was moved (if moved) */
      newRule?: components['schemas']['ConditionalFormatRule']
      /**
       * Format: int32
       * @description The old index of the rule. Not set if a rule was replaced (because it is the same as new_index).
       */
      oldIndex?: number
      /** @description The old (deleted) rule. Not set if a rule was moved (because it is the same as new_rule). */
      oldRule?: components['schemas']['ConditionalFormatRule']
    }
    /** @description Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope. */
    UpdateDataSourceRequest: {
      /** @description The data source to update. */
      dataSource?: components['schemas']['DataSource']
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root `dataSource` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
    }
    /** @description The response from updating data source. */
    UpdateDataSourceResponse: {
      /** @description The data execution status. */
      dataExecutionStatus?: components['schemas']['DataExecutionStatus']
      /** @description The updated data source. */
      dataSource?: components['schemas']['DataSource']
    }
    /** @description A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update. */
    UpdateDeveloperMetadataRequest: {
      /** @description The filters matching the developer metadata entries to update. */
      dataFilters?: components['schemas']['DataFilter'][]
      /** @description The value that all metadata matched by the data filters will be updated to. */
      developerMetadata?: components['schemas']['DeveloperMetadata']
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root `developerMetadata` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
    }
    /** @description The response from updating developer metadata. */
    UpdateDeveloperMetadataResponse: {
      /** @description The updated developer metadata. */
      developerMetadata?: components['schemas']['DeveloperMetadata'][]
    }
    /** @description Updates the state of the specified group. */
    UpdateDimensionGroupRequest: {
      /** @description The group whose state should be updated. The range and depth of the group should specify a valid group on the sheet, and all other fields updated. */
      dimensionGroup?: components['schemas']['DimensionGroup']
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root `dimensionGroup` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
    }
    /** @description Updates properties of dimensions within the specified range. */
    UpdateDimensionPropertiesRequest: {
      /** @description The columns on a data source sheet to update. */
      dataSourceSheetRange?: components['schemas']['DataSourceSheetDimensionRange']
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
      /** @description Properties to update. */
      properties?: components['schemas']['DimensionProperties']
      /** @description The rows or columns to update. */
      range?: components['schemas']['DimensionRange']
    }
    /** @description Updates an embedded object's border property. */
    UpdateEmbeddedObjectBorderRequest: {
      /** @description The border that applies to the embedded object. */
      border?: components['schemas']['EmbeddedObjectBorder']
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root `border` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
      /**
       * Format: int32
       * @description The ID of the embedded object to update.
       */
      objectId?: number
    }
    /** @description Update an embedded object's position (such as a moving or resizing a chart or image). */
    UpdateEmbeddedObjectPositionRequest: {
      /**
       * Format: google-fieldmask
       * @description The fields of OverlayPosition that should be updated when setting a new position. Used only if newPosition.overlayPosition is set, in which case at least one field must be specified. The root `newPosition.overlayPosition` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
      /** @description An explicit position to move the embedded object to. If newPosition.sheetId is set, a new sheet with that ID will be created. If newPosition.newSheet is set to true, a new sheet will be created with an ID that will be chosen for you. */
      newPosition?: components['schemas']['EmbeddedObjectPosition']
      /**
       * Format: int32
       * @description The ID of the object to moved.
       */
      objectId?: number
    }
    /** @description The result of updating an embedded object's position. */
    UpdateEmbeddedObjectPositionResponse: {
      /** @description The new position of the embedded object. */
      position?: components['schemas']['EmbeddedObjectPosition']
    }
    /** @description Updates properties of the filter view. */
    UpdateFilterViewRequest: {
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root `filter` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
      /** @description The new properties of the filter view. */
      filter?: components['schemas']['FilterView']
    }
    /** @description Updates properties of the named range with the specified namedRangeId. */
    UpdateNamedRangeRequest: {
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root `namedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
      /** @description The named range to update with the new properties. */
      namedRange?: components['schemas']['NamedRange']
    }
    /** @description Updates an existing protected range with the specified protectedRangeId. */
    UpdateProtectedRangeRequest: {
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root `protectedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
      /** @description The protected range to update with the new properties. */
      protectedRange?: components['schemas']['ProtectedRange']
    }
    /** @description Updates properties of the sheet with the specified sheetId. */
    UpdateSheetPropertiesRequest: {
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
      /** @description The properties to update. */
      properties?: components['schemas']['SheetProperties']
    }
    /** @description Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest. */
    UpdateSlicerSpecRequest: {
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root `SlicerSpec` is implied and should not be specified. A single "*"` can be used as short-hand for listing every field.
       */
      fields?: string
      /**
       * Format: int32
       * @description The id of the slicer to update.
       */
      slicerId?: number
      /** @description The specification to apply to the slicer. */
      spec?: components['schemas']['SlicerSpec']
    }
    /** @description Updates properties of a spreadsheet. */
    UpdateSpreadsheetPropertiesRequest: {
      /**
       * Format: google-fieldmask
       * @description The fields that should be updated. At least one field must be specified. The root 'properties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
       */
      fields?: string
      /** @description The properties to update. */
      properties?: components['schemas']['SpreadsheetProperties']
    }
    /** @description The response when updating a range of values by a data filter in a spreadsheet. */
    UpdateValuesByDataFilterResponse: {
      /** @description The data filter that selected the range that was updated. */
      dataFilter?: components['schemas']['DataFilter']
      /**
       * Format: int32
       * @description The number of cells updated.
       */
      updatedCells?: number
      /**
       * Format: int32
       * @description The number of columns where at least one cell in the column was updated.
       */
      updatedColumns?: number
      /** @description The values of the cells in the range matched by the dataFilter after all updates were applied. This is only included if the request's `includeValuesInResponse` field was `true`. */
      updatedData?: components['schemas']['ValueRange']
      /** @description The range (in [A1 notation](/sheets/api/guides/concepts#cell)) that updates were applied to. */
      updatedRange?: string
      /**
       * Format: int32
       * @description The number of rows where at least one cell in the row was updated.
       */
      updatedRows?: number
    }
    /** @description The response when updating a range of values in a spreadsheet. */
    UpdateValuesResponse: {
      /** @description The spreadsheet the updates were applied to. */
      spreadsheetId?: string
      /**
       * Format: int32
       * @description The number of cells updated.
       */
      updatedCells?: number
      /**
       * Format: int32
       * @description The number of columns where at least one cell in the column was updated.
       */
      updatedColumns?: number
      /** @description The values of the cells after updates were applied. This is only included if the request's `includeValuesInResponse` field was `true`. */
      updatedData?: components['schemas']['ValueRange']
      /** @description The range (in A1 notation) that updates were applied to. */
      updatedRange?: string
      /**
       * Format: int32
       * @description The number of rows where at least one cell in the row was updated.
       */
      updatedRows?: number
    }
    /** @description Data within a range of the spreadsheet. */
    ValueRange: {
      /**
       * @description The major dimension of the values. For output, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`. For input, with `range=A1:B2,majorDimension=ROWS` then `[[1,2],[3,4]]` will set `A1=1,B1=2,A2=3,B2=4`. With `range=A1:B2,majorDimension=COLUMNS` then `[[1,2],[3,4]]` will set `A1=1,B1=3,A2=2,B2=4`. When writing, if this field is not set, it defaults to ROWS.
       * @enum {string}
       */
      majorDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS'
      /** @description The range the values cover, in [A1 notation](/sheets/api/guides/concepts#cell). For output, this range indicates the entire requested range, even though the values will exclude trailing rows and columns. When appending values, this field represents the range to search for a table, after which values will be appended. */
      range?: string
      /** @description The data that was read or to be written. This is an array of arrays, the outer array representing all the data and each inner array representing a major dimension. Each item in the inner array corresponds with one cell. For output, empty trailing rows and columns will not be included. For input, supported value types are: bool, string, and double. Null values will be skipped. To set a cell to an empty value, set the string value to an empty string. */
      values?: unknown[][]
    }
    /** @description Styles for a waterfall chart column. */
    WaterfallChartColumnStyle: {
      /** @description The color of the column. Deprecated: Use color_style. */
      color?: components['schemas']['Color']
      /** @description The color of the column. If color is also set, this field takes precedence. */
      colorStyle?: components['schemas']['ColorStyle']
      /** @description The label of the column's legend. */
      label?: string
    }
    /** @description A custom subtotal column for a waterfall chart series. */
    WaterfallChartCustomSubtotal: {
      /** @description True if the data point at subtotal_index is the subtotal. If false, the subtotal will be computed and appear after the data point. */
      dataIsSubtotal?: boolean
      /** @description A label for the subtotal column. */
      label?: string
      /**
       * Format: int32
       * @description The 0-based index of a data point within the series. If data_is_subtotal is true, the data point at this index is the subtotal. Otherwise, the subtotal appears after the data point with this index. A series can have multiple subtotals at arbitrary indices, but subtotals do not affect the indices of the data points. For example, if a series has three data points, their indices will always be 0, 1, and 2, regardless of how many subtotals exist on the series or what data points they are associated with.
       */
      subtotalIndex?: number
    }
    /** @description The domain of a waterfall chart. */
    WaterfallChartDomain: {
      /** @description The data of the WaterfallChartDomain. */
      data?: components['schemas']['ChartData']
      /** @description True to reverse the order of the domain values (horizontal axis). */
      reversed?: boolean
    }
    /** @description A single series of data for a waterfall chart. */
    WaterfallChartSeries: {
      /** @description Custom subtotal columns appearing in this series. The order in which subtotals are defined is not significant. Only one subtotal may be defined for each data point. */
      customSubtotals?: components['schemas']['WaterfallChartCustomSubtotal'][]
      /** @description The data being visualized in this series. */
      data?: components['schemas']['ChartData']
      /** @description Information about the data labels for this series. */
      dataLabel?: components['schemas']['DataLabel']
      /** @description True to hide the subtotal column from the end of the series. By default, a subtotal column will appear at the end of each series. Setting this field to true will hide that subtotal column for this series. */
      hideTrailingSubtotal?: boolean
      /** @description Styles for all columns in this series with negative values. */
      negativeColumnsStyle?: components['schemas']['WaterfallChartColumnStyle']
      /** @description Styles for all columns in this series with positive values. */
      positiveColumnsStyle?: components['schemas']['WaterfallChartColumnStyle']
      /** @description Styles for all subtotal columns in this series. */
      subtotalColumnsStyle?: components['schemas']['WaterfallChartColumnStyle']
    }
    /** @description A waterfall chart. */
    WaterfallChartSpec: {
      /** @description The line style for the connector lines. */
      connectorLineStyle?: components['schemas']['LineStyle']
      /** @description The domain data (horizontal axis) for the waterfall chart. */
      domain?: components['schemas']['WaterfallChartDomain']
      /** @description True to interpret the first value as a total. */
      firstValueIsTotal?: boolean
      /** @description True to hide connector lines between columns. */
      hideConnectorLines?: boolean
      /** @description The data this waterfall chart is visualizing. */
      series?: components['schemas']['WaterfallChartSeries'][]
      /**
       * @description The stacked type.
       * @enum {string}
       */
      stackedType?:
        | 'WATERFALL_STACKED_TYPE_UNSPECIFIED'
        | 'STACKED'
        | 'SEQUENTIAL'
      /** @description Controls whether to display additional data labels on stacked charts which sum the total value of all stacked values at each value along the domain axis. stacked_type must be STACKED and neither CUSTOM nor placement can be set on the total_data_label. */
      totalDataLabel?: components['schemas']['DataLabel']
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
  'sheets.spreadsheets.create': {
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
    requestBody?: {
      content: {
        'application/json': components['schemas']['Spreadsheet']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Spreadsheet']
        }
      }
    }
  }
  'sheets.spreadsheets.get': {
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
        /** @description True if grid data should be returned. This parameter is ignored if a field mask was set in the request. */
        includeGridData?: boolean
        /** @description The ranges to retrieve from the spreadsheet. */
        ranges?: string[]
      }
      header?: never
      path: {
        /** @description The spreadsheet to request. */
        spreadsheetId: string
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
          'application/json': components['schemas']['Spreadsheet']
        }
      }
    }
  }
  'sheets.spreadsheets.developerMetadata.get': {
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
        /** @description The ID of the spreadsheet to retrieve metadata from. */
        spreadsheetId: string
        /** @description The ID of the developer metadata to retrieve. */
        metadataId: number
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
          'application/json': components['schemas']['DeveloperMetadata']
        }
      }
    }
  }
  'sheets.spreadsheets.developerMetadata.search': {
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
        /** @description The ID of the spreadsheet to retrieve metadata from. */
        spreadsheetId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['SearchDeveloperMetadataRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SearchDeveloperMetadataResponse']
        }
      }
    }
  }
  'sheets.spreadsheets.sheets.copyTo': {
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
        /** @description The ID of the spreadsheet containing the sheet to copy. */
        spreadsheetId: string
        /** @description The ID of the sheet to copy. */
        sheetId: number
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['CopySheetToAnotherSpreadsheetRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['SheetProperties']
        }
      }
    }
  }
  'sheets.spreadsheets.values.get': {
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
        /** @description How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
        dateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING'
        /** @description The major dimension that results should use. For example, if the spreadsheet data in Sheet1 is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=Sheet1!A1:B2?majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `range=Sheet1!A1:B2?majorDimension=COLUMNS` returns `[[1,3],[2,4]]`. */
        majorDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS'
        /** @description How values should be represented in the output. The default render option is FORMATTED_VALUE. */
        valueRenderOption?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA'
      }
      header?: never
      path: {
        /** @description The ID of the spreadsheet to retrieve data from. */
        spreadsheetId: string
        /** @description The [A1 notation or R1C1 notation](/sheets/api/guides/concepts#cell) of the range to retrieve values from. */
        range: string
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
          'application/json': components['schemas']['ValueRange']
        }
      }
    }
  }
  'sheets.spreadsheets.values.update': {
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
        /** @description Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns). */
        includeValuesInResponse?: boolean
        /** @description Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
        responseDateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING'
        /** @description Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. */
        responseValueRenderOption?:
          | 'FORMATTED_VALUE'
          | 'UNFORMATTED_VALUE'
          | 'FORMULA'
        /** @description How the input data should be interpreted. */
        valueInputOption?:
          | 'INPUT_VALUE_OPTION_UNSPECIFIED'
          | 'RAW'
          | 'USER_ENTERED'
      }
      header?: never
      path: {
        /** @description The ID of the spreadsheet to update. */
        spreadsheetId: string
        /** @description The [A1 notation](/sheets/api/guides/concepts#cell) of the values to update. */
        range: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ValueRange']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['UpdateValuesResponse']
        }
      }
    }
  }
  'sheets.spreadsheets.values.append': {
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
        /** @description Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values. */
        includeValuesInResponse?: boolean
        /** @description How the input data should be inserted. */
        insertDataOption?: 'OVERWRITE' | 'INSERT_ROWS'
        /** @description Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
        responseDateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING'
        /** @description Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. */
        responseValueRenderOption?:
          | 'FORMATTED_VALUE'
          | 'UNFORMATTED_VALUE'
          | 'FORMULA'
        /** @description How the input data should be interpreted. */
        valueInputOption?:
          | 'INPUT_VALUE_OPTION_UNSPECIFIED'
          | 'RAW'
          | 'USER_ENTERED'
      }
      header?: never
      path: {
        /** @description The ID of the spreadsheet to update. */
        spreadsheetId: string
        /** @description The [A1 notation](/sheets/api/guides/concepts#cell) of a range to search for a logical table of data. Values are appended after the last row of the table. */
        range: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ValueRange']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AppendValuesResponse']
        }
      }
    }
  }
  'sheets.spreadsheets.values.clear': {
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
        /** @description The ID of the spreadsheet to update. */
        spreadsheetId: string
        /** @description The [A1 notation or R1C1 notation](/sheets/api/guides/concepts#cell) of the values to clear. */
        range: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['ClearValuesRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ClearValuesResponse']
        }
      }
    }
  }
  'sheets.spreadsheets.values.batchClear': {
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
        /** @description The ID of the spreadsheet to update. */
        spreadsheetId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['BatchClearValuesRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BatchClearValuesResponse']
        }
      }
    }
  }
  'sheets.spreadsheets.values.batchClearByDataFilter': {
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
        /** @description The ID of the spreadsheet to update. */
        spreadsheetId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['BatchClearValuesByDataFilterRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BatchClearValuesByDataFilterResponse']
        }
      }
    }
  }
  'sheets.spreadsheets.values.batchGet': {
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
        /** @description How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
        dateTimeRenderOption?: 'SERIAL_NUMBER' | 'FORMATTED_STRING'
        /** @description The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `ranges=["A1:B2"],majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `ranges=["A1:B2"],majorDimension=COLUMNS` returns `[[1,3],[2,4]]`. */
        majorDimension?: 'DIMENSION_UNSPECIFIED' | 'ROWS' | 'COLUMNS'
        /** @description The [A1 notation or R1C1 notation](/sheets/api/guides/concepts#cell) of the range to retrieve values from. */
        ranges?: string[]
        /** @description How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE. */
        valueRenderOption?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA'
      }
      header?: never
      path: {
        /** @description The ID of the spreadsheet to retrieve data from. */
        spreadsheetId: string
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
          'application/json': components['schemas']['BatchGetValuesResponse']
        }
      }
    }
  }
  'sheets.spreadsheets.values.batchGetByDataFilter': {
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
        /** @description The ID of the spreadsheet to retrieve data from. */
        spreadsheetId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['BatchGetValuesByDataFilterRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BatchGetValuesByDataFilterResponse']
        }
      }
    }
  }
  'sheets.spreadsheets.values.batchUpdate': {
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
        /** @description The ID of the spreadsheet to update. */
        spreadsheetId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['BatchUpdateValuesRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BatchUpdateValuesResponse']
        }
      }
    }
  }
  'sheets.spreadsheets.values.batchUpdateByDataFilter': {
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
        /** @description The ID of the spreadsheet to update. */
        spreadsheetId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['BatchUpdateValuesByDataFilterRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BatchUpdateValuesByDataFilterResponse']
        }
      }
    }
  }
  'sheets.spreadsheets.batchUpdate': {
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
        /** @description The spreadsheet to apply the updates to. */
        spreadsheetId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['BatchUpdateSpreadsheetRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['BatchUpdateSpreadsheetResponse']
        }
      }
    }
  }
  'sheets.spreadsheets.getByDataFilter': {
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
        /** @description The spreadsheet to request. */
        spreadsheetId: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': components['schemas']['GetSpreadsheetByDataFilterRequest']
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Spreadsheet']
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
