import mysql2 from "mysql2";

import inquirer from "inquirer";

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

getData();
function getRoles() {
  console.log("Running getRoles");
  connection.query("SELECT * FROM `roles`", function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  });
}

getData();
function getEmployees() {
  console.log("Running getEmployees");
  connection.query(
    "SELECT * FROM `employees`",
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
}
