import mysql from "mysql2";

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "employeeTracker_db",
  },
  console.log(`Connected to the employeeTracker_db database.`)
);

// db.connect(function (err) {
//   if (err) {
//     return console.error("error: " + err.message);
//   }

//   console.log("Connected to the MySQL server.");
// });

// Query database
db.query("USE employeeTracker_db", function (err, results) {
  console.log("success!");
});

export default db;
