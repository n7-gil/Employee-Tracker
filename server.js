// // const mysql = require("mysql2");

import inquirer from "inquirer";

import * as fs from "fs";

const PORT = process.env.port || 3001;

const questions = [
  {
    type: "list",
    name: "add_department",
    message: "What would you like to do?",
    choices: [
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Employee Role",
    ],
  },
  {
    type: "input",
    name: "department_name",
    message: "What is the name of the department you are adding?",
  },
  {
    type: "input",
    name: "role_name",
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

async function startApp() {
  await inquirer.prompt(questions).then((data) => {});
}

startApp();
