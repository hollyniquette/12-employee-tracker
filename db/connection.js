const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employee_track",
  },
  console.log("Connected to the employee_track database.")
);

module.exports = db;
