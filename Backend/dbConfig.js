const { Pool } = require('pg')

const pool = new Pool({
  user:'anthony',
  host:'localhost',
  database:'resourcemvp',
  password:'password',
  port:5432
})

module.exports = pool;