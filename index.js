// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about?'
    },
    {
        //make this type: list 
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installing your application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What would you like to add in the usage information section?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache', 'GNU', 'none'],
        message: 'What license does this project use?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email'
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// }
function writeToFile(fileName, data) {
   fs.writeFileSync('./output/' + fileName, data)
   console.log('Thank you for using my readme generator!')
    }
// TODO: Create a function to initialize app --- How ?
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        const Markdown = generateMarkdown(answers)
        console.log(Markdown)
        writeToFile('readme.md', Markdown)
    })
}

// Function call to initialize app
init();