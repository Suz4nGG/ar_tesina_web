const mysql = require("mysql2");
// * windows
//const pool = mysql
//  .createPool({
//    host: "localhost",
//    user: "SCX24",
//    password: "MYSQL24",
//    port: 3306,
//    database: "ar_data",
//  })
//  .promise();
// * Linux
// const pool = mysql
//   .createPool({
//     host: "localhost",
//     user: "root",
//     password: "mysqlpw",
//     port: 32768,
//     database: "ar_data",
//   })
//   .promise();
// * MAC
const pool = mysql
  .createPool({
    host: "0.0.0.0",
    user: "scxg",
    password: "1234",
    port: 32773,
    database: "ar_data",
  })
  .promise();

export { pool };
