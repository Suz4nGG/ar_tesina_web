const mysql = require("mysql2")

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysqlpw',
  port: 49153,
  database: 'ar_data'
}).promise()

export { pool }