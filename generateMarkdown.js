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

## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation)
* [Usage Information](#usage)
* [Contribution Guidleines](#contribution)
* [Test Instructions](#test)
* [GitHub](#github)
* [Email](#email)

<h2 id="description">Description</h2>
${data.description}

<h2 id="installation">Installation Instructions</h2>
${data.installation}

<h2 id="usage">Usage Information</h2>
${data.usage}

<h2 id="contribution">Contribution Guidelines</h2>
${data.contribution}

<h2 id="test">Test Instructions</h2>
${data.test}

## GitHub
[${data.github}'s GitHub](https://github.com/${data.github})


## Email
<a href="mailto:${data.email}">${data.email}</a>
`;
}

module.exports = generateMarkdown;