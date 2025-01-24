export interface paths {
  '/health': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Health check */
    get: operations['health']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/clerk-testing-token': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Create clerk testing token */
    get: operations['createClerkTestingToken']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/connect/token': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Create connect token */
    post: operations['createConnectToken']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/connect/magic-link': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Create magic link */
    post: operations['createMagicLink']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/connect/file-picker': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Create file picker link */
    post: operations['createFilePickerLink']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/customer/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /** Upsert customer */
    put: operations['upsertCustomer']
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
    /** Passthrough */
    post: operations['passthrough']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/connection/{id}/source_sync': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Source sync
     * @description Return records that would have otherwise been emitted during a sync and return it instead
     */
    post: operations['sourceSync']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/connection': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List connections */
    get: operations['listConnection']
    put?: never
    /** Create connection */
    post: operations['createConnection']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/connection/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get connection */
    get: operations['getConnection']
    put?: never
    post?: never
    /** Delete connection */
    delete: operations['deleteConnection']
    options?: never
    head?: never
    /** Update connection */
    patch: operations['updateConnection']
    trace?: never
  }
  '/core/connection/{id}/_check': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Check connection */
    post: operations['checkConnection']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/connection/{id}/_sync': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Sync connection */
    post: operations['syncConnection']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/connector_config': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Admin list connector configs */
    get: operations['adminListConnectorConfigs']
    put?: never
    /** Admin upsert connector config */
    post: operations['adminUpsertConnectorConfig']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/connector_config/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Admin get connector config */
    get: operations['adminGetConnectorConfig']
    put?: never
    post?: never
    /** Admin delete connector config */
    delete: operations['adminDeleteConnectorConfig']
    options?: never
    head?: never
    /** Admin update connector config */
    patch: operations['adminUpdateConnectorConfig']
    trace?: never
  }
  '/core/connector_config_info': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List connector config infos
     * @description For customer authentication and list a limited set of non private data
     */
    get: operations['listConnectorConfigInfos']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/connector': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * List connector metas
     * @description Get catalog of all available connectors
     */
    get: operations['listConnectorMetas']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/connector/{name}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get connector meta */
    get: operations['getConnectorMeta']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/connector/{name}/oas': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get connector open api spec */
    get: operations['getConnectorOpenApiSpec']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/connector/{name}/schemas': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get connector schemas */
    get: operations['getConnectorSchemas']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/connector/{name}/integrations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List connector integrations */
    get: operations['listConnectorIntegrations']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/configured_integrations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List configured integrations */
    get: operations['listConfiguredIntegrations']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/pipeline': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List pipelines */
    get: operations['listPipelines']
    put?: never
    /** Create pipeline */
    post: operations['createPipeline']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/pipeline/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** Delete pipeline */
    delete: operations['deletePipeline']
    options?: never
    head?: never
    /** Update pipeline */
    patch: operations['updatePipeline']
    trace?: never
  }
  '/core/pipeline/{id}/_sync': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Sync pipeline */
    post: operations['syncPipeline']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/core/events': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List events */
    get: operations['listEvents']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/viewer': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get current viewer accessing the API */
    get: operations['getViewer']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/viewer/organization': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get current organization of viewer accessing the API */
    get: operations['getCurrentOrganization']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /** Update current organization */
    patch: operations['updateCurrentOrganization']
    trace?: never
  }
  '/openapi.json': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get openapi document */
    get: operations['public-getOpenapiDocument']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/sales-engagement/contact': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Contacts */
    get: operations['salesEngagement-listContacts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/sales-engagement/sequence': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Sequences */
    get: operations['salesEngagement-listSequences']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/sales-engagement/sequence_state': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Sequence States */
    get: operations['salesEngagement-listSequenceStates']
    put?: never
    /** Insert Sequence State */
    post: operations['salesEngagement-insertSequenceState']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/sales-engagement/user': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Users */
    get: operations['salesEngagement-listUsers']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/sales-engagement/account': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Accounts */
    get: operations['salesEngagement-listAccounts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/sales-engagement/mailbox': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Mailboxes */
    get: operations['salesEngagement-listMailboxes']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/sales-engagement/account/_upsert': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Upsert Account */
    post: operations['salesEngagement-upsertAccount']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/sales-engagement/contact/_upsert': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Upsert Contact */
    post: operations['salesEngagement-upsertContact']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/{entity}/_count': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Count Entities */
    get: operations['crm-countEntity']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/account': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Accounts */
    get: operations['crm-listAccounts']
    put?: never
    /** Create account */
    post: operations['crm-createAccount']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/account/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get Account */
    get: operations['crm-getAccount']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /** Update account */
    patch: operations['crm-updateAccount']
    trace?: never
  }
  '/unified/crm/account/_batch_read': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Batch read accounts */
    post: operations['crm-batchReadAccounts']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/account/_upsert': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Upsert account */
    post: operations['crm-upsertAccount']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/contact': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Contacts */
    get: operations['crm-listContacts']
    put?: never
    /** Create contact */
    post: operations['crm-createContact']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/contact/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get Contact */
    get: operations['crm-getContact']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /** Update contact */
    patch: operations['crm-updateContact']
    trace?: never
  }
  '/unified/crm/contact/_batch_read': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Batch read contacts */
    post: operations['crm-batchReadContacts']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/contact/_upsert': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Upsert contact */
    post: operations['crm-upsertContact']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/lead': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Leads */
    get: operations['crm-listLeads']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/lead/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get Lead */
    get: operations['crm-getLead']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/opportunity': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Opportunities */
    get: operations['crm-listOpportunities']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/opportunity/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get Opportunity */
    get: operations['crm-getOpportunity']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/note': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List notes */
    get: operations['crm-listNotes']
    put?: never
    /** Create note */
    post: operations['crm-createNote']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/user': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List users */
    get: operations['crm-listUsers']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/user/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get user */
    get: operations['crm-getUser']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/custom_objects/{object_name}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List custom object records */
    get: operations['crm-listCustomObjectRecords']
    put?: never
    /** Create custom object record */
    post: operations['crm-createCustomObjectRecord']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/metadata/objects': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Metadata list objects */
    get: operations['crm-metadataListObjects']
    put?: never
    /**
     * Metadata create object
     * @description Create custom object schema
     */
    post: operations['crm-metadataCreateObject']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/metadata/objects/{object_name}/properties': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Metadata list object properties */
    get: operations['crm-metadataListObjectProperties']
    put?: never
    /** Metadata create object property */
    post: operations['crm-metadataCreateObjectProperty']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/crm/metadata/associations': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Metadata create association */
    post: operations['crm-metadataCreateAssociation']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/banking/account': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Accounts */
    get: operations['banking-listAccounts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/banking/merchant': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Merchants */
    get: operations['banking-listMerchants']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/banking/category': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Categories */
    get: operations['banking-listCategories']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/banking/transaction': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Transactions */
    get: operations['banking-listTransactions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/accounting/account': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Account */
    get: operations['accounting-listAccounts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/accounting/expense': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Expenses */
    get: operations['accounting-listExpenses']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/accounting/vendor': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Vendors */
    get: operations['accounting-listVendors']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/accounting/balance-sheet': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get Balance Sheet */
    get: operations['accounting-getBalanceSheet']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/accounting/profit-and-loss': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get Profit and Loss */
    get: operations['accounting-getProfitAndLoss']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/accounting/cash-flow': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get Cash Flow */
    get: operations['accounting-getCashFlow']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/accounting/transaction-list': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get Transaction List */
    get: operations['accounting-getTransactionList']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/accounting/customer-balance': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get Customer Balance */
    get: operations['accounting-getCustomerBalance']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/accounting/customer-income': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get Customer Income */
    get: operations['accounting-getCustomerIncome']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/accounting/bank-accounts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get Bank Accounts */
    get: operations['accounting-getBankAccounts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/accounting/payment-receipt': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get Payment Receipts */
    get: operations['accounting-getPaymentReceipts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/pta/account': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Accounts */
    get: operations['pta-listAccounts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/pta/transaction': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Transactions */
    get: operations['pta-listTransactions']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/pta/commodity': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Commodities */
    get: operations['pta-listCommodities']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/ats/job': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Jobs */
    get: operations['ats-listJobs']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/ats/job/{jobId}/opening': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Job Openings */
    get: operations['ats-listJobOpenings']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/ats/offer': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Offers */
    get: operations['ats-listOffers']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/ats/candidate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Candidates */
    get: operations['ats-listCandidates']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/ats/department': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Departments */
    get: operations['ats-listDepartments']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/hris/individual': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List Individuals */
    get: operations['hris-listIndividual']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/sync/read/{stream}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Read Stream */
    get: operations['sync-readStream']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/sync/discover': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Discover */
    get: operations['sync-discover']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/sync/read': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Read Data */
    post: operations['sync-read']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/sync/write': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** Write Data */
    post: operations['sync-write']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/file-storage/drive-groups': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List drive groups */
    get: operations['fileStorage-listDriveGroups']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/file-storage/drives': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List drives */
    get: operations['fileStorage-listDrives']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/file-storage/files': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List files */
    get: operations['fileStorage-listFiles']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/file-storage/files/{id}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get file */
    get: operations['fileStorage-getFile']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/file-storage/files/{id}/export': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Export file */
    get: operations['fileStorage-exportFile']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/file-storage/files/{id}/download': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Download file */
    get: operations['fileStorage-downloadFile']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/unified/file-storage/folders': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** List folders */
    get: operations['fileStorage-listFolders']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export interface webhooks {
  'sync.completed': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          'application/json': components['schemas']['webhooks.sync.completed']
        }
      }
      responses: never
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  pageview: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          'application/json': components['schemas']['webhooks.pageview']
        }
      }
      responses: never
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export interface components {
  schemas: {
    'webhooks.sync.completed': {
      data: {
        /** @description Must start with 'pipe_' */
        pipeline_id: string
        /** @description Must start with 'conn_' */
        source_id: string
        /** @description Must start with 'conn_' */
        destination_id: string
      }
      /** @enum {string} */
      name: 'sync.completed'
      id?: string
    }
    'webhooks.pageview': {
      data: {
        current_url: string
        path: string
      }
      /** @enum {string} */
      name: 'pageview'
      id?: string
    }
    /**
     * Error
     * @description The error information
     * @example {
     *       "code": "BAD_REQUEST",
     *       "message": "Invalid input data",
     *       "issues": []
     *     }
     */
    'error.BAD_REQUEST': {
      /**
       * @description The error message
       * @example Invalid input data
       */
      message: string
      /**
       * @description The error code
       * @example BAD_REQUEST
       */
      code: string
      /**
       * @description An array of issues that were responsible for the error
       * @example []
       */
      issues?: {
        message: string
      }[]
    }
    /**
     * Error
     * @description The error information
     * @example {
     *       "code": "NOT_FOUND",
     *       "message": "Not found",
     *       "issues": []
     *     }
     */
    'error.NOT_FOUND': {
      /**
       * @description The error message
       * @example Not found
       */
      message: string
      /**
       * @description The error code
       * @example NOT_FOUND
       */
      code: string
      /**
       * @description An array of issues that were responsible for the error
       * @example []
       */
      issues?: {
        message: string
      }[]
    }
    /**
     * Error
     * @description The error information
     * @example {
     *       "code": "INTERNAL_SERVER_ERROR",
     *       "message": "Internal server error",
     *       "issues": []
     *     }
     */
    'error.INTERNAL_SERVER_ERROR': {
      /**
       * @description The error message
       * @example Internal server error
       */
      message: string
      /**
       * @description The error code
       * @example INTERNAL_SERVER_ERROR
       */
      code: string
      /**
       * @description An array of issues that were responsible for the error
       * @example []
       */
      issues?: {
        message: string
      }[]
    }
    Connection: {
      createdAt: string
      updatedAt: string
      /** @description Must start with 'conn_' */
      id: string
      /** @description Unique name of the connector */
      connectorName: string
      displayName?: string | null
      customerId?: string | null
      /** @description Must start with 'ccfg_' */
      connectorConfigId: string
      /** @description Must start with 'int_' */
      integrationId?: string | null
      settings?: {
        [key: string]: unknown
      } | null
      standard?: {
        displayName?: string | null
        /** @enum {string|null} */
        status?: 'healthy' | 'disconnected' | 'error' | 'manual' | null
        statusMessage?: string | null
        labels?: string[]
      } | null
      disabled?: boolean
      /** @description
       *       JSON object can can be used to associate arbitrary metadata to
       *       avoid needing a separate 1-1 table just for simple key values in your application.
       *       During updates this object will be shallowly merged
       *      */
      metadata?: unknown
    }
    ConnectorConfig: {
      createdAt: string
      updatedAt: string
      /** @description Must start with 'ccfg_' */
      id: string
      connectorName: string
      config?: {
        [key: string]: unknown
      } | null
      /** @description Must start with 'org_' */
      orgId: string
      displayName?: string | null
      /**
       * Disabled
       * @description When disabled it will not be used for connection portal. Essentially a reversible soft-delete
       */
      disabled?: boolean
      /** @description Automatically sync data from any connections associated with this config to the destination connection, which is typically a Postgres database. Think ETL */
      defaultPipeOut?: {
        streams?: {
          [key: string]: boolean
        } | null
        /** @description Array of transformations that the data gets piped through on the way out. Typically used for things like unification / normalization. */
        links?: components['schemas']['Link'][] | null
        /** @description Defaults to the org-wide postgres */
        destination_id?: string
      } | null
      /** @description Automatically sync data from any connections associated with this config to the destination connection, which is typically a Postgres database. Think ETL */
      defaultPipeIn?: {
        /** @description Array of transformations that the data gets piped through on the way out. Typically used for things like unification / normalization. */
        links?: components['schemas']['Link'][] | null
        /** @description Must start with 'conn_' */
        source_id: string
      } | null
      envName?: string | null
      /** @description
       *       JSON object can can be used to associate arbitrary metadata to
       *       avoid needing a separate 1-1 table just for simple key values in your application.
       *       During updates this object will be shallowly merged
       *      */
      metadata?: unknown
    }
    /** @enum {string} */
    Link:
      | 'unified_banking'
      | 'prefix_connector_name'
      | 'single_table'
      | 'unified_ats'
      | 'unified_crm'
      | 'custom_link_ag'
    'core.integration': {
      id: string
      /** @description ISO8601 date string */
      updated_at?: string
      raw_data?: {
        [key: string]: unknown
      }
      name: string
      logo_url?: string | null
      login_url?: string | null
      verticals?:
        | (
            | 'banking'
            | 'accounting'
            | 'crm'
            | 'sales-engagement'
            | 'engagement'
            | 'commerce'
            | 'expense-management'
            | 'enrichment'
            | 'database'
            | 'flat-files-and-spreadsheets'
            | 'file-storage'
            | 'streaming'
            | 'personal-finance'
            | 'other'
            | 'hris'
            | 'payroll'
            | 'calendar'
            | 'ats'
            | 'email'
          )[]
        | null
      connector_name: string
    }
    'core.configured_integration': {
      /** @description Must start with 'ccfg_' */
      connector_config_id: string
    } & components['schemas']['core.integration']
    Pipeline: {
      createdAt: string
      updatedAt: string
      /** @description Must start with 'pipe_' */
      id: string
      /** @description Must start with 'conn_' */
      sourceId?: string
      sourceState?: {
        [key: string]: unknown
      }
      sourceVertical?: string | null
      streams?: {
        [key: string]: {
          disabled?: boolean
          fields?: string[]
        }
      } | null
      /** @description Must start with 'conn_' */
      destinationId?: string
      destinationState?: {
        [key: string]: unknown
      }
      destinationVertical?: string | null
      linkOptions?: unknown[] | null
      lastSyncStartedAt?: string | null
      lastSyncCompletedAt?: string | null
      disabled?: boolean
      /** @description
       *       JSON object can can be used to associate arbitrary metadata to
       *       avoid needing a separate 1-1 table just for simple key values in your application.
       *       During updates this object will be shallowly merged
       *      */
      metadata?: unknown
    }
    Event: {
      /** @description Must start with 'evt_' */
      id: string
      name: string
      data?: {
        [key: string]: unknown
      } | null
      timestamp: string
      user?: {
        [key: string]: unknown
      } | null
      /** @description Must start with 'org_' */
      org_id?: string | null
      customer_id?: string | null
      /** @description Must start with 'user_' */
      user_id?: string | null
    }
    Viewer:
      | {
          /** @enum {string} */
          role: 'anon'
        }
      | {
          /** @enum {string} */
          role: 'customer'
          customerId: string
          /** @description Must start with 'org_' */
          orgId: string
        }
      | {
          /** @enum {string} */
          role: 'user'
          /** @description Must start with 'user_' */
          userId: string
          /** @description Must start with 'org_' */
          orgId?: string | null
          /** @description Currently clerk user */
          extra?: {
            [key: string]: unknown
          }
        }
      | {
          /** @enum {string} */
          role: 'org'
          /** @description Must start with 'org_' */
          orgId: string
          /** @description Currently clerk organization */
          extra?: {
            [key: string]: unknown
          }
        }
      | {
          /** @enum {string} */
          role: 'system'
        }
    'sales-engagement.contact': {
      id: string
      first_name: string
      last_name: string
      owner_id: string
      account_id?: string
      job_title: string
      address: components['schemas']['sales-engagement.address']
      email_addresses: components['schemas']['sales-engagement.email_address'][]
      phone_numbers: components['schemas']['sales-engagement.phone_number'][]
      open_count: number
      click_count: number
      reply_count: number
      bounced_count: number
      created_at: string
      updated_at: string
      is_deleted: boolean
      last_modified_at: string
      raw_data?: {
        [key: string]: unknown
      }
    }
    'sales-engagement.address': {
      city: string
      country: string
      postal_code: string
      state: string
      street_1: string
      street_2: string
    }
    'sales-engagement.email_address': {
      email_address: string
      /** @enum {string} */
      email_address_type: 'primary' | 'personal' | 'work' | 'other'
    }
    'sales-engagement.phone_number': {
      phone_number: string
      /** @enum {string} */
      phone_number_type: 'primary' | 'work' | 'home' | 'mobile' | 'other'
    }
    'sales-engagement.sequence': {
      id: string
      name?: string
      created_at: string
      updated_at: string
      is_deleted: boolean
      last_modified_at: string
      owner_id: string
      tags: string[]
      num_steps: number
      metrics?: {
        [key: string]: unknown
      }
      is_enabled: boolean
      raw_data?: {
        [key: string]: unknown
      }
    }
    'sales-engagement.sequenceState': {
      id: string
      state: string
      created_at: string
      updated_at: string
      is_deleted: boolean
      last_modified_at: string
      sequence_id: string
      contact_id: string
      mailbox_id: string
      user_id: string
      raw_data?: {
        [key: string]: unknown
      }
    }
    'sales-engagement.user': {
      id: string
      first_name: string
      last_name: string
      email: string
      created_at: string
      updated_at: string
      is_deleted: boolean
      last_modified_at: string
      raw_data?: {
        [key: string]: unknown
      }
    }
    'sales-engagement.account': {
      id: string
      name: string
      created_at: string
      updated_at: string
      is_deleted: boolean
      last_modified_at: string
      domain: string
      owner_id: string
      raw_data?: {
        [key: string]: unknown
      }
    }
    'sales-engagement.mailbox': {
      id: string
      email: string
      created_at: string
      updated_at: string
      is_deleted: boolean
      last_modified_at: string
      user_id: string
      raw_data?: {
        [key: string]: unknown
      }
    }
    'crm.account': {
      id: string
      /** @description ISO8601 date string */
      updated_at: string
      raw_data?: {
        [key: string]: unknown
      }
      name?: string | null
      is_deleted?: boolean | null
      website?: string | null
      industry?: string | null
      number_of_employees?: number | null
      owner_id?: string | null
      created_at?: string | null
      /** @example Integration API */
      description?: string | null
      /** @description date-time */
      last_activity_at?: string | null
      addresses?: components['schemas']['crm.address'][] | null
      phone_numbers?:
        | {
            phone_number: string | null
            phone_number_type: components['schemas']['crm.phone_number_type']
          }[]
        | null
      lifecycle_stage?: components['schemas']['crm.lifecycle_stage'] | null
      last_modified_at?: string | null
    }
    'crm.address': {
      address_type: components['schemas']['crm.address_type']
      city: string | null
      country: string | null
      postal_code: string | null
      state: string | null
      street_1: string | null
      street_2: string | null
    }
    /** @enum {string} */
    'crm.address_type': 'primary' | 'mailing' | 'other' | 'billing' | 'shipping'
    /** @enum {string} */
    'crm.phone_number_type': 'primary' | 'mobile' | 'fax' | 'other'
    /** @enum {string} */
    'crm.lifecycle_stage':
      | 'subscriber'
      | 'lead'
      | 'marketingqualifiedlead'
      | 'salesqualifiedlead'
      | 'opportunity'
      | 'customer'
      | 'evangelist'
      | 'other'
    'crm.account_input': {
      /** @example Integration API */
      description?: string | null
      industry?: string | null
      name?: string | null
      number_of_employees?: number | null
      website?: string | null
      addresses?: components['schemas']['crm.address'][] | null
      phone_numbers?:
        | {
            phone_number: string | null
            phone_number_type: components['schemas']['crm.phone_number_type']
          }[]
        | null
      owner_id?: string | null
      lifecycle_stage?: components['schemas']['crm.lifecycle_stage'] | null
      passthrough_fields?: {
        [key: string]: unknown
      } | null
    }
    'crm.contact': {
      id: string
      /** @description ISO8601 date string */
      updated_at: string
      raw_data?: {
        [key: string]: unknown
      }
      first_name?: string | null
      last_name?: string | null
      /** @description Primary email address */
      email?: string | null
      /** @description Primary phone number */
      phone?: string | null
    }
    'crm.contact_input': {
      first_name?: string | null
      last_name?: string | null
      /** @description Primary email address */
      email?: string | null
      /** @description Primary phone number */
      phone?: string | null
      passthrough_fields?: {
        [key: string]: unknown
      } | null
    }
    'crm.lead': {
      id: string
      /** @description ISO8601 date string */
      updated_at: string
      raw_data?: {
        [key: string]: unknown
      }
      name?: string | null
      first_name?: string | null
      last_name?: string | null
      owner_id?: string | null
      title?: string | null
      company?: string | null
      converted_date?: string | null
      lead_source?: string | null
      converted_account_id?: string | null
      converted_contact_id?: string | null
      addresses?: components['schemas']['crm.address'][] | null
      email_addresses?: components['schemas']['crm.email_address'][] | null
      phone_numbers?:
        | {
            phone_number: string | null
            phone_number_type: components['schemas']['crm.phone_number_type']
          }[]
        | null
      created_at?: string | null
      is_deleted?: boolean | null
      last_modified_at?: string | null
    }
    'crm.email_address': {
      email_address: string
      email_address_type: components['schemas']['crm.email_address_type']
    }
    /** @enum {string} */
    'crm.email_address_type': 'primary' | 'work' | 'other'
    'crm.opportunity': {
      id: string
      /** @description ISO8601 date string */
      updated_at: string
      raw_data?: {
        [key: string]: unknown
      }
      name?: string | null
      description?: string | null
      owner_id?: string | null
      status?: components['schemas']['crm.opportunity_status'] | null
      stage?: string | null
      close_date?: string | null
      account_id?: string | null
      pipeline?: string | null
      amount?: number | null
      last_activity_at?: string | null
      created_at?: string | null
      is_deleted?: boolean | null
      last_modified_at?: string | null
    }
    /** @enum {string} */
    'crm.opportunity_status': 'OPEN' | 'WON' | 'LOST'
    'crm.note': {
      id: string
      /** @description ISO8601 date string */
      updated_at: string
      raw_data?: {
        [key: string]: unknown
      }
      content?: string | null
    }
    'crm.note_input': {
      content?: string | null
      passthrough_fields?: {
        [key: string]: unknown
      } | null
      /** @description The ID of the company to associate the note to. */
      account_id?: string
    }
    'crm.user': {
      id: string
      /** @description ISO8601 date string */
      updated_at: string
      raw_data?: {
        [key: string]: unknown
      }
      name?: string | null
      email?: string | null
      is_active?: boolean | null
      created_at?: string | null
      is_deleted?: boolean | null
      last_modified_at?: string | null
    }
    warning: {
      title?: string
      problem_type?: string
      detail?: string
    }
    'crm.meta.object': {
      id: string
      name: string
    }
    'crm.meta.custom_object_field': {
      /** @description The machine name of the property as it appears in the third-party Provider. In Salesforce, this must end with `__c`. */
      id: string
      /** @description The human-readable name of the property as provided by the third-party Provider. */
      label: string
      /** @description A description of the field. */
      description?: string
      /** @description Whether or not this field is required. Must be false for Salesforce boolean fields. */
      is_required?: boolean
      /** @description The default value for the property. Only supported for Salesforce. */
      default_value?: string | number | boolean
      /**
       * @description Only applicable for Hubspot. If specified, OpenInt will attempt to attach the field to this group if it exists, or create it if it doesn't.
       * @example my group
       */
      group_name?: string
      type: components['schemas']['crm.meta.property_type']
      /** @description Only applicable in Salesforce. If not given, will default to 18. */
      precision?: number
      /** @description Only applicable in Salesforce. If not given, will default to 0. */
      scale?: number
      /** @description The list of options for a picklist/multipicklist field. */
      options?: components['schemas']['crm.meta.pick_list_option'][]
      /** @description The raw details of the property as provided by the third-party Provider, if available. */
      raw_details?: {
        [key: string]: unknown
      }
    }
    /**
     * @description :::note
     *     `picklist` and `multipicklist` property types are currently only supported in Salesforce and Hubspot
     *     :::
     *
     *     :::note
     *     `url` property type currently is only natively supported in Salesforce.
     *     :::
     * @enum {string}
     */
    'crm.meta.property_type':
      | 'text'
      | 'textarea'
      | 'number'
      | 'picklist'
      | 'multipicklist'
      | 'date'
      | 'datetime'
      | 'boolean'
      | 'url'
      | 'other'
    'crm.meta.pick_list_option': {
      /** @example Option 1 */
      label: string
      /** @example option_1 */
      value: string
      description?: string
      /** @description Defaults to false. */
      hidden?: boolean
    }
    'crm.meta.property': {
      /**
       * @description The machine name of the property as it appears in the third-party Provider
       * @example FirstName
       */
      id: string
      /**
       * @description The human-readable name of the property as provided by the third-party Provider.
       * @example First Name
       */
      label: string
      /**
       * @description The type of the property as provided by the third-party Provider. These types are not unified by OpenInt. For Intercom, this is string, integer, boolean, or object. For Outreach, this is integer, boolean, number, array, or string.
       * @example string
       */
      type?: string
      /**
       * @description The raw details of the property as provided by the third-party Provider, if available.
       * @example {}
       */
      raw_details?: {
        [key: string]: unknown
      }
    }
    'crm.meta.association_schema': {
      id: string
      /** @example contact */
      source_object: string
      /** @example my_custom_object */
      target_object: string
      display_name: string
    }
    'banking.account': {
      id: string
      name: string
      current_balance?: number
      currency?: string
    }
    'banking.merchant': {
      id: string
      name: string
      url?: string | null
    }
    'banking.category': {
      id: string
      name: string
    }
    'banking.transaction': {
      id: string
      date: string
      description?: string | null
      category_id?: string | null
      category_name?: string | null
      amount: number
      currency: string
      merchant_id?: string | null
      merchant_name?: string | null
      account_id?: string | null
      account_name?: string | null
    }
    /** @description An (open) role */
    'ats.job': {
      id: string
      created_at: string
      modified_at: string
      name: string
      confidential: boolean
      departments: components['schemas']['ats.department'][]
      offices?:
        | {
            [key: string]: unknown
          }[]
        | null
      hiring_managers?: unknown
      recruiters?:
        | {
            [key: string]: unknown
          }[]
        | null
      raw_data?: {
        [key: string]: unknown
      }
    }
    /** @description A department in an organization */
    'ats.department': {
      id?: string | null
      created_at?: string | null
      modified_at?: string | null
      name?: string | null
      parent_id?: string | null
      parent_department_external_id?: string | null
      child_ids?: (string | null)[] | null
      child_department_external_ids?: (string | null)[] | null
      raw_data?: {
        [key: string]: unknown
      }
    }
    /** @description An opening for a job */
    'ats.opening': {
      id: string
      created_at: string
      modified_at: string
      status: string
      job_id: string
      raw_data?: {
        [key: string]: unknown
      }
    }
    /** @description An offer to a candidate */
    'ats.offer': {
      id: string
      created_at: string
      modified_at: string
      application?: string | null
      closed_at?: string | null
      sent_at?: string | null
      start_date?: string | null
      status?: string | null
      raw_data?: {
        [key: string]: unknown
      }
    }
    /** @description A candidate for a job */
    'ats.candidate': {
      id: string
      created_at?: string | null
      modified_at?: string | null
      name?: string | null
      first_name?: string | null
      last_name?: string | null
      company?: string | null
      title?: string | null
      last_interaction_at?: string | null
      is_private?: boolean | null
      can_email?: boolean | null
      locations?: unknown[] | null
      phone_numbers?:
        | {
            [key: string]: unknown
          }[]
        | null
      email_addresses?:
        | {
            [key: string]: unknown
          }[]
        | null
      tags?: string[] | null
      applications?: unknown[] | null
      attachments?: unknown[] | null
      raw_data?: {
        [key: string]: unknown
      }
    }
    /** @description A unified representation of a drive group */
    'unified.drivegroup': {
      id: string
      name: string
      description?: string | null
      updated_at?: string | null
      created_at?: string | null
      raw_data?: unknown
    }
    /** @description A unified representation of a storage drive */
    'unified.drive': {
      id: string
      name: string
      description?: string | null
      updated_at?: string | null
      created_at?: string | null
      raw_data?: unknown
    }
    /** @description A unified representation of a file */
    'unified.file': {
      id: string
      name?: string | null
      description?: string | null
      /** @enum {string} */
      type: 'file' | 'folder' | 'url'
      path?: string | null
      mime_type?: string | null
      downloadable: boolean
      size?: number | null
      permissions: {
        download: boolean
      }
      exportable: boolean
      export_formats?: string[] | null
      updated_at?: string | null
      created_at?: string | null
      raw_data?: unknown
    }
    /** @description A unified representation of a folder */
    'unified.folder': {
      id: string
      name: string
      description?: string | null
      path: string
      updated_at?: string | null
      created_at?: string | null
      raw_data?: unknown
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
  health: {
    parameters: {
      query?: {
        exp?: boolean
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
          'application/json': {
            healthy: boolean
            error?: string
            deps?: {
              nango: boolean
              inngest: boolean
              clerk: boolean
            }
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  createClerkTestingToken: {
    parameters: {
      query: {
        secret: string
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
          'application/json': {
            testing_token: string
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  createConnectToken: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Anything that uniquely identifies the customer that you will be sending the magic link to */
          customerId?: string
          /**
           * @description How long the magic link will be valid for (in seconds) before it expires
           * @default 2592000
           */
          validityInSeconds?: number
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            token: string
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  createMagicLink: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Anything that uniquely identifies the customer that you will be sending the magic link to */
          customerId?: string
          /**
           * @description How long the magic link will be valid for (in seconds) before it expires
           * @default 2592000
           */
          validityInSeconds?: number
          /** @description What to call user by */
          displayName?: string | null
          /** @description Where to send user to after connect / if they press back button */
          redirectUrl?: string | null
          /** @description Filter integrations by comma separated connector names */
          connectorNames?: string | null
          /** @description Filter integrations by comma separated integration ids */
          integrationIds?: string | null
          /** @description Filter managed connections by connection id */
          connectionId?: string | null
          /**
           * @description Magic Link display theme
           * @enum {string|null}
           */
          theme?: 'light' | 'dark' | null
          /**
           * @description Magic Link tab view
           * @enum {string|null}
           */
          view?: 'manage' | 'manage-deeplink' | 'add' | 'add-deeplink' | null
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            url: string
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  createFilePickerLink: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Anything that uniquely identifies the customer that you will be sending the magic link to */
          customerId?: string
          /**
           * @description How long the magic link will be valid for (in seconds) before it expires
           * @default 2592000
           */
          validityInSeconds?: number
          /** @enum {string|null} */
          theme?: 'light' | 'dark' | null
          multiSelect?: boolean | null
          folderSelect?: boolean | null
          themeColors?: {
            accent?: string | null
            background?: string | null
            border?: string | null
            button?: string | null
            buttonLight?: string | null
            buttonForeground?: string | null
            buttonHover?: string | null
            buttonStroke?: string | null
            buttonSecondary?: string | null
            buttonSecondaryForeground?: string | null
            buttonSecondaryStroke?: string | null
            buttonSecondaryHover?: string | null
            card?: string | null
            cardForeground?: string | null
            foreground?: string | null
            navbar?: string | null
            primary?: string | null
            primaryForeground?: string | null
            secondary?: string | null
            secondaryForeground?: string | null
            sidebar?: string | null
            tab?: string | null
          } | null
          connectionId: string
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            url: string
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  upsertCustomer: {
    parameters: {
      query?: never
      header?: never
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          metadata?: unknown
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            id: string
            orgId: string
            metadata?: unknown
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  passthrough: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @enum {string} */
          method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS'
          path: string
          query?: {
            [key: string]: unknown
          }
          headers?: {
            [key: string]: unknown
          }
          body?: {
            [key: string]: unknown
          }
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': unknown
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  sourceSync: {
    parameters: {
      query?: never
      header?: never
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          state?: {
            [key: string]: unknown
          }
          streams?: {
            [key: string]: boolean
          }
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            [key: string]: unknown
          }[]
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  listConnection: {
    parameters: {
      query?: {
        limit?: number
        offset?: number
        customerId?: string | null
        connectorConfigId?: string | null
        connectorName?: string | null
        forceRefresh?: boolean
        expand?: string
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
          'application/json': ({
            integration?: {
              /** @description Must start with 'int_' */
              id: string
              name: string
              /** Format: uri */
              logoUrl: string
            } | null
            connector?: {
              /** @description Must start with 'ccfg_' */
              id: string
              name: string
              /** Format: uri */
              logoUrl: string
            } | null
          } & components['schemas']['Connection'])[]
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  createConnection: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Must start with 'ccfg_' */
          connectorConfigId: string
          settings?: {
            [key: string]: unknown
          } | null
          displayName?: string | null
          customerId?: string | null
          disabled?: boolean
          /** @description
           *       JSON object can can be used to associate arbitrary metadata to
           *       avoid needing a separate 1-1 table just for simple key values in your application.
           *       During updates this object will be shallowly merged
           *      */
          metadata?: unknown
          /** @description Must start with 'int_' */
          integrationId?: string | null
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': string
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  getConnection: {
    parameters: {
      query?: {
        forceRefresh?: boolean
        expand?: string
      }
      header?: never
      path: {
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
          'application/json': {
            connector_config: {
              /** @description Must start with 'ccfg_' */
              id: string
              /** @description Must start with 'org_' */
              orgId: string
              connectorName: string
            }
            integration?: {
              /** @description Must start with 'int_' */
              id: string
              name: string
              /** Format: uri */
              logoUrl: string
            } | null
            connector?: {
              /** @description Must start with 'ccfg_' */
              id: string
              name: string
              /** Format: uri */
              logoUrl: string
            } | null
          } & components['schemas']['Connection']
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  deleteConnection: {
    parameters: {
      query?: {
        skipRevoke?: boolean
      }
      header?: never
      path: {
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
          'application/json': Record<string, never>
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  updateConnection: {
    parameters: {
      query?: never
      header?: never
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          settings?: {
            [key: string]: unknown
          } | null
          displayName?: string | null
          /** @description
           *       JSON object can can be used to associate arbitrary metadata to
           *       avoid needing a separate 1-1 table just for simple key values in your application.
           *       During updates this object will be shallowly merged
           *      */
          metadata?: unknown
          disabled?: boolean
          customerId?: string | null
          /** @description Must start with 'int_' */
          integrationId?: string | null
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Connection']
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  checkConnection: {
    parameters: {
      query?: never
      header?: never
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          skipCache?: boolean | null
          import?: boolean | null
          updateWebhook?: boolean | null
          sandboxSimulateUpdate?: boolean | null
          sandboxSimulateDisconnect?: boolean | null
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': unknown
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  syncConnection: {
    parameters: {
      query?: never
      header?: never
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Run sync in the background, not compatible with other options for now... */
          async?: boolean | null
          /** @description Only sync connection metadata and skip pipelines  */
          metaOnly?: boolean | null
          /** @description Remove `state` of pipeline and trigger a full resync */
          fullResync?: boolean | null
          /** @description
           *         Triggers provider to refresh data from its source
           *         https://plaid.com/docs/api/products/transactions/#transactionsrefresh
           *         This may also load historical transactions. For example,
           *         Finicity treats historical transaction as premium service.
           *        */
          todo_upstreamRefresh?: boolean | null
          /** @description
           *         See coda's implmementation. Requires adding a new message to the sync protocol
           *         to remove all data from a particular source_id */
          todo_removeUnsyncedData?: boolean | null
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            connection_requested_event_id?: string
            pipeline_syncs?: {
              pipeline_id: string
              sync_completed_event_id: string
            }[]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  adminListConnectorConfigs: {
    parameters: {
      query?: never
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
          'application/json': components['schemas']['ConnectorConfig'][]
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  adminUpsertConnectorConfig: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Must start with 'ccfg_' */
          id?: string
          connectorName?: string
          /** @description Must start with 'org_' */
          orgId: string
          config?: {
            [key: string]: unknown
          } | null
          displayName?: string | null
          /** @description Automatically sync data from any connections associated with this config to the destination connection, which is typically a Postgres database. Think ETL */
          defaultPipeOut?: {
            streams?: {
              [key: string]: boolean
            } | null
            /** @description Array of transformations that the data gets piped through on the way out. Typically used for things like unification / normalization. */
            links?: components['schemas']['Link'][] | null
            /** @description Defaults to the org-wide postgres */
            destination_id?: string
          } | null
          /** @description Automatically sync data from any connections associated with this config to the destination connection, which is typically a Postgres database. Think ETL */
          defaultPipeIn?: {
            /** @description Array of transformations that the data gets piped through on the way out. Typically used for things like unification / normalization. */
            links?: components['schemas']['Link'][] | null
            /** @description Must start with 'conn_' */
            source_id: string
          } | null
          /**
           * Disabled
           * @description When disabled it will not be used for connection portal. Essentially a reversible soft-delete
           */
          disabled?: boolean
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ConnectorConfig']
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  adminGetConnectorConfig: {
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
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ConnectorConfig']
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  adminDeleteConnectorConfig: {
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
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': unknown
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  adminUpdateConnectorConfig: {
    parameters: {
      query?: never
      header?: never
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description
           *       JSON object can can be used to associate arbitrary metadata to
           *       avoid needing a separate 1-1 table just for simple key values in your application.
           *       During updates this object will be shallowly merged
           *      */
          metadata?: unknown
          displayName?: string | null
          /**
           * Disabled
           * @description When disabled it will not be used for connection portal. Essentially a reversible soft-delete
           */
          disabled?: boolean
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ConnectorConfig']
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  listConnectorConfigInfos: {
    parameters: {
      query?: {
        type?: 'source' | 'destination' | null
        id?: string | null
        connectorName?: string | null
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
          'application/json': {
            /** @description Must start with 'ccfg_' */
            id: string
            envName?: string | null
            displayName?: string | null
            connectorName: string
            isSource: boolean
            isDestination: boolean
            verticals: (
              | 'banking'
              | 'accounting'
              | 'crm'
              | 'sales-engagement'
              | 'engagement'
              | 'commerce'
              | 'expense-management'
              | 'enrichment'
              | 'database'
              | 'flat-files-and-spreadsheets'
              | 'file-storage'
              | 'streaming'
              | 'personal-finance'
              | 'other'
              | 'hris'
              | 'payroll'
              | 'calendar'
              | 'ats'
              | 'email'
            )[]
            integrations: string[]
          }[]
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  listConnectorMetas: {
    parameters: {
      query?: {
        includeOas?: boolean
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
          'application/json': unknown
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  getConnectorMeta: {
    parameters: {
      query?: {
        includeOas?: boolean
      }
      header?: never
      path: {
        name: string
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
          'application/json': unknown
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  getConnectorOpenApiSpec: {
    parameters: {
      query?: {
        original?: boolean
      }
      header?: never
      path: {
        name: string
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
          'application/json': unknown
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  getConnectorSchemas: {
    parameters: {
      query?: {
        type?: string
      }
      header?: never
      path: {
        name: string
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
          'application/json': unknown
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  listConnectorIntegrations: {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
        search_text?: string | null
        ccfgId?: string
      }
      header?: never
      path: {
        name: string
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['core.integration'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  listConfiguredIntegrations: {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
        search_text?: string
        connector_config_ids?: string[]
        connectorNames?: string[]
        integrationIds?: string[]
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['core.configured_integration'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  listPipelines: {
    parameters: {
      query?: {
        limit?: number
        offset?: number
        connectionIds?: string[]
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
          'application/json': components['schemas']['Pipeline'][]
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  createPipeline: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Must start with 'pipe_' */
          id: string
          /** @description
           *       JSON object can can be used to associate arbitrary metadata to
           *       avoid needing a separate 1-1 table just for simple key values in your application.
           *       During updates this object will be shallowly merged
           *      */
          metadata?: unknown
          disabled?: boolean
          /** @description Must start with 'conn_' */
          sourceId?: string
          streams?: {
            [key: string]: {
              disabled?: boolean
              fields?: string[]
            }
          } | null
          /** @description Must start with 'conn_' */
          destinationId?: string
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Pipeline']
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  deletePipeline: {
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
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': true
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  updatePipeline: {
    parameters: {
      query?: never
      header?: never
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description
           *       JSON object can can be used to associate arbitrary metadata to
           *       avoid needing a separate 1-1 table just for simple key values in your application.
           *       During updates this object will be shallowly merged
           *      */
          metadata?: unknown
          disabled?: boolean
          streams?: {
            [key: string]: {
              disabled?: boolean
              fields?: string[]
            }
          } | null
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Pipeline']
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  syncPipeline: {
    parameters: {
      query?: never
      header?: never
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /** @description Run sync in the background, not compatible with other options for now... */
          async?: boolean | null
          /** @description Only sync connection metadata and skip pipelines  */
          metaOnly?: boolean | null
          /** @description Remove `state` of pipeline and trigger a full resync */
          fullResync?: boolean | null
          /** @description
           *         Triggers provider to refresh data from its source
           *         https://plaid.com/docs/api/products/transactions/#transactionsrefresh
           *         This may also load historical transactions. For example,
           *         Finicity treats historical transaction as premium service.
           *        */
          todo_upstreamRefresh?: boolean | null
          /** @description
           *         See coda's implmementation. Requires adding a new message to the sync protocol
           *         to remove all data from a particular source_id */
          todo_removeUnsyncedData?: boolean | null
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': Record<string, never>
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  listEvents: {
    parameters: {
      query: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
        since: number
        customerId?: string | null
        name?: string | null
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['Event'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  getViewer: {
    parameters: {
      query?: never
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
          'application/json': components['schemas']['Viewer']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  getCurrentOrganization: {
    parameters: {
      query?: never
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
          'application/json': {
            /** @description Must start with 'org_' */
            id: string
            slug?: string | null
            publicMetadata: {
              /**
               * PostgreSQL Database URL
               * @description This is where data from connections are synced to by default
               * @example postgres://username:password@host:port/database
               */
              database_url?: string
              /**
               * Synced Data Schema
               * @description Postgres schema to pipe data synced from customer connections into. Defaults to "synced" if missing.
               */
              synced_data_schema?: string
              /**
               * Webhook URL
               * @description Events like sync.completed and connection.created can be sent to url of your choosing
               */
              webhook_url?: string
              /**
               * Migrate Tables
               * @description If enabled, table migrations will be run if needed when entities are persisted
               * @default true
               */
              migrate_tables: boolean
            }
          }
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  updateCurrentOrganization: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          publicMetadata: {
            /**
             * PostgreSQL Database URL
             * @description This is where data from connections are synced to by default
             * @example postgres://username:password@host:port/database
             */
            database_url?: string
            /**
             * Synced Data Schema
             * @description Postgres schema to pipe data synced from customer connections into. Defaults to "synced" if missing.
             */
            synced_data_schema?: string
            /**
             * Webhook URL
             * @description Events like sync.completed and connection.created can be sent to url of your choosing
             */
            webhook_url?: string
            /**
             * Migrate Tables
             * @description If enabled, table migrations will be run if needed when entities are persisted
             * @default true
             */
            migrate_tables?: boolean
          }
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            /** @description Must start with 'org_' */
            id: string
            slug?: string | null
            publicMetadata: {
              /**
               * PostgreSQL Database URL
               * @description This is where data from connections are synced to by default
               * @example postgres://username:password@host:port/database
               */
              database_url?: string
              /**
               * Synced Data Schema
               * @description Postgres schema to pipe data synced from customer connections into. Defaults to "synced" if missing.
               */
              synced_data_schema?: string
              /**
               * Webhook URL
               * @description Events like sync.completed and connection.created can be sent to url of your choosing
               */
              webhook_url?: string
              /**
               * Migrate Tables
               * @description If enabled, table migrations will be run if needed when entities are persisted
               * @default true
               */
              migrate_tables: boolean
            }
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'public-getOpenapiDocument': {
    parameters: {
      query?: never
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
          'application/json': unknown
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-listContacts': {
    parameters: {
      query?: {
        cursor?: string | null
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
          'application/json': {
            next_page_cursor?: string | null
            items: components['schemas']['sales-engagement.contact'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-listSequences': {
    parameters: {
      query?: {
        cursor?: string | null
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
          'application/json': {
            next_page_cursor?: string | null
            items: components['schemas']['sales-engagement.sequence'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-listSequenceStates': {
    parameters: {
      query?: {
        cursor?: string | null
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
          'application/json': {
            next_page_cursor?: string | null
            items: components['schemas']['sales-engagement.sequenceState'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-insertSequenceState': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          record: {
            /** @example 9f3e97fd-4d5d-4efc-959d-bbebfac079f5 */
            contact_id: string
            /** @example ae4be028-9078-4850-a0bf-d2112b7c4d11 */
            mailbox_id: string
            /** @example b854e510-1c40-4ef6-ade4-8eb35f49d331 */
            sequence_id: string
            /** @example c590dc63-8e43-48a4-8154-1fbb00ac936b */
            user_id?: string | null
          }
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record?: {
              id: string
            }
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-listUsers': {
    parameters: {
      query?: {
        cursor?: string | null
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
          'application/json': {
            next_page_cursor?: string | null
            items: components['schemas']['sales-engagement.user'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-listAccounts': {
    parameters: {
      query?: {
        cursor?: string | null
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
          'application/json': {
            next_page_cursor?: string | null
            items: components['schemas']['sales-engagement.account'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-listMailboxes': {
    parameters: {
      query?: {
        cursor?: string | null
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
          'application/json': {
            next_page_cursor?: string | null
            items: components['schemas']['sales-engagement.mailbox'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-upsertAccount': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          record: {
            /** @example My Company */
            name?: string | null
            /** @example mycompany.com */
            domain?: string | null
            /** @example 9f3e97fd-4d5d-4efc-959d-bbebfac079f5 */
            owner_id?: string | null
            /** @example ae4be028-9078-4850-a0bf-d2112b7c4d11 */
            account_id?: string | null
            custom_fields?: {
              [key: string]: unknown
            } | null
          }
          upsert_on: {
            /** @description The name of the account to upsert on. Supported for Outreach, Salesloft, and Apollo. */
            name?: string
            /** @description The domain of the account to upsert on. Only supported for Outreach and Salesloft. */
            domain?: string
          }
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record?: {
              id: string
            }
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-upsertContact': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          record: {
            /** @example James */
            first_name?: string | null
            /** @example Smith */
            last_name?: string | null
            /** @example CEO */
            job_title?: string | null
            /** @example {
             *       "city": "San Francisco",
             *       "country": "US",
             *       "postal_code": "94107",
             *       "state": "CA",
             *       "street_1": "525 Brannan",
             *       "street_2": null
             *     } */
            address: {
              city?: string | null
              country?: string | null
              postal_code?: string | null
              state?: string | null
              street_1?: string | null
              street_2?: string | null
            }
            /** @example [
             *       {
             *         "email_address": "hello@revtron.ai",
             *         "email_address_type": "work"
             *       }
             *     ] */
            email_addresses: {
              email_address: string
              /** @enum {string|null} */
              email_address_type?: 'primary' | 'personal' | 'work' | null
            }[]
            /** @example [
             *       {
             *         "phone_number": "+14151234567",
             *         "phone_number_type": "work"
             *       }
             *     ] */
            phone_numbers: {
              phone_number: string
              /** @enum {string} */
              phone_number_type:
                | 'primary'
                | 'work'
                | 'home'
                | 'mobile'
                | 'other'
            }[]
            /** @example 9f3e97fd-4d5d-4efc-959d-bbebfac079f5 */
            owner_id?: string | null
            /** @example ae4be028-9078-4850-a0bf-d2112b7c4d11 */
            account_id?: string | null
            custom_fields?: {
              [key: string]: unknown
            } | null
          }
          upsert_on: {
            /** @description Contact email to upsert on. Supported for Outreach, Salesloft, and Apollo. */
            email?: string
          }
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record?: {
              id: string
            }
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-countEntity': {
    parameters: {
      query?: never
      header?: never
      path: {
        entity: string
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
          'application/json': {
            count: number
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-listAccounts': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['crm.account'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-createAccount': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          record: components['schemas']['crm.account_input']
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: components['schemas']['crm.account']
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-getAccount': {
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
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: components['schemas']['crm.account']
            raw?: unknown
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-updateAccount': {
    parameters: {
      query?: never
      header?: never
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          record: components['schemas']['crm.account_input']
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: components['schemas']['crm.account']
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-batchReadAccounts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          ids: string[]
          properties: string[]
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['crm.account'][]
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-upsertAccount': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          upsert_on: {
            /**
             * @description The key to upsert on. Only `website` is supported for Salesforce, while both `domain` and `website` are supported for Hubspot.
             * @enum {string}
             */
            key: 'domain' | 'website'
            /** @description The values to upsert on. If more than one value is provided, it will act as a logical OR. If more than one account is found that matches, then an error will be thrown. */
            values: string[]
          }
          record: components['schemas']['crm.account_input']
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: components['schemas']['crm.account']
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-listContacts': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['crm.contact'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-createContact': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          record: components['schemas']['crm.contact_input']
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: components['schemas']['crm.contact']
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-getContact': {
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
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: components['schemas']['crm.contact']
            raw?: unknown
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-updateContact': {
    parameters: {
      query?: never
      header?: never
      path: {
        id: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          record: components['schemas']['crm.contact_input']
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: components['schemas']['crm.contact']
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-batchReadContacts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          ids: string[]
          properties: string[]
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['crm.contact'][]
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-upsertContact': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          upsert_on: {
            /**
             * @description The key to upsert on. Only `email` is supported for all providers.
             * @enum {string}
             */
            key: 'email'
            /** @description The values to upsert on. If more than one value is provided, it will act as a logical OR. If more than one record is found that matches, then an error will be thrown. */
            values: string[]
          }
          record: components['schemas']['crm.contact_input']
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: components['schemas']['crm.contact']
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-listLeads': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['crm.lead'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-getLead': {
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
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: components['schemas']['crm.lead']
            raw?: unknown
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-listOpportunities': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['crm.opportunity'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-getOpportunity': {
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
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: components['schemas']['crm.opportunity']
            raw?: unknown
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-listNotes': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['crm.note'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-createNote': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          record: components['schemas']['crm.note_input']
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: components['schemas']['crm.note']
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-listUsers': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['crm.user'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-getUser': {
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
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: components['schemas']['crm.user']
            raw?: unknown
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-listCustomObjectRecords': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
      }
      header?: never
      path: {
        object_name: string
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: unknown[]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-createCustomObjectRecord': {
    parameters: {
      query?: never
      header?: never
      path: {
        object_name: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          record: {
            [key: string]: unknown
          }
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record?: unknown
            warnings?: components['schemas']['warning'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-metadataListObjects': {
    parameters: {
      query?: {
        type?: 'standard' | 'custom'
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
          'application/json': components['schemas']['crm.meta.object'][]
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-metadataCreateObject': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          name: string
          description: string | null
          labels: {
            singular: string
            plural: string
          }
          primary_field_id: string
          fields: components['schemas']['crm.meta.custom_object_field'][]
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['crm.meta.object']
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-metadataListObjectProperties': {
    parameters: {
      query?: never
      header?: never
      path: {
        object_name: string
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
          'application/json': components['schemas']['crm.meta.property'][]
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-metadataCreateObjectProperty': {
    parameters: {
      query?: never
      header?: never
      path: {
        object_name: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          /**
           * @description The machine name of the property as it appears in the third-party Provider
           * @example FirstName
           */
          id: string
          /**
           * @description The human-readable name of the property as provided by the third-party Provider.
           * @example First Name
           */
          label: string
          /**
           * @description The type of the property as provided by the third-party Provider. These types are not unified by OpenInt. For Intercom, this is string, integer, boolean, or object. For Outreach, this is integer, boolean, number, array, or string.
           * @example string
           */
          type?: string
          /**
           * @description The raw details of the property as provided by the third-party Provider, if available.
           * @example {}
           */
          raw_details?: {
            [key: string]: unknown
          }
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['crm.meta.property']
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-metadataCreateAssociation': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          source_object: string
          target_object: string
          /** @description The underlying provider may change this (e.g. adding `__c` for Salesforce). */
          suggested_key_name: string
          display_name: string
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            association_schema: components['schemas']['crm.meta.association_schema']
            warnings?: components['schemas']['warning'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'banking-listAccounts': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['banking.account'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'banking-listMerchants': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['banking.merchant'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'banking-listCategories': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['banking.category'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'banking-listTransactions': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['banking.transaction'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'accounting-listAccounts': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: {
              id: string
              number?: string | null
              name: string
              type: string
              subAccount?: boolean
              accountType?: string
              accountSubType?: string
              currentBalance?: number
              currencyRef?: {
                value: string
                name: string
              }
              metaData?: {
                createTime: string
                lastUpdatedTime: string
              }
            }[]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'accounting-listExpenses': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: {
              id: string
              amount: number
              currency: string
              payment_account: string
            }[]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'accounting-listVendors': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: {
              id: string
              name: string
              url: string
            }[]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'accounting-getBalanceSheet': {
    parameters: {
      query?: {
        start_date?: string
        end_date?: string
        sort_order?: string
        customer?: string
        department?: string
        date_macro?: string
        summarize_by?: string
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
          'application/json': {
            /** Format: date */
            startPeriod: string
            /** Format: date */
            endPeriod: string
            currency: string
            accountingStandard: string
            totalCurrentAssets: number | null
            totalFixedAssets: number | null
            totalAssets: number | null
            totalCurrentLiabilities: number | null
            totalLongTermLiabilities: number | null
            totalLiabilities: number | null
            openingBalanceEquity: number | null
            netIncome: number | null
            totalEquity: number | null
            totalLiabilitiesAndEquity: number | null
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'accounting-getProfitAndLoss': {
    parameters: {
      query?: {
        start_date?: string
        end_date?: string
        sort_order?: string
        customer?: string
        department?: string
        date_macro?: string
        summarize_by?: string
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
          'application/json': {
            reportName: string
            /** Format: date */
            startPeriod: string
            /** Format: date */
            endPeriod: string
            currency: string
            accountingStandard: string
            totalIncome: number | null
            grossProfit: number | null
            totalExpenses: number | null
            netOperatingIncome: number | null
            netIncome: number | null
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'accounting-getCashFlow': {
    parameters: {
      query?: {
        start_date?: string
        end_date?: string
        sort_order?: string
        customer?: string
        department?: string
        date_macro?: string
        summarize_by?: string
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
          'application/json': {
            reportName: string
            /** Format: date */
            startPeriod: string
            /** Format: date */
            endPeriod: string
            currency: string
            netIncome: number | null
            totalOperatingAdjustments: number | null
            netCashFromOperatingActivities: number | null
            netCashFromFinancingActivities: number | null
            netCashIncrease: number | null
            endingCash: number | null
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'accounting-getTransactionList': {
    parameters: {
      query?: {
        start_date?: string
        end_date?: string
        sort_order?: string
        customer?: string
        department?: string
        date_macro?: string
        payment_method?: string
        arpaid?: string
        transaction_type?: string
        sort_by?: string
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
          'application/json': {
            reportName: string
            startPeriod: string
            endPeriod: string
            currency: string
            transactions: {
              id: string
              date: string
              transactionType: string
              documentNumber?: string
              posting?: string
              name?: string
              department?: string
              memo?: string
              account?: string
              split?: string
              amount: number
              raw_data?: unknown
            }[]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'accounting-getCustomerBalance': {
    parameters: {
      query: {
        start_date?: string
        end_date?: string
        sort_order?: string
        customer: string
        department?: string
        date_macro?: string
        summarize_by?: string
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
          'application/json': {
            reportName: string
            reportDate: string
            currency: string
            entries: {
              customerId: string
              customerName: string
              balance: number
            }[]
            totalBalance: number
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'accounting-getCustomerIncome': {
    parameters: {
      query: {
        start_date?: string
        end_date?: string
        sort_order?: string
        customer: string
        department?: string
        date_macro?: string
        summarize_by?: string
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
          'application/json': {
            reportName: string
            startPeriod: string
            endPeriod: string
            currency: string
            entries: {
              customerId: string
              customerName: string
              totalIncome: number
              totalExpenses: number
              netIncome: number
            }[]
            totalIncome: number
            totalExpenses: number
            netIncome: number
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'accounting-getBankAccounts': {
    parameters: {
      query: {
        customer: string
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
          'application/json': {
            updated: string
            name: string
            accountNumber: string
            default: boolean
            created: string
            inputType: string
            phone: string
            accountType: string
            routingNumber: string
            id: string
          }[]
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'accounting-getPaymentReceipts': {
    parameters: {
      query: {
        customer_transaction_id: string
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
          'application/json': unknown
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'pta-listAccounts': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: Record<string, never>[]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'pta-listTransactions': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: Record<string, never>[]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'pta-listCommodities': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: Record<string, never>[]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'ats-listJobs': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['ats.job'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'ats-listJobOpenings': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
      }
      header?: never
      path: {
        jobId: string
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['ats.opening'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'ats-listOffers': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['ats.offer'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'ats-listCandidates': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['ats.candidate'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'ats-listDepartments': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['ats.department'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'hris-listIndividual': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: {
              id: string
              raw_data?: {
                [key: string]: unknown
              }
            }[]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'sync-readStream': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
        fields?: string[]
      }
      header?: never
      path: {
        stream: string
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: unknown[]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'sync-discover': {
    parameters: {
      query?: never
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
          'application/json': {
            streams: {
              name: string
              json_schema: {
                [key: string]: unknown
              }
              source_defined_primary_key?: string[][]
            }[]
            /** @enum {string} */
            type: 'CATALOG'
          }
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'sync-read': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          catalog: {
            streams: {
              stream: {
                name: string
                json_schema: {
                  [key: string]: unknown
                }
                source_defined_primary_key?: string[][]
              }
              /** @enum {string} */
              sync_mode: 'full_refresh' | 'incremental'
              additional_fields?: string[]
            }[]
          }
          state: {
            shared_state?: {
              [key: string]: unknown
            }
            stream_states: {
              stream_description: {
                name: string
                namespace: string
              }
              stream_state: {
                [key: string]: unknown
              }
            }[]
          }
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            record: {
              data?: unknown
              stream: string
            }
            /** @enum {string} */
            type: 'RECORD'
          }[]
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'sync-write': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': {
          messages: {
            record: {
              data?: unknown
              stream: string
            }
            /** @enum {string} */
            type: 'RECORD'
          }[]
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': (
            | {
                streams: {
                  name: string
                  json_schema: {
                    [key: string]: unknown
                  }
                  source_defined_primary_key?: string[][]
                }[]
                /** @enum {string} */
                type: 'CATALOG'
              }
            | {
                record: {
                  data?: unknown
                  stream: string
                }
                /** @enum {string} */
                type: 'RECORD'
              }
            | {
                state?: unknown
                /** @enum {string} */
                type: 'STATE'
              }
          )[]
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'fileStorage-listDriveGroups': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['unified.drivegroup'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'fileStorage-listDrives': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
        drive_group_id?: string
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['unified.drive'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'fileStorage-listFiles': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
        drive_id?: string
        folder_id?: string
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['unified.file'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'fileStorage-getFile': {
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
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['unified.file']
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'fileStorage-exportFile': {
    parameters: {
      query: {
        format: string
      }
      header?: never
      path: {
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
          'application/json': unknown
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'fileStorage-downloadFile': {
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
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': unknown
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'fileStorage-listFolders': {
    parameters: {
      query?: {
        sync_mode?: 'full' | 'incremental'
        cursor?: string | null
        page_size?: number
        drive_id?: string
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
          'application/json': {
            next_cursor?: string | null
            has_next_page: boolean
            items: components['schemas']['unified.folder'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
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
