// importing modules
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const genHTML = require("./src/genHTML");
const employees = [];

// If there are no elements in the employees array, then let's initiate the prompts.
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
    // If no elements in the employee array yet, then move on to adding the manager to the array. Otherwise, if we choose to add an engineer, then do that. Otherwise, move on to adding an intern.
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

// Adding manager to array.
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

//  Adding engineer to array.
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

// Adding intern to array.
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

// Option to add more engineers, add more interns, or move on to assemble the team.
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

// Write the responses to an HTML compiler file.
const createFile = (newHTML) => {
  writeFile("./dist/index.html", newHTML);
  console.log("File has been written");
};

// Fire the primary function.
teamQuestions();
