const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const genHTML = require("./src/genHTML");
const employees = [];

function questions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
        validate: (answer) => {
          if (answer === "") {
            return "Please enter a name";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID number?",
        validate: (answer) => {
          if (answer === "") {
            return "Please enter an ID.";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?",
        validate: (answer) => {
          if (answer === "") {
            return "Please enter an email address.";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
        validate: (answer) => {
          if (answer === "") {
            return "Please enter an office number.";
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      manager.role = manager.getRole(manager);
      employees.push(manager);
      createTeam();
    });

  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamOptions",
          message: "Which position do you want to add next?",
          choices: ["Engineer", "Intern", "I'm done adding."],
        },
      ])
      .then((choice) => {
        switch (choice.teamOptions) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            const newHTML = genHTML(employees);
            createFile(newHTML);
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter a name.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's ID number?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter an ID number.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter an email address.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter a GitHub username.";
            }
            return true;
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        engineer.role = engineer.getRole(engineer);
        employees.push(engineer);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter a name.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's ID number?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter an ID.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter an email address.";
            }
            return true;
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "Where is the intern going to school?",
          validate: (answer) => {
            if (answer === "") {
              return "Please enter a school.";
            }
            return true;
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        intern.role = intern.getRole(intern);
        employees.push(intern);
        console.log(answers);
      });
  }
}

const createFile = (newHTML) => {
  writeFile("./dist/index.html", newHTML);
};

questions();
