const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSVG } = require('./assets/'); //HOW IS THIS WORKING?

class CLI {
  constructor() {
    this.title = '';
    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];
  }

  run() {
    return inquirer
      .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter Three Characters',
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'Enter Text Color',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape: Circle, Triangle, Square',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'What is the color of the shape?',
        },
      ])
        .then((answers) => {
            const { text, textcolor, shape, shapecolor } = answers;
            const svg = createSVG(text, textcolor, shape, shapecolor);
            return writeFile(join(__dirname, '..', 'output', 'logo.svg'), svg); //WHAT IS THIS DOING? 
        });
  }
}

module.exports = CLI;