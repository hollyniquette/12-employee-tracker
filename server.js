const inquirer = require("inquirer");
const Department = require("./models/Department");
const Role = require("./models/Role");
const Employee = require("./models/Employee");

const department = new Department();
const employee = new Employee();
const role = new Role();

const mainPrompt = () => {
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
    .then(async (answers) => {
      switch (answers.action) {
        case "View all departments":
          console.clear();
          console.table(await department.getAll());
          goBackHome();
          break;
        case "View all roles":
          console.clear();
          console.table(await role.getAll());
          goBackHome();
          break;
        case "View all employees":
          console.clear();
          console.table(await employee.getAll());
          goBackHome();
          break;
        case "Add a department":
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "What is the name of the new department?",
              },
            ])
            .then((answer) => {
              const department = new Department(answer.name);
              department.addDepartment();
              goBackHome();
            });
          break;
        case "Add a role":
          const departmentResults = await department.getAll();
          const departmentList = departmentResults?.map((department) => ({
            name: department.name,
            value: department.department_id,
          }));
          inquirer
            .prompt([
              {
                type: "input",
                name: "title",
                message: "What is the name of the new role?",
              },
              {
                type: "number",
                name: "salary",
                message: "What is the salary of the new role?",
              },
              {
                type: "list",
                name: "department",
                message: "Which department does this role fall under?",
                choices: departmentList,
              },
            ])
            .then((answer) => {
              const role = new Role(
                answer.title,
                answer.salary,
                answer.department
              );
              role.addRole();
              goBackHome();
            });
          break;
        case "Add an employee":
          const roleResults = await role.getAll();
          const managerResults = await employee.getAll();
          const roleList = roleResults?.map((role) => ({
            name: role.title,
            value: role.role_id,
          }));
          const managerList = managerResults?.map((manager) => ({
            name: `${manager.first_name} ${manager.last_name}`,
            value: manager.employee_id,
          }));
          inquirer
            .prompt([
              {
                type: "input",
                name: "first_name",
                message: "What is the new employee's first name?",
              },
              {
                type: "input",
                name: "last_name",
                message: "What is the new employee's last name?",
              },
              {
                type: "list",
                name: "role_id",
                message: "What is the new employee's role?",
                choices: roleList,
              },
              {
                type: "list",
                name: "manager_id",
                message: "Who is the new employee's manager?",
                choices: [
                  ...managerList,
                  "This employee does not have a manager",
                ],
              },
            ])
            .then((answers) => {
              const managerId =
                answers.manager_id === "This employee does not have a manager"
                  ? null
                  : answers.manager_id;
              const employee = new Employee(
                answers.first_name,
                answers.last_name,
                answers.role_id,
                managerId
              );
              employee.addEmployee();
              goBackHome();
            });
          break;
        case "Update an employee role":
          const results = await role.getAll();
          const employeeResults = await employee.getAll();
          const roles = results?.map((role) => ({
            name: role.title,
            value: role.role_id,
          }));
          const employees = employeeResults?.map((employee) => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.employee_id,
          }));
          inquirer
            .prompt([
              {
                type: "list",
                message: "Which employee's role do you want to update?",
                name: "employee_id",
                choices: employees,
              },
              {
                type: "list",
                message: "What is this employee's new role?",
                name: "role_id",
                choices: roles,
              },
            ])
            .then((answers) => {
              const employee = new Employee(
                null,
                null,
                answers.role_id,
                answers.employee_id
              );
              employee.updateRole();
              goBackHome();
            });
          break;
        case "Exit":
          quit();
          break;
        default:
          console.log(`Invalid action: ${answers.action}`);
          break;
      }
    });
};

function goBackHome() {
  console.log("Going back home...");
  setTimeout(mainPrompt, 3000);
}

function quit() {
  console.log("Exiting the employee tracker...");
  process.exit(0);
}

mainPrompt();
