const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const genHTML = require("./src/genHTML");
const employees = [];

const teamQuestions = (selectData) => {
  if (employees.length === 0) {
    console.log("Let's start with the manager.");
  }

  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is their name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is their ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
      },
    ])
    .then((employeeData) => {
      if (employees.length === 0) {
        managerQuestions(employeeData);
      } else if (selectData.select === "Add an engineer") {
        engineerQuestions(employeeData);
      } else {
        internQuestions(employeeData);
      }
    });
};

const managerQuestions = (employeeData) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?",
      },
    ])
    .then((managerData) => {
      const manager = new Manager(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        managerData.officeNumber
      );
      manager.role = manager.getRole();
      employees.push(manager);
      select();
    });
};

const engineerQuestions = (employeeData) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is their GitHub username?",
      },
    ])
    .then((engineerData) => {
      const engineer = new Engineer(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        engineerData.github
      );
      engineer.role = engineer.getRole();
      employees.push(engineer);
      select();
    });
};

const internQuestions = (employeeData) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "What school do/did they attend?",
      },
    ])
    .then((internData) => {
      const intern = new Intern(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        internData.school
      );
      intern.role = intern.getRole();
      employees.push(intern);
      select();
    });
};

const select = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "select",
        choices: ["Add an engineer", "Add an intern", "I'm done adding"],
      },
    ])
    .then((data) => {
      if (
        data.select === "Add an engineer" ||
        data.select === "Add an intern"
      ) {
        teamQuestions(data);
      } else {
        const newHTML = genHTML(employees);
        createFile(newHTML);
      }
    });
};

const createFile = (newHTML) => {
  writeFile("./dist/index.html", newHTML);
  console.log("File has been written");
};

teamQuestions();
