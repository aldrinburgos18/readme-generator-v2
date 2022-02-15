//function to generate screenshot
function generateScreenshot(screenshot) {
  if (screenshot) {
    return `![Alt text](${screenshot} "Screenshot")`;
  } else {
    return ``;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}  
    
  **Link to deployed application:** [${data.link}](${data.link})
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.instructions}
  ${generateScreenshot(data.screenshot)}
  
  ## Contributing
  ${data.contributing}
  
  ## Questions
  If you have any additional questions, please feel free to contact me at:  
  E-mail: ${data.email}  
  Github: [${data.username}](https://github.com/${data.username})
  
  ## License
  ${data.license}
  `;
}

module.exports = generateMarkdown;
