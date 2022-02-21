// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'no license' ){
  return 'not applicable'}
  if (license == 'MIT'){
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'}
  if (license == 'Apache 2.0'){
  return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'}
  if (license == 'GNU GPL 3.0'){
  return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'}
  if (license == 'BSD 3'){
  return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'}
  if (license == 'BSL 1.0'){
  return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'}
    
}

// Computer called function generateMarkdown to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description} 

  |         Table of Content      |
  | ----------------------------- |
  | [Installation](#installation) |
  | [Usage](#usage)               |
  | [License](#license)           |
  | [Contribution](#contribution) |
  | [Tests](#tests)               |
  | [Questions](#questions)       |
 
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## License 
  The license is:${data.license}
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
