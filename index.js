// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'descritpion',
      message: 'Enter a detailed description for your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information for your project: ',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Enter the contribution guidelines for your project: ',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter any testing instructions',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username: ',
    },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email adress: ',
      },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
``

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
