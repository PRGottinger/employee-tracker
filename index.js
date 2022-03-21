const connection = require("./db/connection.js");
const cTable = require("console.table");
const inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");
const startMenu = () => {
  inquirer
    .prompt({
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
      ],
    })
    .then((answers) => {
      switch (answers.action) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
      }
    });
};

const viewDepartments = () => {
  connection.query("SELECT * FROM department;", (err, data) => {
    console.table(data);
    startMenu();
  });
};

const viewRoles = () => {
  connection.query("SELECT * FROM role;", (err, data) => {
    console.table(data);
    startMenu();
  });
};

const viewEmployees = () => {
  connection.query("SELECT * FROM employee;", (err, data) => {
    console.table(data);
    startMenu();
  });
};

const addDepartment = () => {
  inquirer
    .prompt({
      type: "input",
      name: "newDepartmentName",
      message: "What is the name of the department you'd like to add?",
    })
    .then((answer) => {
      connection.query(
        `INSERT INTO department (name) VALUES ("${answer.newDepartmentName}");`,
        (err, data) => {
          console.log("department successfully added");
          startMenu();
        }
      );
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newRoleName",
        message: "What is the name of the role you'd like to add?",
      },
      {
        type: "input",
        name: "newSalary",
        message: "What is the salary for the role you'd like to add?",
      },
      {
        type: "input",
        name: "newDepartment",
        message:
          "What is the Department ID number for the role you'd like to add?",
      },
    ])
    .then((answer) => {
      connection.query(
        `INSERT INTO role (title, salary, department_id) VALUES ("${answer.newRoleName}", ${answer.newSalary}, ${answer.newDepartment});`,
        (err, data) => {
          console.log("role successfully added");
          startMenu();
        }
      );
    });
};

const addEmployee = (roleChoices) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newFirstName",
        message: "What is the first name of the employee you'd like to add?",
      },
      {
        type: "input",
        name: "newLastName",
        message: "What is the employee's last name?",
      },
      {
        type: "input",
        name: "roleId",
        message: "What is the employee's role ID number?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the employee's manager ID?",
      },
    ])
    .then((answer) => {
      connection.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answer.newFirstName}", "${answer.newLastName}", "${answer.roleId}", ${answer.managerId});`,
        (err, data) => {
          console.log("employee successfully added");
          startMenu();
        }
      );
    });
};

const updateEmployee = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "updateEmployee",
          message: "What is the name of the employee you'd like to update?",
        },


startMenu();
