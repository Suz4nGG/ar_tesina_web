const mysql = require("mysql2")

const pool = mysql.createPool({
  host: 'localhost',
  user: 'SCX24',
  password: 'MYSQL24',
  port: 3306,
  database: 'ar_data'
}).promise()

export { pool }