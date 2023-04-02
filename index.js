//Required node packages for app to run
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require("./lib/generateSVG");

//Object containing the user prompts from inquirer
const questions = [
    {
        type: 'input',
        message: "Please provide three characters for your logo.",
        name: 'chars',
        validate: function (answer) {
          if (answer.length !== 3) {
            return "Logo must only contain THREE characters."
          } return true;
        }
    },
    {
      type: 'input',
      message: "Please enter a color for the logo's text.",
      name: 'textColor',
      validate: function (answer) {
        if (answer = '') {
          return "Please enter a color a the logo's text."
        } return true;
      }
    },
    {
      type: 'input',
      message: "Please enter a background color (i.e. pink, blue, gray) or input the hexidecimal value of a color. Invalid values will return as black.",
      name: 'backgroundColor',
      validate: function (answer) {
        if (answer = '') {
          return "Please choose a background color."
        } return true;
      }
    },
    {
      type: 'list',
      message: "Please choose a shape for the logo.",
      choices: ['Circle', 'Square', 'Triangle'],
      name: 'shape',
    },

];

//Function to write and create SVG file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
err ? console.error(err) : console.log('SVG successfully created!')
);
}
    //Begins prompt and uses answers to create the SVG file
    function init () {
      inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      const svgContent = generateSVG(answers);
      console.log(svgContent);
      writeToFile('logo.svg', svgContent);
    })
    .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      })};

      
      //Intializes app
      init();
    
    
