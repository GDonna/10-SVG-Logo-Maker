const inquirer = require('inquirer');
const { circle, triangle, square } = require('./shapes');
const fs = require('fs');

const questions = [
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
  ]
  class CLI {
    constructor(text, textcolor, shape, shapecolor) {
      this.text = text,
      this.textcolor = textcolor,
      this.shape = shape,
      this.shapecolor = shapecolor
    }
  
    run() {
      return inquirer
        .prompt(questions)
        .then(answers => {
          // Access the user's answers
          const { text, textcolor, shape, shapecolor } = answers;
  
          // Initialize the chosenShape based on user input
          switch (shape){
            case 'Circle':
              this.chosenShape = new circle();
              this.chosenShape.setColor(shapecolor);
              this.chosenShape.setText(text);
              this.chosenShape.setTextColor(textcolor);
              break;
            case 'Triangle':
              this.chosenShape = new triangle();
              this.chosenShape.setColor(shapecolor);
              this.chosenShape.setText(text);
              this.chosenShape.setTextColor(textcolor);
              break;
            case 'Square':
              this.chosenShape = new square();
              this.chosenShape.setColor(shapecolor);
              this.chosenShape.setText(text);
              this.chosenShape.setTextColor(textcolor);
              break;
            default:
              console.log('Invalid shape choice');
              return;
          }
  
          // Call a function to render the logo using the chosen shape
          this.renderLogo(text, textcolor);
        });
    }
  
    renderLogo(text, textcolor) {
      if (this.chosenShape) {
        // Render the chosen shape and apply the specified text and text color
        const logo = this.chosenShape.render(text, textcolor);
        fs.writeFile('logo.svg', logo, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
        // You can save the logo to a file or display it as needed
        console.log('Generated Logo:', logo);
      } else {
        console.log('No shape selected. Cannot render the logo.');
      }
    }
  }
  
  module.exports = CLI;