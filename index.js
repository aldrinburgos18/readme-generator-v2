const inquirer = require("inquirer");

// array of questions for user
const questions = [
  "Provide contributing guidelines:",
  "Provide instructions for use:",
  "Please select a license for your work (if any):",
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
        validate: (usernameInput) => {
          if (usernameInput) {
            return true;
          } else {
            console.log("Please enter your Github username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your e-mail address:",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your e-mail address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "title",
        message: "Enter the title of your project:",
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter the title of your project!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "link",
        message: "Enter the link to your project's Github repository:",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log(
              "Please enter the link to your project's Github repository!"
            );
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project:",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please provide a description of the project!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message: "Give a brief explanation on how to install your project:",
        validate: (installationInput) => {
          if (installationInput) {
            return true;
          } else {
            console.log(
              "Please give a brief explanation on how to install your project!"
            );
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmScreenshot",
        message: "Would you like to add some screenshots?",
        default: true,
      },
      {
        type: "input",
        name: "screenshot",
        message:
          "Enter your screenshot's relative path without single quotes: (ex. './assets/img/screenshot1.png')",
        when: ({ confirmScreenshot }) => {
          if (confirmScreenshot) {
            return true;
          } else {
            return false;
          }
        },
        validate: (screenshotInput) => {
          if (screenshotInput) {
            return true;
          } else {
            console.log(
              "Please enter your screenshot's relative path without single quotes:"
            );
          }
        },
      },
      {
        type: "input",
        name: "contributing",
        message: "Provide contributing guidelines:",
        validate: (contributingInput) => {
          if (contributingInput) {
            return true;
          } else {
            console.log("Please provide contributing guidelines!");
          }
        },
      },
      {
        type: "input",
        name: "instructions",
        message: "Provide instructions for use:",
        validate: (instructionsInput) => {
          if (instructionsInput) {
            return true;
          } else {
            console.log("Please provide instructions for use!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "license",
        message: "Please select your work's license (if any):",
        choices: [
          "MIT",
          "lgpl-3.0",
          "mpl-2.0",
          "agpl-3.0",
          "unlicense",
          "apache-2.0",
          "gpl-3.0",
          "none",
        ],
      },
    ])
    .then((mdContent) => {
      console.log(mdContent);
      return mdContent;
    });
}

// function call to initialize program
init();
