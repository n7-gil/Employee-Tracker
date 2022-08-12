import mysql from "mysql2";

// connection to employeeTracker_db created by sql
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "employeeTracker_db",
  },
  console.log(`Connected to the employeeTracker_db database.`)
);

db.query("USE employeeTracker_db", function (err, results) {
  // console.log("success!");
});

// exporting the database, allowing import to index.js
export default db;
