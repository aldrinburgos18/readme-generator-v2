const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// function to write README file
const writeToFile = (data) => {
  fs.writeFile("./dist/readme.md", data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`
    Your readme file has been successfully created! Check /dist folder.`);
  });
};

// function to initialize program
const init = () => {
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
        type: "confirm",
        name: "confirmScreenshot",
        message: "Would you like to add some screenshots?",
        default: true,
      },
    ])
    .then((projectData) => {
      if (projectData.confirmScreenshot) {
        return addScreenshot(projectData);
      } else {
        return projectData;
      }
    });
};

function addScreenshot(projectData) {
  if (!projectData.screenshots) {
    projectData.screenshots = [];
  }
  return inquirer
    .prompt([
      {
        type: "input",
        name: "screenshot",
        message:
          "Enter your screenshot's relative path without single quotes: (ex. './assets/img/screenshot1.png')",
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
        name: "screenshotDescription",
        message: "Enter a brief description about this screenshot:",
        validate: (screenshotDescriptionInput) => {
          if (screenshotDescriptionInput) {
            return true;
          } else {
            console.log(
              "Please enter a brief description about this screenshot!"
            );
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddScreenshot",
        message: "Would you like to add more screenshots?",
        default: "false",
      },
    ])
    .then((screenshotData) => {
      projectData.screenshots.push({
        screenshot: screenshotData.screenshot,
        description: screenshotData.screenshotDescription,
      });
      if (screenshotData.confirmAddScreenshot) {
        return addScreenshot(projectData);
      }
      console.log(projectData);
      return projectData;
    });
}

// function call to initialize program
init()
  .then((mdContent) => {
    return generateMarkdown(mdContent);
  })
  .then((markdown) => {
    return writeToFile(markdown);
  })
  .catch((err) => {
    console.log(err);
  });
