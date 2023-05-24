// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT': 
      return`![Github License](https://img.shields.io/badge/LICENSE-MIT-pink)`
    case 'Apache':
      return`![Github License](https://img.shields.io/badge/LICENSE-APACHE-lavender)`
    case 'GNU':
      return`![Github License](https://img.shields.io/badge/LICENSE-APACHE-lightgreen)`
    case 'none':
      return`![Github License](https://img.shields.io/badge/LICENSE-none-lightblue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README --- I don't understand this..
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.test}

## GitHub
[${data.github}'s GitHub](https://github.com/${data.github})


## Email
${data.email}
`;
}

module.exports = generateMarkdown;