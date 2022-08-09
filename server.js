import mysql2 from "mysql2";

import inquirer from "inquirer";

// const connection = mysql2.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "employeeTracker_db",
// });

const PORT = process.env.port || 3001;

const startApp = [
  {
    type: "list",
    name: "app_start",
    message: "What would you like to do?",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Employee Role",
    ],
  },
];

const appOptions = [
  {
    type: "input",
    name: "add_department",
    message: "What is the name of the department you are adding?",
  },
  {
    type: "input",
    name: "add_name",
    message: "What is the name of the role you are adding?",
  },
  {
    type: "input",
    name: "role_salary",
    message: "What is the salary of the role?",
  },
  {
    type: "input",
    name: "role_department",
    message: "Which department does the role belong to?",
  },
  {
    type: "input",
    name: "firstName",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "lastName",
    message: "What is the employee's last name?",
  },
  {
    type: "input",
    name: "employee_role",
    message: "What is the employee's role?",
  },
  {
    type: "input",
    name: "employee_manager",
    message: "Who is the employee's manager?",
  },
];

async function getData() {
  await inquirer.prompt(startApp).then((data) => {
    console.log(data.app_start);
    if (data.app_start === "View All Departments") {
      getDepartments();
    }
  });
}

getData();
function getDepartments() {
  console.log("Running getDepartments");
  connection.query(
    "SELECT * FROM `department`",
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
}
