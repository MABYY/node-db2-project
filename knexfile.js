// no need to change this file
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true, 
  migrations: {
    directory: './data/migrations', // we tell knex where we want our migration files to be
  },
  seeds: {
    directory: './data/seeds', // data to seed the database
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/dealer.db3' }, // we need a database for each environment
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/testing.db3' }, // where we want to place our sql database
  },
}
