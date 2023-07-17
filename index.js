const inquirer = require("inquirer");

function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "View all departments":
          // Call a function to view all departments
          break;
        case "View all roles":
          // Call a function to view all roles
          break;
        case "View all employees":
          // Call a function to view all employees
          break;
        case "Add a department":
          // Call a function to add a department
          break;
        case "Add a role":
          // Call a function to add a role
          break;
        case "Add an employee":
          // Call a function to add an employee
          break;
        case "Update an employee role":
          // Call a function to update an employee role
          break;
        case "Exit":
          // Exit the application
          break;
        default:
          console.log(`Invalid action: ${answers.action}`);
          break;
      }
    });
}
