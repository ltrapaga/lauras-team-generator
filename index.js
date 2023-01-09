// Imports node_modules
const fs = require("fs");
const inquirer = require("inquirer");

// Function import for HTML creation
const teamGeneratorHTML = require("./src/teamGenerator");

// Imports Manager, Engineer, and Intern objects
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
// Creates an empty array for the data input by the user to push to
const team = [];

// managerPrompt function
const managerPrompt = () => {
  // Initializes inquirer
  return (
    inquirer
      .prompt([
        // Prompts the user to input the manager's name
        {
          type: "input",
          name: "name",
          message: "What is the manager's name?",
        },
        // Prompts the user to input the manager's id
        {
          type: "input",
          name: "id",
          message: "What is the manager's ID?",
        },
        // Prompts the user to input the manager's email
        {
          type: "input",
          name: "email",
          message: "What is the manager's email?",
        },
        // Prompts the user to input the manager's office number
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager's office number?",
        },
      ])
      // Gets responses input by the user
      .then((managerData) => {
        const { name, id, email, officeNumber } = managerData;
        // Creates a new object with the values input by the user = manager
        const manager = new Manager(name, id, email, officeNumber);
        // Pushes the new manager object to the team array
        team.push(manager);
        // Prints the new team array containing the updated manager data to the console
        console.log(manager);
      })
  );
};

// employeePrompt function
const employeePrompt = () => {
  // Initializes inquirer
  return (
    inquirer
      .prompt([
        // Prompts the user to choose the employee role type
        {
          type: "list",
          name: "roleType",
          message: "Which employee are you adding?",
          choices: ["Engineer", "Intern"],
        },
        // Prompts the user to input the employee's name
        {
          type: "input",
          name: "name",
          message: `What is the employee's name?`,
        },
        // Prompts the user to input the employee's id
        {
          type: "input",
          name: "id",
          message: `What is the employee's id?`,
        },
        // Prompts the user to input the employee's email
        {
          type: "input",
          name: "email",
          message: `What is the employee's email?`,
        },
        // If the employee role type is = Engineer, then this will prompt the user to input the employee's github
        {
          type: "input",
          name: "github",
          message: `What is the employee's github?`,
          when: (input) => input.roleType === "Engineer",
        },
        // If the employee role type is = Intern, then this will prompt the user to input the employee's school
        {
          type: "input",
          name: "school",
          message: `What is the employee's school?`,
          when: (input) => input.roleType === "Intern",
        },
        // Prompts the user to choose if would like to add another employee's information
        {
          type: "confirm",
          name: "addAnother",
          message: `Would you like to add another employee?`,
          default: false,
        },
      ])
      // Gets responses input by the user
      .then((employeeData) => {
        let { roleType, name, id, email, github, school, addAnother } =
          employeeData;
        // Undefined variable = employee
        let employee;
        // If the employee role type = Engineer, then this will create a new object with the values input by the user = employee
        if (roleType === "Engineer") {
          employee = new Engineer(name, id, email, github);
          console.log(employee);
        }
        // If the employee role type = Intern, then this will create a new object with the values input by the user = employee
        else if (roleType === "Intern") {
          employee = new Intern(name, id, email, school);
          console.log(employee);
        }
        // Pushes the new employee object to the team array
        team.push(employee);
        // If the user chose to add another employee's information, then this will call the employeePrompt function again
        if (addAnother) {
          return employeePrompt(team);
        }
        // If the user chose not to add another employee's information, then this will print the new team array containing the updated employee data to the console
        else {
          return team;
        }
      })
  );
};

// writeReadme function will use the data input by the user to write an index.html file when it is called
const writeHTMLFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    console.log(data),
    /* Ternerary statement that says: if the function fails to execute, then console.log(err);
       else, print "HTML with team data successfully created" */
      err ? console.log(err) : console.log("HTML with team data successfully created.");
  });
};

// Calls managerPrompt function for user to input manager information
managerPrompt()
  // Calls employeePrompt function for user to choose an employee type (Engineer/Intern) and then input the appropriate information
  .then(employeePrompt)
  // Calls teamGeneratorHTML function to use new team array for employee cards
  .then((team) => {
    return teamGeneratorHTML(team);
  })
  // Calls writeHTMLFile function to create index.html
  .then((fileHTML) => {
    return writeHTMLFile(fileHTML);
  })
  // If there is an error, prints error to the console
  .catch((err) => {
    console.log(err);
  });
