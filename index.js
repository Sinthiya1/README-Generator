const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your application title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is your application description?',
        name: 'description',
      },
      {
        type: "confirm",
        message: "Do you want to add a table for contents?",
        name: "contents",
        default: true
    },
      {
        type: "input",
        message: "What are the usage of your application?",
        name: "usage",
      },
      {
        type: "input",
        message: "Provide the installation process of your application.?",
        name: "installation",
      },
      {
        type:"list",
        message:"License used for this application.?",
        name:"license",
        choices:['License Apache',
                 'Mozilla', 
                 'License MIT', 
                 'ISC',
                 'Boost',]
    },
    {
        type:"input",
        message:"Contributor of this application?",
        name:"contribute",
    },
    {
        type: "input",
        message:"Which type of command use the test?",
        name:"test",
        default:"node package manager test",
    },
    {
        type: "input",
        message:"Provide your Email if you have questions.",
        name:"questions",
       
    },
];

// function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, (err) =>
 err ? console.error(err) : console.log('Success!')
  );
}


// function to initialize program
function init() {
inquirer.prompt(questions)
.then((res)=>{
    const readmeInfo = generateMarkdown(res)
    console.log(res);
    writeToFile("README.md", readmeInfo)
})
}

// function call to initialize program

init();
