export interface paths {
  '/integrations/': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get: operations['Request All Merge Integrations']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/organizations/integrations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get: operations["Request My Organization's Enabled Integrations"]
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
    get: operations['Request Account Token']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/create-link-token': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post: operations['Create Link Token']
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
    integration: {
      name: string
      slug: string
      image: string
      square_image: string
      color: string
      categories: components['schemas']['category'][]
    }
    /** @enum {string} */
    category:
      | 'hris'
      | 'ats'
      | 'accounting'
      | 'ticketing'
      | 'crm'
      | 'mktg'
      | 'filestorage'
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  'Request All Merge Integrations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': unknown
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['integration'][]
        }
      }
    }
  }
  "Request My Organization's Enabled Integrations": {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': unknown
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            next?: string | null
            previous?: string | null
            results: components['schemas']['integration'][]
          }
        }
      }
    }
  }
  'Request Account Token': {
    parameters: {
      query?: never
      header?: never
      path: {
        public_token: string
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': unknown
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            account_token: string
            integration: components['schemas']['integration']
          }
        }
      }
    }
  }
  'Create Link Token': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          end_user_origin_id: string
          end_user_organization_name: string
          end_user_email_address: string
          categories: components['schemas']['category'][]
          integration?: string | null
        }
      }
    }
    responses: {
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            link_token: string
            integration_name?: string | null
          }
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
