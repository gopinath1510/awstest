const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'forms',
    password: 'fullstackdev',
    port: 5432
})

module.exports = pool