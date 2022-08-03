

const inquirer = require("inquirer");
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
//import {generateManager, generateEngineer, generateIntern, generateBody} from './scr/script.js'
const generate = require("./scr/script");
const fs = require('fs');

let employees = {
    eng:[],
    interns:[]

};

const manager = [
  {
    type: "input",
    name: "name",
    message: "Enter the Managers name: ",
  },
  {
    type: "input",
    name: "id",
    message: "Enter your Employee ID: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Email: ",
  },
  {
    type: "input",
    name: "number",
    message: "Please enter your office number",
  },
];

const role = {
  type: "list",
  name: "role",
  message: "Please enter next employee or Exit",
  choices: ["Engineer", "Intern", "Exit"],
};

const engineer = [
  {
    type: "input",
    name: "name",
    message: "Enter Engineer's name: ",
  },
  {
    type: "input",
    name: "id",
    message: "Enter Engineer's Employee ID: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Engineer's Email: ",
  },
  {
    type: "input",
    name: "github",
    message: "Enter Engineer's github: ",
  },
];

const intern = [
  {
    type: "input",
    name: "name",
    message: "Enter intern's name: ",
  },
  {
    type: "input",
    name: "id",
    message: "Enter intern's Employee ID: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter intern's Email: ",
  },
  {
    type: "input",
    name: "school",
    message: "Enter intern's school name:",
  },
];

 function init() {
  inquirer
    .prompt(manager)
    .then((answers) => {
        let mng = new Manager(answers.name, answers.id, answers.email, answers.number);
        employees.Manager = mng;
    })
    .then((ans) => {
      rolePrompt();
    });
}

function rolePrompt() {
  inquirer.prompt(role).then((ans) => {
    if (ans.role === "Engineer") {
      engineerPrompt();
    } else if (ans.role === "Intern") {
      internPrompt();
    } else {
      console.log(employees)
      let html = generate.generateManager(employees.Manager);
      employees.eng.forEach((e) =>{
        html += generate.generateEngineer(e);
      });
      employees.interns.forEach((e) =>{
        html += generate.generateIntern(e);
      });
      const body = generate.generateBody();
      var htmlContent = `<html>${body} ${html}</html>`;
      fs.writeFile('dist/index.html', htmlContent, (error) => { /* handle error */ });
      //const render = require("./scr/script.js")
      return;
    }
   
  })
}

function engineerPrompt() {
  inquirer.prompt(engineer).then((answers) => {
    let eng = new Engineer(answers.name, answers.id, answers.email, answers.github);
     employees.eng.push(eng);
    rolePrompt()
  });
}

function internPrompt() {
  inquirer.prompt(intern).then((answers) => {
    let eng = new Intern(answers.name, answers.id, answers.email, answers.school);
     employees.interns.push(eng);
    rolePrompt()
  });
}


init();
