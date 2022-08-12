// mysql2 npm
import mysql2 from "mysql2";

// inquirer npm
import inquirer from "inquirer";

// database import from server.js
import db from "./server.js";

// opens a list with first set of options that are prompted when the app is ran
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

// messages that appear when the specific option was selected
const appOptions = [
  {
    type: "input",
    name: "add_department",
    message: "What is the name of the department you are adding?",
  },
  {
    type: "input",
    name: "add_role",
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

// if data === specific option, another function is then ran to gather data
async function getData() {
  await inquirer.prompt(startApp).then((data) => {
    console.log(data.app_start);
    if (data.app_start === "View All Departments") {
      getDepartments();
    } else if (data.app_start === "View All Roles") {
      getRoles();
    } else if (data.app_start === "View All Employees") {
      getEmployees();
    } else if (data.app_start === "Add Department") {
      addDepartment();
    } else if (data.app_start === "Add Role") {
      addRole();
    } else if (data.app_start === "Add Employee") {
      addEmployee();
    } else if (data.app_start === "Update Employee Role") {
      updateRole();
    } else {
      console.log(err);
    }
  });
}

// function that is ran if user selects "View all departments"
getData();
function getDepartments() {
  console.log("Running getDepartments");
  db.query("SELECT * FROM department", function (err, results) {
    if (err) {
      console.log(err);
    } else {
      console.table(results);
      getData();
    }
  });
}

// function that is ran if user selects "View all roles"
function getRoles() {
  console.log("Running getRoles");
  db.query("SELECT * FROM roles", function (err, results) {
    if (err) {
      console.log(err);
    } else {
      console.table(results);
      getData();
    }
  });
}

// function that is ran if user selects "View all employees"
function getEmployees() {
  console.log("Running getEmployees");
  db.query("SELECT * FROM employee", function (err, results) {
    if (err) {
      console.log(err);
    } else {
      console.table(results);
      getData();
    }
  });
}

// function that is ran if user selects "Add department"

// function addDepartment(departmentName) {
//   console.log("Running addDepartment");
//   db.query(
//     "INSERT INTO department (department_name) VALUES (?)",
//     [departmentName],
//     (err, results) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.table(results), getData();
//       }
//     }
//   );
// }
