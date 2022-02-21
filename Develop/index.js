const  fstat  = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application
require('inquirer')
require('fs')
require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the title of your project?',
        name:'title',
        default:'title'
    },
    {
        type:'input',
        message:'What is your github?',
        name:'github',
        default:'lisaCR01'
    },
    {
        type:'input',
        message:'what is your email?',
        name:'email',
        default:'lisagunn01@gmail.com'
    },
    {
        type:'input',
        message:'Please describe your project:',
        name:'description',
        default:'blah blah blah'
    },
    {
        type:'input',
        message:'Please type the installation instructions:',
        name:'installation',
        default:'npm i'
    },
    {
        type:'input',
        message:'Please explain any important information for the user:',
        name:'usage',
        default:'There is no important information.'
    },
    {
        type:'list',
        message:'Is it possible for other users to contribute to this repository?',
        name:'contribution',
        choices: ['Users can contribute','Users can not contribute']
    },
    {
        type:'input',
        message:'What tests does your application require?',
        name:'test',
        default:'npm test'
    },
    {
        type:'list',
        message:'Which license does your project require',
        name:'license',
        choices: ['MIT','Apache 2.0','GNU GPL 3.0','BSD 3','BSL 1.0','no license' ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fstat.writeFile(fileName,generateMarkdown(data),(err)=>
    err ? console.error(err) :console.log ('readme written'))

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) =>
    {
        console.log(generateMarkdown(data));
        writeToFile('README-generated.md',data)
    }
    );
}

// Function call to initialize app
init();
