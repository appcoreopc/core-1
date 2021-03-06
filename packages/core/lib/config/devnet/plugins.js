module.exports = {
  '@arkecosystem/core-event-emitter': {},
  '@arkecosystem/core-config': {},
  '@arkecosystem/core-logger': {},
  '@arkecosystem/core-logger-winston': {
    transports: {
      console: {
        options: {
          colorize: true,
          level: process.env.ARK_LOG_LEVEL || 'debug'
        }
      },
      dailyRotate: {
        options: {
          filename: process.env.ARK_LOG_FILE || `${process.env.ARK_PATH_DATA}/logs/core/${process.env.ARK_NETWORK_NAME}/%DATE%.log`,
          datePattern: 'YYYY-MM-DD',
          level: process.env.ARK_LOG_LEVEL || 'debug',
          zippedArchive: true
        }
      }
    }
  },
  '@arkecosystem/core-database': {
    snapshots: `${process.env.ARK_PATH_DATA}/snapshots/${process.env.ARK_NETWORK_NAME}`
  },
  '@arkecosystem/core-database-sequelize': {
    // dialect: 'sqlite',
    // storage: process.env.ARK_DB_STORAGE || `${process.env.ARK_PATH_DATA}/database/${process.env.ARK_NETWORK_NAME}10.sqlite`,
    host: process.env.ARK_DB_HOST || 'localhost',
    dialect: process.env.ARK_DB_DIALECT || 'postgres',
    username: process.env.ARK_DB_USERNAME || 'ark',
    password: process.env.ARK_DB_PASSWORD || 'password',
    database: process.env.ARK_DB_DATABASE || 'ark_devnet',
    logging: process.env.ARK_DB_LOGGING || false,
    redis: {
      host: process.env.ARK_REDIS_HOST || 'localhost',
      port: process.env.ARK_REDIS_PORT || 6379
    }
  },
  '@arkecosystem/core-transaction-pool': {},
  '@arkecosystem/core-transaction-pool-redis': {
    enabled: process.env.ARK_TRANSACTION_POOL_ENABLED || true,
    key: 'ark',
    maxTransactionsPerSender: process.env.ARK_TRANSACTION_POOL_MAX_PER_SENDER || 100,
    whitelist: [],
    redis: {
      host: process.env.ARK_REDIS_HOST || 'localhost',
      port: process.env.ARK_REDIS_PORT || 6379
    }
  },
  '@arkecosystem/core-p2p': {
    host: process.env.ARK_P2P_HOST || '0.0.0.0',
    port: process.env.ARK_P2P_PORT || 4002
  },
  '@arkecosystem/core-blockchain': {
    fastRebuild: true
  },
  '@arkecosystem/core-api': {
    enabled: process.env.ARK_API_ENABLED || true,
    host: process.env.ARK_API_HOST || '0.0.0.0',
    port: process.env.ARK_API_PORT || 4003,
    whitelist: ['*']
  },
  '@arkecosystem/core-webhooks': {
    enabled: process.env.ARK_WEBHOOKS_ENABLED || false,
    database: {
      dialect: 'sqlite',
      storage: `${process.env.ARK_PATH_DATA}/database/${process.env.ARK_NETWORK_NAME}/webhooks.sqlite`,
      logging: process.env.ARK_DB_LOGGING || false
    },
    redis: {
      host: process.env.ARK_REDIS_HOST || 'localhost',
      port: process.env.ARK_REDIS_PORT || 6379
    },
    server: {
      enabled: process.env.ARK_WEBHOOKS_API_ENABLED || false,
      host: process.env.ARK_WEBHOOKS_HOST || '0.0.0.0',
      port: process.env.ARK_WEBHOOKS_PORT || 4004,
      whitelist: ['127.0.0.1', '192.168.*']
    }
  },
  '@arkecosystem/core-graphql': {
    enabled: process.env.ARK_GRAPHQL_ENABLED || false,
    host: process.env.ARK_GRAPHQL_HOST || '0.0.0.0',
    port: process.env.ARK_GRAPHQL_PORT || 4005,
    path: '/graphql',
    graphiql: true
  },
  '@arkecosystem/core-forger': {
    hosts: ['http://127.0.0.1:4002']
  },
  '@arkecosystem/core-json-rpc': {
    enabled: process.env.ARK_JSON_RPC_ENABLED || false,
    host: process.env.ARK_JSON_RPC_HOST || '0.0.0.0',
    port: process.env.ARK_JSON_RPC_PORT || 8080,
    allowRemote: true,
    whitelist: ['127.0.0.1', '192.168.*']
  }
}
