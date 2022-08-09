// // const mysql = require("mysql2");
// const inquirer = require("inquirer");
import inquirer from "inquirer";
// const fs = require("fs");
import * as fs from "fs";

const PORT = process.env.port || 3001;

const questions = [
  {
    type: "checkbox",
    name: "add_department",
    message: "What would you like to do?",
    choices: ["Add Department"],
  },
  {
    type: "input",
    name: "department_name",
    message: "What is the name of the department you are adding?",
  },
  {
    type: "checkbox",
    name: "add_role",
    message: "What would you like to do?",
    choices: ["Add Role"],
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
    type: "checkbox",
    name: "add_employee",
    message: "What would you like to do?",
    choices: ["Add Employee"],
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
  {
    type: "checkbox",
    name: "update_role",
    message: "What would you like to do?",
    choices: ["Update Employee Role"],
  },
  {
    type: "list",
    name: "employee_list",
    message: "Which employee do you want to update?",
    choices: [],
  },
];

async function startApp() {
  await inquirer.prompt(questions).then((data) => {});
}

startApp();
