// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # title ${data.title}

  |         Table of Content      |
  | ----------------------------- |
  | [Description](#description)   |
  | [Installation](#installation) |
  | [Usage](#usage)               |
  | [License](#license)           |
  | [Contribution](#contribution) |
  | [Tests](#tests)                |
  | [Questions](#questions)       |
 
  ## Description 
  ${data.description} 
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## License 
  ${data.license}
  ## Contribution 
  ${data.contribution}
  ## Tests 
  ${data.test}
  ## Questions 
  * For any other questions about the application please contact me by emailing: ${data.email}
  * To see other applications developed by me please visit my GitHub profile: [${data.github}](https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;
