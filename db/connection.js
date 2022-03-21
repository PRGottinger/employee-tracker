const mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "grandMA7grundy",
  database: "employeeDatabase",
});

module.exports = connection;
